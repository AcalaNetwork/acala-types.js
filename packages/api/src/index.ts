import { acalaTypesBundle } from '@acala-network/types';
import type { ApiOptions } from '@polkadot/api/types';

export const options = ({ provider }: ApiOptions = {}): ApiOptions => ({
  typesBundle: acalaTypesBundle,
  provider,
});

export const withAcalaTypes = options;
