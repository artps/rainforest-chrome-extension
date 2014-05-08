var dispatcher = require('../lib/dispatcher');

var TestsStorage = dispatcher.createStorage('tests', {
  getAll: function() {
    return this.getState().tests || [];
  },

  hasTests: function() {
    return this.getAll().length > 0;
  },

  get: function(id) {
    var loaded = this.getState().loaded || {};
    return loaded[id.toString()] || {};
  },

  hasTest: function(id) {
    return Object.keys(this.get(id)).length > 0;
  },

  getCurrent: function() {
    return this.getState().current || {};
  },

  hasCurrent: function() {
    return Object.keys(this.getCurrent()).length > 0;
  }
});

module.exports = TestsStorage;
