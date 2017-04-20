<template>
  <doc-section id="button-group" name="Button Group">
    <div class="bs-example">
      <h4>Checkbox</h4>
      <button-group v-model="checkboxValue">
        <bs-checkbox true-value="left">Left</bs-checkbox>
        <bs-checkbox true-value="middle">Middle</bs-checkbox>
        <bs-checkbox true-value="right">Right</bs-checkbox>
      </button-group>
      <p>
        <pre>Checkbox value: {{ checkboxValue }}</pre>
      </p>
      <hr>
      <h4>Radio</h4>
      <p>
        <button-group v-model="radioValue" type="primary">
          <bs-radio selected-value="left">Left</bs-radio>
          <bs-radio selected-value="middle">Middle</bs-radio>
          <bs-radio selected-value="right">Right</bs-radio>
        </button-group>
      </p>
      <p>
        <button-group v-model="radioValue" type="success">
          <bs-radio selected-value="left">Left</bs-radio>
          <bs-radio selected-value="middle">Middle</bs-radio>
          <bs-radio selected-value="right">Right</bs-radio>
        </button-group>
      </p>
      <p>
        <label>Not buttons:</label>
        <button-group v-model="radioValue" type="info" :buttons="false">
          <bs-radio selected-value="left">Left</bs-radio>
          <bs-radio selected-value="middle">Middle</bs-radio>
          <bs-radio selected-value="right">Right</bs-radio>
        </button-group>
      </p>
      <p>
        <pre>Radio value: {{ radioValue }}</pre>
      </p>
    </div>
    <doc-code language="markup">
      &lt;button-group v-model="checkboxValue">
        &lt;checkbox true-value="left">Left&lt;/checkbox>
        &lt;checkbox true-value="middle">Middle&lt;/checkbox>
        &lt;checkbox true-value="right">Right&lt;/checkbox>
      &lt;/button-group>

      &lt;button-group v-model="radioValue" type="primary">
        &lt;radio selected-value="left">Left&lt;/radio>
        &lt;radio selected-value="middle">Middle&lt;/radio>
        &lt;radio selected-value="right">Right&lt;/radio>
      &lt;/button-group>

      Not Buttons:
      &lt;button-group v-model="radioValue" type="info" buttons="false">
        &lt;radio selected-value="left">Left&lt;/radio>
        &lt;radio selected-value="middle">Middle&lt;/radio>
        &lt;radio selected-value="right">Right&lt;/radio>
      &lt;/button-group>
    </doc-code>

    <doc-table>
      <div>
        <p>value</p>
        <p><code>Array</code> or <code>String</code></p>
        <p></p>
        <p>If defined, then the defined values will be checked otherwise the elements with a checked attribute
        will be checked.</p>
      </div>
      <div>
        <p>buttons</p>
        <p><code>Boolean</code></p>
        <p><code>true</code></p>
        <p>
          <p>Can enable/disable button style.</p>
          <p>Group normal checks if you want to set the same type color for all.</p>
        </p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>
          <p>Can enable/disable group values.</p>
          <p>Disable it if you need independent values but want to group color and/or style.</p>
        </p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code>, one of <code>default</code>
        <code>primary</code>
        <code>danger</code>
        <code>info</code>
        <code>warning</code>
        <code>success</code></p>
        <p><code>default</code></p>
        <p></p>
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
      checkboxValue: [],
      radioValue: 'middle'
    }
  }
}
</script>
