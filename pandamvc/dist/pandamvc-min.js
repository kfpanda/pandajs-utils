/*! pandamvc - v2.0.2 - 2015-07-23 */!function(a){var b=function(){this.name="pandamvc",this.version="2.0.1"};this.pandamvc=new b,b=this.pandamvc,window.logger="object"!=typeof logger?{log:function(){},error:function(){}}:logger;var c={},d={};c=b,c.URI=URI,c.app=null,c.initApp=function(){var b=c.URI.getURIS(),e=a.sammy(function(){this.use(Sammy.Template,c.URI.getTemplateSuffix());var e=this;if(c.URI.getBeforeController()){var g=c.URI.getBeforeController();e.before(function(){var a=this,b=new g({sammyApp:a,params:a.params});return b.server()})}if(c.URI.getAfterController()){var h=c.URI.getAfterController();e.after(function(){var a=this,b=new h({sammyApp:a,params:a.params});return b.server()})}a.each(b,function(b,g){a.isEmptyObject(g.uri)&&a.isEmptyObject(g.layout)||((g.beginController||g.layoutTpl)&&e.before(g.uri,function(a){if(g.layoutTpl&&e.swap(g.layoutTpl),g.beginController){var b=g.beginController;return b=new b({sammyApp:e,context:a,params:this.params}),b.server()}}),g.method=g.method||"get",e[g.method](g.uri,function(b){var h=this,i=g.layout;for(var j in i){var k=i[j];k.id||(k.id=f());var l=a(k.selector).attr("uuid");if(l&&(d[l]=a(k.selector).html()),!c.URI.isRefresh(h.params.refresh)&&g.request){var m=d[k.id];m&&k.selector&&a(k.selector).html(m)}else{var n=k.controller;a.isEmptyObject(n)&&(n=g.controller),n=new k.controller({sammyApp:e,context:b,params:h.params,append:k.append,selector:k.selector,template:k.template});try{n.server()}catch(o){logger.error([o,k])}}if(a(k.selector).attr("uuid",k.id),g.endController){var p=new g.endController;p.server()}}g.request=!0}))})});this.app=e},c.appRun=function(){this.app||this.initApp(),this.app.setLocation(c.URI.getHomeURI()),this.app.run()};var e=["a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","g0","g1","g2","g3","g4","g5","g6","g7","g8","g9","h0","h1","h2","h3","h4","h5","h6","h7","h8","h9"],f=function(){return e.pop()};window.mvc=c}(jQuery);