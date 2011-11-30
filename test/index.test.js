
var vows = require("vows");
var assert = require("assert");

var github3 = require("../lib/github3");

vows.describe("General Module Tests").addBatch({
  "when instantiating github3":{
    topic:function(){ 
      return github3;
    },
    "github3 should be a function":function(topic) {
      assert.equal(typeof(topic), "function");
    }
  }
}).export(module);

/* EOF */