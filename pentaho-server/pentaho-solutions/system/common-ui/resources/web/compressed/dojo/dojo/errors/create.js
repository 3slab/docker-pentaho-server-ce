define(["../_base/lang"],function(r){return function(t,e,o,a){o=o||Error;var p=function(r){if(o===Error){Error.captureStackTrace&&Error.captureStackTrace(this,p);var t,a=Error.call(this,r);for(t in a)a.hasOwnProperty(t)&&(this[t]=a[t]);this.message=r,this.stack=a.stack}else o.apply(this,arguments);e&&e.apply(this,arguments)};return p.prototype=r.delegate(o.prototype,a),p.prototype.name=t,p.prototype.constructor=p,p}});