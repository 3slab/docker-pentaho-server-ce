dojo.provide("dojox.jsonPath.query"),dojox.jsonPath.query=function(obj,expr,arg){function _str(r){return strs[r]}var re=dojox.jsonPath._regularExpressions;arg||(arg={});var strs=[],_strName=_str.name,acc;if("PATH"==arg.resultType&&"RESULT"==arg.evalType)throw Error("RESULT based evaluation not supported with PATH based results");var P={resultType:arg.resultType||"VALUE",normalize:function(expr){var subx=[];expr=expr.replace(/'([^']|'')*'/g,function(t){return _strName+"("+(strs.push(eval(t))-1)+")"});for(var ll=-1;ll!=subx.length;)ll=subx.length,expr=expr.replace(/(\??\([^\(\)]*\))/g,function(r){return"#"+(subx.push(r)-1)});for(expr=expr.replace(/[\['](#[0-9]+)[\]']/g,"[$1]").replace(/'?\.'?|\['?/g,";").replace(/;;;|;;/g,";..;").replace(/;$|'?\]|'$/g,""),ll=-1;ll!=expr;)ll=expr,expr=expr.replace(/#([0-9]+)/g,function(r,e){return subx[e]});return expr.split(";")},asPaths:function(r){for(var e=0;e<r.length;e++){for(var t="$",a=r[e],n=1,s=a.length;n<s;n++)t+=/^[0-9*]+$/.test(a[n])?"["+a[n]+"]":"['"+a[n]+"']";r[e]=t}return r},exec:function(r,e,t){function a(r,e,t){r&&r.hasOwnProperty(e)&&"VALUE"!=P.resultType&&c.push(u.concat([e])),t?p=r[e]:r&&r.hasOwnProperty(e)&&p.push(r[e])}function n(r){p.push(r),c.push(u),P.walk(r,function(e){if("object"==typeof r[e]){var t=u;u=u.concat(e),n(r[e]),u=t}})}function s(r,e){if(e instanceof Array){var t=e.length,n=0,s=t,o=1;r.replace(/^(-?[0-9]*):(-?[0-9]*):?(-?[0-9]*)$/g,function(r,e,t,a){n=parseInt(e||n),s=parseInt(t||s),o=parseInt(a||o)}),n=n<0?Math.max(0,n+t):Math.min(t,n),s=s<0?Math.max(0,s+t):Math.min(t,s);for(var l=n;l<s;l+=o)a(e,l)}}function o(r){var e=i.match(/^_str\(([0-9]+)\)$/);return e?strs[e[1]]:r}function l(r){if(/^\(.*?\)$/.test(i))a(r,P.eval(i,r),t);else if("*"===i)P.walk(r,t&&r instanceof Array?function(e){P.walk(r[e],function(t){a(r[e],t)})}:function(e){a(r,e)});else if(".."===i)n(r);else if(/,/.test(i))for(var e=i.split(/'?,'?/),l=0,u=e.length;l<u;l++)a(r,o(e[l]));else/^\?\(.*?\)$/.test(i)?P.walk(r,function(e){P.eval(i.replace(/^\?\((.*?)\)$/,"$1"),r[e])&&a(r,e)}):/^(-?[0-9]*):(-?[0-9]*):?([0-9]*)$/.test(i)?s(i,r):(i=o(i),t&&r instanceof Array&&!/^[0-9*]+$/.test(i)?P.walk(r,function(e){a(r[e],i)}):a(r,i,t))}for(var u=["$"],p=t?e:[e],c=[u];r.length;){var i=r.shift();if(null===(e=p)||void 0===e)return e;p=[];var f=c;c=[],t?l(e):P.walk(e,function(r){u=f[r]||u,l(e[r])})}if("BOTH"==P.resultType){c=P.asPaths(c);for(var h=[],v=0;v<c.length;v++)h.push({path:c[v],value:p[v]});return h}return"PATH"==P.resultType?P.asPaths(c):p},walk:function(r,e){if(r instanceof Array)for(var t=0,a=r.length;t<a;t++)t in r&&e(t);else if("object"==typeof r)for(var n in r)r.hasOwnProperty(n)&&e(n)},eval:function(x,v){try{return $&&v&&eval(x.replace(/@/g,"v"))}catch(r){throw new SyntaxError("jsonPath: "+r.message+": "+x.replace(/@/g,"v").replace(/\^/g,"_a"))}}},$=obj;return!(!expr||!obj)&&P.exec(P.normalize(expr).slice(1),obj,"RESULT"==arg.evalType)};