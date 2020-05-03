define(["dojo/_base/lang","dojo/_base/declare","dojo/has","dojo/on","dojo/aspect","dojo/touch","dojo/_base/Color","dojo/dom","dojo/dom-geometry","dojo/_base/window","./_base","./canvas","./shape","./matrix"],function(e,t,n,r,o,i,a,s,u,h,l,c,v,f){function d(t){var n={};for(var r in t)"function"==typeof t[r]?n[r]=e.hitch(t,r):n[r]=t[r];return n}n.add("dom-mutableEvents",function(){var e=document.createEvent("UIEvents");try{return Object.defineProperty?Object.defineProperty(e,"type",{value:"foo"}):e.type="foo","foo"===e.type}catch(e){return!1}}),n.add("MSPointer",navigator.msPointerEnabled),n.add("pointer-events",navigator.pointerEnabled);var g=l.canvasWithEvents={};g.Shape=t("dojox.gfx.canvasWithEvents.Shape",c.Shape,{_testInputs:function(e,t){if(this.clip||!this.canvasFill&&this.strokeStyle)this._hitTestPixel(e,t);else{this._renderShape(e);for(var n=t.length,r=this.getTransform(),o=0;o<n;++o){var i=t[o];if(!i.target){var a=i.x,s=i.y,u=r?f.multiplyPoint(f.invert(r),a,s):{x:a,y:s};i.target=this._hitTestGeometry(e,u.x,u.y)}}}},_hitTestPixel:function(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r.target){var o=r.x,i=r.y;e.clearRect(0,0,1,1),e.save(),e.translate(-o,-i),this._render(e,!0),r.target=e.getImageData(0,0,1,1).data[0]?this:null,e.restore()}}},_hitTestGeometry:function(e,t,n){return e.isPointInPath(t,n)?this:null},_renderFill:function(e,t){if(e.pickingMode)return void("canvasFill"in this&&t&&e.fill());this.inherited(arguments)},_renderStroke:function(e){if(this.strokeStyle&&e.pickingMode){var t=this.strokeStyle.color;try{this.strokeStyle.color=new a(e.strokeStyle),this.inherited(arguments)}finally{this.strokeStyle.color=t}}else this.inherited(arguments)},getEventSource:function(){return this.surface.rawNode},on:function(e,t){var n=this.rawNode;return r(this.getEventSource(),e,function(e){s.isDescendant(e.target,n)&&t.apply(n,arguments)})},connect:function(t,n,r){return"on"==t.substring(0,2)&&(t=t.substring(2)),this.on(t,r?e.hitch(n,r):e.hitch(null,n))},disconnect:function(e){e.remove()}}),g.Group=t("dojox.gfx.canvasWithEvents.Group",[g.Shape,c.Group],{_testInputs:function(e,t){var n,r,o,i=this.children,a=this.getTransform();if(0!==i.length){var s=[];for(n=0;n<t.length;++n)if(o=t[n],s[n]={x:o.x,y:o.y},!o.target){var u=o.x,h=o.y,l=a?f.multiplyPoint(f.invert(a),u,h):{x:u,y:h};o.x=l.x,o.y=l.y}for(n=i.length-1;n>=0;--n){i[n]._testInputs(e,t);var c=!0;for(r=0;r<t.length;++r)if(null==t[r].target){c=!1;break}if(c)break}if(this.clip)for(n=0;n<t.length;++n)o=t[n],o.x=s[n].x,o.y=s[n].y,o.target&&(e.clearRect(0,0,1,1),e.save(),e.translate(-o.x,-o.y),this._render(e,!0),e.getImageData(0,0,1,1).data[0]||(o.target=null),e.restore());else for(n=0;n<t.length;++n)t[n].x=s[n].x,t[n].y=s[n].y}}}),g.Image=t("dojox.gfx.canvasWithEvents.Image",[g.Shape,c.Image],{_renderShape:function(e){var t=this.shape;e.pickingMode?e.fillRect(t.x,t.y,t.width,t.height):this.inherited(arguments)},_hitTestGeometry:function(e,t,n){var r=this.shape;return t>=r.x&&t<=r.x+r.width&&n>=r.y&&n<=r.y+r.height?this:null}}),g.Text=t("dojox.gfx.canvasWithEvents.Text",[g.Shape,c.Text],{_testInputs:function(e,t){return this._hitTestPixel(e,t)}}),g.Rect=t("dojox.gfx.canvasWithEvents.Rect",[g.Shape,c.Rect],{}),g.Circle=t("dojox.gfx.canvasWithEvents.Circle",[g.Shape,c.Circle],{}),g.Ellipse=t("dojox.gfx.canvasWithEvents.Ellipse",[g.Shape,c.Ellipse],{}),g.Line=t("dojox.gfx.canvasWithEvents.Line",[g.Shape,c.Line],{}),g.Polyline=t("dojox.gfx.canvasWithEvents.Polyline",[g.Shape,c.Polyline],{}),g.Path=t("dojox.gfx.canvasWithEvents.Path",[g.Shape,c.Path],{}),g.TextPath=t("dojox.gfx.canvasWithEvents.TextPath",[g.Shape,c.TextPath],{});var p=null;g.Surface=t("dojox.gfx.canvasWithEvents.Surface",c.Surface,{constructor:function(){this._elementUnderPointer=null},fixTarget:function(e){var t=this;return function(r){var o;if(p)if(n("dom-mutableEvents"))Object.defineProperties(r,p);else{r=d(r);for(o in p)r[o]=p[o].value}else{var i=t.getEventSource(),a=i._dojoElementFromPoint((r.changedTouches?r.changedTouches[0]:r).pageX,(r.changedTouches?r.changedTouches[0]:r).pageY);n("dom-mutableEvents")?Object.defineProperties(r,{target:{value:a,configurable:!0,enumerable:!0},gfxTarget:{value:a.shape,configurable:!0,enumerable:!0}}):(r=d(r),r.target=a,r.gfxTarget=a.shape)}if(n("touch")){if(r.changedTouches&&r.changedTouches[0]){var s=r.changedTouches[0];for(o in s)r[o]||(n("dom-mutableEvents")?Object.defineProperty(r,o,{value:s[o],configurable:!0,enumerable:!0}):r[o]=s[o])}r.corrected=r}return e.call(this,r)}},_checkPointer:function(e){function t(t,n,o){for(var i,s=e.bubbles,u=0;i=t[u];++u)p={target:{value:n,configurable:!0,enumerable:!0},gfxTarget:{value:n.shape,configurable:!0,enumerable:!0},relatedTarget:{value:o,configurable:!0,enumerable:!0}},Object.defineProperty(e,"bubbles",{value:i.bubbles,configurable:!0,enumerable:!0}),r.emit(a,i.type,e),p=null;Object.defineProperty(e,"bubbles",{value:s,configurable:!0,enumerable:!0})}var n={out:[{type:"mouseout",bubbles:!0},{type:"MSPointerOut",bubbles:!0},{type:"pointerout",bubbles:!0},{type:"mouseleave",bubbles:!1},{type:"dojotouchout",bubbles:!0}],over:[{type:"mouseover",bubbles:!0},{type:"MSPointerOver",bubbles:!0},{type:"pointerover",bubbles:!0},{type:"mouseenter",bubbles:!1},{type:"dojotouchover",bubbles:!0}]},o=e.target,i=this._elementUnderPointer,a=this.getEventSource();i!==o&&(i&&i!==a&&t(n.out,i,o),this._elementUnderPointer=o,o&&o!==a&&t(n.over,o,i))},getEventSource:function(){return this.rawNode},on:function(e,t){return r(this.getEventSource(),e,t)},connect:function(t,n,r){return"on"==t.substring(0,2)&&(t=t.substring(2)),this.on(t,r?e.hitch(n,r):n)},disconnect:function(e){e.remove()},_initMirrorCanvas:function(){this._initMirrorCanvas=function(){};var t=this.getEventSource(),o=this.mirrorCanvas=t.ownerDocument.createElement("canvas");o.width=1,o.height=1,o.style.position="absolute",o.style.left=o.style.top="-99999px",t.parentNode.appendChild(o);var i="mousemove";n("pointer-events")?i="pointermove":n("MSPointer")?i="MSPointerMove":n("touch")&&(i="touchmove"),r(t,i,e.hitch(this,"_checkPointer"))},destroy:function(){this.mirrorCanvas&&(this.mirrorCanvas.parentNode.removeChild(this.mirrorCanvas),this.mirrorCanvas=null),this.inherited(arguments)}}),g.createSurface=function(e,t,n){if(!t&&!n){var r=u.position(e);t=t||r.w,n=n||r.h}"number"==typeof t&&(t+="px"),"number"==typeof n&&(n+="px");var o=new g.Surface,i=s.byId(e),a=i.ownerDocument.createElement("canvas");a.width=l.normalizedLength(t),a.height=l.normalizedLength(n),i.appendChild(a),o.rawNode=a,o._parent=i,o.surface=o,l._base._fixMsTouchAction(o);var h=a.addEventListener,c=a.removeEventListener,v=[],f=function(e,t,n){o._initMirrorCanvas();var r=o.fixTarget(t);v.push({original:t,actual:r}),h.call(this,e,r,n)},d=function(e,t,n){for(var r,o=0;r=v[o];++o)if(r.original===t){c.call(this,e,r.actual,n),v.splice(o,1);break}};try{Object.defineProperties(a,{addEventListener:{value:f,enumerable:!0,configurable:!0},removeEventListener:{value:d}})}catch(e){a.addEventListener=f,a.removeEventListener=d}return a._dojoElementFromPoint=function(e,t){if(!o.mirrorCanvas)return this;var n=u.position(this,!0);e-=n.x,t-=n.y;var r=o.mirrorCanvas,i=r.getContext("2d"),a=o.children;i.clearRect(0,0,r.width,r.height),i.save(),i.strokeStyle="rgba(127,127,127,1.0)",i.fillStyle="rgba(127,127,127,1.0)",i.pickingMode=!0;for(var s=[{x:e,y:t}],h=a.length-1;h>=0&&(a[h]._testInputs(i,s),!s[0].target);h--);return i.restore(),s[0]&&s[0].target?s[0].target.rawNode:this},o};var b={createObject:function(){var e=this.inherited(arguments),t={};return e.rawNode={shape:e,ownerDocument:e.surface.rawNode.ownerDocument,parentNode:e.parent?e.parent.rawNode:null,addEventListener:function(n,r){for(var i,a=t[n]=t[n]||[],s=0;i=a[s];++s)if(i.listener===r)return;a.push({listener:r,handle:o.after(this,"on"+n,e.surface.fixTarget(r),!0)})},removeEventListener:function(e,n){var r=t[e];if(r)for(var o,i=0;o=r[i];++i)if(o.listener===n)return o.handle.remove(),void r.splice(i,1)}},e}};return g.Group.extend(b),g.Surface.extend(b),g});