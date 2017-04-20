[![Code Climate](https://codeclimate.com/github/maestro-server/bootue/badges/gpa.svg)](https://codeclimate.com/github/maestro-server/bootue) [![Build Status](https://travis-ci.org/maestro-server/bootue.svg?branch=master)](https://travis-ci.org/maestro-server/bootue) [![Issue Count](https://codeclimate.com/github/maestro-server/bootue/badges/issue_count.svg)](https://codeclimate.com/github/maestro-server/bootue) [![david-dm.org](https://david-dm.org/maestro-server/bootue.svg)](https://david-dm.org/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/336961c7b6d84424885355549300095f)](https://www.codacy.com/app/Signorini/bootue?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=maestro-server/bootue&amp;utm_campaign=Badge_Grade)
## Bootue - Boostrap 3 + Vue = 100% Self Contained Components
- **100% Bootstrap components built with Vue 2.**
- **No boostrap.css, bootstrap.js, jQuery, or any 3rd party plugins required.**
- **Really, its full Stand Lone library.**

### About
The goal of project is provide a easy way to organize, customize, and incorporate all elements of your's project. For this we organize all elements into self contained components, splitting all variables and codes put into each folder, each component have yours variables, events, styles and more. Bootue its group of elements components self contained, organized, with multiple featured to incorporate and using in any SPA project.

Bootue make simple way to extends and modify boostrap variables, effects and featured, her provide a possibility to you using party of outhers frameworks together with boostrap components, create a new one or using only elements that you need.


### Build Setup

```javascript
$ npm install bootue

import Bootue from 'bootue'
Vue.use(Bootue) // import all components globally

// >>> or
var alert = require('bootue/bootue/alert');
var alert = require('bootue/bootue').alert;

new Vue({
  components: {
    alert: alert
  }
})
```

#### ES6
```javascript
import alert from 'bootue/bootue/alert'
import { alert } from 'bootue/bootue'

new Vue({
  components: {
    alert
  }
})
```

#### Import bootue system into your project (recomended)
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
See the [documentation](https://github.io/maestro-server/bootue/) with live editable examples.

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
