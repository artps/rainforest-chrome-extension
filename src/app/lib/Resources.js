var request = require('./request');


function Resources(name) {
  this.name = name;
}

Resources.prototype.resource = function(id) {
  var args = [this.name];

  if(id) {
    args.push(id.toString());
  }

  return args.join('/');
};

Resources.prototype.all = function(callback) {
  resource = this.resource.bind(this);
  return function() {
    return request.get(resource()).then(function(res) {
      return res.body;
    }).then(callback.bind(this));
  };
};

Resources.prototype.get = function(callback) {
  resource = this.resource.bind(this);
  return function(id) {
    return request.get(resource(id)).then(function(res) {
      return res.body;
    }).then(callback.bind(this));
  };
};

Resources.prototype.create = function(callback) {
  resource = this.resource.bind(this);
  return function(data) {
    return request.post(resource(), data).then(function(res) {
      return res.body;
    }).then(callback.bind(this));
  };
};

Resources.prototype.update = function(callback) {
  resource = this.resource.bind(this);
  return function(id, data) {
    return request.put(resource(id), data).then(function(res) {
      return res.body;
    }).then(callback.bind(this));
  };
};

Resources.prototype.remove = function(callback) {
  resource = this.resource.bind(this);
  return function(id) {
    return request.del(resource(id)).then(function(res) {
      return res.body;
    }).then(callback.bind(this));
  };
};

module.exports = Resources;
