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

define(["common-ui/util/util","cdf/components/BaseComponent","amd!cdf/lib/jquery.ui"],function(t,e,a){return e.extend({update:function(){var t=this;this.labelValueMap={},a.each(this.valuesArray,function(t,e){this.labelValueMap[e.label]=e.value}.bind(this));var e=a("#"+this.htmlObject);e.empty();var i='<input type="text" id="'+this.htmlObject+'-input"';if(this.parameter){var r;a.each(this.param.values,function(t,e){e.selected&&(r=this.formatter?this.formatter.format(this.transportFormatter.parse(e.label)):e.label)}.bind(this)),void 0!==r&&(i+=' value="'+r+'"')}i+="></input>",e.html(i);var n=a("input",e);n.autocomplete({delay:500,create:function(){a(this).data("ui-autocomplete")._renderItem=function(e,i){return a("<li></li>").append(t._createLabelTag(i.label)).appendTo(e)};var e=0;void 0!==t.getValue()&&(e=2*t.getValue().length),!0===t.autoFocus&&a(this)[0].setSelectionRange(e,e)},source:function(e,i){t.prevSelValue!==e.term&&(t.prevSelValue=e.term,t.dashboard.processChange(t.name));var r=e.term.toUpperCase();i(a.map(this.valuesArray,function(e){if(t._createLabelTag(e.label).text().toUpperCase().indexOf(r)>=0)return e}))}.bind(this),select:function(e,i){a("#"+this.htmlObject+"-input").val(i.item.value),t.dashboard.processChange(this.name)}.bind(this)}),n.keypress(function(e){13===e.which&&t.dashboard.processChange(this.name)}.bind(this)),n.focus(function(){t.prevSelValue=t.getValue()}.bind(this)),n.focusout(function(){if(t.prevSelValue!==t.getValue()){try{var e=a("#ui-active-menuitem").text();e&&a("#"+t.htmlObject+"-input").val(e)}catch(t){}t.dashboard.processChange(this.name)}}.bind(this)),this._doAutoFocus()},getValue:function(){var t=a("#"+this.htmlObject+"-input").val();return this.param.list?this.labelValueMap[t]||t:this.formatter?this.transportFormatter.format(this.formatter.parse(t)):t},_createLabelTag:function(t){return a("<a></a>").html(t)}})});