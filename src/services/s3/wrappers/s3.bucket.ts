import { S3 } from 'aws-sdk';

// tslint:disable-next-line:max-line-length
export type BucketConfiguration = S3.Types.Bucket & S3.Types.CreateBucketRequest & S3.Types.CreateBucketConfiguration & S3.Types.CreateBucketOutput;

export class S3Bucket {
  private readonly configuration: BucketConfiguration;
  private readonly s3?: S3;

  private constructor(configuration: BucketConfiguration, s3?: S3) {
    this.s3 = s3;
    this.configuration = configuration;
  }

  public static create(configuration: BucketConfiguration): (s3?: S3) => S3Bucket {
    return (s3?: S3): S3Bucket => {
      return new S3Bucket(configuration, s3);
    };
  }
}
