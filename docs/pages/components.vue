<template>
  <div>
    <div id="wrapper">
      <div class="container bs-docs-container mt30">
        <div class="row">
          <div class="col-md-9">

            <doc-section id="components" name="Components">
              <div class="bs-callout bs-callout-success">
                <h4>Super set bootstrap components</h4>
                <p>
                  This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.
                  You can use all boostrap components (carrousel, modals, accordions and more), and using news elements, datapicker, select 2, dynamic progress bar and more.
                </p>
              </div>
            </doc-section>

            <accordion-docs></accordion-docs>
            <affix-docs></affix-docs>
            <alert-docs></alert-docs>
            <aside-docs></aside-docs>
            <button-group-docs></button-group-docs>
            <carousel-docs></carousel-docs>
            <checkbox-docs></checkbox-docs>
            <datepicker-docs></datepicker-docs>
            <dropdown-docs></dropdown-docs>
            <form-docs></form-docs>
            <input-docs></input-docs>
            <input-file-docs></input-file-docs>
            <modal-docs></modal-docs>

            <navbar-docs></navbar-docs>

            <popover-docs></popover-docs>
            <progressbar-docs></progressbar-docs>
            <radio-docs></radio-docs>
            <select-docs></select-docs>
            <select-country-docs></select-country-docs>
            <spinner-docs></spinner-docs>
            <tabs-docs></tabs-docs>
            <toggle-button-docs></toggle-button-docs>
            <tooltip-docs></tooltip-docs>
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

import accordionDocs from '../example/accordionDocs.vue'
import affixDocs from '../example/affixDocs.vue'
import affixSidebar from '../affixSidebar.vue'
import alertDocs from '../example/alertDocs.vue'
import asideDocs from '../example/asideDocs.vue'
import buttonGroupDocs  from '../example/buttonGroupDocs.vue'
import carouselDocs from '../example/carouselDocs.vue'
import checkboxDocs from '../example/checkboxDocs.vue'
import datepickerDocs from '../example/datepickerDocs.vue'
import dropdownDocs from '../example/dropdownDocs.vue'
import formDocs from '../example/formDocs.vue'
import inputDocs from '../example/inputDocs.vue'
import inputFileDocs from '../example/inputFileDocs.vue'

import modalDocs from '../example/modalDocs.vue'
import navbarDocs from '../example/navbarDocs.vue'
import popoverDocs from '../example/popoverDocs.vue'
import progressbarDocs from '../example/progressbarDocs.vue'
import radioDocs from '../example/radioDocs.vue'
import selectDocs from '../example/selectDocs.vue'
import selectCountryDocs from '../example/selectCountryDocs.vue'

import spinnerDocs from '../example/spinnerDocs.vue'
import tabsDocs from '../example/tabsDocs.vue'
import toggleButtonDocs from '../example/toggleButtonDocs.vue'
import tooltipDocs from '../example/tooltipDocs.vue'
import typeaheadDocs from '../example/typeaheadDocs.vue'


import core from '../../src/components/bootue/_core/Core.vue'
import utilities from '../../src/components/bootue/utilities/Utilities.vue'

import grid from '../../src/components/bootue/grid/Grid.vue'
import type from '../../src/components/bootue/typography/Type.vue'



export default {
  components: {
    docSection,
    accordionDocs,
    affixDocs,
    affixSidebar,
    alertDocs,
    asideDocs,
    buttonGroupDocs,
    carouselDocs,
    checkboxDocs,
    datepickerDocs,
    dropdownDocs,
    formDocs,
    inputDocs,
    inputFileDocs,
    modalDocs,
    navbarDocs,
    popoverDocs,
    progressbarDocs,
    radioDocs,
    selectDocs,
    selectCountryDocs,
    spinnerDocs,
    tabsDocs,
    toggleButtonDocs,
    tooltipDocs,
    typeaheadDocs
  },
  computed: {
    local () { return location.hostname === 'localhost' }
  }
}
</script>
