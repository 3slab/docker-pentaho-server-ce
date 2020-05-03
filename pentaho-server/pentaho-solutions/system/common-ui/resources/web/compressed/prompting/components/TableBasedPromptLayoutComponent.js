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

define(["./PromptLayoutComponent"],function(t){return t.extend({buildComponentCell:function(t){return"<td align='left' style='vertical-align: top;'><div id='"+t.htmlObject+"'></div></td>"},getMarkupFor:function(t){throw new Error("TableBasedPromptLayoutComponent should not be used directly.")},updateInternal:function(){var t='<table cellspacing="0" cellpadding="0" class="parameter-container" style="width: 100%;">';return t+='<tr><td><div><table cellspacing="0" cellpadding="0">',(t+=this.getMarkupFor(this.components))+"</table></div></td></tr></table>"}})});