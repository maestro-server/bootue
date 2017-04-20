<template>
  <doc-section id="radio" name="Radio">
    <div class="bs-example">
      <h4>Radio</h4>
      <bs-radio v-model="radioValue" selected-value="one">One</bs-radio>
      <bs-radio v-model="radioValue" selected-value="two" type="danger" disabled>Two (disabled)</bs-radio>
      <bs-radio v-model="radioValue" selected-value="two" type="warning" readonly>Two (readonly)</bs-radio>
      <bs-radio v-model="radioValue" selected-value="two" type="success">Two</bs-radio>
      <hr>
      <h4>Radio Button (Single buttons)</h4>
      <bs-radio button v-model="radioValue" selected-value="three" type="primary">Three</bs-radio>
      <bs-radio button v-model="radioValue" selected-value="four" type="info" disabled>Four (disabled)</bs-radio>
      <bs-radio button v-model="radioValue" selected-value="four" type="info" readonly>Four (readonly)</bs-radio>
      <bs-radio button v-model="radioValue" selected-value="four" type="info">Four</bs-radio>
      <p><pre>Radio value: {{ radioValue }}</pre></p>
    </div>
    <doc-code language="markup">
      &lt;bs-radio v-model="radioValue" selected-value="one">One&lt;/bs-radio>
      &lt;bs-radio v-model="radioValue" selected-value="two" type="danger/warning/success">Two&lt;/bs-radio>
      &lt;bs-radio button v-model="radioValue" selected-value="three" type="primary">Three&lt;/bs-radio>
      &lt;bs-radio button v-model="radioValue" selected-value="four" type="info">Four&lt;/bs-radio>
    </doc-code>
    <doc-table>
      <div>
        <p>button</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Enable/Disable button style.</p>
      </div>
      <div>
        <p>selected-value</p>
        <p><code>Mixed</code></p>
        <p><code>true</code></p>
        <p>Value to return if the radio item is selected.</p>
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
      <div>
        <p>value</p>
        <p><code>Mixed</code></p>
        <p></p>
        <p>Handle the selected value.</p>
      </div>
    </doc-table>
    <p>See <a href="#button-group">Button Group</a> for more options.</p>
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
      radioValue: null
    }
  }
}
</script>
