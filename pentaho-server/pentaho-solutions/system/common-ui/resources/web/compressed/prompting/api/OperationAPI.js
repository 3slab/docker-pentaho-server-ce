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

define(["common-ui/prompting/PromptPanel"],function(t){return function(e,r,n){this._promptPanel=new t(r,void 0,n),this._msgs={PROMPT_PANEL_NOT_FOUND:"Prompt Panel not found. Call 'api.operation.render' to create a panel.",NO_PARAM_DEFN:"'getParameterDefinitionCallback' function does not return a valid ParameterDefinition instance.",NO_PARAM_DEFN_FUNC:"No function defined for 'getParameterDefinitionCallback'. Prompts will not be refreshed."},this._getPromptPanel=function(){return this._promptPanel||e.log.error(this._msgs.PROMPT_PANEL_NOT_FOUND,!0),this._promptPanel},this.render=function(t){t&&"function"==typeof t||e.log.error(this._msgs.NO_PARAM_DEFN_FUNC,!0),t(e,function(r){r||e.log.error(this._msgs.NO_PARAM_DEFN,!0),this._promptPanel.setParamDefn(r),this._promptPanel.getParameterDefinition=function(r,n){t(e,function(t){if(!t)return e.log.error(this._msgs.NO_PARAM_DEFN),void n(null);n(t)}.bind(this))}.bind(this)}.bind(this))},this.init=function(){try{this._getPromptPanel().init()}catch(t){if(!(t.message.search("addComponent: duplicate component name")>-1))throw t;e.log.warn("Prompt Panel has been initialized already")}},this.getParameterValues=function(){var t;try{t=this._getPromptPanel().getParameterValues()}catch(r){e.log.error(r),t={}}return t},this.setParameterValue=function(t,e){this._getPromptPanel().setParameterValue(t,e)},this.refreshPrompt=function(t){this._getPromptPanel().refreshPrompt(t)},this.state=function(t){if(t)try{this._getPromptPanel().setState(t)}catch(t){e.log.error(t)}var r;try{r=this._getPromptPanel().getState()}catch(t){e.log.error(t),r={}}return r},this.submit=function(t){var e=this._getPromptPanel();e.submit(e,t)}}});