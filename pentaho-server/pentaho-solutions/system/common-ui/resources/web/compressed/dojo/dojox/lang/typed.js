!function(){function e(e,r){var o=function(){var o=r();if(o&&o.parameters){for(var n=o.parameters,i=0;i<n.length;i++)arguments[i]=t(arguments[i],n[i],i.toString());if(o.additionalParameters)for(;i<arguments.length;i++)arguments[i]=t(arguments[i],o.additionalParameters,i.toString())}var _=e.apply(this,arguments);return o.returns&&t(_,o.returns),_};o.__typedFunction__=!0;for(var n in e)o[n]=e[n];return o}function r(e){return function(){return e}}function t(t,n,i){"function"==typeof t&&n&&!t.__typedFunction__&&(t=e(t,r(n)));var _=o._validate(t,n,i);if(!_.valid){for(var s="",a=_.errors,p=0;p<a.length;p++)s+=a[p].property+" "+a[p].message+"\n";throw new TypeError(s)}return t}var o,n="undefined"!=typeof dojo;if(n)dojo.provide("dojox.lang.typed"),dojo.require("dojox.json.schema"),o=dojox.json.schema;else{if("undefined"==typeof JSONSchema)throw new Error("Dojo or JSON Schema library must be present");o=JSONSchema}var i=o.__defineGetter__,_=function(r){if(r.__typedClass__)return r;var o=function(){var n,_,s=o.properties,a=o.methods;r.apply(this,arguments),this.__props__={};for(n in a)if(_=this[n]){if(!_.__typedFunction__){for(var p=this;!p.hasOwnProperty(n)&&p.__proto__;)p=p.__proto__;!function(r){p[r]=e(_,function(){return a[r]})}(n)}}else!function(e){this[e]=function(){throw new TypeError("The method "+e+" is defined but not implemented")}}(n);if(i){var d=this;for(n in s)_=this[n],this.hasOwnProperty(n)&&(this.__props__[n]=_),function(e){delete d[e],d.__defineGetter__(e,function(){return e in this.__props__?this.__props__[e]:this.__proto__[e]}),d.__defineSetter__(e,function(r){return t(r,s[e],e),this.__props__[e]=r})}(n)}t(this,o)};o.prototype=r.prototype;for(var _ in r)o[_]=r[_];return r.prototype.declaredClass&&n&&dojo.setObject(r.prototype.declaredClass,o),o.__typedClass__=!0,o};if(n){if(dojox.lang.typed=_,dojo.config.typeCheckAllClasses){var s=dojo.declare;dojo.declare=function(e){var r=s.apply(this,arguments);return r=_(r)},dojo.mixin(dojo.declare,s)}}else typed=_}();