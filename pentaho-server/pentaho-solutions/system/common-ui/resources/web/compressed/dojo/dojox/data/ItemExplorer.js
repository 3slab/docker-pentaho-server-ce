dojo.provide("dojox.data.ItemExplorer"),dojo.require("dijit.Tree"),dojo.require("dijit.Dialog"),dojo.require("dijit.Menu"),dojo.require("dijit.form.ValidationTextBox"),dojo.require("dijit.form.Textarea"),dojo.require("dijit.form.Button"),dojo.require("dijit.form.RadioButton"),dojo.require("dijit.form.FilteringSelect"),function(){var e=function(e,t,o){var i=e.getValues(t,o);return i.length<2&&(i=e.getValue(t,o)),i};dojo.declare("dojox.data.ItemExplorer",dijit.Tree,{useSelect:!1,refSelectSearchAttr:null,constructor:function(t){dojo.mixin(this,t);var o=this,i={},r=this.rootModelNode={value:i,id:"root"};this._modelNodeIdMap={},this._modelNodePropMap={};var d=1;this.model={getRoot:function(e){e(r)},mayHaveChildren:function(e){return e.value&&"object"==typeof e.value&&!(e.value instanceof Date)},getChildren:function(t,r,d){function a(){if(h)n=o.store.getAttributes(s),l=s;else if(s&&"object"==typeof s){l=t.value,n=[];for(var i in s)s.hasOwnProperty(i)&&"__id"!=i&&"__clientId"!=i&&n.push(i)}if(n){for(var d,a=0;d=n[a++];)c.push({property:d,value:h?e(o.store,s,d):s[d],parent:l});c.push({addNew:!0,parent:l,parentNode:t})}r(c)}var n,l,s=t.value,c=[];if(s==i)return void r([]);var h=o.store&&o.store.isItem(s,!0);h&&!o.store.isItemLoaded(s)?o.store.loadItem({item:s,onItem:function(e){s=e,a()}}):a()},getIdentity:function(e){if(!e.id&&(e.addNew&&(e.property="--addNew"),e.id=d++,o.store)){if(o.store.isItem(e.value)){var t=o.store.getIdentity(e.value);(o._modelNodeIdMap[t]=o._modelNodeIdMap[t]||[]).push(e)}e.parent&&(t=o.store.getIdentity(e.parent)+"."+e.property,(o._modelNodePropMap[t]=o._modelNodePropMap[t]||[]).push(e))}return e.id},getLabel:function(e){return e===r?"Object Properties":e.addNew?e.parent instanceof Array?"Add new value":"Add new property":e.property+": "+(e.value instanceof Array?"("+e.value.length+" elements)":e.value)},onChildrenChange:function(e){},onChange:function(e){}}},postCreate:function(){this.inherited(arguments),dojo.connect(this,"onClick",function(e,t){this.lastFocused=t,e.addNew?this._addProperty():this._editProperty()});var e=new dijit.Menu({targetNodeIds:[this.rootNode.domNode],id:"contextMenu"});dojo.connect(e,"_openMyself",this,function(t){var o=dijit.getEnclosingWidget(t.target);if(o){var i=o.item;this.store.isItem(i.value,!0)&&!i.parent?(dojo.forEach(e.getChildren(),function(e){e.attr("disabled","Add"!=e.label)}),this.lastFocused=o):!i.value||"object"!=typeof i.value||i.value instanceof Date?i.property&&dojo.indexOf(this.store.getIdentityAttributes(),i.property)>=0?(this.focusNode(o),alert("Cannot modify an Identifier node.")):i.addNew?this.focusNode(o):(dojo.forEach(e.getChildren(),function(e){e.attr("disabled","Edit"!=e.label&&"Delete"!=e.label)}),this.lastFocused=o):(dojo.forEach(e.getChildren(),function(e){e.attr("disabled","Add"!=e.label&&"Delete"!=e.label)}),this.lastFocused=o)}}),e.addChild(new dijit.MenuItem({label:"Add",onClick:dojo.hitch(this,"_addProperty")})),e.addChild(new dijit.MenuItem({label:"Edit",onClick:dojo.hitch(this,"_editProperty")})),e.addChild(new dijit.MenuItem({label:"Delete",onClick:dojo.hitch(this,"_destroyProperty")})),e.startup()},store:null,setStore:function(e){this.store=e;var t=this;this._editDialog&&(this._editDialog.destroyRecursive(),delete this._editDialog),dojo.connect(e,"onSet",function(e,o,i,r){var d,a,n=t.store.getIdentity(e);if((d=t._modelNodeIdMap[n])&&(void 0===i||void 0===r||i instanceof Array||r instanceof Array||"object"==typeof i||"object"==typeof r))for(a=0;a<d.length;a++)!function(e){t.model.getChildren(e,function(o){t.model.onChildrenChange(e,o)})}(d[a]);if(d=t._modelNodePropMap[n+"."+o])for(a=0;a<d.length;a++)d[a].value=r,t.model.onChange(d[a])}),this.rootNode.setChildItems([])},setItem:function(e){(this._modelNodeIdMap={})[this.store.getIdentity(e)]=[this.rootModelNode],this._modelNodePropMap={},this.rootModelNode.value=e;var t=this;this.model.getChildren(this.rootModelNode,function(e){t.rootNode.setChildItems(e)})},refreshItem:function(){this.setItem(this.rootModelNode.value)},_createEditDialog:function(){this._editDialog=new dijit.Dialog({title:"Edit Property",execute:dojo.hitch(this,"_updateItem"),preload:!0}),this._editDialog.placeAt(dojo.body()),this._editDialog.startup();var e=dojo.doc.createElement("div"),t=dojo.doc.createElement("label");dojo.attr(t,"for","property"),dojo.style(t,"fontWeight","bold"),dojo.attr(t,"innerHTML","Property:"),e.appendChild(t);new dijit.form.ValidationTextBox({name:"property",value:"",required:!0,disabled:!0}).placeAt(e);e.appendChild(dojo.doc.createElement("br")),e.appendChild(dojo.doc.createElement("br"));var o=(new dijit.form.RadioButton({name:"itemType",value:"value",onClick:dojo.hitch(this,function(){this._enableFields("value")})}).placeAt(e),dojo.doc.createElement("label"));dojo.attr(o,"for","value"),dojo.attr(o,"innerHTML","Value (JSON):"),e.appendChild(o);var i=dojo.doc.createElement("div");dojo.addClass(i,"value");new dijit.form.Textarea({name:"jsonVal"}).placeAt(i);e.appendChild(i);var r=(new dijit.form.RadioButton({name:"itemType",value:"reference",onClick:dojo.hitch(this,function(){this._enableFields("reference")})}).placeAt(e),dojo.doc.createElement("label"));dojo.attr(r,"for","_reference"),dojo.attr(r,"innerHTML","Reference (ID):"),e.appendChild(r),e.appendChild(dojo.doc.createElement("br"));var d=dojo.doc.createElement("div");if(dojo.addClass(d,"reference"),this.useSelect){new dijit.form.FilteringSelect({name:"_reference",store:this.store,searchAttr:this.refSelectSearchAttr||this.store.getIdentityAttributes()[0],required:!1,value:null,pageSize:10}).placeAt(d)}else{new dijit.form.ValidationTextBox({name:"_reference",value:"",promptMessage:"Enter the ID of the item to reference",isValid:dojo.hitch(this,function(e){return!0})}).placeAt(d)}e.appendChild(d),e.appendChild(dojo.doc.createElement("br")),e.appendChild(dojo.doc.createElement("br"));var a=document.createElement("div");a.setAttribute("dir","rtl"),new dijit.form.Button({type:"reset",label:"Cancel"}).placeAt(a).onClick=dojo.hitch(this._editDialog,"onCancel");new dijit.form.Button({type:"submit",label:"OK"}).placeAt(a);e.appendChild(a),this._editDialog.attr("content",e)},_enableFields:function(e){switch(e){case"reference":dojo.query(".value [widgetId]",this._editDialog.containerNode).forEach(function(e){dijit.getEnclosingWidget(e).attr("disabled",!0)}),dojo.query(".reference [widgetId]",this._editDialog.containerNode).forEach(function(e){dijit.getEnclosingWidget(e).attr("disabled",!1)});break;case"value":dojo.query(".value [widgetId]",this._editDialog.containerNode).forEach(function(e){dijit.getEnclosingWidget(e).attr("disabled",!1)}),dojo.query(".reference [widgetId]",this._editDialog.containerNode).forEach(function(e){dijit.getEnclosingWidget(e).attr("disabled",!0)})}},_updateItem:function(t){function o(){try{var o,l=[],h=t.property;if(n){for(;!s.isItem(r.parent,!0);)i=i.getParent(),l.push(r.property),r=i.item;if(0==l.length)s.setValue(r.parent,r.property,d);else{for(a=e(s,r.parent,r.property),a instanceof Array&&(a=a.concat()),o=a;l.length>1;)o=o[l.pop()];o[l]=d,s.setValue(r.parent,r.property,a)}}else if(s.isItem(c,!0))s.isItemLoaded(c)?(c instanceof Array&&(h=c.length),s.setValue(c,h,d)):s.loadItem({item:c,onItem:function(e){e instanceof Array&&(h=e.length),s.setValue(e,h,d)}});else{for(r.value instanceof Array?l.push(r.value.length):l.push(t.property);!s.isItem(r.parent,!0);)i=i.getParent(),l.push(r.property),r=i.item;for(a=e(s,r.parent,r.property),o=a;l.length>1;)o=o[l.pop()];o[l]=d,s.setValue(r.parent,r.property,a)}}catch(e){alert(e)}}var i,r,d,a,n="Edit Property"==this._editDialog.attr("title"),l=this._editDialog,s=this.store;if(l.validate()){i=this.lastFocused,r=i.item;var c=r.value;switch(r.addNew&&(c=i.item.parent,i=i.getParent(),r=i.item),d=null,t.itemType){case"reference":this.store.fetchItemByIdentity({identity:t._reference,onItem:function(e){d=e,o()},onError:function(){alert("The id could not be found")}});break;case"value":var h=t.jsonVal;d=dojo.fromJson(h),"function"==typeof d&&(d.toString=function(){return h}),o()}}else l.show()},_editProperty:function(){var e=dojo.mixin({},this.lastFocused.item);this._editDialog?this._editDialog.reset():this._createEditDialog(),dojo.indexOf(this.store.getIdentityAttributes(),e.property)>=0?alert("Cannot Edit an Identifier!"):(this._editDialog.attr("title","Edit Property"),dijit.getEnclosingWidget(dojo.query("input",this._editDialog.containerNode)[0]).attr("disabled",!0),this.store.isItem(e.value,!0)?e.parent&&(e.itemType="reference",this._enableFields(e.itemType),e._reference=this.store.getIdentity(e.value),this._editDialog.attr("value",e),this._editDialog.show()):(!e.value||"object"!=typeof e.value||e.value instanceof Date)&&(e.itemType="value",this._enableFields(e.itemType),e.jsonVal="function"==typeof e.value?e.value.toString():e.value instanceof Date?'new Date("'+e.value+'")':dojo.toJson(e.value),this._editDialog.attr("value",e),this._editDialog.show()))},_destroyProperty:function(){for(var t=this.lastFocused,o=t.item,i=[];!this.store.isItem(o.parent,!0)||o.parent instanceof Array;)t=t.getParent(),i.push(o.property),o=t.item;if(dojo.indexOf(this.store.getIdentityAttributes(),o.property)>=0)alert("Cannot Delete an Identifier!");else try{if(i.length>0){var r,d=e(this.store,o.parent,o.property);for(r=d;i.length>1;)r=r[i.pop()];dojo.isArray(r)?r.splice(i,1):delete r[i],this.store.setValue(o.parent,o.property,d)}else this.store.unsetAttribute(o.parent,o.property)}catch(e){alert(e)}},_addProperty:function(){var e=this.lastFocused.item,t=e.value,o=dojo.hitch(this,function(){var e=null;this._editDialog?this._editDialog.reset():this._createEditDialog(),t instanceof Array?(e=t.length,dijit.getEnclosingWidget(dojo.query("input",this._editDialog.containerNode)[0]).attr("disabled",!0)):dijit.getEnclosingWidget(dojo.query("input",this._editDialog.containerNode)[0]).attr("disabled",!1),this._editDialog.attr("title","Add Property"),this._enableFields("value"),this._editDialog.attr("value",{itemType:"value",property:e}),this._editDialog.show()});e.addNew&&(e=this.lastFocused.getParent().item,t=this.lastFocused.item.parent),e.property&&dojo.indexOf(this.store.getIdentityAttributes(),e.property)>=0?alert("Cannot add properties to an ID node!"):this.store.isItem(t,!0)&&!this.store.isItemLoaded(t)?this.store.loadItem({item:t,onItem:function(e){t=e,o()}}):o()}})}();