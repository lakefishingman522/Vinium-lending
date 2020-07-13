// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.8;

/**
 * @title IPriceOracleGetter interface
 * @notice Interface for the Aave price oracle.
 **/

interface IPriceOracleGetter {
  /**
   * @dev returns the asset price in ETH
   * @param _asset the address of the asset
   * @return the ETH price of the asset
   **/
  function getAssetPrice(address _asset) external view returns (uint256);
}
