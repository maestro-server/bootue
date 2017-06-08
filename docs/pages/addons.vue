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
                  If you like to enable pass id name inside array in option addons.
                </p>
                <doc-code language="javascript">
                  import Bootue from 'Bootue'
                  Vue.use(Bootue, {addons: ['Sidebar', 'bsSelectCountry']})
                </doc-code>
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
import docCode from '../example/utils/docCode.js'
import asideDocs from '../example/asideDocs.vue'
import selectCountryDocs from '../example/selectCountryDocs.vue'

import affixDocs from '../example/affixDocs.vue'
import affixSidebar from '../affixSidebar.vue'

export default {
  components: {
    docSection,
    docCode,
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
