import { S3 } from 'aws-sdk';

// tslint:disable-next-line:interface-name
export interface S3GetObjectRequest {
  IfMatch?: S3.IfMatch;
  IfModifiedSince?: S3.IfModifiedSince;
  IfNoneMatch?: S3.IfNoneMatch;
  IfUnmodifiedSince?: S3.IfUnmodifiedSince;
  Key: S3.ObjectKey;
  Range?: S3.Range;
  ResponseCacheControl?: S3.ResponseCacheControl;
  ResponseContentDisposition?: S3.ResponseContentDisposition;
  ResponseContentEncoding?: S3.ResponseContentEncoding;
  ResponseContentLanguage?: S3.ResponseContentLanguage;
  ResponseContentType?: S3.ResponseContentType;
  ResponseExpires?: S3.ResponseExpires;
  VersionId?: S3.ObjectVersionId;
  SSECustomerAlgorithm?: S3.SSECustomerAlgorithm;
  SSECustomerKey?: S3.SSECustomerKey;
  SSECustomerKeyMD5?: S3.SSECustomerKeyMD5;
  RequestPayer?: S3.RequestPayer;
  PartNumber?: S3.PartNumber;
}

// tslint:disable-next-line:interface-name
export interface S3PutObjectRequest {
  ACL?: S3.ObjectCannedACL;
  Body?: S3.Body;
  CacheControl?: S3.CacheControl;
  ContentDisposition?: S3.ContentDisposition;
  ContentEncoding?: S3.ContentEncoding;
  ContentLanguage?: S3.ContentLanguage;
  ContentLength?: S3.ContentLength;
  ContentMD5?: S3.ContentMD5;
  ContentType?: S3.ContentType;
  Expires?: S3.Expires;
  GrantFullControl?: S3.GrantFullControl;
  GrantRead?: S3.GrantRead;
  GrantReadACP?: S3.GrantReadACP;
  GrantWriteACP?: S3.GrantWriteACP;
  Key: S3.ObjectKey;
  Metadata?: S3.Metadata;
  ServerSideEncryption?: S3.ServerSideEncryption;
  StorageClass?: S3.StorageClass;
  WebsiteRedirectLocation?: S3.WebsiteRedirectLocation;
  SSECustomerAlgorithm?: S3.SSECustomerAlgorithm;
  SSECustomerKey?: S3.SSECustomerKey;
  SSECustomerKeyMD5?: S3.SSECustomerKeyMD5;
  SSEKMSKeyId?: S3.SSEKMSKeyId;
  RequestPayer?: S3.RequestPayer;
  Tagging?: S3.TaggingHeader;
  ObjectLockMode?: S3.ObjectLockMode;
  ObjectLockRetainUntilDate?: S3.ObjectLockRetainUntilDate;
  ObjectLockLegalHoldStatus?: S3.ObjectLockLegalHoldStatus;
}
