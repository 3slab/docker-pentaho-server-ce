define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom-attr","dojo/keys"],function(e,t,n,i,s){return e("dojox.grid.Selection",null,{constructor:function(e){this.grid=e,this.selected=[],this.setMode(e.selectionMode)},mode:"extended",selected:null,updating:0,selectedIndex:-1,rangeStartIndex:-1,setMode:function(e){this.selected.length&&this.deselectAll(),this.mode="extended"!=e&&"multiple"!=e&&"single"!=e&&"none"!=e?"extended":e},onCanSelect:function(e){return this.grid.onCanSelect(e)},onCanDeselect:function(e){return this.grid.onCanDeselect(e)},onSelected:function(e){},onDeselected:function(e){},onChanging:function(){},onChanged:function(){},isSelected:function(e){return"none"!=this.mode&&this.selected[e]},getFirstSelected:function(){if(!this.selected.length||"none"==this.mode)return-1;for(var e=0,t=this.selected.length;e<t;e++)if(this.selected[e])return e;return-1},getNextSelected:function(e){if("none"==this.mode)return-1;for(var t=e+1,n=this.selected.length;t<n;t++)if(this.selected[t])return t;return-1},getSelected:function(){for(var e=[],t=0,n=this.selected.length;t<n;t++)this.selected[t]&&e.push(t);return e},getSelectedCount:function(){for(var e=0,t=0;t<this.selected.length;t++)this.selected[t]&&e++;return e},_beginUpdate:function(){0===this.updating&&this.onChanging(),this.updating++},_endUpdate:function(){0===--this.updating&&this.onChanged()},select:function(e){"none"!=this.mode&&("multiple"!=this.mode?(this.deselectAll(e),this.addToSelection(e)):this.toggleSelect(e))},addToSelection:function(e){if("none"!=this.mode){if(n.isArray(e))return void t.forEach(e,this.addToSelection,this);if(e=Number(e),this.selected[e])this.selectedIndex=e;else if(!1!==this.onCanSelect(e)){this.selectedIndex=e;var s=this.grid.getRowNode(e);s&&i.set(s,"aria-selected","true"),this._beginUpdate(),this.selected[e]=!0,this.onSelected(e),this._endUpdate()}}},deselect:function(e){if("none"!=this.mode){if(n.isArray(e))return void t.forEach(e,this.deselect,this);if(e=Number(e),this.selectedIndex==e&&(this.selectedIndex=-1),this.selected[e]){if(!1===this.onCanDeselect(e))return;var s=this.grid.getRowNode(e);s&&i.set(s,"aria-selected","false"),this._beginUpdate(),delete this.selected[e],this.onDeselected(e),this._endUpdate()}}},setSelected:function(e,t){this[t?"addToSelection":"deselect"](e)},toggleSelect:function(e){if(n.isArray(e))return void t.forEach(e,this.toggleSelect,this);this.setSelected(e,!this.selected[e])},_range:function(e,t,n){var i=e>=0?e:t,s=t;i>s&&(s=i,i=t);for(var d=i;d<=s;d++)n(d)},selectRange:function(e,t){this._range(e,t,n.hitch(this,"addToSelection"))},deselectRange:function(e,t){this._range(e,t,n.hitch(this,"deselect"))},insert:function(e){this.selected.splice(e,0,!1),this.selectedIndex>=e&&this.selectedIndex++},remove:function(e){this.selected.splice(e,1),this.selectedIndex>=e&&this.selectedIndex--},deselectAll:function(e){for(var t in this.selected)t!=e&&!0===this.selected[t]&&this.deselect(t)},clickSelect:function(e,t,n){"none"!=this.mode&&(this._beginUpdate(),"extended"!=this.mode?this.select(e):((!n||this.rangeStartIndex<0)&&(this.rangeStartIndex=e),t||this.deselectAll(e),n?this.selectRange(this.rangeStartIndex,e):t?this.toggleSelect(e):this.addToSelection(e)),this._endUpdate())},clickSelectEvent:function(e){this.clickSelect(e.rowIndex,e.ctrlKey,e.shiftKey)},clear:function(){this._beginUpdate(),this.deselectAll(),this._endUpdate()}})});