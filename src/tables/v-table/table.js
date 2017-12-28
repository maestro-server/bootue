let methods = require('./mixins/methods');
let computed = require('./mixins/computed');
let directives = require('./mixins/directives');

export default function () {
  return {methods, computed, directives}
}
