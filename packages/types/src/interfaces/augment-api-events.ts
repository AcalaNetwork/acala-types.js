// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, i128, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256 } from '@polkadot/types/interfaces/runtime';
import type { AcalaPrimitivesCurrencyAssetIds, AcalaPrimitivesCurrencyAssetMetadata, AcalaPrimitivesCurrencyCurrencyId, AcalaPrimitivesTradingPair, AcalaRuntimeOriginCaller, AcalaRuntimeRuntimeParameters, AcalaRuntimeScheduledTasks, CumulusPrimitivesCoreAggregateMessageOrigin, EthereumLog, EvmCoreErrorExitReason, FrameSupportDispatchDispatchInfo, FrameSupportMessagesProcessMessageError, FrameSupportTokensMiscBalanceStatus, ModuleHomaModuleUnlockChunk, ModuleSupportIncentivesPoolId, ModuleXcmInterfaceModuleXcmInterfaceOperation, OrmlVestingVestingSchedule, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletDemocracyVoteThreshold, PalletMultisigTimepoint, RuntimeCommonProxyType, SpRuntimeDispatchError, SpWeightsWeightV2Weight, StagingXcmV4Asset, StagingXcmV4AssetAssets, StagingXcmV4Location, StagingXcmV4Response, StagingXcmV4TraitsOutcome, StagingXcmV4Xcm, XcmV3TraitsError, XcmVersionedAssets, XcmVersionedLocation } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    acalaOracle: {
      NewFeedData: AugmentedEvent<ApiType, [sender: AccountId32, values: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>>], { sender: AccountId32, values: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetRegistry: {
      AssetRegistered: AugmentedEvent<ApiType, [assetId: AcalaPrimitivesCurrencyAssetIds, metadata: AcalaPrimitivesCurrencyAssetMetadata], { assetId: AcalaPrimitivesCurrencyAssetIds, metadata: AcalaPrimitivesCurrencyAssetMetadata }>;
      AssetUpdated: AugmentedEvent<ApiType, [assetId: AcalaPrimitivesCurrencyAssetIds, metadata: AcalaPrimitivesCurrencyAssetMetadata], { assetId: AcalaPrimitivesCurrencyAssetIds, metadata: AcalaPrimitivesCurrencyAssetMetadata }>;
      ForeignAssetRegistered: AugmentedEvent<ApiType, [assetId: u16, assetAddress: StagingXcmV4Location, metadata: AcalaPrimitivesCurrencyAssetMetadata], { assetId: u16, assetAddress: StagingXcmV4Location, metadata: AcalaPrimitivesCurrencyAssetMetadata }>;
      ForeignAssetUpdated: AugmentedEvent<ApiType, [assetId: u16, assetAddress: StagingXcmV4Location, metadata: AcalaPrimitivesCurrencyAssetMetadata], { assetId: u16, assetAddress: StagingXcmV4Location, metadata: AcalaPrimitivesCurrencyAssetMetadata }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    auction: {
      Bid: AugmentedEvent<ApiType, [auctionId: u32, bidder: AccountId32, amount: u128], { auctionId: u32, bidder: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    auctionManager: {
      CancelAuction: AugmentedEvent<ApiType, [auctionId: u32], { auctionId: u32 }>;
      CollateralAuctionAborted: AugmentedEvent<ApiType, [auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, targetStableAmount: u128, refundRecipient: AccountId32], { auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, targetStableAmount: u128, refundRecipient: AccountId32 }>;
      CollateralAuctionDealt: AugmentedEvent<ApiType, [auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, winner: AccountId32, paymentAmount: u128], { auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, winner: AccountId32, paymentAmount: u128 }>;
      DEXTakeCollateralAuction: AugmentedEvent<ApiType, [auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, supplyCollateralAmount: u128, targetStableAmount: u128], { auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, supplyCollateralAmount: u128, targetStableAmount: u128 }>;
      NewCollateralAuction: AugmentedEvent<ApiType, [auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, targetBidPrice: u128], { auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, targetBidPrice: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    authority: {
      AuthorizedCall: AugmentedEvent<ApiType, [hash_: H256, caller: Option<AccountId32>], { hash_: H256, caller: Option<AccountId32> }>;
      Cancelled: AugmentedEvent<ApiType, [origin: AcalaRuntimeOriginCaller, index: u32], { origin: AcalaRuntimeOriginCaller, index: u32 }>;
      Delayed: AugmentedEvent<ApiType, [origin: AcalaRuntimeOriginCaller, index: u32, when: u32], { origin: AcalaRuntimeOriginCaller, index: u32, when: u32 }>;
      Dispatched: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      FastTracked: AugmentedEvent<ApiType, [origin: AcalaRuntimeOriginCaller, index: u32, when: u32], { origin: AcalaRuntimeOriginCaller, index: u32, when: u32 }>;
      RemovedAuthorizedCall: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      Scheduled: AugmentedEvent<ApiType, [origin: AcalaRuntimeOriginCaller, index: u32], { origin: AcalaRuntimeOriginCaller, index: u32 }>;
      TriggeredCallBy: AugmentedEvent<ApiType, [hash_: H256, caller: AccountId32], { hash_: H256, caller: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32, free: u128 }>;
      Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      TotalIssuanceForced: AugmentedEvent<ApiType, [old: u128, new_: u128], { old: u128, new_: u128 }>;
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      BountyApproved: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
      CuratorAccepted: AugmentedEvent<ApiType, [bountyId: u32, curator: AccountId32], { bountyId: u32, curator: AccountId32 }>;
      CuratorProposed: AugmentedEvent<ApiType, [bountyId: u32, curator: AccountId32], { bountyId: u32, curator: AccountId32 }>;
      CuratorUnassigned: AugmentedEvent<ApiType, [bountyId: u32], { bountyId: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cdpEngine: {
      CloseCDPInDebitByDEX: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32, soldCollateralAmount: u128, refundCollateralAmount: u128, debitValue: u128], { collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32, soldCollateralAmount: u128, refundCollateralAmount: u128, debitValue: u128 }>;
      InterestRatePerSecUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newInterestRatePerSec: Option<u128>], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newInterestRatePerSec: Option<u128> }>;
      LiquidateUnsafeCDP: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32, collateralAmount: u128, badDebtValue: u128, targetAmount: u128], { collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32, collateralAmount: u128, badDebtValue: u128, targetAmount: u128 }>;
      LiquidationContractDeregistered: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      LiquidationContractRegistered: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      LiquidationPenaltyUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newLiquidationPenalty: Option<u128>], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newLiquidationPenalty: Option<u128> }>;
      LiquidationRatioUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newLiquidationRatio: Option<u128>], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newLiquidationRatio: Option<u128> }>;
      MaximumTotalDebitValueUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newTotalDebitValue: u128], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newTotalDebitValue: u128 }>;
      RequiredCollateralRatioUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newRequiredCollateralRatio: Option<u128>], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newRequiredCollateralRatio: Option<u128> }>;
      SettleCDPInDebit: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32], { collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cdpTreasury: {
      DebitOffsetBufferUpdated: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      ExpectedCollateralAuctionSizeUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newSize: u128], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newSize: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    collatorSelection: {
      CandidateAdded: AugmentedEvent<ApiType, [who: AccountId32, bond: u128], { who: AccountId32, bond: u128 }>;
      CandidateRemoved: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      NewCandidacyBond: AugmentedEvent<ApiType, [newCandidacyBond: u128], { newCandidacyBond: u128 }>;
      NewDesiredCandidates: AugmentedEvent<ApiType, [newDesiredCandidates: u32], { newDesiredCandidates: u32 }>;
      NewInvulnerables: AugmentedEvent<ApiType, [newInvulnerables: Vec<AccountId32>], { newInvulnerables: Vec<AccountId32> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, StagingXcmV4TraitsOutcome]>;
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    currencies: {
      Deposited: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      DustSwept: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      Transferred: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128 }>;
      Withdrawn: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      ExternalTabled: AugmentedEvent<ApiType, []>;
      MetadataCleared: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      MetadataSet: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      MetadataTransferred: AugmentedEvent<ApiType, [prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256], { prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>;
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32, propIndex: u32 }>;
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u32], { who: AccountId32, proposalHash: H256, until: u32 }>;
      Voted: AugmentedEvent<ApiType, [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote], { voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dex: {
      AddLiquidity: AugmentedEvent<ApiType, [who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, pool0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, pool1: u128, shareIncrement: u128], { who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, pool0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, pool1: u128, shareIncrement: u128 }>;
      AddProvision: AugmentedEvent<ApiType, [who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, contribution0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, contribution1: u128], { who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, contribution0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, contribution1: u128 }>;
      DisableTradingPair: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair], { tradingPair: AcalaPrimitivesTradingPair }>;
      EnableTradingPair: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair], { tradingPair: AcalaPrimitivesTradingPair }>;
      ListProvisioning: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair], { tradingPair: AcalaPrimitivesTradingPair }>;
      ProvisioningAborted: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair, accumulatedProvision0: u128, accumulatedProvision1: u128], { tradingPair: AcalaPrimitivesTradingPair, accumulatedProvision0: u128, accumulatedProvision1: u128 }>;
      ProvisioningToEnabled: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair, pool0: u128, pool1: u128, shareAmount: u128], { tradingPair: AcalaPrimitivesTradingPair, pool0: u128, pool1: u128, shareAmount: u128 }>;
      RefundProvision: AugmentedEvent<ApiType, [who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, contribution0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, contribution1: u128], { who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, contribution0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, contribution1: u128 }>;
      RemoveLiquidity: AugmentedEvent<ApiType, [who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, pool0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, pool1: u128, shareDecrement: u128], { who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, pool0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, pool1: u128, shareDecrement: u128 }>;
      Swap: AugmentedEvent<ApiType, [trader: AccountId32, path: Vec<AcalaPrimitivesCurrencyCurrencyId>, liquidityChanges: Vec<u128>], { trader: AccountId32, path: Vec<AcalaPrimitivesCurrencyCurrencyId>, liquidityChanges: Vec<u128> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    earning: {
      Bonded: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      InstantUnbonded: AugmentedEvent<ApiType, [who: AccountId32, amount: u128, fee: u128], { who: AccountId32, amount: u128, fee: u128 }>;
      Rebonded: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Unbonded: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Withdrawn: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    emergencyShutdown: {
      OpenRefund: AugmentedEvent<ApiType, [blockNumber: u32], { blockNumber: u32 }>;
      Refund: AugmentedEvent<ApiType, [who: AccountId32, stableCoinAmount: u128, refundList: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>>], { who: AccountId32, stableCoinAmount: u128, refundList: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>> }>;
      Shutdown: AugmentedEvent<ApiType, [blockNumber: u32], { blockNumber: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    evm: {
      ContractDevelopmentDisabled: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      ContractDevelopmentEnabled: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      ContractPublished: AugmentedEvent<ApiType, [contract: H160], { contract: H160 }>;
      ContractSelfdestructed: AugmentedEvent<ApiType, [contract: H160], { contract: H160 }>;
      ContractSetCode: AugmentedEvent<ApiType, [contract: H160], { contract: H160 }>;
      Created: AugmentedEvent<ApiType, [from: H160, contract: H160, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32], { from: H160, contract: H160, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32 }>;
      CreatedFailed: AugmentedEvent<ApiType, [from: H160, contract: H160, exitReason: EvmCoreErrorExitReason, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32], { from: H160, contract: H160, exitReason: EvmCoreErrorExitReason, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32 }>;
      Executed: AugmentedEvent<ApiType, [from: H160, contract: H160, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32], { from: H160, contract: H160, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32 }>;
      ExecutedFailed: AugmentedEvent<ApiType, [from: H160, contract: H160, exitReason: EvmCoreErrorExitReason, output: Bytes, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32], { from: H160, contract: H160, exitReason: EvmCoreErrorExitReason, output: Bytes, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32 }>;
      TransferredMaintainer: AugmentedEvent<ApiType, [contract: H160, newMaintainer: H160], { contract: H160, newMaintainer: H160 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    evmAccounts: {
      ClaimAccount: AugmentedEvent<ApiType, [accountId: AccountId32, evmAddress: H160], { accountId: AccountId32, evmAddress: H160 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    financialCouncil: {
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    financialCouncilMembership: {
      Dummy: AugmentedEvent<ApiType, []>;
      KeyChanged: AugmentedEvent<ApiType, []>;
      MemberAdded: AugmentedEvent<ApiType, []>;
      MemberRemoved: AugmentedEvent<ApiType, []>;
      MembersReset: AugmentedEvent<ApiType, []>;
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    generalCouncil: {
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    generalCouncilMembership: {
      Dummy: AugmentedEvent<ApiType, []>;
      KeyChanged: AugmentedEvent<ApiType, []>;
      MemberAdded: AugmentedEvent<ApiType, []>;
      MemberRemoved: AugmentedEvent<ApiType, []>;
      MembersReset: AugmentedEvent<ApiType, []>;
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    homa: {
      BumpEraFrequencyUpdated: AugmentedEvent<ApiType, [frequency: u32], { frequency: u32 }>;
      CommissionRateUpdated: AugmentedEvent<ApiType, [commissionRate: u128], { commissionRate: u128 }>;
      CurrentEraBumped: AugmentedEvent<ApiType, [newEraIndex: u32], { newEraIndex: u32 }>;
      CurrentEraReset: AugmentedEvent<ApiType, [newEraIndex: u32], { newEraIndex: u32 }>;
      EstimatedRewardRatePerEraUpdated: AugmentedEvent<ApiType, [rewardRate: u128], { rewardRate: u128 }>;
      FastMatchFeeRateUpdated: AugmentedEvent<ApiType, [fastMatchFeeRate: u128], { fastMatchFeeRate: u128 }>;
      HomaBondExtra: AugmentedEvent<ApiType, [subAccountIndex: u16, amount: u128], { subAccountIndex: u16, amount: u128 }>;
      HomaNominate: AugmentedEvent<ApiType, [subAccountIndex: u16, nominations: Vec<AccountId32>], { subAccountIndex: u16, nominations: Vec<AccountId32> }>;
      HomaUnbond: AugmentedEvent<ApiType, [subAccountIndex: u16, amount: u128], { subAccountIndex: u16, amount: u128 }>;
      HomaWithdrawUnbonded: AugmentedEvent<ApiType, [subAccountIndex: u16, amount: u128], { subAccountIndex: u16, amount: u128 }>;
      LastEraBumpedBlockUpdated: AugmentedEvent<ApiType, [lastEraBumpedBlock: u32], { lastEraBumpedBlock: u32 }>;
      LedgerBondedReset: AugmentedEvent<ApiType, [subAccountIndex: u16, newBondedAmount: u128], { subAccountIndex: u16, newBondedAmount: u128 }>;
      LedgerUnlockingReset: AugmentedEvent<ApiType, [subAccountIndex: u16, newUnlocking: Vec<ModuleHomaModuleUnlockChunk>], { subAccountIndex: u16, newUnlocking: Vec<ModuleHomaModuleUnlockChunk> }>;
      Minted: AugmentedEvent<ApiType, [minter: AccountId32, stakingCurrencyAmount: u128, liquidAmountReceived: u128, liquidAmountAddedToVoid: u128], { minter: AccountId32, stakingCurrencyAmount: u128, liquidAmountReceived: u128, liquidAmountAddedToVoid: u128 }>;
      NominateIntervalEraUpdated: AugmentedEvent<ApiType, [eras: u32], { eras: u32 }>;
      RedeemedByFastMatch: AugmentedEvent<ApiType, [redeemer: AccountId32, matchedLiquidAmount: u128, feeInLiquid: u128, redeemedStakingAmount: u128], { redeemer: AccountId32, matchedLiquidAmount: u128, feeInLiquid: u128, redeemedStakingAmount: u128 }>;
      RedeemedByUnbond: AugmentedEvent<ApiType, [redeemer: AccountId32, eraIndexWhenUnbond: u32, liquidAmount: u128, unbondingStakingAmount: u128], { redeemer: AccountId32, eraIndexWhenUnbond: u32, liquidAmount: u128, unbondingStakingAmount: u128 }>;
      RedeemRequestCancelled: AugmentedEvent<ApiType, [redeemer: AccountId32, cancelledLiquidAmount: u128], { redeemer: AccountId32, cancelledLiquidAmount: u128 }>;
      RequestedRedeem: AugmentedEvent<ApiType, [redeemer: AccountId32, liquidAmount: u128, allowFastMatch: bool], { redeemer: AccountId32, liquidAmount: u128, allowFastMatch: bool }>;
      SoftBondedCapPerSubAccountUpdated: AugmentedEvent<ApiType, [capAmount: u128], { capAmount: u128 }>;
      WithdrawRedemption: AugmentedEvent<ApiType, [redeemer: AccountId32, redemptionAmount: u128], { redeemer: AccountId32, redemptionAmount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    homaCouncil: {
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    homaCouncilMembership: {
      Dummy: AugmentedEvent<ApiType, []>;
      KeyChanged: AugmentedEvent<ApiType, []>;
      MemberAdded: AugmentedEvent<ApiType, []>;
      MemberRemoved: AugmentedEvent<ApiType, []>;
      MembersReset: AugmentedEvent<ApiType, []>;
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    homaValidatorList: {
      BondGuarantee: AugmentedEvent<ApiType, [who: AccountId32, validator: AccountId32, bond: u128], { who: AccountId32, validator: AccountId32, bond: u128 }>;
      FreezeValidator: AugmentedEvent<ApiType, [validator: AccountId32], { validator: AccountId32 }>;
      SlashGuarantee: AugmentedEvent<ApiType, [who: AccountId32, validator: AccountId32, bond: u128], { who: AccountId32, validator: AccountId32, bond: u128 }>;
      ThawValidator: AugmentedEvent<ApiType, [validator: AccountId32], { validator: AccountId32 }>;
      UnbondGuarantee: AugmentedEvent<ApiType, [who: AccountId32, validator: AccountId32, bond: u128], { who: AccountId32, validator: AccountId32, bond: u128 }>;
      WithdrawnGuarantee: AugmentedEvent<ApiType, [who: AccountId32, validator: AccountId32, bond: u128], { who: AccountId32, validator: AccountId32, bond: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    honzon: {
      Authorization: AugmentedEvent<ApiType, [authorizer: AccountId32, authorizee: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId], { authorizer: AccountId32, authorizee: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId }>;
      TransferDebit: AugmentedEvent<ApiType, [fromCurrency: AcalaPrimitivesCurrencyCurrencyId, toCurrency: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { fromCurrency: AcalaPrimitivesCurrencyCurrencyId, toCurrency: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      UnAuthorization: AugmentedEvent<ApiType, [authorizer: AccountId32, authorizee: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId], { authorizer: AccountId32, authorizee: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId }>;
      UnAuthorizationAll: AugmentedEvent<ApiType, [authorizer: AccountId32], { authorizer: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    idleScheduler: {
      TaskAdded: AugmentedEvent<ApiType, [taskId: u32, task: AcalaRuntimeScheduledTasks], { taskId: u32, task: AcalaRuntimeScheduledTasks }>;
      TaskDispatched: AugmentedEvent<ApiType, [taskId: u32, result: Result<Null, SpRuntimeDispatchError>], { taskId: u32, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    incentives: {
      ClaimRewardDeductionCurrencyUpdated: AugmentedEvent<ApiType, [pool: ModuleSupportIncentivesPoolId, currency: Option<AcalaPrimitivesCurrencyCurrencyId>], { pool: ModuleSupportIncentivesPoolId, currency: Option<AcalaPrimitivesCurrencyCurrencyId> }>;
      ClaimRewardDeductionRateUpdated: AugmentedEvent<ApiType, [pool: ModuleSupportIncentivesPoolId, deductionRate: u128], { pool: ModuleSupportIncentivesPoolId, deductionRate: u128 }>;
      ClaimRewards: AugmentedEvent<ApiType, [who: AccountId32, pool: ModuleSupportIncentivesPoolId, rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId, actualAmount: u128, deductionAmount: u128], { who: AccountId32, pool: ModuleSupportIncentivesPoolId, rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId, actualAmount: u128, deductionAmount: u128 }>;
      DepositDexShare: AugmentedEvent<ApiType, [who: AccountId32, dexShareType: AcalaPrimitivesCurrencyCurrencyId, deposit: u128], { who: AccountId32, dexShareType: AcalaPrimitivesCurrencyCurrencyId, deposit: u128 }>;
      IncentiveRewardAmountUpdated: AugmentedEvent<ApiType, [pool: ModuleSupportIncentivesPoolId, rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId, rewardAmountPerPeriod: u128], { pool: ModuleSupportIncentivesPoolId, rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId, rewardAmountPerPeriod: u128 }>;
      WithdrawDexShare: AugmentedEvent<ApiType, [who: AccountId32, dexShareType: AcalaPrimitivesCurrencyCurrencyId, withdraw: u128], { who: AccountId32, dexShareType: AcalaPrimitivesCurrencyCurrencyId, withdraw: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    liquidCrowdloan: {
      RedeemCurrencyIdUpdated: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId], { currencyId: AcalaPrimitivesCurrencyCurrencyId }>;
      Redeemed: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    loans: {
      ConfiscateCollateralAndDebit: AugmentedEvent<ApiType, [owner: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId, confiscatedCollateralAmount: u128, deductDebitAmount: u128], { owner: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId, confiscatedCollateralAmount: u128, deductDebitAmount: u128 }>;
      PositionUpdated: AugmentedEvent<ApiType, [owner: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAdjustment: i128, debitAdjustment: i128], { owner: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAdjustment: i128, debitAdjustment: i128 }>;
      TransferLoan: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, currencyId: AcalaPrimitivesCurrencyCurrencyId], { from: AccountId32, to: AccountId32, currencyId: AcalaPrimitivesCurrencyCurrencyId }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    messageQueue: {
      OverweightEnqueued: AugmentedEvent<ApiType, [id: U8aFixed, origin: CumulusPrimitivesCoreAggregateMessageOrigin, pageIndex: u32, messageIndex: u32], { id: U8aFixed, origin: CumulusPrimitivesCoreAggregateMessageOrigin, pageIndex: u32, messageIndex: u32 }>;
      PageReaped: AugmentedEvent<ApiType, [origin: CumulusPrimitivesCoreAggregateMessageOrigin, index: u32], { origin: CumulusPrimitivesCoreAggregateMessageOrigin, index: u32 }>;
      Processed: AugmentedEvent<ApiType, [id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, weightUsed: SpWeightsWeightV2Weight, success: bool], { id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, weightUsed: SpWeightsWeightV2Weight, success: bool }>;
      ProcessingFailed: AugmentedEvent<ApiType, [id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, error: FrameSupportMessagesProcessMessageError], { id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, error: FrameSupportMessagesProcessMessageError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nft: {
      BurnedToken: AugmentedEvent<ApiType, [owner: AccountId32, classId: u32, tokenId: u64], { owner: AccountId32, classId: u32, tokenId: u64 }>;
      BurnedTokenWithRemark: AugmentedEvent<ApiType, [owner: AccountId32, classId: u32, tokenId: u64, remarkHash: H256], { owner: AccountId32, classId: u32, tokenId: u64, remarkHash: H256 }>;
      CreatedClass: AugmentedEvent<ApiType, [owner: AccountId32, classId: u32], { owner: AccountId32, classId: u32 }>;
      DestroyedClass: AugmentedEvent<ApiType, [owner: AccountId32, classId: u32], { owner: AccountId32, classId: u32 }>;
      MintedToken: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, classId: u32, quantity: u32], { from: AccountId32, to: AccountId32, classId: u32, quantity: u32 }>;
      TransferredToken: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, classId: u32, tokenId: u64], { from: AccountId32, to: AccountId32, classId: u32, tokenId: u64 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nomineesElection: {
      Bond: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      Nominate: AugmentedEvent<ApiType, [who: AccountId32, targets: Vec<AccountId32>], { who: AccountId32, targets: Vec<AccountId32> }>;
      Rebond: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      ResetReservedNominees: AugmentedEvent<ApiType, [groupIndex: u16, reservedNominees: Vec<AccountId32>], { groupIndex: u16, reservedNominees: Vec<AccountId32> }>;
      Unbond: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      WithdrawUnbonded: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    operatorMembershipAcala: {
      Dummy: AugmentedEvent<ApiType, []>;
      KeyChanged: AugmentedEvent<ApiType, []>;
      MemberAdded: AugmentedEvent<ApiType, []>;
      MemberRemoved: AugmentedEvent<ApiType, []>;
      MembersReset: AugmentedEvent<ApiType, []>;
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ormlXcm: {
      Sent: AugmentedEvent<ApiType, [to: StagingXcmV4Location, message: StagingXcmV4Xcm], { to: StagingXcmV4Location, message: StagingXcmV4Xcm }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256], { weightUsed: SpWeightsWeightV2Weight, dmqHead: H256 }>;
      DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
      UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parameters: {
      Updated: AugmentedEvent<ApiType, [keyValue: AcalaRuntimeRuntimeParameters], { keyValue: AcalaRuntimeRuntimeParameters }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      AssetsClaimed: AugmentedEvent<ApiType, [hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets], { hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets }>;
      AssetsTrapped: AugmentedEvent<ApiType, [hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets], { hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets }>;
      Attempted: AugmentedEvent<ApiType, [outcome: StagingXcmV4TraitsOutcome], { outcome: StagingXcmV4TraitsOutcome }>;
      FeesPaid: AugmentedEvent<ApiType, [paying: StagingXcmV4Location, fees: StagingXcmV4AssetAssets], { paying: StagingXcmV4Location, fees: StagingXcmV4AssetAssets }>;
      InvalidQuerier: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64, expectedQuerier: StagingXcmV4Location, maybeActualQuerier: Option<StagingXcmV4Location>], { origin: StagingXcmV4Location, queryId: u64, expectedQuerier: StagingXcmV4Location, maybeActualQuerier: Option<StagingXcmV4Location> }>;
      InvalidQuerierVersion: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64], { origin: StagingXcmV4Location, queryId: u64 }>;
      InvalidResponder: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64, expectedLocation: Option<StagingXcmV4Location>], { origin: StagingXcmV4Location, queryId: u64, expectedLocation: Option<StagingXcmV4Location> }>;
      InvalidResponderVersion: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64], { origin: StagingXcmV4Location, queryId: u64 }>;
      Notified: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      NotifyDecodeFailed: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      NotifyDispatchError: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      NotifyOverweight: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8, actualWeight: SpWeightsWeightV2Weight, maxBudgetedWeight: SpWeightsWeightV2Weight], { queryId: u64, palletIndex: u8, callIndex: u8, actualWeight: SpWeightsWeightV2Weight, maxBudgetedWeight: SpWeightsWeightV2Weight }>;
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [location: XcmVersionedLocation, queryId: u64], { location: XcmVersionedLocation, queryId: u64 }>;
      NotifyTargetSendFail: AugmentedEvent<ApiType, [location: StagingXcmV4Location, queryId: u64, error: XcmV3TraitsError], { location: StagingXcmV4Location, queryId: u64, error: XcmV3TraitsError }>;
      ResponseReady: AugmentedEvent<ApiType, [queryId: u64, response: StagingXcmV4Response], { queryId: u64, response: StagingXcmV4Response }>;
      ResponseTaken: AugmentedEvent<ApiType, [queryId: u64], { queryId: u64 }>;
      Sent: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, destination: StagingXcmV4Location, message: StagingXcmV4Xcm, messageId: U8aFixed], { origin: StagingXcmV4Location, destination: StagingXcmV4Location, message: StagingXcmV4Xcm, messageId: U8aFixed }>;
      SupportedVersionChanged: AugmentedEvent<ApiType, [location: StagingXcmV4Location, version: u32], { location: StagingXcmV4Location, version: u32 }>;
      UnexpectedResponse: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64], { origin: StagingXcmV4Location, queryId: u64 }>;
      VersionChangeNotified: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, result: u32, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, result: u32, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      VersionMigrationFinished: AugmentedEvent<ApiType, [version: u32], { version: u32 }>;
      VersionNotifyRequested: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      VersionNotifyStarted: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      VersionNotifyUnrequested: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    prices: {
      LockPrice: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, lockedPrice: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, lockedPrice: u128 }>;
      UnlockPrice: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId], { currencyId: AcalaPrimitivesCurrencyCurrencyId }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32 }>;
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32 }>;
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: RuntimeCommonProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: RuntimeCommonProxyType, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      RetryCancelled: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      RetryFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      RetrySet: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, period: u32, retries: u8], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, period: u32, retries: u8 }>;
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sessionManager: {
      ScheduledSessionDuration: AugmentedEvent<ApiType, [blockNumber: u32, sessionIndex: u32, sessionDuration: u32], { blockNumber: u32, sessionIndex: u32, sessionDuration: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    stableAsset: {
      AModified: AugmentedEvent<ApiType, [poolId: u32, value: u128, time: u32], { poolId: u32, value: u128, time: u32 }>;
      BalanceUpdated: AugmentedEvent<ApiType, [poolId: u32, oldBalances: Vec<u128>, newBalances: Vec<u128>], { poolId: u32, oldBalances: Vec<u128>, newBalances: Vec<u128> }>;
      CreatePool: AugmentedEvent<ApiType, [poolId: u32, a: u128, swapId: AccountId32, palletId: AccountId32], { poolId: u32, a: u128, swapId: AccountId32, palletId: AccountId32 }>;
      FeeCollected: AugmentedEvent<ApiType, [poolId: u32, a: u128, oldBalances: Vec<u128>, newBalances: Vec<u128>, oldTotalSupply: u128, newTotalSupply: u128, who: AccountId32, amount: u128], { poolId: u32, a: u128, oldBalances: Vec<u128>, newBalances: Vec<u128>, oldTotalSupply: u128, newTotalSupply: u128, who: AccountId32, amount: u128 }>;
      FeeModified: AugmentedEvent<ApiType, [poolId: u32, mintFee: u128, swapFee: u128, redeemFee: u128], { poolId: u32, mintFee: u128, swapFee: u128, redeemFee: u128 }>;
      Minted: AugmentedEvent<ApiType, [minter: AccountId32, poolId: u32, a: u128, inputAmounts: Vec<u128>, minOutputAmount: u128, balances: Vec<u128>, totalSupply: u128, feeAmount: u128, outputAmount: u128], { minter: AccountId32, poolId: u32, a: u128, inputAmounts: Vec<u128>, minOutputAmount: u128, balances: Vec<u128>, totalSupply: u128, feeAmount: u128, outputAmount: u128 }>;
      RecipientModified: AugmentedEvent<ApiType, [poolId: u32, feeRecipient: AccountId32, yieldRecipient: AccountId32], { poolId: u32, feeRecipient: AccountId32, yieldRecipient: AccountId32 }>;
      RedeemedMulti: AugmentedEvent<ApiType, [redeemer: AccountId32, poolId: u32, a: u128, outputAmounts: Vec<u128>, maxInputAmount: u128, balances: Vec<u128>, totalSupply: u128, feeAmount: u128, inputAmount: u128], { redeemer: AccountId32, poolId: u32, a: u128, outputAmounts: Vec<u128>, maxInputAmount: u128, balances: Vec<u128>, totalSupply: u128, feeAmount: u128, inputAmount: u128 }>;
      RedeemedProportion: AugmentedEvent<ApiType, [redeemer: AccountId32, poolId: u32, a: u128, inputAmount: u128, minOutputAmounts: Vec<u128>, balances: Vec<u128>, totalSupply: u128, feeAmount: u128, outputAmounts: Vec<u128>], { redeemer: AccountId32, poolId: u32, a: u128, inputAmount: u128, minOutputAmounts: Vec<u128>, balances: Vec<u128>, totalSupply: u128, feeAmount: u128, outputAmounts: Vec<u128> }>;
      RedeemedSingle: AugmentedEvent<ApiType, [redeemer: AccountId32, poolId: u32, a: u128, inputAmount: u128, outputAsset: AcalaPrimitivesCurrencyCurrencyId, minOutputAmount: u128, balances: Vec<u128>, totalSupply: u128, feeAmount: u128, outputAmount: u128], { redeemer: AccountId32, poolId: u32, a: u128, inputAmount: u128, outputAsset: AcalaPrimitivesCurrencyCurrencyId, minOutputAmount: u128, balances: Vec<u128>, totalSupply: u128, feeAmount: u128, outputAmount: u128 }>;
      TokenSwapped: AugmentedEvent<ApiType, [swapper: AccountId32, poolId: u32, a: u128, inputAsset: AcalaPrimitivesCurrencyCurrencyId, outputAsset: AcalaPrimitivesCurrencyCurrencyId, inputAmount: u128, minOutputAmount: u128, balances: Vec<u128>, totalSupply: u128, outputAmount: u128], { swapper: AccountId32, poolId: u32, a: u128, inputAsset: AcalaPrimitivesCurrencyCurrencyId, outputAsset: AcalaPrimitivesCurrencyCurrencyId, inputAmount: u128, minOutputAmount: u128, balances: Vec<u128>, totalSupply: u128, outputAmount: u128 }>;
      YieldCollected: AugmentedEvent<ApiType, [poolId: u32, a: u128, oldTotalSupply: u128, newTotalSupply: u128, who: AccountId32, amount: u128], { poolId: u32, a: u128, oldTotalSupply: u128, newTotalSupply: u128, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      KeyChanged: AugmentedEvent<ApiType, [old: Option<AccountId32>, new_: AccountId32], { old: Option<AccountId32>, new_: AccountId32 }>;
      KeyRemoved: AugmentedEvent<ApiType, []>;
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      CodeUpdated: AugmentedEvent<ApiType, []>;
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256, checkVersion: bool], { codeHash: H256, checkVersion: bool }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommitteeMembership: {
      Dummy: AugmentedEvent<ApiType, []>;
      KeyChanged: AugmentedEvent<ApiType, []>;
      MemberAdded: AugmentedEvent<ApiType, []>;
      MemberRemoved: AugmentedEvent<ApiType, []>;
      MembersReset: AugmentedEvent<ApiType, []>;
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tips: {
      NewTip: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      TipClosed: AugmentedEvent<ApiType, [tipHash: H256, who: AccountId32, payout: u128], { tipHash: H256, who: AccountId32, payout: u128 }>;
      TipClosing: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      TipRetracted: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      TipSlashed: AugmentedEvent<ApiType, [tipHash: H256, finder: AccountId32, deposit: u128], { tipHash: H256, finder: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      BalanceSet: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, free: u128, reserved: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, free: u128, reserved: u128 }>;
      Deposited: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      DustLost: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      Endowed: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      Issued: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      Locked: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      LockRemoved: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32], { lockId: U8aFixed, currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32 }>;
      LockSet: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { lockId: U8aFixed, currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      Rescinded: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      Reserved: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      ReserveRepatriated: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus], { currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus }>;
      Slashed: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128 }>;
      TotalIssuanceSet: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      Transfer: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128 }>;
      Unlocked: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      Unreserved: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      Withdrawn: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPause: {
      EvmPrecompilePaused: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      EvmPrecompileUnpaused: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      TransactionPaused: AugmentedEvent<ApiType, [palletNameBytes: Bytes, functionNameBytes: Bytes], { palletNameBytes: Bytes, functionNameBytes: Bytes }>;
      TransactionUnpaused: AugmentedEvent<ApiType, [palletNameBytes: Bytes, functionNameBytes: Bytes], { palletNameBytes: Bytes, functionNameBytes: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      ChargeFeePoolDisabled: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, foreignAmount: u128, nativeAmount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, foreignAmount: u128, nativeAmount: u128 }>;
      ChargeFeePoolEnabled: AugmentedEvent<ApiType, [subAccount: AccountId32, currencyId: AcalaPrimitivesCurrencyCurrencyId, exchangeRate: u128, poolSize: u128, swapThreshold: u128], { subAccount: AccountId32, currencyId: AcalaPrimitivesCurrencyCurrencyId, exchangeRate: u128, poolSize: u128, swapThreshold: u128 }>;
      ChargeFeePoolSwapped: AugmentedEvent<ApiType, [subAccount: AccountId32, supplyCurrencyId: AcalaPrimitivesCurrencyCurrencyId, oldExchangeRate: u128, swapExchangeRate: u128, newExchangeRate: u128, newPoolSize: u128], { subAccount: AccountId32, supplyCurrencyId: AcalaPrimitivesCurrencyCurrencyId, oldExchangeRate: u128, swapExchangeRate: u128, newExchangeRate: u128, newPoolSize: u128 }>;
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, actualTip: u128, actualSurplus: u128], { who: AccountId32, actualFee: u128, actualTip: u128, actualSurplus: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      AssetSpendApproved: AugmentedEvent<ApiType, [index: u32, assetKind: Null, amount: u128, beneficiary: AccountId32, validFrom: u32, expireAt: u32], { index: u32, assetKind: Null, amount: u128, beneficiary: AccountId32, validFrom: u32, expireAt: u32 }>;
      AssetSpendVoided: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      Paid: AugmentedEvent<ApiType, [index: u32, paymentId: Null], { index: u32, paymentId: Null }>;
      PaymentFailed: AugmentedEvent<ApiType, [index: u32, paymentId: Null], { index: u32, paymentId: Null }>;
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      SpendProcessed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    unknownTokens: {
      Deposited: AugmentedEvent<ApiType, [asset: StagingXcmV4Asset, who: StagingXcmV4Location], { asset: StagingXcmV4Asset, who: StagingXcmV4Location }>;
      Withdrawn: AugmentedEvent<ApiType, [asset: StagingXcmV4Asset, who: StagingXcmV4Location], { asset: StagingXcmV4Asset, who: StagingXcmV4Location }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      BatchCompleted: AugmentedEvent<ApiType, []>;
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      ItemCompleted: AugmentedEvent<ApiType, []>;
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      Claimed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      VestingScheduleAdded: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, vestingSchedule: OrmlVestingVestingSchedule], { from: AccountId32, to: AccountId32, vestingSchedule: OrmlVestingVestingSchedule }>;
      VestingSchedulesUpdated: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmInterface: {
      XcmDestWeightUpdated: AugmentedEvent<ApiType, [xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation, newXcmDestWeight: SpWeightsWeightV2Weight], { xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation, newXcmDestWeight: SpWeightsWeightV2Weight }>;
      XcmFeeUpdated: AugmentedEvent<ApiType, [xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation, newXcmDestWeight: u128], { xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation, newXcmDestWeight: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmpQueue: {
      XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: U8aFixed], { messageHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xTokens: {
      TransferredAssets: AugmentedEvent<ApiType, [sender: AccountId32, assets: StagingXcmV4AssetAssets, fee: StagingXcmV4Asset, dest: StagingXcmV4Location], { sender: AccountId32, assets: StagingXcmV4AssetAssets, fee: StagingXcmV4Asset, dest: StagingXcmV4Location }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
