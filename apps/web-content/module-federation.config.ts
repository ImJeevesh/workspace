import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'web-content',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
