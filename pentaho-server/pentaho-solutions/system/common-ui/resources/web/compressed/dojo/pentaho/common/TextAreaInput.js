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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/query","dojo/text!pentaho/common/TextAreaInput.html","dojo/_base/lang","pentaho/common/Messages","dijit/form/Textarea"],function(t,e,n,i,o,a,l,r,u,h){return t("pentaho.common.TextAreaInput",[e,n,i],{getLocaleString:pentaho.common.Messages.getString,templateString:l,widgetsInTemplate:!0,width:null,height:null,okButtonLabel:null,cancelButtonLabel:null,text:null,titleText:null,model:null,attributeMap:r.delegate(e.prototype.attributeMap,{width:{node:"textArea",type:"attribute",attribute:"width"},height:{node:"textArea",type:"attribute",attribute:"height"},okButtonLabel:{node:"okayButton",type:"innerHTML"},cancelButtonLabel:{node:"cancelButton",type:"innerHTML"},titleText:{node:"titleNode",type:"innerHTML"},text:{node:"textArea",type:"attribute",attribute:"value"}}),constructor:function(){this.inherited(arguments),this.okButtonLabel=this.getLocaleString("Ok"),this.cancelButtonLabel=this.getLocaleString("Cancel")},postCreate:function(){this.container.titleNode=""},_widthSetter:function(t){this.width=t,this.container.style.width=t,this.textArea.style.width=t},_heightSetter:function(t){this.height=t,this.textArea.style.height=t},_textGetter:function(){return this.text=this.textArea.value,this.text},onCancel:function(){},onSubmit:function(){}})});