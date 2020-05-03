/*!
 * Copyright 2010 - 2019 Hitachi Vantara. All rights reserved.
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

define(["module","pentaho/visual/impl/View","pentaho/i18n!view"],function(e,t,i){"use strict";return t.extend(e.id,{constructor:function(e){this.base(e);var t=document.createElement("span");t.style.fontSize="42px",t.style.position="relative",this.domContainer.appendChild(t)},_updateAll:function(){var e=this.__calculate();this.domContainer.firstChild.innerHTML=i.get("result",[e.toFixed(2)]),this._updateSize()},_updateSize:function(){var e=this.domContainer.firstChild,t=this.model.width,i=this.model.height;e.style.left=(t-e.offsetWidth)/2+"px",e.style.top=(i-e.offsetHeight)/2+"px"},__calculate:function(){var e,t,i=this.model.data,n=i.getNumberOfRows(),l=this.model.measure.fieldIndexes[0],a=function(e){var t=i.getValue(e,l);return isNaN(t)||null==t?null:t},o=null;switch(this.model.operation){case"max":for(e=0;e<n;e++)null!=(t=a(e))&&(o=null==o?t:Math.max(o,t));break;case"min":for(e=0;e<n;e++)null!=(t=a(e))&&(o=null==o?t:Math.min(o,t));break;case"avg":var s=o=0;if(n){for(e=0;e<n;e++)null!=(t=a(e))&&(s+=t);o=s/n}break;case"sum":if(o=0,n)for(e=0;e<n;e++)null!=(t=a(e))&&(o+=t)}return o}})});