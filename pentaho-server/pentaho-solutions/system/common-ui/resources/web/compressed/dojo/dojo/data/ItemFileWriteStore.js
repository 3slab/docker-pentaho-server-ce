define(["../_base/lang","../_base/declare","../_base/array","../_base/json","../_base/kernel","./ItemFileReadStore","../date/stamp"],function(e,t,i,s,r,n,a){return t("dojo.data.ItemFileWriteStore",n,{constructor:function(e){this._features["dojo.data.api.Write"]=!0,this._features["dojo.data.api.Notification"]=!0,this._pending={_newItems:{},_modifiedItems:{},_deletedItems:{}},this._datatypeMap.Date.serialize||(this._datatypeMap.Date.serialize=function(e){return a.toISOString(e,{zulu:!0})}),e&&!1===e.referenceIntegrity&&(this.referenceIntegrity=!1),this._saveInProgress=!1},referenceIntegrity:!0,_assert:function(e){if(!e)throw new Error("assertion failed in ItemFileWriteStore")},_getIdentifierAttribute:function(){return this.getFeatures()["dojo.data.api.Identity"]},newItem:function(t,i){if(this._assert(!this._saveInProgress),this._loadFinished||this._forceLoad(),"object"!=typeof t&&void 0!==t)throw new Error("newItem() was passed something other than an object");var s=null,r=this._getIdentifierAttribute();if(r===Number)s=this._arrayOfAllItems.length;else{if(void 0===(s=t[r]))throw new Error("newItem() was not passed an identity for the new item");if(e.isArray(s))throw new Error("newItem() was not passed an single-valued identity")}this._itemsByIdentity&&this._assert(void 0===this._itemsByIdentity[s]),this._assert(void 0===this._pending._newItems[s]),this._assert(void 0===this._pending._deletedItems[s]);var n={};n[this._storeRefPropName]=this,n[this._itemNumPropName]=this._arrayOfAllItems.length,this._itemsByIdentity&&(this._itemsByIdentity[s]=n,n[r]=[s]),this._arrayOfAllItems.push(n);var a=null;if(i&&i.parent&&i.attribute){a={item:i.parent,attribute:i.attribute,oldValue:void 0};var h=this.getValues(i.parent,i.attribute);if(h&&h.length>0){var o=h.slice(0,h.length);1===h.length?a.oldValue=h[0]:a.oldValue=h.slice(0,h.length),o.push(n),this._setValueOrValues(i.parent,i.attribute,o,!1),a.newValue=this.getValues(i.parent,i.attribute)}else this._setValueOrValues(i.parent,i.attribute,n,!1),a.newValue=n}else n[this._rootItemPropName]=!0,this._arrayOfTopLevelItems.push(n);this._pending._newItems[s]=n;for(var _ in t){if(_===this._storeRefPropName||_===this._itemNumPropName)throw new Error("encountered bug in ItemFileWriteStore.newItem");var f=t[_];if(e.isArray(f)||(f=[f]),n[_]=f,this.referenceIntegrity)for(var l=0;l<f.length;l++){var m=f[l];this.isItem(m)&&this._addReferenceToMap(m,n,_)}}return this.onNew(n,a),n},_removeArrayElement:function(e,t){var s=i.indexOf(e,t);return-1!=s&&(e.splice(s,1),!0)},deleteItem:function(t){this._assert(!this._saveInProgress),this._assertIsItem(t);var s=t[this._itemNumPropName],r=this.getIdentity(t);if(this.referenceIntegrity){var n=this.getAttributes(t);t[this._reverseRefMap]&&(t["backup_"+this._reverseRefMap]=e.clone(t[this._reverseRefMap])),i.forEach(n,function(e){i.forEach(this.getValues(t,e),function(i){this.isItem(i)&&(t["backupRefs_"+this._reverseRefMap]||(t["backupRefs_"+this._reverseRefMap]=[]),t["backupRefs_"+this._reverseRefMap].push({id:this.getIdentity(i),attr:e}),this._removeReferenceFromMap(i,t,e))},this)},this);var a=t[this._reverseRefMap];if(a)for(var h in a){var o=null;if(o=this._itemsByIdentity?this._itemsByIdentity[h]:this._arrayOfAllItems[h])for(var _ in a[h]){var f=this.getValues(o,_)||[],l=i.filter(f,function(e){return!(this.isItem(e)&&this.getIdentity(e)==r)},this);this._removeReferenceFromMap(t,o,_),l.length<f.length&&this._setValueOrValues(o,_,l,!0)}}}return this._arrayOfAllItems[s]=null,t[this._storeRefPropName]=null,this._itemsByIdentity&&delete this._itemsByIdentity[r],this._pending._deletedItems[r]=t,t[this._rootItemPropName]&&this._removeArrayElement(this._arrayOfTopLevelItems,t),this.onDelete(t),!0},setValue:function(e,t,i){return this._setValueOrValues(e,t,i,!0)},setValues:function(e,t,i){return this._setValueOrValues(e,t,i,!0)},unsetAttribute:function(e,t){return this._setValueOrValues(e,t,[],!0)},_setValueOrValues:function(t,s,r,n){this._assert(!this._saveInProgress),this._assertIsItem(t),this._assert(e.isString(s)),this._assert(void 0!==r);var a=this._getIdentifierAttribute();if(s==a)throw new Error("ItemFileWriteStore does not have support for changing the value of an item's identifier.");var h=this._getValueOrValues(t,s),o=this.getIdentity(t);if(!this._pending._modifiedItems[o]){var _={};for(var f in t)f===this._storeRefPropName||f===this._itemNumPropName||f===this._rootItemPropName?_[f]=t[f]:f===this._reverseRefMap?_[f]=e.clone(t[f]):_[f]=t[f].slice(0,t[f].length);this._pending._modifiedItems[o]=_}var l=!1;if(e.isArray(r)&&0===r.length){if(l=delete t[s],r=void 0,this.referenceIntegrity&&h){var m=h;e.isArray(m)||(m=[m]);for(var d=0;d<m.length;d++){var u=m[d];this.isItem(u)&&this._removeReferenceFromMap(u,t,s)}}}else{var p;if(p=e.isArray(r)?r.slice(0,r.length):[r],this.referenceIntegrity)if(h){var m=h;e.isArray(m)||(m=[m]);var v={};i.forEach(m,function(e){if(this.isItem(e)){var t=this.getIdentity(e);v[t.toString()]=!0}},this),i.forEach(p,function(e){if(this.isItem(e)){var i=this.getIdentity(e);v[i.toString()]?delete v[i.toString()]:this._addReferenceToMap(e,t,s)}},this);for(var I in v){var g;g=this._itemsByIdentity?this._itemsByIdentity[I]:this._arrayOfAllItems[I],this._removeReferenceFromMap(g,t,s)}}else for(var d=0;d<p.length;d++){var u=p[d];this.isItem(u)&&this._addReferenceToMap(u,t,s)}t[s]=p,l=!0}return n&&this.onSet(t,s,h,r),l},_addReferenceToMap:function(e,t,i){var s=this.getIdentity(t),r=e[this._reverseRefMap];r||(r=e[this._reverseRefMap]={});var n=r[s];n||(n=r[s]={}),n[i]=!0},_removeReferenceFromMap:function(e,t,i){var s,r=this.getIdentity(t),n=e[this._reverseRefMap];if(n){for(s in n)s==r&&(delete n[s][i],this._isEmpty(n[s])&&delete n[s]);this._isEmpty(n)&&delete e[this._reverseRefMap]}},_dumpReferenceMap:function(){var e;for(e=0;e<this._arrayOfAllItems.length;e++){var t=this._arrayOfAllItems[e];t&&t[this._reverseRefMap]&&console.log("Item: ["+this.getIdentity(t)+"] is referenced by: "+s.toJson(t[this._reverseRefMap]))}},_getValueOrValues:function(e,t){var i=void 0;if(this.hasAttribute(e,t)){var s=this.getValues(e,t);i=1==s.length?s[0]:s}return i},_flatten:function(t){if(this.isItem(t))return{_reference:this.getIdentity(t)};if("object"==typeof t)for(var i in this._datatypeMap){var s=this._datatypeMap[i];if(e.isObject(s)&&!e.isFunction(s)){if(t instanceof s.type){if(!s.serialize)throw new Error("ItemFileWriteStore:  No serializer defined for type mapping: ["+i+"]");return{_type:i,_value:s.serialize(t)}}}else if(t instanceof s)return{_type:i,_value:t.toString()}}return t},_getNewFileContentString:function(){var e={},t=this._getIdentifierAttribute();t!==Number&&(e.identifier=t),this._labelAttr&&(e.label=this._labelAttr),e.items=[];for(var i=0;i<this._arrayOfAllItems.length;++i){var r=this._arrayOfAllItems[i];if(null!==r){var n={};for(var a in r)if(a!==this._storeRefPropName&&a!==this._itemNumPropName&&a!==this._reverseRefMap&&a!==this._rootItemPropName){var h=this.getValues(r,a);if(1==h.length)n[a]=this._flatten(h[0]);else for(var o=[],_=0;_<h.length;++_)o.push(this._flatten(h[_])),n[a]=o}e.items.push(n)}}return s.toJson(e,!0)},_isEmpty:function(t){var i=!0;if(e.isObject(t)){var s;for(s in t){i=!1;break}}else e.isArray(t)&&t.length>0&&(i=!1);return i},save:function(e){this._assert(!this._saveInProgress),this._saveInProgress=!0;var t=this,i=function(){if(t._pending={_newItems:{},_modifiedItems:{},_deletedItems:{}},t._saveInProgress=!1,e&&e.onComplete){var i=e.scope||r.global;e.onComplete.call(i)}},s=function(i){if(t._saveInProgress=!1,e&&e.onError){var s=e.scope||r.global;e.onError.call(s,i)}};if(this._saveEverything){var n=this._getNewFileContentString();this._saveEverything(i,s,n)}this._saveCustom&&this._saveCustom(i,s),this._saveEverything||this._saveCustom||i()},revert:function(){this._assert(!this._saveInProgress);var t;for(t in this._pending._modifiedItems){var s=this._pending._modifiedItems[t],r=null;r=this._itemsByIdentity?this._itemsByIdentity[t]:this._arrayOfAllItems[t],s[this._storeRefPropName]=this;for(var n in r)delete r[n];e.mixin(r,s)}var a;for(t in this._pending._deletedItems){a=this._pending._deletedItems[t],a[this._storeRefPropName]=this;var h=a[this._itemNumPropName];a["backup_"+this._reverseRefMap]&&(a[this._reverseRefMap]=a["backup_"+this._reverseRefMap],delete a["backup_"+this._reverseRefMap]),this._arrayOfAllItems[h]=a,this._itemsByIdentity&&(this._itemsByIdentity[t]=a),a[this._rootItemPropName]&&this._arrayOfTopLevelItems.push(a)}for(t in this._pending._deletedItems)a=this._pending._deletedItems[t],a["backupRefs_"+this._reverseRefMap]&&(i.forEach(a["backupRefs_"+this._reverseRefMap],function(e){var t;t=this._itemsByIdentity?this._itemsByIdentity[e.id]:this._arrayOfAllItems[e.id],this._addReferenceToMap(t,a,e.attr)},this),delete a["backupRefs_"+this._reverseRefMap]);for(t in this._pending._newItems){var o=this._pending._newItems[t];o[this._storeRefPropName]=null,this._arrayOfAllItems[o[this._itemNumPropName]]=null,o[this._rootItemPropName]&&this._removeArrayElement(this._arrayOfTopLevelItems,o),this._itemsByIdentity&&delete this._itemsByIdentity[t]}return this._pending={_newItems:{},_modifiedItems:{},_deletedItems:{}},!0},isDirty:function(e){if(e){var t=this.getIdentity(e);return new Boolean(this._pending._newItems[t]||this._pending._modifiedItems[t]||this._pending._deletedItems[t]).valueOf()}return!this._isEmpty(this._pending._newItems)||!this._isEmpty(this._pending._modifiedItems)||!this._isEmpty(this._pending._deletedItems)},onSet:function(e,t,i,s){},onNew:function(e,t){},onDelete:function(e){},close:function(e){if(this.clearOnClose){if(this.isDirty())throw new Error("dojo.data.ItemFileWriteStore: There are unsaved changes present in the store.  Please save or revert the changes before invoking close.");this.inherited(arguments)}}})});