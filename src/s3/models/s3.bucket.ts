import { S3 } from 'aws-sdk';
import { from, Observable } from 'rxjs';
import { Readable } from 'stream';
import {
  S3AbortMultipartUploadRequest,
  S3CompleteMultipartUploadRequest,
  S3CopyObjectRequest,
  S3CreateMultipartUploadRequest,
  S3DeleteObjectRequest,
  S3DeleteObjectsRequest,
  S3GetObjectRequest,
  S3HeadObjectRequest,
  S3PutObjectRequest,
} from '../interfaces';

export class S3Bucket {
  private readonly name: string;
  private readonly s3: S3;

  constructor(s3: S3, name: string) {
    this.name = name;
    this.s3 = s3;
  }

  public abortMultipartUpload(request: S3AbortMultipartUploadRequest): Observable<S3.Types.AbortMultipartUploadOutput> {
    return from(this.s3.abortMultipartUpload({ Bucket: this.name, ...request }).promise());
  }

  public completeMultipartUpload(request: S3CompleteMultipartUploadRequest)
  : Observable<S3.Types.CompleteMultipartUploadOutput> {
    return from(this.s3.completeMultipartUpload({ Bucket: this.name, ...request }).promise());
  }

  public copyObject(request: S3CopyObjectRequest): Observable<S3.Types.CopyObjectOutput> {
    return from(this.s3.copyObject({ Bucket: this.name, ...request }).promise());
  }

  private createBucket() {
    throw new Error('Method not implemented');
  }

  public createMultipartUpload(request: S3CreateMultipartUploadRequest)
  : Observable<S3.Types.CreateMultipartUploadOutput> {
    return from(this.s3.createMultipartUpload({ Bucket: this.name, ...request }).promise());
  }

  public delete(): Observable<{}> {
    return this.deleteBucket({ Bucket: this.name });
  }

  private deleteBucket(request: S3.Types.DeleteBucketRequest): Observable<{}> {
    return from(this.s3.deleteBucket(request).promise());
  }

  private deleteBucketAnalyticsConfiguration() {
    throw new Error('Method not implemented');
  }

  private deleteBucketCors() {
    throw new Error('Method not implemented');
  }

  private deleteBucketEncryption() {
    throw new Error('Method not implemented');
  }

  private deleteBucketInventoryConfiguration() {
    throw new Error('Method not implemented');
  }

  private deleteBucketLifecycle() {
    throw new Error('Method not implemented');
  }

  private deleteBucketMetricsConfiguration() {
    throw new Error('Method not implemented');
  }

  private deleteBucketPolicy() {
    throw new Error('Method not implemented');
  }

  private deleteBucketReplication() {
    throw new Error('Method not implemented');
  }

  private deleteBucketTagging() {
    throw new Error('Method not implemented');
  }

  private deleteBucketWebsite() {
    throw new Error('Method not implemented');
  }

  public deleteObject(request: S3DeleteObjectRequest): Observable<S3.Types.DeleteObjectOutput> {
    return from(this.s3.deleteObject({ Bucket: this.name, ... request }).promise());
  }

  public deleteObjectTagging(request: S3DeleteObjectRequest): Observable<S3.Types.DeleteObjectTaggingOutput> {
    return from(this.s3.deleteObjectTagging({ Bucket: this.name, ...request }).promise());
  }

  public deleteObjects(request: S3DeleteObjectsRequest): Observable<S3.Types.DeleteObjectsOutput> {
    return from(this.s3.deleteObjects({ Bucket: this.name, ...request }).promise());
  }

  private deletePublicAccessBlock() {
    throw new Error('Method not implemented');
  }

  private getBucketAccelerateConfiguration() {
    throw new Error('Method not implemented');
  }

  private getBucketAcl() {
    throw new Error('Method not implemented');
  }

  private getBucketAnalyticsConfiguration() {
    throw new Error('Method not implemented');
  }

  private getBucketCors() {
    throw new Error('Method not implemented');
  }

  private getBucketEncryption() {
    throw new Error('Method not implemented');
  }

  private getBucketInventoryConfiguration() {
    throw new Error('Method not implemented');
  }

  private getBucketLifecycle() {
    throw new Error('Method not implemented');
  }

  private getBucketLifecycleConfiguration() {
    throw new Error('Method not implemented');
  }

  private getBucketLocation() {
    throw new Error('Method not implemented');
  }

  private getBucketLogging() {
    throw new Error('Method not implemented');
  }

  private getBucketMetricsConfiguration() {
    throw new Error('Method not implemented');
  }

  private getBucketNotification() {
    throw new Error('Method not implemented');
  }

  private getBucketNotificationConfiguration() {
    throw new Error('Method not implemented');
  }

  private getBucketPolicy() {
    throw new Error('Method not implemented');
  }

  private getBucketPolicyStatus() {
    throw new Error('Method not implemented');
  }

  private getBucketReplication() {
    throw new Error('Method not implemented');
  }

  private getBucketRequestPayment() {
    throw new Error('Method not implemented');
  }

  private getBucketTagging() {
    throw new Error('Method not implemented');
  }

  private getBucketVersioning() {
    throw new Error('Method not implemented');
  }

  private getBucketWebsite() {
    throw new Error('Method not implemented');
  }

  public getObject(request: S3GetObjectRequest): Observable<S3.Types.GetObjectOutput> {
    return from(this.s3.getObject({ Bucket: this.name, ...request }).promise());
  }

  public getObjectAsStream(request: S3GetObjectRequest): Readable {
    return this.s3.getObject({ Bucket: this.name, ...request }).createReadStream();
  }

  private getObjectAcl() {
    throw new Error('Method not implemented');
  }

  private getObjectLegalHold() {
    throw new Error('Method not implemented');
  }

  private getObjectLockConfiguration() {
    throw new Error('Method not implemented');
  }

  private getObjectRetention() {
    throw new Error('Method not implemented');
  }

  private getObjectTagging() {
    throw new Error('Method not implemented');
  }

  private getObjectTorrent() {
    throw new Error('Method not implemented');
  }

  private getPublicAccessBlock() {
    throw new Error('Method not implemented');
  }

  private headBucket() {
    throw new Error('Method not implemented');
  }

  public headObject(request: S3HeadObjectRequest): Observable<S3.Types.HeadObjectOutput> {
    return from(this.s3.headObject({ Bucket: this.name, ...request }).promise());
  }

  private listBucketAnalyticsConfigurations() {
    throw new Error('Method not implemented');
  }

  private listBucketInventoryConfigurations() {
    throw new Error('Method not implemented');
  }

  private listBucketMetricsConfigurations() {
    throw new Error('Method not implemented');
  }

  private listBuckets() {
    throw new Error('Method not implemented');
  }

  private listMultipartUploads() {
    throw new Error('Method not implemented');
  }

  private listObjectVersions() {
    throw new Error('Method not implemented');
  }

  private listObjects() {
    throw new Error('Method not implemented');
  }

  private listObjectsV2() {
    throw new Error('Method not implemented');
  }

  private listParts() {
    throw new Error('Method not implemented');
  }

  private putBucketAccelerateConfiguration() {
    throw new Error('Method not implemented');
  }

  private putBucketAcl() {
    throw new Error('Method not implemented');
  }

  private putBucketAnalyticsConfiguration() {
    throw new Error('Method not implemented');
  }

  private putBucketCors() {
    throw new Error('Method not implemented');
  }

  private putBucketEncryption() {
    throw new Error('Method not implemented');
  }

  private putBucketInventoryConfiguration() {
    throw new Error('Method not implemented');
  }

  private putBucketLifecycle() {
    throw new Error('Method not implemented');
  }

  private putBucketLifecycleConfiguration() {
    throw new Error('Method not implemented');
  }

  private putBucketLogging() {
    throw new Error('Method not implemented');
  }

  private putBucketMetricsConfiguration() {
    throw new Error('Method not implemented');
  }

  private putBucketNotification() {
    throw new Error('Method not implemented');
  }

  private putBucketNotificationConfiguration() {
    throw new Error('Method nto implemented');
  }

  private putBucketPolicy() {
    throw new Error('Method not implemented');
  }

  private putBucketReplication() {
    throw new Error('Method not implemented');
  }

  private putBucketRequestPayment() {
    throw new Error('Method not implemented');
  }

  private putBucketTagging() {
    throw new Error('Method not implemented');
  }

  private putBucketVersioning() {
    throw new Error('Method not implemented');
  }

  private putBucketWebsite() {
    throw new Error('Method not implemented');
  }

  public putObject(request: S3PutObjectRequest): Observable<S3.Types.PutObjectOutput> {
    return from(this.s3.putObject({ Bucket: this.name, ...request }).promise());
  }

  private putObjectAcl() {
    throw new Error('Method not implemented');
  }

  private putObjectLegalHold() {
    throw new Error('Method not implemented');
  }

  private putObjectLockConfiguration() {
    throw new Error('Method not implemented');
  }

  private putObjectRetention() {
    throw new Error('Method not implemented');
  }

  private putObjectTagging() {
    throw new Error('Method not implemented');
  }

  private putPublicAccessBlock() {
    throw new Error('Method not implemented');
  }

  private restoreObject() {
    throw new Error('Method not implemented');
  }

  private selectObjectContent() {
    throw new Error('Method not implemented');
  }

  private uploadPart() {
    throw new Error('Method not implemented');
  }

  private uploadPartCopy() {
    throw new Error('Method not implemented');
  }

  private waitFor() {
    throw new Error('Method not implemented');
  }
}
