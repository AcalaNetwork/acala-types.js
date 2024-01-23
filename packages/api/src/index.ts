import type { ApiOptions } from '@polkadot/api/types';

import { acalaTypesBundle } from './bundle';

// TODO: implement type overrides if needed
export const options = ({ provider }: ApiOptions = {}): ApiOptions => ({
  provider,
  typesBundle: acalaTypesBundle,
});

export const withAcalaTypes = options;
export * from './bundle';
