var dispatcher = require('../lib/dispatcher');

var TestsService = dispatcher.createService('tests', function(resources) {
  return {
    getAll: resources.all(function(tests) {
      this.setState({ tests: tests });
    }),

    get: resources.get(function(test) {
      var state = this.getState();
      var loaded = state.loaded || {};

      loaded[test.id] = test;

      this.setState({ loaded: loaded });
    }),

    create: resources.create(function() {
    }),

    update: resources.update(function() {
    }),

    remove: resources.remove(function() {
    })
  }
});

module.exports = TestsService;
