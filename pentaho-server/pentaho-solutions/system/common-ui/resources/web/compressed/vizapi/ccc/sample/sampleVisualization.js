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

require(["common-ui/vizapi/VizController"],function(){pentaho.visualizations.push({id:"sample_calc",type:"calc",source:"Sample",name:"Sample Calculation",class:"pentaho.sample.Calc",args:{},propMap:[],dataReqs:[{name:"Default",reqs:[{id:"rows",dataType:"string",dataStructure:"column",caption:"Level",required:!0,allowMultiple:!1,ui:{group:"data"}},{id:"measures",dataType:"number",dataStructure:"column",caption:"Measure",required:!0,allowMultiple:!1,ui:{group:"data"}},{id:"calc",dataType:"string",values:["MIN","MAX","AVG"],ui:{labels:["Minimum","Maximum","Average"],group:"options",type:"combo",caption:"Calculation"}}]}]}),pentaho.sample={},pentaho.sample.Calc=function(a){this.canvasElement=a,this.numSpan=document.createElement("span"),this.numSpan.style.fontSize="42px",this.numSpan.style.position="relative",this.canvasElement.appendChild(this.numSpan)},pentaho.sample.Calc.prototype.resize=function(a,e){this.numSpan.style.left=(this.canvasElement.offsetWidth-this.numSpan.offsetWidth)/2+"px",this.numSpan.style.top=(this.canvasElement.offsetHeight-this.numSpan.offsetHeight)/2+"px"},pentaho.sample.Calc.prototype.draw=function(a,e){for(var t=a.dataTable.jsonTable.rows,n=[],l=0;l<t.length;l++)n.push(t[l].c[1].v);var i=null;switch(e.calc||"MIN"){case"MAX":for(var l=0;l<n.length;l++)i=null==i?n[l]:Math.max(i,n[l]);break;case"MIN":for(var l=0;l<n.length;l++)i=null==i?n[l]:Math.min(i,n[l]);break;case"AVG":for(var s=0,l=0;l<n.length;l++)s+=n[l];i=s/n.length}this.numSpan.innerHTML=null==i?"":i,this.resize()}});