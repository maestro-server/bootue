<template>
  <doc-section id="forms" name="Forms">
    <p>You can use all types of forms with special components input.</p>
    <div class="bs-example text-left">

      <h3>Form default</h3>
      <form>
        <bs-input type="email" placeholder="Email" label="Email address"></bs-input>
        <bs-input type="password" placeholder="Password" label="Password"></bs-input>

        <div class="row">
        <bs-input-file class="col-xs-4" help="Example block-level help text here."></bs-input-file>
        </div>
        <div class="col-xs-12 row"></div>

        <div class="form-group">
        <bs-checkbox>this is checkbox</bs-checkbox>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>

      <hr/>

      <h3>Form Horizontal</h3>
      <form class="form-horizontal">
        <bs-input-horizontal type="email" placeholder="Email" label="Email address"></bs-input-horizontal>

        <div class="col-sm-offset-2 col-sm-10">
          <bs-checkbox>Remember me</bs-checkbox>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>

      <hr/>

      <h3>Form inline</h3>
      <form class="form-inline">
        <bs-input-inline type="email" placeholder="Email" label="Email address"></bs-input-inline>
        <bs-input-inline type="password" placeholder="Password" label="Password"></bs-input-inline>

        <button type="submit" class="btn btn-default">Send invitation</button>
      </form>

    </div>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import bsInput from '../../src/bootue/forms/input/Input.vue'
import ButtonGroup from '../../src/bootue/buttons/buttongroup/ButtonGroup.vue'
import bsCheckbox from '../../src/bootue/forms/checkbox/Checkbox.vue'
import Dropdown from '../../src/bootue/dropdown/Dropdown.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    bsInput,
    ButtonGroup,
    bsCheckbox,
    Dropdown
  },
  data () {
    return {
      check: {
        clearButton:true,
        error:true,
        hideHelp: true,
        icon:true,
        label:true,
        mask:true,
        minlength:true,
        placeholder:true,
        readonly:false,
        disabled: false
      },
      event: null,
      fruits: ['apple', 'avocado', 'banana', 'cherry', 'coconut', 'grapefruit', 'kiwi', 'lime', 'orange', 'quince', 'strawberry', 'watermelon'],
      input: null,
      match: null
    }
  },
  methods: {
    mask (value) {
      return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/[^a-z0-9]/g,'')
    }
  }
}
</script>
