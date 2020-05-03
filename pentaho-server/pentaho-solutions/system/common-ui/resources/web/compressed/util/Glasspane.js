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

define("common-ui/util/Glasspane",[],function(){var n={fadeInDuration:0,fadeOutDuration:500,$glasspane:void 0,show:function(n){window.top.mantle_notifyGlasspaneListeners&&window.top.mantle_notifyGlasspaneListeners(!0),this.$glasspane=$("<div class='glasspane'></div>"),n&&this.$glasspane.css({"z-index":""+n}),$(window.top.document.body).append(this.$glasspane),this.$glasspane.fadeIn(this.fadeInDuration,function(){})},hide:function(){window.top.mantle_notifyGlasspaneListeners&&window.top.mantle_notifyGlasspaneListeners(!1);var n=this;this.$glasspane.fadeOut(this.fadeOutDuration,function(){n.$glasspane&&n.$glasspane.remove()})}},s=function(){};return s.prototype=n,s});