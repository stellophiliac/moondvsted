var moment = require('moment'); // require
    const { EleventyRenderPlugin } = require("@11ty/eleventy"); 

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(EleventyRenderPlugin);

    //passthrough

    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addWatchTarget("src/assets/");
    eleventyConfig.addPassthroughCopy("src/img/");
    eleventyConfig.addWatchTarget("src/img/");

    eleventyConfig.addPassthroughCopy("src/");

    // filters
    eleventyConfig.addFilter("formatDate", function (value) {
        const date = moment(new Date(value)).utc().format("MMM DD, YYYY");
        return date;
    });

    eleventyConfig.addFilter("formatDateShort", function (value) {
        const date = moment(new Date(value)).utc().format("YYYY-MM-DD");
        return date;
    });

    // collections
    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md").reverse();
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
            includes: "../_includes"
        }
    }
}