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

define("common-ui/util/TextFormatter",["dojo/number","dojo/date/locale"],function(a,e){var t={number:"number","java.lang.Number":"number","java.lang.Byte":"number","java.lang.Short":"number","java.lang.Integer":"number","java.lang.Long":"number","java.lang.Float":"number","java.lang.Double":"number","java.math.BigDecimal":"number","java.math.BigInteger":"number",date:"date","java.util.Date":"date","java.sql.Date":"date","java.sql.Time":"date","java.sql.Timestamp":"date"},r=function(e){return{format:function(t){var r=null;return t&&(r=a.format(t,{pattern:e})),r},parse:function(t){var r=null;return t&&(r=a.parse(""+t,{pattern:e})),r}}},n=function(a){return{format:function(t){var r=null;return t&&(r=e.format(t,{datePattern:a,selector:"date"})),r},parse:function(t){var r=null;return t&&(r=e.parse(""+t,{datePattern:a,selector:"date"})),r}}};return{getFormatType:function(a){return t[a]},createFormatter:function(a,e){var u=t[a];return"number"==u?r(e):"date"==u?n(e):void 0}}});