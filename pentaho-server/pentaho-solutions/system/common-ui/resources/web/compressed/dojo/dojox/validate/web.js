define(["./_base","./regexp"],function(e,s){return e.isIpAddress=function(e,t){return new RegExp("^"+s.ipAddress(t)+"$","i").test(e)},e.isUrl=function(e,t){return new RegExp("^"+s.url(t)+"$","i").test(e)},e.isEmailAddress=function(e,t){return new RegExp("^"+s.emailAddress(t)+"$","i").test(e)},e.isEmailAddressList=function(e,t){return new RegExp("^"+s.emailAddressList(t)+"$","i").test(e)},e.getEmailAddressList=function(s,t){return t||(t={}),t.listSeparator||(t.listSeparator="\\s;,"),e.isEmailAddressList(s,t)?s.split(new RegExp("\\s*["+t.listSeparator+"]\\s*")):[]},e});