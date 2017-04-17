<template>
  <doc-section id="inputfile" name="Input File">
    <div class="bs-example text-left">
      <form action="." method="get" accept-charset="utf-8">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div>
              <bs-input-file name="avatar"
                             :disabled="check.disabled"
                             help="Only allows lowercase letters and numbers."
                             :label="check.label ? 'User Name' : null"
                             :placeholder="check.placeholder ? 'hello i\'m placeholder.' : null"
                             :readonly="check.readonly"
                             :clear-button="check.clearButton"
                             v-model="input"
              ></bs-input-file>
            </div>

            <div class="row">
              <button-group type="primary" :buttons="false">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <p>
                    <bs-checkbox v-model="check.label">Label</bs-Checkbox>
                  </p>
                  <p>
                    <bs-checkbox v-model="check.placeholder">Placeholder</bs-checkbox>
                  </p>
                  <p>
                    <bs-checkbox v-model="check.disabled">Disabled</bs-checkbox>
                  </p>
                  <p>
                    <bs-checkbox v-model="check.icon">Icon</bs-checkbox>
                  </p>
                  <p>
                    <bs-checkbox v-model="check.readonly">Readonly</bs-checkbox>
                  </p>
                  <p>
                    <bs-checkbox v-model="check.clearButton">Clear Button</bs-checkbox>
                  </p>
                </div>
              </button-group>
            </div>

          </div>
        </div>
      </form>

      <doc-table>
        <div>
          <p>value</p>
          <p><code>String</code></p>
          <p><code>''</code></p>
          <p>Input value. Use <code>v-model="value"</code></p>
        </div>
        <div>
          <p>state</p>
          <p><code>String</code></p>
          <p><code>null</code></p>
          <p>State input, options is success, error or warning</p>
        </div>
        <div>
          <p>disabled</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p></p>
        </div>
        <div>
          <p>help</p>
          <p><code>String</code></p>
          <p><code>null</code></p>
          <p>Help text behind the input</p>
        </div>
        <div>
          <p>label</p>
          <p><code>String</code></p>
          <p><code>null</code></p>
          <p>Enable input label (name).</p>
        </div>
        <div>
          <p>name</p>
          <p><code>String</code></p>
          <p><code>null</code></p>
          <p></p>
        </div>
        <div>
          <p>placeholder</p>
          <p><code>String</code></p>
          <p><code>null</code></p>
          <p>text inside a placeholder</p>
        </div>
      </doc-table>

      <doc-table type="Events">
        <div>
          <p>changeUploadImage</p>
          <p>(<code>value</code>)</p>
          <p>Return the selected value(s).</p>
        </div>
        <div>
          <p>options</p>
          <p>(<code>options:Array</code>)</p>
          <p>Return the options array. Helpfull for dinamic/url options.</p>
        </div>
        <div>
          <p>selected</p>
          <p>(<code>labels:String</code>)</p>
          <p>Return a string with the label(s) of the selected item(s).</p>
        </div>
      </doc-table>
    </div>
  </doc-section>
</template>

<script>
  import docSection from './utils/docSection.vue'
  import docTable from './utils/docTable.js'
  import docCode from './utils/docCode.js'

  export default {
    components: {
      docSection,
      docTable,
      docCode
    },
    data () {
      return {
        check: {
          clearButton: true,
          error: true,
          hideHelp: true,
          icon: true,
          label: true,
          mask: true,
          minlength: true,
          placeholder: true,
          readonly: false,
          disabled: false
        },
        input: null
      }
    }
  }
</script>
