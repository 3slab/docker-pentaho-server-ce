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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","dojo/_base/event","dojo/_base/html","dojo/dom-style","dojo/dom-class"],function(t,o,n,e,i,s,a,r,c){return t("pentaho.common.FilterIndicator",[o,n],{templateString:'<div data-dojo-attach-point="containerNode" class="hidden cursorPointer filterToolbarIndicator"></div>',backgroundClassPrefix:"filterIndicatorBackground_",backgroundClassOverflow:"9_plus",min:1,max:9,currentBackgroundClass:void 0,toolbarButton:void 0,anchorElement:void 0,defaultOffsets:{top:0,left:0,bottom:0,right:0},offsets:this.defaultOffsets,configure:function(t,o){this.setToolbarButton(t),this.setAnchorElement(t.domNode),this.setOffsets(o),this._connectToToolbarButton(),this._updatePosition()},setToolbarButton:function(t){this.toolbarButton=t},setOffsets:function(t){this.offsets=t||defaultOffsets},setAnchorElement:function(t){this.anchorElement=t},_connectToToolbarButton:function(){e(this.containerNode,"click",this,function(t){this.toolbarButton._onButtonClick(t),t.stop(t)}),e(this.containerNode,"mouseover",this,function(){this.toolbarButton._set("hovering",!0)}),e(this.containerNode,"mouseout",this,function(){this.toolbarButton._set("hovering",!1),this.toolbarButton._set("active",!1)}),e(this.containerNode,"mousedown",this,function(){this.toolbarButton._set("hovering",!0),this.toolbarButton._set("active",!0)}),e(this.containerNode,"mouseup",this,function(){this.toolbarButton._set("hovering",!0),this.toolbarButton._set("active",!1)})},_updatePosition:function(){if(!this.anchorElement)return void this.hide();var t=a.coords(this.anchorElement),o=t.x+this.offsets.left,n=t.y+this.offsets.top;r.set(this.containerNode,"left",o+"px"),r.set(this.containerNode,"top",n+"px")},update:function(t){!t||t<this.min?this.hide():t<=this.max?this.changeBackground(this.backgroundClassPrefix+t):this.changeBackground(this.backgroundClassPrefix+this.backgroundClassOverflow),this._updatePosition()},show:function(){c.remove(this.containerNode,"hidden")},hide:function(){c.add(this.containerNode,"hidden")},changeBackground:function(t){this.currentBackgroundClass!==t&&(c.add(this.containerNode,t),this.currentBackgroundClass&&c.remove(this.containerNode,this.currentBackgroundClass),this.currentBackgroundClass=t),this.show()}})});