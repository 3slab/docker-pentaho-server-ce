define("dojox/rpc/Rest",["dojo/_base/lang","dojo/json","dojo/io-query","dojo/request"],function(t,n,e,r){function o(t,n,e,r){return t.then(function(n){return t.response&&e&&(t.response.then(function(t){e=t.getResponseHeader("Content-Range")}),t.fullLength=e&&(e=e.match(/\/(.*)/))&&parseInt(e[1])),n}),t}t.getObject("dojox",!0),t.getObject("rpc.Rest",!0,dojox),dojox.rpc&&dojox.rpc.transportRegistry&&dojox.rpc.transportRegistry.register("REST",function(t){return"REST"==t},{getExecutor:function(t,n,e){return new dojox.rpc.Rest(n.name,(n.contentType||e._smd.contentType||"").match(/json|javascript/),null,function(t,r){var o=e._getRequest(n,[t]);return o.url=o.target+(o.data?"?"+o.data:""),r&&(r.start>=0||r.count>=0)&&(o.headers=o.headers||{},o.headers.Range="items="+(r.start||"0")+"-"+("count"in r&&r.count!=1/0?r.count+(r.start||0)-1:"")),o})}});var c;return c=dojox.rpc.Rest=function(r,o,a,u){function s(t){i[t]=function(n,e){return c._change(t,i,n,e)}}var i;return i=function(t,n){return c._get(i,t,n)},i.isJson=o,i._schema=a,i.cache={serialize:o?n.stringify:function(t){return t}},i._getRequest=u||function(n,c){if(t.isObject(n)&&(n=e.objectToQuery(n),n=n?"?"+n:""),c&&c.sort&&!c.queryStr){n+=(n?"&":"?")+"sort(";for(var a=0;a<c.sort.length;a++){var u=c.sort[a];n+=(a>0?",":"")+(u.descending?"-":"+")+encodeURIComponent(u.attribute)}n+=")"}var s={url:r+(null==n?"":n),handleAs:o?"json":"text",contentType:o?"application/json":"text/plain",sync:dojox.rpc._sync,headers:{Accept:o?"application/json,application/javascript":"*/*"}};return c&&(c.start>=0||c.count>=0)&&(s.headers.Range="items="+(c.start||"0")+"-"+("count"in c&&c.count!=1/0?c.count+(c.start||0)-1:"")),dojox.rpc._sync=!1,s},s("put"),s("post"),s("delete"),i.servicePath=r,i},c._index={},c._timeStamps={},c._change=function(t,n,e,c){var a=n._getRequest(e);"GET"==t?a.query=c:a.data=c,a.sync=!0;var u=r(a.url,a);return o(u,n),{addCallback:function(t){u.then(function(n){t.apply(null,arguments)})},addErrback:function(t){u.then(function(t){},function(n){t.apply(null,arguments)})}}},c._get=function(t,n,e){e=e||{};var c,a=t._getRequest(n,e);a.sync=!0;var c=r(a.url,a);return o(c,t,e.start>=0||e.count>=0,n),{addCallback:function(t){c.then(function(n){t.apply(null,arguments)})},addErrback:function(t){c.then(function(t){},function(n){t.apply(null,arguments)})}}},c});