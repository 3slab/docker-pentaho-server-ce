angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");return-1==r?0:e.length-r-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(r(e),3));var M=Math.pow(10,n);return{v:n,f:(e*M|0)%M}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["vorm.","nachm."],DAY:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],ERANAMES:["v. Chr.","n. Chr."],ERAS:["v. Chr.","n. Chr."],FIRSTDAYOFWEEK:0,MONTH:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],SHORTDAY:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],SHORTMONTH:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],STANDALONEMONTH:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"dd.MM.y HH:mm:ss",mediumDate:"dd.MM.y",mediumTime:"HH:mm:ss",short:"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CHF",DECIMAL_SEP:".",GROUP_SEP:"'",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"de-ch",localeID:"de_CH",pluralCat:function(e,r){var M=0|e,i=a(e,r);return 1==M&&0==i.v?n.ONE:n.OTHER}})}]);