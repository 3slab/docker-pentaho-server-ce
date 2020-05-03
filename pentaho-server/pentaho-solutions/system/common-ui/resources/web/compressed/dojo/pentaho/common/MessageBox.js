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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","pentaho/common/button","pentaho/common/Dialog","dojo/dom-class","dojo/text!pentaho/common/MessageBox.html"],function(e,n,o,t,i,s,r,a,c){return e("pentaho.common.MessageBox",[r],{buttons:["btn1","btn2","btn3"],messageType:null,setTitle:function(e){this.titleNode.innerHTML=e},postCreate:function(){this.inherited(arguments),this.setMessageType(this.messageType)},setMessageType:function(e){this.messageType=e,null!=e?"ERR"==e||"ERROR"==e?a.replace(this.typeIcon,"error-large-icon","warning-large-icon info-large-icon"):"WARN"==e||"WARNING"==e?a.replace(this.typeIcon,"warning-large-icon","error-large-icon info-large-icon"):a.replace(this.typeIcon,"info-large-icon","error-large-icon warning-large-icon"):a.remove(this.typeIcon,"error-large-icon info-large-icon warning-large-icon")},setMessage:function(e){this.messagelbl.innerHTML=e},setButtons:function(e){this.buttons=e;for(var n=0;n<3;n++){var o=i("button"+n,this.popup.domNode);o&&(n<this.buttons.length?(o.innerHTML=this.buttons[n],a.remove(o,"hidden")):a.add(o,"hidden"))}},templateString:c})});