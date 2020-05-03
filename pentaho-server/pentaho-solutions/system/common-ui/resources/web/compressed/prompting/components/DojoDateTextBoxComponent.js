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

define(["cdf/components/BaseComponent","dojo/date/locale","dijit/form/DateTextBox","dijit/registry","amd!cdf/lib/jquery.ui","css!./theme/DojoDateTextBoxComponent.css"],function(t,e,a,r,o){return t.extend({localeFormatter:e,clear:function(){this.onChangeHandle&&this.onChangeHandle.remove();var t=r.byId(this.dijitId);t&&t.destroyRecursive()},_parseDate:function(t){return this.transportFormatter?this.transportFormatter.parse(t):this.localeFormatter.parse(t,{datePattern:this.dateFormat,selector:"date"})},update:function(){void 0==this.dijitId&&(this.dijitId=this.htmlObject+"_input"),this.clear();var t=this,e=this.dashboard.getParameterValue(this.parameter),r=void 0;this._isLegacyDateFormat()&&this._convertFormat(),e?(o.isArray(e)&&(e=0==e.length?void 0:1==e.length?e[0]:e),r=e?this._parseDate(e):null):r=null,o("#"+this.htmlObject).html(o("<input/>").attr("id",this.dijitId));var i={datePattern:this._getDateFormat(),selector:"date",formatLength:"medium"};"TODAY"==t.startDate?i.min=new Date:t.startDate&&(i.min=this._parseDate(t.startDate)),"TODAY"==t.endDate?i.max=new Date:t.endDate&&(i.max=this._parseDate(t.endDate));var s=new a({name:this.name,constraints:i,onChange:function(){t.dashboard.processChange(t.name)}},this.dijitId);this._getDateFormat().match(/(^|(?!y).)(y{2}(?!y))/)&&(s.constraints.fullYear=!1),s.set("value",r),this._doAutoFocus()},getValue:function(){var t=r.byId(this.dijitId).get("value");return this._getFormattedDate(t)},_getFormattedDate:function(t){return this.transportFormatter?this.transportFormatter.format(t):this.localeFormatter.format(t,{datePattern:this._getDateFormat(),selector:"date"})},_isLegacyDateFormat:function(){var t,e=this._getDateFormat();if(e.match(/o/))return!0;try{t=this.localeFormatter.format(new Date,{datePattern:e,selector:"date"})}catch(t){return!0}return!e.match(/(G|qQ|w|E|a|h|H|K|k|s|S|vz|Z)/)&&t==o.datepicker.formatDate(e,new Date)},_convertFormat:function(){var t=this;t.dateFormat=this._getDateFormat();var e=[[/(^|(?!y).)(y{1}(?!y))/,"$1yy"],[/(^|(?!y).)(y{2}(?!y))/,"$1yyyy"]],a=[[/(^|(?!M).)(M{1}(?!M))/,"$1MMM"],[/(^|(?!M).)(M{2}(?!M))/,"$1MMMM"]],r=[[/(^|(?!m).)(m{1}(?!m))/,"$1M"],[/(^|(?!m).)(m{2}(?!m))/,"$1MM"]],i=[[/(^|(?!D).)(D{1}(?!D))/,"$1EEE"],[/(^|(?!D).)(D{2}(?!D))/,"$1EEEE"]],s=[[/(^|(?!o).)(o{1}(?!o))/,"$1D"],[/(^|(?!o).)(o{2}(?!o))/,"$1DD"],[/(^|(?!o).)(o{3}(?!o))/,"$1DDD"]],n=function(e,a){if(a[0].test(t.dateFormat))return t.dateFormat=t.dateFormat.replace(a[0],a[1]),!1};o.each(e,n),o.each(a,n),o.each(r,n),o.each(i,n),o.each(s,n)},_getDateFormat:function(){return this.dateFormat?this.dateFormat:this.param&&this.param.attributes["data-format"]?this.param.attributes["data-format"]:"yyyy-MM-dd"}})});