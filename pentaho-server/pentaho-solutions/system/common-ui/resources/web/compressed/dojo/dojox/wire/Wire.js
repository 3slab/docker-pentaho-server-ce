dojo.provide("dojox.wire.Wire"),dojo.require("dojox.wire._base"),dojo.declare("dojox.wire.Wire",null,{_wireClass:"dojox.wire.Wire",constructor:function(e){if(dojo.mixin(this,e),this.converter)if(dojo.isString(this.converter)){var t=dojo.getObject(this.converter);if(dojo.isFunction(t))try{var r=new t;r&&!dojo.isFunction(r.convert)?this.converter={convert:t}:this.converter=r}catch(e){}else dojo.isObject(t)&&dojo.isFunction(t.convert)&&(this.converter=t);if(dojo.isString(this.converter)){var i=dojox.wire._getClass(this.converter);this.converter=i?new i:void 0}}else dojo.isFunction(this.converter)&&(this.converter={convert:this.converter})},getValue:function(e){var t=void 0;if(t=dojox.wire.isWire(this.object)?this.object.getValue(e):this.object||e,this.property){var r=this.property.split(".");for(var i in r){if(!t)return t;t=this._getPropertyValue(t,r[i])}}var o=void 0;return o=this._getValue?this._getValue(t):t,o&&(this.type&&("string"==this.type?o=o.toString():"number"==this.type?o=parseInt(o,10):"boolean"==this.type?o="false"!=o:"array"==this.type&&(dojo.isArray(o)||(o=[o]))),this.converter&&this.converter.convert&&(o=this.converter.convert(o,this))),o},setValue:function(e,t){var r=void 0;r=dojox.wire.isWire(this.object)?this.object.getValue(t):this.object||t;var i,o=void 0;if(this.property){if(!r){if(!dojox.wire.isWire(this.object))throw new Error(this._wireClass+".setValue(): invalid object");r={},this.object.setValue(r,t)}for(var s=this.property.split("."),n=s.length-1,a=0;a<n;a++){var u=s[a];i=this._getPropertyValue(r,u),i||(i={},this._setPropertyValue(r,u,i)),r=i}o=s[n]}if(this._setValue){o&&(i=this._getPropertyValue(r,o),i||(i={},this._setPropertyValue(r,o,i)),r=i);var h=this._setValue(r,e);if(!r&&h){if(!dojox.wire.isWire(this.object))throw new Error(this._wireClass+".setValue(): invalid object");this.object.setValue(h,t)}}else if(o)this._setPropertyValue(r,o,e);else{if(!dojox.wire.isWire(this.object))throw new Error(this._wireClass+".setValue(): invalid property");this.object.setValue(e,t)}},_getPropertyValue:function(e,t){var r=void 0,i=t.indexOf("[");if(i>=0){var o=t.indexOf("]"),s=t.substring(i+1,o),n=null;0===i?n=e:(t=t.substring(0,i),(n=this._getPropertyValue(e,t))&&!dojo.isArray(n)&&(n=[n])),n&&(r=n[s])}else if(e.getPropertyValue)r=e.getPropertyValue(t);else{var a="get"+t.charAt(0).toUpperCase()+t.substring(1);r=this._useGet(e)?e.get(t):this._useAttr(e)?e.attr(t):e[a]?e[a]():e[t]}return r},_setPropertyValue:function(e,t,r){var i=t.indexOf("[");if(i>=0){var o=t.indexOf("]"),s=t.substring(i+1,o),n=null;0===i?n=e:(t=t.substring(0,i),(n=this._getPropertyValue(e,t))||(n=[],this._setPropertyValue(e,t,n))),n[s]=r}else if(e.setPropertyValue)e.setPropertyValue(t,r);else{var a="set"+t.charAt(0).toUpperCase()+t.substring(1);this._useSet(e)?e.set(t,r):this._useAttr(e)?e.attr(t,r):e[a]?e[a](r):e[t]=r}},_useGet:function(e){var t=!1;return dojo.isFunction(e.get)&&(t=!0),t},_useSet:function(e){var t=!1;return dojo.isFunction(e.set)&&(t=!0),t},_useAttr:function(e){var t=!1;return dojo.isFunction(e.attr)&&(t=!0),t}});