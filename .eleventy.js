const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/site/assets')
  eleventyConfig.addPlugin(pluginRss)

  return {
    templateFormats: ['njk', 'md', 'png', 'jpg', 'jpeg', 'asc', 'avif', 'svg', 'mp4'],
    dir: {
      input: 'src/site',
      output: 'dist',
    },
  }
}
