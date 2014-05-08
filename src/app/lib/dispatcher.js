var util = require('util');
var events = require('events');
var createStorage = require('./dispatcher/createStorage');
var createService = require('./dispatcher/createService');

function Dispatcher() {
  events.EventEmitter.call(this);
}

util.inherits(Dispatcher, events.EventEmitter);

Dispatcher.prototype.addUpdateListener = function(callback) {
  this.on('update', callback);
};

Dispatcher.prototype.removeUpdateListener = function(callback) {
  this.removeEventListener('update', callback);
};

Dispatcher.prototype.emitUpdate = function() {
  this.emit('update');
}

module.exports = new Dispatcher();
module.exports.createStorage = createStorage;
module.exports.createService = createService;
