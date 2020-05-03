define(["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/array","dojo/_base/lang","dojox/storage/Provider","dojox/storage/manager"],function(t,e,s,i,o,r,a){var n=t("dojox.storage.LocalStorageProvider",[r],{store:null,initialize:function(){this.store=localStorage,this.initialized=!0,dojox.storage.manager.loaded()},isAvailable:function(){return"undefined"!=typeof localStorage},put:function(t,e,s,i){this._assertIsValidKey(t),i=i||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(i);var o=this.getFullKey(t,i);e=dojo.toJson(e);try{this.store.setItem(o,e),s&&s(this.SUCCESS,t,null,i)}catch(e){s&&s(this.FAILED,t,e.toString(),i)}},get:function(t,e){return this._assertIsValidKey(t),e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),t=this.getFullKey(t,e),dojo.fromJson(this.store.getItem(t))},getKeys:function(t){t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),t="__"+t+"_";for(var e=[],s=0;s<this.store.length;s++){var i=this.store.key(s);this._beginsWith(i,t)&&(i=i.substring(t.length),e.push(i))}return e},clear:function(t){t=t||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(t),t="__"+t+"_";for(var e=[],s=0;s<this.store.length;s++)this._beginsWith(this.store.key(s),t)&&e.push(this.store.key(s));dojo.forEach(e,dojo.hitch(this.store,"removeItem"))},remove:function(t,e){e=e||this.DEFAULT_NAMESPACE,this._assertIsValidNamespace(e),this.store.removeItem(this.getFullKey(t,e))},getNamespaces:function(){var t=[this.DEFAULT_NAMESPACE],e={};e[this.DEFAULT_NAMESPACE]=!0;for(var s=/^__([^_]*)_/,i=0;i<this.store.length;i++){var o=this.store.key(i);if(1==s.test(o)){var r=o.match(s)[1];void 0===e[r]&&(e[r]=!0,t.push(r))}}return t},isPermanent:function(){return!0},getMaximumSize:function(){return dojox.storage.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1},isValidKey:function(t){return null!==t&&void 0!==t&&/^[0-9A-Za-z_-]*$/.test(t)},isValidNamespace:function(t){return null!==t&&void 0!==t&&/^[0-9A-Za-z-]*$/.test(t)},getFullKey:function(t,e){return"__"+e+"_"+t},_beginsWith:function(t,e){return!(e.length>t.length)&&t.substring(0,e.length)===e},_assertIsValidNamespace:function(t){if(!1===this.isValidNamespace(t))throw new Error("Invalid namespace given: "+t)},_assertIsValidKey:function(t){if(!1===this.isValidKey(t))throw new Error("Invalid key given: "+t)}});return dojox.storage.manager.register("dojox.storage.LocalStorageProvider",new dojox.storage.LocalStorageProvider),n});