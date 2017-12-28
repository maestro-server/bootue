module.exports = function (column) {

  let ascending = this.orderBy.ascending;

  this.currentlySorting = {column, ascending};

  if (typeof this.opts.customSorting[column] === 'undefined')
    return this.defaultSort(column, ascending);

  return this.opts.customSorting[column](ascending);

}


