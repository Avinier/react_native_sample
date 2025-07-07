
import {PeopleModel} from './people_model';

export enum ConfidenceLevel {
  high = 'high',
  medium = 'medium',
  low = 'low',
}

export interface ActivityTemplatingModel {
  engagementId?: string;
  timestamp?: number;
  actor?: PeopleModel;
  activities?: SubActivityModel[];
  profiles?: {[key: string]: PeopleModel};
  chainProfiles?: {[key: string]: ChainProfileModel};
  heroNames?: {[key: string]: HeroNames};
  methodIds?: {[key: string]: MethodId};
  isExpanded?: boolean;
  pairwiseRelationshipSummaryModelMap?: {
    [key: string]: PairwiseRelationshipSummaryModel;
  };
  numProtocols: number;
  numWallets: number;
  type?: string;
  referenceTrendingActivities?: ActivityTemplatingModel[];
  identities?: {[key: string]: PeopleModel};
  sourceUrl?: string;
  category: string;
  action: string;
  globalTokenAddress: string;
  globalPriceChange?: UsdValue;
  protocols?: {[key: string]: ProtocolDetails};
  globalActivityId?: string;
  chainId?: string;
  globalTweetIds?: string[];
  welcomeMessageSuggestions?: string[];
  postAncestors?: PostAncestorModel[];
  floorPrice?: string;
  owners?: string;
  mintPrice?: string;
  zoraUrl?: string;
  zoraDescription?: string;
  reposted?: ActivityTemplatingModel;
  activityGroupId?: string;
  numOfGroupActivityComments?: number;
  welcomePosts?: ActivityTemplatingModel[];
  addWelcomePostCommentLoading: boolean;
  numberOfUsersOnboarded?: number;
  addSuggestionCommentLoading: boolean;
  attribution?: string;
  activityContexts?: ActivityContextsModel[];
  id?: string;
  blobId?: string;
  numTxns: number;
  link?: string;
  polymarketTradeOrders?: PolymarketTradeOrder[];
  actorAddr?: string;
  userTokenPnl: UserTokenPnlModel[];
  seperatedUserTokenPnls: UserTokenPnlModel[];
  threadsList: ActivityTemplatingModel[];
  localTrendingItems: ActivityTemplatingModel[];
  showingAllThreads: boolean;
  tokensWithPnl: string[];
  nftCollectionMentions?: {[key: string]: PeopleModel};
  protocolMentions?: {[key: string]: PeopleModel};
  graphPoints?: number[][];
  whaleIdentitiesInvolved?: number[];
  trendingHeaderText?: string;
  trendingText?: string;
  pusherChannelName?: string;
  graphChainId?: string;
  graphAddress?: string;
  commentBackgroundType?: string;
  tokenAddress?: string;
}

export interface SubActivityModel {
  id?: string;
  chainId?: string;
  chainSymbol?: string;
  timestamp?: number;
  timeLabel?: string;
  showTokenDiff?: boolean;
  usdValue?: UsdValue;
  type?: string;
  actor?: ActivityActor;
  hideFromFeed?: boolean;
  addressesInvolved?: AddressesInvolvedModel;
  descriptionTemplate?: string;
  media?: Media[];
  tokenTransfers?: TokenTransfer[];
  verboseDescription?: string;
  isTrending: boolean;
  extendedDescriptionTemplate: string;
  isReadMoreForMessage: boolean;
  isBundlingLoader: boolean;
  isBundleDiscardLoader: boolean;
  chainProfiles?: {[key: string]: ChainProfileModel};
  status?: string;
}

export interface AddressesInvolvedModel {
  externalAddrs?: string[];
  contractAddrs?: string[];
  invokedContract?: string;
  multisigSignatories: string[];
}

export interface ActivityActor {
  identityId?: number;
  identityAddressCount?: number;
  displayName?: string;
  ensName?: string;
  bio?: string;
  socials?: ActorSocials;
  displayPicture?: string;
  link?: string;
  protocolDetails?: any;
  tokenDetails?: any;
  address?: string;
  followerCount?: UsdValue;
  followingCount?: UsdValue;
  verified?: boolean;
  userSince?: any;
  sources?: ActorSources;
  isToken?: boolean;
}

export interface UsdValue {
  value?: number;
  displayValue?: string;
  direction: number;
}

export interface ActorSocials {
  twitter?: string;
  discord?: string;
  github?: string;
  website?: string;
  email?: string;
}

export interface PairwiseRelationshipSummaryModel {
  relationshipSummary?: string[];
  address?: string;
  areRelated: boolean;
  confidence?: string;
  relatedWith?: string;
  isBundlingLoading: boolean;
  isBundleDiscardLoading: boolean;
  templateString?: string;
}

export interface ActorSources {
  identityId?: string[];
  identityAddressCount?: string[];
  displayName?: string[];
  bio?: string[];
  socials?: PurpleSocials;
  displayPicture?: string[];
  ensName?: string[];
}

export interface PurpleSocials {
  twitter?: string[];
}

export interface Media {
  src?: string;
  alt?: string;
  description?: string;
  externalUrl?: string;
  cssStyles?: CssStyles;
  artist?: Artist;
  id?: string;
  contentType?: string;
  scaledSrc?: string;
  audioUrl?: string;
  collectionName?: string;
  collectionImage?: string;
  mintUrl?: string;
  nftName?: string;
  nftPrice?: UsdValue;
  width?: number;
  height?: number;
}

export interface Artist {
  name?: string;
  website?: string;
}

export interface CssStyles {}

export interface TokenTransfer {
  address?: string;
  amount?: UsdValue;
  symbol?: string;
  direction?: number;
  tokenRecipients?: string[];
  tokenSenders?: string[];
  tokenUrl?: string;
}

export interface DatumActor {
  displayName?: string;
  socials?: Socials;
  protocolDetails?: DatumActorModelProtocolDetails;
  tokenDetails?: Socials;
  address?: string;
  addressType?: string;
  addressChain?: string;
  link?: string;
  addressLink?: string;
  followerCount?: FollowCount;
  followingCount?: FollowCount;
  isToken?: boolean;
  displayPicture?: string;
  identityId?: number;
}

export interface FollowCount {
  value?: any;
  displayValue?: string;
}

export interface DatumActorModelProtocolDetails {
  name?: string;
  icon?: string;
  website?: string;
}

export interface Socials {}

export interface MethodId {
  displayName?: string;
  sourceType?: string;
}

export interface ProtocolDetails {
  icon?: string;
  name?: string;
  website?: string;
  identifier?: string;
  link: string;
}

export interface ProfileSocials {
  twitter?: string;
  website?: string;
}

export interface ProfileSources {
  identityId?: string[];
  identityAddressCount?: string[];
  displayName?: string[];
  bio?: string[];
  socials?: FluffySocials;
  displayPicture?: string[];
  ensName?: string[];
  tokenDetails?: SourcesTokenDetails;
}

export interface FluffySocials {
  twitter?: string[];
  website?: string[];
}

export interface SourcesTokenDetails {
  logo?: string[];
  name?: string[];
  symbol?: string[];
  decimals?: string[];
}

export interface ProfileTokenDetails {
  logo?: string;
  name?: string;
  symbol?: string;
  decimals?: number;
  marketCap?: UsdValue;
  headerImageUrl?: string;
  imageUri?: string;
}

export interface Links {
  next?: string;
}

export interface HeroNames {
  displayName?: string;
  link?: string;
  imageUrl?: string;
}

export interface ActivityContextsModel {
  action?: string;
  collectionUrl?: string;
  heroNameToAmount?: {[key: string]: any};
  heroNameToImage?: {[key: string]: any};
  toAddress?: string;
  tokenIdToHeroName?: {[key: string]: any};
}

export interface PolymarketTradeOrder {
  conditionId?: string;
  icon?: string;
  outcome?: string;
  side?: string;
  type?: string;
  timestamp?: number;
  title?: string;
  sharePrice?: UsdValue;
  shareSize?: UsdValue;
  usdValue?: UsdValue;
}

export interface TokenDetails {
  symbol?: string;
  name?: string;
  logo?: string;
  imageUri?: string;
  marketCap?: UsdValue;
  price?: UsdValue;
  priceChange24h?: UsdValue;
  volume24h?: UsdValue;
}

export interface ChainProfileModel {
  id?: string;
  logoUri?: string;
  name?: string;
  website?: string;
  nativeTokenDetails?: ProfileTokenDetails;
  ethChainId?: number;
}

export interface AddressesInvolved {
  multisigSignatories: string[];
}

export interface PostAncestorModel {
  id: string;
  type: string;
  activityTemplatingModel?: ActivityTemplatingModel;
}

export interface UserTokenPnlModel {
  chainIdString?: string;
  address?: string;
  tokenAddress?: string;
  tokenType?: string;
  avgBuyPrice?: UsdValue;
  currentBalance?: UsdValue;
  openPnl?: UsdValue;
  openPnlPercent?: UsdValue;
  timestamp?: number;
  usdValueInvested?: UsdValue;
  usdValueTotalBuy?: UsdValue;
  usdValueTotalSold?: UsdValue;
  totalUsdValue?: UsdValue;
  closedPnl?: UsdValue;
  closedPnlPercent?: UsdValue;
  geckoTerminalNetwork?: string;
  geckoTerminalPool?: string;
  geckoTerminalBaseOrQuote?: string;
  coingeckoSlug?: string;
  symbol?: string;
}
