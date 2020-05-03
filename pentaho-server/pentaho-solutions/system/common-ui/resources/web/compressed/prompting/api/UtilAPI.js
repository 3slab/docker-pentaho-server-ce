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

define(["common-ui/prompting/parameters/ParameterXmlParser","common-ui/prompting/parameters/ParameterValidator"],function(r,e){return function(a){this._parameterXmlParser=new r,this._parameterValidator=new e,this.parseParameterXml=function(r){return this._parameterXmlParser.parseParameterXml(r)},this.validateSingleParameter=function(r,e,a,t){return this._parameterValidator.validateSingleParameter(r,e,a,t)},this.checkParametersErrors=function(r){return this._parameterValidator.checkParametersErrors(r)}}});