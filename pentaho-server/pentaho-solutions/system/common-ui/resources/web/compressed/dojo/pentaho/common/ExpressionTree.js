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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/query","dojo/dom-construct","dojo/dom-geometry","dijit/form/Select","dojo/text!pentaho/common/ExpressionTree/ExpressionTree.html","dojo/has","dojo/sniff","pentaho/common/Messages"],function(e,t,o,i,s,a,n,r,l,d,h,c){return e("pentaho.common.ExpressionTree",[t,o,i],{templateString:d,defaultOperator:null,operators:null,addBundleMessages:function(){pentaho.common.Messages.addUrlBundle("pentaho.common",CONTEXT_PATH+"i18n?plugin=common-ui&name=resources/web/dojo/pentaho/common/nls/messages")},getLocaleString:function(e){var t=e;return e&&(t=pentaho.common.Messages.getString(e)),t},constructor:function(e){this.addBundleMessages(),e&&e.label&&e.value?(e.label=this.getLocaleString(e.label),this.defaultOperator=e):this.defaultOperator={label:this.getLocaleString("AND"),value:"AND"},this.operators=[{label:this.getLocaleString("AND"),value:"AND"},{label:this.getLocaleString("OR"),value:"OR"}]},postCreate:function(){this.set("operators",this.operators),this.operatorSelect.set("options",this.operators),this.operatorSelect.set("value",this.value)},startUp:function(){},addCondition:function(e){var t=n.create("div",{class:"pentaho-condition"});n.place(e,t),n.place(t,this.conditionsNode),this.resize()},resize:function(){var e=r.position(this.conditionsNode).h+"px";this.bracketNode.style.height=e,this.operatorNode.style.height=e,e=h("ie")&&"auto"==e?"inherit":e,this.operatorNode.style.lineHeight=e,e=r.position(this.bracketNode).h;var t=r.position(this.operatorSelect.domNode).h;this.operatorSelectNode.style.marginTop=(e-t)/2+"px",this.operatorSelectNode.style.marginBottom=(e-t)/2+"px"},onOperatorChange:function(e){this.defaultOperator={label:this.getLocaleString(e),value:e,selected:!0}}})});