define(["dojo/_base/declare","dojo/_base/lang","dojo/when","./getStateful","./ModelRefController"],function(e,t,r,o,n){return e("dojox.mvc.StoreRefController",n,{store:null,getStatefulOptions:null,_refSourceModelProp:"model",queryStore:function(e,n){if((this.store||{}).query){this._queryObserveHandle&&this._queryObserveHandle.cancel();var s=this,i=this.store.query(e,n),u=r(i,function(e){if(!s._beingDestroyed)return e=o(e,s.getStatefulOptions),s.set(s._refSourceModelProp,e),e});u.then&&(u=t.delegate(u));for(var l in i)isNaN(l)&&i.hasOwnProperty(l)&&t.isFunction(i[l])&&(u[l]=i[l]);return u}},getStore:function(e,t){if((this.store||{}).get){this._queryObserveHandle&&this._queryObserveHandle.cancel();var n=this;return result=r(this.store.get(e,t),function(e){if(!n._beingDestroyed)return e=o(e,n.getStatefulOptions),n.set(n._refSourceModelProp,e),e}),result}},putStore:function(e,t){if((this.store||{}).put)return this.store.put(e,t)},addStore:function(e,t){if((this.store||{}).add)return this.store.add(e,t)},removeStore:function(e,t){if((this.store||{}).remove)return this.store.remove(e,t)}})});