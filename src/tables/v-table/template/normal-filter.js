let debounce = require('debounce')

module.exports = function (h, that) {

  if (!that.opts.filterable) return ''

  let search = that.source === 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that)

  if (that.opts.filterable && !that.opts.filterByColumn) {
    let id = 'VueTables__search_' + that.id
    return <div class="form-group form-inline pull-left VueTables__search">
      <label for={id}>{that.display('filter')}</label>
      <input class="form-control"
             type="text"
             value={that.query}
             placeholder={that.display('filterPlaceholder')}
             on-keyup={debounce(search, that.opts.debounce)}
             id={id}
      />
    </div>
  }

  return ''
}
