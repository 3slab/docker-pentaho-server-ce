/*!
 * Copyright 2010 - 2019 Hitachi Vantara.  All rights reserved.
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

define(["cdf/components/TextInputComponent","./FormattedParameterWidgetBuilderBase","common-ui/jquery-clean"],function(t,e,r){function n(t){return null!=t&&("string"==typeof t?""!==t:!isNaN(t)&&Math.abs(t)!==1/0)}return e.extend({build:function(e){var a=this.base(e),o=a.name+"-input";return r.extend(a,{name:o,type:"TextInputComponent",_formatValue:function(t){var e;if(this.formatter){var r=this.transportFormatter.parse(t);e=this.formatter.format(r),e||(e=t)}else e=t;return e},_parseValue:function(t){var e;if(this.formatter){var r=this.formatter.parse(t);e=n(r)?this.transportFormatter.format(r):t}else e=t;return e}}),new t(a)}})});