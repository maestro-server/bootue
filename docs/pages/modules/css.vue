<template>
  <div>
    <doc-section id="boostrap-css" name="Bootstrap and CSS">
      <div class="bs-callout bs-callout-success">
        <h4>Where is boostrap?</h4>
        <p>
          In everywhere, we split all scss code and organize with your's bussiness. For example, alerts component, we move all variables and all style (_alerts.scss) in one place and make single self contained component.
        </p>
        <p>
          Bootstrap is huge, and sometimes its only style rules, for this we create SCSS Components, components with only scss codes, for theses you dont need to instance, only import.
        </p>
        <code>You can use all power of boostrap, and create new rules in organized way.</code>

        <hr>

        <div class="well">
          <code>Because of hot loader Vue (version 12.xx) all SCSS components need to be inside _core, and imported manually.</code>
        </div>

        <hr/>

        <doc-code language="JavaScript">
          import './bootue/bootue/tables.vue';
          // or
          require('bootue/bootue/tables');
          // this code import all table's styles

          import './bootue/bootue/grid.vue';
          import './bootue/bootue/utilities.vue';
          import './bootue/bootue/list.vue';
        </doc-code>


      </div>

    </doc-section>

    <doc-section id="components" name="SCSS Components">
      <p>Are fill components to using for boostrap and reset styles, theses components are inside _core folder:</p>

          <table class="table table-striped table-bordered">
            <tbody>
            <tr>
              <td width="180">buttons</td>
              <td>All button's SCSS - Using _core/_colors.scss do colorize the buttons</td>
            </tr>
            <tr>
              <td>close</td>
              <td>Close button's SCSS</td>
            </tr>
            <tr>
              <td>code</td>
              <td>Code style</td>
            </tr>
            <tr>
              <td>grid</td>
              <td>All grid's SCSS, using _core/_grid.scss variables to mount a grid</td>
            </tr>
            <tr>
              <td>jumbotron</td>
              <td>Jumbotron's SCSS</td>
            </tr>
            <tr>
              <td>list</td>
              <td>List's SCSS</td>
            </tr>
            <tr>
              <td>media</td>
              <td>Media's SCSS</td>
            </tr>

            <tr>
              <td>tables</td>
              <td>Tables's SCSS</td>
            </tr>
            <tr>
              <td>thumbnail</td>
              <td></td>
            </tr>
            <tr>
              <td>typography</td>
              <td>All fonts, for default bootue replace glyphicon to font awesome</td>
            </tr>
            <tr>
              <td>utilities</td>
              <td>Common css, like pull-left</td>
            </tr>
            </tbody>
          </table>


    </doc-section>

    <doc-section id="corescss" name="Core - SCSS Components">

      <table class="table table-striped table-bordered">
        <tbody>
        <tr>
          <td width="180">component-animation</td>
          <td>Using in common animation</td>
        </tr>
        <tr>
          <td>normalize</td>
          <td>Reset commands</td>
        </tr>
        <tr>
          <td>print</td>
          <td>Normalize print styles</td>
        </tr>
        <tr>
          <td>responsive</td>
          <td>Resposnive commands</td>
        </tr>
        <tr>
          <td>scaffolding</td>
          <td>Base style</td>
        </tr>
        </tbody>
      </table>
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
