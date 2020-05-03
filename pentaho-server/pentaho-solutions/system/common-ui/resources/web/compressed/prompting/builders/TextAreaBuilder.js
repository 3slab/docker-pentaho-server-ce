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

define(["./FormattedParameterWidgetBuilderBase","cdf/components/TextareaInputComponent","common-ui/jquery-clean"],function(t,e,n){return t.extend({build:function(t){var i=this.base(t);n.extend(i,{name:i.name+"-input",type:"TextareaInputComponent",postExecution:function(){var t=n("#"+this.htmlObject+"-input");t.change(function(){}.bind(this)),t.keypress(function(t){13===t.which&&this.dashboard.processChange(this.name)}.bind(this)),t.focusout(function(){this.getValue()}.bind(this)),this._doAutoFocus()}});var a=new e(i);return a.getValue=function(){var t=n("#"+this.name).val();return this.formatter?this.transportFormatter.format(this.formatter.parse(t)):t},a}})});