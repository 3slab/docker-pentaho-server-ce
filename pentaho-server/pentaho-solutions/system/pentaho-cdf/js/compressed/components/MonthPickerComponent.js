define(["../lib/jquery","./BaseComponent"],function(e,t){return t.extend({update:function(){var t=this,n=t.getMonthPicker(t.name,t.size,t.initialDate,t.minDate,t.maxDate,t.months);t.placeholder().html(n),e("#"+t.name).change(function(){t.dashboard.processChange(t.name)}),t._doAutoFocus()},getValue:function(){var t=this,n=e("#"+t.name).val(),a=n.substring(0,4),r=parseInt(n.substring(5,7)-1),o=new Date(a,r,1),s=t.getMonthPicker(t.name,t.size,o,t.minDate,t.maxDate,t.months);return t.placeholder().html(s),e("#"+t.name).change(function(){t.dashboard.processChange(t.name)}),n},parseDate:function(e){var t,n,a,r=null,o=e.split("-");return 3==o.length?(t=parseInt(o[0]),n=parseInt(o[1]),a=parseInt(o[2]),r=new Date(Date.UTC(t,n-1,a))):2==o.length&&(t=parseInt(o[0]),n=parseInt(o[1]),r=new Date(Date.UTC(t,n-1))),r},getMonthsAppart:function(e,t){var n,a;e<t?(n=e,a=t):(n=t,a=e);var r=a.getFullYear()-n.getFullYear(),o=12*r;return a.getMonth()-n.getMonth()+o},normalizeDateToCompare:function(e){var t=e;return t.setDate(1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t},getMonthPicker:function(e,t,n,a,r,o){var s="<select";s+=" id='"+e+"'",void 0!=n&&null!=n||(n=new Date),void 0!=a&&null!=a||(a=new Date,a.setYear(1980)),void 0!=r&&null!=r||(r=new Date,r.setYear(2060)),"string"==typeof n&&(n=this.parseDate(n)),"string"==typeof a&&(a=this.parseDate(a)),"string"==typeof r&&(r=this.parseDate(r));var i=!1;void 0!=o&&0!=o||(o=this.getMonthsAppart(a,r),i=!0),void 0!=t&&(s+=" size='"+t+"'"),s+=">";var h=new Date(+n);1==i?h.setMonth(h.getMonth()-this.getMonthsAppart(a,h)-1):h.setMonth(h.getMonth()-o/2-1),h=this.normalizeDateToCompare(h);for(var l=this.normalizeDateToCompare(a),u=this.normalizeDateToCompare(r),g=0;g<=o;g++)h.setMonth(h.getMonth()+1),h>=l&&h<=u&&(s+="<option value = '"+h.getFullYear()+"-"+this.zeroPad(h.getMonth()+1,2)+"' ",h.getFullYear()==n.getFullYear()&&h.getMonth()==n.getMonth()&&(s+="selected='selected'"),s+=">"+this.dashboard.monthNames[h.getMonth()]+" "+h.getFullYear()+"</option>");return s+="</select>"},zeroPad:function(e,t){var n="00000000000000"+e;return n.substring(n.length-t,n.length)}})});