define(["dojo/_base/kernel","dojo/_base/lang","dojo/date","dojox/string/tokenize"],function(t,e,n,r){var i=t.getObject("date.php",!0,dojox);return i.format=function(t,e){return new i.DateFormat(e).format(t)},i.DateFormat=function(e){if(!this.regex){var n=[];for(var i in this.constructor.prototype)t.isString(i)&&1==i.length&&t.isFunction(this[i])&&n.push(i);this.constructor.prototype.regex=new RegExp("(?:(\\\\.)|(["+n.join("")+"]))","g")}var s=[];this.tokens=r(e,this.regex,function(t,e,n){return e?(s.push([n,e]),e):t?t.charAt(1):void 0}),this.replacements=s},t.extend(i.DateFormat,{weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdays_3:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],months_3:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],monthdays:[31,28,31,30,31,30,31,31,30,31,30,31],format:function(t){this.date=t;for(var e,n=0;e=this.replacements[n];n++)this.tokens[e[0]]=this[e[1]]();return this.tokens.join("")},d:function(){var t=this.j();return 1==t.length?"0"+t:t},D:function(){return this.weekdays_3[this.date.getDay()]},j:function(){return this.date.getDate()+""},l:function(){return this.weekdays[this.date.getDay()]},N:function(){var t=this.w();return t||7},S:function(){switch(this.date.getDate()){case 11:case 12:case 13:return"th";case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},w:function(){return this.date.getDay()+""},z:function(){var t=this.date.getTime()-new Date(this.date.getFullYear(),0,1).getTime();return Math.floor(t/864e5)+""},W:function(){var t,e=new Date(this.date.getFullYear(),0,1).getDay()+1,r=this.date.getDay()+1,i=parseInt(this.z());if(i<=8-e&&e>4){var s=new Date(this.date.getFullYear()-1,this.date.getMonth(),this.date.getDate());t=5==e||6==e&&n.isLeapYear(s)?53:52}else{if((Boolean(this.L())?366:365)-i<4-r)t=1;else{var a=i+(7-r)+(e-1);t=Math.ceil(a/7),e>4&&--t}}return t},F:function(){return this.months[this.date.getMonth()]},m:function(){var t=this.n();return 1==t.length?"0"+t:t},M:function(){return this.months_3[this.date.getMonth()]},n:function(){return this.date.getMonth()+1+""},t:function(){return Boolean(this.L())&&1==this.date.getMonth()?29:this.monthdays[this.getMonth()]},L:function(){return n.isLeapYear(this.date)?"1":"0"},o:function(){},Y:function(){return this.date.getFullYear()+""},y:function(){return this.Y().slice(-2)},a:function(){return this.date.getHours()>=12?"pm":"am"},b:function(){return this.a().toUpperCase()},B:function(){for(var t=this.date.getTimezoneOffset()+60,e=3600*this.date.getHours()+60*this.date.getMinutes()+this.getSeconds()+60*t,n=Math.abs(Math.floor(e/86.4)%1e3)+"";n.length<2;)n="0"+n;return n},g:function(){return(this.date.getHours()%12||12)+""},G:function(){return this.date.getHours()+""},h:function(){var t=this.g();return 1==t.length?"0"+t:t},H:function(){var t=this.G();return 1==t.length?"0"+t:t},i:function(){var t=this.date.getMinutes()+"";return 1==t.length?"0"+t:t},s:function(){var t=this.date.getSeconds()+"";return 1==t.length?"0"+t:t},e:function(){return n.getTimezoneName(this.date)},I:function(){},O:function(){var t=Math.abs(this.date.getTimezoneOffset()),e=Math.floor(t/60)+"",n=t%60+"";return 1==e.length&&(e="0"+e),1==n.length&&(e="0"+n),(this.date.getTimezoneOffset()<0?"+":"-")+e+n},P:function(){var t=this.O();return t.substring(0,2)+":"+t.substring(2,4)},T:function(){return this.e().substring(0,3)},Z:function(){return-60*this.date.getTimezoneOffset()},c:function(){return this.Y()+"-"+this.m()+"-"+this.d()+"T"+this.h()+":"+this.i()+":"+this.s()+this.P()},r:function(){return this.D()+", "+this.d()+" "+this.M()+" "+this.Y()+" "+this.H()+":"+this.i()+":"+this.s()+" "+this.O()},U:function(){return Math.floor(this.date.getTime()/1e3)}}),i});