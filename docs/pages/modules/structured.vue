<template>
  <div>
    <doc-section id="bootues-structure" name="Bootue structured">
      <div class="bs-callout bs-callout-success">
        <h4>How bootue works</h4>
        <hr/>
        <p>
          We split all bootstrap code and organized into little Vue's Components, and code all events using vue 2 code, all components don't need jquery, or any outher library, all components it's self contained.</p>
        <p>Each component follow the template pattern.</p>
        <doc-code>
          - _mixins
          - _mixins.scss // all mixins used by component

          - _variables
          - _variables.scss // unique component's variables, normaly import more variables to _core/_colors

          NameMyComponent.vue // boostrap file to create vue's component.
          template.html
          style.scss
          script.js
        </doc-code>

        <hr/>

        <div class="well">
          <p>
            Within a _variables.scss, we put all variables unique to this component, but some variables is common, like colors, typography, or grid size, theses variables its import by <code>../_core/_variables.scss</code>
          </p>
        </div>

      </div>

    </doc-section>

    <doc-section id="core-comp" name="Deeping at _Core Component">
      <p><code>_Core</code> component have all shared files, you maybe use to change any configuration pivot. Let's look deeping.</p>

      <table class="table table-striped table-bordered">
        <tbody>
        <tr>
          <td><code>_mixins</code></td>
          <td>
            <ul>
              <li>_border-radius</li>
              <li>_center-block</li>
              <li>_clearfix</li>
              <li>_gradients</li>
              <li>_hide-text</li>
              <li>_image</li>
              <li>_nav-divider</li>
              <li>_nav-vertical-align</li>
              <li>_opacity</li>
              <li>_reset-filter</li>
              <li>_reset-text</li>
              <li>_resize</li>
              <li>_tab-focus</li>
              <li>_text-overflow</li>
              <li>_vendor-prefixes</li>
            </ul>
          </td>
          <td>This is a common's mixins used in any cases.</td>
        </tr>
        <tr>
          <td><code>_utils</code></td>
          <td>
            <ul>
              <li><b>coerce</b> - Cast variables types</li>
              <li><b>delayer</b> - Using to make one function do delay</li>
              <li><b>getScrollBarWidth</b> - Resolve scroll bug bar (modal and affix components)</li>
              <li><b>popoverMixins</b> - Using by tooltip and popover components</li>
            </ul>
          </td>
          <td>This scripts is used in any common tasks</td>
        </tr>
        <tr>
          <td><code>_variables</code></td>
          <td>
            <ul>
              <li><b>_assets_helpers</b> - Only use by typography glyphicon</li>
              <li><b>_colors</b> - All setup colors</li>
              <li><b>_forms</b> - Common input line height</li>
              <li><b>_grid</b> - Common height and glutters used by grid components</li>
              <li><b>_screens</b> - Pixel numbers by determinde screens sizes (xs, sm, md, lg)</li>
              <li><b>_states</b> - Colors using in states components (error, warning, success)</li>
              <li><b>_typography</b> - Primary common typography (font-size, font-family)</li>
              <li><b>_zindex</b> - Workarounds zindex</li>
            </ul>
          </td>
          <td>All common variables</td>
        </tr>
        <tr>
          <td><code>components</code></td>
          <td>
            <ul>
              <li><b>components-animation</b> - Common css animations</li>
              <li><b>normalize</b> - reset styles</li>
              <li><b>print</b> - Print styles</li>
              <li><b>responsive</b> - Viewports and utilities responsive's config</li>
              <li><b>scaffolding</b> - initial setup styles</li>
            </ul>
          </td>
          <td>SCSS Components - Boostrap's core styles, maybe override.</td>
        </tr>
        </tbody>
      </table>

    </doc-section>

    <doc-section id="dep" name="List of complex component's dependences.">
      <p>All components its dependence to <code>_Core</code> component.</p>
      <table class="table table-striped table-bordered">
        <tbody>
        <tr>
          <th>Components</th>
          <th>Sub components</th>
          <th>Dependencies</th>
        </tr>
        <tr>
          <td width="180">Forms</td>
          <td>
            <doc-code>
              - checkbox
              - datepicker
              - input
              - inputfile
              - inputgroups //SCSS Component
              - option
              - radio
              - select
              - select-country
              - typeahead
            </doc-code>
          </td>
          <td>
            <ul>
              <li>buttons</li>
              <li>close</li>
              <li>dropdown</li>
              <li>typography (icon prop)</li>
              <li>_Core/variables</li>
              <li>_Core/mixins</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Navbar</td>
          <td></td>
          <td>
            <ul>
              <li>dropdown</li>
              <li>grid</li>
              <li>list</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Modal</td>
          <td></td>
          <td>
            <ul>
              <li>buttons</li>
              <li>utilities</li>
              <li>list</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Accordion</td>
          <td></td>
          <td>
            <ul>
              <li>panel</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Affix</td>
          <td></td>
          <td>
            <ul>
              <li>list</li>
              <li>buttons</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Typograph</td>
          <td>
            <doc-code>
              - glyphicons // disabled by default
              - fontawesome
            </doc-code>
          </td>
          <td>
            <ul>
              <li>_Core/variables</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Button</td>
          <td>
            <doc-code>
              - buttongroup
            </doc-code>
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>Tabs</td>
          <td></td>
          <td>
            <ul>
              <li>tab</li>
            </ul>
          </td>
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
