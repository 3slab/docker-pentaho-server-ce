/*******************************************************************************
 * OpenAjax.js
 *
 * Reference implementation of the OpenAjax Hub, as specified by OpenAjax Alliance.
 * Specification is under development at:
 *
 *   http://www.openajax.org/member/wiki/OpenAjax_Hub_Specification
 *
 * Copyright 2006-2007 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless
 * required by applicable law or agreed to in writing, software distributed
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 ******************************************************************************/

window.OpenAjax||(OpenAjax=new function(){var i={},e="org.openajax.hub.",s={};this.hub=s,s.implementer="http://openajax.org",s.implVersion="0.6",s.specVersion="0.6",s.implExtraData={},s.libraries=i,s.registerLibrary=function(s,t,n,r){i[s]={prefix:s,namespaceURI:t,version:n,extraData:r},this.publish(e+"registerLibrary",i[s])},s.unregisterLibrary=function(s){this.publish(e+"unregisterLibrary",i[s]),delete i[s]},s._subscriptions={c:{},s:[]},s._cleanup=[],s._subIndex=0,s._pubDepth=0,s.subscribe=function(i,e,s,t,n){s||(s=window);var r=i+"."+this._subIndex,p={scope:s,cb:e,fcb:n,data:t,sid:this._subIndex++,hdl:r},u=i.split(".");return this._subscribe(this._subscriptions,u,0,p),r},s.publish=function(i,e){var s=i.split(".");if(this._pubDepth++,this._publish(this._subscriptions,s,0,i,e),this._pubDepth--,this._cleanup.length>0&&0==this._pubDepth){for(var t=0;t<this._cleanup.length;t++)this.unsubscribe(this._cleanup[t].hdl);delete this._cleanup,this._cleanup=[]}},s.unsubscribe=function(i){var e=i.split("."),s=e.pop();this._unsubscribe(this._subscriptions,e,0,s)},s._subscribe=function(i,e,s,t){var n=e[s];s==e.length?i.s.push(t):(void 0===i.c&&(i.c={}),void 0===i.c[n]&&(i.c[n]={c:{},s:[]}),this._subscribe(i.c[n],e,s+1,t))},s._publish=function(i,e,s,t,n){if(void 0!==i){var r;if(s==e.length?r=i:(this._publish(i.c[e[s]],e,s+1,t,n),this._publish(i.c["*"],e,s+1,t,n),r=i.c["**"]),void 0!==r)for(var p=r.s,u=p.length,a=0;a<u;a++)if(p[a].cb){var b=p[a].scope,h=p[a].cb,c=p[a].fcb,l=p[a].data;"string"==typeof h&&(h=b[h]),"string"==typeof c&&(c=b[c]),c&&!c.call(b,t,n,l)||h.call(b,t,n,l)}}},s._unsubscribe=function(i,e,s,t){if(void 0!==i){if(s<e.length){var n=i.c[e[s]];if(this._unsubscribe(n,e,s+1,t),0==n.s.length){for(var r in n.c)return;delete i.c[e[s]]}return}for(var p=i.s,u=p.length,a=0;a<u;a++)if(t==p[a].sid)return void(this._pubDepth>0?(p[a].cb=null,this._cleanup.push(p[a])):p.splice(a,1))}},s.reinit=function(){for(var i in OpenAjax.hub.libraries)delete OpenAjax.hub.libraries[i];OpenAjax.hub.registerLibrary("OpenAjax","http://openajax.org/hub","0.6",{}),delete OpenAjax._subscriptions,OpenAjax._subscriptions={c:{},s:[]},delete OpenAjax._cleanup,OpenAjax._cleanup=[],OpenAjax._subIndex=0,OpenAjax._pubDepth=0}},OpenAjax.hub.registerLibrary("OpenAjax","http://openajax.org/hub","0.6",{}));