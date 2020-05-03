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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","dojo/dom-class","dijit/registry","dojo/dom-construct","dojo/_base/lang"],function(t,e,a,i,s,d,b,h,n){return t("pentaho.common.TabSet",[e,a],{templateString:'<div data-dojo-attach-point="tabSetDiv" style="margin-right: 0px"></div>',tabs:[],stackContainerId:null,setTabs:function(t){if(!(this.tabSetDiv.childNodes.length>0)){this.tabs=t;d.add(this.tabSetDiv,"pentaho-tabBar");for(var e=0;e<this.tabs.length;e++){var a=h.create("div",{},this.tabSetDiv);a.setAttribute("tabId",this.tabs[e].id),this.tabs[e].element=a,d.add(a,"pentaho-tabWidget"),0==e&&d.add(a,"pentaho-tabWidget-selected");var s=h.create("span",{},a);d.add(s,"pentaho-tabWidgetLabel",a),s.setAttribute("tabId",this.tabs[e].id),s.innerHTML=this.tabs[e].title,i(a,"click",n.hitch(this,this.tabClicked))}}},tabClicked:function(t){var e=t.target.getAttribute("tabId");this.setSelectedTab(e)},setSelectedTab:function(t){for(var e=0;e<this.tabs.length;e++)this.tabs[e].id==t&&this.setSeletedTabIdx(e)},setSeletedTabIdx:function(t){for(var e=this.tabs[t].id,a=0;a<this.tabs.length;a++)t==a?d.add(this.tabs[a].element,"pentaho-tabWidget-selected"):d.remove(this.tabs[a].element,"pentaho-tabWidget-selected");this.tabs[t].beforeCallback&&this.tabs[t].beforeCallback(this.tabs[t]),this.stackContainerId&&b.byId(this.stackContainerId).selectChild(e,!1),this.tabs[t].afterCallback&&this.tabs[t].afterCallback(this.tabs[t])}})});