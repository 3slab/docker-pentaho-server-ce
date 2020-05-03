/*!
 * Copyright 2010 - 2019 Hitachi Vantara.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

define([],function(){return function(){return{_isBehavioralAttrsChanged:function(t,r){return JSON.stringify(t.attributes)!==JSON.stringify(r.attributes)||t.list!==r.list||t.mandatory!==r.mandatory||t.multiSelect!==r.multiSelect||t.strict!==r.strict||t.type!==r.type},_isDataChanged:function(t,r){return JSON.stringify(t.values)!==JSON.stringify(r.values)},_isErrorsChanged:function(t,r,a){var e=r.errors[t],i=a.errors[t];return JSON.stringify(e)!==JSON.stringify(i)},_fillWrapObj:function(t,r,a,e){t[r][a.name]||(t[r][a.name]={group:a,params:[]}),t[r][a.name].params.push(e)},diff:function(t,r,a){if(!t||!r)return!1;var e={toAdd:{},toChangeData:{},toRemove:{}};t.mapParameters(function(t,a){if(!t.attributes.hidden||"false"==t.attributes.hidden){var i=r.getParameter(t.name);i&&"true"!=i.attributes.hidden||this._fillWrapObj(e,"toRemove",a,t)}},this),r.mapParameters(function(a,i){if(!a.attributes.hidden||"false"==a.attributes.hidden){var n=i.parameters.indexOf(a);n>0&&(a.after=i.parameters[n-1]);var s=t.getParameter(a.name);s&&"true"!=s.attributes.hidden?this._isBehavioralAttrsChanged(s,a)?(this._fillWrapObj(e,"toRemove",i,s),this._fillWrapObj(e,"toAdd",i,a)):(a.isErrorChanged=this._isErrorsChanged(a.name,t,r),(this._isDataChanged(s,a)||a.isErrorChanged)&&this._fillWrapObj(e,"toChangeData",i,a)):this._fillWrapObj(e,"toAdd",i,a)}},this);for(var i in a){var n=a[i],s=t.getParameter(n.name);s&&!this._isBehavioralAttrsChanged(s,a[i])||r.mapParameters(function(t,r){if(n.name==t.name)return t.forceUpdate=!0,this._fillWrapObj(e,"toChangeData",r,t),!1},this)}return e}}}});