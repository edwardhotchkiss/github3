
/*!
  NodeJS GitHub API (v3) Wrapper
  @author Edward Hotchkiss
*/

module.exports = github3 = function(){};

// Mikeal's http.request wrapper
var request = require('request');

github3.username = '';
github3.password = '';

// oAuth Token
github3.accessToken = '';

// API Rate Limit Details
github3.rateLimit          = 5000;
github3.rateLimitRemaining = 5000;	


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
  Sets oAuth Access Token for GitHub access.
  @param {Token}
*/

github3.setAccessToken = function(token) {
  this.accessToken = token;
};



/*!
  Builds and executes a github api call
  @param {Object} options or just API URI Path for GET requests
  @param {Function} callback Function to call upon error or success
  @returns {Object} error, {Object} data
*/

github3._request = function (options,callback) {
  if (this.username && this.password) {
    // if we have credentials, use them in request
    base = 'https://'+this.username+':'+this.password+'@api.github.com';
  }
  else {
    base = 'https://api.github.com';
  }
  if (typeof(options) != "string") {
    options.uri = base + options.uri
  }
  if ( this.accessToken) {
	  options.headers['Authorization'] = 'token ' + this.accessToken;
  }
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

github3._get = function(path, callback) {
  this._request({
	  uri: path,
	  headers: {}
  }, callback);
};

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
}

github3._patch = function(path, body, callback) {
  var 
    body = body || '{}'
  this._request({
    uri:path,
    method:"PATCH",
    headers: {
      "Content-Length":body.length
    },
    body:body
  },
  callback);
}

github3._post = function(path, body, callback) {
  var body = body || '{}'
  this._request({
    uri:path,
    method:"POST",
    headers: {
      "Content-Length":body.length
    },
    body:body
  },
  callback);
}


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

github3.getPullRequests = function (repo,name,state,callback){
  var 
    state = state || "open"
  this._get('/repos/'+name+'/'+repo+'/pulls?state='+state,callback)
}

github3.getIssueComments = function (repo,name,issueId,callback) {
  this._get('/repos/'+name+'/'+repo+'/issues/'+issueId+'/comments',callback)
}

github3.mergePullRequest = function (repo,name,pullRequestId,callback) {
  this._put('/repos/'+name+'/'+repo+'/pulls/'+pullRequestId+'/merge','',callback)
}

github3.closePullRequest = function (repo,name,pullRequestId,callback) {
  this._patch('/repos/'+name+'/'+repo+'/pulls/'+pullRequestId+'','{ "state":"closed" }',callback)
}

/*
  Repository Contributors
  @class github3
  @method getContributors
*/

github3.getContributors = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/contributors',callback)
}

/*
  Repository Languages
  @class github3
  @method getLanguages
*/

github3.getLanguages = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/languages',callback)
}

/*
  Repository Branches
  @class github3
  @method getBranches
*/

github3.getBranches = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/branches',callback)
}

/*
  Repository Collaborators
  @class github3
  @method getCollaborators
*/

github3.getCollaborators = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/collaborators',callback)
}

/*
  Repository Commits
  @class github3
  @method getCommits
*/

github3.getCommits = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/commits',callback)
}

/*
  Repository last commit ref
  @class github3
  @method getLastCommitRef
*/

github3.getLastCommitRef = function (repo,name,branch,callback) {
  // /repos/#{@repo}/git/refs/heads/#{@branch}"
  this._get('/repos/'+name+'/'+repo+'/git/refs/heads/'+branch, callback)
}

/*
  Repository commit
  @class github3
  @method getCommit
*/

github3.getCommit = function (repo,name,sha,callback) {
  // /repos/{name}/{repo}/git/commits/{sha}
  this._get('/repos/'+name+'/'+repo+'/git/commits/'+sha, callback);
}

/*
  Repository tree
  @class github3
  @method getTree
*/

github3.getTree = function (repo,name,sha,callback) {
  // /repos/{name}/{repo}/git/trees/{sha}
  this._get('/repos/'+name+'/'+repo+'/git/trees/'+sha, callback);
}

/*
  Repository blob
  @class github3
  @method getBlobText
*/

github3.getBlobText = function (repo,name,sha,callback) {
  // /repos/{name}/{repo}/git/blobs/{sha}
  this._get('/repos/'+name+'/'+repo+'/git/blobs/'+sha, function(error, data) {
      if (data.content != null && data.encoding == 'base64') {
        data.content = new Buffer(data.content.replace('\n', ''), 'base64').toString('utf8')
      }
      
      callback(error, data);
      });
}

/*
  Repository blob
  @class github3
  @method getBlobTextByName
*/

github3.getBlobTextByFilePath = function (repo,name,path,callback) {
  var self = this;
  this.getLastCommitRef(repo, name, 'master', function(error, data) {
    if (error !== null)
        callback(error, null);
    
    self.getCommit(repo, name, data.object.sha, function(error, data) {
        if (error !== null)
            callback(error, null);
        
        self.getTree(repo, name, data.tree.sha, function(error, data) {
            if (error !== null)
                callback(error, null);
            
            data.tree.forEach(function (item) {
                if (item.path === path) {
                    self.getBlobText(repo, name, item.sha, callback);
                }
            });
        });
    });
  });
};

/*
  Repository Forks
  @class github3
  @method getForks
*/

github3.getForks = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/forks',callback)
}

/*
  Repository Watchers
  @class github3
  @method getWatchers
*/

github3.getWatchers = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo+'/watchers',callback)
}

/*
  Repository 
  @class github3
  @method getRepository
*/

github3.getRepository = function (repo,name,callback) {
  this._get('/repos/'+name+'/'+repo,callback)
}

/*
  Repository tree
  @class github3
  @method createTreeAndAddFile
*/

github3.createTreeAndAddFile = function (repo,name,path,content,last_tree_sha,callback) {
    var new_tree = {
      "base_tree" : last_tree_sha,
      "tree" : [{"path" : path, "mode" : "100644", "type" : "blob", "content": content}]
    };
    
    // /repos/#{@repo}/git/trees
    this._post('/repos/'+name+'/'+repo+'/git/trees', JSON.stringify(new_tree), callback);
};

github3.createCommit = function (repo,name,message,tree_sha,parent_commit_sha,author,callback) {
    var commit = { 'message' : message, 'parents' : [parent_commit_sha], 'tree' : tree_sha, 'author' : author };
    
    // /repos/#{@repo}/git/commits
    this._post('/repos/'+name+'/'+repo+'/git/commits', JSON.stringify(commit), callback);
};

github3.updateRefHead = function (repo,name,branch,commit_sha,force,callback) {    
    var ref = {'sha' : commit_sha, 'force' : force};
    
    // /repos/#{@repo}/git/refs/heads/#{@branch}
    this._post('/repos/'+name+'/'+repo+'/git/refs/heads/'+ branch, JSON.stringify(ref), callback);
};


/* EOF */