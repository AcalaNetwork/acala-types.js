import type { Definitions } from '@polkadot/types/types';

import runtime from '@acala-network/type-definitions/runtime';

import definitions from '@polkadot/types/interfaces/runtime/definitions';

export default {
  rpc: {},
  types: {
    ...definitions.types,
    ...runtime.types
  }
} as Definitions;
