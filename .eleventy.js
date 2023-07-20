const mathjax = require('eleventy-plugin-mathjax');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPlugin(mathjax);

    eleventyConfig.addLayoutAlias('single', 'layouts/single.njk');

    eleventyConfig.addCollection("pages", function(collection) {
      return collection.getAllSorted().filter(item => !item.data.permalink);
    });
  
    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        output: "public"
      }
    };
  };
  