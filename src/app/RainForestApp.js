/**
 * @jsx React.DOM
 */

'use strict';

require('./config'); // configure libs

var React = require('react');
var dispatcher = require('./lib/dispatcher');

var TestsService = require('./services/TestsService');
var TestsStore = require('./stores/TestsStore');

var IndexPage = require('./pages/IndexPage');

function getState() {
  return {
    tests: TestsStore.getAll()
  }
}

var RainForestApp = React.createClass({

  getInitialState: function() {
    return getState();
  },

  componentWillMount: function() {
    dispatcher.addUpdateListener(this.handleStateUpdate);
    TestsService.getAll();
  },

  render: function() {
    return <IndexPage tests={this.state.tests} />;
  },

  handleStateUpdate: function() {
    this.replaceState(getState());
  }
});

function render(container) {
  React.renderComponent(RainForestApp(), container);
}

module.exports = RainForestApp;
module.exports.render = render;
