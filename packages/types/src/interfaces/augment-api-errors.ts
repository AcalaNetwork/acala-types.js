// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    acalaOracle: {
      /**
       * Feeder has already feeded at this block
       **/
      AlreadyFeeded: AugmentedError<ApiType>;
      /**
       * Sender does not have permission
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    aggregatedDex: {
      /**
       * Cannot swap.
       **/
      CannotSwap: AugmentedError<ApiType>;
      /**
       * The stable asset pool id of Taiga is invalid.
       **/
      InvalidPoolId: AugmentedError<ApiType>;
      /**
       * The SwapPath is invalid.
       **/
      InvalidSwapPath: AugmentedError<ApiType>;
      /**
       * The asset index of stable asset pool is invalid.
       **/
      InvalidTokenIndex: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    assetRegistry: {
      /**
       * AssetId exists
       **/
      AssetIdExisted: AugmentedError<ApiType>;
      /**
       * AssetId not exists
       **/
      AssetIdNotExists: AugmentedError<ApiType>;
      /**
       * The given location could not be used (e.g. because it cannot be expressed in the
       * desired version of XCM).
       **/
      BadLocation: AugmentedError<ApiType>;
      /**
       * Location existed
       **/
      LocationExisted: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    auction: {
      AuctionNotExist: AugmentedError<ApiType>;
      AuctionNotStarted: AugmentedError<ApiType>;
      BidNotAccepted: AugmentedError<ApiType>;
      InvalidBidPrice: AugmentedError<ApiType>;
      NoAvailableAuctionId: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    auctionManager: {
      /**
       * The auction dose not exist
       **/
      AuctionNotExists: AugmentedError<ApiType>;
      /**
       * The collateral auction is in reverse stage now
       **/
      InReverseStage: AugmentedError<ApiType>;
      /**
       * Invalid input amount
       **/
      InvalidAmount: AugmentedError<ApiType>;
      /**
       * Bid price is invalid
       **/
      InvalidBidPrice: AugmentedError<ApiType>;
      /**
       * Feed price is invalid
       **/
      InvalidFeedPrice: AugmentedError<ApiType>;
      /**
       * Must after system shutdown
       **/
      MustAfterShutdown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    authority: {
      /**
       * Call is not authorized.
       **/
      CallNotAuthorized: AugmentedError<ApiType>;
      /**
       * Failed to cancel a task.
       **/
      FailedToCancel: AugmentedError<ApiType>;
      /**
       * Failed to delay a task.
       **/
      FailedToDelay: AugmentedError<ApiType>;
      /**
       * Failed to fast track a task.
       **/
      FailedToFastTrack: AugmentedError<ApiType>;
      /**
       * Failed to schedule a task.
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Triggering the call is not permitted.
       **/
      TriggerCallNotPermitted: AugmentedError<ApiType>;
      /**
       * Call weight bound is wrong.
       **/
      WrongCallWeightBound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * The delta cannot be zero.
       **/
      DeltaZero: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      Expendability: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * The issuance cannot be modified since it is already deactivated.
       **/
      IssuanceDeactivated: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
       **/
      TooManyHolds: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed `MaxReserves`.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bounties: {
      /**
       * The bounty cannot be closed because it has active child bounties.
       **/
      HasActiveChildBounty: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedError<ApiType>;
      /**
       * Too many approvals are already queued.
       **/
      TooManyQueued: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    cdpEngine: {
      /**
       * System has already been shutdown
       **/
      AlreadyShutdown: AugmentedError<ApiType>;
      /**
       * The collateral ratio below the liquidation ratio
       **/
      BelowLiquidationRatio: AugmentedError<ApiType>;
      /**
       * The collateral ratio below the required collateral ratio
       **/
      BelowRequiredCollateralRatio: AugmentedError<ApiType>;
      /**
       * Remain collateral value in CDP below the dust amount.
       * Withdraw all collateral or leave more than the minimum.
       **/
      CollateralAmountBelowMinimum: AugmentedError<ApiType>;
      /**
       * Collateral ERC20 contract not found.
       **/
      CollateralContractNotFound: AugmentedError<ApiType>;
      /**
       * Collateral in CDP is not enough
       **/
      CollateralNotEnough: AugmentedError<ApiType>;
      /**
       * convert debit value to debit balance failed
       **/
      ConvertDebitBalanceFailed: AugmentedError<ApiType>;
      /**
       * The total debit value of specific collateral type already exceed the
       * hard cap
       **/
      ExceedDebitValueHardCap: AugmentedError<ApiType>;
      /**
       * Invalid collateral type
       **/
      InvalidCollateralType: AugmentedError<ApiType>;
      /**
       * Feed price is invalid
       **/
      InvalidFeedPrice: AugmentedError<ApiType>;
      /**
       * Invalid rate
       **/
      InvalidRate: AugmentedError<ApiType>;
      /**
       * Collateral liquidation failed.
       **/
      LiquidationFailed: AugmentedError<ApiType>;
      /**
       * Must after system shutdown
       **/
      MustAfterShutdown: AugmentedError<ApiType>;
      /**
       * The CDP must be safe status
       **/
      MustBeSafe: AugmentedError<ApiType>;
      /**
       * The CDP must be unsafe status
       **/
      MustBeUnsafe: AugmentedError<ApiType>;
      /**
       * No debit value in CDP so that it cannot be settled
       **/
      NoDebitValue: AugmentedError<ApiType>;
      /**
       * debit value decrement is not enough
       **/
      NotEnoughDebitDecrement: AugmentedError<ApiType>;
      /**
       * Remain debit value in CDP below the dust amount
       **/
      RemainDebitValueTooSmall: AugmentedError<ApiType>;
      /**
       * Exceeds `T::MaxLiquidationContracts`.
       **/
      TooManyLiquidationContracts: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    cdpTreasury: {
      /**
       * Cannot use collateral to swap stable
       **/
      CannotSwap: AugmentedError<ApiType>;
      /**
       * The collateral amount of CDP treasury is not enough
       **/
      CollateralNotEnough: AugmentedError<ApiType>;
      /**
       * The debit pool of CDP treasury is not enough
       **/
      DebitPoolNotEnough: AugmentedError<ApiType>;
      /**
       * The currency id is not DexShare type
       **/
      NotDexShare: AugmentedError<ApiType>;
      /**
       * The surplus pool of CDP treasury is not enough
       **/
      SurplusPoolNotEnough: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    collatorSelection: {
      AlreadyCandidate: AugmentedError<ApiType>;
      AlreadyInvulnerable: AugmentedError<ApiType>;
      BelowCandidatesMin: AugmentedError<ApiType>;
      InvalidProof: AugmentedError<ApiType>;
      MaxCandidatesExceeded: AugmentedError<ApiType>;
      MaxInvulnerablesExceeded: AugmentedError<ApiType>;
      NotCandidate: AugmentedError<ApiType>;
      NothingToWithdraw: AugmentedError<ApiType>;
      NotNonCandidate: AugmentedError<ApiType>;
      Permission: AugmentedError<ApiType>;
      RequireSessionKey: AugmentedError<ApiType>;
      StillLocked: AugmentedError<ApiType>;
      Unknown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    currencies: {
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Deposit result is not expected
       **/
      DepositFailed: AugmentedError<ApiType>;
      /**
       * Erc20 invalid operation
       **/
      Erc20InvalidOperation: AugmentedError<ApiType>;
      /**
       * EVM account not found
       **/
      EvmAccountNotFound: AugmentedError<ApiType>;
      /**
       * Real origin not found
       **/
      RealOriginNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * The preimage does not exist.
       **/
      PreimageNotExist: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Maximum number of items reached.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Voting period too low
       **/
      VotingPeriodLow: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dex: {
      /**
       * Trading pair is already Enabled
       **/
      AlreadyEnabled: AugmentedError<ApiType>;
      /**
       * The Asset unregistered.
       **/
      AssetUnregistered: AugmentedError<ApiType>;
      /**
       * Cannot swap
       **/
      CannotSwap: AugmentedError<ApiType>;
      /**
       * Supply amount is more than max_supply_amount
       **/
      ExcessiveSupplyAmount: AugmentedError<ApiType>;
      /**
       * Liquidity is not enough
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Target amount is less to min_target_amount
       **/
      InsufficientTargetAmount: AugmentedError<ApiType>;
      /**
       * The increment of provision is invalid
       **/
      InvalidContributionIncrement: AugmentedError<ApiType>;
      /**
       * Invalid currency id
       **/
      InvalidCurrencyId: AugmentedError<ApiType>;
      /**
       * The increment of liquidity is invalid
       **/
      InvalidLiquidityIncrement: AugmentedError<ApiType>;
      /**
       * The trading path is invalid
       **/
      InvalidTradingPath: AugmentedError<ApiType>;
      /**
       * Invalid trading path length
       **/
      InvalidTradingPathLength: AugmentedError<ApiType>;
      /**
       * The swap dosen't meet the invariant check
       **/
      InvariantCheckFailed: AugmentedError<ApiType>;
      /**
       * Trading pair must be in Disabled status
       **/
      MustBeDisabled: AugmentedError<ApiType>;
      /**
       * Trading pair must be in Enabled status
       **/
      MustBeEnabled: AugmentedError<ApiType>;
      /**
       * Trading pair must be in Provisioning status
       **/
      MustBeProvisioning: AugmentedError<ApiType>;
      /**
       * This trading pair is not allowed to be listed
       **/
      NotAllowedList: AugmentedError<ApiType>;
      /**
       * Not allowed to refund provision
       **/
      NotAllowedRefund: AugmentedError<ApiType>;
      /**
       * Trading pair is still provisioning
       **/
      StillProvisioning: AugmentedError<ApiType>;
      /**
       * The liquidity withdrawn is unacceptable
       **/
      UnacceptableLiquidityWithdrawn: AugmentedError<ApiType>;
      /**
       * The share increment is unacceptable
       **/
      UnacceptableShareIncrement: AugmentedError<ApiType>;
      /**
       * The Provision is unqualified to be converted to `Enabled`
       **/
      UnqualifiedProvision: AugmentedError<ApiType>;
      /**
       * The supply amount is zero
       **/
      ZeroSupplyAmount: AugmentedError<ApiType>;
      /**
       * The target amount is zero
       **/
      ZeroTargetAmount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dexOracle: {
      /**
       * Already enabled average price for this trading pair.
       **/
      AveragePriceAlreadyEnabled: AugmentedError<ApiType>;
      /**
       * The trading pair must be enabled average price.
       **/
      AveragePriceMustBeEnabled: AugmentedError<ApiType>;
      /**
       * The interval is zero.
       **/
      IntervalIsZero: AugmentedError<ApiType>;
      /**
       * The currency id is invalid.
       **/
      InvalidCurrencyId: AugmentedError<ApiType>;
      /**
       * The liquidity pool is invalid.
       **/
      InvalidPool: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    earning: {
      BelowMinBondThreshold: AugmentedError<ApiType>;
      MaxUnlockChunksExceeded: AugmentedError<ApiType>;
      NotAllowed: AugmentedError<ApiType>;
      NotBonded: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    emergencyShutdown: {
      /**
       * System has already been shutdown
       **/
      AlreadyShutdown: AugmentedError<ApiType>;
      /**
       * Final redemption is still not opened
       **/
      CanNotRefund: AugmentedError<ApiType>;
      /**
       * Exist potential surplus, means settlement has not been completed
       **/
      ExistPotentialSurplus: AugmentedError<ApiType>;
      /**
       * Exist unhandled debit, means settlement has not been completed
       **/
      ExistUnhandledDebit: AugmentedError<ApiType>;
      /**
       * Must after system shutdown
       **/
      MustAfterShutdown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    evm: {
      /**
       * Address not mapped
       **/
      AddressNotMapped: AugmentedError<ApiType>;
      /**
       * Contract cannot be killed due to reference count
       **/
      CannotKillContract: AugmentedError<ApiType>;
      /**
       * Charge fee failed
       **/
      ChargeFeeFailed: AugmentedError<ApiType>;
      /**
       * Charge storage failed
       **/
      ChargeStorageFailed: AugmentedError<ApiType>;
      /**
       * Contract already existed
       **/
      ContractAlreadyExisted: AugmentedError<ApiType>;
      /**
       * Contract already published
       **/
      ContractAlreadyPublished: AugmentedError<ApiType>;
      /**
       * Contract development is already enabled
       **/
      ContractDevelopmentAlreadyEnabled: AugmentedError<ApiType>;
      /**
       * Contract development is not enabled
       **/
      ContractDevelopmentNotEnabled: AugmentedError<ApiType>;
      /**
       * Contract exceeds max code size
       **/
      ContractExceedsMaxCodeSize: AugmentedError<ApiType>;
      /**
       * Contract not found
       **/
      ContractNotFound: AugmentedError<ApiType>;
      /**
       * Invalid decimals
       **/
      InvalidDecimals: AugmentedError<ApiType>;
      /**
       * No permission
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Caller is not externally owned account
       **/
      NotEOA: AugmentedError<ApiType>;
      /**
       * Storage usage exceeds storage limit
       **/
      OutOfStorage: AugmentedError<ApiType>;
      /**
       * Reserve storage failed
       **/
      ReserveStorageFailed: AugmentedError<ApiType>;
      /**
       * Strict call failed
       **/
      StrictCallFailed: AugmentedError<ApiType>;
      /**
       * Unreserve storage failed
       **/
      UnreserveStorageFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    evmAccounts: {
      /**
       * AccountId has mapped
       **/
      AccountIdHasMapped: AugmentedError<ApiType>;
      /**
       * Bad signature
       **/
      BadSignature: AugmentedError<ApiType>;
      /**
       * Eth address has mapped
       **/
      EthAddressHasMapped: AugmentedError<ApiType>;
      /**
       * Invalid signature
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Account ref count is not zero
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    evmBridge: {
      /**
       * Execution error
       **/
      ExecutionError: AugmentedError<ApiType>;
      /**
       * Execution failed
       **/
      ExecutionFail: AugmentedError<ApiType>;
      /**
       * Execution fatal
       **/
      ExecutionFatal: AugmentedError<ApiType>;
      /**
       * Execution reverted
       **/
      ExecutionRevert: AugmentedError<ApiType>;
      /**
       * Invalid return value
       **/
      InvalidReturnValue: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    financialCouncil: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    financialCouncilMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    generalCouncil: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    generalCouncilMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    homa: {
      /**
       * The mint amount is below the threshold.
       **/
      BelowMintThreshold: AugmentedError<ApiType>;
      /**
       * The redeem amount to request is below the threshold.
       **/
      BelowRedeemThreshold: AugmentedError<ApiType>;
      /**
       * The fast match cannot be matched completely.
       **/
      CannotCompletelyFastMatch: AugmentedError<ApiType>;
      /**
       * The mint will cause staking currency of Homa exceed the soft cap.
       **/
      ExceededStakingCurrencySoftCap: AugmentedError<ApiType>;
      /**
       * Redeem request is not allowed to be fast matched.
       **/
      FastMatchIsNotAllowed: AugmentedError<ApiType>;
      /**
       * UnclaimedRedemption is not enough, this error is not expected.
       **/
      InsufficientUnclaimedRedemption: AugmentedError<ApiType>;
      /**
       * Invalid last era bumped block config
       **/
      InvalidLastEraBumpedBlock: AugmentedError<ApiType>;
      InvalidRate: AugmentedError<ApiType>;
      /**
       * The era index to bump is outdated, must be greater than RelayChainCurrentEra
       **/
      OutdatedEraIndex: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    homaCouncil: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    homaCouncilMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    homaValidatorList: {
      BelowMinBondAmount: AugmentedError<ApiType>;
      FrozenValidator: AugmentedError<ApiType>;
      UnbondingExists: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    honzon: {
      AlreadyAuthorized: AugmentedError<ApiType>;
      AlreadyShutdown: AugmentedError<ApiType>;
      AuthorizationNotExists: AugmentedError<ApiType>;
      NoPermission: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    incentives: {
      /**
       * Invalid currency id
       **/
      InvalidCurrencyId: AugmentedError<ApiType>;
      /**
       * Invalid pool id
       **/
      InvalidPoolId: AugmentedError<ApiType>;
      /**
       * Invalid rate
       **/
      InvalidRate: AugmentedError<ApiType>;
      /**
       * Share amount is not enough
       **/
      NotEnough: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    loans: {
      AmountConvertFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    messageQueue: {
      /**
       * The message was already processed and cannot be processed again.
       **/
      AlreadyProcessed: AugmentedError<ApiType>;
      /**
       * There is temporarily not enough weight to continue servicing messages.
       **/
      InsufficientWeight: AugmentedError<ApiType>;
      /**
       * The referenced message could not be found.
       **/
      NoMessage: AugmentedError<ApiType>;
      /**
       * Page to be reaped does not exist.
       **/
      NoPage: AugmentedError<ApiType>;
      /**
       * Page is not reapable because it has items remaining to be processed and is not old
       * enough.
       **/
      NotReapable: AugmentedError<ApiType>;
      /**
       * The message is queued for future execution.
       **/
      Queued: AugmentedError<ApiType>;
      /**
       * The queue is paused and no message can be executed from it.
       * 
       * This can change at any time and may resolve in the future by re-trying.
       **/
      QueuePaused: AugmentedError<ApiType>;
      /**
       * Another call is in progress and needs to finish before this call can happen.
       **/
      RecursiveDisallowed: AugmentedError<ApiType>;
      /**
       * This message is temporarily unprocessable.
       * 
       * Such errors are expected, but not guaranteed, to resolve themselves eventually through
       * retrying.
       **/
      TemporarilyUnprocessable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    nft: {
      /**
       * Attributes too large
       **/
      AttributesTooLarge: AugmentedError<ApiType>;
      /**
       * Can not destroy class
       * Total issuance is not 0
       **/
      CannotDestroyClass: AugmentedError<ApiType>;
      /**
       * ClassId not found
       **/
      ClassIdNotFound: AugmentedError<ApiType>;
      /**
       * Cannot perform mutable action
       **/
      Immutable: AugmentedError<ApiType>;
      /**
       * The given token ID is not correct
       **/
      IncorrectTokenId: AugmentedError<ApiType>;
      /**
       * Quantity is invalid. need >= 1
       **/
      InvalidQuantity: AugmentedError<ApiType>;
      /**
       * Property of class don't support burn
       **/
      NonBurnable: AugmentedError<ApiType>;
      /**
       * Property of class don't support mint
       **/
      NonMintable: AugmentedError<ApiType>;
      /**
       * Property of class don't support transfer
       **/
      NonTransferable: AugmentedError<ApiType>;
      /**
       * The operator is not the owner of the token and has no permission
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * TokenId not found
       **/
      TokenIdNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    nomineesElection: {
      BelowMinBondThreshold: AugmentedError<ApiType>;
      InvalidNominee: AugmentedError<ApiType>;
      InvalidTargetsLength: AugmentedError<ApiType>;
      MaxUnlockChunksExceeded: AugmentedError<ApiType>;
      NominateesCountExceeded: AugmentedError<ApiType>;
      NotBonded: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    operatorMembershipAcala: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ormlNFT: {
      /**
       * Can not destroy class
       * Total issuance is not 0
       **/
      CannotDestroyClass: AugmentedError<ApiType>;
      /**
       * Class not found
       **/
      ClassNotFound: AugmentedError<ApiType>;
      /**
       * Failed because the Maximum amount of metadata was exceeded
       **/
      MaxMetadataExceeded: AugmentedError<ApiType>;
      /**
       * No available class ID
       **/
      NoAvailableClassId: AugmentedError<ApiType>;
      /**
       * No available token ID
       **/
      NoAvailableTokenId: AugmentedError<ApiType>;
      /**
       * The operator is not the owner of the token and has no permission
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Token(ClassId, TokenId) not found
       **/
      TokenNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ormlXcm: {
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * The message and destination was recognized as being reachable but
       * the operation could not be completed.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * The message and destination combination was not recognized as being
       * reachable.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parachainSystem: {
      /**
       * The inherent which supplies the host configuration did not run this block.
       **/
      HostConfigurationNotAvailable: AugmentedError<ApiType>;
      /**
       * No code upgrade has been authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * No validation function upgrade is currently scheduled.
       **/
      NotScheduled: AugmentedError<ApiType>;
      /**
       * Attempt to upgrade validation function while existing upgrade pending.
       **/
      OverlappingUpgrades: AugmentedError<ApiType>;
      /**
       * Polkadot currently prohibits this parachain from upgrading its validation function.
       **/
      ProhibitedByPolkadot: AugmentedError<ApiType>;
      /**
       * The supplied validation function has compiled into a blob larger than Polkadot is
       * willing to run.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * The given code upgrade has not been authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the validation data did not run this block.
       **/
      ValidationDataNotAvailable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parameters: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    polkadotXcm: {
      /**
       * The given account is not an identifiable sovereign account for any location.
       **/
      AccountNotSovereign: AugmentedError<ApiType>;
      /**
       * The location is invalid since it already has a subscription from us.
       **/
      AlreadySubscribed: AugmentedError<ApiType>;
      /**
       * The given location could not be used (e.g. because it cannot be expressed in the
       * desired version of XCM).
       **/
      BadLocation: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not check-out the assets for teleportation to the destination chain.
       **/
      CannotCheckOutTeleport: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `Location` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * The assets to be sent are empty.
       **/
      Empty: AugmentedError<ApiType>;
      /**
       * The operation required fees to be paid which the initiator could not meet.
       **/
      FeesNotMet: AugmentedError<ApiType>;
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      /**
       * The unlock operation cannot succeed because there are still consumers of the lock.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Invalid non-concrete asset.
       **/
      InvalidAssetNotConcrete: AugmentedError<ApiType>;
      /**
       * Invalid asset, reserve chain could not be determined for it.
       **/
      InvalidAssetUnknownReserve: AugmentedError<ApiType>;
      /**
       * Invalid asset, do not support remote asset reserves with different fees reserves.
       **/
      InvalidAssetUnsupportedReserve: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * Local XCM execution incomplete.
       **/
      LocalExecutionIncomplete: AugmentedError<ApiType>;
      /**
       * A remote lock with the corresponding data could not be found.
       **/
      LockNotFound: AugmentedError<ApiType>;
      /**
       * The owner does not own (all) of the asset that they wish to do the operation on.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * The referenced subscription could not be found.
       **/
      NoSubscription: AugmentedError<ApiType>;
      /**
       * There was some other issue (i.e. not to do with routing) in sending the message.
       * Perhaps a lack of space for buffering the message.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Too many assets have been attempted for transfer.
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * The asset owner has too many locks on the asset.
       **/
      TooManyLocks: AugmentedError<ApiType>;
      /**
       * Too many assets with different reserve locations have been attempted for transfer.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * The desired destination was unreachable, generally because there is a no way of routing
       * to it.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * Too few hashes were requested to be upgraded (i.e. zero).
       **/
      TooFew: AugmentedError<ApiType>;
      /**
       * More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    prices: {
      /**
       * Failed to access price
       **/
      AccessPriceFailed: AugmentedError<ApiType>;
      /**
       * There's no locked price
       **/
      NoLockedPrice: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    rewards: {
      /**
       * Can split only less than share
       **/
      CanSplitOnlyLessThanShare: AugmentedError<ApiType>;
      /**
       * Pool does not exist
       **/
      PoolDoesNotExist: AugmentedError<ApiType>;
      /**
       * Share amount below minimal
       **/
      ShareBelowMinimal: AugmentedError<ApiType>;
      /**
       * Account does not have share
       **/
      ShareDoesNotExist: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sessionManager: {
      /**
       * Failed to estimate next session.
       **/
      EstimateNextSessionFailed: AugmentedError<ApiType>;
      /**
       * The duration is invalid.
       **/
      InvalidDuration: AugmentedError<ApiType>;
      /**
       * The session is invalid.
       **/
      InvalidSession: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    stableAsset: {
      ArgumentsError: AugmentedError<ApiType>;
      ArgumentsMismatch: AugmentedError<ApiType>;
      InconsistentStorage: AugmentedError<ApiType>;
      InvalidPoolAsset: AugmentedError<ApiType>;
      InvalidPoolValue: AugmentedError<ApiType>;
      Math: AugmentedError<ApiType>;
      MintUnderMin: AugmentedError<ApiType>;
      PoolNotFound: AugmentedError<ApiType>;
      RedeemOverMax: AugmentedError<ApiType>;
      RedeemUnderMin: AugmentedError<ApiType>;
      SwapUnderMin: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account.
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * A multi-block migration is ongoing and prevents the current code from being replaced.
       **/
      MultiBlockMigrationsOngoing: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * No upgrade authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * The submitted code is not authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCommitteeMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tips: {
      /**
       * The tip was already found/started.
       **/
      AlreadyKnown: AugmentedError<ApiType>;
      /**
       * The tip given was too generous.
       **/
      MaxTipAmountExceeded: AugmentedError<ApiType>;
      /**
       * The account attempting to retract the tip is not the finder of the tip.
       **/
      NotFinder: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because there are not enough tippers yet.
       **/
      StillOpen: AugmentedError<ApiType>;
      /**
       * The tip hash is unknown.
       **/
      UnknownTip: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tokens: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Failed because the maximum locks was exceeded
       **/
      MaxLocksExceeded: AugmentedError<ApiType>;
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    transactionPause: {
      /**
       * can not pause
       **/
      CannotPause: AugmentedError<ApiType>;
      /**
       * invalid character encoding
       **/
      InvalidCharacter: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    transactionPayment: {
      /**
       * Charge fee pool is already exist
       **/
      ChargeFeePoolAlreadyExisted: AugmentedError<ApiType>;
      /**
       * Dex swap pool is not available now
       **/
      DexNotAvailable: AugmentedError<ApiType>;
      /**
       * The balance is invalid
       **/
      InvalidBalance: AugmentedError<ApiType>;
      /**
       * Can't find rate by the supply token
       **/
      InvalidRate: AugmentedError<ApiType>;
      /**
       * The swap path is invalid
       **/
      InvalidSwapPath: AugmentedError<ApiType>;
      /**
       * Can't find the token info in the charge fee pool
       **/
      InvalidToken: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The payment has already been attempted.
       **/
      AlreadyAttempted: AugmentedError<ApiType>;
      /**
       * The spend is not yet eligible for payout.
       **/
      EarlyPayout: AugmentedError<ApiType>;
      /**
       * The balance of the asset kind is not convertible to the balance of the native asset.
       **/
      FailedToConvertBalance: AugmentedError<ApiType>;
      /**
       * The payment has neither failed nor succeeded yet.
       **/
      Inconclusive: AugmentedError<ApiType>;
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal, bounty or spend at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * The payout was not yet attempted/claimed.
       **/
      NotAttempted: AugmentedError<ApiType>;
      /**
       * There was some issue with the mechanism of payment.
       **/
      PayoutError: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * The spend has expired and cannot be claimed.
       **/
      SpendExpired: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    unknownTokens: {
      /**
       * The operation will cause balance to overflow.
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * The balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Unhandled asset.
       **/
      UnhandledAsset: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * The vested transfer amount is too low
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * Insufficient amount of balance to lock
       **/
      InsufficientBalanceToLock: AugmentedError<ApiType>;
      /**
       * Failed because the maximum vesting schedules was exceeded
       **/
      MaxVestingSchedulesExceeded: AugmentedError<ApiType>;
      /**
       * This account have too many vesting schedules
       **/
      TooManyVestingSchedules: AugmentedError<ApiType>;
      /**
       * Vesting period is zero
       **/
      ZeroVestingPeriod: AugmentedError<ApiType>;
      /**
       * Number of vests is zero
       **/
      ZeroVestingPeriodCount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xcmInterface: {
      /**
       * The xcm operation have failed
       **/
      XcmFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xcmpQueue: {
      /**
       * The execution is already resumed.
       **/
      AlreadyResumed: AugmentedError<ApiType>;
      /**
       * The execution is already suspended.
       **/
      AlreadySuspended: AugmentedError<ApiType>;
      /**
       * Setting the queue config failed since one of its values was invalid.
       **/
      BadQueueConfig: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xTokens: {
      /**
       * Asset has no reserve location.
       **/
      AssetHasNoReserve: AugmentedError<ApiType>;
      /**
       * The specified index does not exist in a Assets struct.
       **/
      AssetIndexNonExistent: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the
       * destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `Location` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * We tried sending distinct asset and fee but they have different
       * reserve chains.
       **/
      DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
      /**
       * Fee is not enough.
       **/
      FeeNotEnough: AugmentedError<ApiType>;
      /**
       * Could not get ancestry of asset reserve location.
       **/
      InvalidAncestry: AugmentedError<ApiType>;
      /**
       * The Asset is invalid.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Invalid transfer destination.
       **/
      InvalidDest: AugmentedError<ApiType>;
      /**
       * MinXcmFee not registered for certain reserve location
       **/
      MinXcmFeeNotDefined: AugmentedError<ApiType>;
      /**
       * Not cross-chain transfer.
       **/
      NotCrossChainTransfer: AugmentedError<ApiType>;
      /**
       * Currency is not cross-chain transferable.
       **/
      NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
      /**
       * Not supported Location
       **/
      NotSupportedLocation: AugmentedError<ApiType>;
      /**
       * Asset transfer is limited by RateLimiter.
       **/
      RateLimited: AugmentedError<ApiType>;
      /**
       * The number of assets to be sent is over the maximum.
       **/
      TooManyAssetsBeingSent: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * XCM execution failed.
       **/
      XcmExecutionFailed: AugmentedError<ApiType>;
      /**
       * The transfering asset amount is zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * The fee is zero.
       **/
      ZeroFee: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
