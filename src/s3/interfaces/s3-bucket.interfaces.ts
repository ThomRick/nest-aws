import { S3 } from 'aws-sdk';

// tslint:disable-next-line:interface-name
export interface S3AbortMultipartUploadRequest {
  Key: S3.Types.ObjectKey;
  UploadId: S3.Types.MultipartUploadId;
  RequestPayer?: S3.Types.RequestPayer;
}

// tslint:disable-next-line:interface-name
export interface S3CompleteMultipartUploadRequest {
  Key: S3.Types.ObjectKey;
  MultipartUpload?: S3.Types.CompletedMultipartUpload;
  UploadId: S3.Types.MultipartUploadId;
  RequestPayer?: S3.Types.RequestPayer;
}

// tslint:disable-next-line:interface-name
interface S3ACLOptions {
  ACL?: S3.Types.ObjectCannedACL;
}

// tslint:disable-next-line:interface-name
interface S3CacheControlOptions {
  CacheControl?: S3.Types.CacheControl;
}

// tslint:disable-next-line:interface-name
interface S3ContentOptions {
  ContentDisposition?: S3.Types.ContentDisposition;
  ContentEncoding?: S3.Types.ContentEncoding;
  ContentLanguage?: S3.Types.ContentLanguage;
  ContentType?: S3.Types.ContentType;
}

// tslint:disable-next-line:interface-name
interface S3ExpiresOptions {
  Expires?: S3.Types.Expires;
}

// tslint:disable-next-line:interface-name
interface S3GrantOptions {
  GrantFullControl?: S3.Types.GrantFullControl;
  GrantRead?: S3.Types.GrantRead;
  GrantReadACP?: S3.Types.GrantReadACP;
  GrantWriteACP?: S3.Types.GrantWriteACP;
}

// tslint:disable-next-line:interface-name
interface S3SSEOptions {
  SSECustomerAlgorithm?: S3.Types.SSECustomerAlgorithm;
  SSECustomerKey?: S3.Types.SSECustomerKey;
  SSECustomerKeyMD5?: S3.Types.SSECustomerKeyMD5;
  SSEKMSKeyId?: S3.Types.SSEKMSKeyId;
}

// tslint:disable-next-line:interface-name
interface S3ObjectLockOptions {
  ObjectLockMode?: S3.Types.ObjectLockMode;
  ObjectLockRetainUntilDate?: S3.Types.ObjectLockRetainUntilDate;
  ObjectLockLegalHoldStatus?: S3.Types.ObjectLockLegalHoldStatus;
}

// tslint:disable-next-line:interface-name max-line-length
export interface S3CopyObjectRequest extends S3ACLOptions, S3CacheControlOptions, S3ContentOptions, S3ExpiresOptions, S3GrantOptions, S3SSEOptions, S3ObjectLockOptions {
  CopySource: S3.Types.CopySource;
  CopySourceIfMatch?: S3.Types.CopySourceIfMatch;
  CopySourceIfModifiedSince?: S3.Types.CopySourceIfModifiedSince;
  CopySourceIfNoneMatch?: S3.Types.CopySourceIfNoneMatch;
  CopySourceIfUnmodifiedSince?: S3.Types.CopySourceIfUnmodifiedSince;

  Key: S3.Types.ObjectKey;

  Metadata?: S3.Types.Metadata;
  MetadataDirective?: S3.Types.MetadataDirective;

  TaggingDirective?: S3.Types.TaggingDirective;

  ServerSideEncryption?: S3.Types.ServerSideEncryption;
  StorageClass?: S3.Types.StorageClass;
  WebsiteRedirectLocation?: S3.Types.WebsiteRedirectLocation;

  CopySourceSSECustomerAlgorithm?: S3.Types.CopySourceSSECustomerAlgorithm;
  CopySourceSSECustomerKey?: S3.Types.CopySourceSSECustomerKey;
  CopySourceSSECustomerKeyMD5?: S3.Types.CopySourceSSECustomerKeyMD5;

  RequestPayer?: S3.Types.RequestPayer;
  Tagging?: S3.Types.TaggingHeader;
}

// tslint:disable-next-line:interface-name max-line-length
export interface S3CreateMultipartUploadRequest extends S3ACLOptions, S3CacheControlOptions, S3ContentOptions, S3ExpiresOptions, S3GrantOptions, S3SSEOptions, S3ObjectLockOptions {
  Key: S3.Types.ObjectKey;

  Metadata?: S3.Types.Metadata;

  ServerSideEncryption?: S3.Types.ServerSideEncryption;
  StorageClass?: S3.Types.StorageClass;
  WebsiteRedirectLocation?: S3.Types.WebsiteRedirectLocation;

  RequestPayer?: S3.Types.RequestPayer;
  Tagging?: S3.Types.TaggingHeader;
}
