import { S3 } from 'aws-sdk';
import {
  S3ACLOptions,
  S3CacheOptions,
  S3ContentOptions,
  S3ExpiresOptions,
  S3GrantOptions,
  S3ObjectLockOptions,
  S3ObjectOptions,
  S3SSEOptions,
} from './s3-options.interfaces';

// tslint:disable-next-line:interface-name
interface S3UploadMultipart {
  UploadId: S3.Types.MultipartUploadId;
}

// tslint:disable-next-line:interface-name
export interface S3AbortMultipartUploadRequest extends S3ObjectOptions, S3UploadMultipart {
  RequestPayer?: S3.Types.RequestPayer;
}

// tslint:disable-next-line:interface-name
export interface S3CompleteMultipartUploadRequest extends S3ObjectOptions, S3UploadMultipart {
  MultipartUpload?: S3.Types.CompletedMultipartUpload;
  RequestPayer?: S3.Types.RequestPayer;
}

// tslint:disable-next-line:interface-name max-line-length
export interface S3CopyObjectRequest extends S3ACLOptions, S3CacheOptions, S3ContentOptions, S3ExpiresOptions, S3GrantOptions, S3SSEOptions, S3ObjectLockOptions {
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
export interface S3CreateMultipartUploadRequest extends S3ACLOptions, S3CacheOptions, S3ContentOptions, S3ExpiresOptions, S3GrantOptions, S3SSEOptions, S3ObjectLockOptions {
  Key: S3.Types.ObjectKey;

  Metadata?: S3.Types.Metadata;

  ServerSideEncryption?: S3.Types.ServerSideEncryption;
  StorageClass?: S3.Types.StorageClass;
  WebsiteRedirectLocation?: S3.Types.WebsiteRedirectLocation;

  RequestPayer?: S3.Types.RequestPayer;
  Tagging?: S3.Types.TaggingHeader;
}

// tslint:disable-next-line:interface-name
export interface S3DeleteObjectRequest {
  Key: S3.Types.ObjectKey;
  MFA?: S3.Types.MFA;
  VersionId?: S3.Types.ObjectVersionId;
  RequestPayer?: S3.Types.RequestPayer;
  BypassGovernanceRetention?: S3.Types.BypassGovernanceRetention;
}

// tslint:disable-next-line:interface-name
export interface S3DeleteObjectTaggingRequest {
  Key: S3.Types.ObjectKey;
  VersionId?: S3.Types.ObjectVersionId;
}

// tslint:disable-next-line:interface-name
export interface S3DeleteObjectsRequest {
  Delete: S3.Types.Delete;
  MFA?: S3.Types.MFA;
  RequestPayer?: S3.Types.RequestPayer;
  BypassGovernanceRetention?: S3.Types.BypassGovernanceRetention;
}

// tslint:disable-next-line:interface-name
export interface S3GetObjectRequest {
  IfMatch?: S3.Types.IfMatch;
  IfModifiedSince?: S3.Types.IfModifiedSince;
  IfNoneMatch?: S3.Types.IfNoneMatch;
  IfUnmodifiedSince?: S3.Types.IfUnmodifiedSince;
  Key: S3.Types.ObjectKey;
  Range?: S3.Types.Range;
  ResponseCacheControl?: S3.Types.ResponseCacheControl;
  ResponseContentDisposition?: S3.Types.ResponseContentDisposition;
  ResponseContentEncoding?: S3.Types.ResponseContentEncoding;
  ResponseContentLanguage?: S3.Types.ResponseContentLanguage;
  ResponseContentType?: S3.Types.ResponseContentType;
  ResponseExpires?: S3.Types.ResponseExpires;
  VersionId?: S3.Types.ObjectVersionId;
  SSECustomerAlgorithm?: S3.Types.SSECustomerAlgorithm;
  SSECustomerKey?: S3.Types.SSECustomerKey;
  SSECustomerKeyMD5?: S3.Types.SSECustomerKeyMD5;
  RequestPayer?: S3.Types.RequestPayer;
  PartNumber?: S3.Types.PartNumber;
}

// tslint:disable-next-line:interface-name
export interface S3HeadObjectRequest {
  IfMatch?: S3.Types.IfMatch;
  IfModifiedSince?: S3.Types.IfModifiedSince;
  IfNoneMatch?: S3.Types.IfNoneMatch;
  IfUnmodifiedSince?: S3.Types.IfUnmodifiedSince;
  Key: S3.Types.ObjectKey;
  Range?: S3.Types.Range;
  VersionId?: S3.Types.ObjectVersionId;
  SSECustomerAlgorithm?: S3.Types.SSECustomerAlgorithm;
  SSECustomerKey?: S3.Types.SSECustomerKey;
  SSECustomerKeyMD5?: S3.Types.SSECustomerKeyMD5;
  RequestPayer?: S3.Types.RequestPayer;
  PartNumber?: S3.Types.PartNumber;
}

// tslint:disable-next-line:interface-name
export interface S3PutObjectRequest {
  ACL?: S3.Types.ObjectCannedACL;
  Body?: S3.Types.Body;
  CacheControl?: S3.Types.CacheControl;
  ContentDisposition?: S3.Types.ContentDisposition;
  ContentEncoding?: S3.Types.ContentEncoding;
  ContentLanguage?: S3.Types.ContentLanguage;
  ContentLength?: S3.Types.ContentLength;
  ContentMD5?: S3.Types.ContentMD5;
  ContentType?: S3.Types.ContentType;
  Expires?: S3.Types.Expires;
  GrantFullControl?: S3.Types.GrantFullControl;
  GrantRead?: S3.Types.GrantRead;
  GrantReadACP?: S3.Types.GrantReadACP;
  GrantWriteACP?: S3.Types.GrantWriteACP;
  Key: S3.Types.ObjectKey;
  Metadata?: S3.Types.Metadata;
  ServerSideEncryption?: S3.Types.ServerSideEncryption;
  StorageClass?: S3.Types.StorageClass;
  WebsiteRedirectLocation?: S3.Types.WebsiteRedirectLocation;
  SSECustomerAlgorithm?: S3.Types.SSECustomerAlgorithm;
  SSECustomerKey?: S3.Types.SSECustomerKey;
  SSECustomerKeyMD5?: S3.Types.SSECustomerKeyMD5;
  SSEKMSKeyId?: S3.Types.SSEKMSKeyId;
  RequestPayer?: S3.Types.RequestPayer;
  Tagging?: S3.Types.TaggingHeader;
  ObjectLockMode?: S3.Types.ObjectLockMode;
  ObjectLockRetainUntilDate?: S3.Types.ObjectLockRetainUntilDate;
  ObjectLockLegalHoldStatus?: S3.Types.ObjectLockLegalHoldStatus;
}
