define(["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/dom","dojo/dom-geometry","dojo/_base/window","dojo/on","dojo/_base/event","dojo/keys"],function(e,t,i,s,n,d,r,h,o){return i("dojox.calendar.Touch",null,{touchStartEditingTimer:500,touchEndEditingTimer:1e4,postMixInProperties:function(){this.on("rendererCreated",t.hitch(this,function(e){var i=e.renderer.renderer;this.own(r(i.domNode,"touchstart",t.hitch(this,function(e){this._onRendererTouchStart(e,i)})))}))},_onRendererTouchStart:function(e,i){var s=this._edProps;s&&s.endEditingTimer&&(clearTimeout(s.endEditingTimer),s.endEditingTimer=null);var n=i.item.item;if(s&&s.endEditingTimer&&(clearTimeout(s.endEditingTimer),s.endEditingTimer=null),null!=s&&s.item!=n&&(s.startEditingTimer&&clearTimeout(s.startEditingTimer),this._endItemEditing("touch",!1),s=null),!s){var o=[];o.push(r(d.doc,"touchend",t.hitch(this,this._docEditingTouchEndHandler))),o.push(r(this.itemContainer,"touchmove",t.hitch(this,this._docEditingTouchMoveHandler))),this._setEditingProperties({touchMoved:!1,item:n,renderer:i,rendererKind:i.rendererKind,event:e,handles:o,liveLayout:this.liveLayout}),s=this._edProps}if(this._isEditing)t.mixin(s,this._getTouchesOnRenderers(e,s.editedItem)),this._startTouchItemEditingGesture(e);else{if(e.touches.length>1)return void h.stop(e);this._touchSelectionTimer=setTimeout(t.hitch(this,function(){this._saveSelectedItems=this.get("selectedItems"),this.selectFromEvent(e,n._item,i,!1)?this._pendingSelectedItem=n:delete this._saveSelectedItems,this._touchSelectionTimer=null}),200),s.start={x:e.touches[0].screenX,y:e.touches[0].screenY},this.isItemEditable(s.item,s.rendererKind)&&(this._edProps.startEditingTimer=setTimeout(t.hitch(this,function(){this._touchSelectionTimer&&(clearTimeout(this._touchSelectionTimer),delete this._touchSelectionTime),this._pendingSelectedItem?(this.dispatchChange(null==this._saveSelectedItems?null:this._saveSelectedItems[0],this._pendingSelectedItem,null,e),delete this._saveSelectedItems,delete this._pendingSelectedItem):this.selectFromEvent(e,n._item,i),this._startItemEditing(s.item,"touch",e),s.moveTouchIndex=0,this._startItemEditingGesture([this.getTime(e)],"move","touch",e)}),this.touchStartEditingTimer))}},_docEditingTouchMoveHandler:function(e){var t=this._edProps,i={x:e.touches[0].screenX,y:e.touches[0].screenY};if(t.startEditingTimer&&(Math.abs(i.x-t.start.x)>25||Math.abs(i.y-t.start.y)>25)&&(clearTimeout(t.startEditingTimer),t.startEditingTimer=null,clearTimeout(this._touchSelectionTimer),this._touchSelectionTimer=null,this._pendingSelectedItem&&(delete this._pendingSelectedItem,this.selectFromEvent(e,null,null,!1))),t.touchMoved=!0,this._editingGesture&&(h.stop(e),t.itemBeginDispatched)){var s=[],n="resizeEnd"==t.editKind?t.editedItem.endTime:t.editedItem.startTime;switch(t.editKind){case"move":var d=null==t.moveTouchIndex||t.moveTouchIndex<0?0:t.moveTouchIndex;s[0]=this.getTime(e,-1,-1,d);break;case"resizeStart":s[0]=this.getTime(e,-1,-1,t.resizeStartTouchIndex);break;case"resizeEnd":s[0]=this.getTime(e,-1,-1,t.resizeEndTouchIndex);break;case"resizeBoth":s[0]=this.getTime(e,-1,-1,t.resizeStartTouchIndex),s[1]=this.getTime(e,-1,-1,t.resizeEndTouchIndex)}this._moveOrResizeItemGesture(s,"touch",e),"move"==t.editKind?-1==this.renderData.dateModule.compare(t.editedItem.startTime,n)?this.ensureVisibility(t.editedItem.startTime,t.editedItem.endTime,"start",this.autoScrollTouchMargin):this.ensureVisibility(t.editedItem.startTime,t.editedItem.endTime,"end",this.autoScrollTouchMargin):"resizeStart"==e.editKind||"resizeBoth"==e.editKind?this.ensureVisibility(t.editedItem.startTime,t.editedItem.endTime,"start",this.autoScrollTouchMargin):this.ensureVisibility(t.editedItem.startTime,t.editedItem.endTime,"end",this.autoScrollTouchMargin)}},autoScrollTouchMargin:10,_docEditingTouchEndHandler:function(i){h.stop(i);var s=this._edProps;s.startEditingTimer&&(clearTimeout(s.startEditingTimer),s.startEditingTimer=null),this._isEditing?(t.mixin(s,this._getTouchesOnRenderers(i,s.editedItem)),this._editingGesture&&(0==s.touchesLen?(this._endItemEditingGesture("touch",i),this.touchEndEditingTimer>0&&(s.endEditingTimer=setTimeout(t.hitch(this,function(){this._endItemEditing("touch",!1)}),this.touchEndEditingTimer))):(this._editingGesture&&this._endItemEditingGesture("touch",i),this._startTouchItemEditingGesture(i)))):s.touchMoved?(this._saveSelectedItems&&(this.set("selectedItems",this._saveSelectedItems),delete this._saveSelectedItems,delete this._pendingSelectedItem),e.forEach(s.handles,function(e){e.remove()}),this._edProps=null):(h.stop(i),e.forEach(s.handles,function(e){e.remove()}),this._touchSelectionTimer?(clearTimeout(this._touchSelectionTimer),this.selectFromEvent(i,s.item._item,s.renderer,!0)):this._pendingSelectedItem&&(this.dispatchChange(0==this._saveSelectedItems.length?null:this._saveSelectedItems[0],this._pendingSelectedItem,null,i),delete this._saveSelectedItems,delete this._pendingSelectedItem),this._pendingDoubleTap&&this._pendingDoubleTap.item==s.item?(this._onItemDoubleClick({triggerEvent:i,renderer:s.renderer,item:s.item._item}),clearTimeout(this._pendingDoubleTap.timer),delete this._pendingDoubleTap):(this._pendingDoubleTap={item:s.item,timer:setTimeout(t.hitch(this,function(){delete this._pendingDoubleTap}),this.doubleTapDelay)},this._onItemClick({triggerEvent:i,renderer:s.renderer,item:s.item._item})),this._edProps=null)},_startTouchItemEditingGesture:function(e){var t=this._edProps,i=-1!=t.resizeStartTouchIndex,s=-1!=t.resizeEndTouchIndex;i&&s||this._editingGesture&&2==t.touchesLen&&(s&&"resizeStart"==t.editKind||i&&"resizeEnd"==t.editKind)?(this._editingGesture&&"resizeBoth"!=t.editKind&&this._endItemEditingGesture("touch",e),t.editKind="resizeBoth",this._startItemEditingGesture([this.getTime(e,-1,-1,t.resizeStartTouchIndex),this.getTime(e,-1,-1,t.resizeEndTouchIndex)],t.editKind,"touch",e)):i&&1==t.touchesLen&&!this._editingGesture?this._startItemEditingGesture([this.getTime(e,-1,-1,t.resizeStartTouchIndex)],"resizeStart","touch",e):s&&1==t.touchesLen&&!this._editingGesture?this._startItemEditingGesture([this.getTime(e,-1,-1,t.resizeEndTouchIndex)],"resizeEnd","touch",e):this._startItemEditingGesture([this.getTime(e)],"move","touch",e)},_getTouchesOnRenderers:function(e,t){for(var i=this._getStartEndRenderers(t),n=-1,d=-1,r=-1,h=null!=i[0]&&null!=i[0].resizeStartHandle,o=null!=i[1]&&null!=i[1].resizeEndHandle,c=0,u=this.itemToRenderer[t.id],m=0;m<e.touches.length;m++){if(-1==n&&h&&s.isDescendant(e.touches[m].target,i[0].resizeStartHandle)&&(n=m,c++),-1==d&&o&&s.isDescendant(e.touches[m].target,i[1].resizeEndHandle)&&(d=m,c++),-1==n&&-1==d)for(var a=0;a<u.length;a++)if(s.isDescendant(e.touches[m].target,u[a].container)){r=m,c++;break}if(-1!=n&&-1!=d&&-1!=r)break}return{touchesLen:c,resizeStartTouchIndex:n,resizeEndTouchIndex:d,moveTouchIndex:r}}})});