define(["dojo/_base/declare","dojo/dom-geometry","dojo/dom-construct","dojo/dom-style"],function(e,t,o,i){return e("dojox.treemap.ScaledLabel",null,{onRendererUpdated:function(e){if("leaf"==e.kind){var o=e.renderer,n=i.get(o,"fontSize");i.set(o.firstChild,"fontSize",n),n=parseInt(n);for(var r=.75*t.getContentBox(o).w/t.getMarginBox(o.firstChild).w,d=t.getContentBox(o).h/t.getMarginBox(o.firstChild).h,a=t.getContentBox(o).w-t.getMarginBox(o.firstChild).w,f=t.getContentBox(o).h-t.getMarginBox(o.firstChild).h,s=Math.floor(n*Math.min(r,d));f>0&&a>0;)i.set(o.firstChild,"fontSize",s+"px"),a=t.getContentBox(o).w-t.getMarginBox(o.firstChild).w,f=t.getContentBox(o).h-t.getMarginBox(o.firstChild).h,n=s,s+=1;(f<0||a<0)&&i.set(o.firstChild,"fontSize",n+"px")}},createRenderer:function(e,t,n){var r=this.inherited(arguments);if("leaf"==n){var d=o.create("div");i.set(d,{position:"absolute",width:"auto"}),o.place(d,r)}return r},styleRenderer:function(e,t,o,n){"leaf"!=n?this.inherited(arguments):(i.set(e,"background",this.getColorForItem(t).toHex()),e.firstChild.innerHTML=this.getLabelForItem(t))}})});