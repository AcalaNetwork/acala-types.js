export default {
  rpc: {
    call: {
      description: 'eth call',
      params: [
        {
          name: 'data',
          type: 'CallRequest',
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: 'Raw',
    },
    estimateResources: {
      description: 'eth estimateResources',
      params: [
        {
          name: 'from',
          type: 'H160',
        },
        {
          name: 'unsignedExtrinsic',
          type: 'Bytes',
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: 'EstimateResourcesResponse',
    },
  },
  typesAlias: {
    evm: {
      AccountInfo: 'EvmAccountInfo',
      ContractInfo: 'EvmContractInfo',
    },
  },
  types: {
    BlockLimits: {
      maxGasLimit: 'u64',
      maxStorageLimit: 'u32',
    },
    Erc20Info: {
      address: 'EvmAddress',
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimals: 'u8',
    },
    EstimateResourcesResponse: {
      // Used gas
      gas: 'u256',
      // Used storage
      storage: 'i32',
      // Adjusted weight fee
      weightFee: 'u256',
    },
    EvmAccountInfo: {
      nonce: 'Index',
      contractInfo: 'Option<EvmContractInfo>',
    },
    CodeInfo: {
      codeSize: 'u32',
      refCount: 'u32',
    },
    EvmContractInfo: {
      codeHash: 'H256',
      maintainer: 'H160',
      deployed: 'bool',
    },
    EvmAddress: 'H160',
    CallRequest: {
      from: 'Option<H160>',
      to: 'Option<H160>',
      gasLimit: 'Option<u32>',
      storageLimit: 'Option<u32>',
      value: 'Option<U128>',
      data: 'Option<Bytes>',
    },
    CallInfo: {
      exit_reason: 'ExitReason',
      value: 'Vec<u8>',
      used_gas: 'U256',
      used_storage: 'i32',
      logs: 'Vec<EthereumLog>',
    },
    CreateInfo: {
      exit_reason: 'ExitReason',
      value: 'H160',
      used_gas: 'U256',
      used_storage: 'i32',
      logs: 'Vec<EthereumLog>',
    },
    EthereumLog: {
      address: 'H160',
      topics: 'Vec<H256>',
      data: 'Bytes',
    },
    ExitReason: {
      _enum: {
        Succeed: 'ExitSucceed',
        Error: 'ExitError',
        Revert: 'ExitRevert',
        Fatal: 'ExitFatal',
      },
    },
    ExitSucceed: {
      _enum: ['Stopped', 'Returned', 'Suicided'],
    },
    ExitError: {
      _enum: {
        StackUnderflow: 'Null',       // 0
        StackOverflow: 'Null',        // 1
        InvalidJump: 'Null',          // 2
        InvalidRange: 'Null',         // 3
        DesignatedInvalid: 'Null',    // 4
        CallTooDeep: 'Null',          // 5
        CreateCollision: 'Null',      // 6
        CreateContractLimit: 'Null',  // 7
        OutOfOffset: 'Null',          // 8
        OutOfGas: 'Null',             // 9
        OutOfFund: 'Null',            // 10
        PCUnderflow: 'Null',          // 11
        CreateEmpty: 'Null',          // 12
        Other: 'Text',                // 13
        MaxNonce: null,               // 14
        InvalidCode: 'u8',            // 15
      },
    },
    ExitRevert: {
      _enum: ['Reverted'],
    },
    ExitFatal: {
      _enum: {
        NotSupported: 'Null',
        UnhandledInterrupt: 'Null',
        CallErrorAsFatal: 'ExitError',
        Other: 'Text',
      },
    },
  },
};
