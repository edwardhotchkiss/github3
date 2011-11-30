
/*!
  NodeJS GitHub API (v3) Wrapper
  @author Edward Hotchkiss
*/

module.exports = github3 = function(){};

// Mikeal's http.request wrapper
var request = require('request');

/*!
  Builds and executes a github api call
  @param {String} path API URI Path
  @param {Function} callback Function to call upon error or success
  @returns {Object} error, {Object} data
*/

github3._get = function(path, callback) {
  base = 'https://api.github.com'
  request(base + path, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      switch(response.statusCode) {
        default:
          try {
            var data = JSON.parse(body);
            callback(null, data);
          } catch (error) {
            callback(error, null);
          };
      };
    };
  });
};

/* EOF */