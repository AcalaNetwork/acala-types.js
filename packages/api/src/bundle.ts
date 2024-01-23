import { acalaDerives } from '@acala-network/api-derive';
import {
  acalaRpc,
  acalaRuntime,
  acalaSignedExtensions,
  acalaTypes,
  acalaTypesAlias,
  versioned,
} from '@acala-network/types';
import type {
  OverrideBundleDefinition,
  OverrideBundleType,
  OverrideVersionedType,
} from '@polkadot/types/types';

function getBundle(versioned: OverrideVersionedType[]): OverrideBundleDefinition {
  return {
    alias: acalaTypesAlias,
    derives: acalaDerives,
    instances: { council: ['generalCouncil'] },
    rpc: acalaRpc,
    runtime: acalaRuntime,
    signedExtensions: acalaSignedExtensions,
    types: versioned.map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...acalaTypes,
          ...version.types,
        },
      };
    }),
  };
}

const sharedBundle = getBundle(versioned);
export const acalaTypesBundle: OverrideBundleType = {
  spec: {
    acala: sharedBundle,
    mandala: sharedBundle,
    karura: sharedBundle,
  },
};

// Type overrides have priority issues
export const typesBundleForPolkadot = acalaTypesBundle;
