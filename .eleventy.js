module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/site/assets')

  return {
    templateFormats: ['njk', 'md', 'png', 'jpg', 'jpeg'],
    dir: {
      input: 'src/site',
      output: 'dist',
    },
  }
}
