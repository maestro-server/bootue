import {translations} from '../../utils/utils.js'
// import $ from '../../utils/NodeList.js'

export default {
  props: {
    value: {type: String},
    format: {default: 'MM/dd/yyyy'},
    disabledDaysOfWeek: {type: Array, default () { return [] }},
    width: {type: String},
    clearButton: {type: Boolean, default: false},
    lang: {type: String, default: navigator.language},
    placeholder: {type: String},
    iconsFont: {type: String, default: 'glyphicon'}
  },
  data () {
    return {
      currDate: new Date(),
      dateRange: [],
      decadeRange: [],
      displayDayView: false,
      displayMonthView: false,
      displayYearView: false,
      val: this.value
    }
  },
  watch: {
    currDate () {
      this.getDateRange()
    },
    format () {
      this.val = this.stringify(this.currDate)
    },
    val (val, old) {
      this.$emit('input', val)
    },
    value (val) {
      if (this.val !== val) { this.val = val }
    }
  },
  computed: {
    text () {
      return translations(this.lang)
    },
    preBtnClasses () {
      return `datepicker-preBtn ${this.iconsFont} ${this.iconsFont}-chevron-left`
    },
    nextBtnClasses () {
      return `datepicker-nextBtn ${this.iconsFont} ${this.iconsFont}-chevron-right`
    },
    disabledDaysArray () {
      return this.disabledDaysOfWeek.map(d => parseInt(d, 10))
    }
  },
  methods: {
    close () {
      this.displayDayView = this.displayMonthView = this.displayYearView = false
    },
    inputClick () {
      this.currDate = this.parse(this.val) || this.parse(new Date())
      if (this.displayMonthView || this.displayYearView) {
        this.displayDayView = false
      } else {
        this.displayDayView = !this.displayDayView
      }
    },
    preNextDecadeClick (flag) {
      const year = this.currDate.getFullYear()
      const months = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 10, months, date)
      } else {
        this.currDate = new Date(year + 10, months, date)
      }
    },
    preNextMonthClick (flag) {
      const year = this.currDate.getFullYear()
      const month = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        const preMonth = this.getYearMonth(year, month - 1)
        this.currDate = new Date(preMonth.year, preMonth.month, date)
      } else {
        const nextMonth = this.getYearMonth(year, month + 1)
        this.currDate = new Date(nextMonth.year, nextMonth.month, date)
      }
    },
    preNextYearClick (flag) {
      const year = this.currDate.getFullYear()
      const months = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 1, months, date)
      } else {
        this.currDate = new Date(year + 1, months, date)
      }
    },
    yearSelect (year) {
      this.displayYearView = false
      this.displayMonthView = true
      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())
    },
    daySelect (day) {
      if (day.sclass === 'datepicker-item-disable') {
        return false
      } else {
        this.currDate = day.date
        this.val = this.stringify(this.currDate)
        this.displayDayView = false
      }
    },
    switchMonthView () {
      this.displayDayView = false
      this.displayMonthView = true
    },
    switchDecadeView () {
      this.displayMonthView = false
      this.displayYearView = true
    },
    monthSelect (index) {
      this.displayMonthView = false
      this.displayDayView = true
      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())
    },
    getYearMonth (year, month) {
      if (month > 11) {
        year++
        month = 0
      } else if (month < 0) {
        year--
        month = 11
      }
      return {year: year, month: month}
    },
    stringifyDecadeHeader (date) {
      const yearStr = date.getFullYear().toString()
      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0
      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10
      return firstYearOfDecade + '-' + lastYearOfDecade
    },
    stringifyDayHeader (date) {
      return this.text.months[date.getMonth()] + ' ' + date.getFullYear()
    },
    parseMonth (date) {
      return this.text.months[date.getMonth()]
    },
    stringifyYearHeader (date) {
      return date.getFullYear()
    },
    stringify (date, format = this.format) {
      if (!date) date = this.parse()
      if (!date) return ''
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const monthName = this.parseMonth(date)
      return format
        .replace(/yyyy/g, year)
        .replace(/yy/g, year)
        .replace(/MMMM/g, monthName)
        .replace(/MMM/g, monthName.substring(0, 3))
        .replace(/MM/g, ('0' + month).slice(-2))
        .replace(/M(?!a)/g, month)
        .replace(/dd/g, ('0' + day).slice(-2))
        .replace(/d/g, day)
    },
    parse (str) {
      if (str === undefined || str === null) { str = this.val }
      let date = str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy') ?
        new Date(str.substring(6, 10), str.substring(3, 5)-1, str.substring(0, 2)) :
        new Date(str)
      return isNaN(date.getFullYear()) ? new Date() : date
    },
    getDayCount (year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (month === 1) {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
          return 29
        }
      }
      return dict[month]
    },
    getDateRange () {
      this.dateRange = []
      this.decadeRange = []
      const time = {
        year: this.currDate.getFullYear(),
        month: this.currDate.getMonth(),
        day: this.currDate.getDate()
      }
      const yearStr = time.year.toString()
      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1
      for (let i = 0; i < 12; i++) {
        this.decadeRange.push({
          text: firstYearOfDecade + i
        })
      }

      const currMonthFirstDay = new Date(time.year, time.month, 1)
      let firstDayWeek = currMonthFirstDay.getDay() + 1
      if (firstDayWeek === 0) {
        firstDayWeek = 7
      }
      const dayCount = this.getDayCount(time.year, time.month)
      if (firstDayWeek > 1) {
        const preMonth = this.getYearMonth(time.year, time.month - 1)
        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)
        for (let i = 1; i < firstDayWeek; i++) {
          const dayText = prevMonthDayCount - firstDayWeek + i + 1
          const date = new Date(preMonth.year, preMonth.month, dayText)
          let sclass = 'datepicker-item-gray'
          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {
            sclass = 'datepicker-item-disable'
          }
          this.dateRange.push({text: dayText, date, sclass })
        }
      }

      for (let i = 1; i <= dayCount; i++) {
        const date = new Date(time.year, time.month, i)
        let sclass = ''
        if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {
          sclass = 'datepicker-item-disable'
        }
        if (i == time.day && date.getFullYear() == time.year && date.getMonth() == time.month){
          sclass = 'datepicker-dateRange-item-active'
        }
        this.dateRange.push({text: i, date, sclass})
      }

      if (this.dateRange.length < 42) {
        const nextMonthNeed = 42 - this.dateRange.length
        const nextMonth = this.getYearMonth(time.year, time.month + 1)

        for (let i = 1; i <= nextMonthNeed; i++) {
          const date = new Date(nextMonth.year, nextMonth.month, i)
          let sclass = 'datepicker-item-gray'
          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {
            sclass = 'datepicker-item-disable'
          }
          this.dateRange.push({text: i, date, sclass})
        }
      }
    }
  },
  mounted () {
    this.$emit('child-created', this)
    this.currDate = this.parse(this.val) || this.parse(new Date())
    this._blur = e => {
      if (!this.$el.contains(e.target))
        this.close()
    }
    window.addEventListener('click', this._blur);
  },
  beforeDestroy () {
    window.removeEventListener('click', this._blur)
  }
}
