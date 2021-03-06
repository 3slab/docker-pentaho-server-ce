define(["dojo/_base/lang","./_base","dojo/_base/fx","dojo/fx","dojo/fx/easing","dojo/dom","dojo/dom-style","dojo/_base/html","dojo/_base/connect"],function(e,n,t,a,o,i,r,d,s){var u=e.getObject("dojox.fx.text",!0);return u._split=function(n){function t(a){var o=a.nextSibling;if("SPAN"==a.tagName&&1==a.childNodes.length&&3==a.firstChild.nodeType){var i=d.coords(a,!0);w++,r.set(a,{padding:0,margin:0,top:n.crop?"0px":i.t+"px",left:n.crop?"0px":i.l+"px",display:"inline"});var s=n.pieceAnimation(a,i,c,w,b);e.isArray(s)?f=f.concat(s):f[f.length]=s}else a.firstChild&&t(a.firstChild);o&&t(o)}var o=n.node=i.byId(n.node),u=o.style,l=r.getComputedStyle(o),c=d.coords(o,!0);n.duration=n.duration||1e3,n.words=n.words||!1;var p=n.text&&"string"==typeof n.text?n.text:o.innerHTML,h=u.height,y=u.width,f=[];r.set(o,{height:l.height,width:l.width});for(var m=/(<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)/g,v=n.words?/(<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)\s*|([^\s<]+\s*)/g:/(<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)\s*|([^\s<]\s*)/g,g="string"==typeof n.text?n.text.match(v):o.innerHTML.match(v),x="",b=0,w=0,M=0;M<g.length;M++){var I=g[M];I.match(m)?x+=I:(x+="<span>"+I+"</span>",b++)}o.innerHTML=x,t(o.firstChild);var O=a.combine(f);return s.connect(O,"onEnd",O,function(){o.innerHTML=p,r.set(o,{height:h,width:y})}),n.onPlay&&s.connect(O,"onPlay",O,n.onPlay),n.onEnd&&s.connect(O,"onEnd",O,n.onEnd),O},u.explode=function(e){var n=e.node=i.byId(e.node);n.style;return e.distance=e.distance||1,e.duration=e.duration||1e3,e.random=e.random||0,void 0===e.fade&&(e.fade=!0),void 0===e.sync&&(e.sync=!0),e.random=Math.abs(e.random),e.pieceAnimation=function(n,a,i,d,s){var u=a.h,l=a.w,c=2*e.distance,p=e.duration,h=parseFloat(n.style.top),y=parseFloat(n.style.left),f=0,m=0,v=0;if(e.random){var g=Math.random()*e.random+Math.max(1-e.random,0);c*=g,p*=g,f=e.unhide&&e.sync||!e.unhide&&!e.sync?e.duration-p:0,m=Math.random()-.5,v=Math.random()-.5}var x=(i.h-u)/2-(a.y-i.y),b=(i.w-l)/2-(a.x-i.x),w=Math.sqrt(Math.pow(b,2)+Math.pow(x,2)),M=h-x*c+w*v,I=y-b*c+w*m,O=t.animateProperty({node:n,duration:p,delay:f,easing:e.easing||(e.unhide?o.sinOut:o.circOut),beforeBegin:e.unhide?function(){e.fade&&r.set(n,"opacity",0),n.style.position=e.crop?"relative":"absolute",n.style.top=M+"px",n.style.left=I+"px"}:function(){n.style.position=e.crop?"relative":"absolute"},properties:{top:e.unhide?{start:M,end:h}:{start:h,end:M},left:e.unhide?{start:I,end:y}:{start:y,end:I}}});if(e.fade){var j=t.animateProperty({node:n,duration:p,delay:f,easing:e.fadeEasing||o.quadOut,properties:{opacity:e.unhide?{start:0,end:1}:{end:0}}});return e.unhide?[j,O]:[O,j]}return O},u._split(e)},u.converge=function(e){return e.unhide=!0,u.explode(e)},u.disintegrate=function(e){var n=e.node=i.byId(e.node);n.style;e.duration=e.duration||1500,e.distance=e.distance||1.5,e.random=e.random||0,e.fade||(e.fade=!0);var a=Math.abs(e.random);return e.pieceAnimation=function(n,i,d,s,u){var l=(i.h,i.w,e.interval||e.duration/(1.5*u)),c=e.duration-u*l,p=Math.random()*u*l,h=e.reverseOrder||e.distance<0?s*l:(u-s)*l,y=p*a+Math.max(1-a,0)*h,f={};return e.unhide?(f.top={start:parseFloat(n.style.top)-d.h*e.distance,end:parseFloat(n.style.top)},e.fade&&(f.opacity={start:0,end:1})):(f.top={end:parseFloat(n.style.top)+d.h*e.distance},e.fade&&(f.opacity={end:0})),t.animateProperty({node:n,duration:c,delay:y,easing:e.easing||(e.unhide?o.sinIn:o.circIn),properties:f,beforeBegin:e.unhide?function(){e.fade&&r.set(n,"opacity",0),n.style.position=e.crop?"relative":"absolute",n.style.top=f.top.start+"px"}:function(){n.style.position=e.crop?"relative":"absolute"}})},u._split(e)},u.build=function(e){return e.unhide=!0,u.disintegrate(e)},u.blockFadeOut=function(e){var n=e.node=i.byId(e.node);n.style;e.duration=e.duration||1e3,e.random=e.random||0;var a=Math.abs(e.random);return e.pieceAnimation=function(n,i,d,s,u){var l=e.interval||e.duration/(1.5*u),c=e.duration-u*l,p=Math.random()*u*l,h=e.reverseOrder?(u-s)*l:s*l,y=p*a+Math.max(1-a,0)*h;return t.animateProperty({node:n,duration:c,delay:y,easing:e.easing||o.sinInOut,properties:{opacity:e.unhide?{start:0,end:1}:{end:0}},beforeBegin:e.unhide?function(){r.set(n,"opacity",0)}:void 0})},u._split(e)},u.blockFadeIn=function(e){return e.unhide=!0,u.blockFadeOut(e)},u.backspace=function(e){var n=e.node=i.byId(e.node);n.style;e.words=!1,e.duration=e.duration||2e3,e.random=e.random||0;var a=Math.abs(e.random),d=10;return e.pieceAnimation=function(n,i,s,u,l){var c=e.interval||e.duration/(1.5*l),p="textContent"in n?n.textContent:n.innerText,h=p.match(/\s/g);void 0===e.wordDelay&&(e.wordDelay=2*c),e.unhide||(d=(l-u-1)*c);var y,f;if(e.fixed){if(e.unhide)var y=function(){r.set(n,"opacity",0)}}else if(e.unhide)var y=function(){n.style.display="none"},f=function(){n.style.display="inline"};else var f=function(){n.style.display="none"};var m=t.animateProperty({node:n,duration:1,delay:d,easing:e.easing||o.sinInOut,properties:{opacity:e.unhide?{start:0,end:1}:{end:0}},beforeBegin:y,onEnd:f});if(e.unhide){var v=Math.random()*p.length*c,g=v*a/2+Math.max(1-a/2,0)*e.wordDelay;d+=v*a+Math.max(1-a,0)*c*p.length+g*(h&&p.lastIndexOf(h[h.length-1])==p.length-1)}return m},u._split(e)},u.type=function(e){return e.unhide=!0,u.backspace(e)},u});