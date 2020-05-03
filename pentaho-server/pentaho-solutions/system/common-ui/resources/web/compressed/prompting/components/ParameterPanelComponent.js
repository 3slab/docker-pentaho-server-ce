/*!
 * Copyright 2010 - 2018 Hitachi Vantara.  All rights reserved.
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

define("common-ui/prompting/components/ParameterPanelComponent",["./PanelComponent"],function(e){return e.extend({getClassFor:function(e){if("label"===e.promptType)return"parameter-label"},removeErrorClass:function(){this.placeholder().removeClass("error")},addErrorClass:function(){this.placeholder().addClass("error")},addErrorLabel:function(e){this.placeholder();if(e){var r='<div id="'+e.htmlObject+'" class="parameter-label"></div>';$("#"+this.htmlObject+" > div").length>1&&$("#"+this.htmlObject+" > div:nth-child(1)").after(r)}}})});