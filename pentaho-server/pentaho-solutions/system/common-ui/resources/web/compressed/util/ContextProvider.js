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

define("common-ui/util/ContextProvider",["common-ui/jquery-pentaho-i18n"],function(){function n(e,i,t){var r=e[i];o(r.path?r.path:r,function(o,c){r.post&&r.post(o,c),i<e.length-1?n(e,i+1,t):(a=!0,t(o))},!r.post)}function o(n,o,i){var t=e().locale;t||$("meta[name='locale']")&&(t=$("meta[name='locale']").attr("content")),jQuery.i18n.properties({name:n,mode:"map",language:t,callback:function(){var n={};for(configProp in jQuery.i18n.map)n[configProp]=jQuery.i18n.map[configProp],delete jQuery.i18n.map[configProp];if(i)for(configProp in n)r[configProp]=n[configProp];o&&o(r,n)}})}function e(){var n={};window.top.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(o,e,i){n[e]=i});return n}function i(o,e){a?o(r):n(e,0,o)}function t(n,o){r[n]=o}var r={},a=!1;return{get:i,addProperty:t}});