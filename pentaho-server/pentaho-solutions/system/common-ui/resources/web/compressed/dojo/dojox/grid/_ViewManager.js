define(["dojo/_base/declare","dojo/_base/sniff","dojo/dom-class"],function(e,t,i){return e("dojox.grid._ViewManager",null,{constructor:function(e){this.grid=e},defaultWidth:200,views:[],resize:function(){this.onEach("resize")},render:function(){this.onEach("render")},addView:function(e){e.idx=this.views.length,this.views.push(e)},destroyViews:function(){for(var e,t=0;e=this.views[t];t++)e.destroy();this.views=[]},getContentNodes:function(){for(var e,t=[],i=0;e=this.views[i];i++)t.push(e.contentNode);return t},forEach:function(e){for(var t,i=0;t=this.views[i];i++)e(t,i)},onEach:function(e,t){t=t||[];for(var i,o=0;i=this.views[o];o++)e in i&&i[e].apply(i,t)},normalizeHeaderNodeHeight:function(){for(var e,t=[],i=0;e=this.views[i];i++)e.headerContentNode.firstChild&&t.push(e.headerContentNode);this.normalizeRowNodeHeights(t)},normalizeRowNodeHeights:function(e){var o=0,r=[];if(this.grid.rowHeight)o=this.grid.rowHeight;else{if(e.length<=1)return;for(var s,h=0;s=e[h];h++)i.contains(s,"dojoxGridNonNormalizedCell")||(r[h]=s.firstChild.offsetHeight,o=Math.max(o,r[h]));o=o>=0?o:0,(t("mozilla")||t("ie")>8)&&o&&o++}for(h=0;s=e[h];h++)r[h]!=o&&(s.firstChild.style.height=o+"px")},resetHeaderNodeHeight:function(){for(var e,t,i=0;e=this.views[i];i++)(t=e.headerContentNode.firstChild)&&(t.style.height="")},renormalizeRow:function(e){for(var t,i,o=[],r=0;(t=this.views[r])&&(i=t.getRowNode(e));r++)i.firstChild.style.height="",o.push(i);this.normalizeRowNodeHeights(o)},getViewWidth:function(e){return this.views[e].getWidth()||this.defaultWidth},measureHeader:function(){this.resetHeaderNodeHeight(),this.forEach(function(e){e.headerContentNode.style.height=""});var e=0;return this.forEach(function(t){e=Math.max(t.headerNode.offsetHeight,e)}),e},measureContent:function(){var e=0;return this.forEach(function(t){e=Math.max(t.domNode.offsetHeight,e)}),e},findClient:function(e){var t=this.grid.elasticView||-1;if(t<0)for(var i,o=1;i=this.views[o];o++)if(i.viewWidth){for(o=1;i=this.views[o];o++)if(!i.viewWidth){t=o;break}break}return t<0&&(t=Math.floor(this.views.length/2)),t},arrange:function(e,i){var o,r,s,h=this.views.length,n=this,d=i<=0?h:this.findClient(),a=function(e,i){var o=e.domNode.style,r=e.headerNode.style;n.grid.isLeftToRight()?(o.left=i+"px",r.left=i+"px"):(o.right=i+"px",t("ff")<4?r.right=i+e.getScrollbarWidth()+"px":r.right=i+"px",t("webkit")||"auto"==r.width||(r.width=parseInt(r.width,10)-e.getScrollbarWidth()+"px")),o.top="0px",r.top=0};for(o=0;(r=this.views[o])&&o<d;o++)s=this.getViewWidth(o),r.setSize(s,0),a(r,e),s=r.headerContentNode&&r.headerContentNode.firstChild?r.getColumnsWidth()+r.getScrollbarWidth():r.domNode.offsetWidth,e+=s;o++;for(var f=i,l=h-1;(r=this.views[l])&&o<=l;l--)s=this.getViewWidth(l),r.setSize(s,0),s=r.domNode.offsetWidth,f-=s,a(r,f);return d<h&&(r=this.views[d],s=Math.max(1,f-e),r.setSize(s+"px",0),a(r,e)),e},renderRow:function(e,t,i){for(var o,r,s,h=[],n=0;(o=this.views[n])&&(r=t[n]);n++)s=o.renderRow(e),r.appendChild(s),h.push(s);i||this.normalizeRowNodeHeights(h)},rowRemoved:function(e){this.onEach("rowRemoved",[e])},updateRow:function(e,t){for(var i,o=0;i=this.views[o];o++)i.updateRow(e);t||this.renormalizeRow(e)},updateRowStyles:function(e){this.onEach("updateRowStyles",[e])},setScrollTop:function(e){for(var i,o=e,r=0;i=this.views[r];r++)o=i.setScrollTop(e),t("ie")&&i.headerNode&&i.scrollboxNode&&(i.headerNode.scrollLeft=i.scrollboxNode.scrollLeft);return o},getFirstScrollingView:function(){for(var e,t=0;e=this.views[t];t++)if(e.hasHScrollbar()||e.hasVScrollbar())return e;return null}})});