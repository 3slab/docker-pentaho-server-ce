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

define(["cdf/components/BaseComponent","dojo/_base/lang","dijit/registry","common-ui/jquery-clean"],function(t,e,a,n){return t.extend({clear:function(){this.dijitId&&(this.onChangeHandle&&this.onChangeHandle.remove(),a.byId(this.dijitId).destroyRecursive(),delete this.dijitId)},update:function(){var t=this,a=t.dashboard.getParameterValue(this.parameter),o=n("#"+this.htmlObject).empty(),i=this.htmlObject+"-textButtonCombo",r='<div id="'+i+'"></div>';o.append(r);var s=new pentaho.common.TextButtonCombo({},i);s.set("textPlaceHolder","file path..."),s.set("value",a);var d=this.param.attributes["button-label"];null!=d&&""!=d&&s.set("buttonLabel",d),s.onClickCallback=e.hitch(this,function(e){try{var a=t.dashboard.getComponentByName(this.name),n=function(e){s.set("text",e),t.dashboard.processChange(this.name)};a.param.values=[e],a.promptPanel.getExternalValueForParam(a.param,n)}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}),this.dijitId=i,s.onChangeCallback=e.hitch(this,function(e){t.dashboard.processChange(this.name)})},getValue:function(){return a.byId(this.dijitId).get("value")}})});