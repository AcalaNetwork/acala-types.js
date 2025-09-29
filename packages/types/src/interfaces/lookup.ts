// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup9: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup10: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup17: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup20: frame_system::EventRecord<acala_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup22: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSystemDispatchEventInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSystemDispatchEventInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256',
      },
      UpgradeAuthorized: {
        codeHash: 'H256',
        checkVersion: 'bool',
      },
      RejectedInvalidAuthorizedUpgrade: {
        codeHash: 'H256',
        error: 'SpRuntimeDispatchError'
      }
    }
  },
  /**
   * Lookup23: frame_system::DispatchEventInfo
   **/
  FrameSystemDispatchEventInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup24: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup25: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup26: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null',
      Trie: 'SpRuntimeProvingTrieTrieError'
    }
  },
  /**
   * Lookup27: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup28: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup29: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup30: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup31: sp_runtime::proving_trie::TrieError
   **/
  SpRuntimeProvingTrieTrieError: {
    _enum: ['InvalidStateRoot', 'IncompleteDatabase', 'ValueAtIncompleteKey', 'DecoderError', 'InvalidHash', 'DuplicateKey', 'ExtraneousNode', 'ExtraneousValue', 'ExtraneousHashReference', 'InvalidChildReference', 'ValueMismatch', 'IncompleteProof', 'RootMismatch', 'DecodeError']
  },
  /**
   * Lookup32: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      RetrySet: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        period: 'u32',
        retries: 'u8',
      },
      RetryCancelled: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      RetryFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      AgendaIncomplete: {
        when: 'u32'
      }
    }
  },
  /**
   * Lookup37: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      IfElseMainSuccess: 'Null',
      IfElseFallbackCalled: {
        mainError: 'SpRuntimeDispatchError'
      }
    }
  },
  /**
   * Lookup38: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      DepositPoked: {
        who: 'AccountId32',
        callHash: '[u8;32]',
        oldDeposit: 'u128',
        newDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup39: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup40: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        disambiguationIndex: 'u16',
      },
      PureKilled: {
        pure: 'AccountId32',
        spawner: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      DepositPoked: {
        who: 'AccountId32',
        kind: 'PalletProxyDepositKind',
        oldDeposit: 'u128',
        newDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup41: runtime_common::ProxyType
   **/
  RuntimeCommonProxyType: {
    _enum: ['Any', 'CancelProxy', 'Governance', 'Auction', 'Swap', 'Loan', 'DexLiquidity', 'StableAssetSwap', 'StableAssetLiquidity', 'Homa']
  },
  /**
   * Lookup43: pallet_proxy::DepositKind
   **/
  PalletProxyDepositKind: {
    _enum: ['Proxies', 'Announcements']
  },
  /**
   * Lookup44: module_transaction_pause::module::Event<T>
   **/
  ModuleTransactionPauseModuleEvent: {
    _enum: {
      TransactionPaused: {
        palletNameBytes: 'Bytes',
        functionNameBytes: 'Bytes',
      },
      TransactionUnpaused: {
        palletNameBytes: 'Bytes',
        functionNameBytes: 'Bytes',
      },
      EvmPrecompilePaused: {
        address: 'H160',
      },
      EvmPrecompileUnpaused: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup47: module_idle_scheduler::module::Event<T>
   **/
  ModuleIdleSchedulerModuleEvent: {
    _enum: {
      TaskDispatched: {
        taskId: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      TaskAdded: {
        taskId: 'u32',
        task: 'AcalaRuntimeScheduledTasks'
      }
    }
  },
  /**
   * Lookup48: acala_runtime::ScheduledTasks
   **/
  AcalaRuntimeScheduledTasks: {
    _enum: {
      EvmTask: 'ModuleEvmEvmTask'
    }
  },
  /**
   * Lookup49: module_evm::EvmTask<acala_runtime::Runtime>
   **/
  ModuleEvmEvmTask: {
    _enum: {
      Schedule: {
        from: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'u128',
        gasLimit: 'u64',
        storageLimit: 'u32',
      },
      Remove: {
        caller: 'H160',
        contract: 'H160',
        maintainer: 'H160'
      }
    }
  },
  /**
   * Lookup50: acala_runtime::Runtime
   **/
  AcalaRuntimeRuntime: 'Null',
  /**
   * Lookup51: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup52: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      TotalIssuanceForced: {
        _alias: {
          new_: 'new',
        },
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup53: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup54: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
      },
      Locked: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Issued: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'u128',
      },
      Rescinded: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup55: acala_primitives::currency::CurrencyId
   **/
  AcalaPrimitivesCurrencyCurrencyId: {
    _enum: {
      Token: 'AcalaPrimitivesCurrencyTokenSymbol',
      DexShare: '(AcalaPrimitivesCurrencyDexShare,AcalaPrimitivesCurrencyDexShare)',
      Erc20: 'H160',
      StableAssetPoolToken: 'u32',
      LiquidCrowdloan: 'u32',
      ForeignAsset: 'u16'
    }
  },
  /**
   * Lookup56: acala_primitives::currency::TokenSymbol
   **/
  AcalaPrimitivesCurrencyTokenSymbol: {
    _enum: ['ACA', 'AUSD', 'DOT', 'LDOT', 'TAP', '__Unused5', '__Unused6', '__Unused7', '__Unused8', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', '__Unused16', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', '__Unused32', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', '__Unused64', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'KAR', 'KUSD', 'KSM', 'LKSM', 'TAI', '__Unused133', '__Unused134', '__Unused135', '__Unused136', '__Unused137', '__Unused138', '__Unused139', '__Unused140', '__Unused141', '__Unused142', '__Unused143', '__Unused144', '__Unused145', '__Unused146', '__Unused147', '__Unused148', '__Unused149', '__Unused150', '__Unused151', '__Unused152', '__Unused153', '__Unused154', '__Unused155', '__Unused156', '__Unused157', '__Unused158', '__Unused159', '__Unused160', '__Unused161', '__Unused162', '__Unused163', '__Unused164', '__Unused165', '__Unused166', '__Unused167', 'BNC', 'VSKSM', 'PHA', 'KINT', 'KBTC']
  },
  /**
   * Lookup57: acala_primitives::currency::DexShare
   **/
  AcalaPrimitivesCurrencyDexShare: {
    _enum: {
      Token: 'AcalaPrimitivesCurrencyTokenSymbol',
      Erc20: 'H160',
      LiquidCrowdloan: 'u32',
      ForeignAsset: 'u16',
      StableAssetPoolToken: 'u32'
    }
  },
  /**
   * Lookup59: module_currencies::module::Event<T>
   **/
  ModuleCurrenciesModuleEvent: {
    _enum: {
      Transferred: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Deposited: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustSwept: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup60: orml_vesting::module::Event<T>
   **/
  OrmlVestingModuleEvent: {
    _enum: {
      VestingScheduleAdded: {
        from: 'AccountId32',
        to: 'AccountId32',
        vestingSchedule: 'OrmlVestingVestingSchedule',
      },
      Claimed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      VestingSchedulesUpdated: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup61: orml_vesting::VestingSchedule<BlockNumber, Balance>
   **/
  OrmlVestingVestingSchedule: {
    start: 'u32',
    period: 'u32',
    periodCount: 'u32',
    perPeriod: 'Compact<u128>'
  },
  /**
   * Lookup63: module_transaction_payment::module::Event<T>
   **/
  ModuleTransactionPaymentModuleEvent: {
    _enum: {
      ChargeFeePoolEnabled: {
        subAccount: 'AccountId32',
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        exchangeRate: 'u128',
        poolSize: 'u128',
        swapThreshold: 'u128',
      },
      ChargeFeePoolSwapped: {
        subAccount: 'AccountId32',
        supplyCurrencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        oldExchangeRate: 'u128',
        swapExchangeRate: 'u128',
        newExchangeRate: 'u128',
        newPoolSize: 'u128',
      },
      ChargeFeePoolDisabled: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        foreignAmount: 'u128',
        nativeAmount: 'u128',
      },
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        actualTip: 'u128',
        actualSurplus: 'u128'
      }
    }
  },
  /**
   * Lookup65: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128',
      },
      AssetSpendApproved: {
        index: 'u32',
        assetKind: 'Null',
        amount: 'u128',
        beneficiary: 'AccountId32',
        validFrom: 'u32',
        expireAt: 'u32',
      },
      AssetSpendVoided: {
        index: 'u32',
      },
      Paid: {
        index: 'u32',
        paymentId: 'Null',
      },
      PaymentFailed: {
        index: 'u32',
        paymentId: 'Null',
      },
      SpendProcessed: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup66: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32',
      },
      BountyApproved: {
        index: 'u32',
      },
      CuratorProposed: {
        bountyId: 'u32',
        curator: 'AccountId32',
      },
      CuratorUnassigned: {
        bountyId: 'u32',
      },
      CuratorAccepted: {
        bountyId: 'u32',
        curator: 'AccountId32',
      },
      DepositPoked: {
        bountyId: 'u32',
        proposer: 'AccountId32',
        oldDeposit: 'u128',
        newDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup67: pallet_tips::pallet::Event<T, I>
   **/
  PalletTipsEvent: {
    _enum: {
      NewTip: {
        tipHash: 'H256',
      },
      TipClosing: {
        tipHash: 'H256',
      },
      TipClosed: {
        tipHash: 'H256',
        who: 'AccountId32',
        payout: 'u128',
      },
      TipRetracted: {
        tipHash: 'H256',
      },
      TipSlashed: {
        tipHash: 'H256',
        finder: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup68: module_collator_selection::pallet::Event<T>
   **/
  ModuleCollatorSelectionEvent: {
    _enum: {
      NewInvulnerables: {
        newInvulnerables: 'Vec<AccountId32>',
      },
      NewDesiredCandidates: {
        newDesiredCandidates: 'u32',
      },
      NewCandidacyBond: {
        newCandidacyBond: 'u128',
      },
      CandidateAdded: {
        who: 'AccountId32',
        bond: 'u128',
      },
      CandidateRemoved: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup70: pallet_session::pallet::Event<T>
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32',
      },
      NewQueued: 'Null',
      ValidatorDisabled: {
        validator: 'AccountId32',
      },
      ValidatorReenabled: {
        validator: 'AccountId32'
      }
    }
  },
  /**
   * Lookup71: module_session_manager::module::Event<T>
   **/
  ModuleSessionManagerModuleEvent: {
    _enum: {
      ScheduledSessionDuration: {
        blockNumber: 'u32',
        sessionIndex: 'u32',
        sessionDuration: 'u32'
      }
    }
  },
  /**
   * Lookup72: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      XcmpMessageSent: {
        messageHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup73: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: 'StagingXcmV5TraitsOutcome',
      },
      Sent: {
        origin: 'StagingXcmV5Location',
        destination: 'StagingXcmV5Location',
        message: 'StagingXcmV5Xcm',
        messageId: '[u8;32]',
      },
      SendFailed: {
        origin: 'StagingXcmV5Location',
        destination: 'StagingXcmV5Location',
        error: 'XcmV3TraitsSendError',
        messageId: '[u8;32]',
      },
      ProcessXcmError: {
        origin: 'StagingXcmV5Location',
        error: 'XcmV5TraitsError',
        messageId: '[u8;32]',
      },
      UnexpectedResponse: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
      },
      ResponseReady: {
        queryId: 'u64',
        response: 'StagingXcmV5Response',
      },
      Notified: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyOverweight: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
        actualWeight: 'SpWeightsWeightV2Weight',
        maxBudgetedWeight: 'SpWeightsWeightV2Weight',
      },
      NotifyDispatchError: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyDecodeFailed: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      InvalidResponder: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
        expectedLocation: 'Option<StagingXcmV5Location>',
      },
      InvalidResponderVersion: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
      },
      ResponseTaken: {
        queryId: 'u64',
      },
      AssetsTrapped: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV5Location',
        assets: 'XcmVersionedAssets',
      },
      VersionChangeNotified: {
        destination: 'StagingXcmV5Location',
        result: 'u32',
        cost: 'StagingXcmV5AssetAssets',
        messageId: '[u8;32]',
      },
      SupportedVersionChanged: {
        location: 'StagingXcmV5Location',
        version: 'u32',
      },
      NotifyTargetSendFail: {
        location: 'StagingXcmV5Location',
        queryId: 'u64',
        error: 'XcmV5TraitsError',
      },
      NotifyTargetMigrationFail: {
        location: 'XcmVersionedLocation',
        queryId: 'u64',
      },
      InvalidQuerierVersion: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
      },
      InvalidQuerier: {
        origin: 'StagingXcmV5Location',
        queryId: 'u64',
        expectedQuerier: 'StagingXcmV5Location',
        maybeActualQuerier: 'Option<StagingXcmV5Location>',
      },
      VersionNotifyStarted: {
        destination: 'StagingXcmV5Location',
        cost: 'StagingXcmV5AssetAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyRequested: {
        destination: 'StagingXcmV5Location',
        cost: 'StagingXcmV5AssetAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyUnrequested: {
        destination: 'StagingXcmV5Location',
        cost: 'StagingXcmV5AssetAssets',
        messageId: '[u8;32]',
      },
      FeesPaid: {
        paying: 'StagingXcmV5Location',
        fees: 'StagingXcmV5AssetAssets',
      },
      AssetsClaimed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV5Location',
        assets: 'XcmVersionedAssets',
      },
      VersionMigrationFinished: {
        version: 'u32',
      },
      AliasAuthorized: {
        aliaser: 'StagingXcmV5Location',
        target: 'StagingXcmV5Location',
        expiry: 'Option<u64>',
      },
      AliasAuthorizationRemoved: {
        aliaser: 'StagingXcmV5Location',
        target: 'StagingXcmV5Location',
      },
      AliasesAuthorizationsRemoved: {
        target: 'StagingXcmV5Location'
      }
    }
  },
  /**
   * Lookup74: staging_xcm::v5::traits::Outcome
   **/
  StagingXcmV5TraitsOutcome: {
    _enum: {
      Complete: {
        used: 'SpWeightsWeightV2Weight',
      },
      Incomplete: {
        used: 'SpWeightsWeightV2Weight',
        error: 'StagingXcmV5TraitsInstructionError',
      },
      Error: 'StagingXcmV5TraitsInstructionError'
    }
  },
  /**
   * Lookup75: staging_xcm::v5::traits::InstructionError
   **/
  StagingXcmV5TraitsInstructionError: {
    index: 'u8',
    error: 'XcmV5TraitsError'
  },
  /**
   * Lookup76: xcm::v5::traits::Error
   **/
  XcmV5TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      TooManyAssets: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup77: staging_xcm::v5::location::Location
   **/
  StagingXcmV5Location: {
    parents: 'u8',
    interior: 'StagingXcmV5Junctions'
  },
  /**
   * Lookup78: staging_xcm::v5::junctions::Junctions
   **/
  StagingXcmV5Junctions: {
    _enum: {
      Here: 'Null',
      X1: '[Lookup80;1]',
      X2: '[Lookup80;2]',
      X3: '[Lookup80;3]',
      X4: '[Lookup80;4]',
      X5: '[Lookup80;5]',
      X6: '[Lookup80;6]',
      X7: '[Lookup80;7]',
      X8: '[Lookup80;8]'
    }
  },
  /**
   * Lookup80: staging_xcm::v5::junction::Junction
   **/
  StagingXcmV5Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV5JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV5JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV5JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV5JunctionNetworkId'
    }
  },
  /**
   * Lookup83: staging_xcm::v5::junction::NetworkId
   **/
  StagingXcmV5JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup84: xcm::v3::junction::BodyId
   **/
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup85: xcm::v3::junction::BodyPart
   **/
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup93: staging_xcm::v5::Xcm<Call>
   **/
  StagingXcmV5Xcm: 'Vec<StagingXcmV5Instruction>',
  /**
   * Lookup95: staging_xcm::v5::Instruction<Call>
   **/
  StagingXcmV5Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV5AssetAssets',
      ReserveAssetDeposited: 'StagingXcmV5AssetAssets',
      ReceiveTeleportedAsset: 'StagingXcmV5AssetAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV5Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV5Location>',
      },
      TransferAsset: {
        assets: 'StagingXcmV5AssetAssets',
        beneficiary: 'StagingXcmV5Location',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV5AssetAssets',
        dest: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      Transact: {
        originKind: 'XcmV3OriginKind',
        fallbackMaxWeight: 'Option<SpWeightsWeightV2Weight>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV5Junctions',
      ReportError: 'StagingXcmV5QueryResponseInfo',
      DepositAsset: {
        assets: 'StagingXcmV5AssetAssetFilter',
        beneficiary: 'StagingXcmV5Location',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV5AssetAssetFilter',
        dest: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV5AssetAssetFilter',
        want: 'StagingXcmV5AssetAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV5AssetAssetFilter',
        reserve: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV5AssetAssetFilter',
        dest: 'StagingXcmV5Location',
        xcm: 'StagingXcmV5Xcm',
      },
      ReportHolding: {
        responseInfo: 'StagingXcmV5QueryResponseInfo',
        assets: 'StagingXcmV5AssetAssetFilter',
      },
      BuyExecution: {
        fees: 'StagingXcmV5Asset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV5Xcm',
      SetAppendix: 'StagingXcmV5Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV5AssetAssets',
        ticket: 'StagingXcmV5Location',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'StagingXcmV5AssetAssets',
      ExpectAsset: 'StagingXcmV5AssetAssets',
      ExpectOrigin: 'Option<StagingXcmV5Location>',
      ExpectError: 'Option<(u32,XcmV5TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'StagingXcmV5QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'StagingXcmV5QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'StagingXcmV5Junction',
      ExportMessage: {
        network: 'StagingXcmV5JunctionNetworkId',
        destination: 'StagingXcmV5Junctions',
        xcm: 'StagingXcmV5Xcm',
      },
      LockAsset: {
        asset: 'StagingXcmV5Asset',
        unlocker: 'StagingXcmV5Location',
      },
      UnlockAsset: {
        asset: 'StagingXcmV5Asset',
        target: 'StagingXcmV5Location',
      },
      NoteUnlockable: {
        asset: 'StagingXcmV5Asset',
        owner: 'StagingXcmV5Location',
      },
      RequestUnlock: {
        asset: 'StagingXcmV5Asset',
        locker: 'StagingXcmV5Location',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV5Location',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV5Location>',
      },
      PayFees: {
        asset: 'StagingXcmV5Asset',
      },
      InitiateTransfer: {
        destination: 'StagingXcmV5Location',
        remoteFees: 'Option<StagingXcmV5AssetAssetTransferFilter>',
        preserveOrigin: 'bool',
        assets: 'Vec<StagingXcmV5AssetAssetTransferFilter>',
        remoteXcm: 'StagingXcmV5Xcm',
      },
      ExecuteWithOrigin: {
        descendantOrigin: 'Option<StagingXcmV5Junctions>',
        xcm: 'StagingXcmV5Xcm',
      },
      SetHints: {
        hints: 'Vec<StagingXcmV5Hint>'
      }
    }
  },
  /**
   * Lookup96: staging_xcm::v5::asset::Assets
   **/
  StagingXcmV5AssetAssets: 'Vec<StagingXcmV5Asset>',
  /**
   * Lookup98: staging_xcm::v5::asset::Asset
   **/
  StagingXcmV5Asset: {
    id: 'StagingXcmV5AssetAssetId',
    fun: 'StagingXcmV5AssetFungibility'
  },
  /**
   * Lookup99: staging_xcm::v5::asset::AssetId
   **/
  StagingXcmV5AssetAssetId: 'StagingXcmV5Location',
  /**
   * Lookup100: staging_xcm::v5::asset::Fungibility
   **/
  StagingXcmV5AssetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV5AssetAssetInstance'
    }
  },
  /**
   * Lookup101: staging_xcm::v5::asset::AssetInstance
   **/
  StagingXcmV5AssetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup103: staging_xcm::v5::Response
   **/
  StagingXcmV5Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV5AssetAssets',
      ExecutionResult: 'Option<(u32,XcmV5TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<StagingXcmV5PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup107: staging_xcm::v5::PalletInfo
   **/
  StagingXcmV5PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup110: xcm::v3::MaybeErrorCode
   **/
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup113: xcm::v3::OriginKind
   **/
  XcmV3OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup115: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup116: staging_xcm::v5::QueryResponseInfo
   **/
  StagingXcmV5QueryResponseInfo: {
    destination: 'StagingXcmV5Location',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup117: staging_xcm::v5::asset::AssetFilter
   **/
  StagingXcmV5AssetAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV5AssetAssets',
      Wild: 'StagingXcmV5AssetWildAsset'
    }
  },
  /**
   * Lookup118: staging_xcm::v5::asset::WildAsset
   **/
  StagingXcmV5AssetWildAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV5AssetAssetId',
        fun: 'StagingXcmV5AssetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'StagingXcmV5AssetAssetId',
        fun: 'StagingXcmV5AssetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup119: staging_xcm::v5::asset::WildFungibility
   **/
  StagingXcmV5AssetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup120: xcm::v3::WeightLimit
   **/
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup122: staging_xcm::v5::asset::AssetTransferFilter
   **/
  StagingXcmV5AssetAssetTransferFilter: {
    _enum: {
      Teleport: 'StagingXcmV5AssetAssetFilter',
      ReserveDeposit: 'StagingXcmV5AssetAssetFilter',
      ReserveWithdraw: 'StagingXcmV5AssetAssetFilter'
    }
  },
  /**
   * Lookup127: staging_xcm::v5::Hint
   **/
  StagingXcmV5Hint: {
    _enum: {
      AssetClaimer: {
        location: 'StagingXcmV5Location'
      }
    }
  },
  /**
   * Lookup129: xcm::v3::traits::SendError
   **/
  XcmV3TraitsSendError: {
    _enum: ['NotApplicable', 'Transport', 'Unroutable', 'DestinationUnsupported', 'ExceedsMaxMessageSize', 'MissingArgument', 'Fees']
  },
  /**
   * Lookup130: xcm::VersionedAssets
   **/
  XcmVersionedAssets: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetMultiAssets',
      V4: 'StagingXcmV4AssetAssets',
      V5: 'StagingXcmV5AssetAssets'
    }
  },
  /**
   * Lookup131: xcm::v3::multiasset::MultiAssets
   **/
  XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
  /**
   * Lookup133: xcm::v3::multiasset::MultiAsset
   **/
  XcmV3MultiAsset: {
    id: 'XcmV3MultiassetAssetId',
    fun: 'XcmV3MultiassetFungibility'
  },
  /**
   * Lookup134: xcm::v3::multiasset::AssetId
   **/
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup135: staging_xcm::v3::multilocation::MultiLocation
   **/
  StagingXcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup136: xcm::v3::junctions::Junctions
   **/
  XcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV3Junction',
      X2: '(XcmV3Junction,XcmV3Junction)',
      X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
    }
  },
  /**
   * Lookup137: xcm::v3::junction::Junction
   **/
  XcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<XcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<XcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<XcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'XcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup139: xcm::v3::junction::NetworkId
   **/
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup140: xcm::v3::multiasset::Fungibility
   **/
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup141: xcm::v3::multiasset::AssetInstance
   **/
  XcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup142: staging_xcm::v4::asset::Assets
   **/
  StagingXcmV4AssetAssets: 'Vec<StagingXcmV4Asset>',
  /**
   * Lookup144: staging_xcm::v4::asset::Asset
   **/
  StagingXcmV4Asset: {
    id: 'StagingXcmV4AssetAssetId',
    fun: 'StagingXcmV4AssetFungibility'
  },
  /**
   * Lookup145: staging_xcm::v4::asset::AssetId
   **/
  StagingXcmV4AssetAssetId: 'StagingXcmV4Location',
  /**
   * Lookup146: staging_xcm::v4::location::Location
   **/
  StagingXcmV4Location: {
    parents: 'u8',
    interior: 'StagingXcmV4Junctions'
  },
  /**
   * Lookup147: staging_xcm::v4::junctions::Junctions
   **/
  StagingXcmV4Junctions: {
    _enum: {
      Here: 'Null',
      X1: '[Lookup149;1]',
      X2: '[Lookup149;2]',
      X3: '[Lookup149;3]',
      X4: '[Lookup149;4]',
      X5: '[Lookup149;5]',
      X6: '[Lookup149;6]',
      X7: '[Lookup149;7]',
      X8: '[Lookup149;8]'
    }
  },
  /**
   * Lookup149: staging_xcm::v4::junction::Junction
   **/
  StagingXcmV4Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV4JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV4JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV4JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV4JunctionNetworkId'
    }
  },
  /**
   * Lookup151: staging_xcm::v4::junction::NetworkId
   **/
  StagingXcmV4JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup159: staging_xcm::v4::asset::Fungibility
   **/
  StagingXcmV4AssetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV4AssetAssetInstance'
    }
  },
  /**
   * Lookup160: staging_xcm::v4::asset::AssetInstance
   **/
  StagingXcmV4AssetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup161: xcm::VersionedLocation
   **/
  XcmVersionedLocation: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiLocation',
      V4: 'StagingXcmV4Location',
      V5: 'StagingXcmV5Location'
    }
  },
  /**
   * Lookup163: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],StagingXcmV5TraitsOutcome)'
    }
  },
  /**
   * Lookup164: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredAssets: {
        sender: 'AccountId32',
        assets: 'StagingXcmV5AssetAssets',
        fee: 'StagingXcmV5Asset',
        dest: 'StagingXcmV5Location',
      },
      MigrationPhaseChanged: {
        migrationPhase: 'OrmlXtokensMigrationPhase'
      }
    }
  },
  /**
   * Lookup165: orml_xtokens::MigrationPhase
   **/
  OrmlXtokensMigrationPhase: {
    _enum: ['NotStarted', 'InProgress', 'Completed']
  },
  /**
   * Lookup166: orml_unknown_tokens::module::Event
   **/
  OrmlUnknownTokensModuleEvent: {
    _enum: {
      Deposited: {
        asset: 'StagingXcmV5Asset',
        who: 'StagingXcmV5Location',
      },
      Withdrawn: {
        asset: 'StagingXcmV5Asset',
        who: 'StagingXcmV5Location'
      }
    }
  },
  /**
   * Lookup167: orml_xcm::module::Event<T>
   **/
  OrmlXcmModuleEvent: {
    _enum: {
      Sent: {
        to: 'StagingXcmV5Location',
        message: 'StagingXcmV5Xcm'
      }
    }
  },
  /**
   * Lookup168: pallet_message_queue::pallet::Event<T>
   **/
  PalletMessageQueueEvent: {
    _enum: {
      ProcessingFailed: {
        id: 'H256',
        origin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        error: 'FrameSupportMessagesProcessMessageError',
      },
      Processed: {
        id: 'H256',
        origin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        weightUsed: 'SpWeightsWeightV2Weight',
        success: 'bool',
      },
      OverweightEnqueued: {
        id: '[u8;32]',
        origin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        pageIndex: 'u32',
        messageIndex: 'u32',
      },
      PageReaped: {
        origin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup169: cumulus_primitives_core::AggregateMessageOrigin
   **/
  CumulusPrimitivesCoreAggregateMessageOrigin: {
    _enum: {
      Here: 'Null',
      Parent: 'Null',
      Sibling: 'u32'
    }
  },
  /**
   * Lookup171: frame_support::traits::messages::ProcessMessageError
   **/
  FrameSupportMessagesProcessMessageError: {
    _enum: {
      BadFormat: 'Null',
      Corrupt: 'Null',
      Unsupported: 'Null',
      Overweight: 'SpWeightsWeightV2Weight',
      Yield: 'Null',
      StackLimitReached: 'Null'
    }
  },
  /**
   * Lookup172: orml_authority::module::Event<T>
   **/
  OrmlAuthorityModuleEvent: {
    _enum: {
      Dispatched: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Scheduled: {
        origin: 'AcalaRuntimeOriginCaller',
        index: 'u32',
      },
      FastTracked: {
        origin: 'AcalaRuntimeOriginCaller',
        index: 'u32',
        when: 'u32',
      },
      Delayed: {
        origin: 'AcalaRuntimeOriginCaller',
        index: 'u32',
        when: 'u32',
      },
      Cancelled: {
        origin: 'AcalaRuntimeOriginCaller',
        index: 'u32',
      },
      AuthorizedCall: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        caller: 'Option<AccountId32>',
      },
      RemovedAuthorizedCall: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      TriggeredCallBy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        caller: 'AccountId32'
      }
    }
  },
  /**
   * Lookup173: acala_runtime::OriginCaller
   **/
  AcalaRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      PolkadotXcm: 'PalletXcmOrigin',
      CumulusXcm: 'CumulusPalletXcmOrigin',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      Authority: 'OrmlAuthorityDelayedOrigin',
      GeneralCouncil: 'PalletCollectiveRawOrigin',
      __Unused62: 'Null',
      FinancialCouncil: 'PalletCollectiveRawOrigin',
      __Unused64: 'Null',
      HomaCouncil: 'PalletCollectiveRawOrigin',
      __Unused66: 'Null',
      TechnicalCommittee: 'PalletCollectiveRawOrigin'
    }
  },
  /**
   * Lookup174: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null',
      Authorized: 'Null'
    }
  },
  /**
   * Lookup175: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'StagingXcmV5Location',
      Response: 'StagingXcmV5Location'
    }
  },
  /**
   * Lookup176: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup177: orml_authority::DelayedOrigin<BlockNumber, acala_runtime::OriginCaller>
   **/
  OrmlAuthorityDelayedOrigin: {
    delay: 'u32',
    origin: 'AcalaRuntimeOriginCaller'
  },
  /**
   * Lookup178: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup183: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32',
      },
      Killed: {
        proposalHash: 'H256',
      },
      ProposalCostBurned: {
        proposalHash: 'H256',
        who: 'AccountId32',
      },
      ProposalCostReleased: {
        proposalHash: 'H256',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup184: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup191: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataTransferred: {
        _alias: {
          hash_: 'hash',
        },
        prevOwner: 'PalletDemocracyMetadataOwner',
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup192: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup193: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup195: pallet_democracy::types::MetadataOwner
   **/
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup196: orml_oracle::module::Event<T, I>
   **/
  OrmlOracleModuleEvent: {
    _enum: {
      NewFeedData: {
        sender: 'AccountId32',
        values: 'Vec<(AcalaPrimitivesCurrencyCurrencyId,u128)>'
      }
    }
  },
  /**
   * Lookup200: orml_auction::module::Event<T>
   **/
  OrmlAuctionModuleEvent: {
    _enum: {
      Bid: {
        auctionId: 'u32',
        bidder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup201: orml_parameters::module::Event<T>
   **/
  OrmlParametersModuleEvent: {
    _enum: {
      Updated: {
        keyValue: 'AcalaRuntimeRuntimeParameters'
      }
    }
  },
  /**
   * Lookup202: acala_runtime::RuntimeParameters
   **/
  AcalaRuntimeRuntimeParameters: {
    _enum: {
      Earning: 'ModuleEarningParameters'
    }
  },
  /**
   * Lookup203: module_earning::Parameters
   **/
  ModuleEarningParameters: {
    _enum: {
      InstantUnstakeFee: '(ModuleEarningInstantUnstakeFee,Option<Permill>)'
    }
  },
  /**
   * Lookup204: module_earning::InstantUnstakeFee
   **/
  ModuleEarningInstantUnstakeFee: 'Null',
  /**
   * Lookup207: module_prices::module::Event<T>
   **/
  ModulePricesModuleEvent: {
    _enum: {
      LockPrice: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        lockedPrice: 'u128',
      },
      UnlockPrice: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup208: module_dex::module::Event<T>
   **/
  ModuleDexModuleEvent: {
    _enum: {
      AddProvision: {
        who: 'AccountId32',
        currency0: 'AcalaPrimitivesCurrencyCurrencyId',
        contribution0: 'u128',
        currency1: 'AcalaPrimitivesCurrencyCurrencyId',
        contribution1: 'u128',
      },
      AddLiquidity: {
        who: 'AccountId32',
        currency0: 'AcalaPrimitivesCurrencyCurrencyId',
        pool0: 'u128',
        currency1: 'AcalaPrimitivesCurrencyCurrencyId',
        pool1: 'u128',
        shareIncrement: 'u128',
      },
      RemoveLiquidity: {
        who: 'AccountId32',
        currency0: 'AcalaPrimitivesCurrencyCurrencyId',
        pool0: 'u128',
        currency1: 'AcalaPrimitivesCurrencyCurrencyId',
        pool1: 'u128',
        shareDecrement: 'u128',
      },
      Swap: {
        trader: 'AccountId32',
        path: 'Vec<AcalaPrimitivesCurrencyCurrencyId>',
        liquidityChanges: 'Vec<u128>',
      },
      EnableTradingPair: {
        tradingPair: 'AcalaPrimitivesTradingPair',
      },
      ListProvisioning: {
        tradingPair: 'AcalaPrimitivesTradingPair',
      },
      DisableTradingPair: {
        tradingPair: 'AcalaPrimitivesTradingPair',
      },
      ProvisioningToEnabled: {
        tradingPair: 'AcalaPrimitivesTradingPair',
        pool0: 'u128',
        pool1: 'u128',
        shareAmount: 'u128',
      },
      RefundProvision: {
        who: 'AccountId32',
        currency0: 'AcalaPrimitivesCurrencyCurrencyId',
        contribution0: 'u128',
        currency1: 'AcalaPrimitivesCurrencyCurrencyId',
        contribution1: 'u128',
      },
      ProvisioningAborted: {
        tradingPair: 'AcalaPrimitivesTradingPair',
        accumulatedProvision0: 'u128',
        accumulatedProvision1: 'u128'
      }
    }
  },
  /**
   * Lookup211: acala_primitives::TradingPair
   **/
  AcalaPrimitivesTradingPair: '(AcalaPrimitivesCurrencyCurrencyId,AcalaPrimitivesCurrencyCurrencyId)',
  /**
   * Lookup212: module_earning::module::Event<T>
   **/
  ModuleEarningModuleEvent: {
    _enum: {
      Bonded: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unbonded: {
        who: 'AccountId32',
        amount: 'u128',
      },
      InstantUnbonded: {
        who: 'AccountId32',
        amount: 'u128',
        fee: 'u128',
      },
      Rebonded: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup213: module_auction_manager::module::Event<T>
   **/
  ModuleAuctionManagerModuleEvent: {
    _enum: {
      NewCollateralAuction: {
        auctionId: 'u32',
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        collateralAmount: 'u128',
        targetBidPrice: 'u128',
      },
      CancelAuction: {
        auctionId: 'u32',
      },
      CollateralAuctionDealt: {
        auctionId: 'u32',
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        collateralAmount: 'u128',
        winner: 'AccountId32',
        paymentAmount: 'u128',
      },
      DEXTakeCollateralAuction: {
        auctionId: 'u32',
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        collateralAmount: 'u128',
        supplyCollateralAmount: 'u128',
        targetStableAmount: 'u128',
      },
      CollateralAuctionAborted: {
        auctionId: 'u32',
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        collateralAmount: 'u128',
        targetStableAmount: 'u128',
        refundRecipient: 'AccountId32'
      }
    }
  },
  /**
   * Lookup214: module_loans::module::Event<T>
   **/
  ModuleLoansModuleEvent: {
    _enum: {
      PositionUpdated: {
        owner: 'AccountId32',
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        collateralAdjustment: 'i128',
        debitAdjustment: 'i128',
      },
      ConfiscateCollateralAndDebit: {
        owner: 'AccountId32',
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        confiscatedCollateralAmount: 'u128',
        deductDebitAmount: 'u128',
      },
      TransferLoan: {
        from: 'AccountId32',
        to: 'AccountId32',
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup216: module_honzon::module::Event<T>
   **/
  ModuleHonzonModuleEvent: {
    _enum: {
      Authorization: {
        authorizer: 'AccountId32',
        authorizee: 'AccountId32',
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      UnAuthorization: {
        authorizer: 'AccountId32',
        authorizee: 'AccountId32',
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      UnAuthorizationAll: {
        authorizer: 'AccountId32',
      },
      TransferDebit: {
        fromCurrency: 'AcalaPrimitivesCurrencyCurrencyId',
        toCurrency: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup217: module_cdp_treasury::module::Event<T>
   **/
  ModuleCdpTreasuryModuleEvent: {
    _enum: {
      ExpectedCollateralAuctionSizeUpdated: {
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        newSize: 'u128',
      },
      DebitOffsetBufferUpdated: {
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup218: module_cdp_engine::module::Event<T>
   **/
  ModuleCdpEngineModuleEvent: {
    _enum: {
      LiquidateUnsafeCDP: {
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        owner: 'AccountId32',
        collateralAmount: 'u128',
        badDebtValue: 'u128',
        targetAmount: 'u128',
      },
      SettleCDPInDebit: {
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        owner: 'AccountId32',
      },
      CloseCDPInDebitByDEX: {
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        owner: 'AccountId32',
        soldCollateralAmount: 'u128',
        refundCollateralAmount: 'u128',
        debitValue: 'u128',
      },
      InterestRatePerSecUpdated: {
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        newInterestRatePerSec: 'Option<u128>',
      },
      LiquidationRatioUpdated: {
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        newLiquidationRatio: 'Option<u128>',
      },
      LiquidationPenaltyUpdated: {
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        newLiquidationPenalty: 'Option<u128>',
      },
      RequiredCollateralRatioUpdated: {
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        newRequiredCollateralRatio: 'Option<u128>',
      },
      MaximumTotalDebitValueUpdated: {
        collateralType: 'AcalaPrimitivesCurrencyCurrencyId',
        newTotalDebitValue: 'u128',
      },
      LiquidationContractRegistered: {
        address: 'H160',
      },
      LiquidationContractDeregistered: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup220: module_emergency_shutdown::module::Event<T>
   **/
  ModuleEmergencyShutdownModuleEvent: {
    _enum: {
      Shutdown: {
        blockNumber: 'u32',
      },
      OpenRefund: {
        blockNumber: 'u32',
      },
      Refund: {
        who: 'AccountId32',
        stableCoinAmount: 'u128',
        refundList: 'Vec<(AcalaPrimitivesCurrencyCurrencyId,u128)>'
      }
    }
  },
  /**
   * Lookup223: module_homa::module::Event<T>
   **/
  ModuleHomaModuleEvent: {
    _enum: {
      Minted: {
        minter: 'AccountId32',
        stakingCurrencyAmount: 'u128',
        liquidAmountReceived: 'u128',
        liquidAmountAddedToVoid: 'u128',
      },
      RequestedRedeem: {
        redeemer: 'AccountId32',
        liquidAmount: 'u128',
        allowFastMatch: 'bool',
      },
      RedeemRequestCancelled: {
        redeemer: 'AccountId32',
        cancelledLiquidAmount: 'u128',
      },
      RedeemedByFastMatch: {
        redeemer: 'AccountId32',
        matchedLiquidAmount: 'u128',
        feeInLiquid: 'u128',
        redeemedStakingAmount: 'u128',
      },
      RedeemedByUnbond: {
        redeemer: 'AccountId32',
        eraIndexWhenUnbond: 'u32',
        liquidAmount: 'u128',
        unbondingStakingAmount: 'u128',
      },
      WithdrawRedemption: {
        redeemer: 'AccountId32',
        redemptionAmount: 'u128',
      },
      CurrentEraBumped: {
        newEraIndex: 'u32',
      },
      CurrentEraReset: {
        newEraIndex: 'u32',
      },
      LedgerBondedReset: {
        subAccountIndex: 'u16',
        newBondedAmount: 'u128',
      },
      LedgerUnlockingReset: {
        subAccountIndex: 'u16',
        newUnlocking: 'Vec<ModuleHomaModuleUnlockChunk>',
      },
      SoftBondedCapPerSubAccountUpdated: {
        capAmount: 'u128',
      },
      EstimatedRewardRatePerEraUpdated: {
        rewardRate: 'u128',
      },
      CommissionRateUpdated: {
        commissionRate: 'u128',
      },
      FastMatchFeeRateUpdated: {
        fastMatchFeeRate: 'u128',
      },
      LastEraBumpedBlockUpdated: {
        lastEraBumpedBlock: 'u32',
      },
      BumpEraFrequencyUpdated: {
        frequency: 'u32',
      },
      NominateIntervalEraUpdated: {
        eras: 'u32',
      },
      HomaWithdrawUnbonded: {
        subAccountIndex: 'u16',
        amount: 'u128',
      },
      HomaUnbond: {
        subAccountIndex: 'u16',
        amount: 'u128',
      },
      HomaBondExtra: {
        subAccountIndex: 'u16',
        amount: 'u128',
      },
      HomaNominate: {
        subAccountIndex: 'u16',
        nominations: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup225: module_homa::module::UnlockChunk
   **/
  ModuleHomaModuleUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup226: module_xcm_interface::module::Event<T>
   **/
  ModuleXcmInterfaceModuleEvent: {
    _enum: {
      XcmDestWeightUpdated: {
        xcmOperation: 'ModuleXcmInterfaceModuleXcmInterfaceOperation',
        newXcmDestWeight: 'SpWeightsWeightV2Weight',
      },
      XcmFeeUpdated: {
        xcmOperation: 'ModuleXcmInterfaceModuleXcmInterfaceOperation',
        newXcmDestWeight: 'u128'
      }
    }
  },
  /**
   * Lookup227: module_xcm_interface::module::XcmInterfaceOperation
   **/
  ModuleXcmInterfaceModuleXcmInterfaceOperation: {
    _enum: {
      XcmTransfer: 'Null',
      HomaWithdrawUnbonded: 'Null',
      HomaBondExtra: 'Null',
      HomaUnbond: 'Null',
      ParachainFee: 'StagingXcmV5Location',
      ProxyReserveTransferAssets: 'Null',
      HomaNominate: 'Null'
    }
  },
  /**
   * Lookup228: module_homa_validator_list::module::Event<T>
   **/
  ModuleHomaValidatorListModuleEvent: {
    _enum: {
      FreezeValidator: {
        validator: 'AccountId32',
      },
      ThawValidator: {
        validator: 'AccountId32',
      },
      BondGuarantee: {
        who: 'AccountId32',
        validator: 'AccountId32',
        bond: 'u128',
      },
      UnbondGuarantee: {
        who: 'AccountId32',
        validator: 'AccountId32',
        bond: 'u128',
      },
      WithdrawnGuarantee: {
        who: 'AccountId32',
        validator: 'AccountId32',
        bond: 'u128',
      },
      SlashGuarantee: {
        who: 'AccountId32',
        validator: 'AccountId32',
        bond: 'u128',
      },
      RebondGuarantee: {
        who: 'AccountId32',
        validator: 'AccountId32',
        bond: 'u128'
      }
    }
  },
  /**
   * Lookup229: module_nominees_election::module::Event<T, I>
   **/
  ModuleNomineesElectionModuleEvent: {
    _enum: {
      Bond: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unbond: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Rebond: {
        who: 'AccountId32',
        amount: 'u128',
      },
      WithdrawUnbonded: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Nominate: {
        who: 'AccountId32',
        targets: 'Vec<AccountId32>',
      },
      ResetReservedNominees: {
        groupIndex: 'u16',
        reservedNominees: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup230: module_incentives::module::Event<T>
   **/
  ModuleIncentivesModuleEvent: {
    _enum: {
      DepositDexShare: {
        who: 'AccountId32',
        dexShareType: 'AcalaPrimitivesCurrencyCurrencyId',
        deposit: 'u128',
      },
      WithdrawDexShare: {
        who: 'AccountId32',
        dexShareType: 'AcalaPrimitivesCurrencyCurrencyId',
        withdraw: 'u128',
      },
      ClaimRewards: {
        who: 'AccountId32',
        pool: 'ModuleSupportIncentivesPoolId',
        rewardCurrencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        actualAmount: 'u128',
        deductionAmount: 'u128',
      },
      IncentiveRewardAmountUpdated: {
        pool: 'ModuleSupportIncentivesPoolId',
        rewardCurrencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        rewardAmountPerPeriod: 'u128',
      },
      ClaimRewardDeductionRateUpdated: {
        pool: 'ModuleSupportIncentivesPoolId',
        deductionRate: 'u128',
      },
      ClaimRewardDeductionCurrencyUpdated: {
        pool: 'ModuleSupportIncentivesPoolId',
        currency: 'Option<AcalaPrimitivesCurrencyCurrencyId>'
      }
    }
  },
  /**
   * Lookup231: module_support::incentives::PoolId
   **/
  ModuleSupportIncentivesPoolId: {
    _enum: {
      Loans: 'AcalaPrimitivesCurrencyCurrencyId',
      Dex: 'AcalaPrimitivesCurrencyCurrencyId',
      Earning: 'AcalaPrimitivesCurrencyCurrencyId',
      NomineesElection: 'Null'
    }
  },
  /**
   * Lookup233: module_nft::module::Event<T>
   **/
  ModuleNftModuleEvent: {
    _enum: {
      CreatedClass: {
        owner: 'AccountId32',
        classId: 'u32',
      },
      MintedToken: {
        from: 'AccountId32',
        to: 'AccountId32',
        classId: 'u32',
        quantity: 'u32',
      },
      TransferredToken: {
        from: 'AccountId32',
        to: 'AccountId32',
        classId: 'u32',
        tokenId: 'u64',
      },
      BurnedToken: {
        owner: 'AccountId32',
        classId: 'u32',
        tokenId: 'u64',
      },
      BurnedTokenWithRemark: {
        owner: 'AccountId32',
        classId: 'u32',
        tokenId: 'u64',
        remarkHash: 'H256',
      },
      DestroyedClass: {
        owner: 'AccountId32',
        classId: 'u32'
      }
    }
  },
  /**
   * Lookup234: module_asset_registry::module::Event<T>
   **/
  ModuleAssetRegistryModuleEvent: {
    _enum: {
      ForeignAssetRegistered: {
        assetId: 'u16',
        assetAddress: 'StagingXcmV5Location',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata',
      },
      ForeignAssetUpdated: {
        assetId: 'u16',
        assetAddress: 'StagingXcmV5Location',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata',
      },
      AssetRegistered: {
        assetId: 'AcalaPrimitivesCurrencyAssetIds',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata',
      },
      AssetUpdated: {
        assetId: 'AcalaPrimitivesCurrencyAssetIds',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata'
      }
    }
  },
  /**
   * Lookup235: acala_primitives::currency::AssetMetadata<Balance>
   **/
  AcalaPrimitivesCurrencyAssetMetadata: {
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    minimalBalance: 'u128'
  },
  /**
   * Lookup236: acala_primitives::currency::AssetIds
   **/
  AcalaPrimitivesCurrencyAssetIds: {
    _enum: {
      Erc20: 'H160',
      StableAssetId: 'u32',
      ForeignAssetId: 'u16',
      NativeAssetId: 'AcalaPrimitivesCurrencyCurrencyId'
    }
  },
  /**
   * Lookup237: module_liquid_crowdloan::module::Event<T>
   **/
  ModuleLiquidCrowdloanModuleEvent: {
    _enum: {
      Redeemed: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'u128',
      },
      RedeemCurrencyIdUpdated: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup238: module_evm::module::Event<T>
   **/
  ModuleEvmModuleEvent: {
    _enum: {
      Created: {
        from: 'H160',
        contract: 'H160',
        logs: 'Vec<EthereumLog>',
        usedGas: 'u64',
        usedStorage: 'i32',
      },
      CreatedFailed: {
        from: 'H160',
        contract: 'H160',
        exitReason: 'EvmCoreErrorExitReason',
        logs: 'Vec<EthereumLog>',
        usedGas: 'u64',
        usedStorage: 'i32',
      },
      Executed: {
        from: 'H160',
        contract: 'H160',
        logs: 'Vec<EthereumLog>',
        usedGas: 'u64',
        usedStorage: 'i32',
      },
      ExecutedFailed: {
        from: 'H160',
        contract: 'H160',
        exitReason: 'EvmCoreErrorExitReason',
        output: 'Bytes',
        logs: 'Vec<EthereumLog>',
        usedGas: 'u64',
        usedStorage: 'i32',
      },
      TransferredMaintainer: {
        contract: 'H160',
        newMaintainer: 'H160',
      },
      ContractDevelopmentEnabled: {
        who: 'AccountId32',
      },
      ContractDevelopmentDisabled: {
        who: 'AccountId32',
      },
      ContractPublished: {
        contract: 'H160',
      },
      ContractSetCode: {
        contract: 'H160',
      },
      ContractSelfdestructed: {
        contract: 'H160'
      }
    }
  },
  /**
   * Lookup240: ethereum::log::Log
   **/
  EthereumLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
   * Lookup243: evm_core::error::ExitReason
   **/
  EvmCoreErrorExitReason: {
    _enum: {
      Succeed: 'EvmCoreErrorExitSucceed',
      Error: 'EvmCoreErrorExitError',
      Revert: 'EvmCoreErrorExitRevert',
      Fatal: 'EvmCoreErrorExitFatal'
    }
  },
  /**
   * Lookup244: evm_core::error::ExitSucceed
   **/
  EvmCoreErrorExitSucceed: {
    _enum: ['Stopped', 'Returned', 'Suicided']
  },
  /**
   * Lookup245: evm_core::error::ExitError
   **/
  EvmCoreErrorExitError: {
    _enum: {
      StackUnderflow: 'Null',
      StackOverflow: 'Null',
      InvalidJump: 'Null',
      InvalidRange: 'Null',
      DesignatedInvalid: 'Null',
      CallTooDeep: 'Null',
      CreateCollision: 'Null',
      CreateContractLimit: 'Null',
      OutOfOffset: 'Null',
      OutOfGas: 'Null',
      OutOfFund: 'Null',
      PCUnderflow: 'Null',
      CreateEmpty: 'Null',
      Other: 'Text',
      MaxNonce: 'Null',
      InvalidCode: 'u8'
    }
  },
  /**
   * Lookup249: evm_core::error::ExitRevert
   **/
  EvmCoreErrorExitRevert: {
    _enum: ['Reverted']
  },
  /**
   * Lookup250: evm_core::error::ExitFatal
   **/
  EvmCoreErrorExitFatal: {
    _enum: {
      NotSupported: 'Null',
      UnhandledInterrupt: 'Null',
      CallErrorAsFatal: 'EvmCoreErrorExitError',
      Other: 'Text'
    }
  },
  /**
   * Lookup251: module_evm_accounts::module::Event<T>
   **/
  ModuleEvmAccountsModuleEvent: {
    _enum: {
      ClaimAccount: {
        accountId: 'AccountId32',
        evmAddress: 'H160'
      }
    }
  },
  /**
   * Lookup252: nutsfinance_stable_asset::pallet::Event<T>
   **/
  NutsfinanceStableAssetEvent: {
    _enum: {
      CreatePool: {
        poolId: 'u32',
        a: 'u128',
        swapId: 'AccountId32',
        palletId: 'AccountId32',
      },
      Minted: {
        minter: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        inputAmounts: 'Vec<u128>',
        minOutputAmount: 'u128',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        feeAmount: 'u128',
        outputAmount: 'u128',
      },
      TokenSwapped: {
        swapper: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        inputAsset: 'AcalaPrimitivesCurrencyCurrencyId',
        outputAsset: 'AcalaPrimitivesCurrencyCurrencyId',
        inputAmount: 'u128',
        minOutputAmount: 'u128',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        outputAmount: 'u128',
      },
      RedeemedProportion: {
        redeemer: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        inputAmount: 'u128',
        minOutputAmounts: 'Vec<u128>',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        feeAmount: 'u128',
        outputAmounts: 'Vec<u128>',
      },
      RedeemedSingle: {
        redeemer: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        inputAmount: 'u128',
        outputAsset: 'AcalaPrimitivesCurrencyCurrencyId',
        minOutputAmount: 'u128',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        feeAmount: 'u128',
        outputAmount: 'u128',
      },
      RedeemedMulti: {
        redeemer: 'AccountId32',
        poolId: 'u32',
        a: 'u128',
        outputAmounts: 'Vec<u128>',
        maxInputAmount: 'u128',
        balances: 'Vec<u128>',
        totalSupply: 'u128',
        feeAmount: 'u128',
        inputAmount: 'u128',
      },
      BalanceUpdated: {
        poolId: 'u32',
        oldBalances: 'Vec<u128>',
        newBalances: 'Vec<u128>',
      },
      YieldCollected: {
        poolId: 'u32',
        a: 'u128',
        oldTotalSupply: 'u128',
        newTotalSupply: 'u128',
        who: 'AccountId32',
        amount: 'u128',
      },
      FeeCollected: {
        poolId: 'u32',
        a: 'u128',
        oldBalances: 'Vec<u128>',
        newBalances: 'Vec<u128>',
        oldTotalSupply: 'u128',
        newTotalSupply: 'u128',
        who: 'AccountId32',
        amount: 'u128',
      },
      AModified: {
        poolId: 'u32',
        value: 'u128',
        time: 'u32',
      },
      FeeModified: {
        poolId: 'u32',
        mintFee: 'u128',
        swapFee: 'u128',
        redeemFee: 'u128',
      },
      RecipientModified: {
        poolId: 'u32',
        feeRecipient: 'AccountId32',
        yieldRecipient: 'AccountId32'
      }
    }
  },
  /**
   * Lookup253: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256',
      },
      UpwardMessageSent: {
        messageHash: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup254: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        _alias: {
          new_: 'new',
        },
        old: 'Option<AccountId32>',
        new_: 'AccountId32',
      },
      KeyRemoved: 'Null',
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup255: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup257: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup258: frame_system::CodeUpgradeAuthorization<T>
   **/
  FrameSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup259: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes',
      },
      __Unused8: 'Null',
      authorize_upgrade: {
        codeHash: 'H256',
      },
      authorize_upgrade_without_checks: {
        codeHash: 'H256',
      },
      apply_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup263: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup264: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup265: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup266: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup267: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup268: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup269: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    systemVersion: 'u8'
  },
  /**
   * Lookup273: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered', 'MultiBlockMigrationsOngoing', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup274: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup277: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<acala_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, acala_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'AcalaRuntimeOriginCaller'
  },
  /**
   * Lookup278: frame_support::traits::preimages::Bounded<acala_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup280: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      set_retry: {
        task: '(u32,u32)',
        retries: 'u8',
        period: 'u32',
      },
      set_retry_named: {
        id: '[u8;32]',
        retries: 'u8',
        period: 'u32',
      },
      cancel_retry: {
        task: '(u32,u32)',
      },
      cancel_retry_named: {
        id: '[u8;32]'
      }
    }
  },
  /**
   * Lookup282: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'AcalaRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      if_else: {
        main: 'Call',
        fallback: 'Call',
      },
      dispatch_as_fallible: {
        asOrigin: 'AcalaRuntimeOriginCaller',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup284: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]',
      },
      poke_deposit: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup286: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<RuntimeCommonProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'RuntimeCommonProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<RuntimeCommonProxyType>',
        call: 'Call',
      },
      poke_deposit: 'Null'
    }
  },
  /**
   * Lookup289: module_transaction_pause::module::Call<T>
   **/
  ModuleTransactionPauseModuleCall: {
    _enum: {
      pause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes',
      },
      unpause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes',
      },
      pause_evm_precompile: {
        address: 'H160',
      },
      unpause_evm_precompile: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup290: module_idle_scheduler::module::Call<T>
   **/
  ModuleIdleSchedulerModuleCall: {
    _enum: {
      schedule_task: {
        task: 'AcalaRuntimeScheduledTasks'
      }
    }
  },
  /**
   * Lookup291: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      ensure_updated: {
        hashes: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup292: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      __Unused1: 'Null',
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      __Unused7: 'Null',
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
      },
      force_adjust_total_issuance: {
        direction: 'PalletBalancesAdjustmentDirection',
        delta: 'Compact<u128>',
      },
      burn: {
        value: 'Compact<u128>',
        keepAlive: 'bool'
      }
    }
  },
  /**
   * Lookup293: pallet_balances::types::AdjustmentDirection
   **/
  PalletBalancesAdjustmentDirection: {
    _enum: ['Increase', 'Decrease']
  },
  /**
   * Lookup294: module_currencies::module::Call<T>
   **/
  ModuleCurrenciesModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'Compact<u128>',
      },
      transfer_native_currency: {
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      update_balance: {
        who: 'MultiAddress',
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'i128',
      },
      sweep_dust: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        accounts: 'Vec<AccountId32>',
      },
      force_set_lock: {
        who: 'MultiAddress',
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'Compact<u128>',
        lockId: '[u8;8]',
      },
      force_remove_lock: {
        who: 'MultiAddress',
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        lockId: '[u8;8]'
      }
    }
  },
  /**
   * Lookup295: orml_vesting::module::Call<T>
   **/
  OrmlVestingModuleCall: {
    _enum: {
      claim: 'Null',
      vested_transfer: {
        dest: 'MultiAddress',
        schedule: 'OrmlVestingVestingSchedule',
      },
      update_vesting_schedules: {
        who: 'MultiAddress',
        vestingSchedules: 'Vec<OrmlVestingVestingSchedule>',
      },
      claim_for: {
        dest: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup297: module_transaction_payment::module::Call<T>
   **/
  ModuleTransactionPaymentModuleCall: {
    _enum: {
      set_alternative_fee_swap_path: {
        feeSwapPath: 'Option<Vec<AcalaPrimitivesCurrencyCurrencyId>>',
      },
      enable_charge_fee_pool: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        poolSize: 'u128',
        swapThreshold: 'u128',
      },
      disable_charge_fee_pool: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      with_fee_path: {
        feeSwapPath: 'Vec<AcalaPrimitivesCurrencyCurrencyId>',
        call: 'Call',
      },
      with_fee_currency: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        call: 'Call',
      },
      __Unused5: 'Null',
      with_fee_aggregated_path: {
        feeAggregatedPath: 'Vec<ModuleSupportDexAggregatedSwapPath>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup300: module_support::dex::AggregatedSwapPath<acala_primitives::currency::CurrencyId>
   **/
  ModuleSupportDexAggregatedSwapPath: {
    _enum: {
      Dex: 'Vec<AcalaPrimitivesCurrencyCurrencyId>',
      Taiga: '(u32,u32,u32)'
    }
  },
  /**
   * Lookup301: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      spend_local: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        assetKind: 'Null',
        amount: 'Compact<u128>',
        beneficiary: 'AccountId32',
        validFrom: 'Option<u32>',
      },
      payout: {
        index: 'u32',
      },
      check_status: {
        index: 'u32',
      },
      void_spend: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup303: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes',
      },
      approve_bounty_with_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      poke_deposit: {
        bountyId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup304: pallet_tips::pallet::Call<T, I>
   **/
  PalletTipsCall: {
    _enum: {
      report_awesome: {
        reason: 'Bytes',
        who: 'MultiAddress',
      },
      retract_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      tip_new: {
        reason: 'Bytes',
        who: 'MultiAddress',
        tipValue: 'Compact<u128>',
      },
      tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        tipValue: 'Compact<u128>',
      },
      close_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      slash_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup305: module_collator_selection::pallet::Call<T>
   **/
  ModuleCollatorSelectionCall: {
    _enum: {
      set_invulnerables: {
        _alias: {
          new_: 'new',
        },
        new_: 'Vec<AccountId32>',
      },
      set_desired_candidates: {
        max: 'Compact<u32>',
      },
      set_candidacy_bond: {
        bond: 'Compact<u128>',
      },
      register_as_candidate: 'Null',
      register_candidate: {
        newCandidate: 'AccountId32',
      },
      leave_intent: 'Null',
      withdraw_bond: 'Null'
    }
  },
  /**
   * Lookup306: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'AcalaRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup307: acala_runtime::SessionKeys
   **/
  AcalaRuntimeSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup308: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: '[u8;32]',
  /**
   * Lookup309: module_session_manager::module::Call<T>
   **/
  ModuleSessionManagerModuleCall: {
    _enum: {
      schedule_session_duration: {
        startSession: 'Compact<u32>',
        duration: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup310: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      __Unused0: 'Null',
      suspend_xcm_execution: 'Null',
      resume_xcm_execution: 'Null',
      update_suspend_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_drop_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_resume_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32'
      }
    }
  },
  /**
   * Lookup311: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'StagingXcmV5Location',
        version: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool',
      },
      transfer_assets: {
        dest: 'XcmVersionedLocation',
        beneficiary: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      claim_assets: {
        assets: 'XcmVersionedAssets',
        beneficiary: 'XcmVersionedLocation',
      },
      transfer_assets_using_type_and_then: {
        dest: 'XcmVersionedLocation',
        assets: 'XcmVersionedAssets',
        assetsTransferType: 'StagingXcmExecutorAssetTransferTransferType',
        remoteFeesId: 'XcmVersionedAssetId',
        feesTransferType: 'StagingXcmExecutorAssetTransferTransferType',
        customXcmOnDest: 'XcmVersionedXcm',
        weightLimit: 'XcmV3WeightLimit',
      },
      add_authorized_alias: {
        aliaser: 'XcmVersionedLocation',
        expires: 'Option<u64>',
      },
      remove_authorized_alias: {
        aliaser: 'XcmVersionedLocation',
      },
      remove_all_authorized_aliases: 'Null'
    }
  },
  /**
   * Lookup312: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3Xcm',
      V4: 'StagingXcmV4Xcm',
      V5: 'StagingXcmV5Xcm'
    }
  },
  /**
   * Lookup313: xcm::v3::Xcm<Call>
   **/
  XcmV3Xcm: 'Vec<XcmV3Instruction>',
  /**
   * Lookup315: xcm::v3::Instruction<Call>
   **/
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      Transact: {
        originKind: 'XcmV3OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV3Junctions',
      ReportError: 'XcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV3MultiassetMultiAssetFilter',
        want: 'XcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'XcmV3QueryResponseInfo',
        assets: 'XcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV3MultiAsset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV3Xcm',
      SetAppendix: 'XcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        ticket: 'StagingXcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'XcmV3MultiassetMultiAssets',
      ExpectAsset: 'XcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'XcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'XcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'XcmV3Junction',
      ExportMessage: {
        network: 'XcmV3JunctionNetworkId',
        destination: 'XcmV3Junctions',
        xcm: 'XcmV3Xcm',
      },
      LockAsset: {
        asset: 'XcmV3MultiAsset',
        unlocker: 'StagingXcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'XcmV3MultiAsset',
        target: 'StagingXcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'XcmV3MultiAsset',
        owner: 'StagingXcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'XcmV3MultiAsset',
        locker: 'StagingXcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup316: xcm::v3::Response
   **/
  XcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<XcmV3PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup319: xcm::v3::traits::Error
   **/
  XcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup321: xcm::v3::PalletInfo
   **/
  XcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup325: xcm::v3::QueryResponseInfo
   **/
  XcmV3QueryResponseInfo: {
    destination: 'StagingXcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup326: xcm::v3::multiasset::MultiAssetFilter
   **/
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV3MultiassetMultiAssets',
      Wild: 'XcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup327: xcm::v3::multiasset::WildMultiAsset
   **/
  XcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup328: xcm::v3::multiasset::WildFungibility
   **/
  XcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup329: staging_xcm::v4::Xcm<Call>
   **/
  StagingXcmV4Xcm: 'Vec<StagingXcmV4Instruction>',
  /**
   * Lookup331: staging_xcm::v4::Instruction<Call>
   **/
  StagingXcmV4Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV4AssetAssets',
      ReserveAssetDeposited: 'StagingXcmV4AssetAssets',
      ReceiveTeleportedAsset: 'StagingXcmV4AssetAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV4Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV4Location>',
      },
      TransferAsset: {
        assets: 'StagingXcmV4AssetAssets',
        beneficiary: 'StagingXcmV4Location',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV4AssetAssets',
        dest: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      Transact: {
        originKind: 'XcmV3OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'StagingXcmV4Junctions',
      ReportError: 'StagingXcmV4QueryResponseInfo',
      DepositAsset: {
        assets: 'StagingXcmV4AssetAssetFilter',
        beneficiary: 'StagingXcmV4Location',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV4AssetAssetFilter',
        dest: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV4AssetAssetFilter',
        want: 'StagingXcmV4AssetAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV4AssetAssetFilter',
        reserve: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV4AssetAssetFilter',
        dest: 'StagingXcmV4Location',
        xcm: 'StagingXcmV4Xcm',
      },
      ReportHolding: {
        responseInfo: 'StagingXcmV4QueryResponseInfo',
        assets: 'StagingXcmV4AssetAssetFilter',
      },
      BuyExecution: {
        fees: 'StagingXcmV4Asset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV4Xcm',
      SetAppendix: 'StagingXcmV4Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV4AssetAssets',
        ticket: 'StagingXcmV4Location',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'StagingXcmV4AssetAssets',
      ExpectAsset: 'StagingXcmV4AssetAssets',
      ExpectOrigin: 'Option<StagingXcmV4Location>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'StagingXcmV4QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'StagingXcmV4QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'StagingXcmV4Junction',
      ExportMessage: {
        network: 'StagingXcmV4JunctionNetworkId',
        destination: 'StagingXcmV4Junctions',
        xcm: 'StagingXcmV4Xcm',
      },
      LockAsset: {
        asset: 'StagingXcmV4Asset',
        unlocker: 'StagingXcmV4Location',
      },
      UnlockAsset: {
        asset: 'StagingXcmV4Asset',
        target: 'StagingXcmV4Location',
      },
      NoteUnlockable: {
        asset: 'StagingXcmV4Asset',
        owner: 'StagingXcmV4Location',
      },
      RequestUnlock: {
        asset: 'StagingXcmV4Asset',
        locker: 'StagingXcmV4Location',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV4Location',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV4Location>'
      }
    }
  },
  /**
   * Lookup332: staging_xcm::v4::Response
   **/
  StagingXcmV4Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV4AssetAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<StagingXcmV4PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup334: staging_xcm::v4::PalletInfo
   **/
  StagingXcmV4PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup338: staging_xcm::v4::QueryResponseInfo
   **/
  StagingXcmV4QueryResponseInfo: {
    destination: 'StagingXcmV4Location',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup339: staging_xcm::v4::asset::AssetFilter
   **/
  StagingXcmV4AssetAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV4AssetAssets',
      Wild: 'StagingXcmV4AssetWildAsset'
    }
  },
  /**
   * Lookup340: staging_xcm::v4::asset::WildAsset
   **/
  StagingXcmV4AssetWildAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV4AssetAssetId',
        fun: 'StagingXcmV4AssetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'StagingXcmV4AssetAssetId',
        fun: 'StagingXcmV4AssetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup341: staging_xcm::v4::asset::WildFungibility
   **/
  StagingXcmV4AssetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup353: staging_xcm_executor::traits::asset_transfer::TransferType
   **/
  StagingXcmExecutorAssetTransferTransferType: {
    _enum: {
      Teleport: 'Null',
      LocalReserve: 'Null',
      DestinationReserve: 'Null',
      RemoteReserve: 'XcmVersionedLocation'
    }
  },
  /**
   * Lookup354: xcm::VersionedAssetId
   **/
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetAssetId',
      V4: 'StagingXcmV4AssetAssetId',
      V5: 'StagingXcmV5AssetAssetId'
    }
  },
  /**
   * Lookup355: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'u128',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset: {
        asset: 'XcmVersionedAsset',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'u128',
        fee: 'u128',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'XcmVersionedAsset',
        fee: 'XcmVersionedAsset',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(AcalaPrimitivesCurrencyCurrencyId,u128)>',
        feeItem: 'u32',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiassets: {
        assets: 'XcmVersionedAssets',
        feeItem: 'u32',
        dest: 'XcmVersionedLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      set_migration_phase: {
        migrationPhase: 'OrmlXtokensMigrationPhase'
      }
    }
  },
  /**
   * Lookup356: xcm::VersionedAsset
   **/
  XcmVersionedAsset: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiAsset',
      V4: 'StagingXcmV4Asset',
      V5: 'StagingXcmV5Asset'
    }
  },
  /**
   * Lookup357: orml_xcm::module::Call<T>
   **/
  OrmlXcmModuleCall: {
    _enum: {
      send_as_sovereign: {
        dest: 'XcmVersionedLocation',
        message: 'XcmVersionedXcm'
      }
    }
  },
  /**
   * Lookup358: pallet_message_queue::pallet::Call<T>
   **/
  PalletMessageQueueCall: {
    _enum: {
      reap_page: {
        messageOrigin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        pageIndex: 'u32',
      },
      execute_overweight: {
        messageOrigin: 'CumulusPrimitivesCoreAggregateMessageOrigin',
        page: 'u32',
        index: 'u32',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup359: orml_authority::module::Call<T>
   **/
  OrmlAuthorityModuleCall: {
    _enum: {
      dispatch_as: {
        asOrigin: 'AcalaPrimitivesAuthoritysOriginId',
        call: 'Call',
      },
      schedule_dispatch: {
        when: 'FrameSupportScheduleDispatchTime',
        priority: 'u8',
        withDelayedOrigin: 'bool',
        call: 'FrameSupportPreimagesBounded',
      },
      fast_track_scheduled_dispatch: {
        initialOrigin: 'AcalaRuntimeOriginCaller',
        taskId: 'u32',
        when: 'FrameSupportScheduleDispatchTime',
      },
      delay_scheduled_dispatch: {
        initialOrigin: 'AcalaRuntimeOriginCaller',
        taskId: 'u32',
        additionalDelay: 'u32',
      },
      cancel_scheduled_dispatch: {
        initialOrigin: 'AcalaRuntimeOriginCaller',
        taskId: 'u32',
      },
      authorize_call: {
        call: 'Call',
        caller: 'Option<AccountId32>',
      },
      remove_authorized_call: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      __Unused7: 'Null',
      trigger_call: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        callWeightBound: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup360: acala_primitives::AuthoritysOriginId
   **/
  AcalaPrimitivesAuthoritysOriginId: {
    _enum: ['Root', 'Treasury', 'HonzonTreasury', 'HomaTreasury', 'TreasuryReserve']
  },
  /**
   * Lookup361: frame_support::traits::schedule::DispatchTime<BlockNumber>
   **/
  FrameSupportScheduleDispatchTime: {
    _enum: {
      At: 'u32',
      After: 'u32'
    }
  },
  /**
   * Lookup362: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused4: 'Null',
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>',
      },
      kill: {
        proposalHash: 'H256',
      },
      release_proposal_cost: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup363: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
      },
      swap_member: {
        remove: 'MultiAddress',
        add: 'MultiAddress',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      set_prime: {
        who: 'MultiAddress',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup370: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'FrameSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      delegate: {
        to: 'MultiAddress',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'MultiAddress',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>',
      },
      set_metadata: {
        owner: 'PalletDemocracyMetadataOwner',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup371: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup373: orml_oracle::module::Call<T, I>
   **/
  OrmlOracleModuleCall: {
    _enum: {
      feed_values: {
        values: 'Vec<(AcalaPrimitivesCurrencyCurrencyId,u128)>'
      }
    }
  },
  /**
   * Lookup376: orml_auction::module::Call<T>
   **/
  OrmlAuctionModuleCall: {
    _enum: {
      bid: {
        id: 'u32',
        value: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup377: orml_parameters::module::Call<T>
   **/
  OrmlParametersModuleCall: {
    _enum: {
      set_parameter: {
        keyValue: 'AcalaRuntimeRuntimeParameters'
      }
    }
  },
  /**
   * Lookup378: module_prices::module::Call<T>
   **/
  ModulePricesModuleCall: {
    _enum: {
      lock_price: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      unlock_price: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup379: module_dex::module::Call<T>
   **/
  ModuleDexModuleCall: {
    _enum: {
      swap_with_exact_supply: {
        path: 'Vec<AcalaPrimitivesCurrencyCurrencyId>',
        supplyAmount: 'Compact<u128>',
        minTargetAmount: 'Compact<u128>',
      },
      swap_with_exact_target: {
        path: 'Vec<AcalaPrimitivesCurrencyCurrencyId>',
        targetAmount: 'Compact<u128>',
        maxSupplyAmount: 'Compact<u128>',
      },
      add_liquidity: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
        maxAmountA: 'Compact<u128>',
        maxAmountB: 'Compact<u128>',
        minShareIncrement: 'Compact<u128>',
        stakeIncrementShare: 'bool',
      },
      add_provision: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
        amountA: 'Compact<u128>',
        amountB: 'Compact<u128>',
      },
      claim_dex_share: {
        owner: 'AccountId32',
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      remove_liquidity: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
        removeShare: 'Compact<u128>',
        minWithdrawnA: 'Compact<u128>',
        minWithdrawnB: 'Compact<u128>',
        byUnstake: 'bool',
      },
      list_provisioning: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
        minContributionA: 'Compact<u128>',
        minContributionB: 'Compact<u128>',
        targetProvisionA: 'Compact<u128>',
        targetProvisionB: 'Compact<u128>',
        notBefore: 'Compact<u32>',
      },
      update_provisioning_parameters: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
        minContributionA: 'Compact<u128>',
        minContributionB: 'Compact<u128>',
        targetProvisionA: 'Compact<u128>',
        targetProvisionB: 'Compact<u128>',
        notBefore: 'Compact<u32>',
      },
      end_provisioning: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      enable_trading_pair: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      disable_trading_pair: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      refund_provision: {
        owner: 'AccountId32',
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      abort_provisioning: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup380: module_dex_oracle::module::Call<T>
   **/
  ModuleDexOracleModuleCall: {
    _enum: {
      enable_average_price: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
        interval: 'u64',
      },
      disable_average_price: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
      },
      update_average_price_interval: {
        currencyIdA: 'AcalaPrimitivesCurrencyCurrencyId',
        currencyIdB: 'AcalaPrimitivesCurrencyCurrencyId',
        newInterval: 'u64'
      }
    }
  },
  /**
   * Lookup381: module_aggregated_dex::module::Call<T>
   **/
  ModuleAggregatedDexModuleCall: {
    _enum: {
      swap_with_exact_supply: {
        paths: 'Vec<ModuleSupportDexAggregatedSwapPath>',
        supplyAmount: 'Compact<u128>',
        minTargetAmount: 'Compact<u128>',
      },
      swap_with_exact_target: {
        paths: 'Vec<ModuleSupportDexAggregatedSwapPath>',
        targetAmount: 'Compact<u128>',
        maxSupplyAmount: 'Compact<u128>',
      },
      update_aggregated_swap_paths: {
        updates: 'Vec<((AcalaPrimitivesCurrencyCurrencyId,AcalaPrimitivesCurrencyCurrencyId),Option<Vec<ModuleSupportDexAggregatedSwapPath>>)>'
      }
    }
  },
  /**
   * Lookup386: module_earning::module::Call<T>
   **/
  ModuleEarningModuleCall: {
    _enum: {
      bond: {
        amount: 'Compact<u128>',
      },
      unbond: {
        amount: 'Compact<u128>',
      },
      unbond_instant: {
        amount: 'Compact<u128>',
      },
      rebond: {
        amount: 'Compact<u128>',
      },
      withdraw_unbonded: 'Null'
    }
  },
  /**
   * Lookup387: module_auction_manager::module::Call<T>
   **/
  ModuleAuctionManagerModuleCall: {
    _enum: {
      cancel: {
        id: 'u32'
      }
    }
  },
  /**
   * Lookup388: module_loans::module::Call<T>
   **/
  ModuleLoansModuleCall: 'Null',
  /**
   * Lookup389: module_honzon::module::Call<T>
   **/
  ModuleHonzonModuleCall: {
    _enum: {
      adjust_loan: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        collateralAdjustment: 'i128',
        debitAdjustment: 'i128',
      },
      close_loan_has_debit_by_dex: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        maxCollateralAmount: 'Compact<u128>',
      },
      transfer_loan_from: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        from: 'MultiAddress',
      },
      authorize: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        to: 'MultiAddress',
      },
      unauthorize: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        to: 'MultiAddress',
      },
      unauthorize_all: 'Null',
      expand_position_collateral: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        increaseDebitValue: 'u128',
        minIncreaseCollateral: 'u128',
      },
      shrink_position_debit: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        decreaseCollateral: 'u128',
        minDecreaseDebitValue: 'u128',
      },
      adjust_loan_by_debit_value: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        collateralAdjustment: 'i128',
        debitValueAdjustment: 'i128',
      },
      transfer_debit: {
        fromCurrency: 'AcalaPrimitivesCurrencyCurrencyId',
        toCurrency: 'AcalaPrimitivesCurrencyCurrencyId',
        debitTransfer: 'u128'
      }
    }
  },
  /**
   * Lookup390: module_cdp_treasury::module::Call<T>
   **/
  ModuleCdpTreasuryModuleCall: {
    _enum: {
      extract_surplus_to_treasury: {
        amount: 'Compact<u128>',
      },
      auction_collateral: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'Compact<u128>',
        target: 'Compact<u128>',
        split: 'bool',
      },
      exchange_collateral_to_stable: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        swapLimit: 'ModuleSupportDexSwapLimit',
      },
      set_expected_collateral_auction_size: {
        _alias: {
          size_: 'size',
        },
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        size_: 'Compact<u128>',
      },
      set_debit_offset_buffer: {
        amount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup391: module_support::dex::SwapLimit<Balance>
   **/
  ModuleSupportDexSwapLimit: {
    _enum: {
      ExactSupply: '(u128,u128)',
      ExactTarget: '(u128,u128)'
    }
  },
  /**
   * Lookup392: module_cdp_engine::module::Call<T>
   **/
  ModuleCdpEngineModuleCall: {
    _enum: {
      liquidate: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'MultiAddress',
      },
      settle: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        who: 'MultiAddress',
      },
      set_collateral_params: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        interestRatePerSec: 'OrmlTraitsChangeOption',
        liquidationRatio: 'OrmlTraitsChangeOption',
        liquidationPenalty: 'OrmlTraitsChangeOption',
        requiredCollateralRatio: 'OrmlTraitsChangeOption',
        maximumTotalDebitValue: 'OrmlTraitsChangeU128',
      },
      register_liquidation_contract: {
        address: 'H160',
      },
      deregister_liquidation_contract: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup393: orml_traits::Change<Option<sp_arithmetic::fixed_point::FixedU128>>
   **/
  OrmlTraitsChangeOption: {
    _enum: {
      NoChange: 'Null',
      NewValue: 'Option<u128>'
    }
  },
  /**
   * Lookup394: orml_traits::Change<Value>
   **/
  OrmlTraitsChangeU128: {
    _enum: {
      NoChange: 'Null',
      NewValue: 'u128'
    }
  },
  /**
   * Lookup395: module_emergency_shutdown::module::Call<T>
   **/
  ModuleEmergencyShutdownModuleCall: {
    _enum: {
      emergency_shutdown: 'Null',
      open_collateral_refund: 'Null',
      refund_collaterals: {
        amount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup396: module_homa::module::Call<T>
   **/
  ModuleHomaModuleCall: {
    _enum: {
      mint: {
        amount: 'Compact<u128>',
      },
      request_redeem: {
        amount: 'Compact<u128>',
        allowFastMatch: 'bool',
      },
      fast_match_redeems: {
        redeemerList: 'Vec<AccountId32>',
      },
      claim_redemption: {
        redeemer: 'AccountId32',
      },
      update_homa_params: {
        softBondedCapPerSubAccount: 'Option<u128>',
        estimatedRewardRatePerEra: 'Option<u128>',
        commissionRate: 'Option<u128>',
        fastMatchFeeRate: 'Option<u128>',
        nominateIntervalEra: 'Option<u32>',
      },
      update_bump_era_params: {
        lastEraBumpedBlock: 'Option<u32>',
        frequency: 'Option<u32>',
      },
      reset_ledgers: {
        updates: 'Vec<(u16,Option<u128>,Option<Vec<ModuleHomaModuleUnlockChunk>>)>',
      },
      reset_current_era: {
        eraIndex: 'u32',
      },
      force_bump_current_era: {
        bumpEra: 'u32',
      },
      fast_match_redeems_completely: {
        redeemerList: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup401: module_xcm_interface::module::Call<T>
   **/
  ModuleXcmInterfaceModuleCall: {
    _enum: {
      update_xcm_dest_weight_and_fee: {
        updates: 'Vec<(ModuleXcmInterfaceModuleXcmInterfaceOperation,Option<SpWeightsWeightV2Weight>,Option<u128>)>'
      }
    }
  },
  /**
   * Lookup404: module_homa_validator_list::module::Call<T>
   **/
  ModuleHomaValidatorListModuleCall: {
    _enum: {
      bond: {
        validator: 'AccountId32',
        amount: 'Compact<u128>',
      },
      unbond: {
        validator: 'AccountId32',
        amount: 'Compact<u128>',
      },
      rebond: {
        validator: 'AccountId32',
        amount: 'Compact<u128>',
      },
      withdraw_unbonded: {
        validator: 'AccountId32',
      },
      freeze: {
        validators: 'Vec<AccountId32>',
      },
      thaw: {
        validators: 'Vec<AccountId32>',
      },
      slash: {
        slashes: 'Vec<ModuleHomaValidatorListSlashInfo>'
      }
    }
  },
  /**
   * Lookup406: module_homa_validator_list::SlashInfo<Balance, sp_core::crypto::AccountId32>
   **/
  ModuleHomaValidatorListSlashInfo: {
    validator: 'AccountId32',
    tokenAmount: 'u128'
  },
  /**
   * Lookup407: module_nominees_election::module::Call<T, I>
   **/
  ModuleNomineesElectionModuleCall: {
    _enum: {
      bond: {
        amount: 'Compact<u128>',
      },
      unbond: {
        amount: 'Compact<u128>',
      },
      rebond: {
        amount: 'Compact<u128>',
      },
      withdraw_unbonded: 'Null',
      nominate: {
        targets: 'Vec<AccountId32>',
      },
      chill: 'Null',
      reset_reserved_nominees: {
        updates: 'Vec<(u16,Vec<AccountId32>)>'
      }
    }
  },
  /**
   * Lookup411: module_incentives::module::Call<T>
   **/
  ModuleIncentivesModuleCall: {
    _enum: {
      deposit_dex_share: {
        lpCurrencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'Compact<u128>',
      },
      withdraw_dex_share: {
        lpCurrencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        amount: 'Compact<u128>',
      },
      claim_rewards: {
        poolId: 'ModuleSupportIncentivesPoolId',
      },
      update_incentive_rewards: {
        updates: 'Vec<(ModuleSupportIncentivesPoolId,Vec<(AcalaPrimitivesCurrencyCurrencyId,u128)>)>',
      },
      update_claim_reward_deduction_rates: {
        updates: 'Vec<(ModuleSupportIncentivesPoolId,u128)>',
      },
      update_claim_reward_deduction_currency: {
        poolId: 'ModuleSupportIncentivesPoolId',
        currencyId: 'Option<AcalaPrimitivesCurrencyCurrencyId>'
      }
    }
  },
  /**
   * Lookup416: module_nft::module::Call<T>
   **/
  ModuleNftModuleCall: {
    _enum: {
      create_class: {
        metadata: 'Bytes',
        properties: 'u8',
        attributes: 'BTreeMap<Bytes, Bytes>',
      },
      mint: {
        to: 'MultiAddress',
        classId: 'u32',
        metadata: 'Bytes',
        attributes: 'BTreeMap<Bytes, Bytes>',
        quantity: 'Compact<u32>',
      },
      transfer: {
        to: 'MultiAddress',
        token: '(u32,u64)',
      },
      burn: {
        token: '(u32,u64)',
      },
      burn_with_remark: {
        token: '(u32,u64)',
        remark: 'Bytes',
      },
      destroy_class: {
        classId: 'u32',
        dest: 'MultiAddress',
      },
      update_class_properties: {
        classId: 'u32',
        properties: 'u8'
      }
    }
  },
  /**
   * Lookup418: acala_primitives::nft::ClassProperty
   **/
  AcalaPrimitivesNftClassProperty: {
    _enum: ['__Unused0', 'Transferable', 'Burnable', '__Unused3', 'Mintable', '__Unused5', '__Unused6', '__Unused7', 'ClassPropertiesMutable']
  },
  /**
   * Lookup421: module_asset_registry::module::Call<T>
   **/
  ModuleAssetRegistryModuleCall: {
    _enum: {
      register_foreign_asset: {
        location: 'XcmVersionedLocation',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata',
      },
      update_foreign_asset: {
        foreignAssetId: 'u16',
        location: 'XcmVersionedLocation',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata',
      },
      register_stable_asset: {
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata',
      },
      update_stable_asset: {
        stableAssetId: 'u32',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata',
      },
      register_erc20_asset: {
        contract: 'H160',
        minimalBalance: 'u128',
      },
      update_erc20_asset: {
        contract: 'H160',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata',
      },
      register_native_asset: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata',
      },
      update_native_asset: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
        metadata: 'AcalaPrimitivesCurrencyAssetMetadata'
      }
    }
  },
  /**
   * Lookup422: module_liquid_crowdloan::module::Call<T>
   **/
  ModuleLiquidCrowdloanModuleCall: {
    _enum: {
      redeem: {
        amount: 'Compact<u128>',
      },
      __Unused1: 'Null',
      set_redeem_currency_id: {
        currencyId: 'AcalaPrimitivesCurrencyCurrencyId'
      }
    }
  },
  /**
   * Lookup423: module_evm::module::Call<T>
   **/
  ModuleEvmModuleCall: {
    _enum: {
      eth_call: {
        action: 'EthereumTransactionLegacyTransactionAction',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionEip2930AccessListItem>',
        validUntil: 'Compact<u32>',
      },
      call: {
        target: 'H160',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionEip2930AccessListItem>',
      },
      scheduled_call: {
        from: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionEip2930AccessListItem>',
      },
      create: {
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionEip2930AccessListItem>',
      },
      create2: {
        input: 'Bytes',
        salt: 'H256',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionEip2930AccessListItem>',
      },
      create_nft_contract: {
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionEip2930AccessListItem>',
      },
      create_predeploy_contract: {
        target: 'H160',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionEip2930AccessListItem>',
      },
      transfer_maintainer: {
        contract: 'H160',
        newMaintainer: 'H160',
      },
      publish_contract: {
        contract: 'H160',
      },
      publish_free: {
        contract: 'H160',
      },
      enable_contract_development: 'Null',
      disable_contract_development: 'Null',
      set_code: {
        contract: 'H160',
        code: 'Bytes',
      },
      selfdestruct: {
        contract: 'H160',
      },
      strict_call: {
        target: 'H160',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        accessList: 'Vec<EthereumTransactionEip2930AccessListItem>',
      },
      eth_call_v2: {
        action: 'EthereumTransactionLegacyTransactionAction',
        input: 'Bytes',
        value: 'Compact<u128>',
        gasPrice: 'Compact<u64>',
        gasLimit: 'Compact<u64>',
        accessList: 'Vec<EthereumTransactionEip2930AccessListItem>'
      }
    }
  },
  /**
   * Lookup424: ethereum::transaction::legacy::TransactionAction
   **/
  EthereumTransactionLegacyTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  /**
   * Lookup426: ethereum::transaction::eip2930::AccessListItem
   **/
  EthereumTransactionEip2930AccessListItem: {
    address: 'H160',
    storageKeys: 'Vec<H256>'
  },
  /**
   * Lookup427: module_evm_accounts::module::Call<T>
   **/
  ModuleEvmAccountsModuleCall: {
    _enum: {
      claim_account: {
        ethAddress: 'H160',
        ethSignature: '[u8;65]',
      },
      claim_default_account: 'Null'
    }
  },
  /**
   * Lookup429: nutsfinance_stable_asset::pallet::Call<T>
   **/
  NutsfinanceStableAssetCall: {
    _enum: {
      create_pool: {
        poolAsset: 'AcalaPrimitivesCurrencyCurrencyId',
        assets: 'Vec<AcalaPrimitivesCurrencyCurrencyId>',
        precisions: 'Vec<u128>',
        mintFee: 'u128',
        swapFee: 'u128',
        redeemFee: 'u128',
        initialA: 'u128',
        feeRecipient: 'AccountId32',
        yieldRecipient: 'AccountId32',
        precision: 'u128',
      },
      mint: {
        poolId: 'u32',
        amounts: 'Vec<u128>',
        minMintAmount: 'u128',
      },
      swap: {
        poolId: 'u32',
        i: 'u32',
        j: 'u32',
        dx: 'u128',
        minDy: 'u128',
        assetLength: 'u32',
      },
      redeem_proportion: {
        poolId: 'u32',
        amount: 'u128',
        minRedeemAmounts: 'Vec<u128>',
      },
      redeem_single: {
        poolId: 'u32',
        amount: 'u128',
        i: 'u32',
        minRedeemAmount: 'u128',
        assetLength: 'u32',
      },
      redeem_multi: {
        poolId: 'u32',
        amounts: 'Vec<u128>',
        maxRedeemAmount: 'u128',
      },
      modify_a: {
        poolId: 'u32',
        a: 'u128',
        futureABlock: 'u32',
      },
      modify_fees: {
        poolId: 'u32',
        mintFee: 'Option<u128>',
        swapFee: 'Option<u128>',
        redeemFee: 'Option<u128>',
      },
      modify_recipients: {
        poolId: 'u32',
        feeRecipient: 'Option<AccountId32>',
        yieldRecipient: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup430: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes'
      }
    }
  },
  /**
   * Lookup431: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV8PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>',
    relayParentDescendants: 'Vec<SpRuntimeHeader>',
    collatorPeerId: 'Option<Bytes>'
  },
  /**
   * Lookup432: polkadot_primitives::v8::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV8PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup434: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup437: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup440: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup444: sp_runtime::generic::header::Header<Number, Hash>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup447: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call',
      },
      remove_key: 'Null'
    }
  },
  /**
   * Lookup448: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup451: pallet_scheduler::RetryConfig<Period>
   **/
  PalletSchedulerRetryConfig: {
    totalRetries: 'u8',
    remaining: 'u8',
    period: 'u32'
  },
  /**
   * Lookup452: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup453: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup455: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup457: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup460: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, runtime_common::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'RuntimeCommonProxyType',
    delay: 'u32'
  },
  /**
   * Lookup464: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup466: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup467: module_transaction_pause::module::Error<T>
   **/
  ModuleTransactionPauseModuleError: {
    _enum: ['CannotPause', 'InvalidCharacter']
  },
  /**
   * Lookup468: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageOldRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup471: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D, Fp>>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        ticket: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        maybeTicket: 'Option<(AccountId32,u128)>',
        count: 'u32',
        maybeLen: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup477: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested', 'TooMany', 'TooFew']
  },
  /**
   * Lookup479: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup480: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup483: pallet_balances::types::ReserveData<acala_primitives::ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: 'AcalaPrimitivesReserveIdentifier',
    amount: 'u128'
  },
  /**
   * Lookup484: acala_primitives::ReserveIdentifier
   **/
  AcalaPrimitivesReserveIdentifier: {
    _enum: ['CollatorSelection', 'EvmStorageDeposit', 'EvmDeveloperDeposit', 'Honzon', 'Nft', 'TransactionPayment', 'TransactionPaymentDeposit', 'Count']
  },
  /**
   * Lookup488: acala_runtime::RuntimeHoldReason
   **/
  AcalaRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      Preimage: 'PalletPreimageHoldReason',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      PolkadotXcm: 'PalletXcmHoldReason',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      GeneralCouncil: 'PalletCollectiveHoldReason',
      __Unused62: 'Null',
      FinancialCouncil: 'PalletCollectiveHoldReason',
      __Unused64: 'Null',
      HomaCouncil: 'PalletCollectiveHoldReason',
      __Unused66: 'Null',
      TechnicalCommittee: 'PalletCollectiveHoldReason'
    }
  },
  /**
   * Lookup489: pallet_preimage::pallet::HoldReason
   **/
  PalletPreimageHoldReason: {
    _enum: ['Preimage']
  },
  /**
   * Lookup490: pallet_xcm::pallet::HoldReason
   **/
  PalletXcmHoldReason: {
    _enum: ['AuthorizeAlias']
  },
  /**
   * Lookup491: pallet_collective::pallet::HoldReason<I>
   **/
  PalletCollectiveHoldReason: {
    _enum: ['ProposalSubmission']
  },
  /**
   * Lookup497: frame_support::traits::tokens::misc::IdAmount<Id, Balance>
   **/
  FrameSupportTokensMiscIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup499: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes', 'IssuanceDeactivated', 'DeltaZero']
  },
  /**
   * Lookup502: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup504: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup506: orml_tokens::ReserveData<acala_primitives::ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: 'AcalaPrimitivesReserveIdentifier',
    amount: 'u128'
  },
  /**
   * Lookup508: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup509: module_currencies::module::Error<T>
   **/
  ModuleCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'Erc20InvalidOperation', 'EvmAccountNotFound', 'RealOriginNotFound', 'DepositFailed']
  },
  /**
   * Lookup511: orml_vesting::module::Error<T>
   **/
  OrmlVestingModuleError: {
    _enum: ['ZeroVestingPeriod', 'ZeroVestingPeriodCount', 'InsufficientBalanceToLock', 'TooManyVestingSchedules', 'AmountLow', 'MaxVestingSchedulesExceeded']
  },
  /**
   * Lookup513: module_transaction_payment::module::ChargeFeeMethod
   **/
  ModuleTransactionPaymentModuleChargeFeeMethod: {
    _enum: {
      FeeCurrency: 'AcalaPrimitivesCurrencyCurrencyId',
      FeeAggregatedPath: 'Vec<ModuleSupportDexAggregatedSwapPath>'
    }
  },
  /**
   * Lookup514: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup516: module_transaction_payment::module::Error<T>
   **/
  ModuleTransactionPaymentModuleError: {
    _enum: ['InvalidSwapPath', 'InvalidBalance', 'InvalidRate', 'InvalidToken', 'DexNotAvailable', 'ChargeFeePoolAlreadyExisted']
  },
  /**
   * Lookup517: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup520: pallet_treasury::SpendStatus<AssetKind, AssetBalance, sp_core::crypto::AccountId32, BlockNumber, PaymentId>
   **/
  PalletTreasurySpendStatus: {
    assetKind: 'Null',
    amount: 'u128',
    beneficiary: 'AccountId32',
    validFrom: 'u32',
    expireAt: 'u32',
    status: 'PalletTreasuryPaymentState'
  },
  /**
   * Lookup521: pallet_treasury::PaymentState<Id>
   **/
  PalletTreasuryPaymentState: {
    _enum: {
      Pending: 'Null',
      Attempted: {
        id: 'Null',
      },
      Failed: 'Null'
    }
  },
  /**
   * Lookup522: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved', 'FailedToConvertBalance', 'SpendExpired', 'EarlyPayout', 'AlreadyAttempted', 'PayoutError', 'NotAttempted', 'Inconclusive']
  },
  /**
   * Lookup523: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup524: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32',
      },
      ApprovedWithCurator: {
        curator: 'AccountId32'
      }
    }
  },
  /**
   * Lookup526: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued', 'NotProposer']
  },
  /**
   * Lookup527: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
   **/
  PalletTipsOpenTip: {
    reason: 'H256',
    who: 'AccountId32',
    finder: 'AccountId32',
    deposit: 'u128',
    closes: 'Option<u32>',
    tips: 'Vec<(AccountId32,u128)>',
    findersFee: 'bool'
  },
  /**
   * Lookup529: pallet_tips::pallet::Error<T, I>
   **/
  PalletTipsError: {
    _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'MaxTipAmountExceeded', 'NotFinder', 'StillOpen', 'Premature']
  },
  /**
   * Lookup533: module_collator_selection::pallet::Error<T>
   **/
  ModuleCollatorSelectionError: {
    _enum: ['MaxCandidatesExceeded', 'BelowCandidatesMin', 'StillLocked', 'Unknown', 'Permission', 'AlreadyCandidate', 'NotCandidate', 'NotNonCandidate', 'NothingToWithdraw', 'RequireSessionKey', 'AlreadyInvulnerable', 'InvalidProof', 'MaxInvulnerablesExceeded']
  },
  /**
   * Lookup541: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup542: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup547: module_session_manager::module::Error<T>
   **/
  ModuleSessionManagerModuleError: {
    _enum: ['InvalidSession', 'InvalidDuration', 'EstimateNextSessionFailed']
  },
  /**
   * Lookup552: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup553: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup557: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32'
  },
  /**
   * Lookup558: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['BadQueueConfig', 'AlreadySuspended', 'AlreadyResumed', 'TooManyActiveOutboundChannels', 'TooBig']
  },
  /**
   * Lookup559: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedLocation',
        maybeMatchQuerier: 'Option<XcmVersionedLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'XcmVersionedLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup563: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3Response',
      V4: 'StagingXcmV4Response',
      V5: 'StagingXcmV5Response'
    }
  },
  /**
   * Lookup569: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup572: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'XcmVersionedLocation',
    locker: 'XcmVersionedLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup579: pallet_xcm::AuthorizedAliasesEntry<frame_support::traits::storage::Disabled, pallet_xcm::pallet::MaxAuthorizedAliases>
   **/
  PalletXcmAuthorizedAliasesEntry: {
    aliasers: 'Vec<XcmRuntimeApisAuthorizedAliasesOriginAliaser>',
    ticket: 'FrameSupportStorageDisabled'
  },
  /**
   * Lookup580: frame_support::traits::storage::Disabled
   **/
  FrameSupportStorageDisabled: 'Null',
  /**
   * Lookup581: pallet_xcm::pallet::MaxAuthorizedAliases
   **/
  PalletXcmMaxAuthorizedAliases: 'Null',
  /**
   * Lookup583: xcm_runtime_apis::authorized_aliases::OriginAliaser
   **/
  XcmRuntimeApisAuthorizedAliasesOriginAliaser: {
    location: 'XcmVersionedLocation',
    expiry: 'Option<u64>'
  },
  /**
   * Lookup585: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: {
      Unreachable: 'Null',
      SendFailure: 'Null',
      Filtered: 'Null',
      UnweighableMessage: 'Null',
      DestinationNotInvertible: 'Null',
      Empty: 'Null',
      CannotReanchor: 'Null',
      TooManyAssets: 'Null',
      InvalidOrigin: 'Null',
      BadVersion: 'Null',
      BadLocation: 'Null',
      NoSubscription: 'Null',
      AlreadySubscribed: 'Null',
      CannotCheckOutTeleport: 'Null',
      LowBalance: 'Null',
      TooManyLocks: 'Null',
      AccountNotSovereign: 'Null',
      FeesNotMet: 'Null',
      LockNotFound: 'Null',
      InUse: 'Null',
      __Unused20: 'Null',
      InvalidAssetUnknownReserve: 'Null',
      InvalidAssetUnsupportedReserve: 'Null',
      TooManyReserves: 'Null',
      LocalExecutionIncomplete: 'Null',
      TooManyAuthorizedAliases: 'Null',
      ExpiresInPast: 'Null',
      AliasNotFound: 'Null',
      LocalExecutionIncompleteWithError: {
        index: 'u8',
        error: 'PalletXcmErrorsExecutionError'
      }
    }
  },
  /**
   * Lookup586: pallet_xcm::errors::ExecutionError
   **/
  PalletXcmErrorsExecutionError: {
    _enum: ['Overflow', 'Unimplemented', 'UntrustedReserveLocation', 'UntrustedTeleportLocation', 'LocationFull', 'LocationNotInvertible', 'BadOrigin', 'InvalidLocation', 'AssetNotFound', 'FailedToTransactAsset', 'NotWithdrawable', 'LocationCannotHold', 'ExceedsMaxMessageSize', 'DestinationUnsupported', 'Transport', 'Unroutable', 'UnknownClaim', 'FailedToDecode', 'MaxWeightInvalid', 'NotHoldingFees', 'TooExpensive', 'Trap', 'ExpectationFalse', 'PalletNotFound', 'NameMismatch', 'VersionIncompatible', 'HoldingWouldOverflow', 'ExportError', 'ReanchorFailed', 'NoDeal', 'FeesNotMet', 'LockError', 'NoPermission', 'Unanchored', 'NotDepositable', 'TooManyAssets', 'UnhandledXcmVersion', 'WeightLimitReached', 'Barrier', 'WeightNotComputable', 'ExceedsStackLimit']
  },
  /**
   * Lookup587: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedLocation', 'MinXcmFeeNotDefined', 'RateLimited']
  },
  /**
   * Lookup590: orml_unknown_tokens::module::Error<T>
   **/
  OrmlUnknownTokensModuleError: {
    _enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset']
  },
  /**
   * Lookup591: orml_xcm::module::Error<T>
   **/
  OrmlXcmModuleError: {
    _enum: ['Unreachable', 'SendFailure', 'BadVersion']
  },
  /**
   * Lookup592: pallet_message_queue::BookState<cumulus_primitives_core::AggregateMessageOrigin>
   **/
  PalletMessageQueueBookState: {
    _alias: {
      size_: 'size'
    },
    begin: 'u32',
    end: 'u32',
    count: 'u32',
    readyNeighbours: 'Option<PalletMessageQueueNeighbours>',
    messageCount: 'u64',
    size_: 'u64'
  },
  /**
   * Lookup594: pallet_message_queue::Neighbours<cumulus_primitives_core::AggregateMessageOrigin>
   **/
  PalletMessageQueueNeighbours: {
    prev: 'CumulusPrimitivesCoreAggregateMessageOrigin',
    next: 'CumulusPrimitivesCoreAggregateMessageOrigin'
  },
  /**
   * Lookup596: pallet_message_queue::Page<Size, HeapSize>
   **/
  PalletMessageQueuePage: {
    remaining: 'u32',
    remainingSize: 'u32',
    firstIndex: 'u32',
    first: 'u32',
    last: 'u32',
    heap: 'Bytes'
  },
  /**
   * Lookup598: pallet_message_queue::pallet::Error<T>
   **/
  PalletMessageQueueError: {
    _enum: ['NotReapable', 'NoPage', 'NoMessage', 'AlreadyProcessed', 'Queued', 'InsufficientWeight', 'TemporarilyUnprocessable', 'QueuePaused', 'RecursiveDisallowed']
  },
  /**
   * Lookup600: orml_authority::module::Error<T>
   **/
  OrmlAuthorityModuleError: {
    _enum: ['FailedToSchedule', 'FailedToCancel', 'FailedToFastTrack', 'FailedToDelay', 'CallNotAuthorized', 'TriggerCallNotPermitted', 'WrongCallWeightBound']
  },
  /**
   * Lookup603: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup604: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength', 'PrimeAccountNotMember', 'ProposalActive']
  },
  /**
   * Lookup606: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup617: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<acala_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup618: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<acala_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup619: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup620: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup624: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup625: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup628: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup629: orml_oracle::module::TimestampedValue<sp_arithmetic::fixed_point::FixedU128, Moment>
   **/
  OrmlOracleModuleTimestampedValue: {
    value: 'u128',
    timestamp: 'u64'
  },
  /**
   * Lookup630: orml_utilities::ordered_set::OrderedSet<sp_core::crypto::AccountId32, S>
   **/
  OrmlUtilitiesOrderedSet: 'Vec<AccountId32>',
  /**
   * Lookup632: orml_oracle::module::Error<T, I>
   **/
  OrmlOracleModuleError: {
    _enum: ['NoPermission', 'AlreadyFeeded']
  },
  /**
   * Lookup635: orml_traits::auction::AuctionInfo<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  OrmlTraitsAuctionAuctionInfo: {
    bid: 'Option<(AccountId32,u128)>',
    start: 'u32',
    end: 'Option<u32>'
  },
  /**
   * Lookup636: orml_auction::module::Error<T>
   **/
  OrmlAuctionModuleError: {
    _enum: ['AuctionNotExist', 'AuctionNotStarted', 'BidNotAccepted', 'InvalidBidPrice', 'NoAvailableAuctionId']
  },
  /**
   * Lookup637: orml_rewards::PoolInfo<Share, Balance, acala_primitives::currency::CurrencyId>
   **/
  OrmlRewardsPoolInfo: {
    totalShares: 'u128',
    rewards: 'BTreeMap<AcalaPrimitivesCurrencyCurrencyId, (u128,u128)>'
  },
  /**
   * Lookup645: orml_rewards::module::Error<T>
   **/
  OrmlRewardsModuleError: {
    _enum: ['PoolDoesNotExist', 'ShareDoesNotExist', 'CanSplitOnlyLessThanShare', 'ShareBelowMinimal']
  },
  /**
   * Lookup646: orml_nft::ClassInfo<TokenId, sp_core::crypto::AccountId32, module_nft::ClassData<Balance>, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  OrmlNftClassInfo: {
    metadata: 'Bytes',
    totalIssuance: 'u64',
    owner: 'AccountId32',
    data: 'ModuleNftClassData'
  },
  /**
   * Lookup647: module_nft::ClassData<Balance>
   **/
  ModuleNftClassData: {
    deposit: 'u128',
    properties: 'u8',
    attributes: 'BTreeMap<Bytes, Bytes>'
  },
  /**
   * Lookup649: orml_nft::TokenInfo<sp_core::crypto::AccountId32, module_nft::TokenData<Balance>, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  OrmlNftTokenInfo: {
    metadata: 'Bytes',
    owner: 'AccountId32',
    data: 'ModuleNftTokenData'
  },
  /**
   * Lookup650: module_nft::TokenData<Balance>
   **/
  ModuleNftTokenData: {
    deposit: 'u128',
    attributes: 'BTreeMap<Bytes, Bytes>'
  },
  /**
   * Lookup652: orml_nft::module::Error<T>
   **/
  OrmlNftModuleError: {
    _enum: ['NoAvailableClassId', 'NoAvailableTokenId', 'TokenNotFound', 'ClassNotFound', 'NoPermission', 'CannotDestroyClass', 'MaxMetadataExceeded']
  },
  /**
   * Lookup653: acala_runtime::RuntimeParametersKey
   **/
  AcalaRuntimeRuntimeParametersKey: {
    _enum: {
      Earning: 'ModuleEarningParametersKey'
    }
  },
  /**
   * Lookup654: module_earning::ParametersKey
   **/
  ModuleEarningParametersKey: {
    _enum: ['InstantUnstakeFee']
  },
  /**
   * Lookup655: acala_runtime::RuntimeParametersValue
   **/
  AcalaRuntimeRuntimeParametersValue: {
    _enum: {
      Earning: 'ModuleEarningParametersValue'
    }
  },
  /**
   * Lookup656: module_earning::ParametersValue
   **/
  ModuleEarningParametersValue: {
    _enum: {
      InstantUnstakeFee: 'Permill'
    }
  },
  /**
   * Lookup657: orml_parameters::module::Error<T>
   **/
  OrmlParametersModuleError: 'Null',
  /**
   * Lookup658: module_prices::module::Error<T>
   **/
  ModulePricesModuleError: {
    _enum: ['AccessPriceFailed', 'NoLockedPrice']
  },
  /**
   * Lookup659: module_dex::TradingPairStatus<Balance, BlockNumber>
   **/
  ModuleDexTradingPairStatus: {
    _enum: {
      Disabled: 'Null',
      Provisioning: 'ModuleDexProvisioningParameters',
      Enabled: 'Null'
    }
  },
  /**
   * Lookup660: module_dex::ProvisioningParameters<Balance, BlockNumber>
   **/
  ModuleDexProvisioningParameters: {
    minContribution: '(u128,u128)',
    targetProvision: '(u128,u128)',
    accumulatedProvision: '(u128,u128)',
    notBefore: 'u32'
  },
  /**
   * Lookup663: module_dex::module::Error<T>
   **/
  ModuleDexModuleError: {
    _enum: ['AlreadyEnabled', 'MustBeEnabled', 'MustBeProvisioning', 'MustBeDisabled', 'NotAllowedList', 'InvalidContributionIncrement', 'InvalidLiquidityIncrement', 'InvalidCurrencyId', 'InvalidTradingPathLength', 'InsufficientTargetAmount', 'ExcessiveSupplyAmount', 'InsufficientLiquidity', 'ZeroSupplyAmount', 'ZeroTargetAmount', 'UnacceptableShareIncrement', 'UnacceptableLiquidityWithdrawn', 'InvariantCheckFailed', 'UnqualifiedProvision', 'StillProvisioning', 'AssetUnregistered', 'InvalidTradingPath', 'NotAllowedRefund', 'CannotSwap', 'InvalidClaim']
  },
  /**
   * Lookup668: module_dex_oracle::module::Error<T>
   **/
  ModuleDexOracleModuleError: {
    _enum: ['AveragePriceAlreadyEnabled', 'AveragePriceMustBeEnabled', 'InvalidPool', 'InvalidCurrencyId', 'IntervalIsZero']
  },
  /**
   * Lookup671: module_aggregated_dex::module::Error<T>
   **/
  ModuleAggregatedDexModuleError: {
    _enum: ['CannotSwap', 'InvalidPoolId', 'InvalidTokenIndex', 'InvalidSwapPath']
  },
  /**
   * Lookup672: acala_primitives::bonding::ledger::BondingLedger<Moment, MaxUnlockingChunks, MinBond>
   **/
  AcalaPrimitivesBondingLedgerBondingLedger: {
    total: 'u128',
    active: 'u128',
    unlocking: 'Vec<AcalaPrimitivesBondingLedgerUnlockChunk>'
  },
  /**
   * Lookup674: acala_primitives::bonding::ledger::UnlockChunk<Moment>
   **/
  AcalaPrimitivesBondingLedgerUnlockChunk: {
    value: 'u128',
    unlockAt: 'u32'
  },
  /**
   * Lookup676: module_earning::module::Error<T>
   **/
  ModuleEarningModuleError: {
    _enum: ['BelowMinBondThreshold', 'MaxUnlockChunksExceeded', 'NotBonded', 'NotAllowed']
  },
  /**
   * Lookup677: module_auction_manager::CollateralAuctionItem<sp_core::crypto::AccountId32, BlockNumber>
   **/
  ModuleAuctionManagerCollateralAuctionItem: {
    refundRecipient: 'AccountId32',
    currencyId: 'AcalaPrimitivesCurrencyCurrencyId',
    initialAmount: 'Compact<u128>',
    amount: 'Compact<u128>',
    target: 'Compact<u128>',
    startTime: 'u32'
  },
  /**
   * Lookup678: module_auction_manager::module::Error<T>
   **/
  ModuleAuctionManagerModuleError: {
    _enum: ['AuctionNotExists', 'InReverseStage', 'InvalidFeedPrice', 'MustAfterShutdown', 'InvalidBidPrice', 'InvalidAmount']
  },
  /**
   * Lookup680: acala_primitives::Position
   **/
  AcalaPrimitivesPosition: {
    collateral: 'u128',
    debit: 'u128'
  },
  /**
   * Lookup681: module_loans::module::Error<T>
   **/
  ModuleLoansModuleError: {
    _enum: ['AmountConvertFailed']
  },
  /**
   * Lookup683: module_honzon::module::Error<T>
   **/
  ModuleHonzonModuleError: {
    _enum: ['NoPermission', 'AlreadyShutdown', 'AuthorizationNotExists', 'AlreadyAuthorized']
  },
  /**
   * Lookup684: module_cdp_treasury::module::Error<T>
   **/
  ModuleCdpTreasuryModuleError: {
    _enum: ['CollateralNotEnough', 'SurplusPoolNotEnough', 'DebitPoolNotEnough', 'CannotSwap', 'NotDexShare']
  },
  /**
   * Lookup685: module_cdp_engine::RiskManagementParams
   **/
  ModuleCdpEngineRiskManagementParams: {
    maximumTotalDebitValue: 'u128',
    interestRatePerSec: 'Option<u128>',
    liquidationRatio: 'Option<u128>',
    liquidationPenalty: 'Option<u128>',
    requiredCollateralRatio: 'Option<u128>'
  },
  /**
   * Lookup690: module_cdp_engine::module::Error<T>
   **/
  ModuleCdpEngineModuleError: {
    _enum: ['ExceedDebitValueHardCap', 'BelowRequiredCollateralRatio', 'BelowLiquidationRatio', 'MustBeUnsafe', 'MustBeSafe', 'InvalidCollateralType', 'RemainDebitValueTooSmall', 'CollateralAmountBelowMinimum', 'InvalidFeedPrice', 'NoDebitValue', 'AlreadyShutdown', 'MustAfterShutdown', 'CollateralNotEnough', 'NotEnoughDebitDecrement', 'ConvertDebitBalanceFailed', 'LiquidationFailed', 'TooManyLiquidationContracts', 'CollateralContractNotFound', 'InvalidRate']
  },
  /**
   * Lookup691: module_emergency_shutdown::module::Error<T>
   **/
  ModuleEmergencyShutdownModuleError: {
    _enum: ['AlreadyShutdown', 'MustAfterShutdown', 'CanNotRefund', 'ExistPotentialSurplus', 'ExistUnhandledDebit']
  },
  /**
   * Lookup692: module_homa::module::StakingLedger
   **/
  ModuleHomaModuleStakingLedger: {
    bonded: 'Compact<u128>',
    unlocking: 'Vec<ModuleHomaModuleUnlockChunk>'
  },
  /**
   * Lookup696: module_homa::module::Error<T>
   **/
  ModuleHomaModuleError: {
    _enum: ['BelowMintThreshold', 'BelowRedeemThreshold', 'ExceededStakingCurrencySoftCap', 'InsufficientUnclaimedRedemption', 'OutdatedEraIndex', 'FastMatchIsNotAllowed', 'CannotCompletelyFastMatch', 'InvalidRate', 'InvalidLastEraBumpedBlock']
  },
  /**
   * Lookup698: module_xcm_interface::module::Error<T>
   **/
  ModuleXcmInterfaceModuleError: {
    _enum: ['XcmFailed']
  },
  /**
   * Lookup700: module_homa_validator_list::Guarantee<EraIndex>
   **/
  ModuleHomaValidatorListGuarantee: {
    total: 'u128',
    bonded: 'u128',
    unbonding: 'Option<(u128,u32)>'
  },
  /**
   * Lookup703: module_homa_validator_list::ValidatorBacking
   **/
  ModuleHomaValidatorListValidatorBacking: {
    totalInsurance: 'u128',
    isFrozen: 'bool'
  },
  /**
   * Lookup704: module_homa_validator_list::module::Error<T>
   **/
  ModuleHomaValidatorListModuleError: {
    _enum: ['BelowMinBondAmount', 'UnbondingExists', 'FrozenValidator']
  },
  /**
   * Lookup707: module_nominees_election::module::Error<T, I>
   **/
  ModuleNomineesElectionModuleError: {
    _enum: ['BelowMinBondThreshold', 'InvalidTargetsLength', 'MaxUnlockChunksExceeded', 'InvalidNominee', 'NominateesCountExceeded', 'NotBonded']
  },
  /**
   * Lookup709: module_incentives::module::Error<T>
   **/
  ModuleIncentivesModuleError: {
    _enum: ['NotEnough', 'InvalidCurrencyId', 'InvalidPoolId', 'InvalidRate']
  },
  /**
   * Lookup710: module_nft::module::Error<T>
   **/
  ModuleNftModuleError: {
    _enum: ['ClassIdNotFound', 'TokenIdNotFound', 'NoPermission', 'InvalidQuantity', 'NonTransferable', 'NonBurnable', 'NonMintable', 'CannotDestroyClass', 'Immutable', 'AttributesTooLarge', 'IncorrectTokenId']
  },
  /**
   * Lookup711: module_asset_registry::module::Error<T>
   **/
  ModuleAssetRegistryModuleError: {
    _enum: ['BadLocation', 'LocationExisted', 'AssetIdNotExists', 'AssetIdExisted']
  },
  /**
   * Lookup712: module_evm::module::AccountInfo<Nonce>
   **/
  ModuleEvmModuleAccountInfo: {
    nonce: 'u32',
    contractInfo: 'Option<ModuleEvmModuleContractInfo>'
  },
  /**
   * Lookup714: module_evm::module::ContractInfo
   **/
  ModuleEvmModuleContractInfo: {
    codeHash: 'H256',
    maintainer: 'H160',
    published: 'bool'
  },
  /**
   * Lookup717: module_evm::module::CodeInfo
   **/
  ModuleEvmModuleCodeInfo: {
    codeSize: 'u32',
    refCount: 'u32'
  },
  /**
   * Lookup718: module_evm::module::Error<T>
   **/
  ModuleEvmModuleError: {
    _enum: ['AddressNotMapped', 'ContractNotFound', 'NoPermission', 'ContractDevelopmentNotEnabled', 'ContractDevelopmentAlreadyEnabled', 'ContractAlreadyPublished', 'ContractExceedsMaxCodeSize', 'ContractAlreadyExisted', 'OutOfStorage', 'ChargeFeeFailed', 'CannotKillContract', 'ReserveStorageFailed', 'UnreserveStorageFailed', 'ChargeStorageFailed', 'InvalidDecimals', 'StrictCallFailed', 'NotEOA']
  },
  /**
   * Lookup719: module_evm_bridge::module::Error<T>
   **/
  ModuleEvmBridgeModuleError: {
    _enum: ['ExecutionFail', 'ExecutionRevert', 'ExecutionFatal', 'ExecutionError', 'InvalidReturnValue']
  },
  /**
   * Lookup720: module_evm_accounts::module::Error<T>
   **/
  ModuleEvmAccountsModuleError: {
    _enum: ['AccountIdHasMapped', 'EthAddressHasMapped', 'BadSignature', 'InvalidSignature', 'NonZeroRefCount']
  },
  /**
   * Lookup721: nutsfinance_stable_asset::StableAssetPoolInfo<acala_primitives::currency::CurrencyId, AtLeast64BitUnsigned, Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  NutsfinanceStableAssetStableAssetPoolInfo: {
    poolAsset: 'AcalaPrimitivesCurrencyCurrencyId',
    assets: 'Vec<AcalaPrimitivesCurrencyCurrencyId>',
    precisions: 'Vec<u128>',
    mintFee: 'u128',
    swapFee: 'u128',
    redeemFee: 'u128',
    totalSupply: 'u128',
    a: 'u128',
    aBlock: 'u32',
    futureA: 'u128',
    futureABlock: 'u32',
    balances: 'Vec<u128>',
    feeRecipient: 'AccountId32',
    accountId: 'AccountId32',
    yieldRecipient: 'AccountId32',
    precision: 'u128'
  },
  /**
   * Lookup722: nutsfinance_stable_asset::pallet::Error<T>
   **/
  NutsfinanceStableAssetError: {
    _enum: ['InconsistentStorage', 'InvalidPoolAsset', 'ArgumentsMismatch', 'ArgumentsError', 'PoolNotFound', 'Math', 'InvalidPoolValue', 'MintUnderMin', 'SwapUnderMin', 'RedeemUnderMin', 'RedeemOverMax']
  },
  /**
   * Lookup724: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentAncestor: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    paraHeadHash: 'Option<H256>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV8UpgradeGoAhead>'
  },
  /**
   * Lookup725: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
   **/
  CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
    umpMsgCount: 'u32',
    umpTotalBytes: 'u32',
    hrmpOutgoing: 'BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>'
  },
  /**
   * Lookup727: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
   **/
  CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
    msgCount: 'u32',
    totalBytes: 'u32'
  },
  /**
   * Lookup731: polkadot_primitives::v8::UpgradeGoAhead
   **/
  PolkadotPrimitivesV8UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup732: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    hrmpWatermark: 'Option<u32>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV8UpgradeGoAhead>'
  },
  /**
   * Lookup734: polkadot_primitives::v8::UpgradeRestriction
   **/
  PolkadotPrimitivesV8UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup735: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueRemainingCapacity: 'CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV8AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV8AbridgedHrmpChannel)>'
  },
  /**
   * Lookup736: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
   **/
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
    remainingCount: 'u32',
    remainingSize: 'u32'
  },
  /**
   * Lookup739: polkadot_primitives::v8::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV8AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup740: polkadot_primitives::v8::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV8AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesV8AsyncBackingAsyncBackingParams'
  },
  /**
   * Lookup741: polkadot_primitives::v8::async_backing::AsyncBackingParams
   **/
  PolkadotPrimitivesV8AsyncBackingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup747: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup748: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled']
  },
  /**
   * Lookup749: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup752: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup753: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup754: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup755: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup758: runtime_common::check_nonce::CheckNonce<T>
   **/
  RuntimeCommonCheckNonce: {
    nonce: 'Compact<u32>'
  },
  /**
   * Lookup759: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup760: frame_metadata_hash_extension::CheckMetadataHash<T>
   **/
  FrameMetadataHashExtensionCheckMetadataHash: {
    mode: 'FrameMetadataHashExtensionMode'
  },
  /**
   * Lookup761: frame_metadata_hash_extension::Mode
   **/
  FrameMetadataHashExtensionMode: {
    _enum: ['Disabled', 'Enabled']
  },
  /**
   * Lookup762: module_evm::SetEvmOrigin<T>
   **/
  ModuleEvmSetEvmOrigin: 'Null',
  /**
   * Lookup763: module_transaction_payment::ChargeTransactionPayment<T>
   **/
  ModuleTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup764: acala_runtime::StorageDepositPerByte
   **/
  AcalaRuntimeStorageDepositPerByte: 'Null',
  /**
   * Lookup765: acala_runtime::TxFeePerGas
   **/
  AcalaRuntimeTxFeePerGas: 'Null',
  /**
   * Lookup767: acala_primitives::signature::AcalaMultiSignature
   **/
  AcalaPrimitivesSignatureAcalaMultiSignature: {
    _enum: {
      Ed25519: '[u8;64]',
      Sr25519: '[u8;64]',
      Ecdsa: '[u8;65]',
      Ethereum: '[u8;65]',
      Eip1559: '[u8;65]',
      AcalaEip712: '[u8;65]',
      Eip2930: '[u8;65]'
    }
  }
};
