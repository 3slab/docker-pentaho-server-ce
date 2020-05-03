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

!function(t){function i(t){var i=jQuery(this),c=i.data("triclick_clicks")||0,a=i.data("triclick_start")||0;0===c&&(a=t.timeStamp),0!=a&&t.timeStamp>a+1e3&&(c=0,a=t.timeStamp),c+=1,3===c&&(c=0,a=0,t.type="tripleclick",jQuery.event.handle.apply(this,arguments)),i.data("triclick_clicks",c),i.data("triclick_start",a)}t.event.special.tripleclick={setup:function(c,a){t(this).bind("touchstart click.triple",i)},teardown:function(c){t(this).unbind("touchstart click.triple",i)}}}(jQuery);