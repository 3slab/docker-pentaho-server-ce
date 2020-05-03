define(["./_base","dojo/_base/lang","./matrix","dojo/_base/Color"],function(r,o,t,e){function n(r,o){if(r<=0)return o[0].color;var t=o.length;if(r>=1)return o[t-1].color;for(var n=0;n<t;++n){var l=o[n];if(l.offset>=r){if(n){var a=o[n-1];return e.blendColors(new e(a.color),new e(l.color),(r-a.offset)/(l.offset-a.offset))}return l.color}}return o[t-1].color}var l=r.gradutils={};return l.getColor=function(r,o){var l;if(r){switch(r.type){case"linear":var a=Math.atan2(r.y2-r.y1,r.x2-r.x1),f=t.rotate(-a),i=t.project(r.x2-r.x1,r.y2-r.y1),c=t.multiplyPoint(i,o),s=t.multiplyPoint(i,r.x1,r.y1),u=t.multiplyPoint(i,r.x2,r.y2),y=t.multiplyPoint(f,u.x-s.x,u.y-s.y).x;l=t.multiplyPoint(f,c.x-s.x,c.y-s.y).x/y;break;case"radial":var x=o.x-r.cx,v=o.y-r.cy;l=Math.sqrt(x*x+v*v)/r.r}return n(l,r.colors)}return new e(r||[0,0,0,0])},l.reverse=function(r){if(r)switch(r.type){case"linear":case"radial":if(r=o.delegate(r),r.colors){for(var t,e=r.colors,n=e.length,l=0,a=r.colors=new Array(e.length);l<n;++l)t=e[l],a[l]={offset:1-t.offset,color:t.color};a.sort(function(r,o){return r.offset-o.offset})}}return r},l});