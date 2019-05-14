import { S3 } from 'aws-sdk';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { S3Bucket } from '../entities';

export class S3BucketEntityManager {
  private readonly s3: S3;

  constructor(s3: S3) {
    this.s3 = s3;
  }

  public create(request: S3.CreateBucketRequest): Observable<S3Bucket> {
    return from(this.s3.createBucket(request).promise()).pipe(
      map((_output: S3.CreateBucketOutput) => {
        return new S3Bucket(this.s3, request.Bucket);
      }),
    );
  }

  public list(): Observable<S3Bucket[]> {
    return from(this.s3.listBuckets().promise()).pipe(
      map((output: S3.ListBucketsOutput) => {
        return output.Buckets!.map((bucket: S3.Bucket) => {
          return new S3Bucket(this.s3, bucket.Name!);
        });
      }),
    );
  }
}
