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

define(["cdf/components/SelectComponent","cdf/components/SelectMultiComponent","./ValueBasedParameterWidgetBuilder","common-ui/jquery-clean"],function(e,t,n,i){return n.extend({build:function(n){var m=this.base(n);return i.extend(m,{type:n.param.multiSelect?"SelectMultiComponent":"SelectComponent",size:n.param.attributes["parameter-visible-items"]||5,changeMode:n.param.multiSelect?"timeout-focus":"immediate",preExecution:function(){this.defaultIfEmpty=!1}}),n.param.multiSelect?new t(m):new e(m)}})});