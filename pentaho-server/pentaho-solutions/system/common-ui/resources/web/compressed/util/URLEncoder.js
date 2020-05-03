/*
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License, version 2.1 as published by the Free Software
 * Foundation.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
 * or from the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 * Copyright 2014 - 2019 Hitachi Vantara. All rights reserved.
 */

define("common-ui/util/URLEncoder",[],function(){function e(e){var n=[];for(var r in e){var o=e[r];if(o!==t[r]){var i=encodeURIComponent(r)+"=";if(Array.isArray(o))for(var c=0,p=o.length;c<p;++c)n.push(i+encodeURIComponent(o[c]));else n.push(i+encodeURIComponent(o))}}return n.join("&")}function n(e,n){return String(e).replace(/\{(\d+)\}/g,function(e,r){return n[r]})}pho="undefined"==typeof pho?{}:pho;var r=pho.Encoder||(pho.Encoder={}),t=Object.prototype;return r.encode=function(r,t,o){"use strict";if(void 0===t)return r;"string"==typeof t&&(t=[t]);var i=r.split("?")[0],c=(i.match(/\{[\d]+\}/g)||[]).length;t=(t||[]).map(function(e,n){var r=encodeURIComponent(String(e));return n<c&&(r=r.replace(/%5C/g,"%255C").replace(/%2F/g,"%252F")),r});var p=n(r,t);return o&&(p+=p.indexOf("?")>-1?"&":"?",p+=e(o)),p},r.encodeRepositoryPath=function(e){"use strict";return String(e).replace(new RegExp(":","g"),"\t").replace(new RegExp("[\\\\/]","g"),":")},r.decodeRepositoryPath=function(e){"use strict";return String(e).replace(new RegExp(":","g"),"/").replace(new RegExp("\\t","g"),":")},r}),require(["common-ui/util/URLEncoder"]);