import type { AcalaPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';
import type { AccountId, Balance, ExchangeRate, OptionRate, OptionRatio, Rate } from '@acala-network/types/interfaces';

export interface DerivedLoanConstants {
  minimumDebitValue: Balance;
  defaultDebitExchangeRate: Rate;
  defaultLiquidationRatio: Rate;
  defaultLiquidationPenalty: Rate;
}

export interface CollateralParams {
  maximumTotalDebitValue: Balance;
  interestRatePerSec: OptionRate;
  liquidationRatio: OptionRatio;
  liquidationPenalty: OptionRate;
  requiredCollateralRatio: OptionRatio;
}

export interface DerivedLoanType extends Omit<CollateralParams, 'liquidationRatio' | 'liquidationPenalty'> {
  currency: AcalaPrimitivesCurrencyCurrencyId;
  debitExchangeRate: Rate;
  liquidationRatio: OptionRatio | ExchangeRate;
  liquidationPenalty: OptionRatio | Rate;
}

export interface DerivedUserLoan {
  currency: AcalaPrimitivesCurrencyCurrencyId;
  account: AccountId | string;
  collateral: Balance;
  debit: Balance;
}

export interface DerivedLoanOverView {
  currency: AcalaPrimitivesCurrencyCurrencyId;
  totalDebit: Balance;
  totalCollateral: Balance;
}
