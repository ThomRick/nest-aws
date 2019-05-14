import { Inject } from '@nestjs/common';
import { getBucketToken } from '../s3.utils';

export const InjectBucket = (name: string) => Inject(getBucketToken(name));
