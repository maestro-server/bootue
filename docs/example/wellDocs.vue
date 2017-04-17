<template>
  <doc-section id="button-group" name="Wells">
    <div class="bs-example">

      <well>I am well</well>
      <well size="lg">Look, I'm in a large well!</well>
      <well size="sm">Look, I'min tiny well!</well>

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
  components: {
    docSection,
    docTable,
    docCode
  }
}
</script>
