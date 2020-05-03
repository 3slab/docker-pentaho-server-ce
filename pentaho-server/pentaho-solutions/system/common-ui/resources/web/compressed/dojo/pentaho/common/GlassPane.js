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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","dojo/dom-construct","dojo/dom-style"],function(e,s,a,i,n,o,t){return e("pentaho.common.GlassPane",[s],{_glassPaneDiv:null,create:function(e,s){this.inherited(arguments),this._glassPaneDiv=o.create("div",{id:"glasspane",className:"glasspane"}),document.body.appendChild(this._glassPaneDiv)},show:function(){t.set(this._glassPaneDiv,"display","block")},hide:function(){t.set(this._glassPaneDiv,"display","none")}})});