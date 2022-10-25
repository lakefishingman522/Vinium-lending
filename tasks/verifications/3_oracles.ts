import { task } from 'hardhat/config';
import { getParamPerNetwork, verifyContract } from '../../helpers/contracts-helpers';
import { deployViniumOracle, deployLendingRateOracle } from '../../helpers/contracts-deployments';
import { setInitialMarketRatesInRatesOracleByHelper } from '../../helpers/oracles-helpers';
import { ICommonConfiguration, eNetwork, SymbolMap, eContractid } from '../../helpers/types';
import { waitForTx, notFalsyOrZeroAddress } from '../../helpers/misc-utils';
import {
  ConfigNames,
  loadPoolConfig,
  getGenesisPoolAdmin,
  getLendingRateOracles,
  getQuoteCurrency,
} from '../../helpers/configuration';
import {
  getViniumOracle,
  getLendingPoolAddressesProvider,
  getLendingRateOracle,
  getPairsTokenAggregator,
} from '../../helpers/contracts-getters';
import { ViniumOracle, LendingRateOracle } from '../../types';

task('verify:oracles', 'Verify oracles for dev enviroment')
  .addFlag('all', 'Verify all contracts at Etherscan')
  .addParam('pool', `Pool name to retrieve configuration, supported: ${Object.values(ConfigNames)}`)
  .setAction(async ({ all, pool }, localDRE) => {
    try {
      await localDRE.run('set-DRE');
      const network = <eNetwork>localDRE.network.name;
      const poolConfig = loadPoolConfig(pool);
      const {
        ProtocolGlobalParams: { UsdAddress },
        ReserveAssets,
        FallbackOracle,
        ChainlinkAggregator,
      } = poolConfig as ICommonConfiguration;
      const lendingRateOracles = getLendingRateOracles(poolConfig);
      const addressesProvider = await getLendingPoolAddressesProvider();
      const admin = await getGenesisPoolAdmin(poolConfig);
      const viniumOracleAddress = getParamPerNetwork(poolConfig.ViniumOracle, network);
      const lendingRateOracleAddress = getParamPerNetwork(poolConfig.LendingRateOracle, network);
      const fallbackOracleAddress = await getParamPerNetwork(FallbackOracle, network);
      const reserveAssets = await getParamPerNetwork(ReserveAssets, network);
      const chainlinkAggregators = await getParamPerNetwork(ChainlinkAggregator, network);

      const tokensToWatch: SymbolMap<string> = {
        ...reserveAssets,
        USD: UsdAddress,
      };
      const [tokens, aggregators] = getPairsTokenAggregator(
        tokensToWatch,
        chainlinkAggregators,
        poolConfig.OracleQuoteCurrency
      );

      let lendingRateOracle: LendingRateOracle;
      if (notFalsyOrZeroAddress(viniumOracleAddress)) {
        const viniumOracle = notFalsyOrZeroAddress(viniumOracleAddress)
          ? await getViniumOracle(viniumOracleAddress)
          : await getViniumOracle();
        console.log(viniumOracle);
        await verifyContract(eContractid.ViniumOracle, viniumOracle, [
          tokens,
          aggregators,
          fallbackOracleAddress,
          await getQuoteCurrency(poolConfig),
          poolConfig.OracleQuoteUnit,
        ]);
      }

      if (notFalsyOrZeroAddress(lendingRateOracleAddress)) {
        lendingRateOracle = await getLendingRateOracle(lendingRateOracleAddress);
        await verifyContract(eContractid.LendingRateOracle, lendingRateOracle, []);
      }
    } catch (error) {
      throw error;
    }
  });
