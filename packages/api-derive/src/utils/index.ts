import type { AcalaPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

export function getAllCollateralCurrencyIds (api: ApiInterfaceRx): Observable<AcalaPrimitivesCurrencyCurrencyId[]> {
  return api.query.cdpEngine.collateralParams.keys().pipe(
    map((keys) => {
      return keys.map((item) => item.args[0]);
    })
  );
}
