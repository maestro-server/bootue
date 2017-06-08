<template>
  <doc-section id="pagination" name="Pagination">
    <div class="bs-example">

    <div class="row">
        <div class="col-xs-4 text-right">
          <pagination
            :total_pages="result.total_pages"
            :current_page="result.current_page"
            @changePage="changePage">
          </pagination>
          Current page: {{result.current_page}}
        </div>

        <div class="col-xs-8">
          <doc-code language="markup">
              &lt;pagination
              :total_pages="result.total_pages"
              :current_page="result.current_page"
              @changePage="changePage">
            &lt;/pagination>
          </doc-code>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-4 text-right">
          <pagination
            :total_pages="result.total_pages"
            :current_page="result.current_page"
            @changePage="changePage"
            only_number>
          </pagination>
        </div>

        <div class="col-xs-8">
          <doc-code language="markup">
            &lt;pagination
              :total_pages="result.total_pages"
              :current_page="result.current_page"
              @changePage="changePage"
              only_number >
            &lt;/pagination>
          </doc-code>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-4 text-right">
          <pagination
            :total_pages="result.total_pages"
            :current_page="result.current_page"
            @changePage="changePage"
            size="sm"  >
          </pagination>
        </div>

        <div class="col-xs-8">
          <doc-code language="markup">
            &lt;pagination
              :total_pages="result.total_pages"
              :current_page="result.current_page"
              @changePage="changePage"
              size="sm"  >
            &lt;/pagination>
          </doc-code>
        </div>
    </div>


    </div>


    <doc-table>
      <div>
        <p>total_pages</p>
        <p><code>Number</code></p>
        <p>null</p>
        <p>Total number pages</p>
      </div>
      <div>
        <p>current_page</p>
        <p><code>Number</code></p>
        <p>null</p>
        <p>Current page</p>
      </div>
      <div>
        <p>size</p>
        <p><code>String (sm / md / lg)</code></p>
        <p>null</p>
        <p>Size component</p>
      </div>
      <div>
        <p>only_number</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>If true, onlye show the numbers and hide support arrows</p>
      </div>
    </doc-table>
    <doc-table type="Events">
      <div>
        <p>@changePage</p>
        <p>(<code>next_page</code>)</p>
        <p>When change pagination, call this function.</p>
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
