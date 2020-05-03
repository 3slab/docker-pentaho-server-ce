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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/query","dojo/dom-style","dijit/layout/_LayoutWidget","dijit/layout/ContentPane","dojo/text!pentaho/common/DisableablePanel.html"],function(i,e,t,d,n,a,o,s,l,h){return i("pentaho.common.DisableablePanel",[l,s,t,d],{templateString:h,width:"150",disabled:!1,postCreate:function(){this.inherited(arguments),this.disabled&&this.disable()},disable:function(){o.set(this.disabledPane,{display:"block",height:"100%",width:"100%"}),a("input",this.containerNode).forEach(function(i){i.disabled=!0}),this.disabled=!0},enable:function(){o.set(this.disabledPane,{display:"none"}),a("input",this.containerNode).forEach(function(i){i.disabled=!1}),this.disabled=!1}})});