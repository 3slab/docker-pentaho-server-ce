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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","dojo/_base/lang","dojo/request","dojo/i18n","dojo/string"],function(e,n,o,t,a,s,d,i,r){var u=e("pentaho.common.Messages",[],{});u.init=function(){void 0===u.messageBundle&&(u.messageBundle={})},pentaho="undefined"==typeof pentaho?{}:pentaho,pentaho.common=pentaho.common||{},pentaho.common.Messages=pentaho.common.Messages||u,u.addBundle=function(e,n){if(n&&"object"==typeof n)return void(u.messageBundle[e]=n);dojo.requireLocalization(e,n,"ROOT","ROOT"),u.messageBundle[e]=i.getLocalization(e,n)},u.getBundle=function(e){return u.messageBundle[e]},u.entityDecoder=document.createElement("textarea"),u.getString=function(e,n){var o,t,a=e;for(o in u.messageBundle)if(u.messageBundle.hasOwnProperty(o)&&(t=u.messageBundle[o],t.hasOwnProperty(e))){if(a=t[e],void 0!=n){var d={};if("string"==typeof n)d[0]=n;else if("array"==typeof n)for(var i=0;i<n.length;i++)d[""+i]=n[i];else s.isObject(n)&&(d=n);a=s.replace(a,d)}break}return a};return u.setElementText=function(e,n){var o;(o="string"==typeof e?document.getElementById(e):e)&&(o.innerHTML=u.getString(n))},u.addUrlBundle=function(e,n,o){if(o||!u.messageBundle.hasOwnProperty(e)){d(n,{handleAs:"json",sync:!0}).then(function(n){u.messageBundle[e]=n},function(e){"undefined"!=typeof console&&console.log("error loading message bundle at:"+n)})}},u.init(),u.addUrlBundle("pentaho.common",CONTEXT_PATH+"i18n?plugin=common-ui&name=resources/web/dojo/pentaho/common/nls/messages"),u});