define(["./_base"],function(e){return dojo.experimental("dojox.timing.doLater"),e.doLater=function(o,r,t){if(o)return!1;var a=e.doLater.caller,n=e.doLater.caller.arguments;return t=t||100,r=r||dojo.global,setTimeout(function(){a.apply(r,n)},t),!0},e.doLater});