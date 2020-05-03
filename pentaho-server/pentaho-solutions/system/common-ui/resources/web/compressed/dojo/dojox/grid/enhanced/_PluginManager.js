define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","./_Events","./_FocusManager","../util"],function(i,t,n,e,r,s,o,u){var h=n("dojox.grid.enhanced._PluginManager",null,{_options:null,_plugins:null,_connects:null,constructor:function(i){this.grid=i,this._store=i.store,this._options={},this._plugins=[],this._connects=[],this._parseProps(this.grid.plugins),i.connect(i,"_setStore",t.hitch(this,function(i){this._store!==i&&(this.forEach("onSetStore",[i,this._store]),this._store=i)}))},startup:function(){this.forEach("onStartUp")},preInit:function(){this.grid.focus.destroy(),this.grid.focus=new o(this.grid),new s(this.grid),this._init(!0),this.forEach("onPreInit")},postInit:function(){if(this._init(!1),e.forEach(this.grid.views.views,this._initView,this),this._connects.push(r.connect(this.grid.views,"addView",t.hitch(this,this._initView))),this._plugins.length>0){var i=this.grid.edit;i&&(i.styleRow=function(i){})}this.forEach("onPostInit")},forEach:function(i,t){e.forEach(this._plugins,function(n){n&&n[i]&&n[i].apply(n,t||[])})},_parseProps:function(i){if(i){var n,e={},r=this._options,s=this.grid,o=h.registry;for(n in i)i[n]&&this._normalize(n,i,o,e);r.dnd&&(r.columnReordering=!1),t.mixin(s,r)}},_normalize:function(i,n,r,s){if(!r[i])throw new Error("Plugin "+i+" is required.");if(s[i])throw new Error("Recursive cycle dependency is not supported.");var o=this._options;if(o[i])return o[i];s[i]=!0,o[i]=t.mixin({},r[i],t.isObject(n[i])?n[i]:{});var u=o[i].dependency;return u&&(t.isArray(u)||(u=o[i].dependency=[u]),e.forEach(u,function(i){if(!this._normalize(i,n,r,s))throw new Error("Plugin "+i+" is required.")},this)),delete s[i],o[i]},_init:function(i){var t,n,e=this._options;for(t in e)n=e[t].preInit,(i?n:!n)&&e[t].class&&!this.pluginExisted(t)&&this.loadPlugin(t)},loadPlugin:function(i){var t=this._options[i];if(!t)return null;var n=this.getPlugin(i);if(n)return n;var r=t.dependency;e.forEach(r,function(i){if(!this.loadPlugin(i))throw new Error("Plugin "+i+" is required.")},this);var s=t.class;return delete t.class,n=new this.getPluginClazz(s)(this.grid,t),this._plugins.push(n),n},_initView:function(i){i&&(u.funnelEvents(i.contentNode,i,"doContentEvent",["mouseup","mousemove"]),u.funnelEvents(i.headerNode,i,"doHeaderEvent",["mouseup"]))},pluginExisted:function(i){return!!this.getPlugin(i)},getPlugin:function(i){var t=this._plugins;i=i.toLowerCase();for(var n=0,e=t.length;n<e;n++)if(i==t[n].name.toLowerCase())return t[n];return null},getPluginClazz:function(i){if(t.isFunction(i))return i;var n='Please make sure Plugin "'+i+'" is existed.';try{var e=t.getObject(i);if(!e)throw new Error(n);return e}catch(i){throw new Error(n)}},isFixedCell:function(i){return i&&(i.isRowSelector||i.fixedPos)},destroy:function(){e.forEach(this._connects,r.disconnect),this.forEach("destroy"),this.grid.unwrap&&this.grid.unwrap(),delete this._connects,delete this._plugins,delete this._options}});return h.registerPlugin=function(i,n){if(!i)return void console.warn("Failed to register plugin, class missed!");var e=h;e.registry=e.registry||{},e.registry[i.prototype.name]=t.mixin({class:i},n||{})},h});