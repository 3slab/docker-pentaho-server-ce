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

define(["./ScopedPentahoButtonComponent","common-ui/jquery-clean"],function(t,e){return t.extend({update:function(){this.base();var t=this.promptPanel;if(void 0==this.paramDefn.autoSubmit){this._createElement('<label class="auto-complete-checkbox"><input type="checkbox"'+(t.getAutoSubmitSetting()?' checked="checked"':"")+" />"+this.autoSubmitLabel+"</label>").appendTo(e("#"+this.htmlObject)).bind("click",function(e){t.setAutoSubmit(e.target.checked)})}t.getAutoSubmitSetting()&&this.expression(!0);var i=e("#"+this.htmlObject+" button");i.unbind("click"),i.unbind("mousedown"),i.mousedown(function(){this.expressionStart(),this.submitTimeout=setTimeout(function(){this.expression(!1),delete this.submitTimeout}.bind(this),500)}.bind(this)),i.click(function(){this.submitTimeout||this.expression(!1)}.bind(this))},_createElement:function(t){return e(t)},expression:function(t){this.promptPanel._submit({isInit:t})},expressionStart:function(){this.promptPanel._submitStart()}})});