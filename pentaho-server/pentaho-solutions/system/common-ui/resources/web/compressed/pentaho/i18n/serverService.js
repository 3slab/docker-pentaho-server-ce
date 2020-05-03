/*!
 * Copyright 2010 - 2018 Hitachi Vantara. All rights reserved.
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

define(["../environment","./MessageBundle","../util/url","json"],function(e,n,r){"use strict";function t(e){var n;if(e)if("/"===e[0]){if(!(n=e.substr(1)))throw new Error("[pentaho/messages!] Bundle path argument cannot be a single '/'.")}else n="."!==e[0]&&e.indexOf("/")<0?"./i18n/"+e:e;else n="./i18n/messages";return n}function s(e,n){var r=t(n),s=i(e,r),u=s.indexOf("/");if(!(u>0||u<s.length-1))throw new Error("[pentaho/messages!] Bundle path argument is invalid: '"+n+"'.");return{pluginId:s.substr(0,u),name:s.substr(u+1)}}function i(n,t){var s=e.server.root.pathname,i=r.create(n.toUrl(t)),u=i.pathname,o=i.protocol;!u.indexOf(s)&&(u=u.substring(s.length)),!u.indexOf("content/")&&(u=u.substr("content/".length));var a=!u.indexOf("res:");a&&(u=u.substr("res:".length));var l=/^[.\/]*(.*)$/,f=a||"res:"===o,g=!u.indexOf("/plugin/");if(f&&l.test(u)){u=l.exec(u)[1]}else g&&(u=u.substr("/plugin/".length));return u}return{load:function(r,t,i,u){if(u.isBuild)i();else{var o=s(t,r);t(["json!"+e.server.root+"i18n?plugin="+o.pluginId+"&name="+o.name],function(e){i(new n(e))},i.error)}},normalize:function(e,n){return n(t(e))},__getBundleInfo:s}});