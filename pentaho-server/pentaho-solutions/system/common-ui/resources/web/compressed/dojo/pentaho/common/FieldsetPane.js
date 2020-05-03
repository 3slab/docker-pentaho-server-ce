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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/query","dojo/dom-style","pentaho/common/FieldsetPane","pentaho/common/Messages","pentaho/common/DisableablePanel","dijit/layout/_LayoutWidget","dijit/layout/ContentPane","pentaho/common/Messages","dojo/text!pentaho/common/FieldsetPane.html"],function(t,e,i,o,n,a,s,l,d,h,m,c,d,r){return t("pentaho.common.FieldsetPane",[h,i,o],{templateString:r,title:"title",width:"100%",getLocalString:pentaho.common.Messages.getString,postCreate:function(){this.inherited(arguments),this._localize()},_localize:function(){var t=this.getLocalString(this.title);t!=this.title&&this.setTitle(t)},setTitle:function(t){this.title=t,this.titleNode.innerHTML=t},layout:function(){var t=this._borderBox,e=this.containerNode,i=this.titleNode;s.set(e,{height:t.h-i.offsetHeight-20+"px"})}})});