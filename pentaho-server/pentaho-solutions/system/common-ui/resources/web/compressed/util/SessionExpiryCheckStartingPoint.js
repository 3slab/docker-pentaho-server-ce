/*!
 * Copyright 2017 Hitachi Vantara.  All rights reserved.
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

define("common-ui/util/SessionExpiryCheckStartingPoint",[],function(){return{POLLING_MILLISECONDS:5e3,isRunningIFrameInSameOrigin:!1,init:function(){try{window.top.mantle_initialized;this.isRunningIFrameInSameOrigin=!0}catch(i){this.isRunningIFrameInSameOrigin=!1}this.isRunningIFrameInSameOrigin&&window.top.executeCommand&&window.top.executeCommand("SessionExpiredCommand",{pollingInterval:this.POLLING_MILLISECONDS})}}}),require(["common-ui/util/SessionExpiryCheckStartingPoint"],function(i){i.init()});