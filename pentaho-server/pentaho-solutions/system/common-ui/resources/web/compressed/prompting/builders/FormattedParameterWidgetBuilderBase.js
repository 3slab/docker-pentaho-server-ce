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

define(["common-ui/util/formatting","./ValueBasedParameterWidgetBuilder","common-ui/jquery-clean"],function(t,r,e){return r.extend({_createDataTransportFormatter:function(r){return t.createDataTransportFormatter(r)},_createFormatter:function(r){return t.createFormatter(r)},build:function(t){var r=this.base(t);return e.extend(r,{transportFormatter:this._createDataTransportFormatter(t.param),formatter:this._createFormatter(t.param)})}})});