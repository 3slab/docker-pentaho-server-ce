dojo.provide("dojox.lang.aspect.memoizerGuard"),function(){var e=dojox.lang.aspect,o=function(o){var n,t=e.getContext().instance;(n=t.__memoizerCache)&&(0==arguments.length?delete t.__memoizerCache:dojo.isArray(o)?dojo.forEach(o,function(e){delete n[e]}):delete n[o])};e.memoizerGuard=function(e){return{after:function(){o(e)}}}}();