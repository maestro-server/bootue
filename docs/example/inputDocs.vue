<template>
  <doc-section id="input" name="Input">
    <div class="bs-example text-left">
      <form action="." method="get" accept-charset="utf-8">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div>
              <bs-input name="username"
                        :disabled="check.disabled"
                        help="Only allows lowercase letters and numbers."
                        :label="check.label ? 'User Name' : null"
                        :placeholder="check.placeholder ? 'hello i\'m placeholder.' : null"
                        :readonly="check.readonly"
                        :clear-button="check.clearButton"
                        v-model="input"
              ></bs-input>
            </div>
            <div class="row">
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
            </div>

          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <bs-input
              name="match"
              help="Type = primary"
              :icon="check.icon"
              state="success"
            >
              <label slot="label">Inputs types</label>
            </bs-input>

            <bs-input
              name="match"
              error="Type = Error"
              :icon="check.icon"
              state="error"
            >
            </bs-input>

            <bs-input
              name="match"
              error="Type = Warning"
              :icon="check.icon"
              state="warning"
            >
            </bs-input>
          </div>
        </div>

        <hr/>
        <bs-input label="Input with slots" type="text" icon clear-button>
          <span slot="before" class="input-group-addon"><span class="fa fa-user"></span></span>
          <span slot="after" class="input-group-addon"><span class="fa fa-question"></span></span>
        </bs-input>


        <div class="row">
          <div class="col-xs-4">
            <bs-input label="Input with slots" type="text" icon clear-button state="success">
              <span slot="before" class="input-group-addon"><span class="fa fa-user"></span></span>
              <span slot="after" class="input-group-addon"><span class="fa fa-question"></span></span>
            </bs-input>

            <doc-code language="markup">
              &lt;bs-input label="Input with slots" type="text" icon clear-button state="success">
              &lt;span slot="before" class="input-group-addon">&lt;span class="fa fa-user">&lt;/span>&lt;/span>
              &lt;span slot="after" class="input-group-addon">&lt;span class="fa fa-question">&lt;/span>&lt;/span>
              &lt;/bs-input>
            </doc-code>
          </div>

          <div class="col-xs-4">
            <bs-input label="Input with slots" type="text" icon clear-button state="error">
              <span slot="before" class="input-group-addon"><span class="fa fa-user"></span></span>
              <span slot="after" class="input-group-addon"><span class="fa fa-question"></span></span>
            </bs-input>

            <doc-code language="markup">
              &lt;bs-input label="Input with slots" type="text" icon clear-button state="error">
              &lt;span slot="before" class="input-group-addon">&lt;span class="fa fa-user">&lt;/span>&lt;/span>
              &lt;span slot="after" class="input-group-addon">&lt;span class="fa fa-question">&lt;/span>&lt;/span>
              &lt;/bs-input>
            </doc-code>
          </div>

          <div class="col-xs-4">
            <bs-input label="Input with slots" type="text" icon clear-button state="warning">
              <span slot="before" class="input-group-addon">With text</span>
              <span slot="after" class="input-group-addon">Here more</span>
            </bs-input>

            <doc-code language="markup">
              &lt;bs-input label="Input with slots" type="text" icon clear-button state="warning">
              &lt;span slot="before" class="input-group-addon">With text&lt;/span>
              &lt;span slot="after" class="input-group-addon">Here more&lt;/span>
              &lt;/bs-input>
            </doc-code>
          </div>
        </div>


        <hr/>

        <bs-input name="textarea" label="Textarea" type="textarea" :icon="check.icon" :enter-submit="check.enterSubmit"
                  @focus="event = 'focused'"
                  @blur="event = 'blured'"
        ></bs-input>
        <pre> Test event on textarea: {{event}}</pre>

        <hr/>
        <p>You using error prop to show error mensagens, the state automactly change to value 'error'.</p>

        <bs-input error="Example error text" icon></bs-input>
      </form>
    </div>

    <doc-code>
      //textarea
      &lt;bs-input
          name="textarea"
          label="Textarea"
          type="textarea"
          :icon="check.icon"
          :enter-submit="check.enterSubmit"
          @focus="event = 'focused'"
          @blur="event = 'blured'"
      >&lt;/bs-input>

      //input with error
      &lt;bs-input
        error="Example error text"
        icon>
      &lt;/bs-input>
    </doc-code>

    <h2>Input groups:</h2>
    <p>More details in <a href="http://getbootstrap.com/components/#input-groups">bootstrap input groups</a>.</p>
    <bs-input label="With dropdown and button" type="text" v-model="inputGroup">
      <dropdown slot="before" text="dropdown">
        <li><a href="#">option</a></li>
      </dropdown>
      <span slot="after" class="input-group-btn">
        <button type="button" class="btn btn-primary">Go!</button>
      </span>
    </bs-input>

    <doc-code>
      &lt;bs-input label="With dropdown and button" type="text">
      &lt;dropdown slot="before" text="dropdown">
      &lt;li>&lt;a href="#">option&lt;/a>&lt;/li>
      &lt;/dropdown>
      &lt;span slot="after" class="input-group-btn">
      &lt;button type="button" class="btn btn-primary">Go!&lt;/button>
      &lt;/span>
      &lt;/bs-input>
    </doc-code>
    <bs-input label="With icon and text" type="number" placeholder="Insert how much cost your house">
      <span slot="before" class="input-group-addon"><span class="fa fa-home"></span></span>
      <span slot="after" class="input-group-addon">$</span>
    </bs-input>
    <doc-code>
      &lt;bs-input label="With icon and text" type="number" placeholder="Insert how much cost your house">
      &lt;span slot="before" class="input-group-addon">&lt;span class="glyphicon glyphicon-home">&lt;/span>&lt;/span>
      &lt;span slot="after" class="input-group-addon">$&lt;/span>
      &lt;/bs-input>
    </doc-code>


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
        <p>error</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Error text notification, if exist prop state is set to 'error'</p>
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
        <p>icon</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Show or hide icons, the icon only apper with state type</p>
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
        <p>type</p>
        <p><code>String</code></p>
        <p><code>text</code></p>
        <p>Style input, maybe text, textarea, email, password and more</p>
      </div>
      <div>
        <p>Sub-modal</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Put the modal inside another modal</p>
      </div>
      <div>
        <p>form-type</p>
        <p><code>String (<code>inline</code>|<code>horizontal</code>)</code></p>
        <p><code>null</code></p>
        <p>Enable inline input form</p>
      </div>
      <div>
        <p>horizontalWrapper</p>
        <p><code>String</code></p>
        <p><code>col-sm-10</code></p>
        <p>Class wrapper content - Only horizontal input form</p>
      </div>
      <div>
        <p>horizontalLabelWrapper</p>
        <p><code>String</code></p>
        <p><code>col-sm-2</code></p>
        <p>Class wrapper label - Only horizontal input form</p>
      </div>
    </doc-table>

    <div class="bs-example text-left">
      <div class="row">
        <h3 class="col-sm-12">Form Horizontal</h3>
        <form class="form-horizontal col-xs-12 row">
          <bs-input form-type="horizontal" type="text" placeholder="Name" label="Name"></bs-input>
          <bs-input form-type="horizontal" type="email" placeholder="Email" label="Email address"></bs-input>

          <div class="col-sm-offset-3 col-sm-9">
            <bs-checkbox>Remember me</bs-checkbox>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <button type="submit" class="btn btn-default">Sign in</button>
            </div>
          </div>

        </form>
      </div>

    </div>

    <doc-code>
      &lt;form class="form-horizontal col-xs-12 row">
        &lt;bs-input form-type="horizontal" type="text" placeholder="Name" label="Name">  &lt;/bs-input>
        &lt;bs-input form-type="horizontal" type="email" placeholder="Email" label="Email address">  &lt;/bs-input>
    </doc-code>

    <hr/>

    <div class="bs-example text-left">
      <div class="row">

        <h3 class="col-xs-12">Form inline</h3>
        <form class="form-inline col-xs-12">
          <bs-input label="Email" form-type="inline" type="email" placeholder="Email"></bs-input>

          <bs-input form-type="inline" type="password" placeholder="Password" label="Password"></bs-input>

          <button type="submit" class="btn btn-default">Send invitation</button>
        </form>
      </div>
    </div>

    <doc-code>
      &lt;form class="form-inline col-xs-12">
        &lt;bs-input inline type="email" placeholder="Email">
            &lt;label slot="before" v-if="label" class="control-label" @click="focus">Email&lt;/label>
        &lt;/bs-input>

        &lt;bs-input inline type="password" placeholder="Password">
            &lt;label slot="before" v-if="label" class="control-label" @click="focus">Password&lt;/label>
        &lt;/bs-input>
    </doc-code>

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
        inputGroup: null,
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
        event: null,
        fruits: ['apple', 'avocado', 'banana', 'cherry', 'coconut', 'grapefruit', 'kiwi', 'lime', 'orange', 'quince', 'strawberry', 'watermelon'],
        input: null,
        match: null
      }
    },
    methods: {
      mask (value) {
        return value.toLowerCase().replace(/^[^a-z]+/, '').replace(/[^a-z0-9]/g, '')
      }
    }
  }
</script>
