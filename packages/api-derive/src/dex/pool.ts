import { map } from 'rxjs/operators';
import { memo } from '@polkadot/api-derive/util';
import primitivesConfig from '@acala-network/types/interfaces/primitives/definitions';
import type { AcalaPrimitivesCurrencyCurrencyId, AcalaPrimitivesTradingPair } from '@polkadot/types/lookup';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Observable } from 'rxjs';

import type { DerivedDexPool } from '../types/dex';

const TOKEN_SORT: Record<string, number> = primitivesConfig.types.TokenSymbol._enum;

function sortTokens (
  token1: AcalaPrimitivesCurrencyCurrencyId,
  token2: AcalaPrimitivesCurrencyCurrencyId
): AcalaPrimitivesCurrencyCurrencyId[] {
  const result = [token1, token2];

  return result.sort((a, b) => TOKEN_SORT[a.asToken.toString()] - TOKEN_SORT[b.asToken.toString()]);
}

/**
 * @name pool
 * @description get liquidity pool of the target currency id
 * @param {CurrencyId} currency target currency id
 */
export function pool (
  instanceId: string,
  api: ApiInterfaceRx
): (
    token1: AcalaPrimitivesCurrencyCurrencyId,
    token2: AcalaPrimitivesCurrencyCurrencyId
  ) => Observable<DerivedDexPool> {
  return memo(instanceId, (token1: AcalaPrimitivesCurrencyCurrencyId, token2: AcalaPrimitivesCurrencyCurrencyId) => {
    const params = sortTokens(token1, token2) as AcalaPrimitivesTradingPair;

    return api.query.dex.liquidityPool(params).pipe(
      map((result) => {
        const [token1Amount, token2Amount] = result;

        if (token1.eq(params[0]) && token2.eq(params[1])) {
          return [token1Amount, token2Amount];
        }

        return [token2Amount, token1Amount];
      })
    );
  });
}
