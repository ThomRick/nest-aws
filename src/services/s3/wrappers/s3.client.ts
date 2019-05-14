import { S3 } from 'aws-sdk';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { S3Bucket } from './s3.bucket';

export class S3Client {
  private readonly s3: S3;

  constructor(s3: S3) {
    this.s3 = s3;
  }

  public createBucket(request: S3.Types.CreateBucketRequest): Observable<S3Bucket> {
    return from(this.s3.createBucket(request).promise()).pipe(
      map((output: S3.Types.CreateBucketOutput) => {
        return S3Bucket.create(Object.assign({}, request, output))(this.s3);
      }),
    );
  }
}
