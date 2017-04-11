<template>
  <div>
    <div id="wrapper">
      <div class="container bs-docs-container">
        <div class="row">
          <div class="col-md-9">
            <getting-started></getting-started>
          
          </div>
          <div class="col-md-3">
            <affix-sidebar></affix-sidebar>
          </div>
        </div>
      </div>
    </div>
    <footer class="bs-docs-footer">
      <div class="container">
        <p>Designed and built by <a href="https://github.com/yuche/">yuche</a>.</p>
        <p>Vue 2 version built by <a href="https://github.com/wffranco/">wffranco</a>.</p>
        <p>
          Using <a href="http://twitter.github.com/bootstrap" target="_blank">Twitter Bootstrap</a>
          and the <a href="css/docs.css" target="_blank">Bootstrap's docs styles</a> designed and built by <a href="http://twitter.com/mdo" target="_blank">@mdo</a>
          and <a href="http://twitter.com/fat" target="_blank">@fat</a>.
        </p>
        <p>
          Code licensed under <a href="//github.com/mgcrea/angular-strap/blob/master/LICENSE.md" target="_blank">The MIT License</a>,
          documentation under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
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
import formGroupDocs from '../example/formGroupDocs.vue'
import gettingStarted from '../example/gettingStarted.vue'
import inputDocs from '../example/inputDocs.vue'
import modalDocs from '../example/modalDocs.vue'
import navbarDocs from '../example/navbarDocs.vue'
import popoverDocs from '../example/popoverDocs.vue'
import progressbarDocs from '../example/progressbarDocs.vue'
import radioDocs from '../example/radioDocs.vue'
import selectDocs from '../example/selectDocs.vue'
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
    formGroupDocs,
    gettingStarted,
    inputDocs,
    modalDocs,
    navbarDocs,
    popoverDocs,
    progressbarDocs,
    radioDocs,
    selectDocs,
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
