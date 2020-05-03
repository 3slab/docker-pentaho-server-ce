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

function pentaho_client_onload(){}function findUrlParam(e,n){var t=n.indexOf("?"),o=n.substr(t);if(t=o.indexOf("?"+e+"="),-1==t&&(t=o.indexOf("&"+e+"=")),-1!=t){var i=o.substr(t+e.length+2);return-1!=i.indexOf("&")&&(i=i.substr(0,i.indexOf("&"))),i=unescape(i)}return null}function WaqrProxy(){this.wiz=new Wiz,this.repositoryBrowserController=new RepositoryBrowserControllerProxy,this.savePg0=function(){}}function Wiz(){this.currPgNum=0,this.previewTypeSelect={}}function RepositoryBrowserControllerProxy(){this.callbackObject=null,this.remoteSave=function(e,n,t,o,i){this.callbackObject.saveState(e,n,t,o,i)}}function parseXML(e){var n;try{return parser=new DOMParser,n=parser.parseFromString(e,"text/xml")}catch(t){try{return n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(e),n}catch(e){return alert(e.message),!1}}}define("common-repo/pentaho-thin-app",[],function(){});var console_enabled=!1,gCtrlr=new WaqrProxy;PentahoUserConsole=function(){try{this.console_enabled=null!=window.parent&&1==window.parent.mantle_initialized}catch(e){this.console_enabled=!1}this.toggleEditCallback=null,this.enableEditButton=function(){this.console_enabled&&window.parent.enableContentEdit&&window.parent.enableContentEdit(!0)},this.disableEditButton=function(){this.console_enabled&&window.parent.enableContentEdit&&window.parent.enableContentEdit(!1)},this.lowerEditButton=function(){this.console_enabled&&window.parent.setContentEditSelected&&window.parent.setContentEditSelected(!0)},this.resetEditButton=function(){this.console_enabled&&window.parent.setContentEditSelected&&window.parent.setContentEditSelected(!1)},this.enableSaveButtons=function(){this.console_enabled&&window.parent.enableSave&&window.parent.enableSave(!0)},this.disableSaveButtons=function(){this.console_enabled&&window.parent.enableSave&&window.parent.enableSave(!1)},this.refreshBrowsePanel=function(){this.console_enabled&&window.parent.mantle_refreshRepository&&window.parent.mantle_refreshRepository()},this.collapseBrowsePanel=function(){this.console_enabled&&window.parent.executeCommand("CollapseBrowserCommand")},this.showBrowsePanel=function(){this.console_enabled&&window.parent.executeCommand("ShowBrowserCommand")},this.refreshBrowsePerspective=function(){this.console_enabled&&window.top.mantle_fireEvent&&window.top.mantle_fireEvent("GenericEvent",{eventSubType:"RefreshBrowsePerspectiveEvent"})},this.refreshCurrentFolder=function(){this.console_enabled&&window.top.mantle_fireEvent&&window.top.mantle_fireEvent("GenericEvent",{eventSubType:"RefreshCurrentFolderEvent"})}};