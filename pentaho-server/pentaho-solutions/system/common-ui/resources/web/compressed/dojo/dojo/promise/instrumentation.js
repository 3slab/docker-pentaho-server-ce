define(["./tracer","../has","../_base/lang","../_base/array"],function(e,r,t,n){function o(e,r,t){var n="";e&&e.stack&&(n+=e.stack),r&&r.stack&&(n+="\n    ----------------------------------------\n    rejected"+r.stack.split("\n").slice(1).join("\n").replace(/^\s+/," ")),t&&t.stack&&(n+="\n    ----------------------------------------\n"+t.stack),console.error(e,n)}function s(e,r,t,n){r||o(e,t,n)}function i(e,r,t,o){r?n.some(a,function(r,t){if(r.error===e)return a.splice(t,1),!0}):n.some(a,function(r){return r.error===e})||a.push({error:e,rejection:t,deferred:o,timestamp:(new Date).getTime()}),u||(u=setTimeout(c,f))}function c(){var e=(new Date).getTime(),r=e-f;a=n.filter(a,function(e){return!(e.timestamp<r)||(o(e.error,e.rejection,e.deferred),!1)}),u=!!a.length&&setTimeout(c,a[0].timestamp+f-e)}var a=[],u=!1,f=1e3;return function(n){var o=r("config-useDeferredInstrumentation");if(o){e.on("resolved",t.hitch(console,"log","resolved")),e.on("rejected",t.hitch(console,"log","rejected")),e.on("progress",t.hitch(console,"log","progress"));var c=[];if("string"==typeof o&&(c=o.split(","),o=c.shift()),"report-rejections"===o)n.instrumentRejected=s;else{if("report-unhandled-rejections"!==o&&!0!==o&&1!==o)throw new Error("Unsupported instrumentation usage <"+o+">");n.instrumentRejected=i,f=parseInt(c[0],10)||f}}}});