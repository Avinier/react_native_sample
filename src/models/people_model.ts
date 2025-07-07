
import {
  ActivityTemplatingModel,
  ProfileTokenDetails,
  ProtocolDetails,
  UsdValue,
} from './activity_model';

export interface PeopleModel {
  type?: string;
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  title?: string;
  identityType?: string;
  bio?: string;
  displayPicture?: string;
  preferredEnsName?: string;
  username: string;
  socials?: Socials;
  followerCount?: FollowCount;
  followingCount?: FollowCount;
  twitterFollowerCount?: FollowCount;
  bundle?: Bundle;
  displayName?: string;
  name?: string;
  address?: string;
  profiles?: {[key: string]: PeopleModel};
  netWorth?: {[key: string]: ChainDetailModel};
  netWorthPreferences: number[];
  isTwitterProfileFetching?: boolean;
  link?: string;
  searchHints?: {[key: string]: any};
  followed: boolean;
  isFollowLoading: boolean;
  addressChain?: string;
  ensName?: string;
  tokenDetails?: ProfileTokenDetails;
  protocolDetails?: ProtocolDetails;
  activeSince: string;
  aliasesList: string[];
  isToken: boolean;
  protocolLink?: string;
  addressType: string;
  externalLinksModel?: ExternalLinksModel;
  isDisableFollow?: boolean;
  idDictForOnbTwitter?: any;
  isFollowDirectly?: boolean;
  isUserAccount?: boolean;
  notificationPreference: string;
  isEditProfile: boolean;
  userSince?: string;
  identityLink?: string;
  isLoading: boolean;
  isVerified: boolean;
  streamChatDetails?: StreamChatDetails;
  invitedByDetails?: InvitedByDetailsModel;
  bannerImage?: string;
  symbol?: string;
  tokenSlug?: string;
  identities?: {[key: string]: PeopleModel};
  mutualFollowersInfo?: string;
  followOfFollowersText?: string;
  followers?: PeopleModel[];
  collectionId?: string;
  isUserProfile?: boolean;
  marketCap?: UsdValue;
  chain?: string;
  chainId?: string;
  followerSource?: string[];
  searchTag?: string;
  searchUsdValueInfo?: UsdValue;
  totalUsdValue?: UsdValue;
  tokenBalance?: UsdValue;
  usdPrice?: UsdValue;
  userFollowsIdentity?: UserFollowsIdentity;
  verifiedSocials?: string[];
  onboardingState?: string;
  volume24h?: UsdValue;
  change1h?: UsdValue;
  change24h?: UsdValue;
  floorPrice?: UsdValue;
}

export interface Socials {
  twitter?: string;
  farcaster?: string;
  lens?: string;
  website?: string;
  email?: string;
  telegram?: string;
  linkedin?: string;
}

export interface FollowCount {
  value?: any;
  displayValue?: string;
}

export interface Bundle {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  reason?: string;
  creator?: any;
  addressInfos?: AddressInfoModel[];
}

export interface AddressInfoModel {
  identityId?: number;
  createdAt?: string;
  updatedAt?: string;
  chainId?: string;
  address?: string;
  reason?: string;
  crowdsourcedSummary?: string;
  crowdsourcedReasons?: AddressInfoCrowdsourcedReasons;
  isAddressExpanded: boolean;
  addRemoveAddressLoading: boolean;
}

export interface AddressInfoCrowdsourcedReasons {
  added?: AddedRemovedModel[];
  removed?: AddedRemovedModel[];
}

export interface AddedRemovedModel {
  creatorId?: number;
  creatorReason?: string;
}

export interface ChainDetailModel {
  totalUsdValue?: UsdValue;
  relativePercentage?: UsdValue;
}

export interface ExternalLinksModel {
  twitter: string;
  linkedin: string;
  website: string;
  email: string;
  opensea: string;
  lens: string;
  farcaster: string;
  telegram: string;
  discord: string;
  github: string;
  explorerLink: string;
  externalLink: string;
  coingecko: string;
  geckoterminal: string;
  dextools: string;
  dexscreener: string;
  birdeye: string;
  definedFi: string;
}

export interface StreamChatDetails {
  id?: string;
  sessionToken?: string;
}

export interface InvitedByDetailsModel {
  details?: InvitorDetails;
  invitedCount: number;
}

export interface InvitorDetails {
  displayName: string;
  displayPicture: string;
  link: string;
}

export interface UserFollowsIdentity {
  twitter: boolean;
  lens: boolean;
  farcaster: boolean;
}
