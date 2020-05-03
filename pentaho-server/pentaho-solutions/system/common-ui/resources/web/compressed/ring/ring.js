/*
Ring.js version 1.0

Copyright (c) 2013, Nicolas Vanhoren

Released under the MIT license

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

!function(){function e(e){function t(){}var r={};r.Object=t,e.extend(r.Object,{__mro__:[r.Object],__properties__:{init:function(){}},prototype:{},__class_id__:1,parents:[],__class_index__:{1:r.Object},isSubClass:function(e){return void 0!==this.__class_index__[e.__class_id__]}}),e.extend(r.Object.prototype,{$class:r.Object,init:r.Object.__properties__.init});var n=3,_=/xyz/.test(function(){xyz})?/\$super\b/:/.*/;r.create=function(){var t=e.toArray(arguments);t.reverse();var s=t[0],o=t.length>=2?t[1]:[];0==o.length&&(o=[r.Object]);var a=n++,c=e.pluck(o,"__mro__");c=c.concat([o]);var u=[{__properties__:s}].concat(i(c)),p={},f={};e.each(u,function(t){e.each(t.__properties__,function(e,t){f[t]=!0})});var l=function(t,r){if(0!==t.length){var n=t[0];if(void 0===n.__properties__[r])return l(e.rest(t),r);var i=n.__properties__[r];if("function"!=typeof i||!_.test(i))return i;var s=l(e.rest(t),r);return function(e){return function(){var t=this.$super;this.$super=e;var r=i.apply(this,arguments);return this.$super=t,r}}(s)}};e.each(f,function(e,t){p[t]=l(u,t)});var d=function(){this.$super=null,this.init.apply(this,arguments)};return u[0]=d,d.__mro__=u,d.parents=o,d.__properties__=s,d.prototype=p,p.$class=d,d.__class_id__=a,d.__class_index__={},e.each(d.__mro__,function(e){d.__class_index__[e.__class_id__]=e}),d.isSubClass=r.Object.isSubClass,d.prototype.$classInit&&(d.__class_init__=d.prototype.$classInit,delete d.prototype.$classInit),e.each(e.chain(d.__mro__).clone().reverse().value(),function(e){if(e.__class_init__){var t=e.__class_init__(d.prototype);void 0!==t&&(d.prototype=t)}}),d};var i=function(t){for(var n=[],_=e.clone(t);;){for(var i=!1,s=0;s<_.length;s++)if(0!=_[s].length){var o=_[s][0],a=e.find(_,function(t){return e.contains(e.rest(t),o)});if(!a){i=!0,n.push(o),_=e.map(_,function(t){return e.head(t)===o?e.rest(t):t});break}}if(!i){if(e.all(_,function(e){return 0==e.length}))return n;throw new r.ValueError("Cannot create a consistent method resolution order (MRO)")}}};return r.instance=function(e,t){return"object"==typeof e&&e.$class&&"function"==typeof t&&"number"==typeof t.__class_id__?e.$class.isSubClass(t):"string"==typeof t?typeof e===t:e instanceof t},r.Error=r.create("RingError",[],{name:"ring.Error",defaultMessage:"",init:function(e){this.message=e||this.defaultMessage},$classInit:function(t){var r=new Error;return e.extend(r,t),r}}),r.ValueError=r.create([r.Error],{name:"ring.ValueError"}),r}if("undefined"!=typeof exports){var t=require("underscore");t.extend(exports,e(t))}else"undefined"!=typeof define?define(["common-ui/underscore"],e):ring=e(_)}();