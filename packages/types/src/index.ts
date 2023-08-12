import "./interfaces/types-lookup.js";
import "./interfaces/augment-api.js";
import "./interfaces/augment-types.js";

import acalaLookupTypes from "./interfaces/lookup.js";
import * as acalaDefs from "./interfaces/definitions.js";
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from "./utils.js";

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
