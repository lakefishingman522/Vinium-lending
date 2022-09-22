```
\\\          ///     |||     |||\     |||     |||
 \\\        ///      |||     |||\\    |||     |||
  \\\      ///       |||     |||\\\   |||     |||
   \\\    ///        |||     ||| \\\  |||     |||
    \\\  ///         |||     |||  \\\ |||     |||
     \\\///          |||     |||   \\\|||     |||
      \\//           |||     |||    \\\||     |||
       \/            |||     |||     \\\|     |||
```

# Vini Protocol

This repository contains the smart contracts source code and markets configuration for Vini Protocol. The repository uses Docker Compose and Hardhat as development enviroment for compilation, testing and deployment tasks.

## What is Vini?

Vini is a decentralized non-custodial liquidity markets protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion.

npx hardhat full:deploy-address-provider-registry --pool Avalanche --network fuji
npx hardhat full:deploy-address-provider --pool Avalanche --network fuji
npx hardhat full:deploy-lending-pool --pool Avalanche --network fuji
npx hardhat full:deploy-oracles --pool Avalanche --network fuji
npx hardhat full:data-provider --network fuji
npx hardhat full-deploy-weth-gateway --pool Avalanche --network fuji
npx hardhat full:initialize-lending-pool --pool Avalanche --network fuji
