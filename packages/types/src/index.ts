import './interfaces/augment-api';
import './interfaces/augment-types';
import './interfaces/types-lookup';

import type { RegistryTypes } from '@polkadot/types/types';

import * as acalaDefs from './interfaces/definitions';
import { acalaSignedExtensions } from './signedExtensions';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from './utils';
import acalaLookupTypes from './interfaces/lookup';

export const acalaRpc = jsonrpcFromDefs(acalaDefs, {});
export const acalaTypesAlias = typesAliasFromDefs(acalaDefs, {});
export const acalaRuntime = acalaDefs.runtime.runtime;

export { acalaLookupTypes, acalaSignedExtensions };
export * from './versioned';
