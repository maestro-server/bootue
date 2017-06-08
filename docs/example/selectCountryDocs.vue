<template>
  <doc-section id="selectcountry" name="Select Country">
    <bs-label>
      Id Name: bsSelectCountry
    </bs-label>
    <hr/>
    <p>Sintax sugar to create two select, one is country and second is states.</p>
    <form class="bs-example">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p>
          <pre>Select data: {{select.country}}</pre>
          </p>
          <div class="row">
            <bs-select-country
              baseclass="col-xs-6"
              v-model="select.country"
              :disabled="select.disabled"
              :required="select.required"
              :search="select.search"
            ></bs-select-country>
          </div>
        </div>

        <div class="col-xs-12">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p>
                  <bs-checkbox v-model="select.disabled">Disabled</bs-checkbox>
                </p>
                <p>
                  <bs-checkbox v-model="select.required">Required</bs-checkbox>
                </p>
                <p>
                  <bs-checkbox v-model="select.search">Search</bs-checkbox>
                </p>
              </div>
            </div>
        </div>
        <hr/>
        <div class="col-xs-12">
          <doc-code>
            &lt;bs-select-country baseclass="col-xs-6" v-model="select.country">&lt;/bs-select-country>
          </doc-code>
          <doc-code>
            &lt;bs-select-country
            baseclass="col-xs-6"
            v-model="select.country"
            :disabled="select.disabled"
            :required="select.required"
            :search="select.search"
            :label-country="Country"
            :label-state="State"
            >&lt;/bs-select-country>
          </doc-code>

          <doc-table>
            <div>
              <p>disabled</p>
              <p><code>Boolean</code></p>
              <p>false</p>
              <p>Disable this select</p>
            </div>
            <div>
              <p>search</p>
              <p><code>Boolean</code></p>
              <p>true</p>
              <p>Enable/disable search box</p>
            </div>
            <div>
              <p>label-country</p>
              <p><code>String</code></p>
              <p>Country</p>
              <p>Label country's select</p>
            </div>
            <div>
              <p>label-state</p>
              <p><code>String</code></p>
              <p>State/Province</p>
              <p>Label state's select</p>
            </div>
          </doc-table>
        </div>
      </div>
    </form>
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
        select: {
          country: null,
          disabled: false,
          placeholder: false,
          required: false,
          search: true
        }
      }
    }
  }
</script>

<style>
  .checkbox > label:not(:first-child) {
    margin-left: 15px;
  }
</style>
