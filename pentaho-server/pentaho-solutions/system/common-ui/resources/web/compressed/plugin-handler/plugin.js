define(["common-ui/PluginHandler","common-ui/ring"],function(n,i){function e(){function n(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}var t=i.create({init:function(n){this.id=e(),this.config=n,this.isRegistered=!1},_validatePluginHandler:function(){if(!this.config.pluginHandler)throw t.errMsgs.noPluginHandler;if(!i.instance(this.config.pluginHandler,n))throw t.errMsgs.notAPluginHandler},register:function(){return this._validatePluginHandler(),this.config.pluginHandler.register(this)},unregister:function(){return this._validatePluginHandler(),this.config.pluginHandler.unregister(this)},onRegister:function(n){this.isRegistered=!0,this.config.onRegister&&this.config.onRegister(n)},onUnregister:function(n){this.isRegistered=!1,this.config.onUnregister&&this.config.onUnregister(n)},toString:function(){return"PLUGIN["+this.id+"]"}});return t.errMsgs={},t.errMsgs.noPluginHandler="There is not a pluginHandler provided in the configuration",t.errMsgs.notAPluginHandler="The attached plugin handler is not a Pentaho Plugin Handler",t});