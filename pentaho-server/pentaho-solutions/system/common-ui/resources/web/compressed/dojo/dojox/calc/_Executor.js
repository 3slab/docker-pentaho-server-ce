define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/number","dijit/_base/manager","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/math/_base"],function(n,t,o,r,i,a,e,u){n.experimental("dojox.calc");var c,d,h=t("dojox.calc._Executor",[a,e],{templateString:'<iframe src="'+require.toUrl("dojox/calc/_ExecutorIframe.html")+'" style="display:none;" onload="if(arguments[0] && arguments[0].Function)'+i._scopeName+'.byNode(this)._onLoad(arguments[0])"></iframe>',_onLoad:function(n){c=n,n.outerPrompt=window.prompt,n.dojox={math:{}};for(var t in u)n.dojox.math[t]=o.hitch(u,t);"toFrac"in d&&(n.toFracCall=o.hitch(d,"toFrac"),this.Function("toFrac","x","return toFracCall(x)")),n.isJavaScriptLanguage="1.5"==r.format(1.5,{pattern:"#.#"}),n.Ans=0,n.pi=Math.PI,n.eps=Math.E,n.powCall=o.hitch(d,"pow"),this.normalizedFunction("sqrt","x","return Math.sqrt(x)"),this.normalizedFunction("sin","x","return Math.sin(x)"),this.normalizedFunction("cos","x","return Math.cos(x)"),this.normalizedFunction("tan","x","return Math.tan(x)"),this.normalizedFunction("asin","x","return Math.asin(x)"),this.normalizedFunction("acos","x","return Math.acos(x)"),this.normalizedFunction("atan","x","return Math.atan(x)"),this.normalizedFunction("atan2","y, x","return Math.atan2(y, x)"),this.normalizedFunction("Round","x","return Math.round(x)"),this.normalizedFunction("Int","x","return Math.floor(x)"),this.normalizedFunction("Ceil","x","return Math.ceil(x)"),this.normalizedFunction("ln","x","return Math.log(x)"),this.normalizedFunction("log","x","return Math.log(x)/Math.log(10)"),this.normalizedFunction("pow","x, y","return powCall(x,y)"),this.normalizedFunction("permutations","n, r","return dojox.math.permutations(n, r);"),this.normalizedFunction("P","n, r","return dojox.math.permutations(n, r);"),this.normalizedFunction("combinations","n, r","return dojox.math.combinations(n, r);"),this.normalizedFunction("C","n, r","return dojox.math.combinations(n, r)"),this.normalizedFunction("toRadix","number, baseOut","if(!baseOut){ baseOut = 10; } if(typeof number == 'string'){ number = parseFloat(number); }return number.toString(baseOut);"),this.normalizedFunction("toBin","number","return toRadix(number, 2)"),this.normalizedFunction("toOct","number","return toRadix(number, 8)"),this.normalizedFunction("toHex","number","return toRadix(number, 16)"),this.onLoad()},onLoad:function(){},Function:function(n,t,r){return o.hitch(c,c.Function.apply(c,arguments))},normalizedFunction:function(n,t,r){return o.hitch(c,c.normalizedFunction.apply(c,arguments))},deleteFunction:function(n){c[n]=void 0,delete c[n]},eval:function(n){return c.eval.apply(c,arguments)},destroy:function(){this.inherited(arguments),c=null}});return d={pow:function(n,t){function o(n){return Math.floor(n)==n}if(n>=0||o(t))return Math.pow(n,t);var r=1/t;return o(r)&&1&r?-Math.pow(-n,t):NaN},approx:function(n){return"number"==typeof n?Math.round(1073741789*n)/1073741789:n},_Executor:h}});