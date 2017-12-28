'use strict';

const axios = require('axios');

module.exports = function (data, headers = {}) {

  if (typeof axios !== 'undefined')
    return axios.get(
      this.url,
      {
        params: data,
        headers
      }
    ).catch(e => {
      this.dispatch('error', e);
    });

  throw new Error("vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource)");
}
