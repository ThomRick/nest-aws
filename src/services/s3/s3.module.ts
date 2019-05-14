import { DynamicModule, Module } from '@nestjs/common';
import { S3ModuleAsyncOptions, S3ModuleOptions } from './interfaces';
import { S3CoreModule } from './s3-core.module';

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
}
