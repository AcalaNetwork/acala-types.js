![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)
[![npm](https://img.shields.io/npm/v/@acala-network/api?logo=npm&style=flat-square)](https://www.npmjs.com/package/@acala-network/api)

# @acala-network

This library provides additional typing information for user to access Acala Network by using [polkadot.js](https://github.com/polkadot-js/api).

# Getting Started

- install

```bash
yarn add @polkadot/api @acala-network/api
```

- import TS interfaces augmentation
```ts
// index.ts
import '@acala-network/types';
```

- create and use api with Acala type definitions
```ts
import { ApiPromise, WsProvider } from '@polkadot/api';
import { options } from '@acala-network/api';

const provider = new WsProvider('wss://karura-rpc.aca-api.network');
const api = new ApiPromise(options({ provider }));
await api.isReady;

// use api
const data = await api.query.system.account('5F98oWfz2r5rcRVnP9VCndg33DAAsky3iuoBSpaPUbgN9AJn');
console.log(data.toHuman())

```

# Packages

- [api](./packages/api)
  - Contains necessary options to create a polkadot.js API instance
- [types](./packages/types)
  - Polkadot.js type definations for Acala Network
