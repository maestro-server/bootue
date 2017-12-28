module.exports = function (h, that) {

  if (that.count > 0 && that.opts.pagination.dropdown) {

    let perPage = parseInt(that.limit)

    let from = ((that.Page - 1) * perPage) + 1
    let to = that.Page === that.totalPages ? that.count : from + perPage - 1

    let parts = that.opts.texts.count.split('|')

    let pg1 = that.totalPages === 1 ? 1 : 0
    let i = Math.min(that.count === 1 ? 2 : pg1, parts.length - 1)

    let count = parts[i].replace('{count}', that.count)
      .replace('{from}', from)
      .replace('{to}', to)

    return <div class="VuePagination">
      <p class="VuePagination__count">{count}</p>
    </div>
  }

  return ''
}
