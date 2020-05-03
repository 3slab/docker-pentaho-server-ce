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

define(["common-ui/jquery-clean","cdf/components/BaseComponent","cdf/dashboard/Utils"],function(t,e,n){return e.extend({components:void 0,executeAtStart:!0,getComponents:function(){return this.components},clear:function(){this.components&&t.each(this.components,function(t,e){e.clear()}),this.base()},remove:function(){this.placeholder().remove()},getClassFor:function(t){return t.cssClass},getMarkupFor:function(t){var e=this.getClassFor(t),n='<div id="'+t.htmlObject+'"';return e&&(n+=' class="'+e+'"'),n+="></div>"},update:function(){var e="";void 0!==this.label&&(e+="<fieldset>",this.label.length>0&&(e+="<legend>"+n.escapeHtml(this.label)+"</legend>"),e+="<div>"),this.components&&this.components.length>0&&(e+=this.updateInternal()),void 0!==this.label&&(e+="</div></fieldset>");var s=t("#"+this.htmlObject);s.html(e),this.cssClass&&s.addClass(this.cssClass)},updateInternal:function(){var e="";return t.each(this.components,function(t,n){e+=this.getMarkupFor(n)}.bind(this)),e}})});