angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function o(a,o){var r=o;void 0===r&&(r=Math.min(e(a),3));var i=Math.pow(10,r);return{v:r,f:(a*i|0)%i}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["subaka","kikiiɗe"],DAY:["dewo","aaɓnde","mawbaare","njeslaare","naasaande","mawnde","hoore-biir"],ERANAMES:["Hade Iisa","Caggal Iisa"],ERAS:["H-I","C-I"],FIRSTDAYOFWEEK:0,MONTH:["siilo","colte","mbooy","seeɗto","duujal","korse","morso","juko","siilto","yarkomaa","jolal","bowte"],SHORTDAY:["dew","aaɓ","maw","nje","naa","mwd","hbi"],SHORTMONTH:["sii","col","mbo","see","duu","kor","mor","juk","slt","yar","jol","bow"],STANDALONEMONTH:["siilo","colte","mbooy","seeɗto","duujal","korse","morso","juko","siilto","yarkomaa","jolal","bowte"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss",short:"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MRO",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ff-mr",localeID:"ff_MR",pluralCat:function(a,e){var i=0|a,m=o(a,e);return 1==i&&0==m.v?r.ONE:r.OTHER}})}]);