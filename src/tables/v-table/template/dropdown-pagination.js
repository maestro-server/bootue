module.exports = function (h, that) {

  if (that.opts.pagination && that.opts.pagination.dropdown) {

    let pages = []
    let selected

    for (let pag = 1; pag <= that.totalPages; pag++) {
      selected = that.page === pag
      pages.push(<option value={pag}
                         selected={selected}> {pag}
      </option>)
    }

    let id = 'VueTables__dropdown-pagination_' + that.id
    return <div class="form-group form-inline pull-right VueTables__dropdown-pagination"
                v-show={that.totalPages > 1}>
      <label for={id}>{that.display('page')}</label>
      <select class="form-control"
              name="page"
              ref="page"
              value={that.page}
              on-change={that.setPage.bind(that, null)}
              id={id}>
        {pages}
      </select>
    </div>
  }

  return ''

}
