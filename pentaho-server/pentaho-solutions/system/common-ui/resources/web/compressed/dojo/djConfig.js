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

function normalizeLocale(o){return o.replace("_","-").toLowerCase()}if("undefined"==dojoConfig||void 0==dojoConfig)var dojoConfig={disableFlashStorage:!0,locale:SESSION_LOCALE.match(/^[a-zA-Z]{2}_[a-zA-Z]{2}$|^[a-zA-Z]{2}$/)?normalizeLocale(SESSION_LOCALE):"en"};else"undefined"!=dojoConfig.disableFlashStorage&&void 0!=dojoConfig.disableFlashStorage||(dojoConfig.disableFlashStorage=!0);