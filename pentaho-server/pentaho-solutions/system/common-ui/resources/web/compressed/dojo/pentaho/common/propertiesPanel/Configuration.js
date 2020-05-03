/*!
 * Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

define(["dojo/_base/declare","dojo/Stateful","dojo/_base/array","dojo/Evented","dojo/_base/lang","dojo/aspect"],function(e,t,i,s,n,o){var r=Object.prototype.hasOwnProperty,a=e("pentaho.common.propertiesPanel.Configuration",[t,s],{constructor:function(e){this.items=[],this.itemsById={},this.rawConfiguration=e,e&&e.properties&&i.forEach(e.properties,this.initializeItem,this)},initializeItem:function(e){var t=a.registeredTypes[e.ui.type];if(!t)throw"No Properties Panel UI implementation found for "+e.ui.type;var i=new t(e);i.postCreate(),o.after(i,"onModelEvent",n.hitch(this,function(e,t){this.onModelEvent(i,e,t)}),!0),i.watch(n.hitch(this,function(e,t,s){this.onModelEvent(i,e,{prevVal:t,newVal:s})})),this.items.push(i),this.itemsById[i.id]=i},onModelEvent:function(e,t,i){},byId:function(e){if(r.call(this.itemsById,e))return this.itemsById[e]}});a.registeredTypes={};var l=pentaho.common.propertiesPanel,h=e("pentaho.common.propertiesPanel.Property",[t,s],{value:null,constructor:function(e){this.item=e,n.mixin(this,e),null==this.value&&this.values&&this.values.length&&(this.value=this.values[0])},postCreate:function(){},setValue:function(e){this.value=e},onModelEvent:function(e,t){}});return e("pentaho.common.propertiesPanel.GemBar",[h],{gems:null,_value:null,selectedGem:null,allowMultiple:!0,constructor:function(e){},postCreate:function(){var e=this.gems;this.gems=[],i.forEach(e,this.initializeGem,this)},initializeGem:function(e){var t=new a.registeredTypes.gem(e);t.postCreate(),this._value=null,this.gems.push(t)},createGemFromNode:function(e){var t=a.registeredTypes.gem,i={id:"gem-"+e.id,value:e.innerHTML.replace(/'/g,"&#39;"),gemBar:this,sourceNode:e,dndType:e.getAttribute("dndType")};return t.create?t.create(i):new t(i)},createGemByFormula:function(e,t){var i=a.registeredTypes.gem,s={formula:e,value:t,gemBar:this};return i.create?i.create(s):new i(s)},remove:function(e){this._value=null,this.gems.splice(this.gems.indexOf(e),1),this.set("gems",this.gems),this.onModelEvent("removedGem",{gem:e})},add:function(e){this._value=null,this.gems.push(e),this.set("gems",this.gems),this.onModelEvent("insertAt",{gem:e,idx:this.gems.length,oldIdx:-1})},reorder:function(){this._value=null,this.set("gems",this.gems),this.onModelEvent("reorderedGems",{})},insertAt:function(e,t,s){this._value=null;var n=s=i.indexOf(this.gems,e);this.gems.splice(t,0,e),n>-1&&(n>=t&&n++,this.gems.splice(n,1)),n>-1&&n<t&&t--,this.onModelEvent("insertAt",{gem:e,idx:t,oldIdx:s})}}),a.registeredTypes.gemBar=l.GemBar,a.registeredTypes.gem=h,a.registeredTypes.combo=h,a.registeredTypes.slider=h,a.registeredTypes.textbox=h,a.registeredTypes.checkbox=h,a.registeredTypes.button=h,a});