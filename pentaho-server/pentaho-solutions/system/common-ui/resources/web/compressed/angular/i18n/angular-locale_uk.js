angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function n(e,n){var E=n;void 0===E&&(E=Math.min(M(e),3));var r=Math.pow(10,E);return{v:E,f:(e*r|0)%r}}var E={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["дп","пп"],DAY:["неділя","понеділок","вівторок","середа","четвер","пʼятниця","субота"],ERANAMES:["до нашої ери","нашої ери"],ERAS:["до н.е.","н.е."],FIRSTDAYOFWEEK:0,MONTH:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],SHORTDAY:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],SHORTMONTH:["січ.","лют.","бер.","квіт.","трав.","черв.","лип.","серп.","вер.","жовт.","лист.","груд."],STANDALONEMONTH:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y 'р'.",longDate:"d MMMM y 'р'.",medium:"d MMM y 'р'. HH:mm:ss",mediumDate:"d MMM y 'р'.",mediumTime:"HH:mm:ss",short:"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₴",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"uk",localeID:"uk",pluralCat:function(e,M){var r=0|e,a=n(e,M);return 0==a.v&&r%10==1&&r%100!=11?E.ONE:0==a.v&&r%10>=2&&r%10<=4&&(r%100<12||r%100>14)?E.FEW:0==a.v&&r%10==0||0==a.v&&r%10>=5&&r%10<=9||0==a.v&&r%100>=11&&r%100<=14?E.MANY:E.OTHER}})}]);