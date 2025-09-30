import substrateRuntimeDefs from '@polkadot/types/interfaces/runtime/definitions';
import type { Definitions } from '@polkadot/types/types';

const acalaRuntimeDefs: Definitions = {
  rpc: {},
  types: {
    OracleKey: 'CurrencyId',
    OracleValue: 'Price',
    AsOriginId: 'AuthoritysOriginId',
    ProxyType: {
      _enum: ['Any', 'CancelProxy', 'Governance', 'Auction', 'Swap', 'Loan'],
    },
    AtLeast64BitUnsigned: 'u128',
    StableAssetPoolId: 'u32',
    RelayChainBlockNumberOf: 'RelayChainBlockNumber',
    Step: {
      op: 'u8',
      pc: 'Compact<u32>',
      depth: 'Compact<u32>',
      gas: 'Compact<u64>',
      stack: 'Vec<Bytes>',
      memory: 'Option<Vec<Bytes>>',
    },
    CallType: {
      _enum: {
        CALL: null,
        CALLCODE: null,
        STATICCALL: null,
        DELEGATECALL: null,
        CREATE: null,
        SUICIDE: null,
      },
    },
    CallTrace: {
      type: 'CallType',
      from: 'H160',
      to: 'H160',
      input: 'Bytes',
      value: 'U256',
      gas: 'Compact<u64>',
      gasUsed: 'Compact<u64>',
      output: 'Option<Bytes>',
      error: 'Option<String>',
      revertReason: 'Option<String>',
      depth: 'Compact<u32>',
      logs: 'Vec<LogTrace>',
      calls: 'Vec<CallTrace>',
    },
    TraceOutcome: {
      _enum: {
        Calls: 'Vec<CallTrace>',
        Steps: 'Vec<Step>',
      },
    },
    OpcodeConfig: {
      page: 'u32',
      pageSize: 'u32',
      disableStack: 'bool',
      enableMemory: 'bool',
    },
    TracerConfig: {
      _enum: {
        CallTracer: null,
        OpcodeTracer: 'OpcodeConfig',
      },
    },
    LogTraceLog: {
      address: 'H160',
      topics: 'Vec<H256>',
      data: 'Vec<u8>',
    },
    SLoad: {
      address: 'H160',
      index: 'H256',
      value: 'H256',
    },
    SStore: {
      address: 'H160',
      index: 'H256',
      value: 'H256',
    },
    LogTrace: {
      _enum: {
        Log: 'LogTraceLog',
        SLoad: 'SLoad',
        SStore: 'SStore',
      },
    },
  },
  runtime: {
    EVMRuntimeRPCApi: [
      {
        version: 2,
        methods: {
          call: {
            description: 'call evm contract',
            params: [
              {
                name: 'from',
                type: 'H160',
              },
              {
                name: 'to',
                type: 'H160',
              },
              {
                name: 'data',
                type: 'Vec<u8>',
              },
              {
                name: 'value',
                type: 'Balance',
              },
              {
                name: 'gas_limit',
                type: 'u64',
              },
              {
                name: 'storage_limit',
                type: 'u32',
              },
              {
                name: 'access_list',
                type: 'Option<Vec<EthereumTransactionEip2930AccessListItem>>',
              },
              {
                name: 'estimate',
                type: 'bool',
              },
            ],
            type: 'Result<CallInfo, sp_runtime::DispatchError>',
          },
          create: {
            description: 'create evm contract',
            params: [
              {
                name: 'from',
                type: 'H160',
              },
              {
                name: 'data',
                type: 'Vec<u8>',
              },
              {
                name: 'value',
                type: 'Balance',
              },
              {
                name: 'gas_limit',
                type: 'u64',
              },
              {
                name: 'storage_limit',
                type: 'u32',
              },
              {
                name: 'access_list',
                type: 'Option<Vec<EthereumTransactionEip2930AccessListItem>>',
              },
              {
                name: 'estimate',
                type: 'bool',
              },
            ],
            type: 'Result<CreateInfo, sp_runtime::DispatchError>',
          },
          block_limits: {
            description: 'evm block limits',
            params: [],
            type: 'BlockLimits',
          },
          account_call: {
            description: 'call evm contract from substrate account',
            params: [
              {
                name: 'from',
                type: 'AccountId',
              },
              {
                name: 'to',
                type: 'H160',
              },
              {
                name: 'data',
                type: 'Vec<u8>',
              },
              {
                name: 'value',
                type: 'Balance',
              },
              {
                name: 'gas_limit',
                type: 'u64',
              },
              {
                name: 'storage_limit',
                type: 'u32',
              },
              {
                name: 'access_list',
                type: 'Option<Vec<EthereumTransactionEip2930AccessListItem>>',
              },
              {
                name: 'estimate',
                type: 'bool',
              },
            ],
            type: 'Result<CallInfo, sp_runtime::DispatchError>',
          },
          account_create: {
            description: 'create evm contract from substrate account',
            params: [
              {
                name: 'from',
                type: 'AccountId',
              },
              {
                name: 'data',
                type: 'Vec<u8>',
              },
              {
                name: 'value',
                type: 'Balance',
              },
              {
                name: 'gas_limit',
                type: 'u64',
              },
              {
                name: 'storage_limit',
                type: 'u32',
              },
              {
                name: 'access_list',
                type: 'Option<Vec<EthereumTransactionEip2930AccessListItem>>',
              },
              {
                name: 'estimate',
                type: 'bool',
              },
            ],
            type: 'Result<CreateInfo, sp_runtime::DispatchError>',
          },
        },
      },
    ],
    EVMTraceApi: [
      {
        version: 1,
        methods: {
          trace_extrinsic: {
            description: 'trace an evm extrinsic',
            params: [
              {
                name: 'extrinsic',
                type: 'Block::Extrinsic',
              },
              {
                name: 'tracer_config',
                type: 'primitives::evm::tracing::TracerConfig',
              },
            ],
            type: 'Result<primitives::evm::tracing::TraceOutcome, sp_runtime::transaction_validity::TransactionValidityError>',
          },
        },
      },
    ],
  },
};

// we need to merge substrate runtime defs, otherwise won't be able to build
export default {
  rpc: {
    ...substrateRuntimeDefs.rpc,
    ...acalaRuntimeDefs.rpc,
  },
  types: {
    ...substrateRuntimeDefs.types,
    ...acalaRuntimeDefs.types,
  },
  runtime: {
    ...substrateRuntimeDefs.runtime,
    ...acalaRuntimeDefs.runtime,
  },
};
