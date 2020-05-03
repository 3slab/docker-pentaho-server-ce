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

define(["dijit/DialogUnderlay","dijit/layout/TabContainer","dijit/layout/TabController","dijit/form/Button","dojo/dnd/Manager","dojo/_base/lang","dijit/layout/TabController","dojo/dnd/common","dojo/dom-style","dojo/dom-geometry","dojo/has","dojo/sniff","dojo/_base/window"],function(o,t,e,a,l,n,r,d,i,s,c,f,u){n.extend(t,{baseClass:"pentahoTabContainer"}),n.extend(o,{templateString:"<div class='glasspane'><div class='' data-dojo-attach-point='node'></div></div>",_setClassAttr:function(o){this.node.className=o,this._set("class",o)}}),n.extend(r,{baseClass:"pentaho-tabWidget"}),d.autoScroll=function(o){},d.autoScrollNodes=function(o){for(var t=o.target;t;){if((!t.getAttribute||!t.getAttribute("preventAutoScroll")||"false"==t.getAttribute("preventAutoScroll"))&&1==t.nodeType&&t.tagName.toLowerCase()in d._validNodes){var e=i.getComputedStyle(t);if(e.overflow.toLowerCase()in d._validOverflow){var a=s.getContentBox(t,e),l=s.position(t,!0),n=Math.min(d.H_TRIGGER_AUTOSCROLL,a.w/2),r=Math.min(d.V_TRIGGER_AUTOSCROLL,a.h/2),f=o.pageX-l.x,p=o.pageY-l.y,g=0,b=0;c("webkit")&&(f+=u.body.scrollLeft,p+=dojo.body().scrollTop),f>0&&f<a.w&&(f<n?g=-n:f>a.w-n&&(g=n)),p>0&&p<a.h&&(p<r?b=-r:p>a.h-r&&(b=r));var j=t.scrollLeft,v=t.scrollTop;if(t.scrollLeft=t.scrollLeft+g,t.scrollTop=t.scrollTop+b,j!=t.scrollLeft||v!=t.scrollTop)return}}try{t=t.parentNode}catch(o){t=null}}d.autoScroll(o)}});