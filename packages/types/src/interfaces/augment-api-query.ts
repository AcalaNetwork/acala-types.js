// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { BTreeMap, BTreeSet, Bytes, Null, Option, Struct, U256, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256 } from '@polkadot/types/interfaces/runtime';
import type { AcalaPrimitivesBondingLedgerBondingLedger, AcalaPrimitivesCurrencyAssetIds, AcalaPrimitivesCurrencyAssetMetadata, AcalaPrimitivesCurrencyCurrencyId, AcalaPrimitivesPosition, AcalaPrimitivesTradingPair, AcalaRuntimeRuntimeHoldReason, AcalaRuntimeRuntimeParametersKey, AcalaRuntimeRuntimeParametersValue, AcalaRuntimeScheduledTasks, AcalaRuntimeSessionKeys, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletParachainSystemUnincludedSegmentAncestor, CumulusPalletParachainSystemUnincludedSegmentSegmentTracker, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesCoreAggregateMessageOrigin, FrameSupportDispatchPerDispatchClassWeight, FrameSupportPreimagesBounded, FrameSystemAccountInfo, FrameSystemCodeUpgradeAuthorization, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, ModuleAuctionManagerCollateralAuctionItem, ModuleCdpEngineRiskManagementParams, ModuleDexTradingPairStatus, ModuleEvmModuleAccountInfo, ModuleEvmModuleCodeInfo, ModuleHomaModuleStakingLedger, ModuleHomaValidatorListGuarantee, ModuleHomaValidatorListValidatorBacking, ModuleSupportDexAggregatedSwapPath, ModuleSupportIncentivesPoolId, ModuleTransactionPaymentModuleChargeFeeMethod, ModuleXcmInterfaceModuleXcmInterfaceOperation, NutsfinanceStableAssetStableAssetPoolInfo, OrmlNftClassInfo, OrmlNftTokenInfo, OrmlOracleModuleTimestampedValue, OrmlRewardsPoolInfo, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensReserveData, OrmlTraitsAuctionAuctionInfo, OrmlUtilitiesOrderedSet, OrmlVestingVestingSchedule, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesIdAmount, PalletBalancesReserveData, PalletBountiesBounty, PalletCollectiveVotes, PalletDemocracyMetadataOwner, PalletDemocracyReferendumInfo, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletMessageQueueBookState, PalletMessageQueuePage, PalletMultisigMultisig, PalletPreimageOldRequestStatus, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyProxyDefinition, PalletSchedulerRetryConfig, PalletSchedulerScheduled, PalletTipsOpenTip, PalletTreasuryProposal, PalletTreasurySpendStatus, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotPrimitivesV6AbridgedHostConfiguration, PolkadotPrimitivesV6PersistedValidationData, PolkadotPrimitivesV6UpgradeGoAhead, PolkadotPrimitivesV6UpgradeRestriction, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpRuntimeDigest, SpTrieStorageProof, SpWeightsWeightV2Weight, StagingXcmV3MultiLocation, StagingXcmV4Location, XcmVersionedAssetId, XcmVersionedLocation } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    acalaOracle: {
      /**
       * If an oracle operator has fed a value in this block
       **/
      hasDispatched: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Raw values for each oracle operators
       **/
      rawValues: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<OrmlOracleModuleTimestampedValue>>, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Up to date combined value from Raw Values
       **/
      values: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<OrmlOracleModuleTimestampedValue>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    aggregatedDex: {
      /**
       * The specific swap paths for  AggregatedSwap do aggreated_swap to swap TokenA to TokenB
       * 
       * AggregatedSwapPaths: Map: (token_a: CurrencyId, token_b: CurrencyId) => paths: Vec<SwapPath>
       **/
      aggregatedSwapPaths: AugmentedQuery<ApiType, (arg: ITuple<[AcalaPrimitivesCurrencyCurrencyId, AcalaPrimitivesCurrencyCurrencyId]> | [AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array, AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array]) => Observable<Option<Vec<ModuleSupportDexAggregatedSwapPath>>>, [ITuple<[AcalaPrimitivesCurrencyCurrencyId, AcalaPrimitivesCurrencyCurrencyId]>]> & QueryableStorageEntry<ApiType, [ITuple<[AcalaPrimitivesCurrencyCurrencyId, AcalaPrimitivesCurrencyCurrencyId]>]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    assetRegistry: {
      /**
       * The storages for AssetMetadatas.
       * 
       * AssetMetadatas: map AssetIds => Option<AssetMetadata>
       **/
      assetMetadatas: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyAssetIds | { Erc20: any } | { StableAssetId: any } | { ForeignAssetId: any } | { NativeAssetId: any } | string | Uint8Array) => Observable<Option<AcalaPrimitivesCurrencyAssetMetadata>>, [AcalaPrimitivesCurrencyAssetIds]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyAssetIds]>;
      /**
       * The storages for EvmAddress.
       * 
       * Erc20IdToAddress: map Erc20Id => Option<EvmAddress>
       **/
      erc20IdToAddress: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<H160>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The storages for Locations.
       * 
       * ForeignAssetLocations: map ForeignAssetId => Option<Location>
       **/
      foreignAssetLocations: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Option<StagingXcmV3MultiLocation>>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * The storages for CurrencyIds.
       * 
       * LocationToCurrencyIds: map Location => Option<CurrencyId>
       **/
      locationToCurrencyIds: AugmentedQuery<ApiType, (arg: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => Observable<Option<AcalaPrimitivesCurrencyCurrencyId>>, [StagingXcmV3MultiLocation]> & QueryableStorageEntry<ApiType, [StagingXcmV3MultiLocation]>;
      /**
       * Next available Foreign AssetId ID.
       * 
       * NextForeignAssetId: ForeignAssetId
       **/
      nextForeignAssetId: AugmentedQuery<ApiType, () => Observable<u16>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next available Stable AssetId ID.
       * 
       * NextStableAssetId: StableAssetPoolId
       **/
      nextStableAssetId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auction: {
      /**
       * Index auctions by end time.
       **/
      auctionEndTime: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Stores on-going and future auctions. Closed auction are removed.
       **/
      auctions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<OrmlTraitsAuctionAuctionInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Track the next auction ID.
       **/
      auctionsIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auctionManager: {
      /**
       * Mapping from auction id to collateral auction info
       * 
       * CollateralAuctions: map AuctionId => Option<CollateralAuctionItem>
       **/
      collateralAuctions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ModuleAuctionManagerCollateralAuctionItem>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Record of the total collateral amount of all active collateral auctions
       * under specific collateral type CollateralType -> TotalAmount
       * 
       * TotalCollateralInAuction: map CurrencyId => Balance
       **/
      totalCollateralInAuction: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Record of total target sales of all active collateral auctions
       * 
       * TotalTargetInAuction: Balance
       **/
      totalTargetInAuction: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    aura: {
      /**
       * The current authority set.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current slot of this block.
       * 
       * This will be set in `on_initialize`.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auraExt: {
      /**
       * Serves as cache for the authorities.
       * 
       * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
       * but we require the old authorities to verify the seal when validating a PoV. This will
       * always be updated to the latest AuRa authorities in `on_finalize`.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current slot paired with a number of authored blocks.
       * 
       * Updated on each block initialization.
       **/
      slotInfo: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u64, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authority: {
      nextTaskIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      savedCalls: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[Call, Option<AccountId32>]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    balances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Freeze locks on account balances.
       **/
      freezes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesIdAmount>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Holds on account balances.
       **/
      holds: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<{
    readonly id: AcalaRuntimeRuntimeHoldReason;
    readonly amount: u128;
  } & Struct>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units of outstanding deactivated balance in the system.
       **/
      inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    bounties: {
      /**
       * Bounties that have been made.
       **/
      bounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletBountiesBounty>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Bounty indices that have been approved but not yet funded.
       **/
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of bounty proposals that have been made.
       **/
      bountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The description of each bounty.
       **/
      bountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    cdpEngine: {
      /**
       * Mapping from valid collateral type to its risk management params
       * 
       * CollateralParams: CurrencyId => Option<RiskManagementParams>
       **/
      collateralParams: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<ModuleCdpEngineRiskManagementParams>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Mapping from collateral type to its exchange rate of debit units and
       * debit value
       * 
       * DebitExchangeRate: CurrencyId => Option<ExchangeRate>
       **/
      debitExchangeRate: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<u128>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Timestamp in seconds of the last interest accumulation
       * 
       * LastAccumulationSecs: u64
       **/
      lastAccumulationSecs: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      liquidationContracts: AugmentedQuery<ApiType, () => Observable<Vec<H160>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    cdpTreasury: {
      /**
       * The buffer amount of debit pool that will not be offset by surplus pool.
       * 
       * DebitOffsetBuffer: Balance
       **/
      debitOffsetBuffer: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current total debit value of system. It's not same as debit in CDP
       * engine, it is the bad debt of the system.
       * 
       * DebitPool: Balance
       **/
      debitPool: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The expected amount size for per lot collateral auction of specific
       * collateral type.
       * 
       * ExpectedCollateralAuctionSize: map CurrencyId => Balance
       **/
      expectedCollateralAuctionSize: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    collatorSelection: {
      /**
       * Fixed deposit bond for each candidate.
       * 
       * CandidacyBond: Balance
       **/
      candidacyBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The (community, limited) collation candidates.
       * 
       * Candidates: BTreeSet<AccountId>
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<BTreeSet<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Desired number of candidates.
       * 
       * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
       * DesiredCandidates: u32
       **/
      desiredCandidates: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The invulnerable, fixed collators.
       * 
       * Invulnerables: Vec<AccountId>
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping from the kicked candidate or the left candidate to session index.
       * 
       * NonCandidates: map AccountId => SessionIndex
       **/
      nonCandidates: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Session points for each candidate.
       * 
       * SessionPoints: map AccountId => u32
       **/
      sessionPoints: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[u32, Vec<AccountId32>]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId32>, u128]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * General information concerning any proposal or referendum.
       * The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
       * dump or IPFS hash of a JSON file.
       * 
       * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
       * large preimages.
       **/
      metadataOf: AugmentedQuery<ApiType, (arg: PalletDemocracyMetadataOwner | { External: any } | { Proposal: any } | { Referendum: any } | string | Uint8Array) => Observable<Option<H256>>, [PalletDemocracyMetadataOwner]> & QueryableStorageEntry<ApiType, [PalletDemocracyMetadataOwner]>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[FrameSupportPreimagesBounded, PalletDemocracyVoteThreshold]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, FrameSupportPreimagesBounded, AccountId32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletDemocracyReferendumInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletDemocracyVoteVoting>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    dex: {
      /**
       * Initial exchange rate, used to calculate the dex share amount for founders of provisioning
       * 
       * InitialShareExchangeRates: map TradingPair => (ExchangeRate, ExchangeRate)
       **/
      initialShareExchangeRates: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<ITuple<[u128, u128]>>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Liquidity pool for TradingPair.
       * 
       * LiquidityPool: map TradingPair => (Balance, Balance)
       **/
      liquidityPool: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<ITuple<[u128, u128]>>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Provision of TradingPair by AccountId.
       * 
       * ProvisioningPool: double_map TradingPair, AccountId => (Balance,
       * Balance)
       **/
      provisioningPool: AugmentedQuery<ApiType, (arg1: AcalaPrimitivesTradingPair, arg2: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, u128]>>, [AcalaPrimitivesTradingPair, AccountId32]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair, AccountId32]>;
      /**
       * Status for TradingPair.
       * 
       * TradingPairStatuses: map TradingPair => TradingPairStatus
       **/
      tradingPairStatuses: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<ModuleDexTradingPairStatus>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    dexOracle: {
      /**
       * Average prices for TradingPair.
       * 
       * AveragePrices: map TradingPair => (AveragePrice0, AveragePrice1, LastCumulative0,
       * LastCumulative1, LastUpdatePriceTimestamp, InteralToUpdatePrice)
       **/
      averagePrices: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<Option<ITuple<[u128, u128, U256, U256, u64, u64]>>>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Price cumulatives for TradingPair.
       * 
       * Cumulatives: map TradingPair => (Cumulative0, Cumulative1, LastUpdateTimestamp)
       **/
      cumulatives: AugmentedQuery<ApiType, (arg: AcalaPrimitivesTradingPair) => Observable<ITuple<[U256, U256, u64]>>, [AcalaPrimitivesTradingPair]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesTradingPair]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    earning: {
      /**
       * The earning bonding ledger.
       * 
       * Ledger: map AccountId => Option<BondingLedger>
       **/
      ledger: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AcalaPrimitivesBondingLedgerBondingLedger>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    emergencyShutdown: {
      /**
       * Open final redemption flag
       * 
       * CanRefund: bool
       **/
      canRefund: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Emergency shutdown flag
       * 
       * IsShutdown: bool
       **/
      isShutdown: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    evm: {
      /**
       * The EVM accounts info.
       * 
       * Accounts: map EvmAddress => Option<AccountInfo<T>>
       **/
      accounts: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<Option<ModuleEvmModuleAccountInfo>>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
      /**
       * The storages for EVM contracts.
       * 
       * AccountStorages: double_map EvmAddress, H256 => H256
       **/
      accountStorages: AugmentedQuery<ApiType, (arg1: H160 | string | Uint8Array, arg2: H256 | string | Uint8Array) => Observable<H256>, [H160, H256]> & QueryableStorageEntry<ApiType, [H160, H256]>;
      /**
       * The EVM Chain ID.
       * 
       * ChainId: u64
       **/
      chainId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The code info for EVM contracts.
       * Key is Keccak256 hash of code.
       * 
       * CodeInfos: H256 => Option<CodeInfo>
       **/
      codeInfos: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ModuleEvmModuleCodeInfo>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The code for EVM contracts.
       * Key is Keccak256 hash of code.
       * 
       * Codes: H256 => Vec<u8>
       **/
      codes: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Bytes>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The storage usage for contracts. Including code size, extra bytes and total AccountStorages
       * size.
       * 
       * Accounts: map EvmAddress => u32
       **/
      contractStorageSizes: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<u32>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
      /**
       * Extrinsics origin for the current transaction.
       * 
       * ExtrinsicOrigin: Option<AccountId>
       **/
      extrinsicOrigin: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next available system contract address.
       * 
       * NetworkContractIndex: u64
       **/
      networkContractIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Xcm origin for the current transaction.
       * 
       * XcmOrigin: Option<Vec<AccountId>>
       **/
      xcmOrigin: AugmentedQuery<ApiType, () => Observable<Option<Vec<AccountId32>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    evmAccounts: {
      /**
       * The Substrate Account for EvmAddresses
       * 
       * Accounts: map EvmAddress => Option<AccountId>
       **/
      accounts: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<Option<AccountId32>>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
      /**
       * The EvmAddress for Substrate Accounts
       * 
       * EvmAddresses: map AccountId => Option<EvmAddress>
       **/
      evmAddresses: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<H160>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    financialCouncil: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    financialCouncilMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    generalCouncil: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    generalCouncilMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    homa: {
      /**
       * The interval of relaychain block number of relaychain to bump local current era.
       * 
       * LastEraBumpedRelayChainBlock: value: BlockNumberFor<T>
       **/
      bumpEraFrequency: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The rate of Homa drawn from the staking reward as commission.
       * The draw will be transfer to TreasuryAccount of Homa in liquid currency.
       * 
       * CommissionRate: value: Rate
       **/
      commissionRate: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The estimated staking reward rate per era on relaychain.
       * 
       * EstimatedRewardRatePerEra: value: Rate
       **/
      estimatedRewardRatePerEra: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The fixed fee rate for redeem request is fast matched.
       * 
       * FastMatchFeeRate: value: Rate
       **/
      fastMatchFeeRate: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The relaychain block number of last era bumped.
       * 
       * LastEraBumpedBlock: value: BlockNumberFor<T>
       **/
      lastEraBumpedBlock: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The interval of eras to nominate on relaychain.
       * 
       * NominateIntervalEra: value: EraIndex
       **/
      nominateIntervalEra: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Requests to redeem staked currencies.
       * 
       * RedeemRequests: Map: AccountId => Option<(liquid_amount: Balance, allow_fast_match: bool)>
       **/
      redeemRequests: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[u128, bool]>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The current era of relaychain
       * 
       * RelayChainCurrentEra : EraIndex
       **/
      relayChainCurrentEra: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The maximum amount of bonded staking currency for a single sub on relaychain to obtain the
       * best staking rewards.
       * 
       * SoftBondedCapPerSubAccount: value: Balance
       **/
      softBondedCapPerSubAccount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The staking ledger of Homa subaccounts.
       * 
       * StakingLedgers map: u16 => Option<StakingLedger>
       **/
      stakingLedgers: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Option<ModuleHomaModuleStakingLedger>>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * The total staking currency to bond on relaychain when new era,
       * and that is available to be match fast redeem request.
       * ToBondPool value: StakingCurrencyAmount
       **/
      toBondPool: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total amount of staking currency bonded in the homa protocol
       * 
       * TotalStakingBonded value: Balance
       **/
      totalStakingBonded: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total amount of void liquid currency. It's will not be issued,
       * used to avoid newly issued LDOT to obtain the incoming staking income from relaychain.
       * And it is guaranteed that the current exchange rate between liquid currency and staking
       * currency will not change. It will be reset to 0 at the beginning of the `rebalance` when new
       * era starts.
       * 
       * TotalVoidLiquid value: LiquidCurrencyAmount
       **/
      totalVoidLiquid: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The records of unbonding by AccountId.
       * 
       * Unbondings: double_map AccountId, ExpireEraIndex => UnbondingStakingCurrencyAmount
       **/
      unbondings: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<u128>, [AccountId32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32]>;
      /**
       * The total unclaimed redemption.
       * 
       * UnclaimedRedemption value: StakingCurrencyAmount
       **/
      unclaimedRedemption: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    homaCouncil: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    homaCouncilMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    homaValidatorList: {
      /**
       * The slash guarantee deposits for relaychain validators.
       * 
       * Guarantees: double_map RelayChainAccountId, AccountId => Option<Guarantee>
       **/
      guarantees: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<ModuleHomaValidatorListGuarantee>>, [AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32, AccountId32]>;
      /**
       * Total deposits for users.
       * 
       * TotalLockedByGuarantor: map AccountId => Option<Balance>
       **/
      totalLockedByGuarantor: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Total deposit for validators.
       * 
       * ValidatorBackings: map RelayChainAccountId => Option<ValidatorBacking>
       **/
      validatorBackings: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ModuleHomaValidatorListValidatorBacking>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    honzon: {
      /**
       * The authorization relationship map from
       * Authorizer -> (CollateralType, Authorizee) -> Authorized
       * 
       * Authorization: double_map AccountId, (CurrencyId, T::AccountId) => Option<Balance>
       **/
      authorization: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: ITuple<[AcalaPrimitivesCurrencyCurrencyId, AccountId32]> | [AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array, AccountId32 | string | Uint8Array]) => Observable<Option<u128>>, [AccountId32, ITuple<[AcalaPrimitivesCurrencyCurrencyId, AccountId32]>]> & QueryableStorageEntry<ApiType, [AccountId32, ITuple<[AcalaPrimitivesCurrencyCurrencyId, AccountId32]>]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    idleScheduler: {
      /**
       * The task id used to index tasks.
       **/
      nextTaskId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A temporary variable used to check if should skip dispatch schedule task or not.
       **/
      previousRelayBlockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The schedule tasks waiting to dispatch. After task is dispatched, it's removed.
       * 
       * Tasks: map T::Index => Task
       **/
      tasks: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<AcalaRuntimeScheduledTasks>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    incentives: {
      /**
       * If specified, ClaimRewardDeductionRates only apply to this currency.
       * 
       * ClaimRewardDeductionCurrency: map Pool => Option<RewardCurrencyId>
       **/
      claimRewardDeductionCurrency: AugmentedQuery<ApiType, (arg: ModuleSupportIncentivesPoolId | { Loans: any } | { Dex: any } | { Earning: any } | { NomineesElection: any } | string | Uint8Array) => Observable<Option<AcalaPrimitivesCurrencyCurrencyId>>, [ModuleSupportIncentivesPoolId]> & QueryableStorageEntry<ApiType, [ModuleSupportIncentivesPoolId]>;
      /**
       * Mapping from pool to its claim reward deduction rate.
       * 
       * ClaimRewardDeductionRates: map Pool => DeductionRate
       **/
      claimRewardDeductionRates: AugmentedQuery<ApiType, (arg: ModuleSupportIncentivesPoolId | { Loans: any } | { Dex: any } | { Earning: any } | { NomineesElection: any } | string | Uint8Array) => Observable<u128>, [ModuleSupportIncentivesPoolId]> & QueryableStorageEntry<ApiType, [ModuleSupportIncentivesPoolId]>;
      /**
       * Mapping from pool to its fixed incentive amounts of multi currencies per period.
       * 
       * IncentiveRewardAmounts: double_map Pool, RewardCurrencyId => RewardAmountPerPeriod
       **/
      incentiveRewardAmounts: AugmentedQuery<ApiType, (arg1: ModuleSupportIncentivesPoolId | { Loans: any } | { Dex: any } | { Earning: any } | { NomineesElection: any } | string | Uint8Array, arg2: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [ModuleSupportIncentivesPoolId, AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [ModuleSupportIncentivesPoolId, AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The pending rewards amount, actual available rewards amount may be deducted
       * 
       * PendingMultiRewards: double_map PoolId, AccountId => BTreeMap<CurrencyId, Balance>
       **/
      pendingMultiRewards: AugmentedQuery<ApiType, (arg1: ModuleSupportIncentivesPoolId | { Loans: any } | { Dex: any } | { Earning: any } | { NomineesElection: any } | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<BTreeMap<AcalaPrimitivesCurrencyCurrencyId, u128>>, [ModuleSupportIncentivesPoolId, AccountId32]> & QueryableStorageEntry<ApiType, [ModuleSupportIncentivesPoolId, AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    liquidCrowdloan: {
      /**
       * The redeem currency id.
       **/
      redeemCurrencyId: AugmentedQuery<ApiType, () => Observable<Option<AcalaPrimitivesCurrencyCurrencyId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    loans: {
      /**
       * The collateralized debit positions, map from
       * Owner -> CollateralType -> Position
       * 
       * Positions: double_map CurrencyId, AccountId => Position
       **/
      positions: AugmentedQuery<ApiType, (arg1: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<AcalaPrimitivesPosition>, [AcalaPrimitivesCurrencyCurrencyId, AccountId32]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId, AccountId32]>;
      /**
       * The total collateralized debit positions, map from
       * CollateralType -> Position
       * 
       * TotalPositions: CurrencyId => Position
       **/
      totalPositions: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<AcalaPrimitivesPosition>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    messageQueue: {
      /**
       * The index of the first and last (non-empty) pages.
       **/
      bookStateFor: AugmentedQuery<ApiType, (arg: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array) => Observable<PalletMessageQueueBookState>, [CumulusPrimitivesCoreAggregateMessageOrigin]> & QueryableStorageEntry<ApiType, [CumulusPrimitivesCoreAggregateMessageOrigin]>;
      /**
       * The map of page indices to pages.
       **/
      pages: AugmentedQuery<ApiType, (arg1: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletMessageQueuePage>>, [CumulusPrimitivesCoreAggregateMessageOrigin, u32]> & QueryableStorageEntry<ApiType, [CumulusPrimitivesCoreAggregateMessageOrigin, u32]>;
      /**
       * The origin at which we should begin servicing.
       **/
      serviceHead: AugmentedQuery<ApiType, () => Observable<Option<CumulusPrimitivesCoreAggregateMessageOrigin>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    multisig: {
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [AccountId32, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    nomineesElection: {
      /**
       * The nomination bonding ledger.
       * 
       * Ledger: map AccountId => BondingLedger
       **/
      ledger: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AcalaPrimitivesBondingLedgerBondingLedger>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The nominations for nominators.
       * 
       * Nominations: map AccountId => Vec<NomineeId>
       **/
      nominations: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<AccountId32>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Reserved nominees.
       * 
       * ReservedNominees: map u16 => Vec<NomineeId>
       **/
      reservedNominees: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<AccountId32>>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * The total voting value for nominees.
       * 
       * Votes: map NomineeId => Balance
       **/
      votes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u128>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    operatorMembershipAcala: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    ormlNFT: {
      /**
       * Store class info.
       * 
       * Returns `None` if class info not set or removed.
       **/
      classes: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<OrmlNftClassInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Next available class ID.
       **/
      nextClassId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next available token ID.
       **/
      nextTokenId: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u64>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Store token info.
       * 
       * Returns `None` if token info not set or removed.
       **/
      tokens: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<Option<OrmlNftTokenInfo>>, [u32, u64]> & QueryableStorageEntry<ApiType, [u32, u64]>;
      /**
       * Token existence check by owner and class ID.
       **/
      tokensByOwner: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u64 | AnyNumber | Uint8Array) => Observable<Null>, [AccountId32, u32, u64]> & QueryableStorageEntry<ApiType, [AccountId32, u32, u64]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainSystem: {
      /**
       * Storage field that keeps track of bandwidth used by the unincluded segment along with the
       * latest HRMP watermark. Used for limiting the acceptance of new blocks with
       * respect to relay chain constraints.
       **/
      aggregatedUnincludedSegment: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemUnincludedSegmentSegmentTracker>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finalize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A custom head data that should be returned as result of `validate_block`.
       * 
       * See `Pallet::set_custom_validation_head_data` for more information.
       **/
      customValidationHeadData: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV6AbridgedHostConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP watermark that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The last downward message queue chain head we have observed.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The relay chain block number associated with the last parachain block.
       * 
       * This is updated in `on_finalize`.
       **/
      lastRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Validation code that is set by the parachain and is to be communicated to collator and
       * consequently the relay-chain.
       * 
       * This will be cleared in `on_initialize` of each new block if no other pallet already set
       * the value.
       **/
      newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that are still pending and not yet send to the relay chain.
       **/
      pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * In case of a scheduled upgrade, this storage field contains the validation code to be
       * applied.
       * 
       * As soon as the relay chain gives us the go-ahead signal, we will overwrite the
       * [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
       * with the new validation code. This concludes the upgrade process.
       **/
      pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of downward messages processed in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The state proof for the last relay parent block.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relayStateProof: AugmentedQuery<ApiType, () => Observable<Option<SpTrieStorageProof>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing DMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing XCMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Latest included block descendants the runtime accepted. In other words, these are
       * ancestors of the currently executing block which have not been included in the observed
       * relay-chain state.
       * 
       * The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
       * in the pallet.
       **/
      unincludedSegment: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletParachainSystemUnincludedSegmentAncestor>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Optional upgrade go-ahead signal from the relay-chain.
       * 
       * This storage item is a mirror of the corresponding value for the current parachain from the
       * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
       * set after the inherent.
       **/
      upgradeGoAhead: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV6UpgradeGoAhead>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
       * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
       * candidate will be invalid.
       * 
       * This storage item is a mirror of the corresponding value for the current parachain from the
       * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
       * set after the inherent.
       **/
      upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV6UpgradeRestriction>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The factor to multiply the base delivery fee by for UMP.
       **/
      upwardDeliveryFeeFactor: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The [`PersistedValidationData`] set for this block.
       * This value is expected to be set only once per block and it's never stored
       * in the trie.
       **/
      validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV6PersistedValidationData>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parameters: {
      /**
       * Stored parameters.
       * 
       * map KeyOf<T> => Option<ValueOf<T>>
       **/
      parameters: AugmentedQuery<ApiType, (arg: AcalaRuntimeRuntimeParametersKey | { Earning: any } | string | Uint8Array) => Observable<Option<AcalaRuntimeRuntimeParametersValue>>, [AcalaRuntimeRuntimeParametersKey]> & QueryableStorageEntry<ApiType, [AcalaRuntimeRuntimeParametersKey]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    polkadotXcm: {
      /**
       * The existing asset traps.
       * 
       * Key is the blake2 256 hash of (origin, versioned `Assets`) pair. Value is the number of
       * times this pair has been trapped (usually just 1 if it exists at all).
       **/
      assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The current migration's stage, if any.
       **/
      currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fungible assets which we know are locked on this chain.
       **/
      lockedFungibles: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<ITuple<[u128, XcmVersionedLocation]>>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The ongoing queries.
       **/
      queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The latest available query index.
       **/
      queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fungible assets which we know are locked on a remote chain.
       **/
      remoteLockedFungibles: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: XcmVersionedAssetId | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<PalletXcmRemoteLockedFungibleRecord>>, [u32, AccountId32, XcmVersionedAssetId]> & QueryableStorageEntry<ApiType, [u32, AccountId32, XcmVersionedAssetId]>;
      /**
       * Default version to encode XCM when latest version of destination is unknown. If `None`,
       * then the destinations whose XCM version is unknown are considered unreachable.
       **/
      safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The Latest versions that we know various locations support.
       **/
      supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<u32>>, [u32, XcmVersionedLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedLocation]>;
      /**
       * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
       * the `u32` counter is the number of times that a send to the destination has been attempted,
       * which is used as a prioritization.
       **/
      versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[XcmVersionedLocation, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All locations that we have requested version notifications from.
       **/
      versionNotifiers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<u64>>, [u32, XcmVersionedLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedLocation]>;
      /**
       * The target locations that are subscribed to our version changes, as well as the most recent
       * of our versions we informed them of.
       **/
      versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<ITuple<[u64, SpWeightsWeightV2Weight, u32]>>>, [u32, XcmVersionedLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedLocation]>;
      /**
       * Global suspension state of the XCM executor.
       **/
      xcmExecutionSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    preimage: {
      preimageFor: AugmentedQuery<ApiType, (arg: ITuple<[H256, u32]> | [H256 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<Bytes>>, [ITuple<[H256, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[H256, u32]>]>;
      /**
       * The request status of a given hash.
       **/
      requestStatusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The request status of a given hash.
       **/
      statusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageOldRequestStatus>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    prices: {
      /**
       * Mapping from currency id to it's locked price
       * 
       * map CurrencyId => Option<Price>
       **/
      lockedPrice: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<u128>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    proxy: {
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    rewards: {
      /**
       * Record reward pool info.
       * 
       * map PoolId => PoolInfo
       **/
      poolInfos: AugmentedQuery<ApiType, (arg: ModuleSupportIncentivesPoolId | { Loans: any } | { Dex: any } | { Earning: any } | { NomineesElection: any } | string | Uint8Array) => Observable<OrmlRewardsPoolInfo>, [ModuleSupportIncentivesPoolId]> & QueryableStorageEntry<ApiType, [ModuleSupportIncentivesPoolId]>;
      /**
       * Record share amount, reward currency and withdrawn reward amount for
       * specific `AccountId` under `PoolId`.
       * 
       * double_map (PoolId, AccountId) => (Share, BTreeMap<CurrencyId, Balance>)
       **/
      sharesAndWithdrawnRewards: AugmentedQuery<ApiType, (arg1: ModuleSupportIncentivesPoolId | { Loans: any } | { Dex: any } | { Earning: any } | { NomineesElection: any } | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, BTreeMap<AcalaPrimitivesCurrencyCurrencyId, u128>]>>, [ModuleSupportIncentivesPoolId, AccountId32]> & QueryableStorageEntry<ApiType, [ModuleSupportIncentivesPoolId, AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduled>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      incompleteSince: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Lookup from a name to the block number and index of the task.
       * 
       * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
       * identities.
       **/
      lookup: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
      /**
       * Retry configurations for items to be executed, indexed by task address.
       **/
      retries: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<PalletSchedulerRetryConfig>>, [ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Indices of disabled validators.
       * 
       * The vec is always kept sorted so that we can find whether a given validator is
       * disabled using binary search. It gets cleared when `on_session_ending` returns
       * a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AcalaRuntimeSessionKeys>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, AcalaRuntimeSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sessionManager: {
      /**
       * The current session duration offset.
       * 
       * DurationOffset: BlockNumberFor<T>
       **/
      durationOffset: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current session duration.
       * 
       * SessionDuration: BlockNumberFor<T>
       **/
      sessionDuration: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping from block number to new session index and duration.
       * 
       * SessionDurationChanges: map BlockNumber => (SessionIndex, SessionDuration)
       **/
      sessionDurationChanges: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<ITuple<[u32, u32]>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    stableAsset: {
      poolCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      pools: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<NutsfinanceStableAssetStableAssetPoolInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * `Some` if a code upgrade has been authorized.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemCodeUpgradeAuthorization>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Whether all inherents have been applied.
       **/
      inherentsApplied: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalCommitteeMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * Whether the timestamp has been updated in this block.
       * 
       * This value is updated to `true` upon successful submission of a timestamp by a node.
       * It is then checked at the end of each block execution in the `on_finalize` hook.
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    tips: {
      /**
       * Simple preimage lookup from the reason's hash to the original data. Again, has an
       * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
       **/
      reasons: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
       * This has the insecure enumerable hash function since the key itself is already
       * guaranteed to be a secure hash.
       **/
      tips: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletTipsOpenTip>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<OrmlTokensAccountData>, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Vec<OrmlTokensReserveData>>, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPause: {
      /**
       * The paused EVM precompile map
       * 
       * map (PrecompileAddress) => Option<()>
       **/
      pausedEvmPrecompiles: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<Option<Null>>, [H160]> & QueryableStorageEntry<ApiType, [H160]>;
      /**
       * The paused transaction map
       * 
       * map (PalletNameBytes, FunctionNameBytes) => Option<()>
       **/
      pausedTransactions: AugmentedQuery<ApiType, (arg: ITuple<[Bytes, Bytes]> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<Null>>, [ITuple<[Bytes, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[Bytes, Bytes]>]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      /**
       * The alternative fee swap path of accounts.
       * 
       * AlternativeFeeSwapPath: map AccountId => Option<Vec<CurrencyId>>
       **/
      alternativeFeeSwapPath: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<AcalaPrimitivesCurrencyCurrencyId>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The global fee swap path.
       * The path includes `DefaultFeeTokens` trading path, and foreign asset trading path.
       * 
       * GlobalFeeSwapPath: map CurrencyId => Option<Vec<CurrencyId>>
       **/
      globalFeeSwapPath: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<Vec<AcalaPrimitivesCurrencyCurrencyId>>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The next fee multiplier.
       * 
       * NextFeeMultiplier: Multiplier
       **/
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The override charge fee method.
       * 
       * OverrideChargeFeeMethod: ChargeFeeMethod
       **/
      overrideChargeFeeMethod: AugmentedQuery<ApiType, () => Observable<Option<ModuleTransactionPaymentModuleChargeFeeMethod>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The size of fee pool in native token. During `initialize_pool` this amount of native token
       * will be transferred from `TreasuryAccount` to sub account of `PalletId`.
       * 
       * PoolSize: map CurrencyId => Balance
       **/
      poolSize: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The balance threshold to trigger swap from dex, normally the value is gt ED of native asset.
       * 
       * SwapBalanceThreshold: map CurrencyId => Balance
       **/
      swapBalanceThreshold: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * The exchange rate between the given currency and native token.
       * This value is updated when upon swap from dex.
       * 
       * TokenExchangeRate: map CurrencyId => Option<Ratio>
       **/
      tokenExchangeRate: AugmentedQuery<ApiType, (arg: AcalaPrimitivesCurrencyCurrencyId | { Token: any } | { DexShare: any } | { Erc20: any } | { StableAssetPoolToken: any } | { LiquidCrowdloan: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<u128>>, [AcalaPrimitivesCurrencyCurrencyId]> & QueryableStorageEntry<ApiType, [AcalaPrimitivesCurrencyCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The amount which has been reported as inactive to Currency.
       **/
      deactivated: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The count of spends that have been made.
       **/
      spendCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Spends that have been approved and being processed.
       **/
      spends: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasurySpendStatus>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    unknownTokens: {
      /**
       * Abstract fungible balances under a given location and a abstract
       * fungible id.
       * 
       * double_map: who, asset_id => u128
       **/
      abstractFungibleBalances: AugmentedQuery<ApiType, (arg1: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<u128>, [StagingXcmV4Location, Bytes]> & QueryableStorageEntry<ApiType, [StagingXcmV4Location, Bytes]>;
      /**
       * Concrete fungible balances under a given location and a concrete
       * fungible id.
       * 
       * double_map: who, asset_id => u128
       **/
      concreteFungibleBalances: AugmentedQuery<ApiType, (arg1: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, arg2: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => Observable<u128>, [StagingXcmV4Location, StagingXcmV4Location]> & QueryableStorageEntry<ApiType, [StagingXcmV4Location, StagingXcmV4Location]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vesting: {
      /**
       * Vesting schedules of an account.
       * 
       * VestingSchedules: map AccountId => Vec<VestingSchedule>
       **/
      vestingSchedules: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<OrmlVestingVestingSchedule>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xcmInterface: {
      /**
       * The dest weight limit and fee for execution XCM msg sended by XcmInterface. Must be
       * sufficient, otherwise the execution of XCM msg on relaychain will fail.
       * 
       * XcmDestWeightAndFee: map: XcmInterfaceOperation => (Weight, Balance)
       **/
      xcmDestWeightAndFee: AugmentedQuery<ApiType, (arg: ModuleXcmInterfaceModuleXcmInterfaceOperation | { XtokensTransfer: any } | { HomaWithdrawUnbonded: any } | { HomaBondExtra: any } | { HomaUnbond: any } | { ParachainFee: any } | { ProxyReserveTransferAssets: any } | { HomaNominate: any } | string | Uint8Array) => Observable<ITuple<[SpWeightsWeightV2Weight, u128]>>, [ModuleXcmInterfaceModuleXcmInterfaceOperation]> & QueryableStorageEntry<ApiType, [ModuleXcmInterfaceModuleXcmInterfaceOperation]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xcmpQueue: {
      /**
       * The factor to multiply the base delivery fee by.
       **/
      deliveryFeeFactor: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The suspended inbound XCMP channels. All others are not suspended.
       * 
       * This is a `StorageValue` instead of a `StorageMap` since we expect multiple reads per block
       * to different keys with a one byte payload. The access to `BoundedBTreeSet` will be cached
       * within the block and therefore only included once in the proof size.
       * 
       * NOTE: The PoV benchmarking cannot know this and will over-estimate, but the actual proof
       * will be smaller.
       **/
      inboundXcmpSuspended: AugmentedQuery<ApiType, () => Observable<BTreeSet<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The messages outbound in a given XCMP channel.
       **/
      outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u16]> & QueryableStorageEntry<ApiType, [u32, u16]>;
      /**
       * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
       * and last outbound message. If the two indices are equal, then it indicates an empty
       * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
       * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
       * case of the need to send a high-priority signal message this block.
       * The bool is true if there is a signal message waiting to be sent.
       **/
      outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueOutboundChannelDetails>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The configuration which controls the dynamics of the outbound queue.
       **/
      queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
       **/
      queueSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any signal messages waiting to be sent.
       **/
      signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  } // AugmentedQueries
} // declare module
