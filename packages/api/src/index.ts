import type { ApiOptions } from '@polkadot/api/types';
import type { RegistryTypes } from '@polkadot/types/types';

import { acalaDerives } from '@acala-network/api-derive';
import {
  acalaLookupTypes,
  acalaRpc,
  acalaRuntime,
  acalaSignedExtensions,
  acalaTypes,
  acalaTypesAlias,
  acalaTypesBundle,
} from '@acala-network/types';

export const options = ({ derives = {},
  rpc = {},
  runtime = {},
  signedExtensions,
  types = {},
  typesAlias = {},
  typesBundle = {},
  ...otherOptions }: ApiOptions = {}): ApiOptions => ({
  types: {
    ...acalaTypes as unknown as RegistryTypes,
    ...acalaLookupTypes as unknown as RegistryTypes,
    ...types,
  },
  runtime: {
    ...acalaRuntime,
    ...runtime,
  },
  rpc: {
    ...acalaRpc,
    ...rpc,
  },
  typesAlias: {
    ...acalaTypesAlias,
    ...typesAlias,
  },
  derives: {
    ...acalaDerives,
    ...derives,
  },
  typesBundle: {
    spec: {
      ...typesBundle.spec,
      acala: {
        ...acalaTypesBundle.spec.acala,
        ...typesBundle?.spec?.acala,
      },
      mandala: {
        ...acalaTypesBundle.spec.mandala,
        ...typesBundle?.spec?.mandala,
      },
      karura: {
        ...acalaTypesBundle.spec.karura,
        ...typesBundle?.spec?.mandala,
      },
    },
    ...typesBundle,
  },
  signedExtensions: {
    ...acalaSignedExtensions,
    ...signedExtensions,
  },
  ...otherOptions,
});
