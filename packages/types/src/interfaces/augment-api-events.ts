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
      /**
       * New feed data is submitted.
       **/
      NewFeedData: AugmentedEvent<ApiType, [sender: AccountId32, values: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>>], { sender: AccountId32, values: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetRegistry: {
      /**
       * The asset registered.
       **/
      AssetRegistered: AugmentedEvent<ApiType, [assetId: AcalaPrimitivesCurrencyAssetIds, metadata: AcalaPrimitivesCurrencyAssetMetadata], { assetId: AcalaPrimitivesCurrencyAssetIds, metadata: AcalaPrimitivesCurrencyAssetMetadata }>;
      /**
       * The asset updated.
       **/
      AssetUpdated: AugmentedEvent<ApiType, [assetId: AcalaPrimitivesCurrencyAssetIds, metadata: AcalaPrimitivesCurrencyAssetMetadata], { assetId: AcalaPrimitivesCurrencyAssetIds, metadata: AcalaPrimitivesCurrencyAssetMetadata }>;
      /**
       * The foreign asset registered.
       **/
      ForeignAssetRegistered: AugmentedEvent<ApiType, [assetId: u16, assetAddress: StagingXcmV4Location, metadata: AcalaPrimitivesCurrencyAssetMetadata], { assetId: u16, assetAddress: StagingXcmV4Location, metadata: AcalaPrimitivesCurrencyAssetMetadata }>;
      /**
       * The foreign asset updated.
       **/
      ForeignAssetUpdated: AugmentedEvent<ApiType, [assetId: u16, assetAddress: StagingXcmV4Location, metadata: AcalaPrimitivesCurrencyAssetMetadata], { assetId: u16, assetAddress: StagingXcmV4Location, metadata: AcalaPrimitivesCurrencyAssetMetadata }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    auction: {
      /**
       * A bid is placed
       **/
      Bid: AugmentedEvent<ApiType, [auctionId: u32, bidder: AccountId32, amount: u128], { auctionId: u32, bidder: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    auctionManager: {
      /**
       * Active auction cancelled.
       **/
      CancelAuction: AugmentedEvent<ApiType, [auctionId: u32], { auctionId: u32 }>;
      /**
       * Collateral auction aborted.
       **/
      CollateralAuctionAborted: AugmentedEvent<ApiType, [auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, targetStableAmount: u128, refundRecipient: AccountId32], { auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, targetStableAmount: u128, refundRecipient: AccountId32 }>;
      /**
       * Collateral auction dealt.
       **/
      CollateralAuctionDealt: AugmentedEvent<ApiType, [auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, winner: AccountId32, paymentAmount: u128], { auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, winner: AccountId32, paymentAmount: u128 }>;
      /**
       * Dex take collateral auction.
       **/
      DEXTakeCollateralAuction: AugmentedEvent<ApiType, [auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, supplyCollateralAmount: u128, targetStableAmount: u128], { auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, supplyCollateralAmount: u128, targetStableAmount: u128 }>;
      /**
       * Collateral auction created.
       **/
      NewCollateralAuction: AugmentedEvent<ApiType, [auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, targetBidPrice: u128], { auctionId: u32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAmount: u128, targetBidPrice: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    authority: {
      /**
       * A call is authorized.
       **/
      AuthorizedCall: AugmentedEvent<ApiType, [hash_: H256, caller: Option<AccountId32>], { hash_: H256, caller: Option<AccountId32> }>;
      /**
       * A scheduled call is cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [origin: AcalaRuntimeOriginCaller, index: u32], { origin: AcalaRuntimeOriginCaller, index: u32 }>;
      /**
       * A scheduled call is delayed.
       **/
      Delayed: AugmentedEvent<ApiType, [origin: AcalaRuntimeOriginCaller, index: u32, when: u32], { origin: AcalaRuntimeOriginCaller, index: u32, when: u32 }>;
      /**
       * A call is dispatched.
       **/
      Dispatched: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A scheduled call is fast tracked.
       **/
      FastTracked: AugmentedEvent<ApiType, [origin: AcalaRuntimeOriginCaller, index: u32, when: u32], { origin: AcalaRuntimeOriginCaller, index: u32, when: u32 }>;
      /**
       * An authorized call was removed.
       **/
      RemovedAuthorizedCall: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A call is scheduled.
       **/
      Scheduled: AugmentedEvent<ApiType, [origin: AcalaRuntimeOriginCaller, index: u32], { origin: AcalaRuntimeOriginCaller, index: u32 }>;
      /**
       * An authorized call was triggered.
       **/
      TriggeredCallBy: AugmentedEvent<ApiType, [hash_: H256, caller: AccountId32], { hash_: H256, caller: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32, free: u128 }>;
      /**
       * Some amount was burned from an account.
       **/
      Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was increased by `amount`, creating a credit to be balanced.
       **/
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was minted into an account.
       **/
      Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was decreased by `amount`, creating a debt to be balanced.
       **/
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was restored into an account.
       **/
      Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was suspended from an account (it can be restored later).
       **/
      Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * The `TotalIssuance` was forcefully changed.
       **/
      TotalIssuanceForced: AugmentedEvent<ApiType, [old: u128, new_: u128], { old: u128, new_: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unlocked.
       **/
      Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was upgraded.
       **/
      Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is approved.
       **/
      BountyApproved: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is awarded to a beneficiary.
       **/
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      /**
       * A bounty proposal is funded and became active.
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is cancelled.
       **/
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is claimed by beneficiary.
       **/
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * A bounty expiry is extended.
       **/
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * New bounty proposal.
       **/
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty proposal was rejected; funds were slashed.
       **/
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
      /**
       * A bounty curator is accepted.
       **/
      CuratorAccepted: AugmentedEvent<ApiType, [bountyId: u32, curator: AccountId32], { bountyId: u32, curator: AccountId32 }>;
      /**
       * A bounty curator is proposed.
       **/
      CuratorProposed: AugmentedEvent<ApiType, [bountyId: u32, curator: AccountId32], { bountyId: u32, curator: AccountId32 }>;
      /**
       * A bounty curator is unassigned.
       **/
      CuratorUnassigned: AugmentedEvent<ApiType, [bountyId: u32], { bountyId: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cdpEngine: {
      /**
       * Directly close CDP has debit by handle debit with DEX.
       **/
      CloseCDPInDebitByDEX: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32, soldCollateralAmount: u128, refundCollateralAmount: u128, debitValue: u128], { collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32, soldCollateralAmount: u128, refundCollateralAmount: u128, debitValue: u128 }>;
      /**
       * The interest rate per sec for specific collateral type updated.
       **/
      InterestRatePerSecUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newInterestRatePerSec: Option<u128>], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newInterestRatePerSec: Option<u128> }>;
      /**
       * Liquidate the unsafe CDP.
       **/
      LiquidateUnsafeCDP: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32, collateralAmount: u128, badDebtValue: u128, targetAmount: u128], { collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32, collateralAmount: u128, badDebtValue: u128, targetAmount: u128 }>;
      /**
       * A new liquidation contract is deregistered.
       **/
      LiquidationContractDeregistered: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A new liquidation contract is registered.
       **/
      LiquidationContractRegistered: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * The liquidation penalty rate for specific collateral type updated.
       **/
      LiquidationPenaltyUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newLiquidationPenalty: Option<u128>], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newLiquidationPenalty: Option<u128> }>;
      /**
       * The liquidation fee for specific collateral type updated.
       **/
      LiquidationRatioUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newLiquidationRatio: Option<u128>], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newLiquidationRatio: Option<u128> }>;
      /**
       * The hard cap of total debit value for specific collateral type updated.
       **/
      MaximumTotalDebitValueUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newTotalDebitValue: u128], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newTotalDebitValue: u128 }>;
      /**
       * The required collateral penalty rate for specific collateral type updated.
       **/
      RequiredCollateralRatioUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newRequiredCollateralRatio: Option<u128>], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newRequiredCollateralRatio: Option<u128> }>;
      /**
       * Settle the CDP has debit.
       **/
      SettleCDPInDebit: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32], { collateralType: AcalaPrimitivesCurrencyCurrencyId, owner: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cdpTreasury: {
      /**
       * The buffer amount of debit pool that will not be offset by suplus pool updated.
       **/
      DebitOffsetBufferUpdated: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * The expected amount size for per lot collateral auction of specific collateral type
       * updated.
       **/
      ExpectedCollateralAuctionSizeUpdated: AugmentedEvent<ApiType, [collateralType: AcalaPrimitivesCurrencyCurrencyId, newSize: u128], { collateralType: AcalaPrimitivesCurrencyCurrencyId, newSize: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    collatorSelection: {
      /**
       * A candidate was added.
       **/
      CandidateAdded: AugmentedEvent<ApiType, [who: AccountId32, bond: u128], { who: AccountId32, bond: u128 }>;
      /**
       * A candidate was removed.
       **/
      CandidateRemoved: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Candidacy bond was updated.
       **/
      NewCandidacyBond: AugmentedEvent<ApiType, [newCandidacyBond: u128], { newCandidacyBond: u128 }>;
      /**
       * Desired candidates was updated.
       **/
      NewDesiredCandidates: AugmentedEvent<ApiType, [newDesiredCandidates: u32], { newDesiredCandidates: u32 }>;
      /**
       * Invulnurable was updated.
       **/
      NewInvulnerables: AugmentedEvent<ApiType, [newInvulnerables: Vec<AccountId32>], { newInvulnerables: Vec<AccountId32> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, StagingXcmV4TraitsOutcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    currencies: {
      /**
       * Deposited some balance into an account
       **/
      Deposited: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Dust swept.
       **/
      DustSwept: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Currency transfer success.
       **/
      Transferred: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Withdrawn some balances from an account
       **/
      Withdrawn: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /**
       * A proposal_hash has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * An account has delegated their vote to another account.
       **/
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * Metadata for a proposal or a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata for a proposal or a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata has been transferred to new owner.
       **/
      MetadataTransferred: AugmentedEvent<ApiType, [prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256], { prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal has been approved by referendum.
       **/
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal got canceled.
       **/
      ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>;
      /**
       * A motion has been proposed by a public account.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has secconded a proposal
       **/
      Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32, propIndex: u32 }>;
      /**
       * A referendum has begun.
       **/
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      /**
       * A public proposal has been tabled for referendum vote.
       **/
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An external proposal has been vetoed.
       **/
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u32], { who: AccountId32, proposalHash: H256, until: u32 }>;
      /**
       * An account has voted in a referendum
       **/
      Voted: AugmentedEvent<ApiType, [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote], { voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dex: {
      /**
       * Add liquidity success.
       **/
      AddLiquidity: AugmentedEvent<ApiType, [who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, pool0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, pool1: u128, shareIncrement: u128], { who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, pool0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, pool1: u128, shareIncrement: u128 }>;
      /**
       * add provision success
       **/
      AddProvision: AugmentedEvent<ApiType, [who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, contribution0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, contribution1: u128], { who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, contribution0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, contribution1: u128 }>;
      /**
       * Disable trading pair.
       **/
      DisableTradingPair: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair], { tradingPair: AcalaPrimitivesTradingPair }>;
      /**
       * Enable trading pair.
       **/
      EnableTradingPair: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair], { tradingPair: AcalaPrimitivesTradingPair }>;
      /**
       * List provisioning trading pair.
       **/
      ListProvisioning: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair], { tradingPair: AcalaPrimitivesTradingPair }>;
      /**
       * Provisioning trading pair aborted.
       **/
      ProvisioningAborted: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair, accumulatedProvision0: u128, accumulatedProvision1: u128], { tradingPair: AcalaPrimitivesTradingPair, accumulatedProvision0: u128, accumulatedProvision1: u128 }>;
      /**
       * Provisioning trading pair convert to Enabled.
       **/
      ProvisioningToEnabled: AugmentedEvent<ApiType, [tradingPair: AcalaPrimitivesTradingPair, pool0: u128, pool1: u128, shareAmount: u128], { tradingPair: AcalaPrimitivesTradingPair, pool0: u128, pool1: u128, shareAmount: u128 }>;
      /**
       * refund provision success
       **/
      RefundProvision: AugmentedEvent<ApiType, [who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, contribution0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, contribution1: u128], { who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, contribution0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, contribution1: u128 }>;
      /**
       * Remove liquidity from the trading pool success.
       **/
      RemoveLiquidity: AugmentedEvent<ApiType, [who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, pool0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, pool1: u128, shareDecrement: u128], { who: AccountId32, currency0: AcalaPrimitivesCurrencyCurrencyId, pool0: u128, currency1: AcalaPrimitivesCurrencyCurrencyId, pool1: u128, shareDecrement: u128 }>;
      /**
       * Use supply currency to swap target currency.
       **/
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
      /**
       * The final redemption opened.
       **/
      OpenRefund: AugmentedEvent<ApiType, [blockNumber: u32], { blockNumber: u32 }>;
      /**
       * Refund info.
       **/
      Refund: AugmentedEvent<ApiType, [who: AccountId32, stableCoinAmount: u128, refundList: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>>], { who: AccountId32, stableCoinAmount: u128, refundList: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>> }>;
      /**
       * Emergency shutdown occurs.
       **/
      Shutdown: AugmentedEvent<ApiType, [blockNumber: u32], { blockNumber: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    evm: {
      /**
       * Disabled contract development.
       **/
      ContractDevelopmentDisabled: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Enabled contract development.
       **/
      ContractDevelopmentEnabled: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Published contract.
       **/
      ContractPublished: AugmentedEvent<ApiType, [contract: H160], { contract: H160 }>;
      /**
       * Selfdestructed contract code.
       **/
      ContractSelfdestructed: AugmentedEvent<ApiType, [contract: H160], { contract: H160 }>;
      /**
       * Set contract code.
       **/
      ContractSetCode: AugmentedEvent<ApiType, [contract: H160], { contract: H160 }>;
      /**
       * A contract has been created at given
       **/
      Created: AugmentedEvent<ApiType, [from: H160, contract: H160, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32], { from: H160, contract: H160, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32 }>;
      /**
       * A contract was attempted to be created, but the execution failed.
       **/
      CreatedFailed: AugmentedEvent<ApiType, [from: H160, contract: H160, exitReason: EvmCoreErrorExitReason, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32], { from: H160, contract: H160, exitReason: EvmCoreErrorExitReason, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32 }>;
      /**
       * A contract has been executed successfully with states applied.
       **/
      Executed: AugmentedEvent<ApiType, [from: H160, contract: H160, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32], { from: H160, contract: H160, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32 }>;
      /**
       * A contract has been executed with errors. States are reverted with
       * only gas fees applied.
       **/
      ExecutedFailed: AugmentedEvent<ApiType, [from: H160, contract: H160, exitReason: EvmCoreErrorExitReason, output: Bytes, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32], { from: H160, contract: H160, exitReason: EvmCoreErrorExitReason, output: Bytes, logs: Vec<EthereumLog>, usedGas: u64, usedStorage: i32 }>;
      /**
       * Transferred maintainer.
       **/
      TransferredMaintainer: AugmentedEvent<ApiType, [contract: H160, newMaintainer: H160], { contract: H160, newMaintainer: H160 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    evmAccounts: {
      /**
       * Mapping between Substrate accounts and EVM accounts
       * claim account.
       **/
      ClaimAccount: AugmentedEvent<ApiType, [accountId: AccountId32, evmAddress: H160], { accountId: AccountId32, evmAddress: H160 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    financialCouncil: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    financialCouncilMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    generalCouncil: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    generalCouncilMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    homa: {
      /**
       * The frequency to bump era has been updated.
       **/
      BumpEraFrequencyUpdated: AugmentedEvent<ApiType, [frequency: u32], { frequency: u32 }>;
      /**
       * The commission rate has been updated.
       **/
      CommissionRateUpdated: AugmentedEvent<ApiType, [commissionRate: u128], { commissionRate: u128 }>;
      /**
       * The current era has been bumped.
       **/
      CurrentEraBumped: AugmentedEvent<ApiType, [newEraIndex: u32], { newEraIndex: u32 }>;
      /**
       * The current era has been reset.
       **/
      CurrentEraReset: AugmentedEvent<ApiType, [newEraIndex: u32], { newEraIndex: u32 }>;
      /**
       * The estimated reward rate per era of relaychain staking has been updated.
       **/
      EstimatedRewardRatePerEraUpdated: AugmentedEvent<ApiType, [rewardRate: u128], { rewardRate: u128 }>;
      /**
       * The fast match fee rate has been updated.
       **/
      FastMatchFeeRateUpdated: AugmentedEvent<ApiType, [fastMatchFeeRate: u128], { fastMatchFeeRate: u128 }>;
      /**
       * Transfer staking currency to sub account and bond on RelayChain
       **/
      HomaBondExtra: AugmentedEvent<ApiType, [subAccountIndex: u16, amount: u128], { subAccountIndex: u16, amount: u128 }>;
      /**
       * Nominate validators on RelayChain
       **/
      HomaNominate: AugmentedEvent<ApiType, [subAccountIndex: u16, nominations: Vec<AccountId32>], { subAccountIndex: u16, nominations: Vec<AccountId32> }>;
      /**
       * Unbond staking currency of sub account on RelayChain
       **/
      HomaUnbond: AugmentedEvent<ApiType, [subAccountIndex: u16, amount: u128], { subAccountIndex: u16, amount: u128 }>;
      /**
       * Withdraw unbonded from RelayChain
       **/
      HomaWithdrawUnbonded: AugmentedEvent<ApiType, [subAccountIndex: u16, amount: u128], { subAccountIndex: u16, amount: u128 }>;
      /**
       * The relaychain block number of last era bumped updated.
       **/
      LastEraBumpedBlockUpdated: AugmentedEvent<ApiType, [lastEraBumpedBlock: u32], { lastEraBumpedBlock: u32 }>;
      /**
       * The bonded amount of subaccount's ledger has been reset.
       **/
      LedgerBondedReset: AugmentedEvent<ApiType, [subAccountIndex: u16, newBondedAmount: u128], { subAccountIndex: u16, newBondedAmount: u128 }>;
      /**
       * The unlocking of subaccount's ledger has been reset.
       **/
      LedgerUnlockingReset: AugmentedEvent<ApiType, [subAccountIndex: u16, newUnlocking: Vec<ModuleHomaModuleUnlockChunk>], { subAccountIndex: u16, newUnlocking: Vec<ModuleHomaModuleUnlockChunk> }>;
      /**
       * The minter use staking currency to mint liquid currency.
       **/
      Minted: AugmentedEvent<ApiType, [minter: AccountId32, stakingCurrencyAmount: u128, liquidAmountReceived: u128, liquidAmountAddedToVoid: u128], { minter: AccountId32, stakingCurrencyAmount: u128, liquidAmountReceived: u128, liquidAmountAddedToVoid: u128 }>;
      /**
       * The interval eras to nominate.
       **/
      NominateIntervalEraUpdated: AugmentedEvent<ApiType, [eras: u32], { eras: u32 }>;
      /**
       * Redeem request is redeemed partially or fully by fast match.
       **/
      RedeemedByFastMatch: AugmentedEvent<ApiType, [redeemer: AccountId32, matchedLiquidAmount: u128, feeInLiquid: u128, redeemedStakingAmount: u128], { redeemer: AccountId32, matchedLiquidAmount: u128, feeInLiquid: u128, redeemedStakingAmount: u128 }>;
      /**
       * Redeem request is redeemed by unbond on relaychain.
       **/
      RedeemedByUnbond: AugmentedEvent<ApiType, [redeemer: AccountId32, eraIndexWhenUnbond: u32, liquidAmount: u128, unbondingStakingAmount: u128], { redeemer: AccountId32, eraIndexWhenUnbond: u32, liquidAmount: u128, unbondingStakingAmount: u128 }>;
      /**
       * Redeem request has been cancelled.
       **/
      RedeemRequestCancelled: AugmentedEvent<ApiType, [redeemer: AccountId32, cancelledLiquidAmount: u128], { redeemer: AccountId32, cancelledLiquidAmount: u128 }>;
      /**
       * Request redeem.
       **/
      RequestedRedeem: AugmentedEvent<ApiType, [redeemer: AccountId32, liquidAmount: u128, allowFastMatch: bool], { redeemer: AccountId32, liquidAmount: u128, allowFastMatch: bool }>;
      /**
       * The soft bonded cap of per sub account has been updated.
       **/
      SoftBondedCapPerSubAccountUpdated: AugmentedEvent<ApiType, [capAmount: u128], { capAmount: u128 }>;
      /**
       * The redeemer withdraw expired redemption.
       **/
      WithdrawRedemption: AugmentedEvent<ApiType, [redeemer: AccountId32, redemptionAmount: u128], { redeemer: AccountId32, redemptionAmount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    homaCouncil: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    homaCouncilMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
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
      /**
       * Authorize someone to operate the loan of specific collateral.
       **/
      Authorization: AugmentedEvent<ApiType, [authorizer: AccountId32, authorizee: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId], { authorizer: AccountId32, authorizee: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId }>;
      /**
       * Transfers debit between two CDPs
       **/
      TransferDebit: AugmentedEvent<ApiType, [fromCurrency: AcalaPrimitivesCurrencyCurrencyId, toCurrency: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { fromCurrency: AcalaPrimitivesCurrencyCurrencyId, toCurrency: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      /**
       * Cancel the authorization of specific collateral for someone.
       **/
      UnAuthorization: AugmentedEvent<ApiType, [authorizer: AccountId32, authorizee: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId], { authorizer: AccountId32, authorizee: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId }>;
      /**
       * Cancel all authorization.
       **/
      UnAuthorizationAll: AugmentedEvent<ApiType, [authorizer: AccountId32], { authorizer: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    idleScheduler: {
      /**
       * A task is added.
       **/
      TaskAdded: AugmentedEvent<ApiType, [taskId: u32, task: AcalaRuntimeScheduledTasks], { taskId: u32, task: AcalaRuntimeScheduledTasks }>;
      /**
       * A task has been dispatched on_idle.
       **/
      TaskDispatched: AugmentedEvent<ApiType, [taskId: u32, result: Result<Null, SpRuntimeDispatchError>], { taskId: u32, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    incentives: {
      /**
       * Payout deduction currency updated.
       **/
      ClaimRewardDeductionCurrencyUpdated: AugmentedEvent<ApiType, [pool: ModuleSupportIncentivesPoolId, currency: Option<AcalaPrimitivesCurrencyCurrencyId>], { pool: ModuleSupportIncentivesPoolId, currency: Option<AcalaPrimitivesCurrencyCurrencyId> }>;
      /**
       * Payout deduction rate updated.
       **/
      ClaimRewardDeductionRateUpdated: AugmentedEvent<ApiType, [pool: ModuleSupportIncentivesPoolId, deductionRate: u128], { pool: ModuleSupportIncentivesPoolId, deductionRate: u128 }>;
      /**
       * Claim rewards.
       **/
      ClaimRewards: AugmentedEvent<ApiType, [who: AccountId32, pool: ModuleSupportIncentivesPoolId, rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId, actualAmount: u128, deductionAmount: u128], { who: AccountId32, pool: ModuleSupportIncentivesPoolId, rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId, actualAmount: u128, deductionAmount: u128 }>;
      /**
       * Deposit DEX share.
       **/
      DepositDexShare: AugmentedEvent<ApiType, [who: AccountId32, dexShareType: AcalaPrimitivesCurrencyCurrencyId, deposit: u128], { who: AccountId32, dexShareType: AcalaPrimitivesCurrencyCurrencyId, deposit: u128 }>;
      /**
       * Incentive reward amount updated.
       **/
      IncentiveRewardAmountUpdated: AugmentedEvent<ApiType, [pool: ModuleSupportIncentivesPoolId, rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId, rewardAmountPerPeriod: u128], { pool: ModuleSupportIncentivesPoolId, rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId, rewardAmountPerPeriod: u128 }>;
      /**
       * Withdraw DEX share.
       **/
      WithdrawDexShare: AugmentedEvent<ApiType, [who: AccountId32, dexShareType: AcalaPrimitivesCurrencyCurrencyId, withdraw: u128], { who: AccountId32, dexShareType: AcalaPrimitivesCurrencyCurrencyId, withdraw: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    liquidCrowdloan: {
      /**
       * The redeem currency id was updated.
       **/
      RedeemCurrencyIdUpdated: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId], { currencyId: AcalaPrimitivesCurrencyCurrencyId }>;
      /**
       * Liquid Crowdloan asset was redeemed.
       **/
      Redeemed: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      /**
       * The transfer from relay chain crowdloan vault was requested.
       **/
      TransferFromCrowdloanVaultRequested: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    loans: {
      /**
       * Confiscate CDP's collateral assets and eliminate its debit.
       **/
      ConfiscateCollateralAndDebit: AugmentedEvent<ApiType, [owner: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId, confiscatedCollateralAmount: u128, deductDebitAmount: u128], { owner: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId, confiscatedCollateralAmount: u128, deductDebitAmount: u128 }>;
      /**
       * Position updated.
       **/
      PositionUpdated: AugmentedEvent<ApiType, [owner: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAdjustment: i128, debitAdjustment: i128], { owner: AccountId32, collateralType: AcalaPrimitivesCurrencyCurrencyId, collateralAdjustment: i128, debitAdjustment: i128 }>;
      /**
       * Transfer loan.
       **/
      TransferLoan: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, currencyId: AcalaPrimitivesCurrencyCurrencyId], { from: AccountId32, to: AccountId32, currencyId: AcalaPrimitivesCurrencyCurrencyId }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    messageQueue: {
      /**
       * Message placed in overweight queue.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [id: U8aFixed, origin: CumulusPrimitivesCoreAggregateMessageOrigin, pageIndex: u32, messageIndex: u32], { id: U8aFixed, origin: CumulusPrimitivesCoreAggregateMessageOrigin, pageIndex: u32, messageIndex: u32 }>;
      /**
       * This page was reaped.
       **/
      PageReaped: AugmentedEvent<ApiType, [origin: CumulusPrimitivesCoreAggregateMessageOrigin, index: u32], { origin: CumulusPrimitivesCoreAggregateMessageOrigin, index: u32 }>;
      /**
       * Message is processed.
       **/
      Processed: AugmentedEvent<ApiType, [id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, weightUsed: SpWeightsWeightV2Weight, success: bool], { id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, weightUsed: SpWeightsWeightV2Weight, success: bool }>;
      /**
       * Message discarded due to an error in the `MessageProcessor` (usually a format error).
       **/
      ProcessingFailed: AugmentedEvent<ApiType, [id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, error: FrameSupportMessagesProcessMessageError], { id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, error: FrameSupportMessagesProcessMessageError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nft: {
      /**
       * Burned NFT token.
       **/
      BurnedToken: AugmentedEvent<ApiType, [owner: AccountId32, classId: u32, tokenId: u64], { owner: AccountId32, classId: u32, tokenId: u64 }>;
      /**
       * Burned NFT token with remark.
       **/
      BurnedTokenWithRemark: AugmentedEvent<ApiType, [owner: AccountId32, classId: u32, tokenId: u64, remarkHash: H256], { owner: AccountId32, classId: u32, tokenId: u64, remarkHash: H256 }>;
      /**
       * Created NFT class.
       **/
      CreatedClass: AugmentedEvent<ApiType, [owner: AccountId32, classId: u32], { owner: AccountId32, classId: u32 }>;
      /**
       * Destroyed NFT class.
       **/
      DestroyedClass: AugmentedEvent<ApiType, [owner: AccountId32, classId: u32], { owner: AccountId32, classId: u32 }>;
      /**
       * Minted NFT token.
       **/
      MintedToken: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, classId: u32, quantity: u32], { from: AccountId32, to: AccountId32, classId: u32, quantity: u32 }>;
      /**
       * Transferred NFT token.
       **/
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
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ormlXcm: {
      /**
       * XCM message sent. \[to, message\]
       **/
      Sent: AugmentedEvent<ApiType, [to: StagingXcmV4Location, message: StagingXcmV4Xcm], { to: StagingXcmV4Location, message: StagingXcmV4Xcm }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256], { weightUsed: SpWeightsWeightV2Weight, dmqHead: H256 }>;
      /**
       * Some downward messages have been received and will be processed.
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
      /**
       * The relay-chain aborted the upgrade process.
       **/
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /**
       * The validation function has been scheduled to apply.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parameters: {
      /**
       * Parameter is updated
       **/
      Updated: AugmentedEvent<ApiType, [keyValue: AcalaRuntimeRuntimeParameters], { keyValue: AcalaRuntimeRuntimeParameters }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      /**
       * Some assets have been claimed from an asset trap
       **/
      AssetsClaimed: AugmentedEvent<ApiType, [hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets], { hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets }>;
      /**
       * Some assets have been placed in an asset trap.
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets], { hash_: H256, origin: StagingXcmV4Location, assets: XcmVersionedAssets }>;
      /**
       * Execution of an XCM message was attempted.
       **/
      Attempted: AugmentedEvent<ApiType, [outcome: StagingXcmV4TraitsOutcome], { outcome: StagingXcmV4TraitsOutcome }>;
      /**
       * Fees were paid from a location for an operation (often for using `SendXcm`).
       **/
      FeesPaid: AugmentedEvent<ApiType, [paying: StagingXcmV4Location, fees: StagingXcmV4AssetAssets], { paying: StagingXcmV4Location, fees: StagingXcmV4AssetAssets }>;
      /**
       * Expected query response has been received but the querier location of the response does
       * not match the expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       **/
      InvalidQuerier: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64, expectedQuerier: StagingXcmV4Location, maybeActualQuerier: Option<StagingXcmV4Location>], { origin: StagingXcmV4Location, queryId: u64, expectedQuerier: StagingXcmV4Location, maybeActualQuerier: Option<StagingXcmV4Location> }>;
      /**
       * Expected query response has been received but the expected querier location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       **/
      InvalidQuerierVersion: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64], { origin: StagingXcmV4Location, queryId: u64 }>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       **/
      InvalidResponder: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64, expectedLocation: Option<StagingXcmV4Location>], { origin: StagingXcmV4Location, queryId: u64, expectedLocation: Option<StagingXcmV4Location> }>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64], { origin: StagingXcmV4Location, queryId: u64 }>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       **/
      Notified: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      /**
       * Query response has been received and query is removed. The registered notification
       * could not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8, actualWeight: SpWeightsWeightV2Weight, maxBudgetedWeight: SpWeightsWeightV2Weight], { queryId: u64, palletIndex: u8, callIndex: u8, actualWeight: SpWeightsWeightV2Weight, maxBudgetedWeight: SpWeightsWeightV2Weight }>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [location: XcmVersionedLocation, queryId: u64], { location: XcmVersionedLocation, queryId: u64 }>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [location: StagingXcmV4Location, queryId: u64, error: XcmV3TraitsError], { location: StagingXcmV4Location, queryId: u64, error: XcmV3TraitsError }>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       **/
      ResponseReady: AugmentedEvent<ApiType, [queryId: u64, response: StagingXcmV4Response], { queryId: u64, response: StagingXcmV4Response }>;
      /**
       * Received query response has been read and removed.
       **/
      ResponseTaken: AugmentedEvent<ApiType, [queryId: u64], { queryId: u64 }>;
      /**
       * A XCM message was sent.
       **/
      Sent: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, destination: StagingXcmV4Location, message: StagingXcmV4Xcm, messageId: U8aFixed], { origin: StagingXcmV4Location, destination: StagingXcmV4Location, message: StagingXcmV4Xcm, messageId: U8aFixed }>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [location: StagingXcmV4Location, version: u32], { location: StagingXcmV4Location, version: u32 }>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [origin: StagingXcmV4Location, queryId: u64], { origin: StagingXcmV4Location, queryId: u64 }>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * The cost of sending it (borne by the chain) is included.
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, result: u32, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, result: u32, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      /**
       * A XCM version migration finished.
       **/
      VersionMigrationFinished: AugmentedEvent<ApiType, [version: u32], { version: u32 }>;
      /**
       * We have requested that a remote chain send us XCM version change notifications.
       **/
      VersionNotifyRequested: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      /**
       * A remote has requested XCM version change notification from us and we have honored it.
       * A version information message is sent to them and its cost is included.
       **/
      VersionNotifyStarted: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      /**
       * We have requested that a remote chain stops sending us XCM version change
       * notifications.
       **/
      VersionNotifyUnrequested: AugmentedEvent<ApiType, [destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed], { destination: StagingXcmV4Location, cost: StagingXcmV4AssetAssets, messageId: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    prices: {
      /**
       * Lock price.
       **/
      LockPrice: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, lockedPrice: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, lockedPrice: u128 }>;
      /**
       * Unlock price.
       **/
      UnlockPrice: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId], { currencyId: AcalaPrimitivesCurrencyCurrencyId }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: RuntimeCommonProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: RuntimeCommonProxyType, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Cancel a retry configuration for some task.
       **/
      RetryCancelled: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task was unable to be retried since the agenda is full at that block or there
       * was not enough weight to reschedule it.
       **/
      RetryFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Set a retry configuration for some task.
       **/
      RetrySet: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, period: u32, retries: u8], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, period: u32, retries: u8 }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sessionManager: {
      /**
       * Scheduled session duration.
       **/
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
      /**
       * The sudo key has been updated.
       **/
      KeyChanged: AugmentedEvent<ApiType, [old: Option<AccountId32>, new_: AccountId32], { old: Option<AccountId32>, new_: AccountId32 }>;
      /**
       * The key was permanently removed.
       **/
      KeyRemoved: AugmentedEvent<ApiType, []>;
      /**
       * A sudo call just took place.
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A [sudo_as](Pallet::sudo_as) call just took place.
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * An upgrade was authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256, checkVersion: bool], { codeHash: H256, checkVersion: bool }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommitteeMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tips: {
      /**
       * A new tip suggestion has been opened.
       **/
      NewTip: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been closed.
       **/
      TipClosed: AugmentedEvent<ApiType, [tipHash: H256, who: AccountId32, payout: u128], { tipHash: H256, who: AccountId32, payout: u128 }>;
      /**
       * A tip suggestion has reached threshold and is closing.
       **/
      TipClosing: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been retracted.
       **/
      TipRetracted: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been slashed.
       **/
      TipSlashed: AugmentedEvent<ApiType, [tipHash: H256, finder: AccountId32, deposit: u128], { tipHash: H256, finder: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, free: u128, reserved: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Deposited some balance into an account
       **/
      Deposited: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      Issued: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      /**
       * Some free balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some locked funds were unlocked
       **/
      LockRemoved: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32], { lockId: U8aFixed, currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32 }>;
      /**
       * Some funds are locked
       **/
      LockSet: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { lockId: U8aFixed, currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      Rescinded: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some reserved balance was repatriated (moved from reserved to
       * another account).
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus], { currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some balances were slashed (e.g. due to mis-behavior)
       **/
      Slashed: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128 }>;
      /**
       * The total issuance of an currency has been set
       **/
      TotalIssuanceSet: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some locked balance was freed.
       **/
      Unlocked: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balances were withdrawn (e.g. pay for transaction fee)
       **/
      Withdrawn: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPause: {
      /**
       * Paused EVM precompile
       **/
      EvmPrecompilePaused: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * Unpaused EVM precompile
       **/
      EvmPrecompileUnpaused: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * Paused transaction
       **/
      TransactionPaused: AugmentedEvent<ApiType, [palletNameBytes: Bytes, functionNameBytes: Bytes], { palletNameBytes: Bytes, functionNameBytes: Bytes }>;
      /**
       * Unpaused transaction
       **/
      TransactionUnpaused: AugmentedEvent<ApiType, [palletNameBytes: Bytes, functionNameBytes: Bytes], { palletNameBytes: Bytes, functionNameBytes: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * The charge fee pool is disabled
       **/
      ChargeFeePoolDisabled: AugmentedEvent<ApiType, [currencyId: AcalaPrimitivesCurrencyCurrencyId, foreignAmount: u128, nativeAmount: u128], { currencyId: AcalaPrimitivesCurrencyCurrencyId, foreignAmount: u128, nativeAmount: u128 }>;
      /**
       * The charge fee pool is enabled
       **/
      ChargeFeePoolEnabled: AugmentedEvent<ApiType, [subAccount: AccountId32, currencyId: AcalaPrimitivesCurrencyCurrencyId, exchangeRate: u128, poolSize: u128, swapThreshold: u128], { subAccount: AccountId32, currencyId: AcalaPrimitivesCurrencyCurrencyId, exchangeRate: u128, poolSize: u128, swapThreshold: u128 }>;
      /**
       * The charge fee pool is swapped
       **/
      ChargeFeePoolSwapped: AugmentedEvent<ApiType, [subAccount: AccountId32, supplyCurrencyId: AcalaPrimitivesCurrencyCurrencyId, oldExchangeRate: u128, swapExchangeRate: u128, newExchangeRate: u128, newPoolSize: u128], { subAccount: AccountId32, supplyCurrencyId: AcalaPrimitivesCurrencyCurrencyId, oldExchangeRate: u128, swapExchangeRate: u128, newExchangeRate: u128, newPoolSize: u128 }>;
      /**
       * A transaction `actual_fee`, of which `actual_tip` was added to the minimum inclusion
       * fee, has been paid by `who`. `actual_surplus` indicate extra amount when paid by none
       * native token.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, actualTip: u128, actualSurplus: u128], { who: AccountId32, actualFee: u128, actualTip: u128, actualSurplus: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * A new asset spend proposal has been approved.
       **/
      AssetSpendApproved: AugmentedEvent<ApiType, [index: u32, assetKind: Null, amount: u128, beneficiary: AccountId32, validFrom: u32, expireAt: u32], { index: u32, assetKind: Null, amount: u128, beneficiary: AccountId32, validFrom: u32, expireAt: u32 }>;
      /**
       * An approved spend was voided.
       **/
      AssetSpendVoided: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * A payment happened.
       **/
      Paid: AugmentedEvent<ApiType, [index: u32, paymentId: Null], { index: u32, paymentId: Null }>;
      /**
       * A payment failed and can be retried.
       **/
      PaymentFailed: AugmentedEvent<ApiType, [index: u32, paymentId: Null], { index: u32, paymentId: Null }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * A spend was processed and removed from the storage. It might have been successfully
       * paid or it may have expired.
       **/
      SpendProcessed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The inactive funds of the pallet have been updated.
       **/
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    unknownTokens: {
      /**
       * Deposit success.
       **/
      Deposited: AugmentedEvent<ApiType, [asset: StagingXcmV4Asset, who: StagingXcmV4Location], { asset: StagingXcmV4Asset, who: StagingXcmV4Location }>;
      /**
       * Withdraw success.
       **/
      Withdrawn: AugmentedEvent<ApiType, [asset: StagingXcmV4Asset, who: StagingXcmV4Location], { asset: StagingXcmV4Asset, who: StagingXcmV4Location }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * Claimed vesting.
       **/
      Claimed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Added new vesting schedule.
       **/
      VestingScheduleAdded: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, vestingSchedule: OrmlVestingVestingSchedule], { from: AccountId32, to: AccountId32, vestingSchedule: OrmlVestingVestingSchedule }>;
      /**
       * Updated vesting schedules.
       **/
      VestingSchedulesUpdated: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmInterface: {
      /**
       * Xcm dest weight has been updated.
       **/
      XcmDestWeightUpdated: AugmentedEvent<ApiType, [xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation, newXcmDestWeight: SpWeightsWeightV2Weight], { xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation, newXcmDestWeight: SpWeightsWeightV2Weight }>;
      /**
       * Xcm dest weight has been updated.
       **/
      XcmFeeUpdated: AugmentedEvent<ApiType, [xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation, newXcmDestWeight: u128], { xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation, newXcmDestWeight: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmpQueue: {
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: U8aFixed], { messageHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xTokens: {
      /**
       * Transferred `Asset` with fee.
       **/
      TransferredAssets: AugmentedEvent<ApiType, [sender: AccountId32, assets: StagingXcmV4AssetAssets, fee: StagingXcmV4Asset, dest: StagingXcmV4Location], { sender: AccountId32, assets: StagingXcmV4AssetAssets, fee: StagingXcmV4Asset, dest: StagingXcmV4Location }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
