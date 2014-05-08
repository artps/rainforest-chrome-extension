/**
 * @jsx React.DOM
 */

var React = require('react');
var TestPage = require('../pages/TestPage');
var TestsStore = require('../stores/TestsStore');

var TestsListItem = React.createClass({
  render: function() {
    var isLoaded = TestsStore.hasTest(this.props.test.id);
    return (
      <div className="b-tests_list__item">
        <TestPage ref="testPage" test={this.props.test} loaded={isLoaded} />
        <a href="#" onClick={this.handleClick}>{this.props.test.title}</a>
      </div>
    );
  },

  handleClick: function() {
    this.refs.testPage.open();
    return false;
  }
});

module.exports = TestsListItem;
