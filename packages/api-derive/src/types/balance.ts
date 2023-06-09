import type { Balance } from '@acala-network/types/interfaces';
import type { AcalaPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';

export interface DerivedBalance {
  currency: AcalaPrimitivesCurrencyCurrencyId;
  balance: Balance;
}

export type DerivedAllBalances = DerivedBalance[];
