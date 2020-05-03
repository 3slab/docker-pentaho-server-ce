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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/query","dijit/Calendar","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!pentaho/common/Calendar.html","pentaho/common/SmallImageButton","pentaho/common/DropDownButton","dojo/_base/event","dojo/on"],function(t,e,o,i,n,a,d,r,h,s,l,c,u){return t("PentahoCalendar._MonthDropDown",[a,d,r],{months:[],templateString:"<div class='pentaho-listbox' dojoAttachEvent='onclick:_onClick,onmouseover:_onMenuHover,onmouseout:_onMenuHover'></div>",_setMonthsAttr:function(t){this.domNode.innerHTML=array.map(t,function(t,e){return t?"<div class='pentaho-listitem' month='"+e+"'>"+t+"</div>":""}).join("")},_onClick:function(t){this.onChange(t.target.getAttribute("month"))},onChange:function(t){},_onMenuHover:function(t){o.toggle(t.target,"pentaho-listitem-hover","mouseover"==t.type)}}),t("pentaho.common.Calendar",[n,a,d,r],{templateString:h,buildRendering:function(){this.inherited(arguments),u(this.previousYearLabelNode,"click",e.hitch(this,this._prevYearClick)),u(this.nextYearLabelNode,"click",e.hitch(this,this._nextYearClick))},_populateGrid:function(){this.inherited(arguments),i(".dijitCalendarDateLabel",this.domNode).forEach(function(t){o.add(t,"label")},this),i(".dijitCalendarPreviousMonth",this.domNode).forEach(function(t){o.add(t,"pentaho-light-text")},this),i(".dijitCalendarNextMonth",this.domNode).forEach(function(t){o.add(t,"pentaho-light-text")},this),i(".dijitCalendarCurrentMonth",this.domNode).forEach(function(t){o.add(t,"pentaho-listitem")},this),i(".dijitCalendarCurrentDate",this.domNode).forEach(function(t){o.remove(t,"pentaho-listitem"),o.add(t,"panel-content")},this),i(".dijitCalendarSelectedDate",this.domNode).forEach(function(t){o.add(t,"pentaho-listitem-selected")},this)},_onDayMouseOver:function(t){var e=o.contains(t.target,"dijitCalendarDateLabel")?t.target.parentNode:t.target;e&&(e.dijitDateValue||e==this.previousYearLabelNode||e==this.nextYearLabelNode)&&(o.add(e,"pentaho-listitem-hover"),this._currentNode=e)},_onDayMouseOut:function(t){if(this._currentNode&&(!t.relatedTarget||t.relatedTarget.parentNode!=this._currentNode)){var e="pentaho-listitem-hover";o.contains(this._currentNode,"dijitCalendarActiveDate")&&(e+=" pentaho-listitem-hover"),o.remove(this._currentNode,e),this._currentNode=null}},_onDayMouseUp:function(t){this.inherited(arguments);var e=t.target.parentNode;e&&e.dijitDateValue&&o.add(e,"pentaho-listitem-selected")},_onDayClick:function(t){this.inherited(arguments),c.stop(t);for(var e=t.target;e&&!e.dijitDateValue;e=e.parentNode);e&&!o.contains(e,"dijitCalendarDisabledDate")&&o.add(e,"pentaho-listitem-selected")}})});