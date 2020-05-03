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

define(["cdf/components/MultiButtonComponent","./ValueBasedParameterWidgetBuilder","common-ui/jquery-clean"],function(t,e,n){return e.extend({build:function(e){var a=this.base(e);return n.extend(a,{type:"MultiButtonComponent",isMultiple:e.param.multiSelect,verticalOrientation:"vertical"===e.param.attributes["parameter-layout"],expression:function(){return this.dashboard.getParameterValue(this.parameter)},postExecution:function(){n("#"+this.htmlObject).addClass("pentaho-toggle-button-container")}}),new t(a)}})});