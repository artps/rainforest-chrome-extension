var merge = require('react/lib/merge');
var Resources = require('../Resources');

module.exports = function createService(name, implementation) {
  var env = require('../env');

  function constructor(name) {
    this.name = name;
  };

  constructor.prototype = Object.create(implementation(new Resources(name)));
  constructor.prototype.getState = function() {
    var state = env.getState();
    return state[name] || {};
  };
  constructor.prototype.setState = function(nextState) {
    var state = {};
    state[name] = merge(this.getState(), nextState);

    env.setState(state);
  };

  return new constructor(name);
};
