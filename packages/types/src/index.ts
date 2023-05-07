import '@polkadot/types/lookup';
import './argument/api';
import './lookup/acala';

import type { DefinitionRpc, DefinitionRpcSub, OverrideBundleType, OverrideModuleType, RegistryTypes } from '@polkadot/types/types';

import { rpc as acalaRpc, signedExtensions as acalaSignedExtensions, types as acalaTypes, typesAlias as acalaTypeAlias, typesBundle as acalaTypesBundle } from '@acala-network/type-definitions';

export * as lookupTypes from './lookup/acala';

export const types: RegistryTypes = acalaTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = acalaRpc;

export const typesAlias: Record<string, OverrideModuleType> = acalaTypeAlias;

export const typesBundle = acalaTypesBundle as unknown as OverrideBundleType;

export const signedExtensions = acalaSignedExtensions;
