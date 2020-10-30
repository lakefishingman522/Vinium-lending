// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.8;
pragma experimental ABIEncoderV2;

import {PercentageMath} from '../libraries/math/PercentageMath.sol';
import {SafeMath} from '../dependencies/openzeppelin/contracts/SafeMath.sol';
import {IERC20} from '../dependencies/openzeppelin/contracts/IERC20.sol';
import {IERC20Detailed} from '../dependencies/openzeppelin/contracts/IERC20Detailed.sol';
import {SafeERC20} from '../dependencies/openzeppelin/contracts/SafeERC20.sol';
import {ILendingPoolAddressesProvider} from '../interfaces/ILendingPoolAddressesProvider.sol';
import {ILendingPool} from '../interfaces/ILendingPool.sol';
import {ReserveLogic} from '../libraries/logic/ReserveLogic.sol';
import {IUniswapV2Router02} from '../interfaces/IUniswapV2Router02.sol';
import {IPriceOracleGetter} from '../interfaces/IPriceOracleGetter.sol';

/**
 * @title BaseUniswapAdapter
 * @notice Implements the logic for performing assets swaps in Uniswap V2
 * @author Aave
 **/
contract BaseUniswapAdapter {
  using SafeMath for uint256;
  using PercentageMath for uint256;
  using SafeERC20 for IERC20;

  enum LeftoverAction {DEPOSIT, TRANSFER}

  // Max slippage percent allow by param
  uint256 public constant MAX_SLIPPAGE_PERCENT = 3000; // 30%
  // Min slippage percent allow by param
  uint256 public constant MIN_SLIPPAGE_PERCENT = 10; // 0,1%

  ILendingPool public immutable POOL;
  IPriceOracleGetter public immutable ORACLE;
  IUniswapV2Router02 public immutable UNISWAP_ROUTER;

  event Swapped(address fromAsset, address toAsset, uint256 fromAmount, uint256 receivedAmount);

  constructor(ILendingPoolAddressesProvider addressesProvider, IUniswapV2Router02 uniswapRouter) public {
    POOL = ILendingPool(addressesProvider.getLendingPool());
    ORACLE = IPriceOracleGetter(addressesProvider.getPriceOracle());
    UNISWAP_ROUTER = uniswapRouter;
  }

  /**
 * @dev Given an input asset amount, returns the maximum output amount of the other asset
 * @param amountIn Amount of reserveIn
 * @param reserveIn Address of the asset to be swap from
 * @param reserveOut Address of the asset to be swap to
 * @return uint256 amountOut
 */
  function getAmountOut(uint256 amountIn, address reserveIn, address reserveOut)
  public
  view
  returns (uint256)
  {
    address[] memory path = new address[](2);
    path[0] = reserveIn;
    path[1] = reserveOut;

    uint256[] memory amounts = UNISWAP_ROUTER.getAmountsOut(amountIn, path);

    return amounts[1];
  }

  /**
   * @dev Returns the minimum input asset amount required to buy the given output asset amount
   * @param amountOut Amount of reserveOut
   * @param reserveIn Address of the asset to be swap from
   * @param reserveOut Address of the asset to be swap to
   * @return uint256 amountIn
   */
  function getAmountIn(uint256 amountOut, address reserveIn, address reserveOut)
  public
  view
  returns (uint256)
  {
    address[] memory path = new address[](2);
    path[0] = reserveIn;
    path[1] = reserveOut;

    uint256[] memory amounts = UNISWAP_ROUTER.getAmountsIn(amountOut, path);

    return amounts[0];
  }

  /**
   * @dev Swaps an `amountToSwap` of an asset to another
   * @param assetToSwapFrom Origin asset
   * @param assetToSwapTo Destination asset
   * @param amountToSwap Exact amount of `assetToSwapFrom` to be swapped
   * @param slippage the max slippage percentage allowed for the swap
   * @return the amount received from the swap
   */
  function swapExactTokensForTokens(
    address assetToSwapFrom,
    address assetToSwapTo,
    uint256 amountToSwap,
    uint256 slippage
  )
    internal
    returns (uint256)
  {
    uint256 fromAssetDecimals = _getDecimals(assetToSwapFrom);
    uint256 toAssetDecimals = _getDecimals(assetToSwapTo);

    uint256 fromAssetPrice = _getPrice(assetToSwapFrom);
    uint256 toAssetPrice = _getPrice(assetToSwapTo);

    uint256 amountOutMin = amountToSwap
    .mul(fromAssetPrice.mul(10**toAssetDecimals))
    .div(toAssetPrice.mul(10**fromAssetDecimals))
    .percentMul(PercentageMath.PERCENTAGE_FACTOR.sub(slippage));

    IERC20(assetToSwapFrom).approve(address(UNISWAP_ROUTER), amountToSwap);

    address[] memory path = new address[](2);
    path[0] = assetToSwapFrom;
    path[1] = assetToSwapTo;
    uint256[] memory amounts = UNISWAP_ROUTER.swapExactTokensForTokens(amountToSwap, amountOutMin, path, address(this), block.timestamp);

    emit Swapped(assetToSwapFrom, assetToSwapTo, amounts[0], amounts[1]);

    return amounts[1];
  }

  /**
   * @dev Receive an exact amount `amountToReceive` of `assetToSwapTo` tokens for as few `assetToSwapFrom` tokens as
   * possible.
   * @param assetToSwapFrom Origin asset
   * @param assetToSwapTo Destination asset
   * @param maxAmountToSwap Max amount of `assetToSwapFrom` allowed to be swapped
   * @param amountToReceive Exact amount of `assetToSwapTo` to receive
   * @return the amount received from the swap
   */
  function swapTokensForExactTokens(
    address assetToSwapFrom,
    address assetToSwapTo,
    uint256 maxAmountToSwap,
    uint256 amountToReceive
  )
    internal
    returns (uint256)
  {
    uint256 fromAssetDecimals = _getDecimals(assetToSwapFrom);
    uint256 toAssetDecimals = _getDecimals(assetToSwapTo);

    uint256 fromAssetPrice = _getPrice(assetToSwapFrom);
    uint256 toAssetPrice = _getPrice(assetToSwapTo);

    uint256 expectedMaxAmountToSwap = amountToReceive
    .mul(toAssetPrice.mul(10**fromAssetDecimals))
    .div(fromAssetPrice.mul(10**toAssetDecimals))
    .percentMul(PercentageMath.PERCENTAGE_FACTOR.add(MAX_SLIPPAGE_PERCENT));

    require(maxAmountToSwap < expectedMaxAmountToSwap, 'maxAmountToSwap exceed max slippage');

    IERC20(assetToSwapFrom).approve(address(UNISWAP_ROUTER), maxAmountToSwap);

    address[] memory path = new address[](2);
    path[0] = assetToSwapFrom;
    path[1] = assetToSwapTo;
    uint256[] memory amounts = UNISWAP_ROUTER.swapTokensForExactTokens(amountToReceive, maxAmountToSwap, path, address(this), block.timestamp);

    emit Swapped(assetToSwapFrom, assetToSwapTo, amounts[0], amounts[1]);

    return amounts[1];
  }

  /**
   * @dev Get the price of the asset from the oracle denominated in eth
   * @param asset address
   * @return eth price for the asset
   */
  function _getPrice(address asset) internal view returns (uint256) {
    return ORACLE.getAssetPrice(asset);
  }

  /**
   * @dev Get the decimals of an asset
   * @return number of decimals of the asset
   */
  function _getDecimals(address asset) internal view returns (uint256) {
    return IERC20Detailed(asset).decimals();
  }

  /**
   * @dev Get the aToken associated to the asset
   * @return address of the aToken
   */
  function getAToken(address asset) internal view returns (address) {
    ReserveLogic.ReserveData memory reserve = POOL.getReserveData(asset);
    return reserve.aTokenAddress;
  }

  /**
   * @dev Take action with the swap left overs as configured in the parameters
   * @param asset address of the asset
   * @param reservedAmount Amount reserved to be used by the contract to repay the flash loan
   * @param leftOverAction enum indicating what to do with the left over balance from the swap:
   *     (0) Deposit back
   *     (1) Direct transfer to user
   * @param user address
   */
  function sendLeftovers(address asset, uint256 reservedAmount, LeftoverAction leftOverAction, address user) internal {
    uint256 balance = IERC20(asset).balanceOf(address(this));
    uint256 assetLeftOver = balance.sub(reservedAmount);

    if (assetLeftOver > 0) {
      if (leftOverAction == LeftoverAction.DEPOSIT) {
        IERC20(asset).approve(address(POOL), balance);
        POOL.deposit(asset, assetLeftOver, user, 0);
      } else {
        IERC20(asset).transfer(user, assetLeftOver);
      }
    }
  }

  /**
   * @dev Pull the ATokens from the user
   * @param reserve address of the asset
   * @param user address
   * @param amount of tokens to be transferred to the contract
   */
  function pullAToken(
    address reserve,
    address user,
    uint256 amount
  ) internal {
    address reserveAToken = getAToken(reserve);

    // transfer from user to adapter
    IERC20(reserveAToken).safeTransferFrom(user, address(this), amount);

    // withdraw reserve
    POOL.withdraw(reserve, amount, address(this));
  }

  /**
   * @dev Pull the ATokens from the user and use them to repay the flashloan
   * @param reserve address of the asset
   * @param user address
   * @param flashLoanDebt need to be repaid
   */
  function pullATokenAndRepayFlashLoan(
    address reserve,
    address user,
    uint256 flashLoanDebt
  ) internal {
    pullAToken(reserve, user, flashLoanDebt);

    // Repay flashloan
    IERC20(reserve).approve(address(POOL), flashLoanDebt);
  }
}
