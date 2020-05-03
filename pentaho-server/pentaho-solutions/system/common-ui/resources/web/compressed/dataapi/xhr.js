/*!
* Copyright 2010 - 2019 Hitachi Vantara.  All rights reserved.
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

define("common-data/xhr",["common-data/oop"],function(){return pentaho="undefined"==typeof pentaho?{}:pentaho,pentaho.xhr={execute:function(e,t){var a="";for(var r in t.data)a+="&"+r+"="+t.data[r];var n=pentahoGet(e,a);t.complete(n)},SOAP2JS:function(e){for(var t=e.getElementsByTagName("DATA-ROW"),a=e.getElementsByTagName("COLUMN-HDR-ITEM"),r={results:[]},n=0,o=t.length;n<o;n++){var s=e.getElementsByTagName("DATA-ROW")[n];r.results[n]={};for(var l=0,m=a.length;l<m;l++)r.results[n][e.getElementsByTagName("COLUMN-HDR-ITEM")[l].firstChild.nodeValue]=s.getElementsByTagName("DATA-ITEM")[l].firstChild.nodeValue}return r},parseXML:function(e){var t,a;try{return a=new DOMParser,t=a.parseFromString(e,"text/xml")}catch(a){try{return t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e),t}catch(e){return alert("parseXML Error"+e.message),!1}}}},pentaho.xhr});