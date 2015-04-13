var
  minify = require('html-minifier/dist/htmlminifier.js').minify,
  defaults = require('defaults');

module.exports = Compressor;

function Compressor(options) {
  this.options = defaults(options, {
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeCDATASectionsFromCDATA: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    caseSensitive: true
  });
}

Compressor.prototype = {

  apply: function(content) {
    return minify(
      String(content || ''),
      this.options
    );
  }

};
