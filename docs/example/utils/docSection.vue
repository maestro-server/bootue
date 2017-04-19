<template>
  <div class="bs-docs-section" :id="id">
    <h1 class="page-header">{{name}}</h1>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    id: {type: String, default: null, required: true},
    name: {type: String, default: null, required: true}
  },
  created () {
    this._section = true
  }
}
</script>
