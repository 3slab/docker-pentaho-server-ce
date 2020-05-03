define(["dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-class","dojo/dom-construct","dijit/registry","dijit/_Contained","dijit/_WidgetBase"],function(e,t,o,i,d,n,s,l){return t("dojox.mobile.PageIndicator",[l,s],{refId:"",baseClass:"mblPageIndicator",buildRendering:function(){this.inherited(arguments),this._tblNode=d.create("table",{className:"mblPageIndicatorContainer"},this.domNode),this._tblNode.insertRow(-1),this.connect(this.domNode,"onclick","_onClick"),this.subscribe("/dojox/mobile/viewChanged",function(e){this.reset()})},startup:function(){var e=this;e.defer(function(){e.reset()})},reset:function(){var e,t,s,l=this._tblNode.rows[0],r=[],a=this.refId&&o.byId(this.refId)||this.domNode,c=a.parentNode.childNodes;for(e=0;e<c.length;e++)t=c[e],this.isView(t)&&r.push(t);if(l.cells.length!==r.length)for(d.empty(l),e=0;e<r.length;e++)t=r[e],s=d.create("div",{className:"mblPageIndicatorDot"}),l.insertCell(-1).appendChild(s);if(0!==r.length){var h=n.byNode(r[0]).getShowingView();for(e=0;e<l.cells.length;e++)s=l.cells[e].firstChild,r[e]===h.domNode?i.add(s,"mblPageIndicatorDotSelected"):i.remove(s,"mblPageIndicatorDotSelected")}},isView:function(e){return e&&1===e.nodeType&&i.contains(e,"mblView")},_onClick:function(t){!1!==this.onClick(t)&&t.target===this.domNode&&(t.layerX<this._tblNode.offsetLeft?e.publish("/dojox/mobile/prevPage",[this]):t.layerX>this._tblNode.offsetLeft+this._tblNode.offsetWidth&&e.publish("/dojox/mobile/nextPage",[this]))},onClick:function(){}})});