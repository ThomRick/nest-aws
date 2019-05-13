import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { S3 } from 'aws-sdk';

// tslint:disable-next-line:no-empty-interface interface-name
export interface S3ModuleOptions extends S3.Types.ClientConfiguration {}

// tslint:disable-next-line:interface-name
export interface S3ModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<S3OptionsFactory>;
  useClass?: Type<S3OptionsFactory>;
  useFactory?: (...args: any[]) => S3ModuleOptions | Promise<S3ModuleOptions>;
  inject?: any[];
}

// tslint:disable-next-line:interface-name
export interface S3OptionsFactory {
  createS3Options(): S3ModuleOptions | Promise<S3ModuleOptions>;
}
