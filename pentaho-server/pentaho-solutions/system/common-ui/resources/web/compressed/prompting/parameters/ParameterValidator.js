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
 *
 */

define(["cdf/lib/Base"],function(e){var r=function(e,r,a){var t=e.errors[r];t||(t=[]),t.push(a),e.errors[r]=t},a=function(e,r){e.errors[r]&&delete e.errors[r]},t=function(e,r){for(var a=0;a<e.length;a++)if(r==e[a].value)return!0;return!1},l=function(e,r){for(var a=0;a<r.length;a++)if(!t(e,r[a]))return!1;return!0},n=function(e,r,a,t){if(0==r.values.length||1==r.values.length&&r.values[0].manuallySet)r.values[0]={label:a[0],selected:!0,type:r.type,value:a[0],manuallySet:!0};else{var l;if(r.multiSelect){l=1==a.length&&""==a[0]&&t[r.name]?t[r.name].value:a;for(var n=0;n<r.values.length;n++)-1!=l.indexOf(r.values[n].value)&&(r.values[n].selected=!0)}else{l=""==a[0]&&t[r.name]?t[r.name].value[0]:a[0];for(var n=0;n<r.values.length;n++)if(l==r.values[n].value){r.values[n].selected=!0;break}}}};return e.extend({validateSingleParameter:function(e,t,u,s){var v=e.getParameter(t);a(e,v.name),v.mandatory&&(void 0===u?r(e,t,"This prompt value is of an invalid value"):""==u&&r(e,t,"This prompt is mandatory"));var o=[];void 0===u?o.push(""):v.multiSelect?u.forEach(function(e){o.push(e)}):o.push(u),v.strict&&(l(v.values,o)||r(e,t,"This prompt value is of an invalid value"));for(var i=0;i<v.values.length;i++)v.values[i].selected=!1;n(0,v,o,s)},checkParametersErrors:function(e){for(var r=!1,a=0;a<e.parameterGroups.length;a++)for(var t=0;t<e.parameterGroups[a].parameters.length;t++){var l=e.errors[e.parameterGroups[a].parameters[t].name];if(l){r=!0,e.promptNeeded||(e.promptNeeded=!0);break}}r||(e.promptNeeded=!1)}})});