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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/query","dijit/form/TextBox","dijit/form/Button","dojo/text!pentaho/common/TextButtonCombo.html"],function(t,e,n,o,l,i,a,u,c){return t("pentaho.common.TextButtonCombo",[e,n,n,o],{templateString:c,buttonLabel:"Submit",textPlaceHolder:"Enter Text",set:function(t,e){"buttonLabel"==t?this.submitButton.set("label",e):"text"==t||"value"==t?this.textInput.set("value",e):"textPlaceHolder"==t&&this.textInput.set("placeHolder",e)},get:function(t){return"text"==t||"value"==t?this.textInput.get("value"):null},postCreate:function(){this.set("buttonLabel",this.buttonLabel),this.set("textPlaceHolder",this.textPlaceHolder)},_onSubmitButtonClick:function(){this.onClickCallback(this.textInput.get("value"))},onClickCallback:function(t){console.log("onClickCallback...")},_onTextInputChange:function(){this.onChangeCallback(this.textInput.get("value"))},onChangeCallback:function(t){console.log("onChangeCallback...")}})});