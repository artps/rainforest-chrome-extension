/**
 * @jsx React.DOM
 */

var React = require('react');
var Modal = require('../components/Modal');
var ModalMixin = require('../mixins/ModalMixin');

var NewTestPage = React.createClass({
  mixins: [ModalMixin],

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <Modal ref="modal" title={this.props.test.title}>

      </Modal>
    )
  }

});

module.exports = TestPage;

