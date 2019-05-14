import { S3 } from 'aws-sdk';
import { S3GetObjectRequest, S3PutObjectRequest } from '../interfaces';

export type S3ObjectState =
  & S3PutObjectRequest
  & S3.PutObjectOutput
  & S3GetObjectRequest
  & S3.GetObjectOutput;

export class S3Object implements S3.GetObjectOutput {
  private readonly s3: S3;
  private readonly bucket: string;
  private readonly key: string;
  private readonly state?: S3ObjectState;

  constructor(s3: S3, bucket: string, key: string, state?: S3ObjectState) {
    this.s3 = s3;
    this.bucket = bucket;
    this.key = key;
    this.state = state;
  }

  public get AcceptRanges(): S3.AcceptRanges | undefined {
    return this.state!.AcceptRanges;
  }

  public get Body(): S3.Body | undefined {
    return this.state!.Body;
  }

  public get Bucket(): S3.BucketName {
    return this.bucket;
  }

  public get CacheControl(): S3.CacheControl | undefined {
    return this.state!.CacheControl;
  }

  public get ContentDisposition(): S3.ContentDisposition | undefined {
    return this.state!.ContentDisposition;
  }

  public get ContentEncoding(): S3.ContentEncoding | undefined {
    return this.state!.ContentEncoding;
  }

  public get ContentLanguage(): S3.ContentLanguage | undefined {
    return this.state!.ContentLanguage;
  }

  public get ContentLength(): S3.ContentLength | undefined {
    return this.state!.ContentLength;
  }

  public get ContentRange(): S3.ContentRange | undefined {
    return this.state!.ContentRange;
  }

  public get ContentType(): S3.ContentType | undefined {
    return this.state!.ContentType;
  }

  public get DeleteMarker(): S3.DeleteMarker | undefined {
    return this.state!.DeleteMarker;
  }

  public get ETag(): S3.ETag | undefined {
    return this.state!.ETag;
  }

  public get Expiration(): S3.Expiration | undefined {
    return this.state!.Expiration;
  }

  public get Expires(): S3.Expires | undefined {
    return this.state!.Expires;
  }

  public get Key(): S3.ObjectKey {
    return this.key;
  }

  public get LastModified(): S3.LastModified | undefined {
    return this.state!.LastModified;
  }

  public get Metadata(): S3.Metadata | undefined {
    return this.state!.Metadata;
  }

  public get MissingMeta(): S3.MissingMeta | undefined {
    return this.state!.MissingMeta;
  }

  public get ObjectLockLegalHoldStatus(): S3.ObjectLockLegalHoldStatus | undefined {
    return this.state!.ObjectLockLegalHoldStatus;
  }

  public get ObjectLockMode(): S3.ObjectLockMode | undefined {
    return this.state!.ObjectLockMode;
  }

  public get ObjectLockRetainUntilDate(): S3.ObjectLockRetainUntilDate | undefined {
    return this.state!.ObjectLockRetainUntilDate;
  }

  public get PartsCount(): S3.PartsCount | undefined {
    return this.state!.PartsCount;
  }

  public get ReplicationStatus(): S3.ReplicationStatus | undefined {
    return this.state!.ReplicationStatus;
  }

  public get RequestCharged(): S3.RequestCharged | undefined {
    return this.state!.RequestCharged;
  }

  public get Restore(): S3.Restore | undefined {
    return this.state!.Restore;
  }

  public get SSECustomerAlgorithm(): S3.SSECustomerAlgorithm | undefined {
    return this.state!.SSECustomerAlgorithm;
  }

  public get SSECustomerKeyMD5(): S3.SSECustomerKeyMD5 | undefined {
    return this.state!.SSECustomerKeyMD5;
  }

  public get SSEKMSKeyId(): S3.SSEKMSKeyId | undefined {
    return this.state!.SSEKMSKeyId;
  }

  public get ServerSideEncryption(): S3.ServerSideEncryption | undefined {
    return this.state!.ServerSideEncryption;
  }

  public get StorageClass(): S3.StorageClass | undefined {
    return this.state!.StorageClass;
  }

  public get TagCount(): S3.TagCount | undefined {
    return this.state!.TagCount;
  }

  public get VersionId(): S3.ObjectVersionId | undefined {
    return this.state!.VersionId;
  }

  public get WebsiteRedirectLocation(): S3.WebsiteRedirectLocation | undefined {
    return this.state!.WebsiteRedirectLocation;
  }
}
