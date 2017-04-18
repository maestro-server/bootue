<template>
  <div>
    <doc-section id="bootues-structure" name="Bootue structured">
      <div class="bs-callout bs-callout-success">
        <h4>How bootue works</h4>
        <p>
          This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.
          As a result no dependency on jQuery or Bootstrap's JavaScript is required.
          The only required dependencies are:
        </p>
      </div>

    </doc-section>
  </div>
</template>
<script>
  import docCode from '../../example/utils/docCode.js'
  import docSection from '../../example/utils/docSection.vue'
  export default {
    components: {
      docCode,
      docSection
    }
  }
</script>
