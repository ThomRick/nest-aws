import { Global, Module, DynamicModule } from '@nestjs/common';
import { S3ModuleOptions, S3ModuleAsyncOptions } from './interfaces';

@Global()
@Module({})
export class S3CoreModule {
  public static register(options: S3ModuleOptions): DynamicModule {
    throw new Error('Method not implemented');
  }

  public static registerAsync(options: S3ModuleAsyncOptions): DynamicModule {
    throw new Error('Method not implemented');
  }
}
