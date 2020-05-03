/*!
 * Copyright 2010 - 2018 Hitachi Vantara.  All rights reserved.
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
 */

define(["./MessageBundle"],function(n){function e(n){var e;if(n)if("/"===n[0]){if(!(e=n.substr(1)))throw new Error("[pentaho/i18n!] Bundle path argument cannot be a single '/'.")}else e="."!==n[0]&&n.indexOf("/")<0?"./i18n/"+n:n;else e="./i18n/messages";return e}function t(n){var e=n.split(/[\n\r]+/),t={};return e.forEach(function(n){if(!/^\s*#/.test(n)){var e=/^\s*(.+?)\s*=(.*?)\s*$/.exec(n);e&&(t[e[1]]=e[2])}}),t}return{load:function(e,r,i,s){if(s.isBuild)i();else{var o=r.toUrl(e)+".properties";if("."===o.charAt(0)){var a=window.location.href,f=a.lastIndexOf("/");f!==a.length-1&&(a=a.substring(0,f+1)),o=a+o}r(["text!"+o],function(e){i(new n(t(e)))})}},normalize:function(n,t){return t(e(n))}}});