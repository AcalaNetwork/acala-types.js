import { acalaDerives } from '@acala-network/api-derive';
import {
  acalaRpc,
  acalaRuntime,
  acalaSignedExtensions,
  acalaTypesAlias,
  versionedTypes,
} from '@acala-network/types';
import type { OverrideBundleType } from '@polkadot/types/types';

const sharedBundle = {
  alias: acalaTypesAlias,
  derives: acalaDerives,
  instances: { council: ['generalCouncil'] },
  rpc: acalaRpc,
  runtime: acalaRuntime,
  signedExtensions: acalaSignedExtensions,
  types: versionedTypes,
};

export const acalaTypesBundle: OverrideBundleType = {
  spec: {
    acala: sharedBundle,
    mandala: sharedBundle,
    karura: sharedBundle,
  },
};

// Type overrides have priority issues
export const typesBundleForPolkadot = acalaTypesBundle;
