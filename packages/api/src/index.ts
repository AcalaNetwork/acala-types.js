import type { ApiOptions } from '@polkadot/api/types';
import type { RegistryTypes } from '@polkadot/types/types';

import {
  acalaTypes,
  acalaRpc,
  acalaTypesAlias,
  acalaRuntime,
} from '@acala-network/types';
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
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // derives: {
  //   ...acalaDerives
  // },
  typesBundle,
  signedExtensions,
  ...otherOptions
});
