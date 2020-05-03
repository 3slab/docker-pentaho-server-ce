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

define(["cdf/dashboard/Utils","cdf/components/TextComponent","./ParameterWidgetBuilderBase","common-ui/jquery-clean"],function(e,t,n,a){return n.extend({build:function(n){var r=this.base(n),m=r.name+"-label",o=e.escapeHtml(n.param.attributes.label||n.param.name);return a.extend(r,{promptType:"label",name:m,htmlObject:m,type:"TextComponent",expression:function(){return o}}),delete r.parameter,new t(r)}})});