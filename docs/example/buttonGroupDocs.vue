<template>
  <doc-section id="button-group" name="***Button Group">
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
          <bs-radio true-value="left">Left</bs-radio>
          <bs-radio true-value="middle">Middle</bs-radio>
          <bs-radio true-value="right">Right</bs-radio>
        </button-group>
      </p>
      <p>
        <button-group v-model="radioValue" type="success">
          <bs-radio true-value="left">Left</bs-radio>
          <bs-radio true-value="middle">Middle</bs-radio>
          <bs-radio true-value="right">Right</bs-radio>
        </button-group>
      </p>
      <p>
        <label>Not buttons:</label>
        <button-group v-model="radioValue" type="info" buttons="false">
          <bs-radio true-value="left">Left</bs-radio>
          <bs-radio true-value="middle">Middle</bs-radio>
          <bs-radio true-value="right">Right</bs-radio>
        </button-group>
      </p>
      <p>
        <pre>Radio value: {{ radioValue }}</pre>
      </p>
    </div>
    <doc-code language="markup">
      &lt;button-group v-model="checkboxValue">
        &lt;checkbox value="left">Left&lt;/checkbox>
        &lt;checkbox value="middle">Middle&lt;/checkbox>
        &lt;checkbox value="right">Right&lt;/checkbox>
      &lt;/button-group>

      &lt;button-group v-model="radioValue" type="primary">
        &lt;radio value="left">Left&lt;/radio>
        &lt;radio value="middle">Middle&lt;/radio>
        &lt;radio value="right">Right&lt;/radio>
      &lt;/button-group>

      Not Buttons:
      &lt;button-group v-model="radioValue" type="info" buttons="false">
        &lt;radio value="left">Left&lt;/radio>
        &lt;radio value="middle">Middle&lt;/radio>
        &lt;radio value="right">Right&lt;/radio>
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
import ButtonGroup from '../../src/components/bootue/buttons/buttongroup/ButtonGroup.vue'
import bsCheckbox from '../../src/components/bootue/forms/checkbox/Checkbox.vue'
import bsRadio from '../../src/components/bootue/forms/radio/Radio.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    ButtonGroup,
    bsCheckbox,
    bsRadio
  },
  data () {
    return {
      checkboxValue: [],
      radioValue: 'middle'
    }
  }
}
</script>
