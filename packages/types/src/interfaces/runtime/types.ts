// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AuthoritysOriginId, CurrencyId } from '@acala-network/types/interfaces/primitives';
import type { Price } from '@acala-network/types/interfaces/support';
import type { GenericAccountId32, GenericAccountId33, GenericAccountIndex, GenericBlock, GenericCall, GenericConsensusEngineId, GenericEthereumAccountId, GenericLookupSource, GenericMultiAddress, StorageKey } from '@polkadot/types';
import type { Bytes, Compact, DoNotConstruct, Enum, Int, Null, Option, Struct, Text, U256, U8aFixed, UInt, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { Signature } from '@polkadot/types/interfaces/extrinsics';
import type { RelayChainBlockNumber } from '@polkadot/types/interfaces/parachains';
import type { Event, SystemOrigin } from '@polkadot/types/interfaces/system';

/** @name AccountId */
export interface AccountId extends AccountId32 {}

/** @name AccountId20 */
export interface AccountId20 extends GenericEthereumAccountId {}

/** @name AccountId32 */
export interface AccountId32 extends GenericAccountId32 {}

/** @name AccountId33 */
export interface AccountId33 extends GenericAccountId33 {}

/** @name AccountIdOf */
export interface AccountIdOf extends AccountId {}

/** @name AccountIndex */
export interface AccountIndex extends GenericAccountIndex {}

/** @name Address */
export interface Address extends MultiAddress {}

/** @name AsOriginId */
export interface AsOriginId extends AuthoritysOriginId {}

/** @name AssetId */
export interface AssetId extends u32 {}

/** @name AtLeast64BitUnsigned */
export interface AtLeast64BitUnsigned extends u128 {}

/** @name Balance */
export interface Balance extends UInt {}

/** @name BalanceOf */
export interface BalanceOf extends Balance {}

/** @name Block */
export interface Block extends GenericBlock {}

/** @name BlockNumber */
export interface BlockNumber extends u32 {}

/** @name BlockNumberFor */
export interface BlockNumberFor extends BlockNumber {}

/** @name BlockNumberOf */
export interface BlockNumberOf extends BlockNumber {}

/** @name Call */
export interface Call extends GenericCall {}

/** @name CallHash */
export interface CallHash extends Hash {}

/** @name CallHashOf */
export interface CallHashOf extends CallHash {}

/** @name CallTrace */
export interface CallTrace extends Struct {
  readonly type: CallType;
  readonly from: H160;
  readonly to: H160;
  readonly input: Bytes;
  readonly value: U256;
  readonly gas: Compact<u64>;
  readonly gasUsed: Compact<u64>;
  readonly output: Option<Bytes>;
  readonly error: Option<Text>;
  readonly revertReason: Option<Text>;
  readonly depth: Compact<u32>;
  readonly logs: Vec<LogTrace>;
  readonly calls: Vec<CallTrace>;
}

/** @name CallType */
export interface CallType extends Enum {
  readonly isCall: boolean;
  readonly isCallcode: boolean;
  readonly isStaticcall: boolean;
  readonly isDelegatecall: boolean;
  readonly isCreate: boolean;
  readonly isSuicide: boolean;
  readonly type: 'Call' | 'Callcode' | 'Staticcall' | 'Delegatecall' | 'Create' | 'Suicide';
}

/** @name ChangesTrieConfiguration */
export interface ChangesTrieConfiguration extends Struct {
  readonly digestInterval: u32;
  readonly digestLevels: u32;
}

/** @name ChangesTrieSignal */
export interface ChangesTrieSignal extends Enum {
  readonly isNewConfiguration: boolean;
  readonly asNewConfiguration: Option<ChangesTrieConfiguration>;
  readonly type: 'NewConfiguration';
}

/** @name CodecHash */
export interface CodecHash extends Hash {}

/** @name Consensus */
export interface Consensus extends ITuple<[ConsensusEngineId, Bytes]> {}

/** @name ConsensusEngineId */
export interface ConsensusEngineId extends GenericConsensusEngineId {}

/** @name CrateVersion */
export interface CrateVersion extends Struct {
  readonly major: u16;
  readonly minor: u8;
  readonly patch: u8;
}

/** @name Digest */
export interface Digest extends Struct {
  readonly logs: Vec<DigestItem>;
}

/** @name DigestItem */
export interface DigestItem extends Enum {
  readonly isOther: boolean;
  readonly asOther: Bytes;
  readonly isAuthoritiesChange: boolean;
  readonly asAuthoritiesChange: Vec<AuthorityId>;
  readonly isChangesTrieRoot: boolean;
  readonly asChangesTrieRoot: Hash;
  readonly isSealV0: boolean;
  readonly asSealV0: SealV0;
  readonly isConsensus: boolean;
  readonly asConsensus: Consensus;
  readonly isSeal: boolean;
  readonly asSeal: Seal;
  readonly isPreRuntime: boolean;
  readonly asPreRuntime: PreRuntime;
  readonly isChangesTrieSignal: boolean;
  readonly asChangesTrieSignal: ChangesTrieSignal;
  readonly isRuntimeEnvironmentUpdated: boolean;
  readonly type: 'Other' | 'AuthoritiesChange' | 'ChangesTrieRoot' | 'SealV0' | 'Consensus' | 'Seal' | 'PreRuntime' | 'ChangesTrieSignal' | 'RuntimeEnvironmentUpdated';
}

/** @name EncodedJustification */
export interface EncodedJustification extends Bytes {}

/** @name ExtrinsicInclusionMode */
export interface ExtrinsicInclusionMode extends Enum {
  readonly isAllExtrinsics: boolean;
  readonly isOnlyInherents: boolean;
  readonly type: 'AllExtrinsics' | 'OnlyInherents';
}

/** @name ExtrinsicsWeight */
export interface ExtrinsicsWeight extends Struct {
  readonly normal: Weight;
  readonly operational: Weight;
}

/** @name Fixed128 */
export interface Fixed128 extends Int {}

/** @name Fixed64 */
export interface Fixed64 extends Int {}

/** @name FixedI128 */
export interface FixedI128 extends Int {}

/** @name FixedI64 */
export interface FixedI64 extends Int {}

/** @name FixedU128 */
export interface FixedU128 extends UInt {}

/** @name FixedU64 */
export interface FixedU64 extends UInt {}

/** @name H1024 */
export interface H1024 extends U8aFixed {}

/** @name H128 */
export interface H128 extends U8aFixed {}

/** @name H160 */
export interface H160 extends U8aFixed {}

/** @name H2048 */
export interface H2048 extends U8aFixed {}

/** @name H256 */
export interface H256 extends U8aFixed {}

/** @name H32 */
export interface H32 extends U8aFixed {}

/** @name H512 */
export interface H512 extends U8aFixed {}

/** @name H64 */
export interface H64 extends U8aFixed {}

/** @name Hash */
export interface Hash extends H256 {}

/** @name Header */
export interface Header extends Struct {
  readonly parentHash: Hash;
  readonly number: Compact<BlockNumber>;
  readonly stateRoot: Hash;
  readonly extrinsicsRoot: Hash;
  readonly digest: Digest;
}

/** @name HeaderPartial */
export interface HeaderPartial extends Struct {
  readonly parentHash: Hash;
  readonly number: BlockNumber;
}

/** @name I32F32 */
export interface I32F32 extends Int {}

/** @name Index */
export interface Index extends u32 {}

/** @name IndicesLookupSource */
export interface IndicesLookupSource extends GenericLookupSource {}

/** @name Justification */
export interface Justification extends ITuple<[ConsensusEngineId, EncodedJustification]> {}

/** @name Justifications */
export interface Justifications extends Vec<Justification> {}

/** @name KeyTypeId */
export interface KeyTypeId extends u32 {}

/** @name KeyValue */
export interface KeyValue extends ITuple<[StorageKey, StorageData]> {}

/** @name LockIdentifier */
export interface LockIdentifier extends U8aFixed {}

/** @name LogTrace */
export interface LogTrace extends Enum {
  readonly isLog: boolean;
  readonly asLog: LogTraceLog;
  readonly isSLoad: boolean;
  readonly asSLoad: SLoad;
  readonly isSStore: boolean;
  readonly asSStore: SStore;
  readonly type: 'Log' | 'SLoad' | 'SStore';
}

/** @name LogTraceLog */
export interface LogTraceLog extends Struct {
  readonly address: H160;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
}

/** @name LookupSource */
export interface LookupSource extends MultiAddress {}

/** @name LookupTarget */
export interface LookupTarget extends AccountId {}

/** @name ModuleId */
export interface ModuleId extends LockIdentifier {}

/** @name Moment */
export interface Moment extends UInt {}

/** @name MultiAddress */
export interface MultiAddress extends GenericMultiAddress {}

/** @name MultiSigner */
export interface MultiSigner extends Enum {
  readonly isEd25519: boolean;
  readonly asEd25519: U8aFixed;
  readonly isSr25519: boolean;
  readonly asSr25519: U8aFixed;
  readonly isEcdsa: boolean;
  readonly asEcdsa: U8aFixed;
  readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
}

/** @name OpaqueCall */
export interface OpaqueCall extends Bytes {}

/** @name OpcodeConfig */
export interface OpcodeConfig extends Struct {
  readonly page: u32;
  readonly pageSize: u32;
  readonly disableStack: bool;
  readonly enableMemory: bool;
}

/** @name OracleKey */
export interface OracleKey extends CurrencyId {}

/** @name OracleValue */
export interface OracleValue extends Price {}

/** @name Origin */
export interface Origin extends DoNotConstruct {}

/** @name OriginCaller */
export interface OriginCaller extends Enum {
  readonly isSystem: boolean;
  readonly asSystem: SystemOrigin;
  readonly type: 'System';
}

/** @name PalletId */
export interface PalletId extends LockIdentifier {}

/** @name PalletsOrigin */
export interface PalletsOrigin extends OriginCaller {}

/** @name PalletVersion */
export interface PalletVersion extends Struct {
  readonly major: u16;
  readonly minor: u8;
  readonly patch: u8;
}

/** @name Pays */
export interface Pays extends Enum {
  readonly isYes: boolean;
  readonly isNo: boolean;
  readonly type: 'Yes' | 'No';
}

/** @name Perbill */
export interface Perbill extends UInt {}

/** @name Percent */
export interface Percent extends UInt {}

/** @name Permill */
export interface Permill extends UInt {}

/** @name Perquintill */
export interface Perquintill extends UInt {}

/** @name PerU16 */
export interface PerU16 extends UInt {}

/** @name Phantom */
export interface Phantom extends Null {}

/** @name PhantomData */
export interface PhantomData extends Null {}

/** @name PreRuntime */
export interface PreRuntime extends ITuple<[ConsensusEngineId, Bytes]> {}

/** @name ProxyType */
export interface ProxyType extends Enum {
  readonly isAny: boolean;
  readonly isCancelProxy: boolean;
  readonly isGovernance: boolean;
  readonly isAuction: boolean;
  readonly isSwap: boolean;
  readonly isLoan: boolean;
  readonly type: 'Any' | 'CancelProxy' | 'Governance' | 'Auction' | 'Swap' | 'Loan';
}

/** @name RelayChainBlockNumberOf */
export interface RelayChainBlockNumberOf extends RelayChainBlockNumber {}

/** @name Releases */
export interface Releases extends Enum {
  readonly isV1: boolean;
  readonly isV2: boolean;
  readonly isV3: boolean;
  readonly isV4: boolean;
  readonly isV5: boolean;
  readonly isV6: boolean;
  readonly isV7: boolean;
  readonly isV8: boolean;
  readonly isV9: boolean;
  readonly isV10: boolean;
  readonly type: 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6' | 'V7' | 'V8' | 'V9' | 'V10';
}

/** @name RuntimeCall */
export interface RuntimeCall extends Call {}

/** @name RuntimeDbWeight */
export interface RuntimeDbWeight extends Struct {
  readonly read: Weight;
  readonly write: Weight;
}

/** @name RuntimeEvent */
export interface RuntimeEvent extends Event {}

/** @name Seal */
export interface Seal extends ITuple<[ConsensusEngineId, Bytes]> {}

/** @name SealV0 */
export interface SealV0 extends ITuple<[u64, Signature]> {}

/** @name SignedBlock */
export interface SignedBlock extends SignedBlockWithJustifications {}

/** @name SignedBlockWithJustification */
export interface SignedBlockWithJustification extends Struct {
  readonly block: Block;
  readonly justification: Option<EncodedJustification>;
}

/** @name SignedBlockWithJustifications */
export interface SignedBlockWithJustifications extends Struct {
  readonly block: Block;
  readonly justifications: Option<Justifications>;
}

/** @name SLoad */
export interface SLoad extends Struct {
  readonly address: H160;
  readonly index: H256;
  readonly value: H256;
}

/** @name Slot */
export interface Slot extends u64 {}

/** @name SlotDuration */
export interface SlotDuration extends u64 {}

/** @name SStore */
export interface SStore extends Struct {
  readonly address: H160;
  readonly index: H256;
  readonly value: H256;
}

/** @name StableAssetPoolId */
export interface StableAssetPoolId extends u32 {}

/** @name Step */
export interface Step extends Struct {
  readonly op: u8;
  readonly pc: Compact<u32>;
  readonly depth: Compact<u32>;
  readonly gas: Compact<u64>;
  readonly stack: Vec<Bytes>;
  readonly memory: Option<Vec<Bytes>>;
}

/** @name StorageData */
export interface StorageData extends Bytes {}

/** @name StorageInfo */
export interface StorageInfo extends Struct {
  readonly palletName: Bytes;
  readonly storage_name: Bytes;
  readonly prefix: Bytes;
  readonly maxValues: Option<u32>;
  readonly maxSize: Option<u32>;
}

/** @name StorageProof */
export interface StorageProof extends Struct {
  readonly trieNodes: Vec<Bytes>;
}

/** @name TraceOutcome */
export interface TraceOutcome extends Enum {
  readonly isCalls: boolean;
  readonly asCalls: Vec<CallTrace>;
  readonly isSteps: boolean;
  readonly asSteps: Vec<Step>;
  readonly type: 'Calls' | 'Steps';
}

/** @name TracerConfig */
export interface TracerConfig extends Enum {
  readonly isCallTracer: boolean;
  readonly isOpcodeTracer: boolean;
  readonly asOpcodeTracer: OpcodeConfig;
  readonly type: 'CallTracer' | 'OpcodeTracer';
}

/** @name TransactionInfo */
export interface TransactionInfo extends Struct {
  readonly chunkRoot: H256;
  readonly contentHash: H256;
  readonly dataSize: u32;
  readonly blockChunks: u32;
}

/** @name TransactionLongevity */
export interface TransactionLongevity extends u64 {}

/** @name TransactionPriority */
export interface TransactionPriority extends u64 {}

/** @name TransactionStorageProof */
export interface TransactionStorageProof extends Struct {
  readonly chunk: Bytes;
  readonly proof: Vec<Bytes>;
}

/** @name TransactionTag */
export interface TransactionTag extends Bytes {}

/** @name U32F32 */
export interface U32F32 extends UInt {}

/** @name ValidatorId */
export interface ValidatorId extends AccountId {}

/** @name ValidatorIdOf */
export interface ValidatorIdOf extends ValidatorId {}

/** @name Weight */
export interface Weight extends WeightV2 {}

/** @name WeightMultiplier */
export interface WeightMultiplier extends Fixed64 {}

/** @name WeightV0 */
export interface WeightV0 extends u32 {}

/** @name WeightV1 */
export interface WeightV1 extends u64 {}

/** @name WeightV2 */
export interface WeightV2 extends Struct {
  readonly refTime: Compact<u64>;
  readonly proofSize: Compact<u64>;
}

export type PHANTOM_RUNTIME = 'runtime';
