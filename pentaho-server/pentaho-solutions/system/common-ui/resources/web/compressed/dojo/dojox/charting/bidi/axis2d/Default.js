define(["dojo/_base/declare","dojo/dom-style"],function(t,e){return t(null,{labelTooltip:function(t,i,n,r,o,l){var d="rtl"==e.get(i.node,"direction"),s="rtl"==i.getTextDir(n);s&&!d&&(n="<span dir='rtl'>"+n+"</span>"),!s&&d&&(n="<span dir='ltr'>"+n+"</span>"),this.inherited(arguments)},_isRtl:function(){return this.chart.isRightToLeft()}})});