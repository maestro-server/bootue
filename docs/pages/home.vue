<template>
  <div class="bg-docs-home">
    <div id="wrapper" class="call-header">
      <div class="bs-docs-header">
        <div class="container text-center">
          <div class="visible-xs mt40"></div>

          <div class="col-xs-12 text-center">
              <img src="dist/imgs/bird-white.svg" class="img-responsive-center logotipo"/>
          </div>

          <p class="col-xs-12 text-center mt20">
            <a target="_blank" class="white" href="http://getbootstrap.com/">100% Bootstrap components</a> built with <a target="_blank" class="white" href="http://vuejs.org/">Vue 2</a>.</p>
          <p class="col-xs-12 text-center mt10">No boostrap.css, bootstrap.js, jQuery, or any 3rd party plugins required.</p>
          <p class="col-xs-12 text-center mt10">Really, its full StandLone library.</p>

          <p class="col-xs-12 text-center mt10"><b>We decide to put this project in production only for Maestro Server,
            it's a big project for orchestration servers envs.</b></p>

          <p class="col-xs-12 text-center mt20">
            <router-link to="/started"  class="btn btn-call btn-lg">
              <h2 class="m0">Get Started</h2>
            </router-link>
          </p>


        </div>
      </div>

    </div>
    <section class="col-xs-12 bg-white mt20 mb20">
      <div class="container">
        <div class="row">
            <div class="col-sm-3 mt30 text-center">
              <i class="fa fa-github-alt fa-4x" aria-hidden="true"></i>
              <h3 class="blue">Free</h3>
              <h4 class="gray">Open Source Project - MIT</h4>
            </div>
            <div class="col-sm-3 mt30 text-center">
              <i class="fa fa-cube fa-4x" aria-hidden="true"></i>
              <h3 class="blue">100% Component</h3>
              <h4 class="gray">Html, SCSS and JS, all encapsulated</h4>
            </div>
            <div class="col-sm-3 mt30 text-center">
              <i class="fa fa-life-ring fa-4x" aria-hidden="true"></i>
              <h3 class="blue">Very Customizable</h3>
              <h4 class="gray">Power bootstrap with Vue Components</h4>
            </div>
            <div class="col-sm-3 mt30 text-center">
              <i class="fa fa-ship fa-4x" aria-hidden="true"></i>
              <h3 class="blue">Stand Alone</h3>
              <h4 class="gray">Really you don't need to install anything</h4>
            </div>
          </div>
      </div>
    </section>

  </div>
</template>


<style>
.bg-docs-home {
  background: linear-gradient(180deg, #00ADEF 80%, #2bd9ef 100%);
}

.call-header {
  color: #fff;
  text-align: center;
}

.img-responsive-center {
    margin: 0 auto;
}
</style>
