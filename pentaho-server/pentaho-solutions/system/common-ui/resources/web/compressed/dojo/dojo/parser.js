define(["require","./_base/kernel","./_base/lang","./_base/array","./_base/config","./dom","./_base/window","./_base/url","./aspect","./promise/all","./date/stamp","./Deferred","./has","./query","./on","./ready"],function(require,dojo,dlang,darray,config,dom,dwindow,_Url,aspect,all,dates,Deferred,has,query,don,ready){function myEval(text){return eval("("+text+")")}function getNameMap(e){var t=e._nameCaseMap,r=e.prototype;if(!t||t._extendCnt<extendCnt){t=e._nameCaseMap={};for(var a in r)"_"!==a.charAt(0)&&(t[a.toLowerCase()]=a);t._extendCnt=extendCnt}return t}function getCtor(e,t){var r=e.join();if(!_ctorMap[r]){for(var a=[],n=0,o=e.length;n<o;n++){var i=e[n];a[a.length]=_ctorMap[i]=_ctorMap[i]||dlang.getObject(i)||~i.indexOf("/")&&(t?t(i):require(i))}var s=a.shift();_ctorMap[r]=a.length?s.createSubclass?s.createSubclass(a):s.extend.apply(s,a):s}return _ctorMap[r]}new Date("X");var extendCnt=0;aspect.after(dlang,"extend",function(){extendCnt++},!0);var _ctorMap={},parser={_clearCache:function(){extendCnt++,_ctorMap={}},_functionFromScript:function(e,t){var r="",a="",n=e.getAttribute(t+"args")||e.getAttribute("args"),o=e.getAttribute("with"),i=(n||"").split(/\s*,\s*/);return o&&o.length&&darray.forEach(o.split(/\s*,\s*/),function(e){r+="with("+e+"){",a+="}"}),new Function(i,r+e.innerHTML+a)},instantiate:function(e,t,r){t=t||{},r=r||{};var a=(r.scope||dojo._scopeName)+"Type",n="data-"+(r.scope||dojo._scopeName)+"-",o=n+"type",i=n+"mixins",s=[];return darray.forEach(e,function(e){var r=a in t?t[a]:e.getAttribute(o)||e.getAttribute(a);if(r){var n=e.getAttribute(i),c=n?[r].concat(n.split(/\s*,\s*/)):[r];s.push({node:e,types:c})}}),this._instantiate(s,t,r)},_instantiate:function(e,t,r,a){function n(e){return t._started||r.noStart||darray.forEach(e,function(e){"function"!=typeof e.startup||e._started||e.startup()}),e}var o=darray.map(e,function(e){var a=e.ctor||getCtor(e.types,r.contextRequire);if(!a)throw new Error("Unable to resolve constructor for: '"+e.types.join()+"'");return this.construct(a,e.node,t,r,e.scripts,e.inherited)},this);return a?all(o).then(n):n(o)},construct:function(e,t,r,a,n,o){function i(e){for(v&&dlang.setObject(v,e),y=0;y<N.length;y++)aspect[N[y].advice||"after"](e,N[y].method,dlang.hitch(e,N[y].func),!0);for(y=0;y<q.length;y++)q[y].call(e);for(y=0;y<S.length;y++)e.watch(S[y].prop,S[y].func);for(y=0;y<k.length;y++)don(e,k[y].event,k[y].func);return e}var s=e&&e.prototype;a=a||{};var c={};a.defaults&&dlang.mixin(c,a.defaults),o&&dlang.mixin(c,o);var d;if(has("dom-attributes-explicit"))d=t.attributes;else if(has("dom-attributes-specified-flag"))d=darray.filter(t.attributes,function(e){return e.specified});else{var u=/^input$|^img$/i.test(t.nodeName)?t:t.cloneNode(!1),p=u.outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*\s*/,"").replace(/\s*>.*$/,"");d=darray.map(p.split(/\s+/),function(e){var r=e.toLowerCase();return{name:e,value:"LI"==t.nodeName&&"value"==e||"enctype"==r?t.getAttribute(r):t.getAttributeNode(r).value}})}var l=a.scope||dojo._scopeName,f="data-"+l+"-",h={};"dojo"!==l&&(h[f+"props"]="data-dojo-props",h[f+"type"]="data-dojo-type",h[f+"mixins"]="data-dojo-mixins",h[l+"type"]="dojoType",h[f+"id"]="data-dojo-id");for(var g,v,b,y=0,m=[];g=d[y++];){var j=g.name,x=j.toLowerCase(),_=g.value;switch(h[x]||x){case"data-dojo-type":case"dojotype":case"data-dojo-mixins":break;case"data-dojo-props":b=_;break;case"data-dojo-id":case"jsid":v=_;break;case"data-dojo-attach-point":case"dojoattachpoint":c.dojoAttachPoint=_;break;case"data-dojo-attach-event":case"dojoattachevent":c.dojoAttachEvent=_;break;case"class":c.class=t.className;break;case"style":c.style=t.style&&t.style.cssText;break;default:if(!(j in s)){j=getNameMap(e)[x]||j}if(j in s)switch(typeof s[j]){case"string":c[j]=_;break;case"number":c[j]=_.length?Number(_):NaN;break;case"boolean":c[j]="false"!=_.toLowerCase();break;case"function":""===_||-1!=_.search(/[^\w\.]+/i)?c[j]=new Function(_):c[j]=dlang.getObject(_,!1)||new Function(_),m.push(j);break;default:var w=s[j];c[j]=w&&"length"in w?_?_.split(/\s*,\s*/):[]:w instanceof Date?""==_?new Date(""):"now"==_?new Date:dates.fromISOString(_):w instanceof _Url?dojo.baseUrl+_:myEval(_)}else c[j]=_}}for(var A=0;A<m.length;A++){var C=m[A].toLowerCase();t.removeAttribute(C),t[C]=null}if(b)try{b=myEval.call(a.propsThis,"{"+b+"}"),dlang.mixin(c,b)}catch(e){throw new Error(e.toString()+" in data-dojo-props='"+b+"'")}dlang.mixin(c,r),n||(n=e&&(e._noScript||s._noScript)?[]:query("> script[type^='dojo/']",t));var N=[],q=[],S=[],k=[];if(n)for(y=0;y<n.length;y++){var M=n[y];t.removeChild(M);var D=M.getAttribute(f+"event")||M.getAttribute("event"),E=M.getAttribute(f+"prop"),L=M.getAttribute(f+"method"),T=M.getAttribute(f+"advice"),O=M.getAttribute("type"),F=this._functionFromScript(M,f);D?"dojo/connect"==O?N.push({method:D,func:F}):"dojo/on"==O?k.push({event:D,func:F}):c[D]=F:"dojo/aspect"==O?N.push({method:L,advice:T,func:F}):"dojo/watch"==O?S.push({prop:E,func:F}):q.push(F)}var R=e.markupFactory||s.markupFactory,I=R?R(c,t,e):new e(c,t);return I.then?I.then(i):i(I)},scan:function(e,t){function r(e,t){return e.getAttribute&&e.getAttribute(t)||e.parentNode&&r(e.parentNode,t)}function a(e){if(!e.inherited){e.inherited={};var t=e.node,r=a(e.parent),n={dir:t.getAttribute("dir")||r.dir,lang:t.getAttribute("lang")||r.lang,textDir:t.getAttribute(u)||r.textDir};for(var o in n)n[o]&&(e.inherited[o]=n[o])}return e.inherited}var n=[],o=[],i={},s=(t.scope||dojo._scopeName)+"Type",c="data-"+(t.scope||dojo._scopeName)+"-",d=c+"type",u=c+"textdir",p=c+"mixins",l=e.firstChild,f=t.inherited;if(!f){f={dir:r(e,"dir"),lang:r(e,"lang"),textDir:r(e,u)};for(var h in f)f[h]||delete f[h]}for(var g,v,b={inherited:f};;)if(l)if(1==l.nodeType)if(g&&"script"==l.nodeName.toLowerCase())y=l.getAttribute("type"),y&&/^dojo\/\w/i.test(y)&&g.push(l),l=l.nextSibling;else if(v)l=l.nextSibling;else{var y=l.getAttribute(d)||l.getAttribute(s),m=l.firstChild;if(y||m&&(3!=m.nodeType||m.nextSibling)){var j,x=null;if(y){var _=l.getAttribute(p),w=_?[y].concat(_.split(/\s*,\s*/)):[y];try{x=getCtor(w,t.contextRequire)}catch(e){}x||darray.forEach(w,function(e){~e.indexOf("/")&&!i[e]&&(i[e]=!0,o[o.length]=e)});var A=x&&!x.prototype._noScript?[]:null;j={types:w,ctor:x,parent:b,node:l,scripts:A},j.inherited=a(j),n.push(j)}else j={node:l,scripts:g,parent:b};g=A,v=l.stopParser||x&&x.prototype.stopParser&&!t.template,b=j,l=m}else l=l.nextSibling}else l=l.nextSibling;else{if(!b||!b.node)break;l=b.node.nextSibling,v=!1,b=b.parent,g=b.scripts}var C=new Deferred;if(o.length){has("dojo-debug-messages")&&console.warn("WARNING: Modules being Auto-Required: "+o.join(", "));(t.contextRequire||require)(o,function(){C.resolve(darray.filter(n,function(e){if(!e.ctor)try{e.ctor=getCtor(e.types,t.contextRequire)}catch(e){}for(var r=e.parent;r&&!r.types;)r=r.parent;var a=e.ctor&&e.ctor.prototype;return e.instantiateChildren=!(a&&a.stopParser&&!t.template),e.instantiate=!r||r.instantiate&&r.instantiateChildren,e.instantiate}))})}else C.resolve(n);return C.promise},_require:function(e,t){var r=myEval("{"+e.innerHTML+"}"),a=[],n=[],o=new Deferred,i=t&&t.contextRequire||require;for(var s in r)a.push(s),n.push(r[s]);return i(n,function(){for(var e=0;e<a.length;e++)dlang.setObject(a[e],arguments[e]);o.resolve(arguments)}),o.promise},_scanAmd:function(e,t){var r=new Deferred,a=r.promise;r.resolve(!0);var n=this;return query("script[type='dojo/require']",e).forEach(function(e){a=a.then(function(){return n._require(e,t)}),e.parentNode.removeChild(e)}),a},parse:function(e,t){var r;!t&&e&&e.rootNode?(t=e,r=t.rootNode):!e||!dlang.isObject(e)||"nodeType"in e?r=e:t=e,r=r?dom.byId(r):dwindow.body(),t=t||{};var a=t.template?{template:!0}:{},n=[],o=this,i=this._scanAmd(r,t).then(function(){return o.scan(r,t)}).then(function(e){return o._instantiate(e,a,t,!0)}).then(function(e){return n=n.concat(e)}).otherwise(function(e){throw console.error("dojo/parser::parse() error",e),e});return dlang.mixin(n,i),n}};return has("extend-dojo")&&(dojo.parser=parser),config.parseOnLoad&&ready(100,parser,"parse"),parser});