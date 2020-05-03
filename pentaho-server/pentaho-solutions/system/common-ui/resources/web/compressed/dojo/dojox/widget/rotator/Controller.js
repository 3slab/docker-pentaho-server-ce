define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojo/_base/array","dojo/_base/connect","dojo/query"],function(o,t,a,e,s,n,i){var r="dojoxRotatorPlay",d="dojoxRotatorTab",l="dojoxRotatorSelected";return o("dojox.widget.rotator.Controller",null,{rotator:null,commands:"prev,play/pause,info,next",constructor:function(o,c){t.mixin(this,o);var h=this.rotator;if(h){for(;c.firstChild;)c.removeChild(c.firstChild);var u=this._domNode=a.create("ul",null,c),f=" dojoxRotatorIcon",p=function(o,t,s){a.create("li",{className:t,innerHTML:'<a href="#"><span>'+o+"</span></a>",onclick:function(o){e.stop(o),h&&h.control.apply(h,s)}},u)};s.forEach(this.commands.split(","),function(o,t){switch(o){case"prev":p("Prev","dojoxRotatorPrev"+f,["prev"]);break;case"play/pause":p("Play",r+f,["play"]),p("Pause","dojoxRotatorPause"+f,["pause"]);break;case"info":this._info=a.create("li",{className:"dojoxRotatorInfo",innerHTML:this._buildInfo(h)},u);break;case"next":p("Next","dojoxRotatorNext"+f,["next"]);break;case"#":case"titles":for(var e=0;e<h.panes.length;e++)p("#"==o?e+1:h.panes[e].title||"Tab "+(e+1),("#"==o?"dojoxRotatorNumber":d)+" "+(e==h.idx?l:"")+" dojoxRotatorPane"+e,["go",e])}},this),i("li:first-child",u).addClass("dojoxRotatorFirst"),i("li:last-child",u).addClass("dojoxRotatorLast"),this._togglePlay(),this._con=n.connect(h,"onUpdate",this,"_onUpdate")}},destroy:function(){n.disconnect(this._con),a.destroy(this._domNode)},_togglePlay:function(o){var t=this.rotator.playing;i("."+r,this._domNode).style("display",t?"none":""),i(".dojoxRotatorPause",this._domNode).style("display",t?"":"none")},_buildInfo:function(o){return"<span>"+(o.idx+1)+" / "+o.panes.length+"</span>"},_onUpdate:function(o){var t=this.rotator;switch(o){case"play":case"pause":this._togglePlay();break;case"onAfterTransition":this._info&&(this._info.innerHTML=this._buildInfo(t));var e=function(o){t.idx<o.length&&a.addClass(o[t.idx],l)};e(i(".dojoxRotatorNumber",this._domNode).removeClass(l)),e(i("."+d,this._domNode).removeClass(l))}}})});