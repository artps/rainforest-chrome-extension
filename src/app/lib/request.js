var path = require('path'),
    merge = require('react/lib/merge'),
    superagent = require('superagent'),
    Promise = require('es6-promise').Promise;


var BODYNESS = 'POST PUT HEAD'.split(' ');

function Request() {
  this._endpoint = '';
  this._dataType = '';
  this._token = '';
  this._credentials = {};
}

Request.prototype.get = function(path, data) {
  return this.request('get', path, data);
};

Request.prototype.post = function(url, data) {
  return this.request('post', path, data);
};

Request.prototype.put = function(data) {
  return this.request('put', path, data);
};

Request.prototype.del = function() {
  return this.request('delete', path);
};

Request.prototype.request = function(method, path, data) {
  method = method.toUpperCase();
  data = data || {};

  return this.getToken().then(function(token) {
    data = merge(data, { 'api_token': token });
    return this._request(method, path, data);
  }.bind(this));
};

Request.prototype._request = function(method, path, data) {
  var req = superagent(method, this.url(path));

  if(method === 'GET') {
    req.query(data);
  }

  if(BODYNESS.indexOf(method) > -1) {
    req.send(data);
  }

  return new Promise(function(resolve, reject) {
    req.end(function(err, res) {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

Request.prototype.getToken = function() {
  if(this._token !== '') {
    return new Promise(function(resolve, reject) {
      resolve(this._token);
    }.bind(this));
  }

  return this._request('POST', 'auth/client', this._credentials)
    .then(function(res) {
      this._token = res.body['api_token'];
      return this._token;
    }.bind(this));
}

Request.prototype.url = function(resource) {
  return [path.join(this._endpoint, resource), this._dataType].join('.');
};

Request.prototype.credentials = function(email, password) {
  this._credentials = {
    email: email,
    password: password
  };
};

Request.prototype.endpoint = function(endpoint, dataType) {
  this._endpoint = endpoint;
  this._dataType = dataType || '';
}

module.exports = new Request();
