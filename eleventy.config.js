/**
 * Configuration for eleventy
 * @parameter eleventyConfig
 */
const eleventyConfig = config => {
  config.ignores.add("README.md");
  config.ignores.add("projects/");
  config.ignores.add("blog/");
  config.ignores.add("_posts/");
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("images");
  config.addPassthroughCopy("js");
  return {
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "md"],
    dir: {
      includes: "_includes",
      layouts: "_layouts"
    }
  }
}

module.exports = eleventyConfig
