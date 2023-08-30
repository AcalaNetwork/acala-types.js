import type { AcalaPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';
import type { Balance } from '@acala-network/types/interfaces';

export interface DerivedBalance {
  currency: AcalaPrimitivesCurrencyCurrencyId;
  balance: Balance;
}

export type DerivedAllBalances = DerivedBalance[];
