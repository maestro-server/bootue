<template>
  <doc-section id="badges" name="Badges">
    <div class="bs-example">
      <div class="col-xs-12 row">
        <a href="#">Inbox <badge>5</badge></a>

        <button class="btn btn-primary" type="button">
          Messages <badge>2</badge>
        </button>
      </div>

      <hr/>

      <doc-code language="markup">
        &lt;a href="#">Inbox &lt;badges>5&lt;/badges>&lt;/a>

        &lt;button class="btn btn-primary" type="button">
          Messages &lt;badges>2&lt;/badges>
        &lt;/button>
      </doc-code>

    </div>
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
