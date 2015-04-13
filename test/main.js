var
  should = require('should'),
  HtmlMinify = require('..')
  ;

describe('impress-html-minify', function () {
  it('should work', function() {
    var
      minify = new HtmlMinify();

    should(minify.apply('<input type=" text " name="text" required="required" />')).equal('<input name=text required/>');
  });
});