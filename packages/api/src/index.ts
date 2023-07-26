import type { ApiOptions } from '@polkadot/api/types';
import type { RegistryTypes } from '@polkadot/types/types';

import { derive as acalaDerives } from '@acala-network/api-derive';
import { lookupTypes as acalaLookupTypes, rpc as acalaRpc, signedExtensions as acalaSignedExtensions, types as acalaTypes, typesAlias as acalaTypesAlias, typesBundle as acalaTypesBundle } from '@acala-network/types';

import { runtime as acalaRuntime } from './runtime';

export const defaultOptions: ApiOptions = {
  types: acalaTypes,
  rpc: acalaRpc
};

export const options = ({ rpc = {},
  runtime = {},
  signedExtensions,
  types = {},
  typesAlias = {},
  typesBundle = {},
  ...otherOptions }: ApiOptions = {}): ApiOptions => ({
  types: {
    ...acalaTypes,
    ...(acalaLookupTypes as unknown as RegistryTypes), // TODO: RegistryTypes's own issue?
    ...types
  },
  rpc: {
    ...acalaRpc,
    ...rpc
  },
  typesAlias: {
    ...acalaTypesAlias,
    ...typesAlias
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  derives: {
    ...acalaDerives
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      acala: {
        ...acalaTypesBundle?.spec?.acala,
        ...typesBundle?.spec?.acala
      },
      mandala: {
        ...acalaTypesBundle?.spec?.mandala,
        ...typesBundle?.spec?.mandala
      },
      karura: {
        ...acalaTypesBundle?.spec?.karura,
        ...typesBundle?.spec?.mandala
      }
    }
  },
  signedExtensions: {
    ...acalaSignedExtensions,
    ...signedExtensions
  },
  runtime: {
    ...acalaRuntime,
    ...runtime
  },
  ...otherOptions
});
