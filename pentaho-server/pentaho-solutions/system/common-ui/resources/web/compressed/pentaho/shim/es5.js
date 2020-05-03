/*!
 * Copyright 2010 - 2017 Hitachi Vantara. All rights reserved.
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

"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.indexOf||(Array.prototype.indexOf=function(r){"use strict";if(null==this)throw new TypeError;var t,e,n=Object(this),i=n.length>>>0;if(0===i)return-1;if(t=0,arguments.length>1&&(t=Number(arguments[1]),t!=t?t=0:0!=t&&t!=1/0&&t!=-1/0&&(t=(t>0||-1)*Math.floor(Math.abs(t)))),t>=i)return-1;for(e=t>=0?t:Math.max(i-Math.abs(t),0);e<i;e++)if(e in n&&n[e]===r)return e;return-1}),Array.isArray||(Array.isArray=function(r){return"[object Array]"===Object.prototype.toString.call(r)});