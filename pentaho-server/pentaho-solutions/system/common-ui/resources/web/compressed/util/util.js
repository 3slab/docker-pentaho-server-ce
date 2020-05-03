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

define("common-ui/util/util",["dijit/registry","dojo/dom"],function(e,n){return{getUrlParameters:function(){for(var e,n={},t=/\+/g,l=/([^&=]+)=?([^&]*)/g,a=function(e){return decodeURIComponent(e.replace(t," "))},o=window.location.search.substring(1);e=l.exec(o);){var i=a(e[1]),r=a(e[2]);void 0!==n[i]&&(r=$.isArray(n[i])?n[i].concat([r]):[n[i],r]),n[i]=r}return n},getLocale:function(){var e=this.getUrlParameters().locale;return e&&e.length>2&&(e=e.substring(0,2)),e},localizeDomCtrl:function(t,l,a){var o=null,i=null,r=null,s=a||"";t.indexOf("_label")==t.length-6?(r=t.substr(0,t.length-6),o="label"):t.indexOf("_title")==t.length-6?(r=t.substr(0,t.length-6),o="title"):t.indexOf("_content")==t.length-8?(r=t.substr(0,t.length-8),o="inner"):t.indexOf("_legend")==t.length-7?(r=t.substr(0,t.length-7),o="legend"):t.indexOf("_header")==t.length-7?(r=t.substr(0,t.length-7),o="header"):t.indexOf("_button")==t.length-7&&(r=t.substr(0,t.length-7),o="inner"),null!=r&&(r=s+r,this[r]?i=this[r]:(i=e.byId(r))||(i=n.byId(r)));var g=-1;for(i||(i=n.byId(r+"1"))&&(g=1);i&&o;){if("inner"==o)i.domNode&&(i=i.domNode),i.innerHTML=l;else if("legend"==o)if(void 0===i.firstElementChild)for(var d=i.firstChild;d;){if(1==d.nodeType){d.innerHTML=l;break}d=d.nextSibling}else i.firstElementChild.innerHTML=l;else"label"==o&&i.setLabel?i.setLabel(l):"title"==o&&i.setTitle?i.setTitle(l):i.set?i.set(o,l):"title"==o&&i.title&&(i.title=l);-1!=g?(g++,i=dojo.byId(r+g)):i=null}},localizeDom:function(e,n){var t;if(pentaho&&pentaho.common&&pentaho.common.Messages){var l=pentaho.common.Messages.getBundle(e);if(l)for(t in l)l.hasOwnProperty(t)&&this.localizeDomCtrl(t,pentaho.common.Messages.getString(t),n)}else console.log("pentaho.common.Messages not available for localizing the DOM")},isNumberType:function(e){return["java.lang.Number","java.lang.Byte","java.lang.Double","java.lang.Float","java.lang.Integer","java.lang.Long","java.lang.Short","java.math.BigDecimal","java.math.BigInteger"].indexOf(e)>=0},normalizeDojoLocale:function(e){return e.match(/^[a-z]{2}(?:[-_][a-z]{2}){0,2}$/i)?e.replace(/_/g,"-").toLowerCase():"en"}}});