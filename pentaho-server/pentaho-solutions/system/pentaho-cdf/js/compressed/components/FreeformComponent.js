define(["./UnmanagedComponent","amd!../lib/underscore"],function(n,e){return n.extend({update:function(){var n=e.bind(this.render,this);void 0===this.manageCallee||this.manageCallee?this.synchronous(n):n()},render:function(){var n=this.parameters||[];this.customfunction(n)}})});