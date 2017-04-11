<template>
  <div class="bg-docs-home">
    <div id="wrapper" class="call-header">
      <div class="bs-docs-header">
        <div class="container">
          <h1>Bootue</h1>
          <p><a target="_blank" href="http://vuejs.org/">100% Bootstrap components</a> built with <a target="_blank" href="http://vuejs.org/">Vue 2</a>.</p>
          <p>No boostrap.css, bootstrap.js, jQuery, or any 3rd party plugins required.</p>
          <p>Really, its full Stand lone library.</p>
        </div>
      </div>

    </div>
    <section class="col-xs-12 bg-white">
      <div class="container">
        <div class="row">
            <div class="col-xs-3 mt30 text-center">
              <i class="fa fa-github-alt fa-4x" aria-hidden="true"></i>
              <h3 class="blue">Free</h3>
              <h4 class="gray">Open Source Project - MIT</h4>
            </div>
            <div class="col-xs-3 mt30 text-center">
              <i class="fa fa-cube fa-4x" aria-hidden="true"></i>
              <h3 class="blue">100% Component</h3>
              <h4 class="gray">Html, SCSS and JS, all encapsulated</h4>
            </div>
            <div class="col-xs-3 mt30 text-center">
              <i class="fa fa-life-ring fa-4x" aria-hidden="true"></i>
              <h3 class="blue">Very Customizable</h3>
              <h4 class="gray">Power bootstrap with Vue Components</h4>
            </div>
            <div class="col-xs-3 mt30 text-center">
              <i class="fa fa-ship fa-4x" aria-hidden="true"></i>
              <h3 class="blue">Stand Alone</h3>
              <h4 class="gray">Really you don't need to install anything</h4>
            </div>
          </div>
      </div>
    </section>
    <footer class="bs-docs-footer mt40 col-xs-12">
      <div class="container">
        <p>Designed and built by <a href="https://github.com/yuche/">yuche</a>.</p>
        <p>Vue 2 version built by <a href="https://github.com/wffranco/">wffranco</a>.</p>
        <p>Bootue new project version built by <a href="https://github.com/maestro-server/bootue">Felipe Signorini</a>.</p>
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

<style>
.bg-docs-home {
  background: linear-gradient(180deg, #00ADEF 10%, #2bd9ef 90%);
}

.call-header {
  color: #fff;
  text-align: center;
}
</style>
