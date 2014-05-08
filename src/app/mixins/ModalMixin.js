var ModalMixin = {
  open: function() {
    this.refs.modal.open();
  },

  close: function() {
    this.refs.modal.close();
  }
};

module.exports = ModalMixin;
