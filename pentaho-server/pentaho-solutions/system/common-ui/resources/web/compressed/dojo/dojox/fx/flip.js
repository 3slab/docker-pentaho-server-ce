define(["dojo/_base/kernel","dojo/_base/html","dojo/dom","dojo/dom-construct","dojo/dom-geometry","dojo/_base/connect","dojo/_base/Color","dojo/_base/sniff","dojo/_base/lang","dojo/_base/window","dojo/_base/fx","dojo/fx","./_base"],function(o,t,e,i,r,d,n,a,h,s,l,p,f){o.experimental("dojox.fx.flip");return f.flip=function(o){var r=i.create("div"),f=o.node=e.byId(o.node),c=f.style,u=null,x=null,b=null,C=o.lightColor||"#dddddd",g=o.darkColor||"#555555",w=t.style(f,"backgroundColor"),y=o.endColor||w,m={},v=[],L=o.duration?o.duration/2:250,M=o.dir||"left",j=.9,k="transparent",W=o.whichAnim,A=o.axis||"center",H=o.depth,_=function(o){return"#000000"===new n(o).toHex()?"#000001":o};a("ie")<7&&(y=_(y),C=_(C),g=_(g),w=_(w),k="black",r.style.filter="chroma(color='#000000')"),function(o){return function(){var e=t.coords(o,!0);u={top:e.y,left:e.x,width:e.w,height:e.h}}}(f)(),x={position:"absolute",top:u.top+"px",left:u.left+"px",height:"0",width:"0",zIndex:o.zIndex||c.zIndex||0,border:"0 solid "+k,fontSize:"0",visibility:"hidden"};var T=[{},{top:u.top,left:u.left}];b={left:["Left","Right","Top","Bottom","Width","Height","endHeightMin","Left","endHeightMax"],right:["Right","Left","Top","Bottom","Width","Height","endHeightMin","Left","endHeightMax"],top:["Top","Bottom","Left","Right","Height","Width","endWidthMin","Top","endWidthMax"],bottom:["Bottom","Top","Left","Right","Height","Width","endWidthMin","Top","endWidthMax"]}[M],void 0!==H?(H=Math.max(0,Math.min(1,H))/2,j=.5-H+.4):j=Math.min(.9,Math.max(.4,u[b[5].toLowerCase()]/u[b[4].toLowerCase()]));for(var B=T[0],z=4;z<6;z++)"center"==A||"cube"==A?(u["end"+b[z]+"Min"]=u[b[z].toLowerCase()]*j,u["end"+b[z]+"Max"]=u[b[z].toLowerCase()]/j):"shortside"==A?(u["end"+b[z]+"Min"]=u[b[z].toLowerCase()],u["end"+b[z]+"Max"]=u[b[z].toLowerCase()]/j):"longside"==A&&(u["end"+b[z]+"Min"]=u[b[z].toLowerCase()]*j,u["end"+b[z]+"Max"]=u[b[z].toLowerCase()]);"center"==A?B[b[2].toLowerCase()]=u[b[2].toLowerCase()]-(u[b[8]]-u[b[6]])/4:"shortside"==A&&(B[b[2].toLowerCase()]=u[b[2].toLowerCase()]-(u[b[8]]-u[b[6]])/2),m[b[5].toLowerCase()]=u[b[5].toLowerCase()]+"px",m[b[4].toLowerCase()]="0",m["border"+b[1]+"Width"]=u[b[4].toLowerCase()]+"px",m["border"+b[1]+"Color"]=w,B["border"+b[1]+"Width"]=0,B["border"+b[1]+"Color"]=g,B["border"+b[2]+"Width"]=B["border"+b[3]+"Width"]="cube"!=A?(u["end"+b[5]+"Max"]-u["end"+b[5]+"Min"])/2:u[b[6]]/2,B[b[7].toLowerCase()]=u[b[7].toLowerCase()]+u[b[4].toLowerCase()]/2+(o.shift||0),B[b[5].toLowerCase()]=u[b[6]];var I=T[1];I["border"+b[0]+"Color"]={start:C,end:y},I["border"+b[0]+"Width"]=u[b[4].toLowerCase()],I["border"+b[2]+"Width"]=0,I["border"+b[3]+"Width"]=0,I[b[5].toLowerCase()]={start:u[b[6]],end:u[b[5].toLowerCase()]},h.mixin(x,m),t.style(r,x),s.body().appendChild(r);var N=function(){i.destroy(r),c.backgroundColor=y,c.visibility="visible"};if("last"==W){for(z in B)B[z]={start:B[z]};B["border"+b[1]+"Color"]={start:g,end:y},I=B}return W&&"first"!=W||v.push(l.animateProperty({node:r,duration:L,properties:B})),W&&"last"!=W||v.push(l.animateProperty({node:r,duration:L,properties:I,onEnd:N})),d.connect(v[0],"play",function(){r.style.visibility="visible",c.visibility="hidden"}),p.chain(v)},f.flipCube=function(o){var t=[],e=r.getMarginBox(o.node),i=e.w/2,d=e.h/2,n={top:{pName:"height",args:[{whichAnim:"first",dir:"top",shift:-d},{whichAnim:"last",dir:"bottom",shift:d}]},right:{pName:"width",args:[{whichAnim:"first",dir:"right",shift:i},{whichAnim:"last",dir:"left",shift:-i}]},bottom:{pName:"height",args:[{whichAnim:"first",dir:"bottom",shift:d},{whichAnim:"last",dir:"top",shift:-d}]},left:{pName:"width",args:[{whichAnim:"first",dir:"left",shift:-i},{whichAnim:"last",dir:"right",shift:i}]}},a=n[o.dir||"left"],s=a.args;o.duration=o.duration?2*o.duration:500,o.depth=.8,o.axis="cube";for(var l=s.length-1;l>=0;l--)h.mixin(o,s[l]),t.push(f.flip(o));return p.combine(t)},f.flipPage=function(o){var e=o.node,r=t.coords(e,!0),n=r.x,a=r.y,l=r.w,f=r.h,c=t.style(e,"backgroundColor"),u=o.lightColor||"#dddddd",x=o.darkColor,b=i.create("div"),C=[],g=[],w=o.dir||"right",y={left:["left","right","x","w"],top:["top","bottom","y","h"],right:["left","left","x","w"],bottom:["top","top","y","h"]},m={right:[1,-1],left:[-1,1],top:[-1,1],bottom:[1,-1]};t.style(b,{position:"absolute",width:l+"px",height:f+"px",top:a+"px",left:n+"px",visibility:"hidden"});for(var v=[],L=0;L<2;L++){var M=L%2,j=M?y[w][1]:w,k=M?"last":"first",W=M?c:u,A=M?W:o.startColor||e.style.backgroundColor;g[L]=h.clone(b);var H=function(o){return function(){i.destroy(g[o])}}(L);s.body().appendChild(g[L]),v[L]={backgroundColor:M?A:c},v[L][y[w][0]]=r[y[w][2]]+m[w][0]*L*r[y[w][3]]+"px",t.style(g[L],v[L]),C.push(dojox.fx.flip({node:g[L],dir:j,axis:"shortside",depth:o.depth,duration:o.duration/2,shift:m[w][L]*r[y[w][3]]/2,darkColor:x,lightColor:u,whichAnim:k,endColor:W})),d.connect(C[L],"onEnd",H)}return p.chain(C)},f.flipGrid=function(o){var e=o.rows||4,r=o.cols||4,n=[],a=i.create("div"),l=o.node,f=t.coords(l,!0),c=f.x,u=f.y,x=f.w,b=f.h,C=f.w/r,g=f.h/e,w=[];t.style(a,{position:"absolute",width:C+"px",height:g+"px",backgroundColor:t.style(l,"backgroundColor")});for(var y=0;y<e;y++){var m=y%2,v=m?"right":"left",L=m?1:-1,M=h.clone(l);t.style(M,{position:"absolute",width:x+"px",height:b+"px",top:u+"px",left:c+"px",clip:"rect("+y*g+"px,"+x+"px,"+b+"px,0)"}),s.body().appendChild(M),n[y]=[];for(var j=0;j<r;j++){var k=h.clone(a),W=m?j:r-(j+1),A=function(o,e,i){return function(){e%2?t.style(o,{clip:"rect("+e*g+"px,"+x+"px,"+(e+1)*g+"px,"+(i+1)*C+"px)"}):t.style(o,{clip:"rect("+e*g+"px,"+(x-(i+1)*C)+"px,"+(e+1)*g+"px,0px)"})}}(M,y,j);s.body().appendChild(k),t.style(k,{left:c+W*C+"px",top:u+y*g+"px",visibility:"hidden"});var H=dojox.fx.flipPage({node:k,dir:v,duration:o.duration||900,shift:L*C/2,depth:.2,darkColor:o.darkColor,lightColor:o.lightColor,startColor:o.startColor||o.node.style.backgroundColor}),_=function(o){return function(){i.destroy(o)}}(k);d.connect(H,"play",this,A),d.connect(H,"play",this,_),n[y].push(H)}w.push(p.chain(n[y]))}return d.connect(w[0],"play",function(){t.style(l,{visibility:"hidden"})}),p.combine(w)},f});