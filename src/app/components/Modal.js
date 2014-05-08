/**
 * @jsx React.DOM
 */

var React = require('react');
var cx = require('react/lib/cx');

var Modal = React.createClass({
  getInitialState: function() {
    return {
      hidden: true
    };
  },

  render: function() {
    return (
      <div className={cx({ 'b-modal': true, 'b-modal--hidden': this.state.hidden })}>
        <div className="b-modal__title">{this.props.title}</div>
        <div className="b-modal__close"><button onClick={this.handleClose}>x</button></div>
        <div className="b-modal__body">{this.props.children}</div>
      </div>
    );
  },

  open: function() {
    this.setState({ hidden: false });
  },

  close: function() {
    this.setState({ hidden: true });
  },

  handleClose: function() {
    this.close();
    return false;
  }
});

module.exports = Modal;
