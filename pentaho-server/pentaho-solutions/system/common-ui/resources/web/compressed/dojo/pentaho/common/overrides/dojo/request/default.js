define(["exports","require","../has"],function(r,e,o){var n,t=o("config-requestProvider");o("host-browser")?n="./xhr":o("host-node")&&(n="./node"),t||(t=n),r.getPlatformDefaultId=function(){return n},r.load=function(r,o,i,f){if(f&&f.isBuild)return i();e(["platform"==r?n:t],function(r){i(r)})}});