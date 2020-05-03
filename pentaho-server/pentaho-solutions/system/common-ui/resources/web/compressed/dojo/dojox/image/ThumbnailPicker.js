//
// dojox.image.ThumbnailPicker courtesy Shane O Sullivan, licensed under a Dojo CLA
//
// For a sample usage, see http://www.skynet.ie/~sos/photos.php
//
//	document topics.

dojo.provide("dojox.image.ThumbnailPicker"),dojo.experimental("dojox.image.ThumbnailPicker"),dojo.require("dojox.fx.scroll"),dojo.require("dojo.fx.easing"),dojo.require("dojo.fx"),dojo.require("dijit._Widget"),dojo.require("dijit._Templated"),dojo.declare("dojox.image.ThumbnailPicker",[dijit._Widget,dijit._Templated],{imageStore:null,request:null,size:500,thumbHeight:75,thumbWidth:100,useLoadNotifier:!1,useHyperlink:!1,hyperlinkTarget:"new",isClickable:!0,isScrollable:!0,isHorizontal:!0,autoLoad:!0,linkAttr:"link",imageThumbAttr:"imageUrlThumb",imageLargeAttr:"imageUrl",pageSize:20,titleAttr:"title",templateString:dojo.cache("dojox.image","resources/ThumbnailPicker.html"),_thumbs:[],_thumbIndex:0,_maxPhotos:0,_loadedImages:{},baseClass:"ThumbnailPicker",cellClass:"Thumbnail",postCreate:function(){this.inherited(arguments),this.pageSize=Number(this.pageSize),this._scrollerSize=this.size-102;var t=this._sizeProperty=this.isHorizontal?"width":"height";dojo.style(this.outerNode,"textAlign","center"),dojo.style(this.outerNode,t,this.size+"px"),dojo.style(this.thumbScroller,t,this._scrollerSize+"px"),this.useHyperlink&&dojo.subscribe(this.getClickTopicName(),this,function(t){var i=(t.index,this.imageStore.getValue(t.data,this.linkAttr));i&&("new"==this.hyperlinkTarget?window.open(i):window.location=i)}),this.isClickable&&dojo.addClass(this.thumbsNode,"thumbClickable"),this._totalSize=0;var i=this.isHorizontal?"Horiz":"Vert";dojo.addClass(this.navPrev,"prev"+i),dojo.addClass(this.navNext,"next"+i),dojo.addClass(this.thumbsNode,"thumb"+i),dojo.addClass(this.outerNode,"thumb"+i),dojo.attr(this.navNextImg,"src",this._blankGif),dojo.attr(this.navPrevImg,"src",this._blankGif),this.connect(this.navPrev,"onclick","_prev"),this.connect(this.navNext,"onclick","_next"),this.isHorizontal?(this._sizeAttr="offsetWidth",this._scrollAttr="scrollLeft"):(this._sizeAttr="offsetHeight",this._scrollAttr="scrollTop"),this._updateNavControls(),this.init()},init:function(){return!this.isInitialized&&(this.isInitialized=!0,this.imageStore&&this.request&&this._loadNextPage(),!0)},getClickTopicName:function(){return this.id+"/select"},getShowTopicName:function(){return this.id+"/show"},setDataStore:function(t,i,s){this.reset(),this.request={query:{},start:i.start||0,count:i.count||10,onBegin:dojo.hitch(this,function(t){this._maxPhotos=t})},i.query&&dojo.mixin(this.request.query,i.query),s&&dojo.forEach(["imageThumbAttr","imageLargeAttr","linkAttr","titleAttr"],function(t){s[t]&&(this[t]=s[t])},this),this.request.start=0,this.request.count=this.pageSize,this.imageStore=t,this._loadInProgress=!1,this.init()||this._loadNextPage()},reset:function(){this._loadedImages={},dojo.forEach(this._thumbs,function(t){t&&t.parentNode&&dojo.destroy(t)}),this._thumbs=[],this.isInitialized=!1,this._noImages=!0},isVisible:function(t){var i=this._thumbs[t];if(!i)return!1;var s=this.isHorizontal?"offsetLeft":"offsetTop",e=this.isHorizontal?"offsetWidth":"offsetHeight",o=this.isHorizontal?"scrollLeft":"scrollTop",h=i[s]-this.thumbsNode[s];return h>=this.thumbScroller[o]&&h+i[e]<=this.thumbScroller[o]+this._scrollerSize},resize:function(t){var i=this.isHorizontal?"w":"h",s=0;this._thumbs.length>0&&0==dojo.marginBox(this._thumbs[0]).w||(dojo.forEach(this._thumbs,dojo.hitch(this,function(t){var e=dojo.marginBox(t.firstChild),o=e[i];s+=Number(o)+10,this.useLoadNotifier&&e.w>0&&dojo.style(t.lastChild,"width",e.w-4+"px"),dojo.style(t,"width",e.w+"px")})),dojo.style(this.thumbsNode,this._sizeProperty,s+"px"),this._updateNavControls())},_next:function(){for(var t,i=this.isHorizontal?"offsetLeft":"offsetTop",s=this.isHorizontal?"offsetWidth":"offsetHeight",e=this.thumbsNode[i],o=this._thumbs[this._thumbIndex],h=o[i]-e,r=this._thumbIndex+1;r<this._thumbs.length;r++)if(t=this._thumbs[r],t[i]-e+t[s]-h>this._scrollerSize)return void this._showThumbs(r)},_prev:function(){if(0!=this.thumbScroller[this.isHorizontal?"scrollLeft":"scrollTop"]){for(var t,i=this.isHorizontal?"offsetLeft":"offsetTop",s=(this.isHorizontal,this._thumbs[this._thumbIndex]),e=s[i]-this.thumbsNode[i],o=this._thumbIndex-1;o>-1;o--)if(t=this._thumbs[o],e-t[i]>this._scrollerSize)return void this._showThumbs(o+1);this._showThumbs(0)}},_checkLoad:function(t,i){dojo.publish(this.getShowTopicName(),[{index:i}]),this._updateNavControls(),this._loadingImages={},this._thumbIndex=i,this.thumbsNode.offsetWidth-t.offsetLeft<2*this._scrollerSize&&this._loadNextPage()},_showThumbs:function(t){if(!((t=Math.min(Math.max(t,0),this._maxPhotos))>=this._maxPhotos)){var i=this._thumbs[t];if(i){var s=i.offsetLeft-this.thumbsNode.offsetLeft,e=i.offsetTop-this.thumbsNode.offsetTop,o=this.isHorizontal?s:e;if(!(o>=this.thumbScroller[this._scrollAttr]&&o+i[this._sizeAttr]<=this.thumbScroller[this._scrollAttr]+this._scrollerSize))if(this.isScrollable){var h=this.isHorizontal?{x:s,y:0}:{x:0,y:e};dojox.fx.smoothScroll({target:h,win:this.thumbScroller,duration:300,easing:dojo.fx.easing.easeOut,onEnd:dojo.hitch(this,"_checkLoad",i,t)}).play(10)}else this.isHorizontal?this.thumbScroller.scrollLeft=s:this.thumbScroller.scrollTop=e,this._checkLoad(i,t)}}},markImageLoaded:function(t){var i=dojo.byId("loadingDiv_"+this.id+"_"+t);i&&this._setThumbClass(i,"thumbLoaded"),this._loadedImages[t]=!0},_setThumbClass:function(t,i){this.autoLoad&&dojo.addClass(t,i)},_loadNextPage:function(){if(!this._loadInProgress){this._loadInProgress=!0;for(var t=this.request.start+(this._noImages?0:this.pageSize),i=t;i<this._thumbs.length&&this._thumbs[i];)i++;var s=this.imageStore,e=function(t,e){if(s==this.imageStore)if(t&&t.length){var o=0,h=dojo.hitch(this,function(){if(o>=t.length)return void(this._loadInProgress=!1);var s=o++;this._loadImage(t[s],i+s,h)});h(),this._updateNavControls()}else this._loadInProgress=!1},o=function(){this._loadInProgress=!1,console.log("Error getting items")};this.request.onComplete=dojo.hitch(this,e),this.request.onError=dojo.hitch(this,o),this.request.start=t,this._noImages=!1,this.imageStore.fetch(this.request)}},_loadImage:function(t,i,s){var e=this.imageStore,o=e.getValue(t,this.imageThumbAttr),h=dojo.create("div",{id:"img_"+this.id+"_"+i,class:this.cellClass}),r=dojo.create("img",{},h);r._index=i,r._data=t,this._thumbs[i]=h;var a;this.useLoadNotifier&&(a=dojo.create("div",{id:"loadingDiv_"+this.id+"_"+i},h),this._setThumbClass(a,this._loadedImages[i]?"thumbLoaded":"thumbNotifier"));var l,d,n=dojo.marginBox(this.thumbsNode);this.isHorizontal?(l=this.thumbWidth,d="w"):(l=this.thumbHeight,d="h"),n=n[d];var u=this.thumbScroller.scrollLeft,m=this.thumbScroller.scrollTop;dojo.style(this.thumbsNode,this._sizeProperty,n+l+20+"px"),this.thumbScroller.scrollLeft=u,this.thumbScroller.scrollTop=m,this.thumbsNode.appendChild(h),dojo.connect(r,"onload",this,dojo.hitch(this,function(){return e==this.imageStore&&(this.resize(),setTimeout(s,0),!1)})),dojo.connect(r,"onclick",this,function(i){return dojo.publish(this.getClickTopicName(),[{index:i.target._index,data:i.target._data,url:r.getAttribute("src"),largeUrl:this.imageStore.getValue(t,this.imageLargeAttr),title:this.imageStore.getValue(t,this.titleAttr),link:this.imageStore.getValue(t,this.linkAttr)}]),dojo.query("."+this.cellClass,this.thumbsNode).removeClass(this.cellClass+"Selected"),dojo.addClass(i.target.parentNode,this.cellClass+"Selected"),!1}),dojo.addClass(r,"imageGalleryThumb"),r.setAttribute("src",o);var c=this.imageStore.getValue(t,this.titleAttr);c&&r.setAttribute("title",c),this._updateNavControls()},_updateNavControls:function(){var t=function(t,i){var s=i?"addClass":"removeClass";dojo[s](t,"enabled"),dojo[s](t,"thumbClickable")},i=this.isHorizontal?"scrollLeft":"scrollTop",s=this.isHorizontal?"offsetWidth":"offsetHeight";t(this.navPrev,this.thumbScroller[i]>0);var e=this.thumbScroller[i]+this._scrollerSize<this.thumbsNode[s];t(this.navNext,e)}});