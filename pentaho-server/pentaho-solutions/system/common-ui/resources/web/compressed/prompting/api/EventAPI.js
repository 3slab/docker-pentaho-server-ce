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

define([],function(){return function(t){this.beforeRender=function(e){t.operation._getPromptPanel().onBeforeRender=e},this.afterRender=function(e){t.operation._getPromptPanel().onAfterRender=e},this.beforeUpdate=function(e){t.operation._getPromptPanel().onBeforeUpdate=e},this.afterUpdate=function(e){t.operation._getPromptPanel().onAfterUpdate=e},this.parameterChanged=function(e,n){e?(t.operation._getPromptPanel().onParameterChanged||(t.operation._getPromptPanel().onParameterChanged={}),n="string"==typeof n&&n||"",t.operation._getPromptPanel().onParameterChanged[n]=e):t.operation._getPromptPanel().onParameterChanged=null},this.postInit=function(e){t.operation._getPromptPanel().onPostInit(e)},this.ready=function(e){t.operation._getPromptPanel().ready="function"==typeof e?e:function(){}},this.stateChanged=function(e){var n=t.operation._getPromptPanel();n.onStateChanged="function"==typeof e?e:null},this.submit=function(e){t.operation._getPromptPanel().onSubmit="function"==typeof e?e:null}}});