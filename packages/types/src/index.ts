import './interfaces/augment-api';
import './interfaces/augment-types';
import './interfaces/types-lookup';

import type { OverrideBundleDefinition, OverrideBundleType } from '@polkadot/types/types';

import * as acalaDefs from './interfaces/definitions';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from './utils';
import { versioned } from './versioned';

export * as acalaLookupTypes from './interfaces/lookup';
import { acalaSignedExtensions } from './signedExtensions';
export { acalaSignedExtensions };

// FIXME: currently we cannot override this in runtime definations because the code generation script cannot handle overrides
// This will make it behave correctly in runtime, but wrong types in TS defination.
const additionalOverride = { Keys: 'SessionKeys1' };

export const acalaTypes = {
  ...typesFromDefs(acalaDefs),
  ...additionalOverride,
};

export const acalaRpc = jsonrpcFromDefs(acalaDefs, {});
export const acalaTypesAlias = typesAliasFromDefs(acalaDefs, {});
export const acalaRuntime = acalaDefs.runtime.runtime;

const sharedBundle: OverrideBundleDefinition = {
  rpc: acalaRpc,
  instances: { council: ['generalCouncil'] },
  types: versioned.map((version) => ({
    minmax: version.minmax,
    types: {
      ...acalaTypes,
      ...version.types,
    },
  })),
  alias: acalaTypesAlias,
  signedExtensions: acalaSignedExtensions,
  runtime: acalaRuntime,
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
