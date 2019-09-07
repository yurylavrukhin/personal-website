module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/site/assets')

  return {
    templateFormats: ['njk', 'md', 'png', 'jpg'],
    dir: {
      input: 'src/site',
      output: 'dist',
    },
  }
}
