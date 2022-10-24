import { task } from 'hardhat/config';
import { getViniumProtocolDataProvider } from '../../helpers/contracts-getters';

task('print-config:fork', 'Deploy development enviroment')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .setAction(async ({ verify }, DRE) => {
    await DRE.run('set-DRE');
    await DRE.run('vinium:mainnet');

    const dataProvider = await getViniumProtocolDataProvider();
    await DRE.run('print-config', { dataProvider: dataProvider.address, pool: 'Vinium' });
  });
