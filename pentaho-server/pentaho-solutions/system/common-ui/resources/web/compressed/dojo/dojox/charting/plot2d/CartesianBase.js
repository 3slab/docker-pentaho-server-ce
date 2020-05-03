define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/has","./Base","../scaler/primitive","dojox/gfx","dojox/gfx/fx","dojox/lang/utils"],function(t,i,s,e,h,a,o,r,l){return i("dojox.charting.plot2d.CartesianBase",h,{baseParams:{hAxis:"x",vAxis:"y",labels:!1,labelOffset:10,fixed:!0,precision:1,labelStyle:"inside",htmlLabels:!0,omitLabels:!0,labelFunc:null},constructor:function(i,s){this.axes=["hAxis","vAxis"],this.zoom=null,this.zoomQueue=[],this.lastWindow={vscale:1,hscale:1,xoffset:0,yoffset:0},this.hAxis=s&&s.hAxis||"x",this.vAxis=s&&s.vAxis||"y",this.series=[],this.opt=t.clone(this.baseParams),l.updateWithObject(this.opt,s)},clear:function(){return this.inherited(arguments),this._hAxis=null,this._vAxis=null,this},cleanGroup:function(t,i){if(this.inherited(arguments),!i&&this.chart._nativeClip){var s=this.chart.offsets,e=this.chart.dim,h=Math.max(0,e.width-s.l-s.r),a=Math.max(0,e.height-s.t-s.b);this.group.setClip({x:s.l,y:s.t,width:h,height:a}),this._clippedGroup||(this._clippedGroup=this.group.createGroup())}},purgeGroup:function(){this.inherited(arguments),this._clippedGroup=null},getGroup:function(){return this._clippedGroup||this.group},setAxis:function(t){return t&&(this[t.vertical?"_vAxis":"_hAxis"]=t),this},toPage:function(t){var i=this._hAxis,s=this._vAxis,e=i.getScaler(),h=s.getScaler(),a=e.scaler.getTransformerFromModel(e),o=h.scaler.getTransformerFromModel(h),r=this.chart.getCoords(),l=this.chart.offsets,n=this.chart.dim,c=function(t){var e={};return e.x=a(t[i.name])+r.x+l.l,e.y=r.y+n.height-l.b-o(t[s.name]),e};return t?c(t):c},toData:function(t){var i=this._hAxis,s=this._vAxis,e=i.getScaler(),h=s.getScaler(),a=e.scaler.getTransformerFromPlot(e),o=h.scaler.getTransformerFromPlot(h),r=this.chart.getCoords(),l=this.chart.offsets,n=this.chart.dim,c=function(t){var e={};return e[i.name]=a(t.x-r.x-l.l),e[s.name]=o(r.y+n.height-t.y-l.b),e};return t?c(t):c},isDirty:function(){return this.dirty||this._hAxis&&this._hAxis.dirty||this._vAxis&&this._vAxis.dirty},createLabel:function(t,i,s,e){if(this.opt.labels){var h,a,r=this.opt.labelFunc?this.opt.labelFunc.apply(this,[i,this.opt.fixed,this.opt.precision]):this._getLabel(isNaN(i.y)?i:i.y);if("inside"==this.opt.labelStyle){var l=o._base._getTextBox(r,{font:e.series.font});if(h=s.x+s.width/2,a=s.y+s.height/2+l.h/4,l.w>s.width||l.h>s.height)return}else h=s.x+s.width/2,a=s.y-this.opt.labelOffset;this.renderLabel(t,h,a,r,e,"inside"==this.opt.labelStyle)}},performZoom:function(i,e){var h=this._vAxis.scale||1,a=this._hAxis.scale||1,o=i.height-e.b,l=this._hScaler.bounds,n=(l.from-l.lower)*l.scale,c=this._vScaler.bounds,u=(c.from-c.lower)*c.scale,d=h/this.lastWindow.vscale,x=a/this.lastWindow.hscale,f=(this.lastWindow.xoffset-n)/(1==this.lastWindow.hscale?a:this.lastWindow.hscale),m=(u-this.lastWindow.yoffset)/(1==this.lastWindow.vscale?h:this.lastWindow.vscale),p=this.getGroup(),g=r.animateTransform(t.delegate({shape:p,duration:1200,transform:[{name:"translate",start:[0,0],end:[e.l*(1-x),o*(1-d)]},{name:"scale",start:[1,1],end:[x,d]},{name:"original"},{name:"translate",start:[0,0],end:[f,m]}]},this.zoom));return t.mixin(this.lastWindow,{vscale:h,hscale:a,xoffset:n,yoffset:u}),this.zoomQueue.push(g),s.connect(g,"onEnd",this,function(){this.zoom=null,this.zoomQueue.shift(),this.zoomQueue.length>0&&this.zoomQueue[0].play()}),1==this.zoomQueue.length&&this.zoomQueue[0].play(),this},initializeScalers:function(t,i){return this._hAxis?(this._hAxis.initialized()||this._hAxis.calculate(i.hmin,i.hmax,t.width),this._hScaler=this._hAxis.getScaler()):this._hScaler=a.buildScaler(i.hmin,i.hmax,t.width),this._vAxis?(this._vAxis.initialized()||this._vAxis.calculate(i.vmin,i.vmax,t.height),this._vScaler=this._vAxis.getScaler()):this._vScaler=a.buildScaler(i.vmin,i.vmax,t.height),this}})});