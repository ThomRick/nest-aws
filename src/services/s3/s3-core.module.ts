import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { S3ModuleAsyncOptions, S3ModuleOptions, S3OptionsFactory } from './interfaces';
import { S3ProviderFactory } from './s3-provider.factory';
import { S3_MODULE_OPTIONS } from './s3.constantes';

@Global()
@Module({})
export class S3CoreModule {
  public static register(options: S3ModuleOptions): DynamicModule {
    const client: Provider = S3ProviderFactory.createS3Client(options);
    return {
      module: S3CoreModule,
      providers: [
        client,
      ],
      exports: [
        client,
      ],
    };
  }

  public static registerAsync(options: S3ModuleAsyncOptions): DynamicModule {
    const client: Provider = S3ProviderFactory.createS3ClientAsync();
    return {
      module: S3CoreModule,
      imports: options.imports,
      providers: [
        client,
        ...this.createAsyncProviders(options),
      ],
      exports: [
        client,
      ],
    };
  }

  private static createAsyncProviders(options: S3ModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [ this.createAsyncOptionsProvider(options) ];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      } as Provider,
    ];
  }

  private static createAsyncOptionsProvider(options: S3ModuleAsyncOptions): Provider {
    if (options.useFactory) {
      return {
        provide: S3_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: S3_MODULE_OPTIONS,
      useFactory: async (factory: S3OptionsFactory) => await factory.createS3Options(),
      inject: [ options.useExisting, options.useClass ],
    };
  }
}
