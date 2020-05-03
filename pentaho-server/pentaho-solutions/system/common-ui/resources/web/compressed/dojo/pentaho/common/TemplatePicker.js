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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","pentaho/common/button","pentaho/common/Dialog","dojo/dom-class","dojo/_base/lang","dojo/text!pentaho/common/TemplatePicker.html"],function(t,e,i,h,a,s,c,l,m,o){return t("pentaho.common.TemplatePicker",[c],{buttons:[],templates:[],pageNo:0,hasTitleBar:!1,hasBorder:!1,templateSelectedCallback:null,updatePageArrows:function(){this.prevSetBtn.set("disabled",0==this.pageNo),this.nextSetBtn.set("disabled",6*(this.pageNo+1)>=this.templates.length)},setTemplates:function(t){this.templates=t,this.showPage(),this.updatePageArrows()},showPage:function(){for(var t=6*this.pageNo,e=0;e<6;e++)e+t<this.templates.length?(this["templateImg"+e].src=this.templates[e+t].imagePath,this["templateName"+e].innerHTML=this.templates[e+t].name,l.remove(this["templateImg"+e],"hidden"),l.add(this["templateName"+e],"fade")):(l.add(this["templateImg"+e],"hidden"),l.remove(this["templateName"+e],"fade"),this["templateName"+e].innerHTML="");this.updatePageArrows()},templateString:o,postCreate:function(){this.inherited(arguments),this.closeBtn.callback=m.hitch(this,this.closeClick),this.prevSetBtn.callback=m.hitch(this,this.prevPage),this.nextSetBtn.callback=m.hitch(this,this.nextPage),h(this.templateImg0,"click",m.hitch(this,"imgClick")),h(this.templateImg1,"click",m.hitch(this,"imgClick")),h(this.templateImg2,"click",m.hitch(this,"imgClick")),h(this.templateImg3,"click",m.hitch(this,"imgClick")),h(this.templateImg4,"click",m.hitch(this,"imgClick")),h(this.templateImg5,"click",m.hitch(this,"imgClick")),h(this.templateName0,"click",m.hitch(this,"imgClick")),h(this.templateName1,"click",m.hitch(this,"imgClick")),h(this.templateName2,"click",m.hitch(this,"imgClick")),h(this.templateName3,"click",m.hitch(this,"imgClick")),h(this.templateName4,"click",m.hitch(this,"imgClick")),h(this.templateName5,"click",m.hitch(this,"imgClick"))},imgClick:function(t){var e=this;if(e.clicks||(e.clicks=0),!(++e.clicks>1)){setTimeout(function(){e.clicks=0},500);var i=parseInt(t.target.getAttribute("idx")),i=6*this.pageNo+i;this.templateSelectedCallback&&this.templateSelectedCallback(i)}},closeClick:function(){this.buttonClick(0)},prevPage:function(){0!=this.pageNo&&(this.pageNo--,this.showPage())},nextPage:function(){6*(this.pageNo+1)>=this.templates.length||(this.pageNo++,this.showPage())}})});