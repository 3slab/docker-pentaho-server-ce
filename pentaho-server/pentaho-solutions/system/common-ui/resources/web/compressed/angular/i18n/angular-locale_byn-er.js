angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function n(e,n){var a=n;void 0===a&&(a=Math.min(M(e),3));var r=Math.pow(10,a);return{v:a,f:(e*r|0)%r}}var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ፋዱስ ጃብ","ፋዱስ ደምቢ"],DAY:["ሰንበር ቅዳዅ","ሰኑ","ሰሊጝ","ለጓ ወሪ ለብዋ","ኣምድ","ኣርብ","ሰንበር ሽጓዅ"],MONTH:["ልደትሪ","ካብኽብቲ","ክብላ","ፋጅኺሪ","ክቢቅሪ","ምኪኤል ትጟኒሪ","ኰርኩ","ማርያም ትሪ","ያኸኒ መሳቅለሪ","መተሉ","ምኪኤል መሽወሪ","ተሕሳስሪ"],SHORTDAY:["ሰ/ቅ","ሰኑ","ሰሊጝ","ለጓ","ኣምድ","ኣርብ","ሰ/ሽ"],SHORTMONTH:["ልደት","ካብኽ","ክብላ","ፋጅኺ","ክቢቅ","ም/ት","ኰር","ማርያ","ያኸኒ","መተሉ","ም/ም","ተሕሳ"],fullDate:"EEEE፡ dd MMMM ግርጋ y G",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a",short:"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Nfk",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"byn-er",pluralCat:function(e,M){var r=0|e,m=n(e,M);return 1==r&&0==m.v?a.ONE:a.OTHER}})}]);