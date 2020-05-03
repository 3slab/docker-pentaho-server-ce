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

define("common-ui/util/BootstrappedTabLoader",["common-ui/util/PentahoSpinner","common-ui/util/spin","common-ui/util/ContextProvider","common-ui/util/HandlebarsCompiler","common-ui/bootstrap"],function(t,o,e,n){function i(i){a=new o(t.getLargeConfig()),$(i.parentSelector+" #tab-group a").bind("click",function(t){t.preventDefault();var o=$(this).attr("href");$(this).tab("show");var c=i.parentSelector+" "+o;if(0==$(c).children().length){var a=n.compile(i.tabContentPattern,{contentNumber:o.replace("#tab","")});e.get(function(t){r(a,c,t,i.postLoad)},i.contextConfig)}i.postClick&&i.postClick(c)}),i.before&&i.before(),$(i.parentSelector+" a[href=\\#"+i.defaultTabSelector+"]").click()}function r(t,o,e,i){c(o),$.get(t,function(t){n.compile(t,e,function(t){setTimeout(function(){a.stop();var e=$(t);$(o).html(e),i&&i(e,o)},200)})})}function c(t){var o=$("<div></div>");o.css({width:"100%",overflow:"hidden"}),$(t).html(o),a.spin(o[0])}var a;return{init:i}});