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

define("common-ui/util/PentahoSpinner",["common-ui/util/spin","common-ui/util/Glasspane"],function(e,n){return{getSmallConfig:function(){return{lines:5,length:3,width:3,radius:3,corners:1,rotate:90,color:"#999",speed:1,trail:100,shadow:!1,hwaccel:!1,className:"spinner small-spinner",zIndex:2e9,top:"auto",left:"auto"}},getMediumConfig:function(){return{lines:7,length:7,width:4,radius:6,corners:1,rotate:90,color:"#999",speed:1,trail:100,shadow:!1,hwaccel:!1,className:"spinner medium-spinner",zIndex:2e9,top:"auto",left:"auto"}},getLargeConfig:function(){return{lines:9,length:9,width:5,radius:7,corners:1,rotate:90,color:"#999",speed:1,trail:100,shadow:!1,hwaccel:!1,className:"spinner large-spinner",zIndex:2e9,top:"auto",left:"auto"}}}});