var deps=["common-ui/Plugin","common-ui/AngularPluginHandler","common-ui/ring"];define(deps,function(e,n,i){var r=i.create([e],{init:function(e){if(this.$super(e),!e.moduleName)throw r.errMsgs.moduleNameNotDefined;if(this.moduleName=e.moduleName,this.routes=[],this.controllers=[],this.services=[],this.factories=[],this.filters=[],this.directives=[],!i.instance(this.config.pluginHandler,n))throw r.errMsgs.notAnAngularPluginHandler},goto:function(e){this.config.pluginHandler.goto(e,this.moduleName)},goHome:function(){this.config.pluginHandler.goHome(this.moduleName)},onRegister:function(e){this.config.pluginHandler._onRegister(e),this.$super(e)},onUnregister:function(e){this.config.pluginHandler._onUnregister(e),this.$super(e)},toString:function(){return"ANGULAR_PLUGIN["+this.moduleName+"] -- "+this.$super()}});return r.errMsgs={},r.errMsgs.moduleNameNotDefined="Module name required",r.errMsgs.notAnAngularPluginHandler="The attached plugin handler is not an Angular Plugin Handler",r});