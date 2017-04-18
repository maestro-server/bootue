<template>
  <div>
    <div id="wrapper">
      <div class="container bs-docs-container mt30">
        <div class="row">
          <div class="col-md-9">
            <structured></structured>

          </div>
          <div class="col-md-3">
            <affix-sidebar></affix-sidebar>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import affixSidebar from '../affixSidebar.vue'
import structured from './modules/structured.vue'

export default {
  components: {
    affixSidebar,
    structured
  }
}
</script>
