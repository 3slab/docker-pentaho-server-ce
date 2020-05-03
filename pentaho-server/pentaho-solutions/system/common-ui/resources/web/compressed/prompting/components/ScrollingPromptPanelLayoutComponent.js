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

define(["./PromptLayoutComponent","common-ui/jquery-clean"],function(t,e){return t.extend({update:function(){if(this.components){var t=e("#"+this.htmlObject);if(0===this.components.length)return void t.empty();var n='<div class="prompt-panel">',i='<div class="submit-panel">';e.each(this.components,function(t,e){"submit"===e.promptType?i+=this.getMarkupFor(e):n+=this.getMarkupFor(e)}.bind(this)),n+="</div>",this.promptPanel.paramDefn.removeSubmitPanel||(n+=i+"</div>"),t.html(n)}}})});