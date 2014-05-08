/**
 * @jsx React.DOM
 */

var React = require('react');

var Page = React.createClass({
  render: function() {
    return (
      <div className="b-page">{this.props.children}</div>
    );
  }
})

module.exports = Page;
