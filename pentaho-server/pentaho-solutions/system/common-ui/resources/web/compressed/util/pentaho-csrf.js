/*!
 * Copyright 2019 Hitachi Vantara. All rights reserved.
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
 */

var pho=pho||{};pho.csrfUtil=function(){return{getToken:function(e){if(!e)throw new Error("Argument 'url' is required.");if(0!==e.indexOf(FULL_QUALIFIED_URL))return null;var r=FULL_QUALIFIED_URL+"api/system/csrf?url="+encodeURIComponent(e),n=new XMLHttpRequest;n.open("GET",r,!1),n.withCredentials=!0;try{n.send()}catch(e){return null}if(204!==n.status&&200!==n.status)return null;var t=n.getResponseHeader("X-CSRF-TOKEN");return null==t?null:{header:n.getResponseHeader("X-CSRF-HEADER"),parameter:n.getResponseHeader("X-CSRF-PARAM"),token:t}}}}(),define("common-ui/util/pentaho-csrf",[],function(){return pho.csrfUtil});