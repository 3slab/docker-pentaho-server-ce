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

define(["cdf/lib/Base","common-ui/jquery-clean"],function(t,e){return t.extend({build:function(t){var a=t.promptPanel.generateWidgetGUID();return{promptType:"prompt",executeAtStart:!0,param:t.param,name:a,htmlObject:a,type:void 0,parameter:t.promptPanel.getParameterName(t.param),postExecution:function(){this.base();var t=this.param.attributes.tooltip;t&&e("#"+this.htmlObject).attr("title",t)}}}})});