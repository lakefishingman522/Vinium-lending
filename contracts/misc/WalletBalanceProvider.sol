// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.8;

pragma experimental ABIEncoderV2;

import {Address} from '@openzeppelin/contracts/utils/Address.sol';
import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';

import {LendingPoolAddressesProvider} from '../configuration/LendingPoolAddressesProvider.sol';
import {ILendingPool} from '../interfaces/ILendingPool.sol';
import {SafeERC20} from '@openzeppelin/contracts/token/ERC20/SafeERC20.sol';
import {ReserveConfiguration} from '../libraries/configuration/ReserveConfiguration.sol';

/**
 * @title WalletBalanceProvider contract
 * @author Aave, influenced by https://github.com/wbobeirne/eth-balance-checker/blob/master/contracts/BalanceChecker.sol
 * @notice Implements a logic of getting multiple tokens balance for one user address
 * @dev NOTE: THIS CONTRACT IS NOT USED WITHIN THE AAVE PROTOCOL. It's an accessory contract used to reduce the number of calls
 * towards the blockchain from the Aave backend.
 **/
contract WalletBalanceProvider {
  using Address for address payable;
  using Address for address;
  using SafeERC20 for IERC20;
  using ReserveConfiguration for ReserveConfiguration.Map;

  LendingPoolAddressesProvider internal immutable _provider;

  constructor(LendingPoolAddressesProvider provider) public {
    _provider = provider;
  }

  /**
    @dev Fallback function, don't accept any ETH
    **/
  receive() external payable {
    //only contracts can send ETH to the core
    require(msg.sender.isContract(), '22');
  }

  /**
    @dev Check the token balance of a wallet in a token contract

    Returns the balance of the token for user. Avoids possible errors:
      - return 0 on non-contract address
    **/
  function balanceOf(address user, address token) public view returns (uint256) {
    // check if token is actually a contract
    if (token.isContract()) {
      return IERC20(token).balanceOf(user);
    } else {
      return 0;
    }
  }

  /**
   * @notice Fetches, for a list of _users and _tokens (ETH included with mock address), the balances
   * @param users The list of users
   * @param tokens The list of tokens
   * @return And array with the concatenation of, for each user, his/her balances
   **/
  function batchBalanceOf(address[] calldata users, address[] calldata tokens)
    external
    view
    returns (uint256[] memory)
  {
    uint256[] memory balances = new uint256[](users.length * tokens.length);

    for (uint256 i = 0; i < users.length; i++) {
      for (uint256 j = 0; j < tokens.length; j++) {
        uint256 _offset = i * tokens.length;
        if (!tokens[j].isContract()) {
          revert('INVALID_TOKEN');
        } else {
          balances[_offset + j] = balanceOf(users[i], tokens[j]);
        }
      }
    }

    return balances;
  }

  /**
    @dev provides balances of user wallet for all reserves available on the pool
    */
  function getUserWalletBalances(address user)
    external
    view
    returns (address[] memory, uint256[] memory)
  {
    ILendingPool pool = ILendingPool(_provider.getLendingPool());

    address[] memory reserves = pool.getReservesList();

    uint256[] memory balances = new uint256[](reserves.length);

    for (uint256 j = 0; j < reserves.length; j++) {
      ReserveConfiguration.Map memory configuration = pool.getConfiguration(reserves[j]);

      (bool isActive, , , ) = configuration.getFlagsMemory();

      if (!isActive) {
        balances[j] = 0;
        continue;
      }
      balances[j] = balanceOf(user, reserves[j]);
    }

    return (reserves, balances);
  }
}
