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

define(["cdf/components/BaseComponent","cdf/dashboard/Utils","common-ui/jquery-clean"],function(t,e,a){return t.extend({update:function(){var t=this,i=this.dashboard.getParameterValue(this.parameter),n='<textarea id="'+this.htmlObject+'-input">';void 0!=i&&(n+=e.escapeHtml(i)),n+="</textarea>",a("#"+this.htmlObject).html(n);var s=a("#"+this.htmlObject+"-input");s.change(function(){}.bind(this)),s.keypress(function(e){13===e.which&&t.dashboard.processChange(this.name)}.bind(this)),s.focusout(function(){t.dashboard.processChange(this.name)}.bind(this)),this._doAutoFocus()},getValue:function(){var t=a("#"+this.htmlObject+"-input").val();return this.formatter?this.transportFormatter.format(this.formatter.parse(t)):t}})});