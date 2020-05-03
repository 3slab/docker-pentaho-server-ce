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

// Based on Xavi Ramirez's MIT licensed https://github.com/xavi-/node-properties-parser

define(["pentaho/shim/es5"],function(){"use strict";function e(e){var n=0,t=e.length;this.peek=function(r){return r=r||0,n+r>=t?null:e.charAt(n+r)},this.next=function(r){return r=r||1,n>=t?null:e.charAt((n+=r)-r)},this.pos=function(){return n}}function n(e){return g.test(e)}function t(e){for(var t=e.pos();n(e.peek());)e.next();return{type:"whitespace",start:t,end:e.pos()}}function r(e){return"!"===e||"#"===e}function u(e){return null==e||"\n"===e||"\r"===e}function s(e){for(var n=e.pos();!u(e.peek());)e.next();return{type:"comment",start:n,end:e.pos()}}function o(e){return!n(e)&&!r(e)}function i(e){return"="===e||":"===e||n(e)}function p(e){return"\\"===e}function a(e){var n=e.pos();return e.next(),"u"===e.next()&&e.next(4),{type:"escaped-value",start:n,end:e.pos()}}function f(e){for(var n,t=e.pos(),r=[];null!==(n=e.peek())&&!i(n);)p(n)?r.push(a(e)):e.next();return{type:"key",start:t,end:e.pos(),children:r}}function c(e){for(var t,r=e.pos(),s=!1;null!==(t=e.peek())&&!u(t);)if(n(t))e.next();else{if(s)break;if(!(s=":"===t||"="===t))break;e.next()}return{type:"key-value-separator",start:r,end:e.pos()}}function l(e){return"\\"===e.peek()&&u(e.peek(1))}function h(e){var t=e.pos();e.next(),"\r"===e.peek()&&e.next(),e.next();for(var r;null!==(r=e.peek())&&!u(r)&&n(r);)e.next();return{type:"line-break",start:t,end:e.pos()}}function v(e){for(var n,t=e.pos(),r=[];null!==(n=e.peek());)if(l(e))r.push(h(e));else if(p(n))r.push(a(e));else{if(u(n))break;e.next()}return{type:"value",start:t,end:e.pos(),children:r}}function d(e){return{type:"key-value",start:e.pos(),children:[f(e),c(e),v(e)],end:e.pos()}}function k(e,n){for(var t=e.start,r=[],u=0;u<e.children.length;u++){var s=e.children[u];r.push(n.substring(t,s.start)),r.push(m[s.type](s,n)),t=s.end}return r.push(n.substring(t,e.end)),r}function x(e,n){for(var t={},r=0;r<e.length;r++){var u=e[r];if("key-value"===u.type){var s=k(u.children[0],n).join(""),o=k(u.children[2],n).join("");t[s]=o}}return t}function y(u){for(var i,p=new e(u),a=[];null!==(i=p.peek());)if(n(i))a.push(t(p));else if(r(i))a.push(s(p));else{if(!o(i))throw Error("Something crazy happened. text: '"+u+"'; curChar: '"+i+"'");a.push(d(p))}return a}function b(e){return e=String(e),x(y(e),e)}var g=/\s/,m={"escaped-value":function(e,n){var t=n.charAt(e.start+1);return"t"===t?"\t":"r"===t?"\r":"n"===t?"\n":"f"===t?"\f":"u"!==t?t:String.fromCharCode(parseInt(n.substr(e.start+2,4),16))},"line-break":function(e,n){return""}};return b});