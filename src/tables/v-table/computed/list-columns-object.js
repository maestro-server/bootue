module.exports = function () {
  let columns = Object.keys(this.opts.listColumns);

  let res = {};

  columns.forEach(function (column) {
    res[column] = {};

    this.opts.listColumns[column].forEach(function (item) {
      res[column][item.id] = item.text;
    });

  }.bind(this));

  return res;
}
