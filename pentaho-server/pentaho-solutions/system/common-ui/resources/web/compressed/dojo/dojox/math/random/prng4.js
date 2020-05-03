// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE-BigInteger" for details.

define(["dojo","dojox"],function(t,n){function i(){this.i=0,this.j=0,this.S=new Array(256)}return t.getObject("math.random.prng4",!0,n),t.extend(i,{init:function(t){var n,i,r,h=this.S,o=t.length;for(n=0;n<256;++n)h[n]=n;for(i=0,n=0;n<256;++n)i=i+h[n]+t[n%o]&255,r=h[n],h[n]=h[i],h[i]=r;this.i=0,this.j=0},next:function(){var t,n,i,r=this.S;return this.i=n=this.i+1&255,this.j=i=this.j+r[n]&255,t=r[n],r[n]=r[i],r[i]=t,r[t+r[n]&255]}}),n.math.random.prng4=function(){return new i},n.math.random.prng4.size=256,n.math.random.prng4});