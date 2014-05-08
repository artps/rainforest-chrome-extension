/**
 * @jsx React.DOM
 */

var React = require('react');
var Modal = require('../components/Modal');

var TestsService = require('../services/TestsService');
var TestsStore = require('../stores/TestsStore');

var Loader = require('../components/Loader');


function Test(props) {
  return (
    <div className="b-test"></div>
  )
}

var TestPage = React.createClass({

  render: function() {
    var child;

    if(this.props.loaded) {
      child = <Test test={TestsStore.get(this.props.test.id)} />
    } else {
      child = <Loader />;
    }

    return (
      <Modal ref="modal" title={this.props.test.title}>
        {child}
      </Modal>
    );
  },

  open: function () {
    this.refs.modal.open();

    if(!this.state.loaded) {
      TestsService.get(this.props.test.id);
    }
  },

  close: function() {
    this.refs.modal.close();
  }
});

module.exports = TestPage;
