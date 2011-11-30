
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
  }
}).export(module);

/* EOF */