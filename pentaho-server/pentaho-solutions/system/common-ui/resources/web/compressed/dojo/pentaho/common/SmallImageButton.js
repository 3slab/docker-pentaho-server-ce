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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/query","dojo/text!pentaho/common/SmallImageButton.html","dojo/dom-class","dojo/_base/lang"],function(t,i,e,o,s,n,a,h,d){return t("pentaho.common.SmallImageButton",[i,e,o],{title:"",baseClass:"",_imageSrc:require.toUrl("pentaho/common/images/spacer.gif"),callback:function(){},disabled:!1,onClick:function(t){this.callback&&!this.get("disabled")&&this.callback(t)},templateString:a,mouseOver:function(){this.disabled||h.add(this.buttonImg,"pentaho-imagebutton-hover")},mouseOut:function(){this.disabled||h.remove(this.buttonImg,"pentaho-imagebutton-hover")},set:function(t,i){this.inherited(arguments),"disabled"==t&&(this.disabled=i,h.toggle(this.buttonImg,"pentaho-imagebutton-disabled",this.disabled),this.disabled?this.buttonImg.title="":this.buttonImg.title=this.title)},postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.buttonImg.className=this.baseClass,h.toggle(this.buttonImg,"pentaho-imagebutton-disabled",this.disabled),s(this.buttonImg,"click",d.hitch(this,this.onClick)),s(this.buttonImg,"mouseover",d.hitch(this,this.mouseOver)),s(this.buttonImg,"mouseout",d.hitch(this,this.mouseOut))}})});