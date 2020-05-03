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

define("MySimpleComponent",["cdf/components/BaseComponent"],function(e){return e.extend({update:function(){$("#"+this.htmlObject).html(this.expression()+" (My Custom Component)")}})}),define("MyCustomBuilder",["MySimpleComponent","common-ui/prompting/builders/ParameterWidgetBuilderBase"],function(e,n){return n.extend({build:function(n){var t=this.base(n),o=t.name+"-label",i=n.param.attributes.label;return $.extend(t,{promptType:"label",name:o,htmlObject:o,type:"TextComponent",expression:function(){return i}}),delete t.parameter,new e(t)}})}),define("common-ui/prompting/pentaho-prompting-sample-component",["common-ui/prompting/WidgetBuilder","MyCustomBuilder"],function(e,n){e.mapping.label=new n});