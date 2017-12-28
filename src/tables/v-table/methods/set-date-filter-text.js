module.exports = function (query) {
  let value;

  if (this.hasDateFilters()) {
    this.opts.dateColumns.forEach(column => {
      value = query[column];

      if (!value) return;

      let datepicker = $(this.$el).find("#VueTables__" + column + "-filter");
      let text = moment(value.start, 'YYYY-MM-DD')
        .format(this.opts.dateFormat) + " - " + moment(value.end, 'YYYY-MM-DD').format(this.opts.dateFormat);
      datepicker.text(text);
    });

  }

}
