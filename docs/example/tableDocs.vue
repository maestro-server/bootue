<template>
  <doc-section id="bsables" name="Tables">
    <div class="bs-example">
      <p>Based in a <a target="_blank" href="https://www.npmjs.com/package/vue-tables-2">Vue Table 2 by Matfish</a>
        implementation.</p>

      <h3>Table server</h3>
      <bs-table-server :url="url"
                       :columns="columns"
                       :options="optionsServer"></bs-table-server>

      <h3>Table client</h3>
      <bs-table-client :data="data"
                       :columns="columns"
                       :options="options"></bs-table-client>

    </div>

    <doc-code language="markup">
      &lt;bs-table-server :url="url"
      :columns="columns"
      :options="options">&lt;/bs-table-server>

      &lt;bs-table-client :data="data"
      :columns="columns"
      :options="options">&lt;/bs-table-client>
    </doc-code>
    <doc-table>
      <div>
        <p>url</p>
        <p><code>String</code></p>
        <p><code></code></p>
        <p>Url server </p>
      </div>
      <div>
        <p>columns</p>
        <p><code>Array</code></p>
        <p><code>[]</code></p>
        <p>How columns will be apper in table</p>
      </div>
      <div>
        <p>options</p>
        <p><code>Array</code></p>
        <p><code>[]</code></p>
        <p>Options for table</p>
      </div>
    </doc-table>

  </doc-section>

</template>

<script>
  import docSection from './utils/docSection.vue'
  import docTable from './utils/docTable.js'
  import docCode from './utils/docCode.js'

  export default {
    components: {
      docSection,
      docTable,
      docCode
    },
    data () {
      return {
        url: 'http://localhost:8080/table.json',
        columns: ['color', 'value'],
        options: {
          filterable: ['color', 'value'],
          headings: {
            color: 'Color name',
            value: 'RGB'
          }
        },
        optionsServer: {
          filterable: [],
          headings: {
            color: 'Color name',
            value: 'RGB'
          }
        },
        data: [
          {
            'color': 'red',
            'value': '#f00'
          },
          {
            'color': 'green',
            'value': '#0f0'
          },
          {
            'color': 'blue',
            '': '#00f'
          },
          {
            'color': 'cyan',
            'value': '#0ff'
          },
          {
            'color': 'magenta',
            'value': '#f0f'
          },
          {
            'color': 'yellow',
            'value': '#ff0'
          },
          {
            'color': 'black',
            'value': '#000'
          }
        ]
      }
    }
  }
</script>
