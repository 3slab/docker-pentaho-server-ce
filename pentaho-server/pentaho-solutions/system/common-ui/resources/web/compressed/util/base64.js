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

define("common-ui/util/base64",[],function(){return{base64Decode:function(r){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var o,t,c,n,a,d,f,h="",i=0;i<r.length;)n=e.indexOf(r.charAt(i++)),a=e.indexOf(r.charAt(i++)),d=e.indexOf(r.charAt(i++)),f=e.indexOf(r.charAt(i++)),o=n<<2|a>>4,t=(15&a)<<4|d>>2,c=(3&d)<<6|f,h+=String.fromCharCode(o),64!==d&&(h+=String.fromCharCode(t)),64!==f&&(h+=String.fromCharCode(c));return this.utf8Decode(h)},utf8Decode:function(r){for(var e="",o=0,t=c1=c2=0;o<r.length;)t=r.charCodeAt(o),t<128?(e+=String.fromCharCode(t),o++):t>191&&t<224?(c2=r.charCodeAt(o+1),e+=String.fromCharCode((31&t)<<6|63&c2),o+=2):(c2=r.charCodeAt(o+1),c3=r.charCodeAt(o+2),e+=String.fromCharCode((15&t)<<12|(63&c2)<<6|63&c3),o+=3);return e}}});