<template>
  <div>
    <div id="wrapper">
      <div class="container bs-docs-container mt30">
        <div class="row">
          <div class="col-md-9">

            <doc-section id="components" name="Forms - Components">
              <div class="bs-callout bs-callout-success">
                <h4>Super set forms components</h4>
                <p>
                  Super easy to create interact forms.
                </p>
              </div>
            </doc-section>

            <button-group-docs></button-group-docs>
            <checkbox-docs></checkbox-docs>
            <datepicker-docs></datepicker-docs>
            <input-docs></input-docs>
            <input-file-docs></input-file-docs>
            <radio-docs></radio-docs>
            <select-docs></select-docs>

            <toggle-button-docs></toggle-button-docs>
            <typeahead-docs></typeahead-docs>
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
import affixDocs from '../example/affixDocs.vue'
import affixSidebar from '../affixSidebar.vue'

import buttonGroupDocs  from '../example/buttonGroupDocs.vue'
import checkboxDocs from '../example/checkboxDocs.vue'
import datepickerDocs from '../example/datepickerDocs.vue'
import inputDocs from '../example/inputDocs.vue'
import inputFileDocs from '../example/inputFileDocs.vue'

import radioDocs from '../example/radioDocs.vue'
import selectDocs from '../example/selectDocs.vue'

import toggleButtonDocs from '../example/toggleButtonDocs.vue'
import typeaheadDocs from '../example/typeaheadDocs.vue'

import wellDocs from '../example/wellDocs.vue'


export default {
  components: {
    docSection,
    affixDocs,
    affixSidebar,
    buttonGroupDocs,
    checkboxDocs,
    datepickerDocs,
    inputDocs,
    inputFileDocs,
    radioDocs,
    selectDocs,
    toggleButtonDocs,
    typeaheadDocs
  },
  computed: {
    local () { return location.hostname === 'localhost' }
  }
}
</script>
