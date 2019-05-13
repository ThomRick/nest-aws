import { S3 } from 'aws-sdk';
import { from, Observable } from 'rxjs';
import {
  S3AbortMultipartUploadRequest,
  S3CompleteMultipartUploadRequest,
  S3CopyObjectRequest,
  S3CreateMultipartUploadRequest,
} from '../interfaces';

export class S3Bucket {
  private readonly name: string;
  private readonly s3: S3;

  constructor(s3: S3, name: string) {
    this.name = name;
    this.s3 = s3;

    // this.s3.createMultipartUpload()
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

  public createMultipartUpload(request: S3CreateMultipartUploadRequest)
  : Observable<S3.Types.CreateMultipartUploadOutput> {
    return from(this.s3.createMultipartUpload({ Bucket: this.name, ...request }).promise());
  }
}
