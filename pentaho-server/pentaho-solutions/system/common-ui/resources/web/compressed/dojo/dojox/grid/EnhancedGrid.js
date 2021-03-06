define(["dojo/_base/kernel","../main","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/sniff","dojo/dom","dojo/dom-geometry","./DataGrid","./DataSelection","./enhanced/_PluginManager","./enhanced/plugins/_SelectionPreserver","dojo/i18n!./enhanced/nls/EnhancedGrid"],function(e,t,i,n,r,s,o,h,a,c,d,u,l){e.experimental("dojox.grid.EnhancedGrid");var g=i("dojox.grid.EnhancedGrid",a,{plugins:null,pluginMgr:null,_pluginMgrClass:d,postMixInProperties:function(){this._nls=l,this.inherited(arguments)},postCreate:function(){this.pluginMgr=new this._pluginMgrClass(this),this.pluginMgr.preInit(),this.inherited(arguments),this.pluginMgr.postInit()},plugin:function(e){return this.pluginMgr.getPlugin(e)},startup:function(){this.inherited(arguments),this.pluginMgr.startup()},createSelection:function(){this.selection=new t.grid.enhanced.DataSelection(this)},canSort:function(e,t){return!0},doKeyEvent:function(e){try{var t=this.focus.focusView;t.content.decorateEvent(e),e.cell||t.header.decorateEvent(e)}catch(e){}this.inherited(arguments)},doApplyCellEdit:function(e,t,i){if(!i)return void(this.invalidated[t]=!0);this.inherited(arguments)},mixin:function(e,t){var i={};for(var r in t)"_inherited"==r||"declaredClass"==r||"constructor"==r||t.privates&&t.privates[r]||(i[r]=t[r]);n.mixin(e,i)},_copyAttr:function(e,t){if(t)return this.inherited(arguments)},_getHeaderHeight:function(){return this.inherited(arguments),h.getMarginBox(this.viewsHeaderNode).h},_fetch:function(e,t){if(this.items)return this.inherited(arguments);if(e=e||0,this.store&&!this._pending_requests[e]){this._isLoaded||this._isLoading||(this._isLoading=!0,this.showMessage(this.loadingMessage)),this._pending_requests[e]=!0;try{var i={start:e,count:this.rowsPerPage,query:this.query,sort:this.getSortProps(),queryOptions:this.queryOptions,isRender:t,onBegin:n.hitch(this,"_onFetchBegin"),onComplete:n.hitch(this,"_onFetchComplete"),onError:n.hitch(this,"_onFetchError")};this._storeLayerFetch(i)}catch(t){this._onFetchError(t,{start:e,count:this.rowsPerPage})}}return 0},_storeLayerFetch:function(e){this.store.fetch(e)},getCellByField:function(e){return r.filter(this.layout.cells,function(t){return t.field==e})[0]},onMouseUp:function(e){},createView:function(){var e=this.inherited(arguments);if(s("mozilla")){var t=function(e,t){for(var i=e;i&&t(i);i=i.parentNode);return i},i=function(e){var t=e.toUpperCase();return function(e){return e.tagName!=t}},n=e.header.getCellX;e.header.getCellX=function(r){var s=n.call(e.header,r),h=t(r.target,i("th"));return h&&h!==r.target&&o.isDescendant(r.target,h)&&(s+=h.firstChild.offsetLeft),s}}return e},destroy:function(){delete this._nls,this.pluginMgr.destroy(),this.inherited(arguments)}});return i("dojox.grid.enhanced.DataSelection",c,{constructor:function(e){e.keepSelection&&(this.preserver&&this.preserver.destroy(),this.preserver=new u(this))},_range:function(e,t){this.grid._selectingRange=!0,this.inherited(arguments),this.grid._selectingRange=!1,this.onChanged()},deselectAll:function(e){this.grid._selectingRange=!0,this.inherited(arguments),this.grid._selectingRange=!1,this.onChanged()}}),g.markupFactory=function(e,i,r,s){return t.grid._Grid.markupFactory(e,i,r,n.partial(a.cell_markupFactory,s))},g.registerPlugin=function(e,t){d.registerPlugin(e,t)},g});