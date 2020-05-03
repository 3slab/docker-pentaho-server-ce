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

define(["./builders/PromptPanelBuilder","./builders/ParameterGroupPanelBuilder","./builders/ParameterPanelBuilder","./builders/SubmitPanelBuilder","./builders/SubmitComponentBuilder","./builders/LabelBuilder","./builders/ErrorLabelBuilder","./builders/DropDownBuilder","./builders/RadioBuilder","./builders/CheckBuilder","./builders/MultiButtonBuilder","./builders/ListBuilder","./builders/DateInputBuilder","./builders/ExternalInputBuilder","./builders/TextAreaBuilder","./builders/TextInputBuilder","./builders/StaticAutocompleteBoxBuilder"],function(e,r,t,i,l,u,n,a,d,p,o,b,s,m,w,B,x){return{mapping:{"prompt-panel":new e,"group-panel":new r,"parameter-panel":new t,"submit-panel":new i,submit:new l,label:new u,"error-label":new n,dropdown:new a,radio:new d,checkbox:new p,togglebutton:new o,list:new b,datepicker:new s,filebrowser:new m,"external-input":new m,"multi-line":new w,autocompletebox:new x,textbox:new B},_findBuilderFor:function(e,r){return r=r||(e.param&&e.param.attributes?e.param.attributes["parameter-render-type"]:null),this.mapping.hasOwnProperty(r)?"textbox"==r&&e.param.list&&(r="autocompletebox"):r=e.param.list?"autocompletebox":"textbox",this.mapping[r]},build:function(e,r){var t=this._findBuilderFor(e,r).build(e);return t.parameter&&t.param&&(t.postChange=function(){e.promptPanel.parameterChanged(this.param,this.parameter,this.getValue())}.bind(t)),t}}});