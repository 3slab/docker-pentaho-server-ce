define("cde/components/DuplicateComponent/DuplicateComponent",["cdf/components/BaseComponent","cdf/Logger","cdf/lib/jquery"],function(e,t,a){var n=0;return e.extend({update:function(){var e=this,t=a("#"+e.htmlObject).empty(),n=a("<a href='javascript:;'>Duplicate</a>");n.click(function(){e.duplicate()}),n.appendTo(t)},duplicate:function(e){var t=this;e=e||{},n+=1;var r="_"+n,o={};a.each(t.parameters,function(a,n){var c=n+r;t.dashboard.setBookmarkable(c,t.dashboard.isBookmarkable(n)),t.dashboard.setParameter(c,e[n]||t.dashboard.getParameterValue(n)),o[n]=c});var c={};a.each(t.components,function(e,t){var a=t+r;c[t]=a});var i={};i[t.targetHtmlObject]=(t.targetHtmlObject+r).replace(/([^\\])\$/g,"$1\\$");var d=a("#"+t.targetHtmlObject).clone();d.attr("id",d.attr("id")+r),d.find("[id]").each(function(e,t){var n=a(t);n.attr("id",n.attr("id")+r)}),t.targetContainer?d.appendTo("#"+t.targetContainer):d.insertAfter("#"+t.targetHtmlObject);for(var p in t.components){var m=t.components[p];m=RegExp("^render_").test(m)?m:"render_"+m;var s=t.dashboard.getComponent(m);if(s){i[s.htmlObject]=(s.htmlObject+r).replace(/([^\\])\$/g,"$1\\$");var l=s.clone(o,c,i);l.name=l.name+r,t.dashboard.addComponents([l]),t.dashboard.update(l)}}},clone:function(e,a,n){t.warn("This function is deprecated. Please use targetComponent.clone(...), see BaseComponent.js in CDF for more details.");var r=this.base(e,a,n);return r.targetHtmlObject=n[r.targetHtmlObject],r.parameters&&(r.parameters=r.parameters.map(function(t){return t in e?e[t]:t})),r}})}),define("cde/components/DuplicateComponent",["cde/components/DuplicateComponent/DuplicateComponent"],function(e){return e});