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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","pentaho/common/SmallImageButton","dojo/text!pentaho/common/SectionHeader.html","dojo/_base/lang"],function(t,e,i,n,o,s,h,a){return t("pentaho.common.SectionHeader",[e,i],{title:"",header:"header",buttonTypes:"",headerButtons:[],id:"",buttonInfo:[],height:"20px",templateString:h,postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){if(this.inherited(arguments),this.buttonTypes&&this.buttonTypes.length>0){for(var t=this.buttonTypes.split(","),e=[],i=0;i<t.length;i++){var n={baseClass:t[i],id:this.id+"-button-"+i,title:"",callback:a.hitch(this,this.buttonClick,i)};e.push(n)}this.setButtons(e)}},setButtons:function(t){this.buttonInfo=t,this.headerButtons=[];for(var e=0;e<t.length;e++){var i=new s(t[e]);this.headerButtons.push(i);this.table.rows[0].insertCell(-1).appendChild(i.domNode)}},buttonClick:function(t){this.callbacks&&t<this.callbacks.length&&this.callbacks[t](this.headerButtons[t].id)},setHeader:function(t){this.header=t,this.headerNode.innerHTML=t}})});