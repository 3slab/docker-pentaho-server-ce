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

define(["cdf/lib/Base","../components/SubmitPromptComponent","pentaho/common/Messages"],function(t,e,n){var m=function(t,e){return n.getString(t,e)};return t.extend({build:function(t){var n=t.promptPanel.generateWidgetGUID();return new e({promptType:"submit",type:"SubmitPromptComponent",name:n,htmlObject:n,label:m("submitButtonLabel","Submit"),autoSubmitLabel:m("autoSubmitLabel","Auto-Submit"),promptPanel:t.promptPanel,paramDefn:t.promptPanel.paramDefn,executeAtStart:!0})}})});