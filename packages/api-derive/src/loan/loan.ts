import type { AcalaPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';
import type { AccountId } from '@acala-network/types/interfaces';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { DerivedUserLoan } from '../types/loan';
import type { Observable } from 'rxjs';

import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '@polkadot/api-derive/util';

import { getAllCollateralCurrencyIds } from '../utils';

/**
 * @name loan
 * @description get user loan information includes debit value and collateral value
 * @param {(AccountId | string)} account
 * @param {(AcalaPrimitivesCurrencyCurrencyId | string)} currency
 */
export function loan (
  instanceId: string,
  api: ApiInterfaceRx
): (account: AccountId | string, currency: AcalaPrimitivesCurrencyCurrencyId) => Observable<DerivedUserLoan> {
  return memo(instanceId, (account: AccountId | string, currency: AcalaPrimitivesCurrencyCurrencyId) =>
    api.query.loans.positions(currency, account).pipe(
      map((result) => {
        const { collateral, debit } = result;

        return {
          account,
          currency,
          debit,
          collateral,
        };
      })
    )
  );
}

/**
 * @name allLoans
 * @description get all user loans information includes debit value and collateral value
 * @param {(AccountId | string)} account
 */
export function allLoans (
  instanceId: string,
  api: ApiInterfaceRx
): (account: AccountId | string) => Observable<DerivedUserLoan[]> {
  return memo(instanceId, (account: AccountId | string) => {
    const loanQuery = loan(instanceId, api);

    return getAllCollateralCurrencyIds(api).pipe(
      switchMap((collateralCurrencyIds) => {
        return combineLatest(collateralCurrencyIds.map((currency) => loanQuery(account, currency)));
      })
    );
  });
}
