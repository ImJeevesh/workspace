import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'web-remote',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
