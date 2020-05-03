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

pentaho="undefined"==typeof pentaho?{}:pentaho,pentaho.events={},pentaho.events.trigger=function(e,n,t){var _=e&&e.__events__;if(_){var o=_[n];if(o)for(var v=-1,a=o.length;++v<a;)o[v](t)}},pentaho.events.addListener=function(e,n,t){if(e){var _=e.__events__||(e.__events__={});(_[n]||(_[n]=[])).push(t)}},pentaho.events.removeListener=function(e,n){var t=e&&e.__events__;t&&(n?delete t[n]:delete e.__events__)},pentaho.events.removeSource=function(e){pentaho.events.removeListener(e)};