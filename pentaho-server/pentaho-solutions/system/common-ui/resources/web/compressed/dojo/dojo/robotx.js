define(["require","doh/main","./aspect","./dom-construct","./dom-style","./_base/kernel","./_base/lang","./on","./robot","./sniff","./_base/window"],function(e,t,o,n,i,d,r,c,u,a,m){function s(t){e(["./domReady!"],function(){var e={overflow:"hidden",margin:"0px",borderWidth:"0px",height:"100%",width:"100%"};i.set(document.documentElement,e),i.set(document.body,e),b=document.createElement("iframe"),b.setAttribute("ALLOWTRANSPARENCY","true"),b.scrolling=a("ie")?"yes":"auto";var o="BackCompat"==document.compatMode?document.body:document.documentElement,d=(document.getElementById("firebug")||{}).offsetHeight||0;i.set(b,{border:"0px none",padding:"0px",margin:"0px",width:"100%",height:d?o.clientHeight-d+"px":"100%"}),b.src=t,void 0!==b.attachEvent?b.attachEvent("onload",l):c(b,"load",l),n.place(b,m.body(),"first")})}function l(){u._updateDocument(),b.contentWindow.require?b.contentWindow.require(["dojo/ready"],function(e){e(1/0,function(){setTimeout(function(){f.resolve(!0)},500)})}):f.resolve(!0)}d.experimental("dojo.robotx");var b=null;d.config.debugHeight=d.config.debugHeight||200;var f;return r.mixin(u,{_updateDocument:function(){d.setContext(b.contentWindow,b.contentWindow.document),u.window=b.contentWindow,u.doc=b.contentWindow.document;var e=d.global;e.dojo&&(d.publish=e.dojo.publish,d.subscribe=e.dojo.subscribe,d.connectPublisher=e.dojo.connectPublisher)},initRobot:function(e){t.registerGroup("initialize robot",{name:"load "+e,timeout:1e5,runTest:function(){return f=new t.Deferred,s(e),f}})},waitForPageToLoad:function(e){return f=new t.Deferred,e(),f}}),u});