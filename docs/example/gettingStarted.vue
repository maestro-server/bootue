<div>
  <doc-section id="getting-started" name="Getting started">
    <div class="bs-callout bs-callout-success">
      <h4>About this project</h4>
      <p>
        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.
        As a result no dependency on jQuery or Bootstrap's JavaScript is required.
        The only required dependencies are:
      </p>
      <ul>
        <li><a href="http://vuejs.org/">Vue.js</a>
          (required ^2.1.x, test with 2.1.6).</li>
        <li><a href="http://getbootstrap.com/">Bootstrap CSS</a>
          (required 3.x.x, test with 3.3.6).
          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.
        </li>
      </ul>
    </div>
    <h4>CommonJS</h4>
    <doc-code language="javascript">
      $ npm install vue-strap

      var alert = require('vue-strap/src/alert');
      // or
      var alert = require('vue-strap').alert;

      new Vue({
        components: {
          alert: alert
        }
      })
    </doc-code>
    <h4>ES6</h4>
    <doc-code language="javascript">
      $ npm install vue-strap

      import alert from 'vue-strap/src/alert'
      // or
      import { alert } from 'vue-strap'

      new Vue({
        components: {
          alert
        }
      })
    </doc-code>

    <h4>AMD</h4>
    <doc-code language="javascript">
      $ bower install vue-strap

      define(['vue-strap'], function(VueStrap) { var alert = VueStrap.alert; ... });
    </doc-code>
    <h4>Browser globals</h4>
    <p>
      The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.min.js</code> with
      all components exported in the <code>window.VueStrap</code> object. These bundles are also available on both the
      Bower and NPM packages.
    </p>
    <doc-code language="markup">
      &lt;v-select :options="options">&lt;/v-select>

      &lt;script src="path/to/vue.js">&lt;/script>
      &lt;script src="path/to/vue-strap.js">&lt;/script>
      &lt;script>
        new Vue({
          components: {
            vSelect: VueStrap.select
          },
          data: {
            options: []
          }
        })
      &lt;/script>
    </doc-code>

  </doc-section>

  <doc-section id="v-model" name="v-model">
    <p>According to the vue2 specifications, <code>twoWay</code> binding is not supported anymore, except for <code>v-model</code>.</p>
    <p>The <code>v-model</code> directive in a component always link to <code>value</code> attribute.</p>
    <p>Keep in mind that in vue2:</p>
    <doc-code>
      &lt;!-- using v-model like this: -->
      &lt;component v-model="element">&lt;/component>
      &lt;!-- is the same that: -->
      &lt;component :value="element" @input="element = argument[0]">&lt;/component>
    </doc-code>
  </doc-section>
</div>
</template>
<script>
import docCode from './utils/docCode.js'
import docSection from './utils/docSection.vue'
export default {
  components: {
    docCode,
    docSection
  }
}
</script>
