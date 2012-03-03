
/*!
 * NodeJS GitHub API (v3) Wrapper
 * @author Edward Hotchkiss
 * @class github3
 */

var request = require('request');

module.exports = github3 = function(){};

github3.username = '';
github3.password = '';

// oAuth Token
github3.accessToken = '';

// API Rate Limit Details
github3.rateLimit          = 5000;
github3.rateLimitRemaining = 5000;	

/*!
 * Sets credentials for GitHub access.
 * @class github3
 * @method setCredentials
 * @param {String} username GitHub username
 * @param {String} password GitHub password
 */

github3.setCredentials = function(username, password) {
  this.username = username;
  this.password = password;
};

/*!
 * Sets oAuth Access Token for GitHub access.
 * @class github3
 * @method setAccessToken
 * @param {Token}
*/

github3.setAccessToken = function(token) {
  this.accessToken = token;
};

/*!
 * Builds and executes a github api call
 * @class github3
 * @private _request
 * @param {Object} options or just API URI Path for GET requests
 * @param {Function} callback Function to call upon error or success
 * @returns {Object} error, {Object} data
*/

github3._request = function (options, callback) {
  if (this.username && this.password) {
    // if we have credentials, use them in request
    base = 'https://'+this.username+':'+this.password+'@api.github.com';
  } else {
    base = 'https://api.github.com';
  };
  if (typeof(options) != "string") {
    options.uri = base + options.uri
  };
  if (this.accessToken) {
	  options.headers['Authorization'] = 'token ' + this.accessToken;
  };
  request(options, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      switch(response.statusCode) {
        case 404:
          callback(new Error('Path not found'), null);
          break;
        default:
          try {
			     // Grab the Rate Limit details and make them available
  			   github3.rateLimit          = response.headers['x-ratelimit-limit'];
  			   github3.rateLimitRemaining = response.headers['x-ratelimit-remaining'];	
            var data = JSON.parse(body);
            callback(null, data);
          } catch (error) {
            callback(error, null);
          };
      };
    };
  });
};

/*!
 * Performs a GET
 * @class github3
 * @private _get
 * @param {String} path API endpoint 
 * @param {Functon} callback Method to execute on completion
 */

github3._get = function(path, callback) {
  this._request({
	  uri: path,
	  headers: {}
  }, callback);
};

/*!
 * Performs a PUT
 * @class github3
 * @private _put
 * @param {String} path API endpoint 
 * @param {Object} body Data
 * @param {Functon} callback Method to execute on completion
 */

github3._put = function(path, body, callback) {
  var body = body || '{}'
  this._request({
    uri:path,
    method:"PUT",
    headers: {
      "Content-Length":body.length
    },
    body:body
  },
  callback);
};

/*!
 * Performs a PATCH
 * @class github3
 * @private _patch
 * @param {String} path API endpoint 
 * @param {Object} body Data
 * @param {Functon} callback Method to execute on completion
 */

github3._patch = function(path, body, callback) {
  var body = body || '{}'
  this._request({
    uri:path,
    method:'PATCH',
    headers:{
      'Content-Length':body.length
    },
    body:body
  },
  callback);
}


/*!
 * Retreives a Users Information
 * @class github3
 * @method getUser
 * @param {Functon} callback Method to execute on completion
 */

github3.getUser = function(user, callback){
  this._get('/users/' + user, callback);
};

/*!
 * Retrieves a Users Repos
 * @class github3
 * @method getUserRepos
 * @param {Functon} callback Method to execute on completion
 */

github3.getUserRepos = function(user, callback){
  this._get('/users/' + user + '/repos', callback);
};

/*
 * Repos a user is watching
 * @class github3
 * @method getUserRepos
 * @param {Functon} callback Method to execute on completion
 */

github3.getUsersWatched = function(user, callback){
  this._get('/users/' + user + '/watched', callback);
};

/*!
 * Retrieve Organization Members
 * @class github3
 * @method getOrgMembers
 * @param {Functon} callback Method to execute on completion
 */

github3.getOrgMembers = function(org, callback){
  this._get('/orgs/'+ org + '/public_members', callback);
};

/*!
 * Followers
 * @class github3
 * @method getFollowers
 * @param {Functon} callback Method to execute on completion
 */

github3.getFollowers = function(user, callback){
  this._get('/users/'+ user + '/followers', callback);
};

/*!
 * Retrieve users following `user`
 * @class github3
 * @method getFollowers
 * @param {Functon} callback Method to execute on completion
 */

github3.getFollowing = function(user, callback){
  this._get('/users/'+ user + '/following', callback);
};

/*!
 * Retrieve pull requests (open/closed) on a repository
 * @class github3
 * @method getPullRequests
 * @param {String} repo Repository
 * @param {String} state Pull Request Status -- open or closed
 * @param {Functon} callback Method to execute on completion
 */

github3.getPullRequests = function (repo, name, state, callback){
  state = state || 'open';
  this._get('/repos/'+name+'/'+repo+'/pulls?state='+state, callback)
};

github3.getIssueComments = function (repo, name, issueId, callback) {
  this._get('/repos/'+name+'/'+repo+'/issues/'+issueId+'/comments', callback)
};

github3.mergePullRequest = function (repo, name, pullRequestId, callback) {
  this._put('/repos/'+name+'/'+repo+'/pulls/'+pullRequestId+'/merge','', callback)
};

github3.closePullRequest = function (repo, name, pullRequestId, callback) {
  this._patch('/repos/'+name+'/'+repo+'/pulls/'+pullRequestId+'','{ "state":"closed" }', callback)
};

/*!
 * Repository Contributors
 * @class github3
 * @method getContributors
 * @param {Functon} callback Method to execute on completion
 */

github3.getContributors = function(repo, name, callback) {
  this._get('/repos/'+name+'/'+repo+'/contributors',callback)
};

/*!
 * Repository Languages
 * @class github3
 * @method getLanguages
 */

github3.getLanguages = function(repo, name, callback) {
  this._get('/repos/'+name+'/'+repo+'/languages',callback)
};

/*!
 * Retrieve repository branches
 * @class github3
 * @method getBranches
 * @param {Functon} callback Method to execute on completion
 */

github3.getBranches = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/branches',callback)
};

/*!
 * Retrieve repository collaborators
 * @class github3
 * @method getCollaborators
 * @param {Functon} callback Method to execute on completion
 */

github3.getCollaborators = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/collaborators',callback)
}

/*!
 * Retrieve Repository Commits
 * @class github3
 * @method getCommits
 * @param {Functon} callback Method to execute on completion
 */

github3.getCommits = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/commits',callback)
};

/*
 * Repository Forks
 * @class github3
 * @method getForks
 * @param {Functon} callback Method to execute on completion
*/

github3.getForks = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/forks',callback)
};

/*!
 * Repository Watchers
 * @class github3
 * @method getWatchers
 * @param {Functon} callback Method to execute on completion
 */

github3.getWatchers = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/watchers',callback)
};

/*!
 * Repository 
 * @class github3
 * @method getRepository
 * @param {Functon} callback Method to execute on completion
 */

github3.getRepository = function (repo, name ,callback) {
  this._get('/repos/'+name+'/'+repo,callback)
};

/*!
 * Retrieve repository labels
 * @class github3
 * @method getLabels
 * @param {Functon} callback Method to execute on completion
 */

github3.getLabels = function(repo, name, callback) {
  this._get('/repos/'+name+'/'+repo+'/labels', callback);
};

/*!
 * Retrieve labels on a repository issue by ID #
 * @class github3
 * @method getIssueLabels
 * @param {Functon} callback Method to execute on completion
 */

github3.getIssueLabels = function(repo, name, issueId, callback) {
  this._get('/repos/'+name+'/'+repo+'/issues/'+issueId+'/labels', callback);
};

/* EOF */