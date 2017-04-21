<template>
  <doc-section id="checkbox" name="Checkbox">
    <div class="bs-example">
      <h4>Checkbox</h4>
      <bs-checkbox v-model="checkboxValue.one" true-value="1">One</bs-checkbox>
      <bs-checkbox v-model="checkboxValue.two" true-value="two" type="danger" disabled>Two (disabled)</bs-checkbox>
      <bs-checkbox v-model="checkboxValue.two" true-value="two" type="warning" readonly>Two (readonly)</bs-checkbox>
      <bs-checkbox v-model="checkboxValue.two" true-value="two" type="success">Two</bs-checkbox>
      <hr>
      <h4>Checkbox Button (Single button)</h4>
      <bs-checkbox button v-model="checkboxValue.three" :true-value="2+1" type="primary">Three</bs-checkbox>
      <bs-checkbox button v-model="checkboxValue.four" type="info" disabled>Four (disabled)</bs-checkbox>
      <bs-checkbox button v-model="checkboxValue.four" type="info" readonly>Four (readonly)</bs-checkbox>
      <bs-checkbox button v-model="checkboxValue.four" type="info">Four</bs-checkbox>
      <p>
        <pre>Checkbox values: {{ checkboxValue }}</pre>
      </p>
    </div>
    <doc-code language="markup">
      &lt;checkbox v-model="checkboxValue.one" true-value="1">One&lt;/checkbox>
      &lt;checkbox v-model="checkboxValue.two" true-value="two" type="primary">Two&lt;/checkbox>
      &lt;checkbox v-model="checkboxValue.three" :true-value="2+1" type="info">Three&lt;/checkbox>
      &lt;checkbox button v-model="checkboxValue.four" type="danger">Four&lt;/checkbox>
    </doc-code>
    <doc-table>
      <div>
        <p>value</p>
        <p><code>Mixed</code></p>
        <p></p>
        <p>Handle the selected value.</p>
      </div>
      <div>
        <p>true-value</p>
        <p><code>Mixed</code></p>
        <p><code>true</code></p>
        <p>Value when is checked.</p>
      </div>
      <div>
        <p>false-value</p>
        <p><code>Mixed</code></p>
        <p><code>false</code></p>
        <p>Value when is not checked.</p>
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
        <p>button</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>Button style.</p>
      </div>
    </doc-table>
    <p>See <a @click="scrollMeTo('button-group')">Button Group</a> for more options.</p>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import bsCheckbox from '../../src/bootue/forms/checkbox/Checkbox.vue'
import AnimateScroll from '../libs/animate'

export default {
  components: {
    docSection,
    docTable,
    docCode
  },
  data () {
    return {
      checkboxValue: {
        one: false,
        two: true,
        three: false,
        four: false
      }
    }
  },
  methods: {
    scrollMeTo(refName) {
      const element = document.querySelector(`#${refName}`)
      const top = element.offsetTop -30
      AnimateScroll(top, 0, 'easeInOutQuint')
    }
  }
}
</script>
