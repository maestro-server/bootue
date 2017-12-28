export default function (self) {
  let state = {
    page: 1,
    limit: self.opts.perPage,
    count: self.source === 'server' ? 0 : self.data.length,
    columns: self.columns,
    data: self.source === 'client' ? self.data : [],
    query: self.initQuery(),
    customQueries: self.initCustomFilters(),
    sortBy: self.opts.orderBy && self.opts.orderBy.column ? self.opts.orderBy.column : self.columns[0],
    ascending: self.opts.orderBy && self.opts.orderBy.hasOwnProperty('ascending') ? self.opts.orderBy.ascending : true
  }

  return state
}
