import { S3 } from 'aws-sdk';
import {
  S3ACLOptions,
  S3CacheOptions,
  S3ContentExtendedOptions,
  S3ExpiresOptions,
  S3GrantOptions,
  S3IfOptions,
  S3MAFOptions,
  S3ObjectLockOptions,
  S3ObjectOptions,
  S3PartOptions,
  S3RangeOptions,
  S3RequestOptions,
  S3ResponseCacheControlOptions,
  S3RetentionOptions,
  S3SSEExtendedOptions,
  S3SSEOptions,
  S3StorageOptions,
  S3VersionOptions,
} from './s3-options.interfaces';

// tslint:disable-next-line:interface-name max-line-length
export interface S3DeleteObjectRequest extends S3ObjectOptions, S3VersionOptions, S3RequestOptions, S3RetentionOptions, S3MAFOptions {}

// tslint:disable-next-line:interface-name
export interface S3DeleteObjectTaggingRequest extends S3ObjectOptions, S3VersionOptions {}

// tslint:disable-next-line:interface-name
export interface S3DeleteObjectsRequest extends S3RequestOptions, S3RetentionOptions, S3MAFOptions {
  Delete: S3.Types.Delete;
}

// tslint:disable-next-line:interface-name max-line-length
export interface S3GetObjectRequest extends S3ObjectOptions, S3ResponseCacheControlOptions, S3VersionOptions, S3SSEOptions, S3RequestOptions, S3IfOptions, S3RangeOptions, S3PartOptions {
  ResponseExpires?: S3.Types.ResponseExpires;
}

// tslint:disable-next-line:interface-name max-line-length
export interface S3HeadObjectRequest extends S3ObjectOptions, S3SSEOptions, S3RequestOptions, S3VersionOptions, S3IfOptions, S3RangeOptions, S3PartOptions {}

// tslint:disable-next-line:interface-name max-line-length
export interface S3PutObjectRequest extends S3ObjectOptions, S3SSEExtendedOptions, S3ContentExtendedOptions, S3ACLOptions, S3CacheOptions, S3GrantOptions, S3ExpiresOptions, S3ObjectLockOptions, S3StorageOptions, S3RequestOptions {
  Body?: S3.Types.Body;

  Metadata?: S3.Types.Metadata;

  ServerSideEncryption?: S3.Types.ServerSideEncryption;

  WebsiteRedirectLocation?: S3.Types.WebsiteRedirectLocation;

  Tagging?: S3.Types.TaggingHeader;
}
