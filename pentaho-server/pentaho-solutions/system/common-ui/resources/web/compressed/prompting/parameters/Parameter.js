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

define(["common-ui/jquery-clean"],function(e){return function(){return{name:void 0,type:void 0,list:void 0,mandatory:void 0,multiSelect:void 0,strict:void 0,timezoneHint:void 0,attributes:{},values:[],isSelectedValue:function(t){var n=!1;return e.each(this.values,function(e,i){if(i.selected&&t===i.value)return n=!0,!1}),n},hasSelection:function(){var t=!1;return e.each(this.values,function(e,n){if(n.selected)return t=!0,!1}),t},getSelectedValuesValue:function(){var t=[];return e.each(this.values,function(e,n){n.selected&&t.push(n.value)}),t}}}});