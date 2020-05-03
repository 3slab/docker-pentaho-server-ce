/*!
* Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
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
*/

define(["dojox/storage","../jquery"],function(e,i){e=dojox.storage;var t=new RegExp("[-\\.]","gi"),a={},n=!1;return{isAvailable:function(){if(e.isAvailable()){if("dojox.storage.FlashStorageProvider"==e.manager.getProvider().declaredClass){return!(new dojox.flash.Install).needed()}return!0}return!1},getCacheKey:function(e){return e.replace(t,"_")},putValue:function(i,t,n){if(this.isAvailable()){this.refreshCacheExpirations(),i=this.getCacheKey(i);var l,r=this.getLastModified(i);null==n&&(n=a[i]),l=null==r?{lastModified:null==n?0:n,value:t}:{lastModified:null==n?r:n,value:t},e.put(i,l)}},getValue:function(i){if(this.isAvailable()){this.refreshCacheExpirations(),i=this.getCacheKey(i);var t=e.get(i);if(null!=t)return t.value}return null},getLastModified:function(i){if(this.isAvailable()){this.refreshCacheExpirations(),i=this.getCacheKey(i);var t=e.get(i);if(null!=t){return t.lastModified}return null}},setLastModified:function(i,t){if(this.isAvailable()){i=this.getCacheKey(i);var a=e.get(i);a?a.lastModified=t:a={lastModified:t,value:null},e.put(i,a)}},clear:function(i){this.isAvailable()&&(i=this.getCacheKey(i),e.remove(i))},updateCacheExpiration:function(e){a={};var t=this;i(e).find("cache-item").each(function(){var e=i(this).find("key").text();e=t.getCacheKey(e);var n=i(this).find("last-modified").text();a[e]=n,null!=t.getValue(e)&&t.getLastModified(e)<n&&(t.clear(e),t.setLastModified(e,n))})},refreshCacheExpirations:function(){if(!n){var e=window.pentahoCacheExpirationServiceResults;"undefined"!=e&&null!=e&&(n=!0,this.updateCacheExpiration(e))}}}});