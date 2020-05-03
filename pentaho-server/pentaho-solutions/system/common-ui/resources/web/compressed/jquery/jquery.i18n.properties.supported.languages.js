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

define("common-ui/jquery-pentaho-i18n",["common-ui/jquery-i18n"],function(){var n=$.i18n.properties,e=$.i18n.browserLang;$.i18n.properties=function(r){null!==r.language&&""!=r.language&&void 0!=r.language||(r.language=e()),null!==r.language&&void 0!=r.language||(r.language=""),r.language=a(r),n(r)},$.i18n.browserLang=function(){return null};var a=function(n){var e;return $.ajax({url:n.name+"_supported_languages.properties",async:!1,cache:n.cache,contentType:"text/plain;charset="+n.encoding,dataType:"text",success:function(a,t){e=r(a,n.language)},error:function(a,r,t){404==a.status&&(e=n.language)}}),e},r=function(n,e){var a,r,t,u,o;e.length>=2&&(a=e.substring(0,2),r=a.toLowerCase()),e.length>=5&&(t=e.substring(0,5),u=t.toLowerCase());for(var g=n.split(/\n/),i=0;i<g.length;i++){var s=g[i].substr(0,g[i].indexOf("=")),l=s.toLowerCase();l===r&&void 0==o&&(o=s),l==u&&(o=s)}return void 0==o&&(o=""),o}});