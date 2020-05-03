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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","dijit/MenuItem","dojo/text!pentaho/common/ListItem.html","dojo/dom-class"],function(e,t,o,i,d,s,l,a){return e("pentaho.common.ListItem",[s],{baseClass:"pentaho-listitem",templateString:l,selected:!1,_setSelected:function(e){this.disabled||(a.toggle(this.domNode,"pentaho-listitem-selected",e),a.remove(this.domNode,"pentaho-listitem-hover"),this.selected=e)},setDisabled:function(e){this.set("disabled",e),a.toggle(this.domNode,"pentaho-listitem-disabled",e)},_setDisabledAttr:function(e){this.focusNode.setAttribute("aria-disabled",e?"true":"false"),this._set("disabled",e),a.toggle(this.domNode,"pentaho-listitem-disabled",e)},_onHover:function(){this.disabled||this.selected?this.selected&&a.add(this.domNode,"pentaho-listitem-selected"):a.add(this.domNode,"pentaho-listitem-hover")},_onUnhover:function(){a.remove(this.domNode,"pentaho-listitem-hover")}})});