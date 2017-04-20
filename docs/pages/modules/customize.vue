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
        Bootstrap have a fantastic structure system to customize variables, exist only one file to change all colors.</p>
      <h5>The path is <code>_core/_variables/_colors.scss</code></h5>

      <doc-code language="css">
        // We have a basics colors, pehaps its a good place to put more news colors.
        $gray-base: #000 !default;
        $white: #fff;
        $purple: #92278f;
        $dark-purple: #250c49;
        $orange: #e17a29;

        // all hovers its created based in default colors
        $gray-darker: lighten($gray-base, 13.5%) !default; // #222
        $gray-dark: lighten($gray-base, 20%) !default; // #333
        $gray: lighten($gray-base, 33.5%) !default; // #555
        $gray-light: lighten($gray-base, 46.7%) !default; // #777
        $gray-lighter: lighten($gray-base, 93.5%) !default; // #eee

        // let's create primary color
        $brand-primary: darken($purple, 6.5%) !default; // #92278f
        $brand-secondary: darken($purple, 6.5%) !default; // #92278f

        // let's create states colors - this colors its used at _states.scss
        $brand-success: #5cb85c !default;
        $brand-info: #5bc0de !default;
        $brand-warning: #f0ad4e !default;
        $brand-danger: #d9534f !default;

        // bg colors
        $bg-purple: $purple;


        //** Background color for `body`.
        $body-bg: #fff !default;
        $text-color: $gray-dark !default;

        //** Global textual link color.
        $link-color: $brand-primary !default;
        //** Link hover color set via `darken()` function.
        $link-hover-color: darken($link-color, 15%) !default;
        //** Link hover decoration.
        $link-hover-decoration: underline !default;

        //** Horizontal line color.
        $hr-border: $gray-lighter !default;
        //** Text muted color
        $text-muted: $gray-light !default;
      </doc-code>

      <p>Simple and easier.</p>

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
