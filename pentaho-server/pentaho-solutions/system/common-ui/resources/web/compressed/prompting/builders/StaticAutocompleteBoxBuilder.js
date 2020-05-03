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

define(["common-ui/util/formatting","./ValueBasedParameterWidgetBuilder","../components/StaticAutocompleteBoxComponent","common-ui/jquery-clean"],function(t,e,r,a){return e.extend({build:function(e){var o=t.createFormatter(e.param),n=t.createDataTransportFormatter(e.param),m=this.base(e);return m=a.extend(m,{type:"StaticAutocompleteBoxComponent",valuesArray:function(t){return a.map(t,function(t){var e=o?o.format(n.parse(t[0])):t[0];return{value:e,label:(o?o.format(n.parse(t[1])):t[1])||e}})}(m.valuesArray),transportFormatter:n,formatter:o}),new r(m)}})});