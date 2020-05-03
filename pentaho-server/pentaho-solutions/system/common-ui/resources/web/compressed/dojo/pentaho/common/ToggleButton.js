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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!pentaho/common/ToggleButton.html"],function(t,e,o,n){return t("pentaho.common.ToggleButton",[e,o],{title:"",label:"button",width:"80px",templateString:n,checked:!1,hover:!1,disabled:!1,onChange:null,set:function(t,e){"label"==t?this.innerNode.innerHTML=e:"checked"==t?this._setChecked(e):"disabled"==t&&this._setDisabled(e)},_setChecked:function(t){this.checked=t,this.hover&&this._onHover()},_setDisabled:function(t){this.disabled=t,this.disabled?this.checked?this.outerNode.className="pentaho-toggle-button pentaho-toggle-button-down pentaho-toggle-button-down-disabled":this.outerNode.className="pentaho-toggle-button pentaho-toggle-button-up pentaho-toggle-button-up-disabled":this.hover?this._onHover():this._onUnhover()},_onHover:function(){this.hover=!0,this.disabled||(this.checked?this.outerNode.className="pentaho-toggle-button pentaho-toggle-button-down pentaho-toggle-button-down-hovering":this.outerNode.className="pentaho-toggle-button pentaho-toggle-button-up pentaho-toggle-button-up-hovering")},_onUnhover:function(){this.hover=!1,this.disabled||(this.checked?this.outerNode.className="pentaho-toggle-button pentaho-toggle-button-down":this.outerNode.className="pentaho-toggle-button pentaho-toggle-button-up")},_onClick:function(){this.disabled||(this._setChecked(!this.checked),this.onChange&&this.onChange(this.checked))}})});