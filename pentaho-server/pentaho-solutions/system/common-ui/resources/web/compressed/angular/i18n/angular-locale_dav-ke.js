angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");return-1==i?0:a.length-i-1}function r(a,r){var u=r;void 0===u&&(u=Math.min(i(a),3));var M=Math.pow(10,u);return{v:u,f:(a*M|0)%M}}var u={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Luma lwa K","luma lwa p"],DAY:["Ituku ja jumwa","Kuramuka jimweri","Kuramuka kawi","Kuramuka kadadu","Kuramuka kana","Kuramuka kasanu","Kifula nguwo"],ERANAMES:["Kabla ya Kristo","Baada ya Kristo"],ERAS:["KK","BK"],FIRSTDAYOFWEEK:0,MONTH:["Mori ghwa imbiri","Mori ghwa kawi","Mori ghwa kadadu","Mori ghwa kana","Mori ghwa kasanu","Mori ghwa karandadu","Mori ghwa mfungade","Mori ghwa wunyanya","Mori ghwa ikenda","Mori ghwa ikumi","Mori ghwa ikumi na imweri","Mori ghwa ikumi na iwi"],SHORTDAY:["Jum","Jim","Kaw","Kad","Kan","Kas","Ngu"],SHORTMONTH:["Imb","Kaw","Kad","Kan","Kas","Kar","Mfu","Wun","Ike","Iku","Imw","Iwi"],STANDALONEMONTH:["Mori ghwa imbiri","Mori ghwa kawi","Mori ghwa kadadu","Mori ghwa kana","Mori ghwa kasanu","Mori ghwa karandadu","Mori ghwa mfungade","Mori ghwa wunyanya","Mori ghwa ikenda","Mori ghwa ikumi","Mori ghwa ikumi na imweri","Mori ghwa ikumi na iwi"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a",short:"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"dav-ke",localeID:"dav_KE",pluralCat:function(a,i){var M=0|a,n=r(a,i);return 1==M&&0==n.v?u.ONE:u.OTHER}})}]);