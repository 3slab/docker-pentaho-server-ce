define(["dojo/_base/fx","dojo/fx","dojo/_base/lang","dojo/fx/easing","dojox/fx"],function(e,s,t,i,r){var n={_reversed:!1,reverse:function(e,s){var t="playing"==this.status();this.pause(),this._reversed=!this._reversed;var r,n=this.duration,a=n*this._percent,h=n-a,o=(new Date).valueOf(),f=this.curve._properties,d=this.properties;this._endTime=o+a,this._startTime=o-h,t&&this.gotoPercent(h/n);for(r in d){var u=d[r].start;d[r].start=f[r].start=d[r].end,d[r].end=f[r].end=u}if(this._reversed){if(!this.rEase)if(this.fEase=this.easing,s)this.rEase=s;else{var v,g,p=i;for(r in p)if(this.easing==p[r]){v=r;break}v?(/InOut/.test(r)||!/In|Out/i.test(r)?this.rEase=this.easing:g=/In/.test(r)?r.replace("In","Out"):r.replace("Out","In"),g&&(this.rEase=i[g])):(console.info("ease function to reverse not found"),this.rEase=this.easing)}this.easing=this.rEase}else this.easing=this.fEase;return e||"playing"==this.status()||this.play(),this}};return t.extend(e.Animation,n),e.Animation});