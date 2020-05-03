define(["dojo/_base/lang","../_base","dojo/_base/array","dojo/_base/connect"],function(e,t,n,r){var s=e.getObject("tag.loader",!0,t);return s.BlockNode=e.extend(function(e,t){this.name=e,this.nodelist=t},{super:function(){if(this.parent){var e=this.parent.nodelist.dummyRender(this.context,null,!0);return"string"==typeof e&&(e=new String(e)),e.safe=!0,e}return""},render:function(e,t){var n=this.name,s=this.nodelist;if(t.blocks){var i=t.blocks[n];i&&(i.parent,s=i.nodelist,i.used=!0)}if(this.rendered=s,e=e.push(),this.context=e,this.parent=null,s!=this.nodelist&&(this.parent=this),e.block=this,t.getParent)var o=t.getParent(),a=r.connect(t,"onSetParent",function(e,n,r){n&&r&&t.setParent(o)});return t=s.render(e,t,this),a&&r.disconnect(a),e=e.pop(),t},unrender:function(e,t){return this.rendered.unrender(e,t)},clone:function(e){return new this.constructor(this.name,this.nodelist.clone(e))},toString:function(){return"dojox.dtl.tag.loader.BlockNode"}}),s.ExtendsNode=e.extend(function(e,t,n,r,s){this.getTemplate=e,this.nodelist=t,this.shared=n,this.parent=r,this.key=s},{parents:{},getParent:function(e){var t=this.parent;if(!t){var n;if(!(t=this.parent=e.get(this.key,!1)))throw new Error("extends tag used a variable that did not resolve");if("object"==typeof t){var r=t.url||t.templatePath;t.shared&&(this.shared=!0),r?t=this.parent=r.toString():t.templateString?(n=t.templateString,t=this.parent=" "):t=this.parent=this.parent.toString()}t&&0===t.indexOf("shared:")&&(this.shared=!0,t=this.parent=t.substring(7,t.length))}if(!t)throw new Error("Invalid template name in 'extends' tag.");return t.render?t:this.parents[t]?this.parents[t]:(this.parent=this.getTemplate(n||dojox.dtl.text.getTemplateString(t)),this.shared&&(this.parents[t]=this.parent),this.parent)},render:function(e,t){var n=this.getParent(e);n.blocks=n.blocks||{},t.blocks=t.blocks||{};for(var r,s=0;r=this.nodelist.contents[s];s++)if(r instanceof dojox.dtl.tag.loader.BlockNode){var i=n.blocks[r.name];i&&i.nodelist!=r.nodelist&&(t=i.nodelist.unrender(e,t)),n.blocks[r.name]=t.blocks[r.name]={shared:this.shared,nodelist:r.nodelist,used:!1}}return this.rendered=n,n.nodelist.render(e,t,this)},unrender:function(e,t){return this.rendered.unrender(e,t,this)},toString:function(){return"dojox.dtl.block.ExtendsNode"}}),s.IncludeNode=e.extend(function(e,n,r,s,i){this._path=e,this.constant=n,this.path=n?e:new t._Filter(e),this.getTemplate=r,this.text=s,this.parsed=5!=arguments.length||i},{_cache:[{},{}],render:function(e,n){var r=(this.constant?this.path:this.path.resolve(e)).toString(),s=Number(this.parsed),i=!1;r!=this.last&&(i=!0,this.last&&(n=this.unrender(e,n)),this.last=r);var o=this._cache[s];if(s){if(o[r]||(o[r]=t.text._resolveTemplateArg(r,!0)),i){var a=this.getTemplate(o[r]);this.rendered=a.nodelist}return this.rendered.render(e,n,this)}if(this.text instanceof t._TextNode)return i&&(this.rendered=this.text,this.rendered.set(t.text._resolveTemplateArg(r,!0))),this.rendered.render(e,n);if(!o[r]){var d=[],h=document.createElement("div");h.innerHTML=t.text._resolveTemplateArg(r,!0);for(var l=h.childNodes;l.length;){var c=h.removeChild(l[0]);d.push(c)}o[r]=d}if(i){this.nodelist=[];for(var u,p=0;u=o[r][p];p++)this.nodelist.push(u.cloneNode(!0))}for(var f,p=0;f=this.nodelist[p];p++)n=n.concat(f);return n},unrender:function(e,t){if(this.rendered&&(t=this.rendered.unrender(e,t)),this.nodelist)for(var n,r=0;n=this.nodelist[r];r++)t=t.remove(n);return t},clone:function(e){return new this.constructor(this._path,this.constant,this.getTemplate,this.text.clone(e),this.parsed)}}),e.mixin(s,{block:function(e,t){var n=t.contents.split(),r=n[1];e._blocks=e._blocks||{},e._blocks[r]=e._blocks[r]||[],e._blocks[r].push(r);var s=e.parse(["endblock","endblock "+r]).rtrim();return e.next_token(),new dojox.dtl.tag.loader.BlockNode(r,s)},extends_:function(e,t){var n=t.contents.split(),r=!1,s=null,i=null;'"'==n[1].charAt(0)||"'"==n[1].charAt(0)?s=n[1].substring(1,n[1].length-1):i=n[1],s&&0==s.indexOf("shared:")&&(r=!0,s=s.substring(7,s.length));var o=e.parse();return new dojox.dtl.tag.loader.ExtendsNode(e.getTemplate,o,r,s,i)},include:function(e,t){var n=t.contents.split();if(2!=n.length)throw new Error(n[0]+" tag takes one argument: the name of the template to be included");var r=n[1],i=!1;return'"'!=r.charAt(0)&&"'"!=r.slice(-1)||r.charAt(0)!=r.slice(-1)||(r=r.slice(1,-1),i=!0),new s.IncludeNode(r,i,e.getTemplate,e.create_text_node())},ssi:function(e,n){var r=n.contents.split(),i=!1;if(3==r.length&&!(i="parsed"==r.pop()))throw new Error("Second (optional) argument to ssi tag must be 'parsed'");var o=s.include(e,new t.Token(n.token_type,r.join(" ")));return o.parsed=i,o}}),s});