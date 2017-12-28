module.exports = function () {
  return function (h) {
    let rows = require('./template/rows')(h, this)
    let normalFilter = require('./template/normal-filter')(h, this)
    let dropdownPagination = require('./template/dropdown-pagination')(h, this)
    let columnFilters = require('./template/column-filters')(h, this)
    let footerHeadings = require('./template/footer-headings')(h, this)
    let noResults = require('./template/no-results')(h, this)
    let pagination = require('./template/pagination')(h, this)
    let dropdownPaginationCount = require('./template/dropdown-pagination-count')(h, this)
    let headings = require('./template/headings')(h, this)
    let perPage = require('./template/per-page')(h, this)

    return <div class={'VueTables VueTables--' + this.source}>
      <div class="row">
        <div class="col-md-6">
          {normalFilter}
        </div>
        <div class="col-md-6">
          {dropdownPagination}
          {perPage}
        </div>
      </div>
      <div class="table-responsive">
        <table class={'VueTables__table table ' + this.opts.skin}>
          <thead>
          <tr>
            {headings}
          </tr>
          {columnFilters}
          </thead>
          {footerHeadings}
          {this.$slots.beforeTbody}
          <tbody>
          {this.$slots.beforeBody}
          {noResults}
          {rows}
          {this.$slots.afterBody}
          </tbody>
          {this.$slots.afterTbody}
        </table>
      </div>
      {pagination}
      {dropdownPaginationCount}
    </div>
  }
}
