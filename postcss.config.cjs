const autoprefixer = require('autoprefixer');
const postcssCustomMedia = require('postcss-custom-media');
const openProps = require('open-props');
const postcssJitProps = require('postcss-jit-props');
const postcssPresetEnv = require('postcss-preset-env');
const csso = require('postcss-csso');
const postcssNesting = require('postcss-nesting');

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
      },
    }),
    autoprefixer(),
    csso(),
    postcssCustomMedia(),
    postcssJitProps(openProps),
    postcssNesting()
  ],
};

module.exports = config;
