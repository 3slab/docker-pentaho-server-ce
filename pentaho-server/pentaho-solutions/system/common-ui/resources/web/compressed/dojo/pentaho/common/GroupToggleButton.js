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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","dojo/topic","pentaho/common/ToggleButton","dojo/dom-class","dojo/_base/lang"],function(t,i,n,e,o,s,h,r,u){return t("pentaho.common.GroupToggleButton",[h],{groupName:"group",first:!1,last:!1,orientation:"horizontal",postCreate:function(){this.inherited(arguments),this.init()},postMixInProperties:function(){this.inherited(arguments),this.unselectChannel="/ButtonGroup/"+this.groupName,this.subscription=s.subscribe(this.unselectChannel,u.hitch(this,"_unselect"))},init:function(){this._applyGroupStyling()},_applyGroupStyling:function(){null!=this.orientation&&(r.add(this.outerNode,"pentaho-toggle-button-"+this.orientation),this.first&&r.add(this.outerNode,"pentaho-toggle-button-"+this.orientation+"-first"),this.last&&r.add(this.outerNode,"pentaho-toggle-button-"+this.orientation+"-last"))},_setDisabled:function(t){this.inherited(arguments),this._applyGroupStyling()},_onHover:function(){this.inherited(arguments),this._applyGroupStyling()},_onUnhover:function(){this.inherited(arguments),this._applyGroupStyling()},_onClick:function(){this.disabled||this.checked||(this._setChecked(!this.checked),this.onChange&&this.onChange(this.checked),s.publish(this.unselectChannel,this))},_unselect:function(t){if(t!==this&&this.checked)try{this.set("checked",!1),this._onUnhover()}catch(t){}},uninitialize:function(){this.inherited(arguments),this.subscription&&this.subscription.remove()}})});