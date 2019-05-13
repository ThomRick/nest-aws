import { Provider } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { S3BucketOptions, S3ModuleOptions } from './interfaces';
import { S3Bucket } from './models';
import { S3_MODULE_OPTIONS } from './s3.constantes';
import { getBucketToken } from './s3.utils';

export class S3ProviderFactory {
  public static createS3Client(options: S3ModuleOptions): Provider {
    return {
      provide: S3,
      useFactory: (): S3 => {
        return new S3(options);
      },
    };
  }

  public static createS3ClientAsync(): Provider {
    return {
      provide: S3,
      useFactory: (options: S3ModuleOptions): S3 => {
        return new S3(options);
      },
      inject: [ S3_MODULE_OPTIONS ],
    };
  }

  public static createBuckets(options: S3BucketOptions[]): Provider[] {
    return options.map((option: S3BucketOptions) => this.createBucket(option));
  }

  private static createBucket(option: S3BucketOptions): Provider {
    return {
      provide: getBucketToken(option.Bucket),
      useFactory: async (s3: S3): Promise<S3Bucket> => {
        try {
          const list: S3.ListBucketsOutput = await s3.listBuckets().promise();
          const bucket: S3.Bucket | undefined = list.Buckets!.find(
            (current: S3.Bucket) => current.Name === option.Bucket,
          );
          if (!bucket) {
            await s3.createBucket(option).promise();
          }
        } catch (error) {
          process.stdout.write(`${error.message}\n${error.stack}\n`);
        }
        return new S3Bucket(s3, option.Bucket);
      },
      inject: [ S3 ],
    };
  }
}
