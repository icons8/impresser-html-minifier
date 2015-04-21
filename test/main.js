var
  should = require('should'),
  HtmlMinify = require('..')
  ;

describe('impress-html-minify', function () {
  it('should work', function(done) {
    var
      minify = new HtmlMinify();

    minify.apply('<input type=" text " name="text" required="required" />', function(err, data) {
      if (err) return done(err);

      should(data).equal('<input type=text name=text required>');
      done();
    });
  });

  //it('svg should work', function(done) {
  //  var
  //    minify = new HtmlMinify();
  //
  //  minify.apply('<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><g></g></svg>', function(err, data) {
  //    if (err) return done(err);
  //
  //    should(data).equal('<svg xmlns=http://www.w3.org/2000/svg width=26 height=26 viewbox=\"0 0 26 26\"><g></g></svg>');
  //    done();
  //  });
  //});

});