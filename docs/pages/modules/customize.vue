<template>
  <div>
    <doc-section id="customize-extends" name="Customize and extends">
      <div class="bs-callout bs-callout-success">
        <h4>Bootue needs you</h4>
        <p>
          Bootue born for make easier to customize, mixin and aggregate basics elements in new projects. We will presents a pretty cool actions.
        </p>
        <p>
          We recommend to follow the idea, create each component to make one thing (SOLID), dont matter if its a simple scss lines, each component have a make one thing.
          Maximize the power of structured's boostrap, and use all variables to make a deep customize accordly your needs.
        </p>
      </div>

    </doc-section>

    <doc-section id="change-colors" name="Change colors">
      <p>
        Bootstrap have a theme system, only need to wrapper with theme-{color}.</p>
      <h5>The path is <code>_core/_themes/_colors.scss</code></h5>
      <p class="alert-danger">
        Because of hot loader Vue (version 12.xx) all SCSS components need to be inside _core
      </p>

      <doc-code language="css">
        $themes: (
          blue: (
            brand-primary: $blue,
            brand-secondary: darken($blue, 10.5%),
            brand-primary-darker: darken($blue, 20.5%),
            link-color: $blue,
            link-hover-color: darken($blue, 15%)
          ),
          gold: (
            brand-primary: $gold,
            brand-secondary: darken($gold, 10.5%),
            brand-primary-darker: darken($gold, 20.5%),
            link-color: $gold,
            link-hover-color: darken($gold, 15%)
          ),
          orange: (
            brand-primary: $orange,
            brand-secondary: darken($orange, 10.5%),
            brand-primary-darker: darken($orange, 20.5%),
            link-color: $orange,
            link-hover-color: darken($orange, 15%)
          ),
          wine: (
            brand-primary: $wine,
            brand-secondary: darken($wine, 10.5%),
            brand-primary-darker: darken($wine, 20.5%),
            link-color: $wine,
            link-hover-color: darken($wine, 15%)
          ),
          dark: (
            brand-primary: $dark,
            brand-secondary: darken($dark, 10.5%),
            brand-primary-darker: darken($dark, 20.5%),
            link-color: $dark,
            link-hover-color: darken($dark, 15%)
          ),
          green: (
            brand-primary: $green,
            brand-secondary: darken($green, 10.5%),
            brand-primary-darker: darken($green, 20.5%),
            link-color: $green,
            link-hover-color: darken($green, 15%)
          )
        );
      </doc-code>

      To use, simple wrapper any element witch theme-{color}
      <doc-code language="css">
        &lt;div class="theme-blue">
          &lt;a class="btn btn-primary">My Button&lt;/a>
        &lt;/div>
      </doc-code>

      <p>Simple and easier.</p>

      <table class="table table-striped table-bordered">
        <tbody>
        <tr>
          <td>Theme Maestro</td>
          <td><code>default</code></td>
          <td>
            <button class="btn btn-primary">My Button</button>
          </td>
          <td>
            <a href="#">Link</a>
          </td>
        </tr>
          <tr class="theme-blue">
            <td>Theme Blue</td>
            <td><code>theme-blue</code></td>
              <td class="theme-blue">
                <button class="btn btn-primary">My Button</button>
              </td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
          <tr class="theme-gold">
            <td>Theme Gold</td>
            <td><code>theme-blue</code></td>
            <td>
              <button class="btn btn-primary">My Button</button>
            </td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
          <tr class="theme-green">
            <td>Theme Green</td>
            <td><code>theme-green</code></td>
            <td>
              <button class="btn btn-primary">My Button</button>
            </td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
          <tr class="theme-dark">
            <td>Theme Black</td>
            <td><code>theme-dark</code></td>
            <td>
              <button class="btn btn-primary">My Button</button>
            </td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
          <tr class="theme-wine">
            <td>Theme Wine</td>
            <td><code>theme-wine</code></td>
            <td>
              <button class="btn btn-primary">My Button</button>
            </td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
          <tr class="theme-orange">
            <td>Theme Orange</td>
            <td><code>theme-Orange</code></td>
            <td>
              <button class="btn btn-primary">My Button</button>
            </td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
        </tbody>
      </table>

    </doc-section>

    <doc-section id="typograph" name="Typograph">
      <p>We create a component to deal with fonts, all fonts is there, at default is glyphicon and font awesome.</p>
      <well>
        It's recomend, create a folder inside typograph component and place all files, after that, create style.scss with font-face commands.
        After all using import sass command to bring a new font into project.
      </well>

      <doc-code>
        - typography
          - fontawesome
            - fontawesome.vue // Font Component
            - style.scss // font-face commands
            - fonts // font files
              - font.ttf
      </doc-code>

      <hr/>

      <p>Inside style.scss Typograph component, have all bootstrap styles relationed with typograph, we have hX sizes, text-variants, bg-variants and more.</p>

      <p>Example we maybe change hX fonts and or sizes.</p>

      <code>component/typograph/style.scss</code>
      <doc-code language="css">
        h1, h2, h3, h4, h5, h6,
        .h1, .h2, .h3, .h4, .h5, .h6 {
          font-family: $headings-font-family;
          font-weight: $headings-font-weight;
          line-height: $headings-line-height;
          color: $headings-color;
        }

        h1, .h1 { font-size: $font-size-h1; }
        h2, .h2 { font-size: $font-size-h2; }
        h3, .h3 { font-size: $font-size-h3; }
        h4, .h4 { font-size: $font-size-h4; }
        h5, .h5 { font-size: $font-size-h5; }
        h6, .h6 { font-size: $font-size-h6; }
      </doc-code>

      <p>Or change the margin top</p>

      <doc-code language="css">
        h1, .h1,
        h2, .h2,
        h3, .h3 {
          margin-top: $line-height-computed;
          margin-bottom: ($line-height-computed / 2);
        }
      </doc-code>

      <hr/>

      <well>Inside _core component we have primary/default font family:</well>

      <code>_core/_variables/_typography.scss</code>
      <doc-code language="css">
        $font-family-sans-serif: "Helvetica Neue", Helvetica, Arial, sans-serif !default;
        $font-family-serif: Georgia, "Times New Roman", Times, serif !default;
        //** Default monospace fonts for `code`, `kbd`, and `pre`.
        $font-family-monospace: Menlo, Monaco, Consolas, "Courier New", monospace !default;
        $font-family-base: $font-family-sans-serif !default;

        $font-size-base: 14px !default;
        $font-size-large: ceil(($font-size-base * 1.25)) !default; // ~18px
        $font-size-small: ceil(($font-size-base * 0.85)) !default; // ~12px


        //** Unit-less `line-height` for use in components like buttons.
        $line-height-base: 1.428571429 !default; // 20/14
        //** Computed "line-height" (`font-size` * `line-height`) for use with `margin`, `padding`, etc.
        $line-height-computed: floor(($font-size-base * $line-height-base)) !default; // ~20px
      </doc-code>

    </doc-section>

    <doc-section id="system" name="New Grid System">
      <p>Grid system is the most fantastic feature, boostrap provide all matters to customize the rules.</p>

      <well>The most important variable is <code>$grid-columns</code>, in <code>grid/_variables</code>
        Component, her tell how many columns your's grid system works.
      </well>

      <code>components/grid/_variable/_variable.scss</code>
      <doc-code language="css">
        //** Number of columns in the grid.
        $grid-columns: 12 !default;

        // Small screen / tablet
        $container-tablet: (720px + $grid-gutter-width) !default;
        //** For `$screen-sm-min` and up.
        $container-sm: $container-tablet !default;

        // Medium screen / desktop
        $container-desktop: (940px + $grid-gutter-width) !default;
        //** For `$screen-md-min` and up.
        $container-md: $container-desktop !default;

        // Large screen / wide desktop
        $container-large-desktop: (1140px + $grid-gutter-width) !default;
        //** For `$screen-lg-min` and up.
        $container-lg: $container-large-desktop !default;
      </doc-code>

      <p>
        All $screens variables come by ._core/_screens.scss variables, hes tell the numbers in pixel to determine each type of device.</p>

      <hr/>

      <well>
        After this we have <code>$grid-gutter-width</code> variable, this variable determine space between each columm.
      </well>

      <code>_core/_variable/_grid.scss</code>
      <doc-code language="css">
        //** Padding between columns. Gets divided in half for the left and right.
        $grid-gutter-width: 30px !default;
      </doc-code>

      <hr/>

      <well>
        And the last we have all padding's spaces.
      </well>

      <code>_core/_variable/_grid.scss</code>
      <doc-code language="css">
        $padding-base-vertical: 6px !default;
        $padding-base-horizontal: 12px !default;

        $padding-large-vertical: 10px !default;
        $padding-large-horizontal: 16px !default;

        $padding-small-vertical: 5px !default;
        $padding-small-horizontal: 10px !default;

        $padding-xs-vertical: 1px !default;
        $padding-xs-horizontal: 5px !default;

        $line-height-large: 1.3333333 !default; // extra decimals for Win 8.1 Chrome
        $line-height-small: 1.5 !default;

        $border-radius-base: 4px !default;
        $border-radius-large: 6px !default;
        $border-radius-small: 3px !default;
      </doc-code>

    </doc-section>

    <doc-section id="bulma-system" name="Using Bulma's Grid System">
      <p>One primary pivot Bootue is have a efficient modular system. (Bootue is idea), for now i like to show how we using Bulma grid together Bootstrap Grid.</p>
      <a class="btn btn-primary" href="https://github.com/maestro-server/bootue-example-grid-bulma" target="_blank">Let me show the final code</a>
      <hr/>
      <h4>First setup new project</h4>
      <doc-code>
        $ npm install -g vue-cli
        $ vue init webpack-simple demo

        $ cd demo
        $ npm install
        $ npm run dev
      </doc-code>

      <p>For now i like to import simple bootue components. A import _core, alerts and grid components, my project look like:</p>
      <doc-code>
        - src
          - App.vue
          - main.js

          - bootue // import only components i want
            - src
              - _core
              - alert
              - grid
              - grid_bulma // create a new folder, this is my new future grid component
            index.js
      </doc-code>
      <hr/>
      <h4>Setup my new Bootue system</h4>
      <doc-code language="javascript">
        // src/main.js

        import Bootue from './bootue';
        Vue.use(Bootue);
      </doc-code>
      <doc-code language="javascript">
        // src/bootue/src/index.js

        import './_core/Core.vue'

        import './grid/Grid.vue'
        import './grid_bulma/Grid.vue' // my new future grid component

        import alert from './alert/Alert.vue'

        let components = {
          alert
        }

        export default components
      </doc-code>
      <hr/>
      <h4>Create new grid component</h4>
      <p><a href="http://bulma.io/" target="_blank">Download bulma code</a>, we have sass folder separately, and all modules components, one of this components is a grid folder. We using this folder to create a new bootue components.</p>
      <p>Grid folder have a little bunch of variables and mixins dependencies, for this we create _variables and _mixins folder and organize with your context.</p>
      <doc-code>
        - grid_bulma
          - mixins
            _mixins.js // /sass/utilities/initial-variables.sass
          - _variables
            _variables.js // sass/utilities/mixins.sass

          columns.sass // sass/grid
          Grid.vue
          tiles.sass // sass/grid
          style.sass // rename, _all.sass
      </doc-code>
      <p>We organize the bulma grid files with pattern bootue components</p>
      <hr/>
      <h4>Lets use tags bulma grid with bootstrap components</h4>
      <doc-code language="html">
        // App.vue
          &lt;div class="container">
            &lt;div class="columns">
              &lt;div class="column">
                &lt;alert type="success">
                  &lt;strong>column&lt;/strong>
                  &lt;p>You successfully read this important alert message.&lt;/p>
                &lt;/alert>
              &lt;/div>
              &lt;div class="column">
                &lt;alert type="warning">
                  &lt;strong>column&lt;/strong>
                  &lt;p>You successfully read this important alert message.&lt;/p>
                &lt;/alert>
              &lt;/div>
              &lt;div class="column">
                &lt;alert type="success">
                  &lt;strong>column&lt;/strong>
                  &lt;p>You successfully read this important alert message.&lt;/p>
                &lt;/alert>
              &lt;/div>
              &lt;div class="column">
                &lt;alert type="warning">
                  &lt;strong>column&lt;/strong>
                  &lt;p>You successfully read this important alert message.&lt;/p>
                &lt;/alert>
              &lt;/div>
            &lt;/div>
        &lt;/div>
      </doc-code>
      <br/>
      <p>See the screenshot</p>
      <img src="dist/imgs/bulma_grid.png" class="img-responsive"/>
      <br/>
      <well>Ohh, a great flex box grid system with all boostrap components, maybe we create bootue + bulma, or bootue components with foundation grid + materialize bubble effects. Go and code new cool components and send me pull request.</well>

    </doc-section>
  </div>
</template>
<script>
  import docCode from '../../example/utils/docCode.js'
  import docSection from '../../example/utils/docSection.vue'

  export default {
    components: {
      docCode,
      docSection
    }
  }
</script>
