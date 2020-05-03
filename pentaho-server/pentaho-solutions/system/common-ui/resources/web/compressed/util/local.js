/*! *
* local.js: A RequireJS plugin that enables coordinating other framework's asynchronous loading mechanisms with "local" modules.
*
* For more information see https://github.com/jganoff/localjs
*
* Licensed under the Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0.txt)
*
* This is a slight modification from the one found on Github. We use define here (instead of define) so it can be
* used outside of our build process.
*/

define([],function(){var n,l,e,o,i={},u={};return o=function(n,e){i[n]=[e],l(n,e)},e=function(n){return void 0!==i[n]},n=function(n,l){var e=u[n]||[];e.push(l),u[n]=e},l=function(n,l){var e,o=u[n];if(void 0!==o)for(e=0;e<o.length;e++)o[e].call(null,l);delete u[n]},{load:function(l,o,u,f){e(l)?u.call(null,i[l][0]):n(l,u)},define:function(n,l){var i;if(e(n))return void("undefined"!=typeof console&&console.warn("local module is already defined: "+n));i=void 0!==l?l.call(null):null,o(n,i)}}});