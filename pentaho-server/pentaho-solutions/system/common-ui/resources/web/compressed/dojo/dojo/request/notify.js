define(["../Evented","../_base/lang","./util"],function(n,t,i){function e(n,t){return s.on(n,t)}var o=0,r=[].slice,s=t.mixin(new n,{onsend:function(n){o||this.emit("start"),o++},_onload:function(n){this.emit("done",n)},_onerror:function(n){this.emit("done",n)},_ondone:function(n){--o<=0&&(o=0,this.emit("stop"))},emit:function(t,i){var e=n.prototype.emit.apply(this,arguments);return this["_on"+t]&&this["_on"+t].apply(this,r.call(arguments,1)),e}});return e.emit=function(n,t,i){return s.emit(n,t,i)},i.notify=e});