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

define(["./OperationAPI","./EventAPI","./UiAPI","./UtilAPI"],function(n,i,o,r){var t=function(e,s){this.log={info:function(n){console.log(n)},warn:function(n){console.warn(n)},error:function(n,i){if(i)throw n instanceof Error?n:new Error(n);console.error(n)}},e||this.log.error(t._msgs.NO_ID,!0),this.operation=new n(this,e,s),this.util=new r(this),this.ui=new o(this),this.event=new i(this)};return t._msgs={NO_ID:"An HTML id for the prompt panel is required."},t});