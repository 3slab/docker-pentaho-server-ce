define(["dojo/_base/declare","dojo/_base/lang","dijit/registry","dojo/dom-attr","dojo/dom-geometry","dojo/dom-style","dijit/_WidgetBase","dijit/_Container","dijit/_Contained","dojo/_base/array","dojo/query","../utils/layout","./_ScrollableMixin"],function(t,e,i,o,n,d,s,a,r,h,l,c,u){return t("dojox.app.widgets.Container",[s,a,r,u],{scrollable:!1,fixedFooter:"",fixedHeader:"",buildRendering:function(){this._constraint||(this._constraint="center",o.set(this.srcNodeRef,"data-app-constraint","center")),this.inherited(arguments),d.set(this.domNode,"overflow-x","hidden"),d.set(this.domNode,"overflow-y","auto"),this.scrollable&&(this.inherited(arguments),this.domNode.style.position="absolute",this.domNode.style.width="100%",this.domNode.style.height="100%")},startup:function(){this._started||(this.scrollable&&this.inherited(arguments),this._started=!0)},resize:function(t,i){var o=this.domNode;if(this.scrollable)return this.inherited(arguments),void this.layout();t&&n.setMarginBox(o,t);var s=i||{};e.mixin(s,t||{}),"h"in s&&"w"in s||(s=e.mixin(n.getMarginBox(o),s));var a=d.getComputedStyle(o),r=n.getMarginExtents(o,a),h=n.getBorderExtents(o,a),l=this._borderBox={w:s.w-(r.w+h.w),h:s.h-(r.h+h.h)},c=n.getPadExtents(o,a);this._contentBox={l:d.toPixelValue(o,a.paddingLeft),t:d.toPixelValue(o,a.paddingTop),w:l.w-c.w,h:l.h-c.h},this.layout()},layout:function(){var t=l("> [data-app-constraint]",this.domNode).map(function(t){var e=i.getEnclosingWidget(t);return e?(e._constraint=o.get(t,"data-app-constraint"),e):{domNode:t,_constraint:o.get(t,"data-app-constraint")}});this._contentBox&&c.layoutChildren(this.domNode,this._contentBox,t),h.forEach(this.getChildren(),function(t){!t._started&&t.startup&&t.startup()})}})});