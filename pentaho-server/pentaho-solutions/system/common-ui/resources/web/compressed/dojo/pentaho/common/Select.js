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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/query","dijit/form/Select","pentaho/common/Menu","pentaho/common/ListItem","pentaho/common/MenuSeparator","dojo/dom-class","dojo/dom-geometry","dojo/text!pentaho/common/Select.html","dojo/_base/lang","dojo/dom-construct","dojo/_base/event"],function(e,t,o,i,n,s,d,a,l,r,h,m,c,u,p,b){var j=e("pentaho.common.Select",[a,o,i],{buildRendering:function(){this.inherited(arguments);var e=this.menuTableNode=this.domNode,t=this.domNode=p.create("div",{style:{overflowX:"hidden",overflowY:"scroll"}});e.parentNode&&e.parentNode.replaceChild(t,e),h.remove(e,"dijitMenuTable"),t.className=e.className+" dijitSelectMenu",t.className="pentaho-listbox",e.className="dijitReset dijitMenuTable",e.setAttribute("role","listbox"),t.setAttribute("role","presentation"),t.appendChild(e)},postCreate:function(){this.inherited(arguments),this.own(n(this.domNode,"mousemove",b.stop))},resize:function(e){e&&(m.setMarginBox(this.domNode,e),"w"in e&&(this.menuTableNode.style.width="100%"))}});return e([dijit.form.Select],{templateString:c,_setDisplay:function(e){var t=e||this.emptyLabel;this.containerNode.innerHTML='<span class="dijitReset dijitInline label">'+t+"</span>",this.focusNode.setAttribute("aria-valuetext",t)},_fillContent:function(){if(this.inherited(arguments),this.options.length&&!this.value&&this.srcNodeRef){var e=this.srcNodeRef.selectedIndex||0;this.value=this.options[e>=0?e:0].value}this.dropDown.destroy(),this.dropDown=new j({id:this.id+"_menu"}),h.add(this.dropDown.domNode,"pentaho-listbox")},_getMenuItemForOption:function(e){if(e.value||e.label){var t=u.hitch(this,"_setValueAttr",e),o=new l({option:e,label:e.label||this.emptyLabel,onClick:t,disabled:e.disabled||!1});return o.focusNode.setAttribute("role","listitem"),o}return new pentaho.common.MenuSeparator}})});