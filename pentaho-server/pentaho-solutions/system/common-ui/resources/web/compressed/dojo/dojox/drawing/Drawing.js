define(["dojo","./defaults","./manager/_registry","./manager/keys","./manager/Mouse","./manager/Canvas","./manager/Undo","./manager/Anchors","./manager/Stencil","./manager/StencilUI","./util/common"],function(dojo,defaults,registry,keys,Mouse,Canvas,Undo,Anchors,Stencil,StencilUI,utilCommon){return dojo.declare("dojox.drawing.Drawing",[],{ready:!1,mode:"",width:0,height:0,constructor:function(props,node){var def=dojo.attr(node,"defaults");this.defaults=def?"string"==typeof def?dojo.getObject(def):def:defaults,this.id=node.id||dijit.getUniqueId("dojox_drawing_Drawing"),registry.register(this,"drawing"),this.mode=(props.mode||dojo.attr(node,"mode")||"").toLowerCase();var box=dojo.contentBox(node);this.width=props.width||box.w,this.height=props.height||box.h,utilCommon.register(this),this.mouse=new Mouse({util:utilCommon,keys:keys,id:"ui"==this.mode?"MUI":"mse"}),this.mouse.setEventMode(this.mode),this.tools={},this.stencilTypes={},this.stencilTypeMap={},this.srcRefNode=node,this.domNode=node,props.plugins?this.plugins=eval(props.plugins):this.plugins=[],this.widgetId=this.id,dojo.attr(this.domNode,"widgetId",this.widgetId),dijit&&dijit.registry?(dijit.registry.add(this),console.log("using dijit")):(dijit.registry={objs:{},add:function(t){this.objs[t.id]=t}},dijit.byId=function(t){return dijit.registry.objs[t]},dijit.registry.add(this));var stencils=registry.getRegistered("stencil");for(var nm in stencils)this.registerTool(stencils[nm].name);var tools=registry.getRegistered("tool");for(nm in tools)this.registerTool(tools[nm].name);var plugs=registry.getRegistered("plugin");for(nm in plugs)this.registerTool(plugs[nm].name);this._createCanvas()},_createCanvas:function(){console.info("drawing create canvas..."),this.canvas=new Canvas({srcRefNode:this.domNode,util:utilCommon,mouse:this.mouse,width:this.width,height:this.height,callback:dojo.hitch(this,"onSurfaceReady")}),this.initPlugins()},resize:function(t){t&&dojo.style(this.domNode,{width:t.w+"px",height:t.h+"px"}),this.canvas?t&&this.canvas.resize(t.w,t.h):this._createCanvas()},startup:function(){},getShapeProps:function(t,e){var i=t.stencilType,s="ui"==this.mode||"ui"==e;return dojo.mixin({container:s&&!i?this.canvas.overlay.createGroup():this.canvas.surface.createGroup(),util:utilCommon,keys:keys,mouse:this.mouse,drawing:this,drawingType:s&&!i?"ui":"stencil",style:this.defaults.copy()},t||{})},addPlugin:function(t){this.plugins.push(t),this.canvas.surfaceReady&&this.initPlugins()},initPlugins:function(){if(this.canvas&&this.canvas.surfaceReady)dojo.forEach(this.plugins,function(t,e){var i=dojo.mixin({util:utilCommon,keys:keys,mouse:this.mouse,drawing:this,stencils:this.stencils,anchors:this.anchors,canvas:this.canvas},t.options||{});this.registerTool(t.name,dojo.getObject(t.name));try{this.plugins[e]=new this.tools[t.name](i)}catch(e){console.error("Failed to initilaize plugin:\t"+t.name+". Did you require it?")}},this),this.plugins=[],this.mouse.setCanvas();else var t=dojo.connect(this,"onSurfaceReady",this,function(){dojo.disconnect(t),this.initPlugins()})},onSurfaceReady:function(){if(this.ready=!0,this.mouse.init(this.canvas.domNode),this.undo=new Undo({keys:keys}),this.anchors=new Anchors({drawing:this,mouse:this.mouse,undo:this.undo,util:utilCommon}),"ui"==this.mode?this.uiStencils=new StencilUI({canvas:this.canvas,surface:this.canvas.surface,mouse:this.mouse,keys:keys}):(this.stencils=new Stencil({canvas:this.canvas,surface:this.canvas.surface,mouse:this.mouse,undo:this.undo,keys:keys,anchors:this.anchors}),this.uiStencils=new StencilUI({canvas:this.canvas,surface:this.canvas.surface,mouse:this.mouse,keys:keys})),"silverlight"==dojox.gfx.renderer)try{new dojox.drawing.plugins.drawing.Silverlight({util:utilCommon,mouse:this.mouse,stencils:this.stencils,anchors:this.anchors,canvas:this.canvas})}catch(t){throw new Error("Attempted to install the Silverlight plugin, but it was not found.")}dojo.forEach(this.plugins,function(t){t.onSurfaceReady&&t.onSurfaceReady()})},addUI:function(t,e){if(!this.ready){var i=dojo.connect(this,"onSurfaceReady",this,function(){dojo.disconnect(i),this.addUI(t,e)});return!1}return!e||e.data||e.points||(e={data:e}),this.stencilTypes[t]?this.uiStencils.register(new this.stencilTypes[t](this.getShapeProps(e,"ui"))):("tooltip"!=t&&console.warn("Not registered:",t),null)},addStencil:function(t,e){if(!this.ready){var i=dojo.connect(this,"onSurfaceReady",this,function(){dojo.disconnect(i),this.addStencil(t,e)});return!1}!e||e.data||e.points||(e={data:e});var s=this.stencils.register(new this.stencilTypes[t](this.getShapeProps(e)));return this.currentStencil&&this.currentStencil.moveToFront(),s},removeStencil:function(t){this.stencils.unregister(t),t.destroy()},removeAll:function(){this.stencils.removeAll()},selectAll:function(){this.stencils.selectAll()},toSelected:function(t){this.stencils.toSelected.apply(this.stencils,arguments)},exporter:function(){return console.log("this.stencils",this.stencils),this.stencils.exporter()},importer:function(t){dojo.forEach(t,function(t){this.addStencil(t.type,t)},this)},changeDefaults:function(t,e){if(void 0!=e&&e)for(var i in t)this.defaults[i]=t[i];else for(var i in t)for(var s in t[i])this.defaults[i][s]=t[i][s];void 0==this.currentStencil||this.currentStencil.created&&!this.defaults.clickMode||(this.unSetTool(),this.setTool(this.currentType))},onRenderStencil:function(t){this.stencils.register(t),this.unSetTool(),this.defaults.clickMode?this.defaults.clickable=!0:this.setTool(this.currentType)},onDeleteStencil:function(t){this.stencils.unregister(t)},registerTool:function(t){if(!this.tools[t]){var e=dojo.getObject(t);this.tools[t]=e;var i=utilCommon.abbr(t);this.stencilTypes[i]=e,this.stencilTypeMap[i]=t}},getConstructor:function(t){return this.stencilTypes[t]},setTool:function(t){if("ui"!=this.mode)if(this.canvas&&this.canvas.surface){this.currentStencil&&this.unSetTool(),this.currentType=this.tools[t]?t:this.stencilTypeMap[t];try{this.currentStencil=new this.tools[this.currentType]({container:this.canvas.surface.createGroup(),util:utilCommon,mouse:this.mouse,keys:keys}),console.log("new tool is:",this.currentStencil.id,this.currentStencil),this.defaults.clickMode&&(this.defaults.clickable=!1),this.currentStencil.connect(this.currentStencil,"onRender",this,"onRenderStencil"),this.currentStencil.connect(this.currentStencil,"destroy",this,"onDeleteStencil")}catch(t){console.error("dojox.drawing.setTool Error:",t),console.error(this.currentType+" is not a constructor: ",this.tools[this.currentType])}}else var e=dojo.connect(this,"onSurfaceReady",this,function(){dojo.disconnect(e),this.setTool(t)})},set:function(t,e){console.info("Attempting to set ",t," to: ",e,". Set currently not fully supported in Drawing")},get:function(t){},unSetTool:function(){this.currentStencil.created||this.currentStencil.destroy()}})});