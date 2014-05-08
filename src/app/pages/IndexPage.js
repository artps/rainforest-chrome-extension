/**
 * @jsx React.DOM
 */

var React = require('react');
var Page = require('../components/Page');
var TestsList = require('../components/TestsList');

var IndexPage = React.createClass({
  render: function() {
    return (
      <Page>
        <h1>Tests {this.props.tests.length}</h1>
        <TestsList tests={this.props.tests} />
      </Page>
    );
  }
});

module.exports = IndexPage;
