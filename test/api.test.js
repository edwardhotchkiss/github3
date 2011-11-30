
var vows = require('vows');
var assert = require('assert');

var github3 = new require('../lib/github3');

vows.describe('api tests').addBatch({
  'when making a call to /orgs/ingklabs/public_members':{
    topic:function(){ 
      github3._get('/orgs/ingklabs/public_members', this.callback);
    },
    'we should receive no errors, and data back':function(error, data) {
      assert.equal(error, null);
      assert.equal(typeof(data), 'object');
    }
  }
}).export(module);

/* EOF */