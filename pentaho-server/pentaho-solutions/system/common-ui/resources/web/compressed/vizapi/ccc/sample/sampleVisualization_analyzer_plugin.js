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

var analyzerPlugins=analyzerPlugins||[];analyzerPlugins.push({init:function(){cv.pentahoVisualizations.push(pentaho.visualizations.getById("sample_calc")),cv.pentahoVisualizationHelpers.sample_calc={placeholderImageSrc:CONTEXT_PATH+"content/analyzer/images/viz/VERTICAL_BAR.png",generateOptionsFromAnalyzerState:function(a){return{}}},dojo.declare("SampleConfig",[analyzer.LayoutConfig],{onModelEvent:function(a,e,i,n){if("value"===i)return this.report.visualization.args.calc=a.byId("calc").value,this.report.history.add(new cv.ReportState("actionChartProps")),void this.report.refreshReport();this.inherited(arguments)},getConfiguration:function(){var a=this.inherited(arguments);return dojo.forEach(a.properties,function(a){"undefined"!==this.report.visualization.args[a.id]&&(a.value=this.report.visualization.args[a.id])},this),a}}),analyzer.LayoutPanel.configurationManagers.JSON_sample_calc=SampleConfig}});