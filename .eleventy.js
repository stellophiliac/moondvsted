var moment = require('moment'); // require
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(pluginRss);

    //passthrough

    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addWatchTarget("src/assets/");
    eleventyConfig.addPassthroughCopy("src/media/");
    eleventyConfig.addPassthroughCopy("src/blog/");
    eleventyConfig.addPassthroughCopy("src/writing/");

    eleventyConfig.addPassthroughCopy("png");
    eleventyConfig.addPassthroughCopy("jpg");
    eleventyConfig.addPassthroughCopy("webp");
    eleventyConfig.addPassthroughCopy("js");

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
        }
    }
}