import axios from 'axios';
import { Contract } from 'ethers/lib/ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { source } from 'lowdb/adapters/FileSync';
import { file } from 'tmp-promise';
import { DRE } from './misc-utils';
import { eEthereumNetwork, ePolygonNetwork, EthereumNetworkNames } from './types';

const TASK_FLATTEN_GET_FLATTENED_SOURCE = 'flatten:get-flattened-sources';
const TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS = 'compile:solidity:get-source-paths';

/* Polygon Helpers */

export const usingPolygon = () =>
  DRE && Object.keys(ePolygonNetwork).includes((DRE as HardhatRuntimeEnvironment).network.name);

/* Polygon Verifier */

const SOLIDITY_PRAGMA = 'pragma solidity';
const LICENSE_IDENTIFIER = 'License-Identifier';
const EXPERIMENTAL_ABIENCODER = 'pragma experimental ABIEncoderV2;';

const encodeDeployParams = (instance: Contract, args: (string | string[])[]) => {
  return instance.interface.encodeDeploy(args).replace('0x', '');
};

// Remove lines at "text" that includes "matcher" string, but keeping first "keep" lines
const removeLines = (text: string, matcher: string, keep = 0): string => {
  let counter = keep;
  return text
    .split('\n')
    .filter((line) => {
      const match = !line.includes(matcher);
      if (match === false && counter > 0) {
        counter--;
        return true;
      }
      return match;
    })
    .join('\n');
};

// Try to find the path of a Contract by name of the file without ".sol"
const findPath = async (id: string): Promise<string> => {
  const paths = await DRE.run(TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS);
  const path = paths.find((x) => {
    const t = x.split('/');
    return t[t.length - 1].split('.')[0] == id;
  });

  if (!path) {
    throw Error('Missing path for contract name: ${id}');
  }

  return path;
};

// Hardhat Flattener, similar to truffle flattener
const hardhatFlattener = async (filePath: string) =>
  await DRE.run(TASK_FLATTEN_GET_FLATTENED_SOURCE, { files: [filePath] });

// Verify a smart contract at Polygon Matic network via a GET request to the block explorer
export const verifyAtPolygon = async (
  id: string,
  instance: Contract,
  args: (string | string[])[]
) => {
  /*
    ${net == mumbai or mainnet}
    https://explorer-${net}.maticvigil.com/api
    ?module=contract
    &action=verify
    &addressHash={addressHash}
    &name={name}
    &compilerVersion={compilerVersion}
    &optimization={false}
    &contractSourceCode={contractSourceCode}
  */
  try {
    const network = (DRE as HardhatRuntimeEnvironment).network.name;
    const net = network === EthereumNetworkNames.matic ? 'mainnet' : network;

    const filePath = await findPath(id);
    const encodedConstructorParams = encodeDeployParams(instance, args);
    const flattenSourceCode = await hardhatFlattener(filePath);

    // Remove pragmas and license identifier after first match, required by block explorers like explorer-mainnet.maticgivil.com or Etherscan
    const cleanedSourceCode = removeLines(
      removeLines(removeLines(flattenSourceCode, LICENSE_IDENTIFIER, 1), SOLIDITY_PRAGMA, 1),
      EXPERIMENTAL_ABIENCODER,
      1
    );
    console.log(
      `[Polygon Verify] Verifying ${id} with address ${instance.address} at Matic ${net} network`
    );
    const response = await axios.post(
      `https://explorer-${net}.maticvigil.com/api`,
      {
        addressHash: instance.address,
        name: id,
        compilerVersion: 'v0.6.12+commit.27d51765',
        optimization: 'true',
        contractSourceCode: cleanedSourceCode,
        constructorArguments: encodedConstructorParams,
      },
      {
        params: {
          module: 'contract',
          action: 'verify',
        },
        headers: {
          'Content-Type': 'application/json',
          Referer: 'aavematic-42e1f6da',
        },
      }
    );
    if (response.status === 200 && response.data.message === 'OK') {
      console.log(`[Polygon Verify] Verified contract at Matic ${net} network.`);
      console.log(
        `[Polygon Verify] You can check at https://explorer-${net}.maticvigil.com/address/${instance.address}/contracts) \n`
      );
      return;
    }
    throw Error(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('[Polygon Verify] Error:', error.toString());
    throw error;
  }
};
