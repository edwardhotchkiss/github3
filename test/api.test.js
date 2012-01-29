
var vows = require('vows');
var assert = require('assert');

var github3 = new require('../lib/github3');

vows.describe('api tests').addBatch({
  // _get
  'when making a generic _get call to /orgs/ingklabs/public_members':{
    topic:function(){ 
      github3._get('/orgs/ingklabs/public_members', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getUser
  'when making a call to getUser(edwardhotchkiss,':{
    topic:function(){ 
      github3.getUser('edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getOrgMembers
  'when making a call to getOrgMembers(ingklabs,':{
    topic:function(){ 
      github3.getOrgMembers('ingklabs', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getUserRepos
  'when making a call to getUserRepos(edwardhotchkiss,':{
    topic:function(){ 
      github3.getUserRepos('edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getUsersWatched
  'when making a call to getUsersWatched(edwardhotchkiss,':{
    topic:function(){ 
      github3.getUsersWatched('edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getFollowers
  'when making a call to getFollowers(edwardhotchkiss,':{
    topic:function(){ 
      github3.getFollowers('edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getFollowing
  'when making a call to getFollowing(edwardhotchkiss,':{
    topic:function(){ 
      github3.getFollowing('edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getContributors
  'when making a call to getContributors(ShowOffPad,schacon,':{
    topic:function(){ 
      github3.getContributors('ShowOffPad','schacon', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getLanguages
  'when making a call to getLanguages(github3,edwardhotchkiss,':{
    topic:function(){ 
      github3.getLanguages('github3','edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getBranches
  'when making a call to getLanguages(github3,edwardhotchkiss,':{
    topic:function(){ 
      github3.getBranches('github3','edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getCollaborators
  'when making a call to getCollaborators(ShowOffPad,schacon,':{
    topic:function(){ 
      github3.getCollaborators('ShowOffPad','schacon', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getCommits
  'when making a call to getCollaborators(github3,edwardhotchkiss,':{
    topic:function(){ 
      github3.getCommits('github3','edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  },
  // getForks
  'when making a call to getForks(github3,edwardhotchkiss,':{
    topic:function(){ 
      github3.getForks('github3','edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);	  
      assert.equal(typeof(data), 'object');
    }
  },
  // getWatchers
  'when making a call to getWatchers(github3,edwardhotchkiss,':{
    topic:function(){ 
      github3.getWatchers('github3','edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
		console.log(data);
      assert.equal(error, null);	  
      assert.equal(typeof(data), 'object');
    }
  },
  // getRepository
  'when making a call to getWatchers(github3,intabulas,':{
    topic:function(){ 
      github3.getRepository('github3','intabulas', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
   	  console.log(data);
      assert.equal(error, null);	  
      assert.equal(typeof(data), 'object');
    }
  },
  
  
}).export(module);

/* EOF */