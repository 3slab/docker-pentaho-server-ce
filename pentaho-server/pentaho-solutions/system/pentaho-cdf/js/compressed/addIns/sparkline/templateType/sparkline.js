define(["../../../AddIn","../sparklineBase","../../../Dashboard","amd!../../../lib/underscore","../../../lib/jquery","css!./theme/sparkline"],function(e,t,n,r,a){var i=new e(a.extend(!0,{},t,{defaults:{type:"bar"},getData:function(e,t){return r.map(e.value.split(","),function(e){return e.trim()})}}));return n.registerGlobalAddIn("Template","templateType",i),i});