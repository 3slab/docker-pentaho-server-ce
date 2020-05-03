define(["dojo/_base/lang","../bits"],function(t,i){var e=t.getObject("dojox.encoding.compression",!0);return e.Splay=function(t){this.up=new Array(2*t+1),this.left=new Array(t),this.right=new Array(t),this.reset()},t.extend(e.Splay,{reset:function(){for(var t=1;t<this.up.length;this.up[t]=Math.floor((t-1)/2),++t);for(var t=0;t<this.left.length;this.left[t]=2*t+1,this.right[t]=2*t+2,++t);},splay:function(t){var i=t+this.left.length;do{var e=this.up[i];if(e){var h=this.up[e],s=this.left[h];e==s?(s=this.right[h],this.right[h]=i):this.left[h]=i,this[i==this.left[e]?"left":"right"][e]=s,this.up[i]=h,this.up[s]=e,i=h}else i=e}while(i)},encode:function(t,i){var e=[],h=t+this.left.length;do{e.push(this.right[this.up[h]]==h),h=this.up[h]}while(h);this.splay(t);for(var s=e.length;e.length;)i.putBits(e.pop()?1:0,1);return s},decode:function(t){var i=0;do{i=this[t.getBits(1)?"right":"left"][i]}while(i<this.left.length);return i-=this.left.length,this.splay(i),i}}),e.Splay});