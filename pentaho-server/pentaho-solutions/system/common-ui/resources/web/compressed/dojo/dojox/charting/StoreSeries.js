define(["dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred"],function(e,t,s){return t("dojox.charting.StoreSeries",null,{constructor:function(e,t,s){this.store=e,this.kwArgs=t,this.value=s?"function"==typeof s?s:"object"==typeof s?function(e){var t={};for(var i in s)t[i]=e[s[i]];return t}:function(e){return e[s]}:function(e){return e.value},this.data=[],this._initialRendering=!1,this.fetch()},destroy:function(){this.observeHandle&&this.observeHandle.remove()},setSeriesObject:function(e){this.series=e},fetch:function(){function t(){i.data=e.map(i.objects,function(e){return i.value(e,i.store)}),i._pushDataChanges()}var i=this;this.observeHandle&&this.observeHandle.remove();var r=this.store.query(this.kwArgs.query,this.kwArgs);s.when(r,function(e){i.objects=e,t()}),r.observe&&(this.observeHandle=r.observe(t,!0))},_pushDataChanges:function(){this.series&&(this.series.chart.updateSeries(this.series.name,this,this._initialRendering),this._initialRendering=!1,this.series.chart.delayedRender())}})});