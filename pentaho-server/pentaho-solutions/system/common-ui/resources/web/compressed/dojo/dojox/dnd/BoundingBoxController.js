define(["dojo","dojox"],function(t,n){return t.declare("dojox.dnd.BoundingBoxController",null,{_startX:null,_startY:null,_endX:null,_endY:null,constructor:function(n,s){this.events=[t.connect(t.doc,"onmousedown",this,"_onMouseDown"),t.connect(t.doc,"onmouseup",this,"_onMouseUp"),t.connect(t.doc,"onscroll",this,"_finishSelecting")],this.subscriptions=[t.subscribe("/dojox/bounding/cancel",this,"_finishSelecting")],t.forEach(n,function(n){n.selectByBBox&&this.subscriptions.push(t.subscribe("/dojox/dnd/bounding",n,"selectByBBox"))},this),this.domNode=t.byId(s),t.style(this.domNode,{position:"absolute",display:"none"})},destroy:function(){t.forEach(this.events,t.disconnect),t.forEach(this.subscriptions,t.unsubscribe),this.domNode=null},shouldStartDrawingBox:function(t){return!0},boundingBoxIsViable:function(t){return!0},_onMouseDown:function(n){this.shouldStartDrawingBox(n)&&t.mouseButtons.isLeft(n)&&(null==this._startX&&(this._startX=n.clientX,this._startY=n.clientY),this.events.push(t.connect(t.doc,"onmousemove",this,"_onMouseMove")))},_onMouseMove:function(t){this._endX=t.clientX,this._endY=t.clientY,this._drawBoundingBox()},_onMouseUp:function(n){null!==this._endX&&this.boundingBoxIsViable(n)&&t.publish("/dojox/dnd/bounding",[this._startX,this._startY,this._endX,this._endY]),this._finishSelecting()},_finishSelecting:function(){null!==this._startX&&(t.disconnect(this.events.pop()),t.style(this.domNode,"display","none"),this._startX=null,this._endX=null)},_drawBoundingBox:function(){t.style(this.domNode,{left:Math.min(this._startX,this._endX)+"px",top:Math.min(this._startY,this._endY)+"px",width:Math.abs(this._startX-this._endX)+"px",height:Math.abs(this._startY-this._endY)+"px",display:""})}})});