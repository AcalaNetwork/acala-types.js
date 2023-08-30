import '@acala-network/types';

import type { DeriveCustom } from '@polkadot/api-base/types';

import * as dex from './dex';
import * as homa from './homa';
import * as loan from './loan';

export const acalaDerives: DeriveCustom = {
  loan: loan as unknown as DeriveCustom[string],
  dex: dex as unknown as DeriveCustom[string],
  homa: homa as unknown as DeriveCustom[string],
};

export * from './types';
