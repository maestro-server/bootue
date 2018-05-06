<template>
  <doc-section id="toast" name="Toast">
    <toast ref="coToaster"></toast>

    <p>Import Vue notifications with izitoast
      <a target="_blank" href="https://github.com/se-panfilov/vue-notifications">Vue Notifications</a>
      <a target="_blank" href="http://izitoast.marcelodolce.com/#Start">IziToast</a>
    </p>

    <div class="bs-example">
      <button class="btn btn-success"
        @click="showToast('success', 'Title example', 'Mensagem example')">
        Click to toggle toast success
      </button>

      <button class="btn btn-danger"
              @click="showToast('danger', 'Title example', 'Mensagem example')">
        Click to toggle toast danger
      </button>

      <button class="btn btn-warning"
              @click="showToast('warning', 'Title example', 'Mensagem example')">
        Click to toggle toast warning
      </button>

      <button class="btn btn-info"
              @click="showToast('info', 'Title example', 'Mensagem example')">
        Click to toggle toast info
      </button>

    </div>

    <doc-code language="markup">
      // instance toaster
      &lt;toast ref="coToaster">&lt;/toast>

      // call showToast with type, title and mensage
      &lt;button class="btn btn-success"
              @click="showToast('success', 'Title example', 'Mensagem example')">
        Click to toggle toast success
      &lt;/button>

    </doc-code>
    <doc-code language="markup">
      methods: {
        showToast(type, title, message) {
          this.$refs.coToaster.callToast(type, title, message)
        }
      }
    </doc-code>

    <doc-table>
      <div>
        <p>ref</p>
        <p><code>String</code></p>
        <p><code></code></p>
        <p>Vue 2, used for reference</p>
      </div>
    </doc-table>
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
      showRight: false,
      showTop: false
    }
  },
  methods: {
    showToast(type, title, message) {
      this.$refs.coToaster.callToast(type, title, message)
    }
  }
}
</script>
