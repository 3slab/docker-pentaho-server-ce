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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","dijit/MenuItem","dojo/text!pentaho/common/MenuItem.html","dojo/dom-class"],function(e,t,o,i,d,n,s,a){return e("pentaho.common.MenuItem",[n],{baseClass:"pentaho-menuitem",templateString:s,_setSelected:function(e){this.disabled||a.toggle(this.domNode,"pentaho-menuitem-hover",e)},setDisabled:function(e){this.set("disabled",e),a.toggle(this.domNode,"pentaho-menuitem-disabled",e)},_setDisabledAttr:function(e){this.focusNode.setAttribute("aria-disabled",e?"true":"false"),this._set("disabled",e),a.toggle(this.domNode,"pentaho-menuitem-disabled",e)},_onHover:function(){this.getParent().onItemHover(this),this.disabled||a.add(this.domNode,"pentaho-menuitem-hover")},_onUnhover:function(){this.getParent().onItemUnhover(this),this._set("hovering",!1),this.disabled||a.remove(this.domNode,"pentaho-menuitem-hover")}})});