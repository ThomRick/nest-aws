import { S3ModuleOptions } from './interfaces';
import { Provider } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { S3_MODULE_OPTIONS } from './s3.constantes';

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
    }
  }
}
