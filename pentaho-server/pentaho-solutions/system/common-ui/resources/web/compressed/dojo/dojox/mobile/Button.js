define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase","dijit/form/_ButtonMixin","dijit/form/_FormWidgetMixin","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Button"],function(i,o,t,e,d,s,n,r,c){var h=o(r("dojo-bidi")?"dojox.mobile.NonBidiButton":"dojox.mobile.Button",[d,n,s],{baseClass:"mblButton",_setTypeAttr:null,duration:1e3,_onClick:function(o){var e=this.inherited(arguments);if(e&&this.duration>=0){var d=this.focusNode||this.domNode,s=(this.baseClass+" "+this.class).split(" ");s=i.map(s,function(i){return i+"Selected"}),t.add(d,s),this.defer(function(){t.remove(d,s)},this.duration)}return e},isFocusable:function(){return!1},buildRendering:function(){if(this.srcNodeRef){if(this._cv){var i=this.srcNodeRef.firstChild;i&&3===i.nodeType&&(i.nodeValue=this._cv(i.nodeValue))}}else this.srcNodeRef=e.create("button",{type:this.type});this.inherited(arguments),this.focusNode=this.domNode},postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onclick","_onClick")},_setLabelAttr:function(i){this.inherited(arguments,[this._cv?this._cv(i):i])}});return r("dojo-bidi")?o("dojox.mobile.Button",[h,c]):h});