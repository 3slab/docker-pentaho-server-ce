define(["dojo/_base/declare","dojo/dom-style","dojo/_base/kernel","dojo/_base/lang","dojo/on","../_Plugin","../../form/ToggleButton"],function(t,e,o,n,i,d,r){o.experimental("dijit._editor.plugins.ToggleDir");var s=t("dijit._editor.plugins.ToggleDir",d,{useDefaultCommand:!1,command:"toggleDir",buttonClass:r,_initButton:function(){this.inherited(arguments),this.editor.onLoadDeferred.then(n.hitch(this,function(){var t=this.editor.editorObject.contentWindow.document.documentElement;t=t.getElementsByTagName("body")[0];var o="ltr"==e.getComputedStyle(t).direction;this.button.set("checked",!o),this.own(this.button.on("change",n.hitch(this,"_setRtl")))}))},updateState:function(){this.button.set("disabled",this.get("disabled"))},_setRtl:function(t){var e="ltr";t&&(e="rtl");var o=this.editor.editorObject.contentWindow.document.documentElement;o=o.getElementsByTagName("body")[0],o.dir=e}});return d.registry.toggleDir=function(){return new s({command:"toggleDir"})},s});