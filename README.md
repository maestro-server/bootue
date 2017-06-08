[![Code Climate](https://codeclimate.com/github/maestro-server/bootue/badges/gpa.svg)](https://codeclimate.com/github/maestro-server/bootue) [![Build Status](https://travis-ci.org/maestro-server/bootue.svg?branch=master)](https://travis-ci.org/maestro-server/bootue) [![Issue Count](https://codeclimate.com/github/maestro-server/bootue/badges/issue_count.svg)](https://codeclimate.com/github/maestro-server/bootue) [![david-dm.org](https://david-dm.org/maestro-server/bootue.svg)](https://david-dm.org/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/336961c7b6d84424885355549300095f)](https://www.codacy.com/app/Signorini/bootue?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=maestro-server/bootue&amp;utm_campaign=Badge_Grade)

# Bootue não é compativel com as versões vue-loader 12.xx, utilize a versão 11.3.4, estamos trabalhando para este suporte

## Bootue - Boostrap 3 + Vue = 100% Self Contained Components
- **100% Bootstrap components built with Vue 2.**
- **No boostrap.css, bootstrap.js, jQuery, or any 3rd party plugins required.**
- **Really, its full Stand Lone library.**

### About
The goal of project is provide a easy way to organize, customize, and incorporate all elements of your's project. For this we organize all elements into self contained components, splitting all variables and codes put into each folder, each component have yours variables, events, styles and more. Bootue its group of elements components self contained, organized, with multiple featured to incorporate and using in any SPA project.

Bootue make simple way to extends and modify boostrap variables, effects and featured, her provide a possibility to you using party of outhers frameworks together with boostrap components, create a new one or using only elements that you need.

 * Vue-Cli - (browserify or webpack)
 * Node - Sass (vue-loader-sass)
 * Setup webpack to make url-loader for fonts (font-awesome)

### Let's started
First all bootue is build using vue-cli system, you need to install and setup a vueify (browserify) or vue-loader(webpack) env, Install Vue Cli, you maybe use webpack or browserfy.

```javascript
$ npm install -g vue-cli
$ vue init webpack-simple demo // bootue works with webpack or browserify
$ vue init browserify demo
```

**Webpack env**
Make sure to install sass pre-compiled environment (in all cli installation he ask you if you like to setup sass (default is NO), write YES, and be happy)

### Build Setup

```javascript
$ npm install bootue

import Bootue from 'bootue'

Vue.use(Bootue) // import all components
```
or
```javascript
import alert from 'bootue/src/alert'

Vue.component('alert', alert)

// or

new Vue({
  components: {
    alert
  }
})
```
or
```javascript
$ npm install bootue

var alert = require('bootue/src/alert');
var alert = require('bootue/src').alert;

new Vue({
  components: {
    alert: alert
  }
})


// After babel 6, yoou need iteract with default property.
var alert = require('bootue/src/alert').default;
```

### Webpack Env - Font Awesome

Some components using font-awesome icons (font-awesome is optional), if you like to use this font, you have to setup webpack to correctly load.

If you using easy installation (Vue.use), you need to configure url-loader in webpack. (Because webpack will try to use load font files)

**WebPack 2.X**
```javascript
$ npm install url-loader

{
  module:
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader', // you need to install this loader
    query: {
      limit: 10000,
      name: 'fonts/[name].[ext]'
    }
  }
}
```
**WebPack 1.X**
```javascript
module: {
  loaders: [
    {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
      // loader: "url?limit=10000"
      loader: "url"
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: 'file'
    },
  ]
},
```

### Import bootue system into your project (recomended)
We recommend to download all components files and import inside to project, remember the goal is transfer all power to select, customize and extends to any scss parts to project. In deep, bootue is a reorganized boostrap splitting code, her have **SCSS Components**, **Js Components** and **Hybrid Components.**

```markup
//strutucture folder to generic vue 2 project
- vuex
- components
  - pages
    - home
    - contact
  - bootue
    - _core
    - grids
    - typography
    - utilities
    - index.js // use to make import components easy
```
We import bootue components aside page's project, the ideia its full integration scss rules into project.

#### Why should I care about this structure? Why not use NPM?
When I began bootue, my problem is, I have a very custom layouts in any SPA project, but all the elements in its excence its the same. i would like exist a central repository with self contanied elements, dont bother me with import scss bases, navigate and change 1000 lines in variables.scss, i like to get and put that element and works.

With that mind, the project intent to, split and organized all business logic's of bootstrap, possibility to choose and modify exacly parts i want, possibility to export the module for other projects using a top contained delivery, and possibility to using 100% component tree system modules

And updates? Come on, you execute a update your bootstrap frequently? Boostrap 3 update frequently? The risk exist, bootue needs to bug fix, him will update, for this situation you need to copy and paste parcially, yes its not a best situation, but in moment its acceptable.

### Docs
See the [documentation](https://maestro-server.github.io/bootue/) with live editable examples.

### Develop Local Setup
```javascript
$ npm install

$ npm run dev

// default portr is 8080
```
### License
Bootue is licensed under [The MIT License](LICENSE).

### Autor

| [<img src="https://avatars0.githubusercontent.com/u/1161310?v=3&s=115"><br><sub>@signorini</sub>](https://github.com/Signorini) |
| :---: |
