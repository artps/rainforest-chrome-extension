/**
 * @jsx React.DOM
 */

var React = require('react');
var TestsListItem = require('./TestsListItem');

var TestsList = React.createClass({
  render: function() {
    var tests = this.props.tests.map(function(test) {
      return <TestsListItem key={test.id} test={test} />;
    });

    return (
      <div className="b-tests_list">{tests}</div>
    );
  }
});

module.exports = TestsList;
