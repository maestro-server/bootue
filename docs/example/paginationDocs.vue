<template>
  <doc-section id="pagination" name="Pagination">
    <div class="bs-example">

    <div class="row">
        <div class="col-xs-6">
          <pagination
            :total_pages="result.total_pages"
            :current_page="result.current_page"
            @changePage="changePage">
          </pagination>
          Current page: {{result.current_page}}
        </div>

        <div class="col-xs-6">

        </div>
    </div>

    <div class="row">
        <div class="col-xs-6">
          <pagination
            :total_pages="result.total_pages"
            :current_page="result.current_page"
            @changePage="changePage"
            only_number>
          </pagination>
        </div>

        <div class="col-xs-6">

        </div>
    </div>

    <div class="row">
        <div class="col-xs-6">
          <pagination
            :total_pages="result.total_pages"
            :current_page="result.current_page"
            @changePage="changePage"
            size="sm"  >
          </pagination>
        </div>

        <div class="col-xs-6">

        </div>
    </div>


    </div>
    <doc-code language="markup">
      &lt;well>I am well&lt;/well>
      &lt;well size="lg">Look, I'm in a large well!&lt;/well>
      &lt;well size="sm">Look, I'min tiny well!&lt;/well>
    </doc-code>

    <doc-table>
      <div>
        <p>size</p>
        <p><code>String (sm / md / md)</code></p>
        <p>null</p>
        <p>Size well.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'

export default {
  data () {
    return {
      result: {
        total_pages: 5,
        current_page: 1
      }
    }
  },

  methods: {
    changePage (e) {
      this.result.current_page = e
    }
  },

  components: {
    docSection,
    docTable,
    docCode
  }
}
</script>
