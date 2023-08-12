import "./interfaces/types-lookup.js";
import "./interfaces/augment-api.js";
import "./interfaces/augment-types.js";

import type { OverrideVersionedType, OverrideBundleType } from '@polkadot/types/types';

import acalaLookupTypes from "./interfaces/lookup.js";
import * as acalaDefs from "./interfaces/definitions.js";
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from "./utils.js";
import { acalaVersioned, karuraVersioned, mandalaVersioned } from "./versioned.js";

export { acalaSignedExtensions } from './signedExtensions.js'

// FIXME: currently we cannot override this in runtime definations because the code generation script cannot handle overrides
// This will make it behave correctly in runtime, but wrong types in TS defination.
const additionalOverride = { Keys: 'SessionKeys1' };

export const acalaTypes = {
  ...typesFromDefs(acalaDefs),
  ...acalaLookupTypes,
  ...additionalOverride
};

export const acalaRpc = jsonrpcFromDefs(acalaDefs, {});
export const acalaTypesAlias = typesAliasFromDefs(acalaDefs, {});
export const acalaRuntime = acalaDefs.runtime.runtime;

function getBundle(versioned: OverrideVersionedType[]) {
  return {
    acalaRpc,
    instances: { council: ['generalCouncil'] },
    types: [...versioned].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...acalaTypes,
          ...version.types
        }
      };
    }),
    alias: acalaTypesAlias
  };
}

export const acalaTypesBundle = {
  spec: {
    acala: getBundle(acalaVersioned),
    mandala: getBundle(mandalaVersioned),
    karura: getBundle(karuraVersioned)
  }
} as unknown as OverrideBundleType;

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    acala: getBundle(acalaVersioned),
    mandala: getBundle(mandalaVersioned),
    karura: getBundle(karuraVersioned)
  }
};