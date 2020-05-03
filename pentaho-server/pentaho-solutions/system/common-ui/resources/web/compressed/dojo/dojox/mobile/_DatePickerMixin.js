define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/date","dojo/date/locale","dojo/date/stamp"],function(t,e,s,a,n,o){var i={format:function(t){return n.format(t,{datePattern:this.pattern,selector:"date"})}},r=s.mixin({initLabels:function(){if(this.labels=[],this.labelFrom!==this.labelTo){var t,e,s=new Date(this.labelFrom,0,1);for(t=this.labelFrom,e=0;t<=this.labelTo;t++,e++)s.setFullYear(t),this.labels.push(this.format(s))}}},i),l=s.mixin({initLabels:function(){this.labels=[];for(var t=new Date(2e3,0,16),e=0;e<12;e++)t.setMonth(e),this.labels.push(this.format(t))}},i),u=s.mixin({initLabels:function(){this.labels=[];for(var t=new Date(2e3,0,1),e=1;e<=31;e++)t.setDate(e),this.labels.push(this.format(t))}},i);return e("dojox.mobile._DatePickerMixin",null,{yearPattern:"yyyy",monthPattern:"MMM",dayPattern:"d",initSlots:function(){var t=this.slotClasses,s=this.slotProps;t[0]=e(t[0],r),t[1]=e(t[1],l),t[2]=e(t[2],u),s[0].pattern=this.yearPattern,s[1].pattern=this.monthPattern,s[2].pattern=this.dayPattern,this.reorderSlots()},reorderSlots:function(){if(!this.slotOrder.length){var e=n._parseInfo().bundle["dateFormat-short"].toLowerCase().split(/[^ymd]+/,3);this.slotOrder=t.map(e,function(t){return{y:0,m:1,d:2}[t.charAt(0)]})}},reset:function(){var e=new Date,s=t.map(this.slots,function(t){return t.format(e)});this.set("colors",s),this._disableEndDaysOfMonth(),this.value?(this.set("value",this.value),this.value=null):this.values?(this.set("values",this.values),this.values=null):this.set("values",s)},_onYearSet:function(){var t=this.slots[0],e=t.get("value");t._previousValue&&e==t._previousValue||(this._disableEndDaysOfMonth(),t._previousValue=e,t._set("value",e),this.onYearSet())},onYearSet:function(){},_onMonthSet:function(){var t=this.slots[1],e=t.get("value");t._previousValue&&e==t._previousValue||(this._disableEndDaysOfMonth(),t._previousValue=e,t._set("value",e),this.onMonthSet())},onMonthSet:function(){},_onDaySet:function(){var t=this.slots[2],e=t.get("value");t._previousValue&&e==t._previousValue||this._disableEndDaysOfMonth()||(t._previousValue=e,t._set("value",e),this.onDaySet())},onDaySet:function(){},_disableEndDaysOfMonth:function(){var t=this.slots[0].pattern+"/"+this.slots[1].pattern,e=this.get("values"),s=n.parse(e[0]+"/"+e[1],{datePattern:t,selector:"date"}),o=a.getDaysInMonth(s),i=!1;return o<e[2]&&(i=!0,this.slots[2]._spinToValue(o,!1)),this.disableValues(o),i},_getDateAttr:function(){var t=this.get("values"),e=this.slots,s=e[0].pattern+"/"+e[1].pattern+"/"+e[2].pattern;return n.parse(t[0]+"/"+t[1]+"/"+t[2],{datePattern:s,selector:"date"})},_setValuesAttr:function(e){t.forEach(this.getSlots(),function(t,s){var a=e[s];if("number"==typeof a){var n=[1970,1,1];n.splice(s,1,a-0),a=t.format(new Date(n[0],n[1]-1,n[2]))}t.set("value",a)})},_setValueAttr:function(e){var s=o.fromISOString(e);this.set("values",t.map(this.slots,function(t){return t.format(s)}))},_getValueAttr:function(){return o.toISOString(this.get("date"),{selector:"date"})}})});