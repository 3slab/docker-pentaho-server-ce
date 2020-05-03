define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/ready","dijit/_Container","dijit/_WidgetBase","./_ItemBase","./common","./FixedSplitterPane","./Heading","./iconUtils","./ListItem","./RoundRect","./SpinWheel","./SpinWheelSlot","./SwapView","./TabBarButton","./ToolBarButton","./View"],function(e,t,o,s,i,l,n,a,c,d,r,h,f,u,p,g,m,b,x,y,I,S){var C,k=function(){var e=function(e,t){return e[t]||e.srcNodeRef&&e.srcNodeRef.getAttribute(t)};this.dispatch=function(e,t){var o=e.replace(/.*\./,"");this["check"+o]&&this["check"+o](t)},this.checkCarousel=function(e){console.log("[MIG:error] Carousel has no backward compatibility, since it was experimental in 1.7. The new Carousel supports dojo/store instead of dojo/data.")},this.checkFixedSplitter=function(e){if(!this._fixedSplitter_css_checked){this._fixedSplitter_css_checked=!0;var t=i.create("div",{className:"mblFixedSplitter"},o.body());0==l.get(t,"height")&&(i.create("link",{href:"../themes/android/FixedSplitter.css",type:"text/css",rel:"stylesheet"},o.doc.getElementsByTagName("head")[0]),console.log("[MIG:fixed] FixedSplitter.css does not seem to be loaded. Loaded it for you just now. It is in the device theme folder.")),o.body().removeChild(t),setTimeout(function(){e.resize()},1e3)}},this.checkFixedSplitterPane=function(e){console.log("[MIG:fixed] FixedSplitterPane: Deprecated. Use dojox/mobile/Container instead.")},this.checkFixedSplitter=function(e){if(!this._fixedSplitter_css_checked){this._fixedSplitter_css_checked=!0;var t=i.create("div",{className:"mblFixedSplitter"},o.body());0==l.get(t,"height")&&(i.create("link",{href:"../themes/android/FixedSplitter.css",type:"text/css",rel:"stylesheet"},o.doc.getElementsByTagName("head")[0]),console.log("[MIG:fixed] FixedSplitter.css does not seem to be loaded. Loaded it for you just now. It is in the device theme folder.")),o.body().removeChild(t),setTimeout(function(){e.resize()},1e3)}},this.checkListItem=function(e){(void 0!==e.sync||e.srcNodeRef&&e.srcNodeRef.getAttribute("sync"))&&console.log("[MIG:fixed] ListItem: The sync property is no longer supported. (async always)"),(void 0!==e.btnClass||e.srcNodeRef&&e.srcNodeRef.getAttribute("btnClass"))&&(console.log("[MIG:fixed] ListItem: The btnClass property is no longer supported. Use rightIcon instead."),e.rightIcon=e.btnClass||e.srcNodeRef&&e.srcNodeRef.getAttribute("btnClass")),(void 0!==e.btnClass2||e.srcNodeRef&&e.srcNodeRef.getAttribute("btnClass2"))&&(console.log("[MIG:fixed] ListItem: The btnClass2 property is no longer supported. Use rightIcon2 instead."),e.rightIcon2=e.btnClass2||e.srcNodeRef&&e.srcNodeRef.getAttribute("btnClass2"))},this.checkSpinWheelSlot=function(e){if(e.labels&&e.labels[0]&&"["===e.labels[0].charAt(0)){for(var t=0;t<e.labels.length;t++)e.labels[t]=e.labels[t].replace(/^\[*[\'\"]*/,""),e.labels[t]=e.labels[t].replace(/[\'\"]*\]*$/,"");console.log("[MIG:fixed] SpinWheelSlot: dojox/mobile/parser no longer accepts array-type attribute like labels=\"['A','B','C','D','E']\". Specify as labels=\"A,B,C,D,E\" instead.")}},this.checkSwapView=function(e){var t=e.srcNodeRef;if(t){"dojox.mobile.FlippableView"===(t.getAttribute("dojoType")||t.getAttribute("data-dojo-type"))&&console.log("[MIG:fixed] FlippableView: FlippableView is no longer supported. Use SwapView instead.")}},this.checkSwitch=function(e){"mblItemSwitch"===e.class&&console.log('[MIG:fixed] Switch: class="mblItemSwitch" is no longer necessary.')},this.checkTabBar=function(t){"segmentedControl"===e(t,"barType")&&(console.log("[MIG:warning] TabBar: segmentedControl in 1.8 produces the same UI regardless of the current theme. See the inline doc in migrationAssist.js for details."),i.create("style",{innerHTML:".iphone_theme .mblTabBarSegmentedControl .mblTabBarButtonIconArea { display: none; }"},o.doc.getElementsByTagName("head")[0]))},this.checkTabBarButton=function(e){0===(e.class||"").indexOf("mblDomButton")&&(console.log('[MIG:fixed] TabBarButton: Use icon="'+e.class+'" instead of class="'+e.class+'".'),e.icon=e.class,e.class="",e.srcNodeRef&&(e.srcNodeRef.className=""))},this.checkToolBarButton=function(e){0===(e.class||"").indexOf("mblColor")&&(console.log('[MIG:fixed] ToolBarButton: Use defaultColor="'+e.class+'" instead of class="'+e.class+'".'),e.defaultColor=e.class,e.class="",e.srcNodeRef&&(e.srcNodeRef.className="")),0===(e.class||"").indexOf("mblDomButton")&&(console.log('[MIG:fixed] ToolBarButton: Use icon="'+e.class+'" instead of class="'+e.class+'".'),e.icon=e.class,e.class="",e.srcNodeRef&&(e.srcNodeRef.className=""))}};dojox.mobile.FlippableView=x;var B=new k;c.prototype.postMixInProperties=function(){B.dispatch(this.declaredClass,this),dojo.forEach([h,f,g,m,y,I,S],function(e){this.declaredClass!==e.prototype.declaredClass&&this instanceof e&&B.dispatch(e.prototype.declaredClass,this)},this)},extendSelectFunction=function(e){t.extend(e,{select:function(){console.log("[MIG:fixed] "+this.declaredClass+"(id="+this.id+'): Use set("selected", boolean) instead of select/deselect.'),e.prototype.set.apply(this,["selected",!arguments[0]])},deselect:function(){this.select(!0)}})},extendSelectFunction(I),extendSelectFunction(y),t.extend(p,{set:function(e,t){"btnClass"===e?(console.log("[MIG:fixed] "+this.declaredClass+"(id="+this.id+'): Use set("rightIcon",x) instead of set("btnClass",x).'),e="rightIcon"):"btnClass2"===e&&(console.log("[MIG:fixed] "+this.declaredClass+"(id="+this.id+'): Use set("rightIcon2",x) instead of set("btnClass2",x).'),e="rightIcon2"),c.prototype.set.apply(this,[e,t])}}),t.extend(m,{getValue:function(){return console.log('[MIG:fixed] SpinWheel: getValue() is no longer supported. Use get("values") instead.'),this.get("values")},setValue:function(e){return console.log('[MIG:fixed] SpinWheel: setValue() is no longer supported. Use set("values",x) instead.'),this.set("values",e)}}),t.extend(b,{getValue:function(){return console.log('[MIG:fixed] SpinWheelSlot: getValue() is no longer supported. Use get("value") instead.'),this.get("value")},getKey:function(){return console.log('[MIG:fixed] SpinWheelSlot: getKey() is no longer supported. Use get("key") instead.'),this.get("key")},setValue:function(e){return console.log('[MIG:fixed] SpinWheelSlot: setValue() is no longer supported. Use set("value",x) instead.'),this.set("value",e)}}),t.mixin(r,{createDomButton:function(){return console.log("[MIG:fixed] dojox.mobile(id="+arguments[0].id+"): createDomButton was moved to iconUtils."),u.createDomButton.apply(this,arguments)}});var j,v,N=[],w=o.doc.styleSheets;for(j=0;j<w.length;j++)if(!w[j].href){var M=w[j].cssRules||w[j].imports;if(M)for(v=0;v<M.length;v++)M[v].href&&N.push(M[v].href)}var G=o.doc.getElementsByTagName("link");for(j=0;j<G.length;j++)N.push(G[j].href);for(j=0;j<N.length;j++)-1!==N[j].indexOf("/iphone/")?C="iphone":-1!==N[j].indexOf("/android/")?C="android":-1!==N[j].indexOf("/blackberry/")?C="blackberry":-1!==N[j].indexOf("/custom/")&&(C="custom"),s.add(o.doc.documentElement,C+"_theme"),N[j].match(/themes\/common\/(FixedSplitter.css)|themes\/common\/(SpinWheel.css)/)&&console.log("[MIG:error] "+(RegExp.$1||RegExp.$2)+" is no longer in the themes/common folder. It is in the device theme folder.");return n(function(){dojo.hash&&(console.log("[MIG:fixed] dojo/hash detected. If you would like to enable the bookmarkable feature, require dojox/mobile/bookmarkable instead of dojo/hash"),dojo.require?dojo.require("dojox.mobile.bookmarkable"):require(["dojox/mobile/bookmarkable"]))}),B});