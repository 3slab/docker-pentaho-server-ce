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

define(["cdf/components/SelectComponent","./ValueBasedParameterWidgetBuilder","common-ui/jquery-clean"],function(e,n,t){return n.extend({build:function(n){var a=this.base(n);return n.promptPanel.paramDefn.ignoreBiServer5538&&!n.param.hasSelection()&&(a.valuesArray=a.valuesArray.concat([["",""]])),t.extend(a,{type:"SelectComponent",preExecution:function(){this.useFirstValue=!n.promptPanel.paramDefn.ignoreBiServer5538&&!n.param.hasSelection()},externalPlugin:n.param.attributes.externalPlugin,extraOptions:n.param.attributes.extraOptions}),new e(a)}})});