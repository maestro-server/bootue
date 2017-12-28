import merge from 'merge'
import stateData from './state/data'
import vuex from './state/vuex'
import normal from './state/normal'
import Table from './table'
import { Pagination, PaginationEvent } from 'vue-pagination-2'

let data = require('./mixins/data')
let created = require('./mixins/created')

let template = require('./template')

export default function (globalOptions = {}, useVuex = false, customTemplate = template('server')) {

  let state = useVuex ? vuex('server') : normal()

  let server = merge.recursive(true, Table(), {
    name: 'server-table',
    components: {
      Pagination
    },
    render: customTemplate,
    props: {
      columns: {
        type: Array,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        default: function () {
          return {}
        }
      }
    },
    created: function () {

      created(this)

      if (!this.vuex) {
        this.query = this.initQuery()

        this.initOrderBy(this.Columns[0])

      }

      if (!this.vuex) {
        this.customQueries = this.initCustomFilters()
      }

      this.loadState()

      this.getData(true).then(function (response) {

        let dataRe = this.getResponseData(response)
        this.setData(this.opts.responseAdapter(dataRe))

        this.loading = false

        if (this.hasDateFilters()) {
          setTimeout(function () {
            this.initDateFilters()
          }.bind(this), 0)
        }

      }.bind(this))

    },
    mounted: function () {

      if (this.opts.saveState) {
        let stateR = JSON.parse(this.storage.getItem(this.stateKey))
        this.setDateFilterText(stateR.query)
      }

      if (this.vuex) {
        return
      }

      this.registerServerFilters()

      PaginationEvent.$on('vue-pagination::' + this.id, function (page) {

        this.setPage(page)
        this.dispatch('pagination')

      }.bind(this))

    },
    data: function () {
      return merge.recursive(data(), {
        source: 'server',
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions
      }, stateData(useVuex, 'server'))
    },
    methods: {
      refresh: require('./methods/refresh'),
      getData: require('./methods/get-data'),
      setData: require('./methods/set-data'),
      serverSearch: require('./methods/server-search'),
      registerServerFilters: require('./methods/register-server-filters'),
      loadState () {

        if (!this.opts.saveState) return

        if (!this.storage.getItem(this.stateKey)) {
          this.initState()
          return
        }

        state = JSON.parse(this.storage.getItem(this.stateKey))

        if (this.vuex) {
          this.commit('SET_STATE', {
            query: state.query,
            customQueries: state.customQueries,
            page: state.page,
            limit: state.perPage,
            orderBy: state.orderBy
          })
        } else {
          this.page = state.page
          this.query = state.query
          this.customQueries = state.customQueries
          this.limit = state.perPage
          this.orderBy = state.orderBy
        }

        if (!this.opts.pagination.dropdown) {
          setTimeout(() => {
            this.$refs.pagination.Page = state.page
          }, 0)
        }

        this.activeState = true
      }
    },
    computed: {
      totalPages: require('./computed/total-pages'),
      hasMultiSort () {
        return this.opts.serverMultiSorting
      }
    }

  }, state)

  return server

};
