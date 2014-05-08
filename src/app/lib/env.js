var merge = require('react/lib/merge');
var dispatcher = require('./dispatcher');

var state = {};

function getState() {
  return merge({}, state);
}

function setState(partialState) {
  return replaceState(merge(getState(), partialState));
}

function replaceState(nextState) {
  state = nextState;
  var timeout = setTimeout(function() {
    clearTimeout(timeout);
    dispatcher.emitUpdate();
  }, 0);
}

module.exports = {
  setState: setState,
  getState: getState
};
