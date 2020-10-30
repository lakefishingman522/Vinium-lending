// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.8;
pragma experimental ABIEncoderV2;

import {BaseUniswapAdapter} from './BaseUniswapAdapter.sol';
import {ILendingPoolAddressesProvider} from '../interfaces/ILendingPoolAddressesProvider.sol';
import {IUniswapV2Router02} from '../interfaces/IUniswapV2Router02.sol';
import {IFlashLoanReceiver} from '../flashloan/interfaces/IFlashLoanReceiver.sol';
import {IERC20} from '../dependencies/openzeppelin/contracts/IERC20.sol';

/**
 * @title UniswapRepayAdapter
 * @notice Uniswap V2 Adapter to perform a repay of a debt using a flash loan.
 * @author Aave
 **/
contract UniswapRepayAdapter is BaseUniswapAdapter, IFlashLoanReceiver {

  struct RepayParams {
    address[] assetToSwapToList;
    LeftoverAction leftOverAction;
    uint256[] repayAmounts;
    uint256[] rateModes;
  }

  constructor(
    ILendingPoolAddressesProvider addressesProvider,
    IUniswapV2Router02 uniswapRouter
  )
  public
  BaseUniswapAdapter(addressesProvider, uniswapRouter)
  {}

  /**
   * @dev Swaps the received reserve amount into the asset specified in the params. The received funds from the swap are
   * then used to repay a debt on the protocol on behalf of the user.
   * The user should give this contract allowance to pull the ATokens in order to withdraw the underlying asset and
   * repay the flash loan.
   * @param assets Address to be swapped
   * @param amounts Amount of the reserve to be swapped
   * @param premiums Fee of the flash loan
   * @param initiator Address of the user
   * @param params Additional variadic field to include extra params. Expected parameters:
   *   address[] assetToSwapToList List of the addresses of the reserve to be swapped to and repay
   *   uint256 leftOverAction Flag indicating what to do with the left over balance from the swap:
   *     (0) Deposit back
   *     (1) Direct transfer to user
   *   uint256[] repayAmounts List of amounts of debt to be repaid
   *   uint256[] rateModes List of the rate modes of the debt to be repaid
   */
  function executeOperation(
    address[] calldata assets,
    uint256[] calldata amounts,
    uint256[] calldata premiums,
    address initiator,
    bytes calldata params
  ) external override returns (bool) {
    require(msg.sender == address(POOL), "CALLER_MUST_BE_LENDING_POOL");

    RepayParams memory decodedParams = _decodeParams(params);

    require(
      assets.length == decodedParams.assetToSwapToList.length
      && assets.length == decodedParams.repayAmounts.length
      && assets.length == decodedParams.rateModes.length,
      'INCONSISTENT_PARAMS');

    for (uint256 i = 0; i < assets.length; i++) {
      _swapAndRepay(
        assets[i],
        decodedParams.assetToSwapToList[i],
        amounts[i],
        decodedParams.repayAmounts[i],
        decodedParams.rateModes[i],
        initiator,
        decodedParams.leftOverAction,
        premiums[i]
      );
    }

    return true;
  }

  /**
   * @dev Perform the swap, the repay of the debt and send back the left overs
   *
   * @param assetFrom Address of token to be swapped
   * @param assetTo Address of token to be received
   * @param amount Amount of the reserve to be swapped
   * @param repayAmount Amount of the debt to be repaid
   * @param rateMode Rate mode of the debt to be repaid
   * @param initiator Address of the user
   * @param leftOverAction enum indicating what to do with the left over balance from the swap
   * @param premium Fee of the flash loan
   */
  function _swapAndRepay(
    address assetFrom,
    address assetTo,
    uint256 amount,
    uint256 repayAmount,
    uint256 rateMode,
    address initiator,
    LeftoverAction leftOverAction,
    uint256 premium
  ) internal {
    swapTokensForExactTokens(assetFrom, assetTo, amount, repayAmount);

    // Repay debt
    IERC20(assetTo).approve(address(POOL), repayAmount);
    POOL.repay(assetTo, repayAmount, rateMode, initiator);

    uint256 flashLoanDebt = amount.add(premium);
    pullATokenAndRepayFlashLoan(assetFrom, initiator, flashLoanDebt);

    // Take care of reserve leftover from the swap
    sendLeftovers(assetFrom, flashLoanDebt, leftOverAction, initiator);
  }

  /**
   * @dev Decodes debt information encoded in flashloan params
   * @param params Additional variadic field to include extra params. Expected parameters:
   *   address[] assetToSwapToList List of the addresses of the reserve to be swapped to and repay
   *   uint256 leftOverAction Flag indicating what to do with the left over balance from the swap:
   *     (0) Deposit back
   *     (1) Direct transfer to user
   *   uint256[] repayAmounts List of amounts of debt to be repaid
   *   uint256[] rateModes List of the rate modes of the debt to be repaid
   * @return RepayParams struct containing decoded params
   */
  function _decodeParams(bytes memory params) internal returns (RepayParams memory) {
    (
      address[] memory assetToSwapToList,
      LeftoverAction leftOverAction,
      uint256[] memory repayAmounts,
      uint256[] memory rateModes
    ) = abi.decode(params, (address[], LeftoverAction, uint256[], uint256[]));

    return RepayParams(assetToSwapToList, leftOverAction, repayAmounts, rateModes);
  }
}
