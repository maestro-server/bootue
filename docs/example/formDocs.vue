<template>
  <doc-section id="forms" name="Forms">
    <p>You can use all types of forms with special components forms.</p>
    <div class="bs-example text-left">

      <h3>Form default</h3>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputFile">File input</label>
          <input type="file" id="exampleInputFile">
          <p class="help-block">Example block-level help text here.</p>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox"> Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>

      <hr/>

      <h3>Form Horizontal</h3>
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"> Remember me
              </label>
            </div>
          </div>
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
        <div class="form-group">
          <label for="exampleInputName2">Name</label>
          <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail2">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
        </div>
        <button type="submit" class="btn btn-default">Send invitation</button>
      </form>

    </div>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import bsInput from '../../src/components/bootue/forms/input/Input.vue'
import ButtonGroup from '../../src/components/bootue/buttons/buttongroup/ButtonGroup.vue'
import bsCheckbox from '../../src/components/bootue/forms/checkbox/Checkbox.vue'
import Dropdown from '../../src/components/bootue/dropdown/Dropdown.vue'

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
