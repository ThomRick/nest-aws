import { S3 } from 'aws-sdk';
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

export interface S3ModuleOptions extends S3.ClientConfiguration {}

export interface S3ModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<S3OptionsFactory>;
  useClass?: Type<S3OptionsFactory>;
  useFactory?: (...args: any[]) => S3ModuleOptions | Promise<S3ModuleOptions>;
  inject?: any[];
}

export interface S3OptionsFactory {
  createS3Options(): S3ModuleOptions | Promise<S3ModuleOptions>;
}
