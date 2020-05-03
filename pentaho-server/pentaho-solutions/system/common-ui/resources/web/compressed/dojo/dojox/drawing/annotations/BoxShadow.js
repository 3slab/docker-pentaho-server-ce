define(["dojo","dojo/_base/Color","../util/oo"],function(t,e,i){return i.declare(function(i){this.stencil=i.stencil,this.util=i.stencil.util,this.mouse=i.stencil.mouse,this.style=i.stencil.style;var s={size:6,mult:4,alpha:.05,place:"BR",color:"#646464"};switch(delete i.stencil,this.options=t.mixin(s,i),this.options.color=new e(this.options.color),this.options.color.a=this.options.alpha,this.stencil.shortType){case"image":case"rect":this.method="createForRect";break;case"ellipse":this.method="createForEllipse";break;case"line":this.method="createForLine";break;case"path":this.method="createForPath";break;case"vector":this.method="createForZArrow";break;default:console.warn("A shadow cannot be made for Stencil type ",this.stencil.type)}this.method&&(this.render(),this.stencil.connectMult([[this.stencil,"onTransform",this,"onTransform"],"createForZArrow"==this.method?[this.stencil,"render",this,"render"]:[this.stencil,"render",this,"onRender"],[this.stencil,"onDelete",this,"destroy"]]))},{showing:!0,render:function(){this.container&&this.container.removeShape(),this.container=this.stencil.container.createGroup(),this.container.moveToBack();var t=this.options,e=t.size,i=t.mult,s="createForPath"==this.method?this.stencil.points:this.stencil.data,o=s.r||1,r=t.place,n=t.color;this[this.method](t,e,i,s,o,r,n)},hide:function(){this.showing&&(this.showing=!1,this.container.removeShape())},show:function(){this.showing||(this.showing=!0,this.stencil.container.add(this.container))},createForPath:function(e,i,s,o,r,n,h){for(var c=i*s/4,a=/B/.test(n)?c:/T/.test(n)?-1*c:0,l=/R/.test(n)?c:/L/.test(n)?-1*c:0,d=1;d<=i;d++){var u=d*s;if("svg"==dojox.gfx.renderer){var p=[];t.forEach(o,function(t,e){if(0==e)p.push("M "+(t.x+l)+" "+(t.y+a));else{var i=t.t||"L ";p.push(i+(t.x+l)+" "+(t.y+a))}},this),p.push("Z"),this.container.createPath(p.join(", ")).setStroke({width:u,color:h,cap:"round"})}else{var f=this.container.createPath({}).setStroke({width:u,color:h,cap:"round"});t.forEach(this.points,function(t,e){0==e||"M"==t.t?f.moveTo(t.x+l,t.y+a):"Z"==t.t?f.closePath():f.lineTo(t.x+l,t.y+a)},this),f.closePath()}}},createForLine:function(t,e,i,s,o,r,n){for(var h=e*i/4,c=/B/.test(r)?h:/T/.test(r)?-1*h:0,a=/R/.test(r)?h:/L/.test(r)?-1*h:0,l=1;l<=e;l++){var d=l*i;this.container.createLine({x1:s.x1+a,y1:s.y1+c,x2:s.x2+a,y2:s.y2+c}).setStroke({width:d,color:n,cap:"round"})}},createForEllipse:function(t,e,i,s,o,r,n){for(var h=e*i/8,c=/B/.test(r)?h:/T/.test(r)?-1*h:0,a=/R/.test(r)?.8*h:/L/.test(r)?-.8*h:0,l=1;l<=e;l++){var d=l*i;this.container.createEllipse({cx:s.cx+a,cy:s.cy+c,rx:s.rx-h,ry:s.ry-h,r:o}).setStroke({width:d,color:n})}},createForRect:function(t,e,i,s,o,r,n){for(var h=e*i/2,c=/B/.test(r)?h:/T/.test(r)?0:h/2,a=/R/.test(r)?h:/L/.test(r)?0:h/2,l=1;l<=e;l++){var d=l*i;this.container.createRect({x:s.x+a,y:s.y+c,width:s.width-h,height:s.height-h,r:o}).setStroke({width:d,color:n})}},arrowPoints:function(){var t=this.stencil.data,e=this.stencil.getRadius(),i=this.style.zAngle+30,s=this.util.pointOnCircle(t.x1,t.y1,.75*e,i),o={start:{x:t.x1,y:t.y1},x:s.x,y:s.y},i=this.util.angle(o),r=this.util.length(o),n=this.style.arrows.length,h=this.style.arrows.width/3;return r<n&&(n=r/2),[{x:o.x,y:o.y},this.util.pointOnCircle(o.x,o.y,-n,i-h),this.util.pointOnCircle(o.x,o.y,-n,i+h)]},createForZArrow:function(e,i,s,o,r,n,h){if(!(this.stencil.data.cosphi<1)&&this.stencil.points[0])for(var c=i*s/4,a=/B/.test(n)?c:/T/.test(n)?-1*c:0,l=/R/.test(n)?c:/L/.test(n)?-1*c:0,d=1;d<=i;d++){var u=d*s;if(!(o=this.arrowPoints()))return;if("svg"==dojox.gfx.renderer){var p=[];t.forEach(o,function(t,e){if(0==e)p.push("M "+(t.x+l)+" "+(t.y+a));else{var i=t.t||"L ";p.push(i+(t.x+l)+" "+(t.y+a))}},this),p.push("Z"),this.container.createPath(p.join(", ")).setStroke({width:u,color:h,cap:"round"}).setFill(h)}else{var f=this.container.createPath({}).setStroke({width:u,color:h,cap:"round"});t.forEach(o,function(t,e){0==e||"M"==t.t?f.moveTo(t.x+l,t.y+a):"Z"==t.t?f.closePath():f.lineTo(t.x+l,t.y+a)},this),f.closePath()}var y=this.stencil.points;this.container.createLine({x1:y[0].x,y1:y[0].y,x2:o[0].x,y2:o[0].y}).setStroke({width:u,color:h,cap:"round"})}},onTransform:function(){this.render()},onRender:function(){this.container.moveToBack()},destroy:function(){this.container&&this.container.removeShape()}})});