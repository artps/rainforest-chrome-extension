module.exports = function createStorage(name, spec) {
  var env = require('../env');

  function constructor(name) {
    this.name = name;
  }
  constructor.prototype = Object.create(spec);
  constructor.prototype.getState = function() {
    var state = env.getState();
    return state[name] || {};
  };

  return new constructor(name);
};
