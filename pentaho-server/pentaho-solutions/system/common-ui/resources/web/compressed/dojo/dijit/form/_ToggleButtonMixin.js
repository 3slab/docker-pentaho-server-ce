define(["dojo/_base/declare","dojo/dom-attr"],function(e,t){return e("dijit.form._ToggleButtonMixin",null,{checked:!1,_aria_attr:"aria-pressed",_onClick:function(e){var t=this.checked;this._set("checked",!t);var i=this.inherited(arguments);return this.set("checked",i?this.checked:t),i},_setCheckedAttr:function(e,i){this._set("checked",e);var c=this.focusNode||this.domNode;this._created&&t.get(c,"checked")!=!!e&&t.set(c,"checked",!!e),c.setAttribute(this._aria_attr,String(e)),this._handleOnChange(e,i)},postCreate:function(){this.inherited(arguments);var e=this.focusNode||this.domNode;this.checked&&e.setAttribute("checked","checked")},reset:function(){this._hasBeenBlurred=!1,this.set("checked",this.params.checked||!1)}})});