import { S3 } from 'aws-sdk';
import { S3BucketEntityManager } from '../entity-managers';

export class S3Client {
  private readonly s3: S3;

  constructor(s3: S3) {
    this.s3 = s3;
  }

  public buckets(): S3BucketEntityManager {
    return new S3BucketEntityManager(this.s3);
  }
}
