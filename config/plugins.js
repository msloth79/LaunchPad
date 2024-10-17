export default ({ env }) => ({
  upload: {
      config: {
          provider: 'aws-s3',
          providerOptions: {
              s3Options: {
                  accessKeyId: env('
                  accessKeyId: env('ASIA6BH7RWTDJJVT5FC'),
                  secretAccessKey: env('L5dRmQidG9NEpfIsFaDWWn1G7xBzzT0cBNlxxF2Z'),
                  region: env('us-east-1'),
                  params: {
                    Bucket: env('awslxstr1'),
                  },
              }
          },
      },
  }
});
