import { S3 } from 'aws-sdk';

// tslint:disable-next-line:interface-name
export interface S3ACLOptions {
  ACL?: S3.Types.ObjectCannedACL;
}

// tslint:disable-next-line:interface-name
export interface S3CacheOptions {
  CacheControl?: S3.Types.CacheControl;
}

// tslint:disable-next-line:interface-name
export interface S3ContentOptions {
  ContentDisposition?: S3.Types.ContentDisposition;
  ContentEncoding?: S3.Types.ContentEncoding;
  ContentLanguage?: S3.Types.ContentLanguage;
  ContentType?: S3.Types.ContentType;
}

// tslint:disable-next-line:interface-name
export interface S3ContentExtendedOptions extends S3ContentOptions {
  ContentLength?: S3.Types.ContentLength;
  ContentMD5?: S3.Types.ContentMD5;
}

// tslint:disable-next-line:interface-name
export interface S3ExpiresOptions {
  Expires?: S3.Types.Expires;
}

// tslint:disable-next-line:interface-name
export interface S3GrantOptions {
  GrantFullControl?: S3.Types.GrantFullControl;
  GrantRead?: S3.Types.GrantRead;
  GrantReadACP?: S3.Types.GrantReadACP;
  GrantWriteACP?: S3.Types.GrantWriteACP;
}

// tslint:disable-next-line:interface-name
export interface S3SSEOptions {
  SSECustomerAlgorithm?: S3.Types.SSECustomerAlgorithm;
  SSECustomerKey?: S3.Types.SSECustomerKey;
  SSECustomerKeyMD5?: S3.Types.SSECustomerKeyMD5;
  // SSEKMSKeyId?: S3.Types.SSEKMSKeyId;
}

// tslint:disable-next-line:interface-name
export interface S3SSEExtendedOptions extends S3SSEOptions {
  SSEKMSKeyId?: S3.Types.SSEKMSKeyId;
}

// tslint:disable-next-line:interface-name
export interface S3ObjectLockOptions {
  ObjectLockMode?: S3.Types.ObjectLockMode;
  ObjectLockRetainUntilDate?: S3.Types.ObjectLockRetainUntilDate;
  ObjectLockLegalHoldStatus?: S3.Types.ObjectLockLegalHoldStatus;
}

// tslint:disable-next-line:interface-name
export interface S3ObjectOptions {
  Key: S3.Types.ObjectKey;
}

// tslint:disable-next-line:interface-name
export interface S3VersionOptions {
  VersionId?: S3.Types.ObjectVersionId;
}

// tslint:disable-next-line:interface-name
export interface S3RequestOptions {
  RequestPayer?: S3.Types.RequestPayer;
}

// tslint:disable-next-line:interface-name
export interface S3RetentionOptions {
  BypassGovernanceRetention?: S3.Types.BypassGovernanceRetention;
}

// tslint:disable-next-line:interface-name
export interface S3MAFOptions {
  MFA?: S3.Types.MFA;
}

// tslint:disable-next-line:interface-name
export interface S3ResponseCacheControlOptions {
  ResponseCacheControl?: S3.Types.ResponseCacheControl;
  ResponseContentDisposition?: S3.Types.ResponseContentDisposition;
  ResponseContentEncoding?: S3.Types.ResponseContentEncoding;
  ResponseContentLanguage?: S3.Types.ResponseContentLanguage;
  ResponseContentType?: S3.Types.ResponseContentType;
}

// tslint:disable-next-line:interface-name
export interface S3IfOptions {
  IfMatch?: S3.Types.IfMatch;
  IfModifiedSince?: S3.Types.IfModifiedSince;
  IfNoneMatch?: S3.Types.IfNoneMatch;
  IfUnmodifiedSince?: S3.Types.IfUnmodifiedSince;
}

// tslint:disable-next-line:interface-name
export interface S3StorageOptions {
  StorageClass?: S3.Types.StorageClass;
}

// tslint:disable-next-line:interface-name
export interface S3RangeOptions {
  Range?: S3.Types.Range;
}

// tslint:disable-next-line:interface-name
export interface S3PartOptions {
  PartNumber?: S3.Types.PartNumber;
}
