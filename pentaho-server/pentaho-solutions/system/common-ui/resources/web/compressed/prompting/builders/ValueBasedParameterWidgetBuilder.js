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

define(["./ParameterWidgetBuilderBase","common-ui/jquery-clean"],function(e,a){return e.extend({_getCDFValuesArray:function(e){var r=[];return a.each(e.values,function(e,a){r.push([a.value,a.label])}),r},build:function(e){var r=this.base(e);return a.extend(r,{valueAsId:!1,valuesArray:this._getCDFValuesArray(e.param)})}})});