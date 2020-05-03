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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/query","pentaho/common/Menu","pentaho/common/ListItem","pentaho/common/MenuSeparator","pentaho/common/Select","dojo/text!pentaho/common/ListBox.html","dojo/dom-class","dojo/_base/array","dojo/_base/lang"],function(e,t,n,i,o,s,d,h,a,l,r,u,c,m,p){return e("pentaho.common.ListBox",[l,n,i],{templateString:r,width:"150px",height:"75px",selectedIndex:-1,onchange:null,ignoreChange:!1,loadChildrenOnOpen:!0,postCreate:function(){this.inherited(arguments),this.loadDropDown(function(){}),u.remove(this.outerNode,"dijitSelect"),u.remove(this.menuNode.domNode,"pentaho-listbox"),u.remove(this.menuNode.domNode,"pentaho-menu-outer"),this.dropDown._onBlur=function(){}},_fillContent:function(){this.inherited(arguments),this.value={}},_addOptionItem:function(e){this.menuNode&&this.menuNode.addChild(this._getMenuItemForOption(e))},_loadChildren:function(e){this.ignoreChange=!0,this.inherited(arguments)},addOption:function(e){this._addOptionItem(e)},setOptions:function(e){this.clearOptions();for(var t=0;t<e.length;t++)this.addOption(e[t])},clearOptions:function(){c.forEach(this.menuNode.getChildren(),function(e){e.destroyRecursive()})},_getMenuItemForOption:function(e){if(e.value||e.label){var t=m.hitch(this,"_setValueAttr",e),n=new h({option:e,label:e.text||e.value,value:e.value,onMouseDown:t,onKeyUp:t,disabled:e.disabled||!1});return n.focusNode.setAttribute("role","listitem"),n}return new a},set:function(e,t){"value"==e&&(this.ignoreChange=!0),this.inherited(arguments)},_getValueAttr:function(){return this.inherited(arguments),this.value?this.value.value:null},_setValueAttr:function(e){var t=e.value?e.value:e,n=this.menuNode.getChildren(),i=this.selectedIndex;this.selectedIndex=-1;for(var o=0;o<n.length;o++){var s=n[o];s.value==t?(s.set("selected",!0),s._setSelected(!0),this.multiple||(this.selectedIndex=o,this.value=s)):this.multiple||(s.set("selected",!1),s._setSelected(!1))}this.selectedIndex==i||this.ignoreChange||this.onChange&&this.onChange(),this.ignoreChange=!1},_updateSelection:function(){this.inherited(arguments);var e=this.value;!e instanceof Array&&(e=[e]),e&&e[0]&&c.forEach(this._getChildren(),function(t){c.some(e,function(e){return t.option&&e===t.option.value});u.remove(t.domNode,this.baseClass+"SelectedOption"),u.add(t.domNode,"pentaho-listitem-selected")},this)}})});