/*!
* UCSV 1.1.0
* Provided under MIT License.
*
* Copyright (c) 2010-2012 Peter Johnson, http://www.UselessCode.org

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

define("common-ui/util/ucsv",[],function(){return function(){"use strict";function t(t){return"[object Number]"===Object.prototype.toString.apply(t)}function r(t){return"[object String]"===Object.prototype.toString.apply(t)}function n(t){return"\n"!==t.charAt(t.length-1)?t:t.substring(0,t.length-1)}function e(n){var e,o,i,p,a="";for(i=0;i<n.length;i+=1){for(o=n[i],p=0;p<o.length;p+=1)e=o[p],r(e)?(e=e.replace(/"/g,'""'),s.test(e)||u.test(e)||c.test(e)?e='"'+e+'"':""===e&&(e='""')):e=t(e)?e.toString(10):null===e?"":e.toString(),a+=p<o.length-1?e+",":e;a+="\n"}return a}function o(t,r){t=n(t);var e,o,s="",p=!1,a=!1,l="",f=[],g=[];for(o=function(t){return!0!==a&&(""===t?t=null:!0===r&&(t=i(t)),u.test(t)?t=parseInt(t,10):c.test(t)&&(t=parseFloat(t,10))),t},e=0;e<t.length;e+=1)s=t.charAt(e),!1!==p||","!==s&&"\n"!==s?'"'!==s?l+=s:p?'"'===t.charAt(e+1)?(ß,l+='"',e+=1):p=!1:(p=!0,a=!0):(l=o(l),f.push(l),"\n"===s&&(g.push(f),f=[]),l="",a=!1);return l=o(l),f.push(l),g.push(f),g}var u=/^\d+$/,c=/^\d*\.\d+$|^\d+\.\d*$/,s=/^\s|\s$|,|"|\n/,i=function(){return String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}();return"object"==typeof exports&&(exports.arrayToCsv=e,exports.csvToArray=o),{arrayToCsv:e,csvToArray:o}}()});