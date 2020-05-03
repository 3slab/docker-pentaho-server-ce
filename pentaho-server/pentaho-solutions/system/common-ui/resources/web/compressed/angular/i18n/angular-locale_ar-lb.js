angular.module("ngLocale",[],["$provide",function(e){var E={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ص","م"],DAY:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],ERANAMES:["قبل الميلاد","ميلادي"],ERAS:["ق.م","م"],FIRSTDAYOFWEEK:0,MONTH:["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],SHORTDAY:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],SHORTMONTH:["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],STANDALONEMONTH:["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],WEEKENDRANGE:[5,6],fullDate:"EEEE، d MMMM، y",longDate:"d MMMM، y",medium:"dd‏/MM‏/y h:mm:ss a",mediumDate:"dd‏/MM‏/y",mediumTime:"h:mm:ss a",short:"d‏/M‏/y h:mm a",shortDate:"d‏/M‏/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"L£",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"ar-lb",localeID:"ar_LB",pluralCat:function(e,M){return 0==e?E.ZERO:1==e?E.ONE:2==e?E.TWO:e%100>=3&&e%100<=10?E.FEW:e%100>=11&&e%100<=99?E.MANY:E.OTHER}})}]);