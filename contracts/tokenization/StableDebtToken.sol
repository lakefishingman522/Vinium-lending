// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.8;

import {Context} from '@openzeppelin/contracts/GSN/Context.sol';
import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {SafeMath} from '@openzeppelin/contracts/math/SafeMath.sol';
import {DebtTokenBase} from './base/DebtTokenBase.sol';
import {MathUtils} from '../libraries/math/MathUtils.sol';
import {WadRayMath} from '../libraries/math/WadRayMath.sol';
import {IStableDebtToken} from './interfaces/IStableDebtToken.sol';

/**
 * @title contract StableDebtToken
 *
 * @notice defines the interface for the stable debt token
 *
 * @dev it does not inherit from IERC20 to save in code size
 *
 * @author Aave
 *
 **/
contract StableDebtToken is IStableDebtToken, DebtTokenBase {
  using SafeMath for uint256;
  using WadRayMath for uint256;

  uint256 public constant DEBT_TOKEN_REVISION = 0x1;
  struct UserData {
    uint256 currentRate;
    uint40 lastUpdateTimestamp;
  }

  uint256 private avgStableRate;

  mapping(address => UserData) private _usersData;

  constructor(
    address pool,
    address underlyingAsset,
    string memory name,
    string memory symbol
  ) public DebtTokenBase(pool, underlyingAsset, name, symbol) {}

  /**
   * @dev gets the revision of the stable debt token implementation
   * @return the debt token implementation revision
   **/
  function getRevision() internal virtual override pure returns (uint256) {
    return DEBT_TOKEN_REVISION;
  }

  /**
   * @dev returns the average stable rate across all the stable rate debt
   * @return the average stable rate
   **/
  function getAverageStableRate() external virtual override view returns (uint256) {
    return avgStableRate;
  }

  /**
   * @dev returns the timestamp of the last user action
   * @return the last update timestamp
   **/
  function getUserLastUpdated(address user) external virtual override view returns (uint40) {
    return _usersData[user].lastUpdateTimestamp;
  }

  /**
   * @dev returns the stable rate of the user
   * @param user the address of the user
   * @return the stable rate of user
   **/
  function getUserStableRate(address user) external virtual override view returns (uint256) {
    return _usersData[user].currentRate;
  }

  /**
   * @dev calculates the current user debt balance
   * @return the accumulated debt of the user
   **/
  function balanceOf(address account) public virtual override view returns (uint256) {
    uint256 accountBalance = _balances[account];
    if (accountBalance == 0) {
      return 0;
    }

    UserData storage userData = _usersData[account];

    uint256 cumulatedInterest = MathUtils.calculateCompoundedInterest(
      userData.currentRate,
      userData.lastUpdateTimestamp
    );
    return accountBalance.wadToRay().rayMul(cumulatedInterest).rayToWad();
  }

  struct MintLocalVars {
    uint256 supplyAfterMint;
    uint256 supplyBeforeMint;
    uint256 amountInRay;
    uint256 newStableRate;
  }

  /**
   * @dev mints debt token to the target user. The resulting rate is the weighted average
   * between the rate of the new debt and the rate of the previous debt
   * @param user the address of the user
   * @param amount the amount of debt tokens to mint
   * @param rate the rate of the debt being minted.
   **/
  function mint(
    address user,
    uint256 amount,
    uint256 rate
  ) external override onlyLendingPool {
    MintLocalVars memory vars;

    //cumulates the user debt
    (
      uint256 previousBalance,
      uint256 currentBalance,
      uint256 balanceIncrease
    ) = _calculateBalanceIncrease(user);

    vars.supplyBeforeMint = _totalSupply.add(balanceIncrease);
    vars.supplyAfterMint = vars.supplyBeforeMint.add(amount);

    vars.amountInRay = amount.wadToRay();

    //calculates the new stable rate for the user
    vars.newStableRate = _usersData[user]
      .currentRate
      .rayMul(currentBalance.wadToRay())
      .add(vars.amountInRay.rayMul(rate))
      .rayDiv(currentBalance.add(amount).wadToRay());

    _usersData[user].currentRate = vars.newStableRate;

    //solium-disable-next-line
    _usersData[user].lastUpdateTimestamp = uint40(block.timestamp);

    //calculates the updated average stable rate
    avgStableRate = avgStableRate
      .rayMul(vars.supplyBeforeMint.wadToRay())
      .add(rate.rayMul(vars.amountInRay))
      .rayDiv(vars.supplyAfterMint.wadToRay());

    _mint(user, amount.add(balanceIncrease));

    emit MintDebt(
      user,
      amount,
      previousBalance,
      currentBalance,
      balanceIncrease,
      vars.newStableRate
    );
  }

  /**
   * @dev burns debt of the target user.
   * @param user the address of the user
   * @param amount the amount of debt tokens to mint
   **/
  function burn(address user, uint256 amount) external override onlyLendingPool {
    (
      uint256 previousBalance,
      uint256 currentBalance,
      uint256 balanceIncrease
    ) = _calculateBalanceIncrease(user);

    uint256 supplyBeforeBurn = _totalSupply.add(balanceIncrease);
    uint256 supplyAfterBurn = supplyBeforeBurn.sub(amount);

    if (supplyAfterBurn == 0) {
      avgStableRate = 0;
    } else {
      avgStableRate = avgStableRate
        .rayMul(supplyBeforeBurn.wadToRay())
        .sub(_usersData[user].currentRate.rayMul(amount.wadToRay()))
        .rayDiv(supplyAfterBurn.wadToRay());
    }

    if (amount == currentBalance) {
      _usersData[user].currentRate = 0;
      _usersData[user].lastUpdateTimestamp = 0;
    } else {
      //solium-disable-next-line
      _usersData[user].lastUpdateTimestamp = uint40(block.timestamp);
    }

    if (balanceIncrease > amount) {
      _mint(user, balanceIncrease.sub(amount));
    } else {
      _burn(user, amount.sub(balanceIncrease));
    }

    emit BurnDebt(user, amount, previousBalance, currentBalance, balanceIncrease);
  }
}
