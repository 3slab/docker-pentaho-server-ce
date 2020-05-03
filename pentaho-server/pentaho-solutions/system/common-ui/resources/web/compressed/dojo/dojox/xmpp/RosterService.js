dojo.provide("dojox.xmpp.RosterService"),dojox.xmpp.roster={ADDED:101,CHANGED:102,REMOVED:103},dojo.declare("dojox.xmpp.RosterService",null,{constructor:function(e){this.session=e},addRosterItem:function(e,r,o){if(!e)throw new Error("Roster::addRosterItem() - User ID is null");var t=this.session.getNextIqId(),s={id:t,from:this.session.jid+"/"+this.session.resource,type:"set"},i=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",s,!1));if(i.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:roster"},!1)),e=dojox.xmpp.util.encodeJid(e),-1==e.indexOf("@")&&(e=e+"@"+this.session.domain),i.append(dojox.xmpp.util.createElement("item",{jid:e,name:dojox.xmpp.util.xmlEncode(r)},!1)),o)for(var n=0;n<o.length;n++)i.append("<group>"),i.append(o[n]),i.append("</group>");i.append("</item></query></iq>");var p=this.session.dispatchPacket(i.toString(),"iq",s.id);return p.addCallback(this,"verifyRoster"),p},updateRosterItem:function(e,r,o){-1==e.indexOf("@")&&(e+=e+"@"+this.session.domain);var t={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,type:"set"},s=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",t,!1));s.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:roster"},!1));var i=this.session.getRosterIndex(e);if(-1!=i){var n={jid:e};r?n.name=r:this.session.roster[i].name&&(n.name=this.session.roster[i].name),n.name&&(n.name=dojox.xmpp.util.xmlEncode(n.name)),s.append(dojox.xmpp.util.createElement("item",n,!1));var p=o||this.session.roster[i].groups;if(p)for(var d=0;d<p.length;d++)s.append("<group>"),s.append(p[d]),s.append("</group>");s.append("</item></query></iq>");var u=this.session.dispatchPacket(s.toString(),"iq",t.id);return u.addCallback(this,"verifyRoster"),u}},verifyRoster:function(e){if("result"==e.getAttribute("type"));else{var r=this.session.processXmppError(e);this.onAddRosterItemFailed(r)}return e},addRosterItemToGroup:function(e,r){if(!e)throw new Error("Roster::addRosterItemToGroup() JID is null or undefined");if(!r)throw new Error("Roster::addRosterItemToGroup() group is null or undefined");var o=this.session.getRosterIndex(e);if(-1!=o){for(var t=this.session.roster[o],s=!1,i=0;t<t.groups.length&&!s;i++)t.groups[i]==r&&(s=!0);return s?dojox.xmpp.xmpp.INVALID_ID:this.updateRosterItem(e,t.name,t.groups.concat(r),o)}},removeRosterGroup:function(e){for(var r=this.session.roster,o=0;o<r.length;o++){var t=r[o];if(t.groups.length>0)for(var s=0;s<t.groups.length;s++)t.groups[s]==e&&(t.groups.splice(s,1),this.updateRosterItem(t.jid,t.name,t.groups))}},renameRosterGroup:function(e,r){for(var o=this.session.roster,t=0;t<o.length;t++){var s=o[t];if(s.groups.length>0)for(var i=0;i<s.groups.length;i++)s.groups[i]==e&&(s.groups[i]=r,this.updateRosterItem(s.jid,s.name,s.groups))}},removeRosterItemFromGroup:function(e,r){if(!e)throw new Error("Roster::addRosterItemToGroup() JID is null or undefined");if(!r)throw new Error("Roster::addRosterItemToGroup() group is null or undefined");var o=this.session.getRosterIndex(e);if(-1!=o){for(var t=this.session.roster[o],s=!1,i=0;i<t.groups.length&&!s;i++)t.groups[i]==r&&(s=!0,o=i);return 1==s?(t.groups.splice(o,1),this.updateRosterItem(e,t.name,t.groups)):dojox.xmpp.xmpp.INVALID_ID}},rosterItemRenameGroup:function(e,r,o){if(!e)throw new Error("Roster::rosterItemRenameGroup() JID is null or undefined");if(!o)throw new Error("Roster::rosterItemRenameGroup() group is null or undefined");var t=this.session.getRosterIndex(e);if(-1!=t){for(var s=this.session.roster[t],i=!1,n=0;n<s.groups.length&&!i;n++)s.groups[n]==r&&(s.groups[n]=o,i=!0);return 1==i?this.updateRosterItem(e,s.name,s.groups):dojox.xmpp.xmpp.INVALID_ID}},renameRosterItem:function(e,r){if(!e)throw new Error("Roster::addRosterItemToGroup() JID is null or undefined");if(!r)throw new Error("Roster::addRosterItemToGroup() New Name is null or undefined");var o=this.session.getRosterIndex(e);if(-1!=o)return this.updateRosterItem(e,r,this.session.roster.groups,o)},removeRosterItem:function(e){if(!e)throw new Error("Roster::addRosterItemToGroup() JID is null or undefined");var r={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,type:"set"},o=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",r,!1));o.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:roster"},!1)),-1==e.indexOf("@")&&(e+=e+"@"+this.session.domain),o.append(dojox.xmpp.util.createElement("item",{jid:e,subscription:"remove"},!0)),o.append("</query></iq>");var t=this.session.dispatchPacket(o.toString(),"iq",r.id);return t.addCallback(this,"verifyRoster"),t},getAvatar:function(e){},publishAvatar:function(e,r){},onVerifyRoster:function(e){},onVerifyRosterFailed:function(e){}});