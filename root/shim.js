module.exports = {
  jquery: {exports: "jQuery"},
  bootstrap: {
    exports: "bootstrap",
    depends: {jquery: "jQuery"}
  },
  bootstrapSelect: {
    depends: {jquery: "jQuery"}
  },
  qunit: {
    exports: "QUnit"
  }
};
