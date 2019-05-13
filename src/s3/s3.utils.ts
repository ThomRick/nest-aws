export const getBucketToken = (name: string): string => {
  return `S3_BUCKET_${name.toUpperCase().replace(/-/g, '_')}`;
};
