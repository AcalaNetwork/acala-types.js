import type { ApiOptions } from '@polkadot/api/types';

import { acalaTypesBundle } from './bundle';

// TODO: implement type overrides if needed
export const options = ({ provider }: ApiOptions = {}): ApiOptions => ({
  typesBundle: acalaTypesBundle,
  ...(provider ?? {}),
});

export const withAcalaTypes = options;
