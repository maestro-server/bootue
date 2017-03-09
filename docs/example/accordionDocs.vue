<template>
  <doc-section id="accordion" name="Accordion">
    <div class="bs-example">
      <bs-checkbox v-model="checked" type="primary">Open only one at a time.</bs-checkbox>
      <p><bs-select :options="types" clear-button v-model="selected" placeholder="Global type"></bs-select></p>
      <p><bs-select :options="types" clear-button v-model="first" placeholder="First element type"></bs-select></p>
      <accordion :one-at-atime="checked" :type="selected">
        <panel is-open :type="first=='panel'?null:first">
          <strong slot="header"><u>Panel #1</u></strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
      </accordion>
    </div>
    <doc-code language="markup">
      &lt;accordion :one-at-atime="checked" type="info">
        &lt;panel is-open type="primary">
          &lt;strong slot="header">&lt;u>Panel #1&lt;/u>&lt;/strong>
          ...
        &lt;/panel>
        &lt;panel header="Panel #2">
          ...
        &lt;/panel>
        &lt;panel header="Panel #3">
          ...
        &lt;/panel>
        &lt;panel header="Panel #4">
          ...
        &lt;/panel>
      &lt;/accordion>
    </doc-code>
    <doc-table>
      <div>
        <p>type</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Define the type of color for the tabs (global).</p>
      </div>
      <div>
        <p>one-at-time</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Control whether expanding an item will cause the other items to close.</p>
      </div>
    </doc-table>
    <doc-table name="Panel">
      <div>
        <p>header</p>
        <p><code>String</code></p>
        <p></p>
        <p>The clickable text on the group's header. You need one to be able to click on the header for toggling.</p>
      </div>
      <div>
        <p>is-open</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Whether accordion group is open or closed.</p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Define the type of color for the tab (single).</p>
      </div>
    </doc-table>
    <p>If you want to personalice your header with some html you can use the slot instead of header attribute (panel&nbsp;#1 in the example).</p>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import Accordion from '../../src/components/bootue/accordion/Accordion.vue'
import bsCheckbox from '../../src/components/bootue/forms/checkbox/Checkbox.vue'
import Panel from '../../src/components/bootue/panel/Panel.vue'
import bsSelect from '../../src/components/bootue/forms/select/Select.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    Accordion,
    bsCheckbox,
    Panel,
    bsSelect
  },
  data () {
    return {
      checked: true,
      selected: 'info',
      first: 'primary',
      types: ['default', 'primary', 'info', 'success', 'warning', 'danger']
    }
  }
}
</script>
