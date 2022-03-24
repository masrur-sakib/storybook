module.exports = {
  stories: ['../src/**/*.stories.@(ts|js|mdx)'],
  logLevel: 'debug',
  addons: ['@storybook/addon-docs', '@storybook/addon-controls', '@storybook/preset-scss'],
  core: {
    builder: 'webpack4',
  },
  features: {
    buildStoriesJson: true,
  },
};
