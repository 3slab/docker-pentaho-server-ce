define(["./ContentPane","../_TemplatedMixin","dojo/_base/declare"],function(t,i,e){return e("dijit.layout.LinkPane",[t,i],{templateString:'<div class="dijitLinkPane" data-dojo-attach-point="containerNode"></div>',postMixInProperties:function(){this.srcNodeRef&&(this.title+=this.srcNodeRef.innerHTML),this.inherited(arguments)},_fillContent:function(){}})});