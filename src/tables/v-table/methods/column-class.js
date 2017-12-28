module.exports = function (column) {
  let c = this.opts.columnsClasses;

  return c.hasOwnProperty(column) ? c[column] : '';
}
