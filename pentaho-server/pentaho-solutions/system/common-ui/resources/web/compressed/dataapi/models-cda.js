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

define("common-data/models-cda",["common-data/oop","common-data/controller"],function(){return pentaho.pda.CDAHandler=function(a){pentaho.pda.Handler.call(this,a),this.type=pentaho.pda.SOURCE_TYPE_CDA},inheritPrototype(pentaho.pda.CDAHandler,pentaho.pda.Handler),pentaho.pda.CDAHandler.prototype.discoverModels=function(){var a=this;return pentaho.cda.discoverDescriptors(function(e){var t,d,o=0,p=0;for(o=0,p=e.length;o<p;o++)d=new pentaho.cda.Descriptor({name:e[o].name,path:e[o].path}),t=new pentaho.pda.model.cda({id:e[o].name,name:e[o].name,type:pentaho.pda.SOURCE_TYPE_CDA,description:""}),t.descriptor=d,a.modelList.push(t)}),this.sources},pentaho.pda.model.cda=function(a){pentaho.pda.model.call(this,a),this.path=""},inheritPrototype(pentaho.pda.model.cda,pentaho.pda.model),pentaho.pda.model.cda.prototype.discoverModelDetail=function(a){var e=this;this.descriptor.discoverQueries(function(a){var t=0,d=0;for(t=0,d=a.length;t<d;t++){var o=new pentaho.pda.dataelement;o.dataType=pentaho.pda.Column.DATA_TYPES.NONE,o.elementType=pentaho.pda.Column.ELEMENT_TYPES.QUERY,o.id=a[t].id,o.name=a[t].name,o.query_type=a[t].type,o.isMeasures=!1,o.isTime=!1,e.addElement(o),e.addCapability(pentaho.pda.CAPABILITIES.HAS_ACROSS_AXIS),e.addCapability(pentaho.pda.CAPABILITIES.IS_ACROSS_CUSTOM),e.addCapability(pentaho.pda.CAPABILITIES.HAS_FILTERS),e.addCapability(pentaho.pda.CAPABILITIES.IS_FILTER_CUSTOM),e.addCapability(pentaho.pda.CAPABILITIES.CAN_SORT)}})},pentaho.pda.CDAHandler});