import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    {
      directory: '../src/title',
      titlePrefix: 'Custom Prefix',
    },
    {
      directory: '../src',
      titlePrefix: 'Demo',
      files: '*.stories.(js|ts|tsx)',
    },
    {
      directory: '../src',
      files: '**/*.mdx',
    },
  ],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-storyshots',
    '@storybook/addon-a11y',
    'storybook-addon-swc',
  ],
  docs: {
    // enabled: false,
    defaultName: 'Info',
    // docsPage: false,
  },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
  core: {
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true,
  },
  features: {
    postcss: false,
    storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    buildStoriesJson: true,
    babelModeV7: true,
    warnOnLegacyHierarchySeparator: false,
    previewMdx2: true,
    breakingChangesV7: true,
  },
  framework: '@storybook/react-webpack5',
};
module.exports = config;
