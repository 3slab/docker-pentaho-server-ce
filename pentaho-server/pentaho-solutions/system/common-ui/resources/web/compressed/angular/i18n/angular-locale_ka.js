angular.module("ngLocale",[],["$provide",function(M){var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};M.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],ERANAMES:["ძველი წელთაღრიცხვით","ახალი წელთაღრიცხვით"],ERAS:["ძვ. წ.","ახ. წ."],FIRSTDAYOFWEEK:0,MONTH:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],SHORTDAY:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],SHORTMONTH:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],STANDALONEMONTH:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],WEEKENDRANGE:[5,6],fullDate:"EEEE, dd MMMM, y",longDate:"d MMMM, y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss",short:"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"GEL",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ka",localeID:"ka",pluralCat:function(M,E){return 1==M?e.ONE:e.OTHER}})}]);