const getStyleRule = require('../utils/get_style_rule')
const { additional_paths: includePaths } = require('../config')

module.exports = getStyleRule(/\.(scss|sass)(\.erb)?$/i, false, [
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      sassOptions: {
        includePaths
      }
    }
  }
])
