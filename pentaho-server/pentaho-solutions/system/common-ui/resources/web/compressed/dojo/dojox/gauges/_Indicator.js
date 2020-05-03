define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/fx","dojo/_base/html","dojo/_base/connect","dijit/_Widget","dojo/dom-construct","dojo/dom-class"],function(t,e,i,a,o,s,n,h){return e("dojox.gauges._Indicator",[s],{value:0,type:"",color:"black",strokeColor:"",label:"",font:{family:"sans-serif",size:"12px"},length:0,width:0,offset:0,hover:"",front:!1,easing:i._defaultEasing,duration:1e3,hideValue:!1,noChange:!1,interactionMode:"indicator",_gauge:null,title:"",startup:function(){this.onDragMove&&(this.onDragMove=t.hitch(this.onDragMove)),""===this.strokeColor&&(this.strokeColor=void 0)},postCreate:function(){""===this.title&&a.style(this.domNode,"display","none"),t.isString(this.easing)&&(this.easing=t.getObject(this.easing))},buildRendering:function(){var t=this.domNode=this.srcNodeRef?this.srcNodeRef:n.create("div");h.add(t,"dojoxGaugeIndicatorDiv");var e=n.create("label");this.title&&(e.innerHTML=this.title+":"),n.place(e,t),this.valueNode=n.create("input",{className:"dojoxGaugeIndicatorInput",size:5,value:this.value}),n.place(this.valueNode,t),o.connect(this.valueNode,"onchange",this,this._update)},_update:function(){this._updateValue(!0)},_updateValue:function(t){var e=this.valueNode.value;""===e?this.value=null:(this.value=Number(e),this.hover=this.title+": "+e),this._gauge&&(this.draw(this._gauge._indicatorsGroup,!t&&void 0!=t),this.valueNode.value=this.value,("Target"==this.title||this.front)&&this._gauge.moveIndicator&&this._gauge.moveIndicatorToFront(this),this.valueChanged())},valueChanged:function(){},update:function(t,e){this.noChange||(this.valueNode.value=t,this._updateValue(e))},handleMouseOver:function(t){this._gauge._handleMouseOverIndicator(this,t)},handleMouseOut:function(t){this._gauge._handleMouseOutIndicator(this,t),this._gauge.gaugeContent.style.cursor=""},handleMouseDown:function(t){this._gauge._handleMouseDownIndicator(this,t)},handleTouchStart:function(t){this._gauge.handleTouchStartIndicator(this,t)},onDragMove:function(){this.value=Math.floor(this.value),this.valueNode.value=this.value,this.hover=this.title+": "+this.value},draw:function(t){},remove:function(){this.shape&&this.shape.parent.remove(this.shape),this.shape=null,this.text&&this.text.parent.remove(this.text),this.text=null}})});