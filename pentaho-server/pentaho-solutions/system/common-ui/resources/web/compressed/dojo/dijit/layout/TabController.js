define(["dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/has","dojo/i18n","dojo/_base/lang","./StackController","../registry","../Menu","../MenuItem","dojo/text!./templates/_TabButton.html","dojo/i18n!../nls/common"],function(t,e,o,i,n,s,a,d,l,r,c,h){var u=t("dijit.layout._TabButton"+(n("dojo-bidi")?"_NoBidi":""),d.StackButton,{baseClass:"dijitTab",cssStateNodes:{closeNode:"dijitTabCloseButton"},templateString:h,_setNameAttr:"focusNode",scrollOnFocus:!1,buildRendering:function(){this.inherited(arguments),e.setSelectable(this.containerNode,!1)},startup:function(){this.inherited(arguments);var t=this.domNode;this.defer(function(){t.className=t.className},1)},_setCloseButtonAttr:function(t){if(this._set("closeButton",t),i.toggle(this.domNode,"dijitClosable",t),this.closeNode.style.display=t?"":"none",t){var e=s.getLocalization("dijit","common");this.closeNode&&o.set(this.closeNode,"title",e.itemClose)}},_setDisabledAttr:function(t){if(this.inherited(arguments),this.closeNode)if(t)o.remove(this.closeNode,"title");else{var e=s.getLocalization("dijit","common");o.set(this.closeNode,"title",e.itemClose)}},_setLabelAttr:function(t){this.inherited(arguments),this.showLabel||this.params.title||(this.iconNode.alt=a.trim(this.containerNode.innerText||this.containerNode.textContent||""))}});n("dojo-bidi")&&(u=t("dijit.layout._TabButton",u,{_setLabelAttr:function(t){this.inherited(arguments),this.applyTextDir(this.iconNode,this.iconNode.alt)}}));var m=t("dijit.layout.TabController",d,{baseClass:"dijitTabController",templateString:"<div role='tablist' data-dojo-attach-event='onkeydown:onkeydown'></div>",tabPosition:"top",buttonWidget:u,buttonWidgetCloseClass:"dijitTabCloseButton",postCreate:function(){this.inherited(arguments);var t=new r({id:this.id+"_Menu",ownerDocument:this.ownerDocument,dir:this.dir,lang:this.lang,textDir:this.textDir,targetNodeIds:[this.domNode],selector:function(t){return i.contains(t,"dijitClosable")&&!i.contains(t,"dijitTabDisabled")}});this.own(t);var e=s.getLocalization("dijit","common"),o=this;t.addChild(new c({label:e.itemClose,ownerDocument:this.ownerDocument,dir:this.dir,lang:this.lang,textDir:this.textDir,onClick:function(t){var e=l.byNode(this.getParent().currentTarget);o.onCloseButtonClick(e.page)}}))}});return m.TabButton=u,m});