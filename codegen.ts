import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: ['aws.gql', 'amplify/backend/api/emojoeexpo/schema.graphql'],
  // documents: 'src/**/*.tsx',
  hooks: {
    afterAllFileWrite: [
      'prettier --write',
      // 'eslint --fix'
    ],
  },
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
