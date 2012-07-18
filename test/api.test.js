
/**
 * @list dependencies
 **/

var vows = require('vows')
  , assert = require('assert')
  , github3 = new require('../lib/github3');

vows.describe('api tests').addBatch({

  // isFunction
  'when instantiating github3':{
    topic:function(){
      return new github3();
    },
    'github3 should be an instantiable object':function(topic) {
      assert.equal(typeof(topic), 'object');
    }
  },

  // _get
  'when making a generic _get call to /orgs/github/public_members':{
    topic:function(){ 
      github3._get('/orgs/github/public_members', this.callback);
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
  'when making a call to getOrgMembers(github,':{
    topic:function(){ 
      github3.getOrgMembers('github', this.callback);
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
  'when making a call to getBranches(github3,edwardhotchkiss,':{
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
      assert.equal(error, null);	  
      assert.equal(typeof(data), 'object');
    }
  },
  
  // getLastCommitRef
  'when getting the last commit(githubapi-testrepo,woloski,':{
    topic:function(){ 
       // /repos/woloski/githubapi-testrepo/git/refs/heads/master
       github3.getLastCommitRef('githubapi-testrepo','woloski', 'master', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);      
      assert.equal(typeof(data), 'object');
      assert.equal(data.object.sha, '926a49e2ca29ec3f31c990e55134d5ac5cce1ec3');
    }
  },
  
  // getCommit
  'when getting a commit(githubapi-testrepo,woloski,':{
    topic:function(){ 
      github3.getCommit('githubapi-testrepo','woloski', '926a49e2ca29ec3f31c990e55134d5ac5cce1ec3', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);      
      assert.equal(typeof(data), 'object');
      assert.equal(data.message, 'second commit\n');
      assert.equal(data.sha, '926a49e2ca29ec3f31c990e55134d5ac5cce1ec3');
      assert.equal(data.tree.sha, '07c74bb3dc6e074b95d1293ddbc64543eef6b14b');
    }
  },

  // getTree
  'when getting a tree(githubapi-testrepo,woloski,':{
    topic:function(){ 
      github3.getTree('githubapi-testrepo','woloski', '07c74bb3dc6e074b95d1293ddbc64543eef6b14b', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);      
      assert.equal(typeof(data), 'object');
      assert.equal(data.sha, '07c74bb3dc6e074b95d1293ddbc64543eef6b14b');
      assert.equal(data.tree[0].path, 'README.md');
      assert.equal(data.tree[1].path, 'afile.txt');
    }
  },

  // getBlob
  'when getting a blob as text(githubapi-testrepo,woloski,':{
    topic:function(){ 
      github3.getBlobText('githubapi-testrepo','woloski', '7f52721c1c0b0b8190a3f30f36331e356f2ee282', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);      
      assert.equal(typeof(data), 'object');
      assert.equal(data.sha, '7f52721c1c0b0b8190a3f30f36331e356f2ee282');
      assert.equal(data.content, '# test readme\n\nthis is a markdown file');
    }
  },
  
  // getBlobTextByFilePath
  'when getting a blob as text from master branch by name(githubapi-testrepo,woloski,':{
    topic:function(){ 
      github3.getBlobTextByFilePath('githubapi-testrepo','woloski', 'README.md', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);      
      assert.equal(typeof(data), 'object');
      assert.equal(data.sha, '7f52721c1c0b0b8190a3f30f36331e356f2ee282');
      assert.equal(data.content, '# test readme\n\nthis is a markdown file');
    }
  },
  
  // createTreeAndAddFile
  'when creating a tree with a file(githubapi-testrepo,githubapi-test,':{
    topic:function(){ 
      github3.username = 'githubapi-test';
      github3.password = 'Passw0rd!';
      github3.createTreeAndAddFile('githubapi-testrepo','githubapi-test', 'new-file.txt', 'some content', '07c74bb3dc6e074b95d1293ddbc64543eef6b14b', this.callback);
      
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);    
      github3.getTree('githubapi-testrepo','woloski', data.sha, function(error, data) {
        assert.equal(error, null);      
        assert.equal(typeof(data), 'object');
        assert.equal(data.tree.length, 3);
        assert.equal(data.tree[data.tree.length-1].path, 'new-file.txt');
      }); 
    }
  },
  
  // createCommit
  'when creating a commit(githubapi-testrepo,githubapi-test,':{
    topic:function(){ 
      github3.username = 'githubapi-test';
      github3.password = 'Passw0rd!';
      var self = this;
      github3.createTreeAndAddFile('githubapi-testrepo','githubapi-test', 'new-file.txt', 'some content', '07c74bb3dc6e074b95d1293ddbc64543eef6b14b', function(error, data) {
        // 926a49e2ca29ec3f31c990e55134d5ac5cce1ec3 is the last commit sha
        // data.sha is the new tree sha
        if (error !== null) {
          self.callback(error, null);
        };  
        github3.createCommit('githubapi-testrepo','githubapi-test', 'commit from a unit test', data.sha, '926a49e2ca29ec3f31c990e55134d5ac5cce1ec3', 'woloski', self.callback);    
      });
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);    
      github3.getCommit('githubapi-testrepo','githubapi-test', data.sha, function(error, data) {
        assert.equal(error, null);      
        assert.equal(typeof(data), 'object');
        assert.equal(data.message, 'commit from a unit test');
      }); 
    }
  },
    
  // createCommit
  'when pushing a commit to a branch(githubapi-testrepo,woloski,':{
    topic:function(){ 
      github3.username = 'githubapi-test';
      github3.password = 'Passw0rd!';
      var self = this;
      // move testbranch to a previous commit first
      github3.updateRefHead('githubapi-testrepo','githubapi-test', 'testbranch', 'e3d44d607d7fd8925e6dec776177b57d4480ace4', true, function(error, data) {
          // create a new tree with a file in it
          github3.createTreeAndAddFile('githubapi-testrepo','githubapi-test', 'new-file.txt', 'some content', 'abf950a42f33a69146a74e246c59c06398ea61e8', function(error, data) {
            // e3d44d607d7fd8925e6dec776177b57d4480ace4 is the last commit sha
            // data.sha is the new tree sha
            if (error !== null) {
              self.callback(error, null);
            };
            // commit the new tree
            github3.createCommit('githubapi-testrepo','githubapi-test', 'commit from a unit test', data.sha, 'e3d44d607d7fd8925e6dec776177b57d4480ace4', 'githubapi-test', function(error, data) {
            if (error !== null) {
                self.callback(error, null);
            };  
            // update testbranch to point to the new commit
            github3.updateRefHead('githubapi-testrepo','githubapi-test', 'testbranch', data.sha, false, self.callback); 
          });
        });
      }); 
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null); 
      assert.isTrue(typeof(data.object) != 'undefined');
      assert.equal(data.object.type, 'commit');
    }
  },

  // getLabels
  'when making a call to getLabels(github3, edwardhotchkiss,':{
    topic:function(){
      github3.getLabels('github3', 'edwardhotchkiss', this.callback);
    },
    'we should receive no errors, and two labels back':function(error, data) {
      assert.equal(error, null);    
      assert.equal(typeof(data), 'object');
      assert.equal(data.length, 2);
    }
  },

  // getIssueLabels
  'when making a call to getIssueLabels(github3, edwardhotchkiss, 6':{
    topic:function(){
      github3.getIssueLabels('github3', 'edwardhotchkiss', 6, this.callback);
    },
    'we should receive no errors, and two labels back"':function(error, data) {
      assert.equal(error, null);    
      assert.equal(typeof(data), 'object');
      assert.equal(data.length, 2);
    }
  },

  // createLabel
  'when creating a label with createLabel(':{
    topic:function(){
      var self = this;
      github3.username = 'githubapi-test';
      github3.password = 'Passw0rd!';
      github3.createLabel('githubapi-testrepo','githubapi-test', { name : 'fake label', color : '#ff0099' }, self.callback);
    },
    'we should receive back no errors, and a label with a data object back':function(error, data){
      assert.isNull(error);
      assert.equal(typeof(data), 'object');
    }
  }
  
}).export(module);

/* EOF */