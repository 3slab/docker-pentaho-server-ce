!function(t,e,n){"undefined"!=typeof module?module.exports=n():"undefined"!=typeof define&&"object"==typeof define.amd?define(n):e.Base=n()}(0,this,function(){var t=function(){};return t.extend=function(e,n){var o=t.prototype.extend;t._prototyping=!0;var i=new this;o.call(i,e),i.base=function(){},delete t._prototyping;var r=i.constructor,f=i.constructor=function(){if(!t._prototyping)if(this._constructing||this.constructor===f)this._constructing=!0,r.apply(this,arguments),delete this._constructing;else if(null!==arguments[0])return(arguments[0].extend||o).call(arguments[0],i)};return f.ancestor=this,f.extend=this.extend,f.forEach=this.forEach,f.implement=this.implement,f.prototype=i,f.toString=this.toString,f.valueOf=function(t){return"object"===t?f:r.valueOf()},o.call(f,n),"function"==typeof f.init&&f.init(),f},t.prototype={extend:function(e,n){if(arguments.length>1){var o=this[e];if(o&&"function"==typeof n&&(!o.valueOf||o.valueOf()!==n.valueOf())&&/\bbase\b/.test(n)){var i=n.valueOf();n=function(){var e=this.base||t.prototype.base;this.base=o;var n=i.apply(this,arguments);return this.base=e,n},n.valueOf=function(t){return"object"===t?n:i},n.toString=t.toString}this[e]=n}else if(e){var r=t.prototype.extend;t._prototyping||"function"==typeof this||(r=this.extend||r);for(var f={toSource:null},s=["constructor","toString","valueOf"],u=t._prototyping?0:1;u<s.length;u++){var c=s[u];e[c]!==f[c]&&r.call(this,c,e[c])}for(var a in e)f[a]||r.call(this,a,e[a])}return this}},t=t.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(t,e,n){for(var o in t)void 0===this.prototype[o]&&e.call(n,t[o],o,t)},implement:function(){for(var t=0;t<arguments.length;t++)"function"==typeof arguments[t]?arguments[t](this.prototype):this.prototype.extend(arguments[t]);return this},toString:function(){return String(this.valueOf())}})});