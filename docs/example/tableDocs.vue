<template>
  <doc-section id="bsables" name="Tables">
    <div class="bs-example">
      <p>Based in a <a target="_blank" href="https://www.npmjs.com/package/vue-tables-2">Vue Table 2 by Matfish</a>
        implementation.</p>

      <h3>Table server</h3>
      <p>All the data is passed in the following GET parameters:</p>

      <ul class="list">

        <li>query</li>
        <li>limit</li>
        <li>page</li>
        <li>orderBy</li>
        <li>ascending</li>
        <li>byColumn</li>
      </ul>

      <p>You need to return a JSON object with two properties:</p>

      <ul class="list">
        <li>data : array - An array of row objects with identical keys.</li>
        <li>count: number - Total count before limit.</li>
      </ul>

      Note: If you are calling a foreign API or simply want to use your own keys, refer to the responseAdapter option.
      <bs-table-server :url="url"
                       :columns="columns"
                       :options="optionsServer"></bs-table-server>

      <doc-code language="markup">
        &lt;bs-table-server :url="url"
        :columns="columns"
        :options="options">&lt;/bs-table-server>

      </doc-code>

      <h3>Table client</h3>
      <p>Add the following element to your page wherever you want it to render. Make sure to wrap it with a parent element you can latch your vue instance into.</p>
      <bs-table-client :data="data"
                       :columns="columns"
                       :options="options"></bs-table-client>

    </div>

    <doc-code language="markup">
      &lt;bs-table-client :data="data"
      :columns="columns"
      :options="options">&lt;/bs-table-client>

      data: {
        columns: ['id', 'name', 'age'],
        tableData: [
          { id: 1, name: "John", age: "20" },
          { id: 2, name: "Jane", age: "24" },
          { id: 3, name: "Susan", age: "16" },
          { id: 4, name: "Chris", age: "55" },
          { id: 5, name: "Dan", age: "40" }
        ],
        options: {
        // see the options API
        }
      }
    </doc-code>

    <hr>

    <h4>Scoped slots</h4>

    If you are using Vue 2.1.0 and above, you can use scoped slots to create templates:

    <doc-code language="markup">
      &lt;bs-table-client :data="entries" :columns="['id', 'name' ,'age', 'edit']">
        <a slot="edit" slot-scope="props" class="fa fa-edit" :href="edit(props.row.id)"></a>
      &lt;/bs-table-client>
    </doc-code>
    <p>Note: You can get the index of the current row relative to the entire data set using props.index</p>


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

    <a target="_blank" href="https://www.npmjs.com/package/vue-tables-2">More options see in Table Docs</a>

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
          sortable: [],
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
