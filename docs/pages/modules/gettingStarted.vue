<template>
  <div>
    <doc-section id="getting-started" name="Getting started">
      <div class="bs-callout bs-callout-success">
        <h4>About this project</h4>
        <p>
          The goal of project is provide a easy way to customize, incorporate and organize all elements of your's project.
          For this we organize all elements into self contained components, splitting all variables and codes put into each folder,
          each component have yours variables, events, styles and more.
          Bootue its group of elements components self contained, organized, with multiple function to incorporate and using in any SPA project.
        </p>
        <p>
          We easy control dependences and have oportunity to deep customize, bootue make simple way to modify boostrap variables, to possibility  perhaps to you using
          party of outhers frameworks together with boostrap components, for example we can import grid's Bulma system and
          use with boostrap components.
        </p>
      </div>
      <h3 class="text-center">We organize and structure a new set of boostrap's element, <br/>and create more new elements.
      </h3>
      <div class="bs-callout bs-callout-success">
        <p>
          We raised te concept web Components to 99%, all coponents is self contained, his have your own variables, scss, js and events.
          Its make to easy create a new components or modify any existing.
        </p>
      </div>
      <h3 class="text-center">Don`t need to import any css, js or fonts, bootue components its self contained</h3>
      <div class="bs-callout bs-callout-success">
        <p>
          You can choose how components the project using, or integrate the components inside to project, its easy to customize
          , create or perhaps  mixin with another frameworks parts.
        </p>
      </div>
      <h4>Let`s started</h4>
      <doc-code language="javascript">
        $ npm install bootue

        import Bootue from 'bootue'
        Vue.use(Bootue) // import all components globally

        // >>> or
        var alert = require('bootue/bootue/alert');
        var alert = require('bootue/bootue').alert;

        new Vue({
          components: {
            alert: alert
          }
        })
      </doc-code>
      <h4>ES6</h4>
      <doc-code language="javascript">
        import alert from 'bootue/bootue/alert'
        import { alert } from 'bootue/bootue'

        new Vue({
          components: {
            alert
          }
        })
      </doc-code>
      <hr/>
      <h4>Import bootue system into your project</h4>
      <p>
        We recommend to download all components files and import inside to project, remenber the goal is transfer all power
        to select, customize and extends to any scss parts to project. In deep bootue is a boostrap splitting code, we have SCSS Components, Js Components and Hybrid Components.</p>
      <doc-code language="markdown">
        //strutucture folder to generic vue 2 project
        - vuex
        - components
          - pages
            - home
            - contact
          - bootue
            - _core
            - alerts
            - grids
            - typography
            - utilities
      </doc-code>
    </doc-section>

    <doc-section id="im-folder" name="Important folders">
      <p>Bootue have a one very important folder, its called <code>_core</code>, inside we have all shared .scss, and components.
      </p>
      <doc-code language="javascript">
        //minimal worked
        - bootue
          - _core
            - _mixins // a lot of shared's mixins

            - _variables
              - _colors.scss // this its the most important file, all variable colors
              - _assets_helpers.scss
              - _forms.scss // size, height and width forms components
              - _grid_component.scss
              - _grid.scss // variable grid (using in all components)
              - _screens.scss
              - _states.scss // colors states, like error, warning, success and primary
              - _typography.scss // typography
              - _zindex.scss // utils

            - components // a bunch of SCSSS Components
              - print // print rules
              - normalize
              - component-animation
              - responsive // responsive rules
              - scaffolding // reset rules
      </doc-code>
      <hr/>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h5 class="panel-title text-center">You maybe create a new components, your change anything, <br/>remember,
            bootue goal its organize and make easy to change any part of boostrap.</h5>
        </div>

        <div class="panel-body">
          <p>Maybe anothers importants folders is</p>
          <ul>
            <li>grid</li>
            <li>typograph</li>
            <li>utilities</li>
          </ul>
          <p>Its a SCSS Components, theses guys have only scss.</p>

        </div>
      </div>
    </doc-section>

    <doc-section id="organization" name="Variables and organization">
      <p>All global variables its inside <code>_core</code>
        folder, but each components have yours own variables, example:</p>
      <h5>Badges Component</h5>
      <doc-code>
        //folder structured
        - badges
          - _variables
            _variables.scss // all badges's variables

        Badges.vue
        style.scss // scss badges, import to boostrap
        template.html // template html component
      </doc-code>
      <p>Look hers variables</p>
      <doc-code language="css">
        @import '../../_core/variables'; // base colors

        $badge-color: #fff !default;
        //** Linked badge text color on hover
        $badge-link-hover-color: #fff !default;
        $badge-bg: $gray-light !default;

        //** Badge text color in active nav link
        $badge-active-color: $link-color !default;
        //** Badge background color in active nav link
        $badge-active-bg: #fff !default;

        $badge-font-weight: bold !default;
        $badge-line-height: 1 !default;
        $badge-border-radius: 10px !default;
      </doc-code>

    </doc-section>

    <doc-section id="v-model" name="v-model">
      <p>According to the vue2 specifications, <code>twoWay</code> binding is not supported anymore, except for <code>v-model</code>.
      </p>
      <p>The <code>v-model</code> directive in a component always link to <code>value</code> attribute.</p>
      <p>Keep in mind that in vue2:</p>
      <doc-code>
        &lt;!-- using v-model like this: -->
        &lt;component v-model="element">&lt;/component>
        &lt;!-- is the same that: -->
        &lt;component :value="element" @input="element = argument[0]">&lt;/component>
      </doc-code>
    </doc-section>
  </div>
</template>
<script>
  import docCode from '../../example/utils/docCode.js'
  import docSection from '../../example/utils/docSection.vue'
  export default {
    components: {
      docCode,
      docSection
    }
  }
</script>
