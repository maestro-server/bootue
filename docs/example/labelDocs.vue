<template>
  <doc-section id="labels" name="Labels">
    <div class="bs-example">

      <bs-label>I am primary label</bs-label>
      <bs-label type="success">I am success label</bs-label>
      <bs-label type="danger">I am danger label</bs-label>

    </div>
    <doc-code language="markup">
      &lt;bs-label>I am primary label&lt;/bs-label>
      &lt;bs-label type="success">I am success label&lt;/bs-label>
      &lt;bs-label type="danger">I am danger label&lt;/bs-label>
    </doc-code>

    <doc-table>
      <div>
        <p>type</p>
        <p><code>String (danger / success / primary / warning)</code></p>
        <p>primary</p>
        <p>color</p>
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
  }
}
</script>
