define(["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date/stamp","dojox"],function(array,djson,dojo,lang,stamp,dojox){return lang.getObject("json",!0,dojox),dojox.json.ref={resolveJson:function(t,e){function r(h,v,g,y,j,b){var m,A,$,S=o in h?h[o]:g;(o in h||void 0!==S&&y)&&(S=(s+S).replace(u,"$2$3"));var O=b||h;if(void 0!==S){if(f&&(h.__id=S),!e.schemas||h instanceof Array||!($=S.match(/^(.+\/)[^\.\[]*$/))||(j=e.schemas[$[1]]),d[S]&&h instanceof Array==d[S]instanceof Array)O=d[S],delete O.$ref,delete O._loadObject,A=!0;else{var x=j&&j.prototype;x&&(_.prototype=x,O=new _)}d[S]=O,c&&(c[S]=e.time)}for(;j;){var w=j.properties;if(w)for(m in h){var J=w[m];J&&"date-time"==J.format&&"string"==typeof h[m]&&(h[m]=stamp.fromISOString(h[m]))}j=j.extends}var P=h.length;for(m in h){if(m==P)break;if(h.hasOwnProperty(m)){if("object"==typeof($=h[m])&&$&&!($ instanceof Date)&&"__parent"!=m)if(n=$[i]||a&&$[o],n&&$.__parent||h!=p&&($.__parent=O),n){delete h[m];var I=n.toString().replace(/(#)([^\.\[])/,"$1.$2").match(/(^([^\[]*\/)?[^#\.\[]*)#?([\.\[].*)?/);if(d[(s+n).replace(u,"$2$3")]?n=d[(s+n).replace(u,"$2$3")]:(n="$"==I[1]||"this"==I[1]||""==I[1]?t:d[(s+I[1]).replace(u,"$2$3")])&&I[3]&&I[3].replace(/(\[([^\]]+)\])|(\.?([^\.\[]+))/g,function(t,e,r,o,i){n=n&&n[r?r.replace(/[\"\'\\]/,""):i]}),n)$=n;else if(!v){var D;D||p.push(O),D=!0,$=r($,!1,$[i],!0,J),$._loadObject=e.loader}}else v||($=r($,p==h,void 0===S?void 0:l(S,m),!1,J,O!=h&&"object"==typeof O[m]&&O[m]));if(h[m]=$,O!=h&&!O.__isDirty){var U=O[m];O[m]=$,!A||$===U||O._loadObject||"_"==m.charAt(0)&&"_"==m.charAt(1)||"$ref"==m||$ instanceof Date&&U instanceof Date&&$.getTime()==U.getTime()||"function"==typeof $&&"function"==typeof U&&$.toString()==U.toString()||!d.onUpdate||d.onUpdate(O,m,U,$)}}}if(A&&(o in h||O instanceof Array)){for(m in O)if(!O.__isDirty&&O.hasOwnProperty(m)&&!h.hasOwnProperty(m)&&("_"!=m.charAt(0)||"_"!=m.charAt(1))&&!(O instanceof Array&&isNaN(m)))for(d.onUpdate&&"_loadObject"!=m&&"_idAttr"!=m&&d.onUpdate(O,m,O[m],void 0),delete O[m];O instanceof Array&&O.length&&void 0===O[O.length-1];)O.length--}else d.onLoad&&d.onLoad(O);return O}e=e||{};var n,o=e.idAttribute||"id",i=this.refAttribute,a=e.idAsRef,s=e.idPrefix||"",f=e.assignAbsoluteIds,d=e.index||{},c=e.timeStamps,p=[],u=/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,l=this._addProp,_=function(){};return t&&"object"==typeof t&&(t=r(t,!1,e.defaultId,!0),r(p,!1)),t},fromJson:function(str,args){function ref(t){var e={};return e[this.refAttribute]=t,e}try{var root=eval("("+str+")")}catch(t){throw new SyntaxError("Invalid JSON string: "+t.message+" parsing: "+str)}return root?this.resolveJson(root,args):root},toJson:function(t,e,r,n){function o(t,n,c){if("object"==typeof t&&t){if(t instanceof Date)return'"'+stamp.toISOString(t,{zulu:!0})+'"';var p=t.__id;if(p){if("#"!=n&&(i&&!p.match(/#/)||f[p])){var u=p;"#"!=p.charAt(0)&&(u=t.__clientId==p?"cid:"+p:p.substring(0,r.length)==r?p.substring(r.length):p);var l={};return l[s]=u,djson.toJson(l,e)}n=p}else t.__id=n,d[n]=t;f[n]=t,c=c||"";var _=e?c+djson.toJsonIndentStr:"",h=e?"\n":"",v=e?" ":"";if(t instanceof Array){return"["+array.map(t,function(t,e){var r=o(t,a(n,e),_);return"string"!=typeof r&&(r="undefined"),h+_+r}).join(","+v)+h+c+"]"}var g=[];for(var y in t)if(t.hasOwnProperty(y)){var j;if("number"==typeof y)j='"'+y+'"';else{if("string"!=typeof y||"_"==y.charAt(0)&&"_"==y.charAt(1))continue;j=djson._escapeString(y)}var b=o(t[y],a(n,y),_);if("string"!=typeof b)continue;g.push(h+_+j+":"+v+b)}return"{"+g.join(","+v)+h+c+"}"}return"function"==typeof t&&dojox.json.ref.serializeFunctions?t.toString():djson.toJson(t)}var i=this._useRefs,a=this._addProp,s=this.refAttribute;r=r||"";var f={},d={},c=o(t,"#","");if(!n)for(var p in d)delete d[p].__id;return c},_addProp:function(t,e){return t+(t.match(/#/)?1==t.length?"":".":"#")+e},refAttribute:"$ref",_useRefs:!1,serializeFunctions:!1}});