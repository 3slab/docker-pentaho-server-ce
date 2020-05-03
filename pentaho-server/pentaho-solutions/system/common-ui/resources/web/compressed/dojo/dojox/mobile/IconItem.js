define(["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","./_ItemBase","./Badge","./TransitionEvent","./iconUtils","./lazyLoadUtils","./viewRegistry","./_css3","dojo/has!dojo-bidi?dojox/mobile/bidi/IconItem"],function(e,t,i,o,n,s,d,l,h,c,a,r,p,g,b,m,f){var u=e(o("dojo-bidi")?"dojox.mobile.NonBidiIconItem":"dojox.mobile.IconItem",c,{lazy:!1,requires:"",timeout:10,content:"",badge:"",badgeClass:"mblDomButtonRedBadge",deletable:!0,deleteIcon:"",tag:"li",paramsToInherit:"transition,icon,deleteIcon,badgeClass,deleteIconTitle,deleteIconRole",baseClass:"mblIconItem",_selStartMethod:"touch",_selEndMethod:"none",destroy:function(){this.badgeObj&&delete this.badgeObj,this.inherited(arguments)},buildRendering:function(){if(this.domNode=this.srcNodeRef||d.create(this.tag),this.srcNodeRef){this._tmpNode=d.create("div");for(var e=0,t=this.srcNodeRef.childNodes.length;e<t;e++)this._tmpNode.appendChild(this.srcNodeRef.firstChild)}this.iconDivNode=d.create("div",{className:"mblIconArea"},this.domNode),this.iconParentNode=d.create("div",{className:"mblIconAreaInner"},this.iconDivNode),this.labelNode=d.create("span",{className:"mblIconAreaTitle"},this.iconDivNode),this.inherited(arguments)},startup:function(){if(!this._started){var e=this.getParent();require([e.iconItemPaneClass],i.hitch(this,function(t){var i=this.paneWidget=new t(e.iconItemPaneProps);if(this.containerNode=i.containerNode,this._tmpNode){for(var o=0,n=this._tmpNode.childNodes.length;o<n;o++)i.containerNode.appendChild(this._tmpNode.firstChild);this._tmpNode=null}e.paneContainerWidget.addChild(i,this.getIndexInParent()),i.set("label",this.label),this._clickCloseHandle=this.connect(i.closeIconNode,"onclick","_closeIconClicked"),this._keydownCloseHandle=this.connect(i.closeIconNode,"onkeydown","_closeIconClicked")})),this.inherited(arguments),this._isOnLine||(this._isOnLine=!0,this.set("icon",void 0!==this._pendingIcon?this._pendingIcon:this.icon),delete this._pendingIcon),!this.icon&&e.defaultIcon&&this.set("icon",e.defaultIcon),this._dragstartHandle=this.connect(this.domNode,"ondragstart",t.stop),this.connect(this.domNode,"onkeydown","_onClick")}},highlight:function(e){if(s.add(this.iconDivNode,"mblVibrate"),(e=void 0!==e?e:this.timeout)>0){var t=this;t.defer(function(){t.unhighlight()},1e3*e)}},unhighlight:function(){o("ie")||7!==o("trident")||h.set(this.iconDivNode,"animation-name",""),s.remove(this.iconDivNode,"mblVibrate")},isOpen:function(e){return this.paneWidget.isOpen()},_onClick:function(e){this.getParent().isEditing||e&&"keydown"===e.type&&13!==e.keyCode||!1!==this.onClick(e)&&this.defaultClickAction(e)},onClick:function(){},_onNewWindowOpened:function(e){this.set("selected",!1)},_prepareForTransition:function(e,t){return t?(this.defer(function(e){this.set("selected",!1)},1500),!0):("below"===this.getParent().transition&&this.isOpen()?this.close():this.open(e),!1)},_closeIconClicked:function(e){if(e){if("keydown"===e.type&&13!==e.keyCode)return;if(!1===this.closeIconClicked(e))return;return void this.defer(function(e){this._closeIconClicked()})}this.close()},closeIconClicked:function(){},open:function(e){var t=this.getParent();"below"===this.transition?(t.single&&t.closeAll(),this._open_1()):(t._opening=this,t.single&&(this.paneWidget.closeHeaderNode.style.display="none",this.isOpen()||t.closeAll(),t.appView._heading.set("label",this.label)),this.moveTo=t.id+"_mblApplView",new r(this.domNode,this.getTransOpts(),e).dispatch())},_open_1:function(){this.paneWidget.show(),this.unhighlight(),this.lazy&&(g.instantiateLazyWidgets(this.containerNode,this.requires),this.lazy=!1),this.scrollIntoView(this.paneWidget.domNode),this.onOpen()},scrollIntoView:function(e){var t=b.getEnclosingScrollable(e);if(t){var i=t.getDim();i.c.h>=i.d.h&&t.scrollIntoView(e,!0)}else n.global.scrollBy(0,l.position(e,!1).y)},close:function(e){if(this.isOpen()){if(this.set("selected",!1),o("css3-animations")&&!e){var t=this.paneWidget.domNode;if("below"==this.getParent().transition){s.add(t,"mblCloseContent mblShrink");var i=l.position(t,!0),n=l.position(this.domNode,!0),d=n.x+n.w/2-i.x+"px "+(n.y+n.h/2-i.y)+"px";h.set(t,m.add({},{transformOrigin:d}))}else s.add(t,"mblCloseContent mblShrink0")}else this.paneWidget.hide();this.onClose()}},onOpen:function(){},onClose:function(){},_setLabelAttr:function(e){this.label=e;var t=this._cv?this._cv(e):e;this.labelNode.innerHTML=t,this.paneWidget&&this.paneWidget.set("label",e)},_getBadgeAttr:function(){return this.badgeObj?this.badgeObj.getValue():null},_setBadgeAttr:function(e){this.badgeObj||(this.badgeObj=new a({fontSize:14,className:this.badgeClass}),h.set(this.badgeObj.domNode,{position:"absolute",top:"-2px",right:"2px"})),this.badgeObj.setValue(e),e?this.iconDivNode.appendChild(this.badgeObj.domNode):this.iconDivNode.removeChild(this.badgeObj.domNode)},_setDeleteIconAttr:function(e){this.getParent()&&(this._set("deleteIcon",e),e=this.deletable?e:"",this.deleteIconNode=p.setIcon(e,this.deleteIconPos,this.deleteIconNode,this.deleteIconTitle||this.alt,this.iconDivNode),this.deleteIconNode&&(s.add(this.deleteIconNode,"mblIconItemDeleteIcon"),this.deleteIconRole&&this.deleteIconNode.setAttribute("role",this.deleteIconRole)))},_setContentAttr:function(e){var t;this.paneWidget?t=this.paneWidget.containerNode:(this._tmpNode||(this._tmpNode=d.create("div")),t=this._tmpNode),"object"==typeof e?(d.empty(t),t.appendChild(e)):t.innerHTML=e},_setSelectedAttr:function(e){this.inherited(arguments),h.set(this.iconNode,"opacity",e?this.getParent().pressedIconOpacity:1)}});return o("dojo-bidi")?e("dojox.mobile.IconItem",[u,f]):u});