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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_Templated","dojo/on","dojo/_base/lang","dojo/query","pentaho/common/button","pentaho/common/Dialog","dojo/dom-class","dojo/text!pentaho/common/RowLimitMessage.html"],function(i,e,t,s,n,o,a,d,h,l,c,m){return i("pentaho.common.RowLimitMessage",[e,t,s],{templateString:m,_runCallback:void 0,_scheduleCallback:void 0,_getLocaleString:void 0,postCreate:function(){this.inherited(arguments),o(this.systemLimitRunNow,"click",a.hitch(this,"_onRun")),o(this.systemLimitSchedule,"click",a.hitch(this,"_onSchedule"))},hide:function(){c.add(this.limitArea,"hidden"),c.add(this.limitMessage,"hidden"),c.add(this.systemLimitMessage,"hidden")},registerLocalizationLookup:function(i){this._getLocaleString=i,this._localize()},bindRun:function(i){this._runCallback=i},bindSchedule:function(i){this._scheduleCallback=i},_localize:function(){this._getLocaleString&&(this.limitMessage.innerHTML=this._getLocaleString("UserRowLimitReachedMessage"),this.systemMessageInner.innerHTML=this._getLocaleString("SystemRowLimitReachedMessage"),this.systemLimitRunNow.innerHTML=this._getLocaleString("RowLimitRunNow"),this.systemLimitSchedule.innerHTML=this._getLocaleString("RowLimitSchedule"))},limitReached:function(){c.remove(this.limitArea,"hidden"),c.remove(this.limitMessage,"hidden"),c.add(this.systemLimitMessage,"hidden")},systemLimitReached:function(){c.remove(this.limitArea,"hidden"),c.add(this.limitMessage,"hidden"),c.remove(this.systemLimitMessage,"hidden"),this._localize()},_onRun:function(){this._runCallback&&this._runCallback()},_onSchedule:function(){this._scheduleCallback&&this._scheduleCallback()}})});