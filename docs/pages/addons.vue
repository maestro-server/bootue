<template>
  <div>
    <div id="wrapper">
      <div class="container bs-docs-container mt30">
        <div class="row">
          <div class="col-md-9">

            <doc-section id="components" name="Addons">
              <div class="bs-callout bs-callout-success">
                <h4>Enhancement your project with new components</h4>
                <p>
                  This components is not enable by default.
                </p>
              </div>
            </doc-section>

            <aside-docs></aside-docs>
            <select-country-docs></select-country-docs>

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
import docSection from '../example/utils/docSection.vue'
import asideDocs from '../example/asideDocs.vue'
import selectCountryDocs from '../example/selectCountryDocs.vue'

import affixDocs from '../example/affixDocs.vue'
import affixSidebar from '../affixSidebar.vue'

export default {
  components: {
    docSection,
    affixDocs,
    affixSidebar,
    asideDocs,
    selectCountryDocs
  },
  computed: {
    local () { return location.hostname === 'localhost' }
  }
}
</script>
