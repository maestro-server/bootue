<template>
  <div>
    docCode disabled (example codes)
    <!-- <pre v-if="!language" ref="container"></pre>
    <template v-else>
      <pre v-if="language=='markup'"><code ref="container" class="language-markup"><slot></slot><script type="language-mark-up"></script></code></pre>
      <pre v-else><code ref="container" :class="'language-' + language"><slot></slot><script :type="'language-' + language"></script></code></pre>
    </template> -->
  </div>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default: 'html'
    }
  }
}
</script>
