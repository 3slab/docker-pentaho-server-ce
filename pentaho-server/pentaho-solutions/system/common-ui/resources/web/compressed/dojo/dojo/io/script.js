define(["../_base/connect","../_base/kernel","../_base/lang","../sniff","../_base/window","../_base/xhr","../dom","../dom-construct","../request/script","../aspect"],function(connect,kernel,lang,has,win,xhr,dom,domConstruct,_script,aspect){kernel.deprecated("dojo/io/script","Use dojo/request/script.","2.0");var script={get:function(r){var e,t=this._makeScriptDeferred(r,function(r){e&&e.cancel()}),c=t.ioArgs;return xhr._ioAddQueryToUrl(c),xhr._ioNotifyStart(t),e=_script.get(c.url,{timeout:r.timeout,jsonp:c.jsonp,checkString:r.checkString,ioArgs:c,frameDoc:r.frameDoc,canAttach:function(r){return c.requestId=r.id,c.scriptId=r.scriptId,c.canDelete=r.canDelete,script._canAttach(c)}},!0),aspect.around(e,"isValid",function(r){return function(e){return script._validCheck(t),r.call(this,e)}}),e.then(function(){t.resolve(t)}).otherwise(function(r){t.ioArgs.error=r,t.reject(r)}),t},attach:_script._attach,remove:_script._remove,_makeScriptDeferred:function(r,e){var t=xhr._ioSetArgs(r,e||this._deferredCancel,this._deferredOk,this._deferredError),c=t.ioArgs;return c.id=kernel._scopeName+"IoScript"+this._counter++,c.canDelete=!1,c.jsonp=r.callbackParamName||r.jsonp,c.jsonp&&(c.query=c.query||"",c.query.length>0&&(c.query+="&"),c.query+=c.jsonp+"="+(r.frameDoc?"parent.":"")+kernel._scopeName+".io.script.jsonp_"+c.id+"._jsonpCallback",c.frameDoc=r.frameDoc,c.canDelete=!0,t._jsonpCallback=this._jsonpCallback,this["jsonp_"+c.id]=t),t.addBoth(function(r){c.canDelete&&(r instanceof Error?script["jsonp_"+c.id]._jsonpCallback=function(){delete script["jsonp_"+c.id],c.requestId&&kernel.global[_script._callbacksProperty][c.requestId]()}:script._addDeadScript(c))}),t},_deferredCancel:function(r){r.canceled=!0},_deferredOk:function(r){var e=r.ioArgs;return e.json||e.scriptLoaded||e},_deferredError:function(r,e){return console.log("dojo.io.script error",r),r},_deadScripts:[],_counter:1,_addDeadScript:function(r){script._deadScripts.push({id:r.id,frameDoc:r.frameDoc}),r.frameDoc=null},_validCheck:function(r){var e=script._deadScripts;if(e&&e.length>0){for(var t=0;t<e.length;t++)script.remove(e[t].id,e[t].frameDoc),delete script["jsonp_"+e[t].id],e[t].frameDoc=null;script._deadScripts=[]}return!0},_ioCheck:function(dfd){var ioArgs=dfd.ioArgs;if(ioArgs.json||ioArgs.scriptLoaded&&!ioArgs.args.checkString)return!0;var checkString=ioArgs.args.checkString;return checkString&&eval("typeof("+checkString+") != 'undefined'")},_resHandle:function(r){script._ioCheck(r)?r.callback(r):r.errback(new Error("inconceivable dojo.io.script._resHandle error"))},_canAttach:function(){return!0},_jsonpCallback:function(r){this.ioArgs.json=r,this.ioArgs.requestId&&kernel.global[_script._callbacksProperty][this.ioArgs.requestId](r)}};return lang.setObject("dojo.io.script",script),script});