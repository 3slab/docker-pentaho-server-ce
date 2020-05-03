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

define("common-ui/util/BusyIndicator",["common-ui/util/Glasspane","common-ui/util/PentahoSpinner","common-ui/util/spin","common-ui/util/tripleclick"],function(i,n,s,t){return{id:"pentaho-busy-indicator",fadeInDuration:0,fadeOutDuration:500,spinner:null,glasspane:void 0,$busyIndicator:void 0,isShowing:!1,indicators:[],show:function(t,a,o){if(null!=o&&void 0!==o&&this.indicators.push(o),this.isShowing)return void("undefined"!=typeof console&&console.log&&console.log("still showing spinner, don't need another"));this.isShowing=!0,this.glasspane=new i;this.glasspane.show(2e4);var d=this;if($(this.glasspane.$glasspane).bind("tripleclick",function(){d.hide(o)}),null==this.spinner){var e=n.getLargeConfig();this.spinner=new s(e)}this.$busyIndicator=$("<div class='busy-indicator-container waitPopup'>  <div class='busy-indicator-container-wrapper'>    <div class='pentaho-busy-indicator-spinner'></div>    <div class='pentaho-busy-indicator-msg-contianer'>      <div class='pentaho-busy-indicator-title waitPopup_title'>"+t+"</div>      <div class='pentaho-busy-indicator-message waitPopup_msg'>"+a+"</div>    </div>  </div></div>"),$(window.top.document.body).append(this.$busyIndicator),this.$busyIndicator.addClass("waitPopup"),this.$busyIndicator.find(".pentaho-busy-indicator-title").addClass("waitPopup_title"),this.$busyIndicator.find(".pentaho-busy-indicator-message").addClass("waitPopup_msg");var d=this;this.$busyIndicator.fadeIn(this.fadeInDuration,function(){var i=d.$busyIndicator.find(".pentaho-busy-indicator-spinner");d.spinner.spin(i.get(0))})},hide:function(i){if(null!=i&&void 0!==i){var n=this.indicators.length;if(n)for(var s=n-1;s>=0;s--)if(this.indicators[s]===i){this.indicators.splice(s,1);break}}if(this.indicators.length<=0&&this.isShowing){if(this.$busyIndicator){var t=this;this.$busyIndicator.fadeOut(this.fadeOutDuration,function(){t.spinner.stop(),t.$busyIndicator&&(t.$busyIndicator.remove(),t.$busyIndicator=void 0),t.isShowing=!1})}this.glasspane&&(this.glasspane.hide(),this.glasspane=void 0)}}}});