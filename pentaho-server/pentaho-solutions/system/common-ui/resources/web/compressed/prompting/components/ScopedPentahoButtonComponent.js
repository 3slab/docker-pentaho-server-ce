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

define(["cdf/components/BaseComponent","common-ui/jquery-clean"],function(t,n){return t.extend({update:function(){this.registerSubmitClickEvent()},registerSubmitClickEvent:function(){if(!this.viewReportButtonRegistered){var t=n("#"+this.htmlObject).empty(),e=this.promptPanel&&!this.promptPanel.isEnableSubmitButton;n("<button type='button' class='pentaho-button' "+(e?"disabled":"")+"/>").text(this.label).bind("mousedown",this.expressionStart.bind(this)).bind("click",function(){this.expression(!1)}.bind(this)).appendTo(t)}},expression:function(t){},expressionStart:function(){},setDisabledButton:function(t){n("#"+this.name).find("button.pentaho-button").attr("disabled",t)}})});