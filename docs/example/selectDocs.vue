<template>
  <doc-section id="select" name="Select">
    <p>Based in a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.</p>
    <div class="bs-example">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <p><pre>Normal select data: {{select.normal}}</pre></p>
          <form action="./#select" method="get">
            <bs-select :options="select.options" options-value="val" v-model="select.normal" name="animal" :search="select.search"
              :required="select.required" :clear-button="select.clearButton" :disabled="select.disabled"
              :placeholder="select.placeholder?'Using placeholder':null"
            ></bs-select>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <p><pre>Multiple select data : {{select.multiple.join(',')}}</pre></p>
          <form action="./#select" method="get">
            <bs-select :options="select.options" options-value="val" v-model="select.multiple" name="animals[]" :search="select.search"
              multiple :required="select.required" :clear-button="select.clearButton"
              :placeholder="select.placeholder?'Using placeholder':null"
              :close-on-select="select.closeOnSelect" :limit="select.limit?3:1024" :disabled="select.disabled"
            ></bs-select>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
      <br/>
      <button-group type="primary" :buttons="false">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p><bs-checkbox v-model="select.disabled">Disabled</bs-checkbox></p>
            <p><bs-checkbox v-model="select.placeholder">Placeholder</bs-checkbox></p>
            <p><bs-checkbox v-model="select.search">Search</bs-checkbox></p>
            <p><bs-checkbox v-model="select.clearButton">Clear Button</bs-checkbox></p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p><bs-checkbox v-model="select.required">Required (empty value if noting selected)</bs-checkbox></p>
            <p>
              Multiple:
              <bs-checkbox v-if="select.multiple" v-model="select.limit">Limit (e.g. 3)</bs-checkbox>
              <bs-checkbox v-if="select.multiple" v-model="select.closeOnSelect">Close on Select</bs-checkbox>
            </p>
          </div>
        </div>
      </button-group>
      <doc-code>
        &lt;form action="./#select" method="get">
          &lt;bs-select v-model="select.value" :options="select.options" options-value="val"
            multiple name="animals[]" limit="3"
            placeholder="Using placeholder"
            search justified required disabled
            clear-button close-on-select
          >&lt;/bs-select>
          &lt;button type="submit" class="btn btn-default">Submit form&lt;/button>
        &lt;/form>
      </doc-code>
      <doc-code language="javascript">
        options: [
          {val: 0, label: 'Cat'},
          {val: 1, label: 'Cow'},
          {val: 2, label: 'Dog'},
          {val: 3, label: 'Elephant'},
          {val: 4, label: 'Fish'},
          {val: 5, label: 'Lion'},
          {val: 6, label: 'Tiger'},
          {val: 7, label: 'Turtle'}
        ]
      </doc-code>
      <h4>Select with option component:</h4>
      <p><pre>Selected data : {{single}}</pre></p>
      <bs-select v-model="single">
        <bs-option value="apple">Apple</bs-option>
        <bs-option value="banana">Banana</bs-option>
        <bs-option value="cherry">Cherry</bs-option>
        <bs-option value="orange">Orange</bs-option>
        <bs-option value="grape">Grape</bs-option>
      </bs-select>
      <doc-code>
        &lt;bs-select>
          &lt;bs-option value="apple">Apple&lt;/bs-option>
          &lt;bs-option value="banana">Banana&lt;/bs-option>
          &lt;bs-option value="cherry">Cherry&lt;/bs-option>
          &lt;bs-option value="orange">Orange&lt;/bs-option>
          &lt;bs-option value="grape">Grape&lt;/bs-option>
        &lt;/bs-select>
      </doc-code>
      <hr/>
      <h4>Use button-group (component or <a href="http://getbootstrap.com/components/#btn-groups-justified">bootstrap element</a>) if you want to justify.</h4>
      <button-group justified>
        <bs-select multiple clear-button>
          <bs-option value="apple">Apple</bs-option>
          <bs-option value="banana">Banana</bs-option>
          <bs-option value="cherry">Cherry</bs-option>
          <bs-option value="cranberry">Cranberry</bs-option>
          <bs-option value="grape">Grape</bs-option>
          <bs-option value="orange">Orange</bs-option>
          <bs-option value="passionfruit">Passionfruit</bs-option>
          <bs-option value="pineapple">Pineapple</bs-option>
          <bs-option value="strawberry">Strawberry</bs-option>
          <bs-option value="a">Apple</bs-option>
          <bs-option value="b">Banana</bs-option>
          <bs-option value="c">Cherry</bs-option>
          <bs-option value="c">Cranberry</bs-option>
          <bs-option value="g">Grape</bs-option>
          <bs-option value="o">Orange</bs-option>
          <bs-option value="p">Passionfruit</bs-option>
          <bs-option value="p">Pineapple</bs-option>
          <bs-option value="s">Strawberry</bs-option>
        </bs-select>
      </button-group>
      <doc-code>
        &lt;button-group justified>&lt;select>...&lt;/select>&lt;/button-group>
        // or
        &lt;div class="btn-group btn-group-justified">&lt;select>...&lt;/select>&lt;/div>
      </doc-code>
      <hr/>
      <h4>Ajax data and parent dependency:</h4>
      <p>Depend on <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">vue-resource</a>. Disabled if not present.</p>
      <p>The second select has inheritance, is enabled when the first get some value and the ajax return values.</p>
      <bs-select url="docs/data.json" options-label="text" v-model="ajax.value" clear-button @options="ajax.options = arguments[0]"></bs-select>
      <bs-select url="docs/data.json" options-label="text" multiple :parent="ajax.value"></bs-select>
      <doc-code>
        &lt;bs-select url="docs/data.json" options-label="text" v-model="ajax.value" clear-button @options="ajax.options = arguments[0]">&lt;/bs-select>
        &lt;bs-select url="docs/data.json" options-label="text" multiple :parent="ajax.value">&lt;/bs-select>
      </doc-code>
      <p>Ajax response:</p>
      <pre v-html="ajax.options"></pre>
    </div>
    <doc-table name="Other">
      <div>
        <p>min-search</p>
        <p><code>Number</code></p>
        <p><code>0</code></p>
        <p>If defined, the searchbox is disabled if are less than the minimum value you set.</p>
      </div>
      <div>
        <p>lang</p>
        <p><code>String</code></p>
        <p>Browser language</p>
        <p><abbr title="ISO 639-1 code"><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>
      </div>
      <div>
        <p>options-label</p>
        <p><code>String</code></p>
        <p><code>label</code></p>
        <p>Define the value in the data used as label.</p>
      </div>
      <div>
        <p>options-value</p>
        <p><code>String</code></p>
        <p><code>value</code></p>
        <p>Define the value in the data used as value.</p>
      </div>
      <div>
        <p>placeholder</p>
        <p><code>String</code></p>
        <p>Nothing Selected</p>
        <p></p>
      </div>
      <div>
        <p>search-text</p>
        <p><code>String</code></p>
        <p></p>
        <p></p>
      </div>
    </doc-table>
    <doc-table type="Events">
      <div>
        <p>change</p>
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
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import ButtonGroup from '../../src/components/bootue/buttons/buttongroup/ButtonGroup.vue'
import bsCheckbox from '../../src/components/bootue/forms/checkbox/Checkbox.vue'
import bsSelect from '../../src/components/bootue/forms/select/Select.vue'
import bsOption from '../../src/components/bootue/forms/option/Option.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    ButtonGroup,
    bsCheckbox,
    bsSelect,
    bsOption
  },
  data () {
    return {
      select: {
        clearButton: false,
        closeOnSelect: false,
        disabled: false,
        justified: true,
        limit: false,
        multiple: [],
        options: [
          {val: 0, label: 'Cat'},
          {val: 1, label: 'Cow'},
          {val: 2, label: 'Dog'},
          {val: 3, label: 'Elephant'},
          {val: 4, label: 'Fish'},
          {val: 5, label: 'Lion'},
          {val: 6, label: 'Tiger'},
          {val: 7, label: 'Turtle'}
        ],
        placeholder: false,
        required: false,
        search: true
      },
      ajax: {
        options: [],
        value:null
      },
      single: []
    }
  }
}
</script>

<style>
.checkbox>label:not(:first-child) {
  margin-left: 15px;
}
</style>
