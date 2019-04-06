(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Vmln:function(s,b,o){"use strict";
/*!
 * glob-base <https://github.com/jonschlinkert/glob-base>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var r=o("33yf"),t=o("jZS6"),e=o("Hyop");s.exports=function(s){if("string"!=typeof s)throw new TypeError("glob-base expects a string.");var b={};return b.base=t(s),b.isGlob=e(s),"."!==b.base?(b.glob=s.substr(b.base.length),"/"===b.glob.charAt(0)&&(b.glob=b.glob.substr(1))):b.glob=s,b.isGlob||(b.base=function(s){return"/"===s.slice(-1)?s:r.dirname(s)}(s),b.glob="."!==b.base?s.substr(b.base.length):s),"./"===b.glob.substr(0,2)&&(b.glob=b.glob.substr(2)),"/"===b.glob.charAt(0)&&(b.glob=b.glob.substr(1)),b}}}]);