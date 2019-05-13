import { DynamicModule, Module, Provider } from '@nestjs/common';
import { S3BucketOptions, S3ModuleAsyncOptions, S3ModuleOptions } from './interfaces';
import { S3CoreModule } from './s3-core.module';
import { S3ProviderFactory } from './s3-provider.factory';

@Module({})
export class S3Module {
  public static register(options: S3ModuleOptions): DynamicModule {
    return {
      module: S3Module,
      imports: [
        S3CoreModule.register(options),
      ],
    };
  }

  public static registerAsync(options: S3ModuleAsyncOptions): DynamicModule {
    return {
      module: S3Module,
      imports: [
        S3CoreModule.registerAsync(options),
      ],
    };
  }

  public static forFeature(buckets: S3BucketOptions[] = []): DynamicModule {
    const providers: Provider[] = S3ProviderFactory.createBuckets(buckets);
    return {
      module: S3Module,
      providers,
      exports: providers,
    };
  }
}
