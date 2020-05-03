define(["./protovis-compat!","jquery","./jquery.tipsy"],function(e,t){return function(){function n(t){return e.Transform.identity.translate(t.left(),t.top()).times(t.transform())}function o(e){for(var t,o,i,r=e.instance(),a=r.left,s=r.top,u=r.width,l=r.height;i=e.parent;){a<0&&(u+=a,a=0),s<0&&(l+=s,s=0),t=r.right,t<0&&(u+=t),o=r.bottom,o<0&&(l+=o);var d=n(i),f=d.k;a=d.x+f*a,s=d.y+f*s,u*=f,l*=f,e=i,r=e.instance()}return{left:a,top:s,width:u,height:l}}t.fn.tipsy.elementOptions=function(e,n){var o=e.$tooltipOptions;return n=t.extend({},n,o||{},{gravity:n.gravity})};var i=0;e.Behavior.tipsy=function(n){function a(){var e=Q.instance(),t=Q.properties.tooltip?e.tooltip:"function"==typeof Q.tooltip?Q.tooltip():e.title||e.text;return"function"==typeof t&&(t=t()),t||""}function s(){var e,t,n,i,r=Q.instance();if(Q.properties.width){var a=o(Q);e=a.left,t=a.top,n=a.width,i=a.height}else{var s,l=Q.toScreenTransform();if(Q.properties.outerRadius){var d=r.startAngle+r.angle/2;s=r.outerRadius,e=l.x+r.left+s*Math.cos(d),t=l.y+r.top+s*Math.sin(d)}else if(Q.properties.shapeRadius){s=u().ignoreRadius?0:Math.max(2,r.shapeRadius);var f=r.left,p=r.top;switch(r.shape){case"diamond":s*=Math.SQRT2;break;case"circle":s/=Math.SQRT2}e=(f-s)*l.k+l.x,t=(p-s)*l.k+l.y,i=n=2*s*l.k}else e=r.left*l.k+l.x,t=r.top*l.k+l.y}var g=Math.ceil(e),c=Math.ceil(t),v=g-e,h=c-t;return n=Math.max(1,Math.floor((n||0)-v)),i=Math.max(1,Math.floor((i||0)-h)),{left:g,top:c,width:n,height:i}}function u(){return Q&&Q.tooltipOptions||n}function l(){var n=u(),o=e.get(n,"gravity");return o&&"function"==typeof o&&(o=o.call(Q)),r.debug>=21&&r.log("[TIPSY] #"+G+" Update User Gravity "+o),N=o||t.fn.tipsy.defaults.gravity}function d(o,i){function a(e){return s(e,i(e))}function s(t,i){var r=u(i.left,"width"),a=u(i.top,"height"),s=H&&!n.followMouse;s&&(s=new e.Shape.Rect(i.left,i.top,o.width,o.height).containsPoint(H));var l=!s&&r.fits&&a.fits;return{gravity:t,width:r,height:a,value:r.value+a.value+(2-t.length)+(s?-1e3:0),isMouseInside:s,isTotal:l,isPartial:r.fits||a.fits}}function u(e,t){var n=p[t],i=o[t],r=e-d[t],a=n-(r+i);return{fits:r>=0&&a>=0,value:(r>=0?r:4*r)+(a>=0?a:4*a)}}if(this!==B[0])throw new Error("Assertion failed.");var l=t(window),d={width:l.scrollLeft(),height:l.scrollTop()},p={width:l.width(),height:l.height()},g=N;"c"===g&&(g="w");var c=a(g);if(!c.isTotal){for(var v=K.indexOf(g),h=1,y=K.length;h<y;h++)c=f(c,a(K[(v+h)%y]));r.debug>=21&&g!==c.gravity&&r.log("[TIPSY] #"+G+" Choosing gravity '"+c.gravity+"' over '"+g+"'"),g=c.gravity}return r.debug>=21&&r.log("[TIPSY] #"+G+" Gravity '"+g+"'"),g}function f(e,t){if(e.isTotal){if(!t.isTotal)return e}else if(t.isTotal){if(!e.isTotal)return t}else if(e.isPartial){if(!t.isPartial)return e}else if(t.isPartial&&!e.isPartial)return t;return t.value>e.value?t:e}function p(e){B.css({left:e.left+parseFloat(j.css("padding-left"))+j.scrollLeft(),top:e.top+parseFloat(j.css("padding-top"))+j.scrollTop(),width:e.width,height:e.height})}function g(e){r.debug>=20&&r.log("[TIPSY] #"+G+" Creating _id="+_);var o=e.root.canvas();j=t(o);var i=o.style.position;i&&"static"!==i||(o.style.position="relative"),j.mouseleave(S),n.usesPoint&&n.followMouse&&e.root.event("mousemove",E),v(),_||(_="tipsyPvBehavior_"+(new Date).getTime());var a=document.getElementById(_);a||(r.debug>=20&&r.log("[TIPSY] #"+G+" Creating Fake Tip Target="+_),a=document.createElement("div"),a.id=_,a.className="fakeTipsyTarget",o.appendChild(a));var s=a.style;s.padding="0px",s.margin="0px",s.position="absolute",s.pointerEvents="none",s.display="block",s.zIndex=-10,B=t(a),h(),B.removeData("tipsy"),B[0].$tooltipOptions=e.tooltipOptions;var u=c(n);B.tipsy(u)}function c(e){var t=Object.create(e);return t.gravity=d,t.delayOut=0,t.trigger="manual",null==t.animate&&(t.animate=t.followMouse?0:400),t}function v(){if(W=j.data("tipsy-pv-shared-info")){var e=j[0].$pvCreateId||0;if(W.createId===e)return void W.behaviors.push(x);W.behaviors.forEach(function(e){e()})}W={createId:j[0].$pvCreateId||0,behaviors:[x]},j.data("tipsy-pv-shared-info",W)}function h(){B&&(r.debug>=22?B.css({borderColor:"red",borderWidth:"1px",borderStyle:"solid",zIndex:1e3}):B.css({borderWidth:"0px",zIndex:-10}))}function y(t){t||(t=e.event);var n=j.offset(),o=n.left+parseFloat(j.css("padding-left")||0),i=n.top+parseFloat(j.css("padding-top")||0);return{left:t.pageX-o-5,top:t.pageY-i-5,width:20,height:20}}function I(e){e||(e=null);var t,o,i;if(e!==Q)Q=e,e?(U=e.scene,z=T(U,Q.index),A=e.renderId()):(A=U=z=null,r.debug>=20&&r.log("[TIPSY] #"+G+" Cleared Mark"));else{if(!e)return!1;if(U!==(i=e.scene))U=i,z=T(U,Q.index),A=e.renderId();else if(z!==(t=T(U,Q.index)))z=t,A=e.renderId();else{if(A===(o=e.renderId()))return!1;A=o}}B[0].$tooltipOptions=Q&&Q.tooltipOptions;var a=c(n);return B.tipsy("setOptions",a),e&&r.debug>=20&&r.log("[TIPSY] #"+G+" Set Mark State to "+e.type+" scenes: #"+U.length+" index: "+z+" renderId: "+A),!0}function b(e,n){e&&n||(e=n=null);var o=!q&&e||q&&q[0]!==e;o&&(r.debug>=20&&r.log("[TIPSY] #"+G+" "+(e?"Changing target element "+e.tagName+".":"Clearing target element.")),o&&(q&&(q.off("mousemove",C),q.off("mouseleave",S)),q=e?t(e):null),I(n),q&&(q.mousemove(C),q.mouseleave(S)))}function m(e,t){var n=t;return"function"==typeof Q.getNearestInstanceToMouse&&(t=Q.getNearestInstanceToMouse(e,t),r.debug>=20&&n!==t&&r.log("[TIPSY] #"+G+" Changing index "+n+" to Nearest index "+t)),T(e,t)}function T(e,t){if("function"==typeof Q.getOwnerInstance){var n=t;t=Q.getOwnerInstance(e,t),r.debug>=20&&n!==t&&r.log("[TIPSY] #"+G+" Changing index "+n+" to Owner index "+t)}return t}function w(){return L++}function P(e){return e===L-1}function S(){var e=w();r.debug>=30&&r.log("[TIPSY] #"+G+" Delayed Hide Begin opId="+e),X>0?window.setTimeout(function(){P(e)?(r.debug>=30&&r.log("[TIPSY] #"+G+" Hiding opId="+e),M(e)):r.debug>=30&&r.log("[TIPSY] #"+G+" Delayed Hide Cancelled opId="+e)},X):(r.debug>=30&&r.log("[TIPSY] #"+G+" Hiding Immediately opId="+e),M(e))}function x(){r.debug>=30&&r.log("[TIPSY] #"+G+" Disposing"),Y(),B&&(B.removeData("tipsy"),B.each(function(e){e.$tooltipOptions=null}),B.remove(),B=null),j&&(j.off("mouseleave",S),j=null)}function Y(){var e=w();r.debug>=30&&r.log("[TIPSY] #"+G+" Hiding as Other opId="+e),M(e)}function M(e){b(null,null),I(null),B&&B.data("tipsy")&&B.tipsy("leave")}function O(){var e=W&&W.behaviors;e&&e.length>1&&(r.debug>=30&&r.group("[TIPSY] #"+G+" Hiding Others"),e.forEach(function(e){e!==x&&e()}),r.debug>=30&&r.groupEnd())}function k(t){return H=new e.Shape.Point(t.pageX,t.pageY),!(F&&H.distance2(F).cost<=8)||(r.debug>=30&&r.log("[TIPSY] #"+G+" mousemove too close"),!1)}function E(){r.debug>=30&&r.group("[TIPSY] #"+G+" doFollowMouse");var t=e.event;!Q||J&&!J($,Q)?(S(),r.debug>=30&&r.groupEnd()):(B&&Q&&k(t)&&(F=H,p(y(t)),O(),B.tipsy("update")),r.debug>=30&&r.groupEnd())}function C(t){if(B&&k(t)){var o,i=this.$scene;if(i&&(o=i.scenes)&&o.mark&&o.mark===Q){var u=Q.renderId(),d=u!==A||o!==U,f=n.followMouse,g=i.index;if("function"!=typeof Q.getOwnerInstance&&"function"!=typeof Q.getNearestInstanceToMouse||(e.event=t,Q.context(o,g,function(){g=m(o,g)}),e.event=null),d|=g!==z,f||d){var c=w();r.debug>=20&&r.log("[TIPSY] #"+G+" Updating opId="+c),F=H;var v;f&&(v=y(t)),d&&(A=u,U=o,z=g,Q.context(o,g,function(){f||(v=s());var e=a();r.debug>=20&&r.log("[TIPSY] #"+G+" Update text. Was hidden. Text: "+e.substr(0,50)),B.tipsy("setTitle",e),l()})),p(v),O(),B.tipsy("update")}else r.debug>=20&&r.log("[TIPSY] #"+G+" !followMouse and same scene")}else r.debug>=20&&r.log("[TIPSY] #"+G+" mousemove on != mark")}}function D(e){j||g(e),e._tipsy!==$&&(r.debug>=20&&r.log("[TIPSY] #"+G+" Initializing mark"),e._tipsy=$,n.usesPoint&&e.event("unpoint",function(){r.debug>=20&&r.group("[TIPSY] #"+G+" unpoint"),S(),r.debug>=20&&r.groupEnd()}))}function R(t){function o(){var e=a();r.debug>=20&&r.log("[TIPSY] #"+G+" Set Text: "+e.substr(0,50)),B.tipsy("setTitle",e),p(n.followMouse?y():s()),l()}var i=w();r.debug>=20&&r.group("[TIPSY] #"+G+" ShowTipsy opId="+i),D(t);var u=!Q;n.usesPoint?I(t):b(e.event.target,t),k(e.event),F=H,t.index!==z?t.context(U,z,o):o(),O(),B.tipsy(u?"enter":"update"),r.debug>=20&&r.groupEnd()}function $(){var e=this;J&&!J($,e)||R(e)}n||(n={});var B,F,H,N,A,z,U,_,j,W,q=null,G=i++,L=0,Q=null,X=n.delayOut,J=n.isEnabled,K=["nw","n","ne","e","se","s","sw","w"];return $};var r=e.Behavior.tipsy;r.debug=0,r.setDebug=function(e){r.debug=e},r.log=function(e){"undefined"!=typeof console&&console.log(""+e)},r.group=function(e){"undefined"!=typeof console&&console.group(""+e)},r.groupEnd=function(e){"undefined"!=typeof console&&console.groupEnd()},r.disposeAll=function(e){var n=e&&e.root;if(n&&n.scene){var o=n.canvas();if(o){var i=t(o),a=i.data("tipsy-pv-shared-info");a&&(a.behaviors&&a.behaviors.forEach(function(e){e()}),i.removeData("tipsy-pv-shared-info"))}}r.removeAll()},r.removeAll=function(){t(".tipsy").remove()}}(),e.Behavior.tipsy});