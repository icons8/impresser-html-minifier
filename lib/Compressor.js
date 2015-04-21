var
  Minimize = require('minimize');

module.exports = Compressor;

function Compressor(options) {
  var
    defaults;

  options = options || {};
  defaults = {
    loose: true
  };

  Object.keys(defaults).forEach(function(property) {
    if (typeof options[property] == 'undefined') {
      options[property] = defaults[property];
    }
  });

  this.options = options;
  this.async = true;
}

Compressor.prototype = {

  apply: function(content, callback) {
    var
      minimize;

    minimize = new Minimize(this.options);

    minimize.parse(
      String(content || ''),
      function (err, data) {
        if (err) {
          callback && callback(err);
          return;
        }
        callback && callback(null, data);
      }
    );
  }

};
