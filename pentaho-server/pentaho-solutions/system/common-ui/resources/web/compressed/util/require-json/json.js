/** @license
 * RequireJS plugin for loading JSON files
 * - depends on Text plugin and it was HEAVILY "inspired" by it as well.
 * Author: Miller Medeiros
 * Version: 0.3.2 (2013/08/17)
 * Released under the MIT license
 */

define(["text"],function(text){function cacheBust(n){return n=n.replace(CACHE_BUST_FLAG,""),(n+=n.indexOf("?")<0?"?":"&")+CACHE_BUST_QUERY_PARAM+"="+Math.round(2147483647*Math.random())}var CACHE_BUST_QUERY_PARAM="bust",CACHE_BUST_FLAG="!bust",jsonParse="undefined"!=typeof JSON&&"function"==typeof JSON.parse?JSON.parse:function(val){return eval("("+val+")")},buildMap={};return{load:function(n,e,t,i){!i.isBuild||!1!==i.inlineJSON&&-1===n.indexOf(CACHE_BUST_QUERY_PARAM+"=")?text.get(e.toUrl(n),function(e){i.isBuild?(buildMap[n]=e,t(e)):t(jsonParse(e))},t.error,{accept:"application/json"}):t(null)},normalize:function(n,e){return-1!==n.indexOf(CACHE_BUST_FLAG)&&(n=cacheBust(n)),e(n)},write:function(n,e,t){if(e in buildMap){t('define("'+n+"!"+e+'", function(){ return '+buildMap[e]+";});\n")}}}});