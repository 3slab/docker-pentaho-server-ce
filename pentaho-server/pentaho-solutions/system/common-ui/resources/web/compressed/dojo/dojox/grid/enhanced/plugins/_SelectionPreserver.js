define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","../../_SelectionPreserver"],function(e,t,i,n){return e("dojox.grid.enhanced.plugins._SelectionPreserver",n,{constructor:function(e){var n=this.grid;n.onSelectedById=this.onSelectedById,this._oldClearData=n._clearData;var d=this;n._clearData=function(){d._updateMapping(!n._noInternalMapping),d._trustSelection=[],d._oldClearData.apply(n,arguments)},this._connects.push(i.connect(e,"selectRange",t.hitch(this,"_updateMapping",!0,!0,!1)),i.connect(e,"deselectRange",t.hitch(this,"_updateMapping",!0,!1,!1)),i.connect(e,"deselectAll",t.hitch(this,"_updateMapping",!0,!1,!0)))},destroy:function(){this.inherited(arguments),this.grid._clearData=this._oldClearData},reset:function(){this.inherited(arguments),this._idMap=[],this._trustSelection=[],this._defaultSelected=!1},_reSelectById:function(e,t){var i=this.selection,n=this.grid;if(e&&n._hasIdentity){var d=n.store.getIdentity(e);void 0===this._selectedById[d]?this._trustSelection[t]||(i.selected[t]=this._defaultSelected):i.selected[t]=this._selectedById[d],this._idMap.push(d),n.onSelectedById(d,t,i.selected[t])}},_selectById:function(e,t){this.inherited(arguments)||(this._trustSelection[t]=!0)},onSelectedById:function(e,t,i){},_updateMapping:function(e,t,i,n,d){var s,c,a=this.selection,o=this.grid,l=0,h=0;for(s=o.rowCount-1;s>=0;--s)o._by_idx[s]?(c=o._by_idx[s].idty)&&(e||void 0===this._selectedById[c])&&(this._selectedById[c]=!!a.selected[s]):(++h,l+=a.selected[s]?1:-1);if(h&&(this._defaultSelected=l>0),i||void 0===n||void 0===d||(i=!o.usingPagination&&Math.abs(d-n+1)===o.rowCount),i&&(!o.usingPagination||"single"===o.selectionMode))for(s=this._idMap.length-1;s>=0;--s)this._selectedById[this._idMap[s]]=t}})});