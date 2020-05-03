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

define("common-data/app",["common-data/oop"],function(t){function a(){this.handlers={}}return a.prototype={constructor:a,listen:function(t,a){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(a)},notify:function(t){if(t.target||(t.target=this),this.handlers[t.type]instanceof Array)for(var a=this.handlers[t.type],n=0,e=a.length;n<e;n++)a[n](t)},ignore:function(t,a){if(this.handlers[t]instanceof Array){for(var n=this.handlers[t],e=0,o=n.length;e<o&&n[e]!==a;e++);n.splice(e,1)}}},pentaho="undefined"==typeof pentaho?{}:pentaho,pentaho.app=function(t){a.call(this),this.moduleData=[]},inheritPrototype(pentaho.app,a),pentaho.app.prototype.init=function(t){for(var a={},n=0,e=t.length;n<e;n++)a=t[n],this.register(a),this.start(a)},pentaho.app.prototype.register=function(t){this.moduleData[t.name]={name:t.name,creator:t.objectClass,instance:null}},pentaho.app.prototype.start=function(t){this.moduleData[t.name].instance=new this.moduleData[t.name].creator(this),this.moduleData[t.name].instance.init(t.element||{})},pentaho.app.prototype.stop=function(t){var a=this.moduleData[t];a.instance&&(a.instance.destroy(),a.instance=null)},pentaho.app.prototype.startAll=function(){for(var t in this.moduleData)this.moduleData.hasOwnProperty(t)&&this.start(t)},pentaho.app.prototype.stopAll=function(){for(var t in this.moduleData)this.moduleData.hasOwnProperty(t)&&this.stop(t)},pentaho.app.prototype.getModuleData=function(){var t,a=[];if(arguments.length>0){for(t in this.moduleData)this.moduleData.hasOwnProperty(t)&&(a[a.length]=this.moduleData[t].instance);return a}for(t in this.moduleData)this.moduleData.hasOwnProperty(t)&&(a[a.length]=this.moduleData[t].instance);return a},pentaho.app});