import BigNumber from 'bignumber.js';

export interface UserReserveData {
  scaledATokenBalance: BigNumber;
  currentATokenBalance: BigNumber;
  interestRedirectionAddress: string;
  interestRedirectionIndex: BigNumber;
  redirectionAddressScaledRedirectedBalance: BigNumber;
  scaledRedirectedBalance: BigNumber;
  redirectedBalanceIndex: BigNumber;
  currentStableDebt: BigNumber;
  currentVariableDebt: BigNumber;
  principalStableDebt: BigNumber;
  principalVariableDebt: BigNumber;
  variableBorrowIndex: BigNumber;
  liquidityRate: BigNumber;
  stableBorrowRate: BigNumber;
  stableRateLastUpdated: BigNumber;
  usageAsCollateralEnabled: Boolean;
  walletBalance: BigNumber;
  [key: string]: BigNumber | string | Boolean;
}

export interface ReserveData {
  address: string;
  symbol: string;
  decimals: BigNumber;
  totalLiquidity: BigNumber;
  availableLiquidity: BigNumber;
  totalBorrowsStable: BigNumber;
  totalBorrowsVariable: BigNumber;
  averageStableBorrowRate: BigNumber;
  variableBorrowRate: BigNumber;
  stableBorrowRate: BigNumber;
  utilizationRate: BigNumber;
  liquidityIndex: BigNumber;
  variableBorrowIndex: BigNumber;
  aTokenAddress: string;
  marketStableRate: BigNumber;
  lastUpdateTimestamp: BigNumber;
  liquidityRate: BigNumber;
  [key: string]: BigNumber | string;
}
