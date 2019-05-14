import { S3 } from 'aws-sdk';
import { S3ObjectEntityManager } from '../entity-managers';

export class S3Bucket {
  private readonly s3: S3;

  private readonly name: string;

  constructor(s3: S3, name: string) {
    this.s3 = s3;
    this.name = name;
  }

  public objects(): S3ObjectEntityManager {
    return new S3ObjectEntityManager(this.s3, this.name);
  }
}
