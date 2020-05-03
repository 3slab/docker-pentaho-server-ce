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

define(["dojo/_base/declare","dijit/Tooltip","dojo/dom","dojo/dom-construct","dojo/_base/lang","dojo/_base/array"],function(t,o,e,n,p,i){pentaho.common.ContextHelp={},pentaho.common.ContextHelp.REF="_ref",pentaho.common.ContextHelp.CONTENT="_content",pentaho.common.ContextHelp.POSITION="_position",pentaho.common.ContextHelp.TARGET="_target",pentaho.common.ContextHelp.suffixes=[pentaho.common.ContextHelp.REF,pentaho.common.ContextHelp.CONTENT,pentaho.common.ContextHelp.POSITION,pentaho.common.ContextHelp.TARGET],pentaho.common.ContextHelp.createHelpContainer=function(){var t=e.byId("pentaho-ctx-help-container");return void 0==this.container&&(t=n.create("div"),t.id="pentaho-ctx-help-container",n.place(t,dojo.body())),t},pentaho.common.ContextHelp.parsePosition=function(t){return i.map(t.split(","),function(t){return p.trim(t)})},pentaho.common.ContextHelp.buildContext=function(t){var o=new pentaho.common.ContextHelp.helpContext;for(var e in t)if(t.hasOwnProperty(e)){if("defaultPosition"===e){o.defaultPosition=pentaho.common.ContextHelp.parsePosition(t[e]);continue}var n=o.parseProperty(e);if(null==n)continue;var p=o.getHelpFor(n.id);n.property&&o.setHelpProperty(p,n.property,t[e])}return o},pentaho.common.ContextHelp.installHelpFor=function(t,e){var p={connectId:t.target,label:t.content,position:t.position};t.widget=new o(p),t.widget.domNode.id="tt_"+t.target,n.place(t.widget.domNode,e)},pentaho.common.ContextHelp.helpContext=function(){this.context={}},pentaho.common.ContextHelp.helpContext.prototype.installAll=function(t){this.context.defaultPosition&&(o.defaultPosition=this.context.defaultPosition),void 0==t&&(t=pentaho.common.ContextHelp.createHelpContainer());for(var e in this.context)pentaho.common.ContextHelp.installHelpFor(this.context[e],t)},pentaho.common.ContextHelp.helpContext.prototype.removeAll=function(){for(var t in this.context)this.context[t].widget&&this.context[t].widget.destroyRecursive()},pentaho.common.ContextHelp.helpContext.createHelpFor=function(t){return{target:t,content:null,ref:null,position:null,widget:null}},pentaho.common.ContextHelp.helpContext.prototype.parseProperty=function(t){if(t.indexOf("_")>-1)for(var o=0;o<pentaho.common.ContextHelp.suffixes.length;o++){var e=pentaho.common.ContextHelp.suffixes[o];if(t.indexOf(e)>-1)return{id:t.substring(0,t.length-e.length),property:e.substring(1)}}return null},pentaho.common.ContextHelp.helpContext.prototype.getHelpFor=function(t){var o=this.context[t];return void 0==o&&(o=this.context[t]=pentaho.common.ContextHelp.helpContext.createHelpFor(t)),o},pentaho.common.ContextHelp.helpContext.prototype.setHelpProperty=function(t,o,e){return"position"===o&&(e=pentaho.common.ContextHelp.parsePosition(e)),t[o]=e,t}});