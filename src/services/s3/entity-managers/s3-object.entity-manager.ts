import { S3 } from 'aws-sdk';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Readable } from 'stream';
import { S3Object } from '../entities';
import { S3GetObjectRequest, S3PutObjectRequest } from '../interfaces';

export class S3ObjectEntityManager {
  private readonly s3: S3;
  private readonly bucket: string;

  constructor(s3: S3, bucket: string) {
    this.s3 = s3;
    this.bucket = bucket;
  }

  public list(): Observable<S3Object[]> {
    return from(this.s3.listObjectsV2({ Bucket: this.bucket }).promise()).pipe(
      map((output: S3.ListObjectsV2Output) => {
        return output.Contents!.map((object: S3.Object) => {
          return new S3Object(this.s3, this.bucket, object.Key!);
        });
      }),
    );
  }

  public get(request: S3GetObjectRequest): Observable<S3Object> {
    return from(this.s3.getObject({ Bucket: this.bucket, ...request }).promise()).pipe(
      map((output: S3.GetObjectOutput) => {
        return new S3Object(this.s3, this.bucket, request.Key, Object.assign({}, request, output));
      }),
    );
  }

  public stream(request: S3GetObjectRequest): Readable {
    return this.s3.getObject({ Bucket: this.bucket, ...request }).createReadStream();
  }

  public put(request: S3PutObjectRequest): Observable<S3Object> {
    return from(this.s3.putObject({ Bucket: this.bucket, ...request }).promise()).pipe(
      map((output: S3.PutObjectOutput) => {
        return new S3Object(this.s3, this.bucket, request.Key, Object.assign({}, request, output));
      }),
    );
  }
}
