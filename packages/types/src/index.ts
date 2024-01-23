import './interfaces/augment-api';
import './interfaces/augment-types';
import './interfaces/types-lookup';

import type { RegistryTypes } from '@polkadot/types/types';

import * as acalaDefs from './interfaces/definitions';
import { acalaSignedExtensions } from './signedExtensions';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from './utils';
import acalaLookupTypes from './interfaces/lookup';

// FIXME: currently we cannot override this in runtime definations because the code generation script cannot handle overrides
// This will make it behave correctly in runtime, but wrong types in TS defination.
const additionalOverride = { Keys: 'SessionKeys1' };

export const acalaTypes = {
  ...typesFromDefs(acalaDefs),
  ...acalaLookupTypes as unknown as RegistryTypes,
  ...additionalOverride,
};

export const acalaRpc = jsonrpcFromDefs(acalaDefs, {});
export const acalaTypesAlias = typesAliasFromDefs(acalaDefs, {});
export const acalaRuntime = acalaDefs.runtime.runtime;

export { acalaLookupTypes, acalaSignedExtensions };
export * from './versioned';
