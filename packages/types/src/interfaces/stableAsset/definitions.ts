import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {},
  types: {
    PoolTokenIndex: 'u32',
  },
  typesAlias: {
    stableAsset: {
      AssetId: 'CurrencyId',
    },
  },
} as Definitions;
