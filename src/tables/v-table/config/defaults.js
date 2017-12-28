module.exports = function () {
  return {
    dateColumns: [],
    listColumns: {},
    datepickerOptions: {
      locale: {
        cancelLabel: 'Clear'
      }
    },
    perPage: 25,
    perPageValues: [10, 25, 50, 100],
    params: {},
    sortable: true,
    filterable: true,
    initFilters: {},
    customFilters: [],
    templates: {},
    debounce: 500,
    dateFormat: 'DD/MM/YYYY',
    toMomentFormat: false,
    skin: 'table-striped table-bordered table-hover',
    columnsDisplay: {},
    texts: {
      count: 'Showing {from} to {to} of {count} records|{count} records|One record',
      filter: 'Filter Results:',
      filterPlaceholder: 'Search query',
      limit: 'Records:',
      page: 'Page:',
      noResults: 'No matching records',
      filterBy: 'Filter by {column}',
      loading: 'Loading...',
      defaultOption: 'Select {column}'
    },
    sortIcon: {base: 'fa', up: 'fa-arrow-up', down: 'fa-arrow-down'},
    customSorting: {},
    multiSorting: {},
    clientMultiSorting: true,
    serverMultiSorting: false,
    filterByColumn: true,
    highlightMatches: false,
    orderBy: false,
    footerHeadings: false,
    headings: {},
    pagination: {
      dropdown: false,
      chunk: 10
    },
    headers: {},
    childRow: false,
    childRowKey: 'id',
    uniqueKey: '_id',
    requestAdapter: function (data) {
      return data
    },
    responseAdapter: function (resp) {
      return {
        data: resp.data,
        count: resp.count
      }
    },
    requestKeys: {
      query: 'query',
      limit: 'limit',
      orderBy: 'orderBy',
      ascending: 'ascending',
      page: 'page',
      byColumn: 'byColumn'
    },
    rowClassCallback: false,
    config: false,
    saveState: true,
    storage: 'session',
    columnsClasses: {}
  }
}
