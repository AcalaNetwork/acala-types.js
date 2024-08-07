// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Null, Option, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { Codec, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { AcalaPrimitivesCurrencyCurrencyId, FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, StagingXcmV4Location } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    acalaOracle: {
      /**
       * Maximum size the vector used for feed values
       **/
      maxFeedValues: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum size of HasDispatched
       **/
      maxHasDispatchedSize: u32 & AugmentedConst<ApiType>;
      /**
       * The root operator account id, record all sudo feeds on this account.
       **/
      rootOperatorAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    aggregatedDex: {
      /**
       * The alternative swap path joint list for DEX swap
       **/
      dexSwapJointList: Vec<Vec<AcalaPrimitivesCurrencyCurrencyId>> & AugmentedConst<ApiType>;
      /**
       * The limit for length of swap path
       **/
      swapPathLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    assetRegistry: {
      /**
       * The Currency ID for the staking currency
       **/
      stakingCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    auctionManager: {
      /**
       * When the total duration of the auction exceeds this soft cap, push
       * the auction to end more faster
       **/
      auctionDurationSoftCap: u32 & AugmentedConst<ApiType>;
      /**
       * The extended time for the auction to end after each successful bid
       **/
      auctionTimeToClose: u32 & AugmentedConst<ApiType>;
      /**
       * The stable currency id
       **/
      getStableCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The minimum increment size of each bid compared to the previous one
       **/
      minimumIncrementSize: u128 & AugmentedConst<ApiType>;
      /**
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple modules send unsigned transactions.
       **/
      unsignedPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
       * 
       * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
       * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
       * In case you have multiple sources of provider references, you may also get unexpected
       * behaviour if you set this to zero.
       * 
       * Bottom line: Do yourself a favour and make it at least one!
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of individual freeze locks that can exist on an account at any time.
       **/
      maxFreezes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bounties: {
      /**
       * The amount held on deposit for placing a bounty proposal.
       **/
      bountyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The delay period for which a bounty beneficiary need to wait before claim the payout.
       **/
      bountyDepositPayoutDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Bounty duration in blocks.
       **/
      bountyUpdatePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum value for a bounty.
       **/
      bountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMax: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMin: Option<u128> & AugmentedConst<ApiType>;
      /**
       * The curator deposit is calculated as a percentage of the curator fee.
       * 
       * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
       * `CuratorDepositMin`.
       **/
      curatorDepositMultiplier: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    cdpEngine: {
      /**
       * The default debit exchange rate for all collateral types
       **/
      defaultDebitExchangeRate: u128 & AugmentedConst<ApiType>;
      /**
       * The default liquidation penalty rate when liquidate unsafe CDP
       **/
      defaultLiquidationPenalty: u128 & AugmentedConst<ApiType>;
      /**
       * The default liquidation ratio for all collateral types of CDP
       **/
      defaultLiquidationRatio: u128 & AugmentedConst<ApiType>;
      /**
       * Stablecoin currency id
       **/
      getStableCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      maxLiquidationContracts: u32 & AugmentedConst<ApiType>;
      /**
       * When settle collateral with smart contracts, the acceptable max slippage for the price
       * from oracle.
       **/
      maxLiquidationContractSlippage: u128 & AugmentedConst<ApiType>;
      /**
       * When swap with DEX, the acceptable max slippage for the price from oracle.
       **/
      maxSwapSlippageCompareToOracle: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum debit value to avoid debit dust
       **/
      minimumDebitValue: u128 & AugmentedConst<ApiType>;
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple modules send unsigned transactions.
       **/
      unsignedPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    cdpTreasury: {
      /**
       * Stablecoin currency id
       **/
      getStableCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The cap of lots number when create collateral auction on a
       * liquidation or to create debit/surplus auction on block end.
       * If set to 0, does not work.
       **/
      maxAuctionsCount: u32 & AugmentedConst<ApiType>;
      /**
       * The CDP treasury's module id, keep surplus and collateral assets
       * from liquidation.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    collatorSelection: {
      /**
       * Will be kicked if block is not produced in threshold.
       **/
      collatorKickThreshold: Permill & AugmentedConst<ApiType>;
      /**
       * The Kicked candidate cannot register candidate or withdraw bond until
       * `KickPenaltySessionLength` ends.
       **/
      kickPenaltySessionLength: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of candidates that we should have. This is used for benchmarking and is
       * not enforced.
       * 
       * This does not take into account the invulnerables.
       **/
      maxCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of invulnerables.
       **/
      maxInvulnerables: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum number of candidates.
       **/
      minCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum reward to be distributed to the collators.
       **/
      minRewardDistributeAmount: u128 & AugmentedConst<ApiType>;
      /**
       * Account Identifier from which the internal Pot is generated.
       **/
      potId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    currencies: {
      /**
       * Used as temporary account for ERC20 token `withdraw` and `deposit`.
       **/
      erc20HoldingAccount: H160 & AugmentedConst<ApiType>;
      /**
       * The native currency id
       **/
      getNativeCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case
       * where they are on the losing side of a vote.
       **/
      enactmentPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Indicator for whether an emergency origin is even allowed to happen. Some chains may
       * want to set this permanently to `false`, others may want to condition it on things such
       * as an upgrade having happened recently.
       **/
      instantAllowed: bool & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of items which can be blacklisted.
       **/
      maxBlacklisted: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of deposits a public proposal may have at any time.
       **/
      maxDeposits: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of public proposals that can exist at any time.
       **/
      maxProposals: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       * 
       * Also used to compute weight, an overly big value can
       * lead to extrinsic with very big weight: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    dex: {
      /**
       * The extended provisioning blocks since the `not_before` of provisioning.
       **/
      extendedProvisioningBlocks: u32 & AugmentedConst<ApiType>;
      /**
       * Trading fee rate
       * The first item of the tuple is the numerator of the fee rate, second
       * item is the denominator, fee_rate = numerator / denominator,
       * use (u32, u32) over `Rate` type to minimize internal division
       * operation.
       **/
      getExchangeFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
      /**
       * The DEX's module id, keep all assets in DEX.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The limit for length of trading path
       **/
      tradingPathLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    earning: {
      lockIdentifier: U8aFixed & AugmentedConst<ApiType>;
      maxUnbondingChunks: u32 & AugmentedConst<ApiType>;
      minBond: u128 & AugmentedConst<ApiType>;
      unbondingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    evm: {
      /**
       * Deposit for the developer.
       **/
      developerDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The EVM address for creating system contract.
       **/
      networkContractSource: H160 & AugmentedConst<ApiType>;
      /**
       * Charge extra bytes for creating a contract, would be reserved until
       * the contract deleted.
       **/
      newContractExtraBytes: u32 & AugmentedConst<ApiType>;
      /**
       * The fee for publishing the contract.
       **/
      publicationFee: u128 & AugmentedConst<ApiType>;
      /**
       * Storage required for per byte.
       **/
      storageDepositPerByte: u128 & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Tx fee required for per gas.
       * Provide to the client
       **/
      txFeePerGas: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    evmAccounts: {
      /**
       * Chain ID of EVM.
       **/
      chainId: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    financialCouncil: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    generalCouncil: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    homa: {
      /**
       * The index list of active Homa subaccounts.
       * `active` means these subaccounts can continue do bond/unbond operations by Homa.
       **/
      activeSubAccountsIndexList: Vec<u16> & AugmentedConst<ApiType>;
      /**
       * Number of eras for unbonding is expired on relaychain.
       **/
      bondingDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The default exchange rate for liquid currency to staking currency.
       **/
      defaultExchangeRate: u128 & AugmentedConst<ApiType>;
      /**
       * The currency id of the Liquid asset
       **/
      liquidCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The staking amount of threshold to mint.
       **/
      mintThreshold: u128 & AugmentedConst<ApiType>;
      /**
       * The homa's module id.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The liquid amount of threshold to redeem.
       **/
      redeemThreshold: u128 & AugmentedConst<ApiType>;
      /**
       * The currency id of the Staking asset
       **/
      stakingCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Vault reward of Homa protocol
       **/
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    homaCouncil: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    homaValidatorList: {
      /**
       * The waiting eras when unbond token.
       **/
      bondingDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of tokens that can be bonded to a validator.
       **/
      minBondAmount: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of insurance a validator needs.
       **/
      validatorInsuranceThreshold: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    honzon: {
      /**
       * Reserved amount per authorization.
       **/
      depositPerAuthorization: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    idleScheduler: {
      /**
       * Number of Relay Chain blocks skipped to disable `on_idle` dispatching scheduled tasks,
       * this shuts down idle-scheduler when block production is slower than this number of
       * relaychain blocks.
       **/
      disableBlockThreshold: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum weight that should remain before idle tasks are dispatched.
       **/
      minimumWeightRemainInBlock: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    incentives: {
      /**
       * The period to accumulate rewards
       **/
      accumulatePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The native currency for earning staking
       **/
      nativeCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The module id, keep DexShare LP.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The source account for native token rewards.
       **/
      rewardsSource: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    liquidCrowdloan: {
      /**
       * The crowdloan vault account on relay chain.
       **/
      crowdloanVault: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Liquid crowdloan currency Id, i.e. LCDOT for Polkadot.
       **/
      liquidCrowdloanCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Pallet Id for liquid crowdloan module.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Relay chain currency Id, i.e. DOT for Polkadot.
       **/
      relayChainCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    loans: {
      /**
       * The loan's module id, keep all collaterals of CDPs.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    messageQueue: {
      /**
       * The size of the page; this implies the maximum message size which can be sent.
       * 
       * A good value depends on the expected message sizes, their weights, the weight that is
       * available for processing them and the maximal needed message size. The maximal message
       * size is slightly lower than this as defined by [`MaxMessageLenOf`].
       **/
      heapSize: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of stale pages (i.e. of overweight messages) allowed before culling
       * can happen. Once there are more stale pages than this, then historical pages may be
       * dropped, even if they contain unprocessed overweight messages.
       **/
      maxStale: u32 & AugmentedConst<ApiType>;
      /**
       * The amount of weight (if any) which should be provided to the message queue for
       * servicing enqueued items.
       * 
       * This may be legitimately `None` in the case that you will call
       * `ServiceQueues::service_queues` manually.
       **/
      serviceWeight: Option<SpWeightsWeightV2Weight> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nft: {
      /**
       * The minimum balance to create class
       **/
      createClassDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum balance to create token
       **/
      createTokenDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Deposit required for per byte.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of bytes in attributes
       **/
      maxAttributesBytes: u32 & AugmentedConst<ApiType>;
      /**
       * The NFT's module id
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nomineesElection: {
      /**
       * The waiting eras when unbond token.
       **/
      bondingDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of nominees when voted and picked up.
       **/
      maxNominateesCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of simultaneous unbonding chunks that can exist.
       **/
      maxUnbondingChunks: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of tokens that can be bonded.
       **/
      minBond: u128 & AugmentedConst<ApiType>;
      /**
       * LockIdentifier for lock vote token.
       **/
      palletId: U8aFixed & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    parachainSystem: {
      /**
       * Returns the parachain ID we are running with.
       **/
      selfParaId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    prices: {
      /**
       * The liquid currency id, it should be LDOT in Acala.
       **/
      getLiquidCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The stable currency id, it should be AUSD in Acala.
       **/
      getStableCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The staking currency id, it should be DOT in Acala.
       **/
      getStakingCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The staking reward rate per relaychain block for StakingCurrency.
       * In fact, the staking reward is not settled according to the block on relaychain.
       **/
      rewardRatePerRelaychainBlock: u128 & AugmentedConst<ApiType>;
      /**
       * The fixed prices of stable currency, it should be 1 USD in Acala.
       **/
      stableCurrencyFixedPrice: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       * 
       * NOTE:
       * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
       * higher limit under `runtime-benchmarks` feature.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    stableAsset: {
      aPrecision: u128 & AugmentedConst<ApiType>;
      feePrecision: u128 & AugmentedConst<ApiType>;
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      poolAssetLimit: u32 & AugmentedConst<ApiType>;
      swapExactOverAmount: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's in-code version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    technicalCommittee: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks.
       * 
       * Be aware that this is different to the *expected* period that the block production
       * apparatus provides. Your chosen consensus system will generally work with this to
       * determine a sensible block time. For example, in the Aura pallet it will be double this
       * period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tips: {
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount for a single tip.
       **/
      maxTipAmount: u128 & AugmentedConst<ApiType>;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: u32 & AugmentedConst<ApiType>;
      /**
       * The percent of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: Percent & AugmentedConst<ApiType>;
      /**
       * The non-zero amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tokens: {
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * Alternative fee surplus if not payed with native asset.
       **/
      alternativeFeeSurplus: Percent & AugmentedConst<ApiType>;
      /**
       * Deposit for setting an Alternative fee swap
       **/
      alternativeFeeSwapDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Custom fee surplus if not payed with native asset.
       **/
      customFeeSurplus: Percent & AugmentedConst<ApiType>;
      /**
       * Default fee tokens used in tx fee pool.
       **/
      defaultFeeTokens: Vec<AcalaPrimitivesCurrencyCurrencyId> & AugmentedConst<ApiType>;
      /**
       * When swap with DEX, the acceptable max slippage for the price from oracle.
       **/
      maxSwapSlippageCompareToOracle: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum value of tips that affect the priority.
       * Set the maximum value of tips to prevent affecting the unsigned extrinsic.
       **/
      maxTipsOfPriority: u128 & AugmentedConst<ApiType>;
      /**
       * Native currency id, the actual received currency type as fee for
       * treasury. Should be ACA
       **/
      nativeCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u64 & AugmentedConst<ApiType>;
      /**
       * PalletId used to derivate sub account.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The step amount of tips required to effect transaction priority.
       **/
      tipPerWeightStep: u128 & AugmentedConst<ApiType>;
      /**
       * The limit for length of trading path
       **/
      tradingPathLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Treasury account used to transfer balance to sub account of `PalletId`.
       **/
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The period during which an approved treasury spend has to be claimed.
       **/
      payoutPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vesting: {
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xcmInterface: {
      /**
       * The account of parachain on the relaychain.
       **/
      parachainAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Unbonding slashing spans for unbonding on the relaychain.
       **/
      relayChainUnbondingSlashingSpans: u32 & AugmentedConst<ApiType>;
      /**
       * Self parachain location.
       **/
      selfLocation: StagingXcmV4Location & AugmentedConst<ApiType>;
      /**
       * The currency id of the Staking asset
       **/
      stakingCurrencyId: AcalaPrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xcmpQueue: {
      /**
       * The maximum number of inbound XCMP channels that can be suspended simultaneously.
       * 
       * Any further channel suspensions will fail and messages may get dropped without further
       * notice. Choosing a high value (1000) is okay; the trade-off that is described in
       * [`InboundXcmpSuspended`] still applies at that scale.
       **/
      maxInboundSuspended: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xTokens: {
      /**
       * Base XCM weight.
       * 
       * The actually weight for an XCM message is `T::BaseXcmWeight +
       * T::Weigher::weight(&msg)`.
       **/
      baseXcmWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The id of the RateLimiter.
       **/
      rateLimiterId: Null & AugmentedConst<ApiType>;
      /**
       * Self chain location.
       **/
      selfLocation: StagingXcmV4Location & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
