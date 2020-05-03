define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/sniff","dojo/keys"],function(e,t,n,r,a,c){e.experimental("dojox.string.BidiComplex");var i=t.getObject("string.BidiComplex",!0,dojox),o=[];i.attachInput=function(e,t){e.alt=t,r.connect(e,"onkeydown",this,"_ceKeyDown"),r.connect(e,"onkeyup",this,"_ceKeyUp"),r.connect(e,"oncut",this,"_ceCutText"),r.connect(e,"oncopy",this,"_ceCopyText"),e.value=i.createDisplayString(e.value,e.alt)},i.createDisplayString=function(e,t){e=i.stripSpecialCharacters(e);var r=i._parse(e,t),a="‪"+e,c=1;return n.forEach(r,function(e){if(null!=e){var t=a.substring(0,e+c),n=a.substring(e+c,a.length);a=t+"‎"+n,c++}}),a},i.stripSpecialCharacters=function(e){return e.replace(/[\u200E\u200F\u202A-\u202E]/g,"")},i._ceKeyDown=function(e){var t=a("ie")?e.srcElement:e.target;o=t.value},i._ceKeyUp=function(e){var t=a("ie")?e.srcElement:e.target,n=t.value,r=e.keyCode;if(r!=c.HOME&&r!=c.END&&r!=c.SHIFT){var s,u,l=i._getCaretPos(e,t);if(l&&(s=l[0],u=l[1]),a("ie")){var d=s,f=u;if(r==c.LEFT_ARROW)return void("‎"==n.charAt(u-1)&&s==u&&i._setSelectedRange(t,s-1,u-1));if(r==c.RIGHT_ARROW)return"‎"==n.charAt(u-1)&&(f=u+1,s==u&&(d=s+1)),void i._setSelectedRange(t,d,f)}else{if(r==c.LEFT_ARROW)return void("‎"==n.charAt(u-1)&&i._setSelectedRange(t,s-1,u-1));if(r==c.RIGHT_ARROW)return void("‎"==n.charAt(u-1)&&i._setSelectedRange(t,s+1,u+1))}var p=i.createDisplayString(n,t.alt);n!=p&&(window.status=n+" c="+u,t.value=p,r==c.DELETE&&"‎"==p.charAt(u)&&(t.value=p.substring(0,u)+p.substring(u+2,p.length)),r==c.DELETE?i._setSelectedRange(t,s,u):r==c.BACKSPACE?o.length>=u&&"‎"==o.charAt(u-1)?i._setSelectedRange(t,s-1,u-1):i._setSelectedRange(t,s,u):"‎"!=t.value.charAt(u)&&i._setSelectedRange(t,s+1,u+1))}},i._processCopy=function(e,t,n){if(null==t)if(a("ie")){var r=document.selection.createRange();t=r.text}else t=e.value.substring(e.selectionStart,e.selectionEnd);var c=i.stripSpecialCharacters(t);return a("ie")&&window.clipboardData.setData("Text",c),!0},i._ceCopyText=function(e){return a("ie")&&(e.returnValue=!1),i._processCopy(e,null,!1)},i._ceCutText=function(e){if(!i._processCopy(e,null,!1))return!1;if(a("ie"))document.selection.clear();else{var t=e.selectionStart;e.value=e.value.substring(0,t)+e.value.substring(e.selectionEnd),e.setSelectionRange(t,t)}return!0},i._getCaretPos=function(e,t){if(a("ie")){var n=0,r=document.selection.createRange().duplicate(),c=r.duplicate(),i=r.text.length;for("textarea"==t.type?c.moveToElementText(t):c.expand("textedit");r.compareEndPoints("StartToStart",c)>0;)r.moveStart("character",-1),++n;return[n,n+i]}return[e.target.selectionStart,e.target.selectionEnd]},i._setSelectedRange=function(e,t,n){if(a("ie")){var r=e.createTextRange();r&&("textarea"==e.type?r.moveToElementText(e):r.expand("textedit"),r.collapse(),r.moveEnd("character",n),r.moveStart("character",t),r.select())}else e.selectionStart=t,e.selectionEnd=n};var s=function(e){return e>="0"&&e<="9"||e>"ÿ"},u=function(e){return e>="A"&&e<="Z"||e>="a"&&e<="z"},l=function(e,t,n){for(;t>0;){if(t==n)return!1;if(t--,s(e.charAt(t)))return!0;if(u(e.charAt(t)))return!1}return!1};return i._parse=function(e,t){var r=-1,a=[],c={FILE_PATH:"/\\:.",URL:"/:.?=&#",XPATH:"/\\:.<>=[]",EMAIL:"<>@.,;"}[t];switch(t){case"FILE_PATH":case"URL":case"XPATH":n.forEach(e,function(t,n){c.indexOf(t)>=0&&l(e,n,r)&&(r=n,a.push(n))});break;case"EMAIL":;n.forEach(e,function(t,n){if('"'==t){l(e,n,r)&&(r=n,a.push(n)),n++;var i=e.indexOf('"',n);i>=n&&(n=i),l(e,n,r)&&(r=n,a.push(n))}c.indexOf(t)>=0&&l(e,n,r)&&(r=n,a.push(n))})}return a},i});