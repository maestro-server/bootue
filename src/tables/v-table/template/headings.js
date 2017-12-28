module.exports = function (h, that) {

  let sortControl = require('./sort-control')(h, that)

  let headings = []

  if (that.opts.childRow) headings.push(<th></th>)

  that.allColumns.map(function (column) {
    headings.push(<th on-click={that.orderByColumn.bind(that, column)}
                      class={that.sortableClass(column)}>
      <span class="VueTables__heading">{that.getHeading(column, h)}</span>
      {sortControl(column)}
    </th>)
  }.bind(that))

  return headings
}
