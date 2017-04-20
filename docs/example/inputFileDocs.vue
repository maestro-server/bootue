<template>
  <doc-section id="inputfile" name="Input File">
    <div class="bs-example text-left">
      <form action="." method="get" accept-charset="utf-8">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h5>Selected files with input files</h5>
            <div>
              <bs-input-file
              name="avatar"
              v-model="file"
              :label="check.label"
              :clearButton="check.clearButton"
              :placeholder="check.placeholder"
              :disabled="check.disabled"
              :multiple="check.multiple"
              ></bs-input-file>
            </div>

            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <p>
                  <bs-checkbox v-model="check.label" true-value="Upload file">Label</bs-Checkbox>
                </p>
                <p>
                  <bs-checkbox v-model="check.disabled">Disabled</bs-checkbox>
                </p>
                <p>
                  <bs-checkbox v-model="check.icon">Icon</bs-checkbox>
                </p>
                <p>
                  <bs-checkbox v-model="check.clearButton">Clear Button</bs-checkbox>
                </p>
                <p>
                  <bs-checkbox v-model="check.multiple">Multiple</bs-checkbox>
                </p>
              </div>
            </div>


          </div>

          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h5>How files is selected</h5>
            <well v-for="f in file">{{f.name}}</well>
          </div>

        </div>

        <doc-code language="markup">
          &lt;bs-input-file
          name="avatar"
          v-model="file"
          :label="check.label"
          :clearButton="check.clearButton"
          :placeholder="check.placeholder"
          :disabled="check.disabled"
          :multiple="check.multiple"
          >&lt;/bs-input-file>
        </doc-code>

        <hr/>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <bs-input-file help="Show help message"></bs-input-file>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

            <bs-input-file help="Show help message" icon state="success" :clearButton="check.clearButton"></bs-input-file>
          </div>
        </div>

        <doc-code language="markup">
          &lt;bs-input-file help="Show help message" icon state="success" :clearButton="check.clearButton">&lt;/bs-input-file>

        </doc-code>

      </form>

      <doc-table>
        <div>
          <p>clearButton</p>
          <p><code>Boolean</code></p>
          <p><code>true</code></p>
          <p>Enable remove button</p>
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
        <div>
          <p>icon</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p>Show or hide icons, the icon only apper with state type</p>
        </div>
        <div>
          <p>multiple</p>
          <p><code>Boolean</code></p>
          <p><code>false</code></p>
          <p>Enable to selected multiple files</p>
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
          label: null,
          readonly: false,
          disabled: false,
          multiple: false
        },
        file: {},
        input: null
      }
    }
  }
</script>
