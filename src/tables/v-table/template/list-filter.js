module.exports = function (h, that) {

  return function (column) {

    let optNew = []

    let search = that.source === 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that)

    let eInput = function (e) {
      that.query[column] = e
      search(this)
    }

    that.opts.listColumns[column].map(function (option) {
      selected = option.text === that.query[column] && that.query[column] !== ''
      optNew.push(option.text)
    })

    return <div class="minWd100 wd100 VueTables__list-filter"
                id={'VueTables__' + column + '-filter'}>
      <bs-select
        class="minWd100 wd100"
        on-input={eInput}
        name={'vf__' + column}
        value={that.query[column]}
        options={optNew}
      >
      </bs-select>
    </div>
  }

}
