define(["dojo/_base/declare","dojo/_base/sniff","dojo/_base/lang","dojo/aspect","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/dom-construct","dojo/on","dojo/_base/window","dojo/mouse","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Container","./FisheyeListItem"],function(i,t,h,e,s,o,n,d,r,a,l,c,m,g,p,E,u){return i("dojox.widget.FisheyeList",[g,p,E],{constructor:function(){this.pos={x:-1,y:-1},this.timerScale=1},EDGE:{CENTER:0,LEFT:1,RIGHT:2,TOP:3,BOTTOM:4},templateString:'<div class="dojoxFisheyeListBar" data-dojo-attach-point="containerNode"></div>',snarfChildDomOutput:!0,itemWidth:40,itemHeight:40,itemMaxWidth:150,itemMaxHeight:150,imgNode:null,orientation:"horizontal",isFixed:!1,conservativeTrigger:!1,effectUnits:2,itemPadding:10,attachEdge:"center",labelEdge:"bottom",postCreate:function(){var i=this.EDGE,t=this.isHorizontal="horizontal"==this.orientation;s.setSelectable(this.domNode,!1),this.selectedNode=-1,this.isOver=!1,this.hitX1=-1,this.hitY1=-1,this.hitX2=-1,this.hitY2=-1,this.anchorEdge=this._toEdge(this.attachEdge,i.CENTER),this.labelEdge=this._toEdge(this.labelEdge,i.TOP),this.labelEdge==i.CENTER&&(this.labelEdge=i.TOP),t?(this.anchorEdge==i.LEFT&&(this.anchorEdge=i.CENTER),this.anchorEdge==i.RIGHT&&(this.anchorEdge=i.CENTER),this.labelEdge==i.LEFT&&(this.labelEdge=i.TOP),this.labelEdge==i.RIGHT&&(this.labelEdge=i.TOP)):(this.anchorEdge==i.TOP&&(this.anchorEdge=i.CENTER),this.anchorEdge==i.BOTTOM&&(this.anchorEdge=i.CENTER),this.labelEdge==i.TOP&&(this.labelEdge=i.LEFT),this.labelEdge==i.BOTTOM&&(this.labelEdge=i.LEFT));var h=this.effectUnits;this.proximityLeft=this.itemWidth*(h-.5),this.proximityRight=this.itemWidth*(h-.5),this.proximityTop=this.itemHeight*(h-.5),this.proximityBottom=this.itemHeight*(h-.5),this.anchorEdge==i.LEFT&&(this.proximityLeft=0),this.anchorEdge==i.RIGHT&&(this.proximityRight=0),this.anchorEdge==i.TOP&&(this.proximityTop=0),this.anchorEdge==i.BOTTOM&&(this.proximityBottom=0),this.anchorEdge==i.CENTER&&(this.proximityLeft/=2,this.proximityRight/=2,this.proximityTop/=2,this.proximityBottom/=2)},startup:function(){this.children=this.getChildren(),this._initializePositioning(),this._onMouseMoveHandle=l.pausable(c.doc.documentElement,"mousemove",h.hitch(this,"_onMouseMove")),this.conservativeTrigger&&this._onMouseMoveHandle.pause(),this.isFixed&&this.own(l(c.doc,"scroll",h.hitch(this,this._onScroll))),this.own(l(c.doc.documentElement,m.leave,h.hitch(this,"_onBodyOut")),e.after(this,"addChild",h.hitch(this,"_initializePositioning"),!0),e.after(c.global,"onresize",h.hitch(this,"_initializePositioning"),!0))},_initializePositioning:function(){this.itemCount=this.children.length,this.barWidth=(this.isHorizontal?this.itemCount:1)*this.itemWidth,this.barHeight=(this.isHorizontal?1:this.itemCount)*this.itemHeight,this.totalWidth=this.proximityLeft+this.proximityRight+this.barWidth,this.totalHeight=this.proximityTop+this.proximityBottom+this.barHeight;for(var i=0;i<this.children.length;i++){this.children[i].posX=this.itemWidth*(this.isHorizontal?i:0),this.children[i].posY=this.itemHeight*(this.isHorizontal?0:i),this.children[i].cenX=this.children[i].posX+this.itemWidth/2,this.children[i].cenY=this.children[i].posY+this.itemHeight/2;var t=this.isHorizontal?this.itemWidth:this.itemHeight,h=this.effectUnits*t,e=this.isHorizontal?this.children[i].cenX:this.children[i].cenY,s=this.isHorizontal?this.proximityLeft:this.proximityTop,o=this.isHorizontal?this.proximityRight:this.proximityBottom,n=this.isHorizontal?this.barWidth:this.barHeight,d=h,a=h;d>e+s&&(d=e+s),a>n-e+o&&(a=n-e+o),this.children[i].effectRangeLeft=d/t,this.children[i].effectRangeRght=a/t}for(r.set(this.domNode,{width:this.barWidth+"px",height:this.barHeight+"px"}),i=0;i<this.children.length;i++){var l=this.children[i],c=l.domNode;r.set(c,{left:l.posX+"px",top:l.posY+"px",width:this.itemWidth+"px",height:this.itemHeight+"px"}),r.set(l.imgNode,{left:this.itemPadding+"%",top:this.itemPadding+"%",width:100-2*this.itemPadding+"%",height:100-2*this.itemPadding+"%"})}this._calcHitGrid()},_overElement:function(i,t){i=s.byId(i);var h={x:t.pageX,y:t.pageY},e=d.position(i,!0),o=e.y,n=o+e.h,r=e.x,a=r+e.w;return h.x>=r&&h.x<=a&&h.y>=o&&h.y<=n},_onBodyOut:function(i){this._overElement(c.body(),i)||this._setDormant(i)},_setDormant:function(i){this.isOver&&(this.isOver=!1,this.conservativeTrigger&&this._onMouseMoveHandle.pause(),this._onGridMouseMove(-1,-1))},_setActive:function(i){this.isOver||(this.isOver=!0,this.conservativeTrigger&&(this._onMouseMoveHandle.resume(),this.timerScale=0,this._onMouseMove(i),this._expandSlowly()))},_onMouseMove:function(i){i.pageX>=this.hitX1&&i.pageX<=this.hitX2&&i.pageY>=this.hitY1&&i.pageY<=this.hitY2?(this.isOver||this._setActive(i),this._onGridMouseMove(i.pageX-this.hitX1,i.pageY-this.hitY1)):this.isOver&&this._setDormant(i)},_onScroll:function(){this._calcHitGrid()},onResized:function(){this._calcHitGrid()},_onGridMouseMove:function(i,t){this.pos={x:i,y:t},this._paint()},_paint:function(){var i=this.pos.x,t=this.pos.y;if(!(this.itemCount<=0)){var h=this.isHorizontal?i:t,e=this.isHorizontal?this.proximityLeft:this.proximityTop,s=this.isHorizontal?this.itemWidth:this.itemHeight,o=this.isHorizontal?(1-this.timerScale)*this.itemWidth+this.timerScale*this.itemMaxWidth:(1-this.timerScale)*this.itemHeight+this.timerScale*this.itemMaxHeight,n=(h-e)/s-.5,d=o/s-.5;d>this.effectUnits&&(d=this.effectUnits);var r,a=0;this.anchorEdge==this.EDGE.BOTTOM&&(r=(t-this.proximityTop)/this.itemHeight,a=r>.5?1:t/(this.proximityTop+this.itemHeight/2)),this.anchorEdge==this.EDGE.TOP&&(r=(t-this.proximityTop)/this.itemHeight,a=r<.5?1:(this.totalHeight-t)/(this.proximityBottom+this.itemHeight/2)),this.anchorEdge==this.EDGE.RIGHT&&(r=(i-this.proximityLeft)/this.itemWidth,a=r>.5?1:i/(this.proximityLeft+this.itemWidth/2)),this.anchorEdge==this.EDGE.LEFT&&(r=(i-this.proximityLeft)/this.itemWidth,a=r<.5?1:(this.totalWidth-i)/(this.proximityRight+this.itemWidth/2)),this.anchorEdge==this.EDGE.CENTER&&(a=this.isHorizontal?t/this.totalHeight:i/this.totalWidth,a>.5&&(a=1-a),a*=2);for(var l=0;l<this.itemCount;l++){var c=this._weighAt(n,l);c<0&&(c=0),this._setItemSize(l,c*a)}var m=Math.round(n),g=0;n<0?m=0:n>this.itemCount-1?m=this.itemCount-1:g=(n-m)*((this.isHorizontal?this.itemWidth:this.itemHeight)-this.children[m].sizeMain),this._positionElementsFrom(m,g)}},_weighAt:function(i,t){var h=Math.abs(i-t),e=i-t>0?this.children[t].effectRangeRght:this.children[t].effectRangeLeft;return h>e?0:1-h/e},_setItemSize:function(i,t){if(this.children[i].scale!=t){this.children[i].scale=t,t*=this.timerScale;var h=Math.round(this.itemWidth+(this.itemMaxWidth-this.itemWidth)*t),e=Math.round(this.itemHeight+(this.itemMaxHeight-this.itemHeight)*t);if(this.isHorizontal){this.children[i].sizeW=h,this.children[i].sizeH=e,this.children[i].sizeMain=h,this.children[i].sizeOff=e;var s=0;s=this.anchorEdge==this.EDGE.TOP?this.children[i].cenY-this.itemHeight/2:this.anchorEdge==this.EDGE.BOTTOM?this.children[i].cenY-(e-this.itemHeight/2):this.children[i].cenY-e/2,this.children[i].usualX=Math.round(this.children[i].cenX-h/2),r.set(this.children[i].domNode,{top:s+"px",left:this.children[i].usualX+"px"})}else{this.children[i].sizeW=h,this.children[i].sizeH=e,this.children[i].sizeOff=h,this.children[i].sizeMain=e;var o=0;o=this.anchorEdge==this.EDGE.LEFT?this.children[i].cenX-this.itemWidth/2:this.anchorEdge==this.EDGE.RIGHT?this.children[i].cenX-(h-this.itemWidth/2):this.children[i].cenX-h/2,this.children[i].usualY=Math.round(this.children[i].cenY-e/2),r.set(this.children[i].domNode,{left:o+"px",top:this.children[i].usualY+"px"})}r.set(this.children[i].domNode,{width:h+"px",height:e+"px"}),this.children[i].svgNode&&this.children[i].svgNode.setSize(h,e)}},_positionElementsFrom:function(i,t){var h,e,s=0;this.isHorizontal?(h="usualX",e="left"):(h="usualY",e="top"),s=Math.round(this.children[i][h]+t),r.get(this.children[i].domNode,e)!=s+"px"&&(r.set(this.children[i].domNode,e,s+"px"),this._positionLabel(this.children[i]));for(var o=s,n=i-1;n>=0;n--)o-=this.children[n].sizeMain,r.get(this.children[i].domNode,e)!=o+"px"&&(r.set(this.children[n].domNode,e,o+"px"),this._positionLabel(this.children[n]));var d=s;for(n=i+1;n<this.itemCount;n++)d+=this.children[n-1].sizeMain,r.get(this.children[i].domNode,e)!=d+"px"&&(r.set(this.children[n].domNode,e,d+"px"),this._positionLabel(this.children[n]))},_positionLabel:function(i){var t=0,h=0,e=d.getMarginBox(i.lblNode);this.labelEdge==this.EDGE.TOP&&(t=Math.round(i.sizeW/2-e.w/2),h=-e.h),this.labelEdge==this.EDGE.BOTTOM&&(t=Math.round(i.sizeW/2-e.w/2),h=i.sizeH),this.labelEdge==this.EDGE.LEFT&&(t=-e.w,h=Math.round(i.sizeH/2-e.h/2)),this.labelEdge==this.EDGE.RIGHT&&(t=i.sizeW,h=Math.round(i.sizeH/2-e.h/2)),r.set(i.lblNode,{left:t+"px",top:h+"px"})},_calcHitGrid:function(){var i=d.position(this.domNode,!0);this.hitX1=i.x-this.proximityLeft,this.hitY1=i.y-this.proximityTop,this.hitX2=this.hitX1+this.totalWidth,this.hitY2=this.hitY1+this.totalHeight},_toEdge:function(i,t){return this.EDGE[i.toUpperCase()]||t},_expandSlowly:function(){this.isOver&&(this.timerScale+=.2,this._paint(),this.timerScale<1&&setTimeout(h.hitch(this,"_expandSlowly"),10))}})});