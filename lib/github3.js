
/*!
  NodeJS GitHub API (v3) Wrapper
  @author Edward Hotchkiss
*/

module.exports = github3 = function(){};

// Mikeal's http.request wrapper
var request = require('request');

github3.username = '';
github3.password = '';

/*!
  Sets credentials for GitHub access.
  @param {String} username GitHub username
  @param {String} password GitHub password
*/

github3.setCredentials = function(username,password) {
  this.username = username;
  this.password = password;
};

/*!
  Builds and executes a github api call
  @param {String} path API URI Path
  @param {Function} callback Function to call upon error or success
  @returns {Object} error, {Object} data
*/

github3._get = function(path, callback) {
  if (this.username && this.password) {
    // if we have credentials, use them in request
    base = 'https://'+this.username+':'+this.password+'@api.github.com';
  }
  else {
    base = 'https://api.github.com';
  } 
  request(base + path, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      switch(response.statusCode) {
        case 404:
          callback(new Error('Path not found'), null);
          break;
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

/*
  Users
  @class github3
  @method getUser
*/

github3.getUser = function(user, callback){
  this._get('/users/' + user, callback);
};

/*
  User's Repos
  @class github3
  @method getUserRepos
*/

github3.getUserRepos = function(user, callback){
  this._get('/users/' + user + '/repos', callback);
};

/*
  Repos a user is watching
  @class github3
  @method getUserRepos
*/

github3.getUsersWatched = function(user, callback){
  this._get('/users/' + user + '/watched', callback);
};

/*
  Organizations
  @class github3
  @method getOrgMembers
*/

github3.getOrgMembers = function(org, callback){
  this._get('/orgs/'+ org + '/public_members', callback);
};

/*
  Followers
  @class github3
  @method getFollowers
*/

github3.getFollowers = function(user, callback){
  this._get('/users/'+ user + '/followers', callback);
};

/*
  Following
  @class github3
  @method getFollowers
*/

github3.getFollowing = function(user, callback){
  this._get('/users/'+ user + '/following', callback);
};

/* EOF */