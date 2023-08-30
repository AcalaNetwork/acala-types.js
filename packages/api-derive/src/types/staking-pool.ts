import type { AcalaPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';
import type { Balance, BlockNumber, ExchangeRate, Ledger, Params } from '@acala-network/types/interfaces';
import type { EraIndex } from '@polkadot/types/interfaces';

export interface DerivedStakingPoolConstants {
  defaultExchangeRate: ExchangeRate;
  stakingCurrency: AcalaPrimitivesCurrencyCurrencyId;
  liquidCurrency: AcalaPrimitivesCurrencyCurrencyId;
  eraLength: BlockNumber;
  bondingDuration: EraIndex;
}

export interface DerivedStakingPool extends DerivedStakingPoolConstants {
  currentEra: EraIndex;
  ledger: Ledger;
  params: Params;
  liquidIssuance: Balance;
}
