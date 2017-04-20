<template>
  <doc-section id="affix" name="Affix">
    <div class="bs-example">
      <h3>
        The sub-navigation on the RIGHT is a live demo of the affix.
        <span class="visible-xs-block visible-sm-block">(The live demo is hidden in small screens)</span>
        <tooltip trigger="hover" effect="fadein" content="I'm a direction, not jerking off!" placement="left">
          <span class="glyphicon glyphicon-hand-right pull-right animated shake hidden-xs hidden-sm"></span>
        </tooltip>
      </h3>
    </div>
    <doc-code language="markup">
      &lt;affix offset="50">
        &lt;ul>
          &lt;li>...&lt;/li>
          &lt;li>...&lt;/li>
          &lt;li>...&lt;/li>
        &lt;/ul>
        &lt;a href="#">...&lt;/a>
      &lt;/affix>
    </doc-code>
    <doc-table>
      <div>
        <p>offset</p>
        <p><code>Number</code></p>
        <p><code>0</code></p>
        <p>Pixels to offset from top of screen when calculating position of scroll.</p>
      </div>
      <div>
        <p>v-scroll</p>
        <p><code>Directive</code></p>
        <p><code>null</code></p>
        <p>Function to call when user scroll page, very usefull to determine actives links, actions in middle navigation and etc.</p>
      </div>
    </doc-table>

    <h3>Example</h3>
    This code is used in docs, we have scrollSpy function to watch how link is active.
    <doc-code language="javascript">
      &lt;affix :offset="70" v-scroll="scrollSpy">
        &lt;ul class="nav bs-docs-sidenav" id="sidenav">
          &lt;li v-for="s in sections" :class="{active:active==s.id}">&lt;a @click="scrollMeTo(s.id)" class="handCursor">{ s.name }&lt;/a>&lt;/li>
        &lt;/ul>
      &lt;/affix>

      &lt;script>
        methods: {
          scrollSpy () {
            const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
            for (let s of this.sections) {
              if (s.el.offsetTop - 30 <= scrollPosition) {
                this.active = s.id
              }
            }
          }
        }
      &lt;/script>

    </doc-code>

  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import tooltip from '../../src/components/bootue/tooltip/Tooltip.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    tooltip
  }
}
</script>

<style>
.animated {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-iteration-count: infinite
}
@keyframes shake {
    0%, 100% {transform: translateX(0);}
    10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}
    20%, 40%, 60%, 80% {transform: translateX(5px);}
}
.shake {
    -webkit-animation-name: shake;
    animation-name: shake;
}
</style>
