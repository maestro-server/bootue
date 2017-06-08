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
            <badgesDocs></badgesDocs>
            <carousel-docs></carousel-docs>
            <dropdown-docs></dropdown-docs>

            <label-docs></label-docs>
            <modal-docs></modal-docs>

            <navbar-docs></navbar-docs>
            <pagination-docs></pagination-docs>
            <popover-docs></popover-docs>
            <progressbar-docs></progressbar-docs>

            <spinner-docs></spinner-docs>
            <tabs-docs></tabs-docs>
            <tooltip-docs></tooltip-docs>
            <well-docs></well-docs>
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
import badgesDocs from '../example/badgesDocs.vue'
import carouselDocs from '../example/carouselDocs.vue'
import dropdownDocs from '../example/dropdownDocs.vue'

import labelDocs from '../example/labelDocs.vue'
import modalDocs from '../example/modalDocs.vue'
import navbarDocs from '../example/navbarDocs.vue'

import paginationDocs from '../example/paginationDocs.vue'
import popoverDocs from '../example/popoverDocs.vue'
import progressbarDocs from '../example/progressbarDocs.vue'
import spinnerDocs from '../example/spinnerDocs.vue'
import tabsDocs from '../example/tabsDocs.vue'
import tooltipDocs from '../example/tooltipDocs.vue'


import wellDocs from '../example/wellDocs.vue'


export default {
  components: {
    docSection,
    accordionDocs,
    affixDocs,
    affixSidebar,
    alertDocs,
    badgesDocs,
    carouselDocs,
    dropdownDocs,
    labelDocs,
    modalDocs,
    navbarDocs,
    paginationDocs,
    popoverDocs,
    progressbarDocs,
    spinnerDocs,
    tabsDocs,
    tooltipDocs,
    wellDocs
  },
  computed: {
    local () { return location.hostname === 'localhost' }
  }
}
</script>
