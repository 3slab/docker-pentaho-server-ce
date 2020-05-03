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

define("common-ui/util/HandlebarsCompiler",["common-ui/handlebars","common-ui/jquery"],function(){function e(e,t){$("script[type='text/x-handlebars-template']:not([delayCompile='true'])").each(function(){var i=$(this);t(n(i.html(),e),i)})}function n(e,n,t){var i=Handlebars.compile(e),o=$.trim(i(n));return t&&t(o),o}return{compileScripts:e,compile:n}});