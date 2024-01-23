import { acalaRuntime, acalaTypesBundle } from '@acala-network/types';
import type { ApiOptions } from '@polkadot/api/types';

export const options = ({ provider }: ApiOptions = {}): ApiOptions => ({
  typesBundle: acalaTypesBundle,
  runtime: acalaRuntime,
  provider,
});

export const withAcalaTypes = options;
