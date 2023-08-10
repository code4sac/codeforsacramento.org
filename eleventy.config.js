const yaml = require("js-yaml");
/**
 * Configuration for eleventy
 * @parameter config
 */
const eleventyConfig = config => {
  config.addDataExtension("yml", contents => yaml.load(contents));
  config.ignores.add("README.md");
  config.ignores.add("blog/");
  config.ignores.add("_posts/");
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("images");
  config.addPassthroughCopy("js");
  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts"
    }
  }
}

module.exports = eleventyConfig
