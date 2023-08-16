import type { ApiOptions } from '@polkadot/api/types';
import type { RegistryTypes } from '@polkadot/types/types';

import {
  acalaTypes,
  acalaRpc,
  acalaTypesAlias,
  acalaRuntime,
  acalaTypesBundle,
  acalaSignedExtensions,
} from '@acala-network/types';
import { acalaDerives } from '@acala-network/api-derive';
import { runtime as paymentRuntime } from '@polkadot/types/interfaces/payment/runtime';

// currently we don't import all substrate runtime
// and only add each module as needed
const substrateRuntime = {
  ...paymentRuntime,
};

export const options = ({
  rpc = {},
  runtime = {},
  signedExtensions,
  types = {},
  typesAlias = {},
  derives = {},
  typesBundle = {},
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    ...acalaTypes as unknown as RegistryTypes,
    ...types
  },
  runtime: {
    ...substrateRuntime,
    ...acalaRuntime,
    ...runtime,
  },
  rpc: {
    ...acalaRpc,
    ...rpc
  },
  typesAlias: {
    ...acalaTypesAlias,
    ...typesAlias
  },
  derives: {
    ...acalaDerives,
    ...derives,
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      acala: {
        ...acalaTypesBundle.spec.acala,
        ...typesBundle?.spec?.acala
      },
      mandala: {
        ...acalaTypesBundle.spec.mandala,
        ...typesBundle?.spec?.mandala
      },
      karura: {
        ...acalaTypesBundle.spec.karura,
        ...typesBundle?.spec?.mandala
      }
    }
  },
  signedExtensions: {
    ...acalaSignedExtensions,
    ...signedExtensions
  },
  ...otherOptions
});
