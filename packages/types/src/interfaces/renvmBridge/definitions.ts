import type { Definitions } from '@polkadot/types/types';

export default {
  rpc: {},
  types: {
    PublicKey: '[u8; 20]',
    DestAddress: 'Vec<u8>',
  },
} as Definitions;
