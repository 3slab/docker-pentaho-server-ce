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

define(["cdf/lib/Base","../components/HorizontalTableBasedPromptLayoutComponent","../components/FlowPromptLayoutComponent","../components/VerticalTableBasedPromptLayoutComponent"],function(t,o,e,a){return t.extend({_layoutTypes:{horizontal:"HorizontalTableBasedPromptLayoutComponent",flow:"FlowPromptLayoutComponent",vertical:"VerticalTableBasedPromptLayoutComponent"},_lookupPromptType:function(t){switch(t.layout){case"horizontal":return this._layoutTypes.horizontal;case"flow":return this._layoutTypes.flow;default:return this._layoutTypes.vertical}},build:function(t){var n=t.promptPanel.generateWidgetGUID(),p={type:this._lookupPromptType(t.promptPanel.paramDefn),name:t.paramGroup.name,htmlObject:n,promptPanel:t.promptPanel,label:void 0,components:t.components,cssClass:"parameter-wrapper"};switch(p.type){case this._layoutTypes.horizontal:return new o(p);case this._layoutTypes.flow:return new e(p);case this._layoutTypes.vertical:return new a(p)}}})});