define(["dojo/_base/lang","dojo/_base/window","dojo/dom-geometry","dojox/gfx","dojo/has"],function(t,e,i,o,n){var r=t.getObject("dojox.charting.axis2d.common",!0),d=function(t){t.marginLeft="0px",t.marginTop="0px",t.marginRight="0px",t.marginBottom="0px",t.paddingLeft="0px",t.paddingTop="0px",t.paddingRight="0px",t.paddingBottom="0px",t.borderLeftWidth="0px",t.borderTopWidth="0px",t.borderRightWidth="0px",t.borderBottomWidth="0px"},a=function(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect();return e.width||e.right-e.left}return i.getMarginBox(t).w};return t.mixin(r,{createText:{gfx:function(t,e,i,o,n,r,d,a){return e.createText({x:i,y:o,text:r,align:n}).setFont(d).setFill(a)},html:function(t,i,r,l,p,x,g,f,h){var s,c=e.doc.createElement("div"),m=c.style;t.getTextDir&&(c.dir=t.getTextDir(x)),d(m),m.font=g,c.innerHTML=String(x).replace(/\s/g,"&nbsp;"),m.color=f,m.position="absolute",m.left="-10000px",e.body().appendChild(c);var b=o.normalizedLength(o.splitFontString(g).size);if(h||(s=a(c)),"rtl"==c.dir&&(r+=h||s),e.body().removeChild(c),m.position="relative",h)switch(m.width=h+"px",p){case"middle":m.textAlign="center",m.left=r-h/2+"px";break;case"end":m.textAlign="right",m.left=r-h+"px";break;default:m.left=r+"px",m.textAlign="left"}else switch(p){case"middle":m.left=Math.floor(r-s/2)+"px";break;case"end":m.left=Math.floor(r-s)+"px";break;default:m.left=Math.floor(r)+"px"}m.top=Math.floor(l-b)+"px",m.whiteSpace="nowrap";var u=e.doc.createElement("div"),w=u.style;return d(w),w.width="0px",w.height="0px",u.appendChild(c),t.node.insertBefore(u,t.node.firstChild),n("dojo-bidi")&&t.htmlElementsRegistry.push([u,r,l,p,x,g,f]),u}}})});