(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 30,
	color: "#CCCCCC",
	manifest: [
		{src:"images/block.png", id:"block"},
		{src:"sounds/bossfight.mp3", id:"bossfight"},
		{src:"sounds/clickwav.mp3", id:"clickwav"},
		{src:"sounds/hit1wav.mp3", id:"hit1wav"},
		{src:"sounds/kickwav.mp3", id:"kickwav"},
		{src:"sounds/mainloop.mp3", id:"mainloop"},
		{src:"sounds/mysticsoundwav.mp3", id:"mysticsoundwav"},
		{src:"sounds/ninjadeadwav.mp3", id:"ninjadeadwav"},
		{src:"sounds/stepwav.mp3", id:"stepwav"},
		{src:"sounds/teleapagonwav.mp3", id:"teleapagonwav"},
		{src:"sounds/tranquilo.mp3", id:"tranquilo"},
		{src:"sounds/voice1wav.mp3", id:"voice1wav"},
		{src:"sounds/voice2wav.mp3", id:"voice2wav"}
	]
};

// stage content:
(lib.SeñorCuadrito2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var menu = this.menu;
		//var intro = this.intro;
		//var game = this.game;
		
		//menu.on('done', showIntro);
		//intro.on('done', showGame);
		//game.on('done', showScore);
		
		var menu, intro, game, root, endscreen;
		
		root = this;
		showMenu();
		
		function showMenu()
		{
			
			menu = new lib.menu();
			menu.on('done', showIntro);
			root.addChild(menu);
		}
		
		function showIntro()
		{
			root.removeAllChildren();
			intro = new lib.intro();
			intro.on('done', showGame);
			root.addChild(intro);
			playSound('tranquilo',-1);
		}
		function showGame()
		{
			createjs.platforms = [];
			createjs.pool = [];
			createjs.coins = [];
			createjs.coinspool = [];
			root.removeAllChildren();
			createjs.Sound.stop();
			game = new lib.game();
			game.on('done', showScore);
			root.addChild(game);
		}
		function showScore(evt)
		{
			createjs.Sound.stop();
			playSound('bossfight',-1);
			endscreen = new lib.score();
			root.addChild(endscreen);
			endscreen.score.text = evt.score;
			endscreen.on('done', showGame);
		}
		
		createjs.Touch.enable(stage, true, false);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(236.4,240,723.7,480);


// symbols:
(lib.block = function() {
	this.initialize(img.block);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,32);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().dr(-2.5,-4.5,5,9);
	this.shape.setTransform(-10.7,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().dr(-2.5,-4.5,5,9);
	this.shape_1.setTransform(10.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().dr(-9.25,-3,18.5,6);
	this.shape_2.setTransform(0,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().dr(-6,-3.65,12,7.3);
	this.shape_3.setTransform(0,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgeBYIAAivIA9AAIAACvg");
	this.shape_4.setTransform(0,-0.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.2,-9.7,26.5,19.5);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().dr(-2.5,-4.5,5,9);
	this.shape.setTransform(-10.7,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().dr(-2.5,-4.5,5,9);
	this.shape_1.setTransform(10.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().dr(-9.25,-3,18.5,6);
	this.shape_2.setTransform(0,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().dr(-6,-3.65,12,7.3);
	this.shape_3.setTransform(0,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgeBYIAAivIA9AAIAACvg");
	this.shape_4.setTransform(0,-0.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.2,-9.7,26.5,19.5);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0404").s().dr(-21.25,-21.25,42.5,42.5);
	this.shape.setTransform(0,0,15.059,11.294);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


(lib.tryagain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("ABdBLIAAgTIBLAAIAAgTIhLAAIAAgSIgTAAIAAgkIATAAIAAgTIBxAAIAABcIgTAAIAAATgABwATIA4AAIAAgkIg4AAgAljBLIAAgTIBLAAIAAgTIhLAAIAAgSIgTAAIAAg3IAmAAIAAA3IA4AAIAAg3IAmAAIAABcIgTAAIAAATgAJqA4IAAhJIg4AAIAABJIgmAAIAAhcIBxAAIAAATIATAAIAABJgAGJA4IAAgTIAmAAIAAg2IgTAAIAAgTIA4AAIAABJIAmAAIAAATgADzA4IAAgTIgTAAIAAgSIATAAIAAgTIBLAAIAAgRIhLAAIAAgTIBeAAIAAATIATAAIAABJgAEGAlIA4AAIAAgSIg4AAgAg3A4IAAgTIgTAAIAAgSIATAAIAAgTIBJAAIAAgRIhJAAIAAgTIBcAAIAAATIATAAIAABJgAgkAlIA2AAIAAgSIg2AAgAn5A4IAAhcIAmAAIAAATIASAAIAAARIgSAAIAAA4gAppA4IAAhvIgmAAIAAgTIBxAAIAAATIgmAAIAABvgAnBgRIAAgTIA5AAIAAATgAnBgRgAGvg3IAAgTIAlAAIAAATg");
	this.shape.setTransform(76,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5CC0F").s().dr(-76,-16,152,32);
	this.shape_1.setTransform(76,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F5DA").s().dr(-76,-16,152,32);
	this.shape_2.setTransform(76,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,32);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1E5FF").s().p("AHQA0IAAgPIgOAAIAAgrIgPAAIAAgPIAPAAIAAgeIAeAAIAAAeIAPAAIAAAPIgPAAIAAArIAPAAIAAAPgAFZA0IAAgPIgQAAIAAgrIAQAAIAAgPIA8AAIAAAPIAOAAIAAAcIg7AAIAAAPIAtAAIAAAPgAFoAHIAeAAIAAgNIgeAAgAEcA0IAAg6IgOAAIAAgPIAeAAIAAAPIAPAAIAAA6gADvA0IAAhJIAQAAIAAAPIAPAAIAAA6gAClA0IAAgPIA8AAIAAAPgABLA0IAAgPIAtAAIAAgPIgeAAIAAgPIgPAAIAAgNIAPAAIAAgPIAtAAIAAAPIgfAAIAAANIAfAAIAAAPIAOAAIAAAPIgOAAIAAAPgAAAA0IAAgPIAeAAIAAgPIgeAAIAAgPIgOAAIAAgcIAcAAIAAAcIAQAAIAAgcIAdAAIAAA6IgOAAIAAAPgAhoA0IAAgPIAtAAIAAgPIgdAAIAAgPIgQAAIAAgNIAQAAIAAgPIAtAAIAAAPIgfAAIAAANIAfAAIAAAPIAOAAIAAAPIgOAAIAAAPgAjCA0IAAgPIgPAAIAAgrIAPAAIAAgPIA9AAIAAAPIAOAAIAAAcIg7AAIAAAPIAtAAIAAAPgAiyAHIAdAAIAAgNIgdAAgAkcA0IAAgPIAQAAIAAhJIgQAAIAAgPIAtAAIAABYIAQAAIAAAPgAmFA0IAAgPIgOAAIAAgPIhMAAIAAgrIAtAAIAAAcIAPAAIAAgrIhKAAIAABJIBKAAIAAAPIhKAAIAAgPIgQAAIAAhJIAQAAIAAgPIBKAAIAAAPIAQAAIAAA6IAOAAIAAgPIA8AAIAAgNIAeAAIAAA6gAl2AlIAtAAIAAgPIgtAAgAnQAHIAQAAIAAgNIgQAAgAHvAlIAAgPIAOAAIAAAPgAHvAlgAEOgGgAl2gGIAAgPIAtAAIAAAPg");
	this.shape.setTransform(51,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE89").s().p("AHQA0IAAgPIgOAAIAAgrIgPAAIAAgPIAPAAIAAgeIAeAAIAAAeIAPAAIAAAPIgPAAIAAArIAPAAIAAAPgAFZA0IAAgPIgQAAIAAgrIAQAAIAAgPIA8AAIAAAPIAOAAIAAAcIg7AAIAAAPIAtAAIAAAPgAFoAHIAeAAIAAgNIgeAAgAEcA0IAAg6IgOAAIAAgPIAeAAIAAAPIAPAAIAAA6gADvA0IAAhJIAQAAIAAAPIAPAAIAAA6gAClA0IAAgPIA8AAIAAAPgABLA0IAAgPIAtAAIAAgPIgeAAIAAgPIgPAAIAAgNIAPAAIAAgPIAtAAIAAAPIgfAAIAAANIAfAAIAAAPIAOAAIAAAPIgOAAIAAAPgAAAA0IAAgPIAeAAIAAgPIgeAAIAAgPIgOAAIAAgcIAcAAIAAAcIAQAAIAAgcIAdAAIAAA6IgOAAIAAAPgAhoA0IAAgPIAtAAIAAgPIgdAAIAAgPIgQAAIAAgNIAQAAIAAgPIAtAAIAAAPIgfAAIAAANIAfAAIAAAPIAOAAIAAAPIgOAAIAAAPgAjCA0IAAgPIgPAAIAAgrIAPAAIAAgPIA9AAIAAAPIAOAAIAAAcIg7AAIAAAPIAtAAIAAAPgAiyAHIAdAAIAAgNIgdAAgAkcA0IAAgPIAQAAIAAhJIgQAAIAAgPIAtAAIAABYIAQAAIAAAPgAmFA0IAAgPIgOAAIAAgPIhMAAIAAgrIAtAAIAAAcIAPAAIAAgrIhKAAIAABJIBKAAIAAAPIhKAAIAAgPIgQAAIAAhJIAQAAIAAgPIBKAAIAAAPIAQAAIAAA6IAOAAIAAgPIA8AAIAAgNIAeAAIAAA6gAl2AlIAtAAIAAgPIgtAAgAnQAHIAQAAIAAgNIgQAAgAHvAlIAAgPIAOAAIAAAPgAHvAlgAEOgGgAl2gGIAAgPIAtAAIAAAPg");
	this.shape_1.setTransform(51,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().dr(-68,-22,136,44);
	this.shape_2.setTransform(48,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,10.5);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC550").s().p("AghAwIAAgOIAOAAIAAgOIAOAAIAAgOIALAAIAAgLIgLAAIAAgOIgOAAIAAgOIgOAAIAAgOIAcAAIAAAOIALAAIAAAOIAOAAIAAAOIAOAAIAAALIgOAAIAAAOIgOAAIAAAOIgLAAIAAAOg");
	this.shape.setTransform(3.4,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:-17.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.7);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-82,-12,164,24);
	this.shape.setTransform(82,12);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC550").s().p("EAlYALaIAAjUIGgAAIAADUgAVLLaIAAjUIjVAAIAAjMIjMAAIAAjUIjUAAIAAJ0ImgAAIAA2zIGgAAIAADTIDUAAIAADNIDMAAIAADUIDVAAIAAp0IGgAAIAAWzgAx2LaIAAjUIjTAAIAAzfIGgAAIAATfIJ0AAIAAzfIGfAAIAATfIjTAAIAADUgEgiLALaIAAjUIjMAAIAAjMIjTAAIAAGgImhAAIAA2zIThAAIAADTIDUAAIAAJsImgAAIAADUIDMAAIAADMIDUAAIAADUgEgoqABmIGfAAIAAjLIDVAAIAAmhIp0AAgEAlYAE6IAAwTIJ0AAIAAJ0IjUAAIAAGfg");
	this.shape.setTransform(302.1,73.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,604.1,146.1);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape.setTransform(25.3,76,4.222,4.222);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_1.setTransform(142.6,84.5,4.222,4.222);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_2.setTransform(41.4,92.9,4.222,4.222);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_3.setTransform(16.9,84.6,4.222,4.222);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_4.setTransform(100.3,42.2,4.222,4.222);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_5.setTransform(49.7,42.2,4.222,4.222);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_6.setTransform(66.6,8.5,4.222,4.222);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_7.setTransform(91.9,16.9,4.222,4.222);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_8.setTransform(50,126.8,4.222,4.222);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_9.setTransform(115.7,126.8,4.222,4.222);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_10.setTransform(124.2,126.8,4.222,4.222);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_11.setTransform(41.5,126.8,4.222,4.222);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_12.setTransform(58.1,67.6,4.222,4.222);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_13.setTransform(108.8,67.6,4.222,4.222);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_14.setTransform(75,67.6,4.222,4.222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14,p:{skewY:0,x:75}},{t:this.shape_13,p:{skewY:0,x:108.8}},{t:this.shape_12,p:{skewY:0,x:58.1}},{t:this.shape_11,p:{skewY:0,x:41.5}},{t:this.shape_10,p:{skewY:0,x:124.2}},{t:this.shape_9,p:{skewY:0,x:115.7}},{t:this.shape_8,p:{skewY:0,x:50}},{t:this.shape_7,p:{skewY:0,x:91.9}},{t:this.shape_6,p:{skewY:0,x:66.6}},{t:this.shape_5,p:{skewY:0,x:49.7}},{t:this.shape_4,p:{skewY:0,x:100.3}},{t:this.shape_3,p:{skewY:0,x:16.9}},{t:this.shape_2,p:{skewY:0,x:41.4}},{t:this.shape_1,p:{skewY:0,x:142.6}},{t:this.shape,p:{skewY:0,x:25.3}}]}).to({state:[{t:this.shape_14,p:{skewY:180,x:76}},{t:this.shape_13,p:{skewY:180,x:42.2}},{t:this.shape_12,p:{skewY:180,x:92.9}},{t:this.shape_11,p:{skewY:180,x:109.5}},{t:this.shape_10,p:{skewY:180,x:26.8}},{t:this.shape_9,p:{skewY:180,x:35.3}},{t:this.shape_8,p:{skewY:180,x:101}},{t:this.shape_7,p:{skewY:180,x:59.1}},{t:this.shape_6,p:{skewY:180,x:84.4}},{t:this.shape_5,p:{skewY:180,x:101.3}},{t:this.shape_4,p:{skewY:180,x:50.7}},{t:this.shape_3,p:{skewY:180,x:134.1}},{t:this.shape_2,p:{skewY:180,x:109.6}},{t:this.shape_1,p:{skewY:180,x:8.4}},{t:this.shape,p:{skewY:180,x:125.7}}]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,135.2);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AaEBBIAAg4Ig4AAIAAA4IgmAAIAAiBIAmAAIAAA4IA4AAIAAg4IAmAAIAACBgAW2BBIAAgTIgTAAIAAgSIgTAAIAAg3IATAAIAAgSIATAAIAAgTIBLAAIAAATIATAAIAAASIgmAAIAAgSIglAAIAAASIgTAAIAAA3IATAAIAAASIAlAAIAAgSIAmAAIAAASIgTAAIAAATgAUzBBIAAhuIgmAAIAAgTIBxAAIAAATIgmAAIAABugAR3BBIAAgTIAmAAIAAhbIgmAAIAAgTIBxAAIAAATIgmAAIAABbIAmAAIAAATgAPhBBIAAiBIAmAAIAABuIBLAAIAAATgANeBBIAAgTIgTAAIAAgSIgTAAIAAg3IATAAIAAgSIATAAIAAgTIBeAAIAAATIhLAAIAAASIgTAAIAAA3IATAAIAAASIAlAAIAAglIgTAAIAAgRIA5AAIAABJgAIMBBIAAiBICEAAIAAATIheAAIAAAlIBLAAIAAARIhLAAIAAAlIBeAAIAAATgAHUBBIAAgTIgTAAIAAgSIgSAAIAAgTIgTAAIAAA4IgmAAIAAiBIAmAAIAAATIATAAIAAASIASAAIAAATIATAAIAAg4IAmAAIAACBgADzBBIAAgTIgTAAIAAhbIATAAIAAgTIBeAAIAAATIATAAIAABbIgTAAIAAATgAEGAuIA4AAIAAhbIg4AAgAgRBBIAAhuIgmAAIAAgTIBvAAIAAATIgmAAIAABugAjgBBIAAiBICEAAIAAATIheAAIAAAlIBLAAIAAARIhLAAIAAAlIBeAAIAAATgAlQBBIAAgTIgTAAIAAgSIgTAAIAAg3IATAAIAAgSIATAAIAAgTIBeAAIAAATIhLAAIAAASIgTAAIAAA3IATAAIAAASIAlAAIAAglIgTAAIAAgRIA5AAIAABJgAppBBIAAg4IgTAAIAAgRIgTAAIAAg4IAmAAIAAA4IAlAAIAAg4IAmAAIAAA4IgTAAIAAARIgTAAIAAA4gAslBBIAAiBIAmAAIAABuIBLAAIAAATgAtwBBIAAgTIgTAAIAAgSIgSAAIAAgTIgTAAIAAA4IgmAAIAAiBIAmAAIAAATIATAAIAAASIASAAIAAATIATAAIAAg4IAmAAIAACBgAxRBBIAAgTIgTAAIAAhbIATAAIAAgTIBeAAIAAATIATAAIAABbIgTAAIAAATgAw+AuIA4AAIAAhbIg4AAgA19BBIAAgTIgTAAIAAhuIAmAAIAABuIA4AAIAAhuIAmAAIAABuIgTAAIAAATgA4TBBIAAgTIgTAAIAAhbIATAAIAAgTIBeAAIAAATIATAAIAABbIgTAAIAAATgA4AAuIA4AAIAAhbIg4AAgA6DBBIAAg4IgTAAIAAgRIgTAAIAAg4IAmAAIAAA4IAlAAIAAg4IAmAAIAAA4IgTAAIAAARIgTAAIAAA4g");
	this.shape.setTransform(170.6,6.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,341.3,13.2);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0E97C").s().dr(-2,-8,4,16);
	this.shape.setTransform(2,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0E97C").s().dr(-6,-2,12,4);
	this.shape_1.setTransform(-27.9,-4,3.667,1,0,0,0,-6,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0E97C").s().dr(-6,-6,12,12);
	this.shape_2.setTransform(28,-8,2,1,0,0,0,6,-6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0E97C").s().dr(-4,-6,8,12);
	this.shape_3.setTransform(-4,-28,1,3.333,0,0,0,-4,-6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0E97C").s().dr(-2,-14,4,28);
	this.shape_4.setTransform(-2,26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0E97C").s().dr(-14,-2,28,4);
	this.shape_5.setTransform(30,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0E97C").s().dr(-14,-2,28,4);
	this.shape_6.setTransform(-48,-8,2,1,0,0,0,-18,-2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0E97C").s().dr(-2,-12,4,24);
	this.shape_7.setTransform(2,-28);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-40,84,80);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
	this.shape.setTransform(320,240);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-2,-2,4,4);
	this.shape.setTransform(109.6,8.5,4.222,4.222,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9832").s().dr(-2,-2,4,4);
	this.shape_1.setTransform(127,223.4,4.222,4.222,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9832").s().dr(-2,-2,4,4);
	this.shape_2.setTransform(110,207.4,4.222,4.222,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().dr(-4,-2,8,4);
	this.shape_3.setTransform(118.5,207.4,4.222,4.222,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9832").s().dr(-2,-2,4,4);
	this.shape_4.setTransform(93,190.4,4.222,4.222,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().dr(-4,-2,8,4);
	this.shape_5.setTransform(101.5,190.4,4.222,4.222,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9933").s().dr(-2,-2,4,4);
	this.shape_6.setTransform(125.7,123.6,4.222,4.222,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().dr(-2,-4,4,8);
	this.shape_7.setTransform(8.4,132.1,4.222,4.222,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9933").s().dr(-2,-2,4,4);
	this.shape_8.setTransform(109.6,140.5,4.222,4.222,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().dr(-4,-4,8,8);
	this.shape_9.setTransform(134.1,132.2,4.222,4.222,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9966").s().dr(-4,-2,8,4);
	this.shape_10.setTransform(50.7,89.8,4.222,4.222,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9966").s().dr(-4,-2,8,4);
	this.shape_11.setTransform(101.3,89.8,4.222,4.222,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().dr(-4,-2,8,4);
	this.shape_12.setTransform(84.4,56.1,4.222,4.222,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().dr(-2,-4,4,8);
	this.shape_13.setTransform(93.2,33.5,4.222,4.222,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9832").s().dr(-2,-2,4,4);
	this.shape_14.setTransform(93,174.4,4.222,4.222,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().dr(-4,-2,8,4);
	this.shape_15.setTransform(101.5,174.4,4.222,4.222,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_16.setTransform(92.9,115.2,4.222,4.222,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_17.setTransform(42.2,115.2,4.222,4.222,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC66").s().dr(-14,-12,28,24);
	this.shape_18.setTransform(76,115.2,4.222,4.222,0,0,180);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151,231.8);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape.setTransform(25.3,8.5,4.222,4.222);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_1.setTransform(142.6,16.9,4.222,4.222);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_2.setTransform(41.4,25.4,4.222,4.222);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_3.setTransform(16.9,17,4.222,4.222);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151,33.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().dr(-2.15,-2.15,4.3,4.3);
	this.shape.setTransform(6.1,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().dr(-2.15,-2.15,4.3,4.3);
	this.shape_1.setTransform(-2.1,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().dr(-2.15,-2.15,4.3,4.3);
	this.shape_2.setTransform(-1.9,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().dr(-2.15,-2.15,4.3,4.3);
	this.shape_3.setTransform(5.9,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().dr(-2.15,-2.15,4.3,4.3);
	this.shape_4.setTransform(2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().dr(-2.15,-2.15,4.3,4.3);
	this.shape_5.setTransform(-9.6,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().dr(-2.15,-2.15,4.3,4.3);
	this.shape_6.setTransform(15.4,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().dr(-2.15,-2.15,4.3,4.3);
	this.shape_7.setTransform(-1.4,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{x:2.1,y:2.1}},{t:this.shape_3,p:{x:5.9,y:5.9}},{t:this.shape_2,p:{x:-1.9,y:6.1}},{t:this.shape_1,p:{x:-2.1,y:-2.1}},{t:this.shape,p:{x:6.1,y:-1.9}}]}).to({state:[{t:this.shape_4,p:{x:2.1,y:2.1}},{t:this.shape_3,p:{x:9.9,y:9.9}},{t:this.shape_2,p:{x:-6.1,y:10.4}},{t:this.shape_1,p:{x:-5.4,y:-5.4}},{t:this.shape,p:{x:9.1,y:-4.9}}]},3).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-9.4,y:-9.4}},{t:this.shape_3,p:{x:13.9,y:-9.6}},{t:this.shape_2,p:{x:5.6,y:-1.1}},{t:this.shape_1,p:{x:5.6,y:5.9}},{t:this.shape,p:{x:-1.4,y:5.9}}]},3).to({state:[{t:this.shape_3,p:{x:9.9,y:9.9}},{t:this.shape_2,p:{x:-7.1,y:11.4}},{t:this.shape_1,p:{x:-7.4,y:-7.4}},{t:this.shape,p:{x:11.1,y:-6.9}}]},3).to({state:[]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-4.2,12.5,12.5);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().dr(-2.4,-6,4.8,12);
	this.shape.setTransform(2.4,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().dr(-2.4,-6,4.8,12);
	this.shape_1.setTransform(24.1,6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,12);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1E5FF").s().p("AHRA0IAAgPIgPAAIAAgrIgQAAIAAgPIAQAAIAAgeIAdAAIAAAeIAQAAIAAAPIgQAAIAAArIAQAAIAAAPgAFYA0IAAgPIgOAAIAAgrIAOAAIAAgPIA9AAIAAAPIAPAAIAAAcIg8AAIAAAPIAtAAIAAAPgAFoAHIAdAAIAAgNIgdAAgAEdA0IAAg6IgPAAIAAgPIAdAAIAAAPIAQAAIAAA6gADwA0IAAhJIAOAAIAAAPIAQAAIAAA6gACkA0IAAgPIA9AAIAAAPgABKA0IAAgPIAtAAIAAgPIgdAAIAAgPIgQAAIAAgNIAQAAIAAgPIAtAAIAAAPIgeAAIAAANIAeAAIAAAPIAPAAIAAAPIgPAAIAAAPgAAAA0IAAgPIAdAAIAAgPIgdAAIAAgPIgOAAIAAgcIAdAAIAAAcIAOAAIAAgcIAfAAIAAA6IgPAAIAAAPgAhoA0IAAgPIAtAAIAAgPIgeAAIAAgPIgPAAIAAgNIAPAAIAAgPIAtAAIAAAPIgdAAIAAANIAdAAIAAAPIAQAAIAAAPIgQAAIAAAPgAjCA0IAAgPIgOAAIAAgrIAOAAIAAgPIA8AAIAAAPIAQAAIAAAcIg9AAIAAAPIAtAAIAAAPgAizAHIAeAAIAAgNIgeAAgAkcA0IAAgPIAPAAIAAhJIgPAAIAAgPIAtAAIAABYIAPAAIAAAPgAmEA0IAAgPIgQAAIAAgPIhKAAIAAgrIAtAAIAAAcIAOAAIAAgrIhLAAIAAgPIBLAAIAAAPIAPAAIAAA6IAQAAIAAgPIA7AAIAAgNIgtAAIAAgPIAtAAIAAAPIAfAAIAAA6gAl2AlIAtAAIAAgPIgtAAgAnQAHIAPAAIAAgNIgPAAgAnuA0IAAgPIgPAAIAAhJIAPAAIAABJIBLAAIAAAPgAHvAlIAAgPIAPAAIAAAPgAHvAlgAEOgGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-5.2,102,10.5);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CD03").s().dr(-320,-76.35,640,152.7);
	this.shape.setTransform(0,0,1,1.029);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-78.5,640,157);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F82A2A").s().dr(-320,-76.35,640,152.7);
	this.shape.setTransform(0,0,1,1.317);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-100.5,640,201.1);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1E6FF").s().p("AC0A0IAAgPIgQAAIAAgrIgOAAIAAgPIAOAAIAAgeIAfAAIAAAeIAOAAIAAAPIgOAAIAAArIAOAAIAAAPgAA8A0IAAhJIAOAAIAAAPIAQAAIAAA6gAgsA0IAAgPIgdAAIAAgPIAdAAIAAgPIA7AAIAAgNIgrAAIAAgPIArAAIAAAPIAeAAIAAA6gAgcAlIArAAIAAgPIgrAAgAhoA0IAAgPIgOAAIAAgrIgQAAIAAgPIAQAAIAAgeIAdAAIAAAeIAQAAIAAAPIgQAAIAAArIAQAAIAAAPgAjgA0IAAgPIAtAAIAAgPIgdAAIAAgPIgQAAIAAgNIAQAAIAAgPIAtAAIAAAPIgfAAIAAANIAfAAIAAAPIAOAAIAAAPIgOAAIAAAPgADRAlIAAgPIAQAAIAAAPgADRAlgAhJAlgABpAHIAAgNIgPAAIAAgPIAdAAIAAAPIAQAAIAAANgABagGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4303E").s().dr(-27.65,-10,55.3,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CD03").s().dr(-27.65,-10,55.3,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0}},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0}},{t:this.shape}]},1).to({state:[{t:this.shape_1,p:{scaleX:2,scaleY:2,x:0.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-10,55.3,20);


(lib.stand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape.setTransform(24,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_1.setTransform(12,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_2.setTransform(16,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_3.setTransform(22,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_4.setTransform(14,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_5.setTransform(6,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_6.setTransform(22,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_7.setTransform(24,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_8.setTransform(12,30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_9.setTransform(34,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_10.setTransform(2,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_11.setTransform(4,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_12.setTransform(14,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_13.setTransform(26,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_14.setTransform(18,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14,p:{skewY:0,y:16}},{t:this.shape_13,p:{skewY:0,x:26,y:16}},{t:this.shape_12,p:{skewY:0,x:14,y:16}},{t:this.shape_11,p:{skewY:0,x:4,y:16}},{t:this.shape_10,p:{skewY:0,x:2,y:22}},{t:this.shape_9,p:{skewY:0,x:34,y:20}},{t:this.shape_8,p:{skewY:0,x:12}},{t:this.shape_7,p:{skewY:0,x:24}},{t:this.shape_6,p:{skewY:0,x:22}},{t:this.shape_5,p:{skewY:0,x:6,y:18}},{t:this.shape_4,p:{skewY:0,x:14}},{t:this.shape_3,p:{skewY:0,x:22,y:4}},{t:this.shape_2,p:{skewY:0,x:16,y:2}},{t:this.shape_1,p:{skewY:0,x:12,y:10}},{t:this.shape,p:{skewY:0,x:24,y:10}}]}).to({state:[{t:this.shape_14,p:{skewY:180,y:16}},{t:this.shape_13,p:{skewY:180,x:10,y:16}},{t:this.shape_12,p:{skewY:180,x:22,y:16}},{t:this.shape_11,p:{skewY:180,x:32,y:16}},{t:this.shape_10,p:{skewY:180,x:34,y:22}},{t:this.shape_9,p:{skewY:180,x:2,y:20}},{t:this.shape_8,p:{skewY:180,x:24}},{t:this.shape_7,p:{skewY:180,x:12}},{t:this.shape_6,p:{skewY:180,x:14}},{t:this.shape_5,p:{skewY:180,x:30,y:18}},{t:this.shape_4,p:{skewY:180,x:22}},{t:this.shape_3,p:{skewY:180,x:14,y:4}},{t:this.shape_2,p:{skewY:180,x:20,y:2}},{t:this.shape_1,p:{skewY:180,x:24,y:10}},{t:this.shape,p:{skewY:180,x:12,y:10}}]},60).to({state:[{t:this.shape_14,p:{skewY:0,y:16}},{t:this.shape_13,p:{skewY:0,x:26,y:16}},{t:this.shape_12,p:{skewY:0,x:14,y:16}},{t:this.shape_11,p:{skewY:0,x:4,y:16}},{t:this.shape_10,p:{skewY:0,x:2,y:22}},{t:this.shape_9,p:{skewY:0,x:34,y:20}},{t:this.shape_8,p:{skewY:0,x:12}},{t:this.shape_7,p:{skewY:0,x:24}},{t:this.shape_6,p:{skewY:0,x:22}},{t:this.shape_5,p:{skewY:0,x:6,y:18}},{t:this.shape_4,p:{skewY:0,x:14}},{t:this.shape_3,p:{skewY:0,x:22,y:4}},{t:this.shape_2,p:{skewY:0,x:16,y:2}},{t:this.shape_1,p:{skewY:0,x:12,y:10}},{t:this.shape,p:{skewY:0,x:24,y:10}}]},19).to({state:[{t:this.shape_14,p:{skewY:0,y:20}},{t:this.shape_13,p:{skewY:0,x:26,y:20}},{t:this.shape_12,p:{skewY:0,x:14,y:20}},{t:this.shape_11,p:{skewY:0,x:4,y:20}},{t:this.shape_10,p:{skewY:0,x:2,y:26}},{t:this.shape_9,p:{skewY:0,x:34,y:24}},{t:this.shape_8,p:{skewY:0,x:12}},{t:this.shape_7,p:{skewY:0,x:24}},{t:this.shape_6,p:{skewY:0,x:22}},{t:this.shape_5,p:{skewY:0,x:6,y:22}},{t:this.shape_4,p:{skewY:0,x:14}},{t:this.shape_3,p:{skewY:0,x:22,y:8}},{t:this.shape_2,p:{skewY:0,x:16,y:6}},{t:this.shape_1,p:{skewY:0,x:12,y:14}},{t:this.shape,p:{skewY:0,x:24,y:14}}]},41).to({state:[{t:this.shape_14,p:{skewY:0,y:16}},{t:this.shape_13,p:{skewY:0,x:26,y:16}},{t:this.shape_12,p:{skewY:0,x:14,y:16}},{t:this.shape_11,p:{skewY:0,x:4,y:16}},{t:this.shape_10,p:{skewY:0,x:2,y:22}},{t:this.shape_9,p:{skewY:0,x:34,y:20}},{t:this.shape_8,p:{skewY:0,x:12}},{t:this.shape_7,p:{skewY:0,x:24}},{t:this.shape_6,p:{skewY:0,x:22}},{t:this.shape_5,p:{skewY:0,x:6,y:18}},{t:this.shape_4,p:{skewY:0,x:14}},{t:this.shape_3,p:{skewY:0,x:22,y:4}},{t:this.shape_2,p:{skewY:0,x:16,y:2}},{t:this.shape_1,p:{skewY:0,x:12,y:10}},{t:this.shape,p:{skewY:0,x:24,y:10}}]},5).to({state:[{t:this.shape_14,p:{skewY:0,y:20}},{t:this.shape_13,p:{skewY:0,x:26,y:20}},{t:this.shape_12,p:{skewY:0,x:14,y:20}},{t:this.shape_11,p:{skewY:0,x:4,y:20}},{t:this.shape_10,p:{skewY:0,x:2,y:26}},{t:this.shape_9,p:{skewY:0,x:34,y:24}},{t:this.shape_8,p:{skewY:0,x:12}},{t:this.shape_7,p:{skewY:0,x:24}},{t:this.shape_6,p:{skewY:0,x:22}},{t:this.shape_5,p:{skewY:0,x:6,y:22}},{t:this.shape_4,p:{skewY:0,x:14}},{t:this.shape_3,p:{skewY:0,x:22,y:8}},{t:this.shape_2,p:{skewY:0,x:16,y:6}},{t:this.shape_1,p:{skewY:0,x:12,y:14}},{t:this.shape,p:{skewY:0,x:24,y:14}}]},5).to({state:[{t:this.shape_14,p:{skewY:0,y:16}},{t:this.shape_13,p:{skewY:0,x:26,y:16}},{t:this.shape_12,p:{skewY:0,x:14,y:16}},{t:this.shape_11,p:{skewY:0,x:4,y:16}},{t:this.shape_10,p:{skewY:0,x:2,y:22}},{t:this.shape_9,p:{skewY:0,x:34,y:20}},{t:this.shape_8,p:{skewY:0,x:12}},{t:this.shape_7,p:{skewY:0,x:24}},{t:this.shape_6,p:{skewY:0,x:22}},{t:this.shape_5,p:{skewY:0,x:6,y:18}},{t:this.shape_4,p:{skewY:0,x:14}},{t:this.shape_3,p:{skewY:0,x:22,y:4}},{t:this.shape_2,p:{skewY:0,x:16,y:2}},{t:this.shape_1,p:{skewY:0,x:12,y:10}},{t:this.shape,p:{skewY:0,x:24,y:10}}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.skip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AB/A0IAAhnIBaAAIAAAPIAPAAIAAArIgPAAIAAAPIg8AAIAAAegACdAHIAtAAIAAgrIgtAAgAAWA0IAAgPIAeAAIAAhJIgeAAIAAgPIBaAAIAAAPIgeAAIAABJIAeAAIAAAPgAgzA0IAAgPIgPAAIAAgPIgPAAIAAAeIgeAAIAAhnIAeAAIAAAtIAPAAIAAgPIAPAAIAAgPIAPAAIAAgPIAeAAIAAAPIgPAAIAAAPIgPAAIAAAPIgPAAIAAANIAPAAIAAAPIAPAAIAAAPIAPAAIAAAPgAjYA0IAAgPIgPAAIAAgPIAeAAIAAAPIAtAAIAAgeIg8AAIAAgNIgPAAIAAgeIAPAAIAAgPIA8AAIAAAPIAPAAIAAAPIgeAAIAAgPIgeAAIAAAeIA8AAIAAANIAPAAIAAAeIgPAAIAAAPg");
	this.shape.setTransform(34,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().dr(-34,-14,68,28);
	this.shape_1.setTransform(34,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB/A0IAAhnIBaAAIAAAPIAPAAIAAArIgPAAIAAAPIg8AAIAAAegACdAHIAtAAIAAgrIgtAAgAAWA0IAAgPIAeAAIAAhJIgeAAIAAgPIBaAAIAAAPIgeAAIAABJIAeAAIAAAPgAgzA0IAAgPIgPAAIAAgPIgPAAIAAAeIgeAAIAAhnIAeAAIAAAtIAPAAIAAgPIAPAAIAAgPIAPAAIAAgPIAeAAIAAAPIgPAAIAAAPIgPAAIAAAPIgPAAIAAANIAPAAIAAAPIAPAAIAAAPIAPAAIAAAPgAjYA0IAAgPIgPAAIAAgPIAeAAIAAAPIAtAAIAAgeIg8AAIAAgNIgPAAIAAgeIAPAAIAAgPIA8AAIAAAPIAPAAIAAAPIgeAAIAAgPIgeAAIAAAeIA8AAIAAANIAPAAIAAAeIgPAAIAAAPg");
	this.shape_2.setTransform(34,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().dr(-34,-14,68,28);
	this.shape_3.setTransform(34,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,28);


(lib.screen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().dr(-320,-240,640,480);
	this.shape.setTransform(320,240);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.pushback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape.setTransform(28,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_1.setTransform(16,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_2.setTransform(30,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_3.setTransform(26,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_4.setTransform(10,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_5.setTransform(18,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_6.setTransform(14,10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_7.setTransform(10,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{x:14,y:10}},{t:this.shape_5,p:{x:18}},{t:this.shape_4,p:{x:10,y:14}},{t:this.shape_3,p:{x:26}},{t:this.shape_2,p:{y:10,x:30}},{t:this.shape_1,p:{x:16}},{t:this.shape,p:{x:28}}]}).to({state:[{t:this.shape_7},{t:this.shape_5,p:{x:14}},{t:this.shape_6,p:{x:6,y:14}},{t:this.shape_3,p:{x:22}},{t:this.shape_4,p:{x:26,y:10}},{t:this.shape_2,p:{y:14,x:30}},{t:this.shape_1,p:{x:12}},{t:this.shape,p:{x:24}}]},3).to({state:[{t:this.shape_6,p:{x:6,y:10}},{t:this.shape_5,p:{x:10}},{t:this.shape_3,p:{x:18}},{t:this.shape_4,p:{x:22,y:10}},{t:this.shape_2,p:{y:14,x:26}},{t:this.shape_1,p:{x:8}},{t:this.shape,p:{x:20}}]},3).to({state:[{t:this.shape_7},{t:this.shape_5,p:{x:14}},{t:this.shape_6,p:{x:6,y:14}},{t:this.shape_3,p:{x:22}},{t:this.shape_4,p:{x:26,y:10}},{t:this.shape_2,p:{y:14,x:30}},{t:this.shape_1,p:{x:12}},{t:this.shape,p:{x:24}}]},3).wait(3));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_8.setTransform(30,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_9.setTransform(28,26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_10.setTransform(16,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_11.setTransform(22,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_12.setTransform(14,26);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_13.setTransform(6,18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_14.setTransform(12,26);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_15.setTransform(34,4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_16.setTransform(6,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_17.setTransform(4,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_18.setTransform(18,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17,p:{y:12}},{t:this.shape_16},{t:this.shape_15,p:{y:4}},{t:this.shape_14,p:{x:12}},{t:this.shape_13,p:{y:18}},{t:this.shape_12,p:{x:14}},{t:this.shape_11,p:{x:22}},{t:this.shape_10},{t:this.shape_9,p:{x:28}},{t:this.shape_8,p:{x:30}}]}).to({state:[{t:this.shape_18},{t:this.shape_17,p:{y:8}},{t:this.shape_16},{t:this.shape_15,p:{y:8}},{t:this.shape_14,p:{x:12}},{t:this.shape_13,p:{y:18}},{t:this.shape_12,p:{x:14}},{t:this.shape_11,p:{x:22}},{t:this.shape_10},{t:this.shape_9,p:{x:24}},{t:this.shape_8,p:{x:26}}]},3).to({state:[{t:this.shape_17,p:{y:4}},{t:this.shape_18},{t:this.shape_15,p:{y:12}},{t:this.shape_14,p:{x:8}},{t:this.shape_13,p:{y:14}},{t:this.shape_12,p:{x:10}},{t:this.shape_11,p:{x:18}},{t:this.shape_10},{t:this.shape_9,p:{x:24}},{t:this.shape_8,p:{x:26}}]},3).to({state:[{t:this.shape_18},{t:this.shape_17,p:{y:12}},{t:this.shape_16},{t:this.shape_15,p:{y:4}},{t:this.shape_14,p:{x:12}},{t:this.shape_13,p:{y:18}},{t:this.shape_12,p:{x:14}},{t:this.shape_11,p:{x:22}},{t:this.shape_10},{t:this.shape_9,p:{x:24}},{t:this.shape_8,p:{x:26}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,36,32);


(lib.punch3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("kickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E721FF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(26,26,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E721FF").s().p("AgSATIAAgmIAlAAIAAAmg");
	this.shape_1.setTransform(22,30,1,1,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E721FF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_2.setTransform(50,26,1,1,-90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E721FF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_3.setTransform(46,22,1,1,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E721FF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_4.setTransform(42,20,1,1,-90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E721FF").s().p("Ag6ATIAAglIB2AAIAAAlg");
	this.shape_5.setTransform(38,18,1,1,-90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E721FF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_6.setTransform(34,20,1,1,-90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E721FF").s().p("Ag6AnIAAhOIB2AAIAABOg");
	this.shape_7.setTransform(28,18,1,1,-90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E721FF").s().p("Ag7BQIAAieIB2AAIAACeg");
	this.shape_8.setTransform(36,6,1,1,-90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E721FF").s().p("AhHAUIAAgnICPAAIAAAng");
	this.shape_9.setTransform(50,19.3,1,1,-90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E721FF").s().p("Ag6ATIAAglIB1AAIAAAlg");
	this.shape_10.setTransform(46,14,1,1,-90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E721FF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_11.setTransform(38,20,1,1,-90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E721FF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_12.setTransform(30,20,1,1,-90);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnALIAAgVIBOAAIAAAVg");
	this.shape_13.setTransform(29.2,20,1,1,-90);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E721FF").s().p("AgTATIAAgmIAnAAIAAAmg");
	this.shape_14.setTransform(22,22,1,1,-90);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E721FF").s().p("AgnAUIAAgnIBOAAIAAAng");
	this.shape_15.setTransform(26,12,1,1,-90);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E721FF").s().p("AgnB3IAAjuIBPAAIAADug");
	this.shape_16.setTransform(36,4,1,1,-90);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E721FF").s().p("AgnBQIAAieIBPAAIAACeg");
	this.shape_17.setTransform(36,-4,1,1,-90);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E721FF").s().p("AgmAUIAAgnIBNAAIAAAng");
	this.shape_18.setTransform(50,16,1,1,-90);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E721FF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_19.setTransform(50,-10,1,1,-90);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E721FF").s().p("AgSAUIAAgnIAmAAIAAAng");
	this.shape_20.setTransform(42,-18,1,1,-90);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E721FF").s().p("AgmATIAAglIBNAAIAAAlg");
	this.shape_21.setTransform(38,-20,1,1,-90);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E721FF").s().p("AgnA8IAAh3IBPAAIAAB3g");
	this.shape_22.setTransform(30,-16,1,1,-90);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E721FF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_23.setTransform(42,-10,1,1,-90);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E721FF").s().p("AgnAUIAAgnIBPAAIAAAng");
	this.shape_24.setTransform(42,12,1,1,-90);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E721FF").s().p("AgmAUIAAgnIBOAAIAAAng");
	this.shape_25.setTransform(34,4,1,1,-90);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E721FF").s().p("AgTATIAAglIAmAAIAAAlg");
	this.shape_26.setTransform(30,14,1,1,-90);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E721FF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_27.setTransform(26,-2,1,1,-90);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E721FF").s().p("AgnATIAAgmIBOAAIAAAmg");
	this.shape_28.setTransform(22,8,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:30}},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_1,p:{y:18}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:38,y:20}},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_11,p:{x:46,y:0}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).to({state:[]},2).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_29.setTransform(10,30);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_30.setTransform(18,30);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_31.setTransform(20,30);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_32.setTransform(8,30);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#097D92").s().p("AgTATIAAglIAmAAIAAAlg");
	this.shape_33.setTransform(2,18);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#11DAFF").s().p("AgSAoIAAhOIAmAAIAABOg");
	this.shape_34.setTransform(-2,20);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#11DAFF").s().p("AgmAUIAAgnIBNAAIAAAng");
	this.shape_35.setTransform(0,14);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#01B6EF").s().p("AgnAoIAAhOIBPAAIAABOg");
	this.shape_36.setTransform(40,12);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#11DAFF").s().p("AgmAnIAAhOIBNAAIAABOg");
	this.shape_37.setTransform(36,16);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_38.setTransform(24,10);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_39.setTransform(12,10);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_40.setTransform(16,2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_41.setTransform(22,4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_42.setTransform(14,16);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_43.setTransform(26,16);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_44.setTransform(18,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44,p:{y:16}},{t:this.shape_43,p:{y:16}},{t:this.shape_42,p:{y:16}},{t:this.shape_41,p:{y:4}},{t:this.shape_40,p:{y:2}},{t:this.shape_39,p:{y:10}},{t:this.shape_38,p:{y:10}},{t:this.shape_37,p:{y:16}},{t:this.shape_36,p:{y:12}},{t:this.shape_35,p:{y:14}},{t:this.shape_34,p:{y:20}},{t:this.shape_33,p:{y:18}},{t:this.shape_32,p:{y:30}},{t:this.shape_31,p:{y:30}},{t:this.shape_30,p:{y:30}},{t:this.shape_29,p:{y:30}}]}).to({state:[{t:this.shape_44,p:{y:8}},{t:this.shape_43,p:{y:8}},{t:this.shape_42,p:{y:8}},{t:this.shape_41,p:{y:-4}},{t:this.shape_40,p:{y:-6}},{t:this.shape_39,p:{y:2}},{t:this.shape_38,p:{y:2}},{t:this.shape_37,p:{y:8}},{t:this.shape_36,p:{y:4}},{t:this.shape_35,p:{y:6}},{t:this.shape_34,p:{y:12}},{t:this.shape_33,p:{y:10}},{t:this.shape_32,p:{y:22}},{t:this.shape_31,p:{y:22}},{t:this.shape_30,p:{y:22}},{t:this.shape_29,p:{y:22}}]},2).to({state:[{t:this.shape_44,p:{y:0}},{t:this.shape_43,p:{y:0}},{t:this.shape_42,p:{y:0}},{t:this.shape_41,p:{y:-12}},{t:this.shape_40,p:{y:-14}},{t:this.shape_39,p:{y:-6}},{t:this.shape_38,p:{y:-6}},{t:this.shape_37,p:{y:0}},{t:this.shape_36,p:{y:-4}},{t:this.shape_35,p:{y:-2}},{t:this.shape_34,p:{y:4}},{t:this.shape_33,p:{y:2}},{t:this.shape_32,p:{y:14}},{t:this.shape_31,p:{y:14}},{t:this.shape_30,p:{y:14}},{t:this.shape_29,p:{y:14}}]},2).to({state:[{t:this.shape_44,p:{y:8}},{t:this.shape_43,p:{y:8}},{t:this.shape_42,p:{y:8}},{t:this.shape_41,p:{y:-4}},{t:this.shape_40,p:{y:-6}},{t:this.shape_39,p:{y:2}},{t:this.shape_38,p:{y:2}},{t:this.shape_37,p:{y:8}},{t:this.shape_36,p:{y:4}},{t:this.shape_35,p:{y:6}},{t:this.shape_34,p:{y:12}},{t:this.shape_33,p:{y:10}},{t:this.shape_32,p:{y:22}},{t:this.shape_31,p:{y:22}},{t:this.shape_30,p:{y:22}},{t:this.shape_29,p:{y:22}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,56,32);


(lib.punch2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("kickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF00").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(22,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCFF00").s().p("AgSATIAAgmIAlAAIAAAmg");
	this.shape_1.setTransform(18,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCFF00").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_2.setTransform(22,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCFF00").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_3.setTransform(26,26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCFF00").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_4.setTransform(28,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCFF00").s().p("Ag6ATIAAglIB2AAIAAAlg");
	this.shape_5.setTransform(30,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCFF00").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_6.setTransform(28,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCFF00").s().p("Ag6AnIAAhOIB2AAIAABOg");
	this.shape_7.setTransform(30,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCFF00").s().p("Ag7BQIAAieIB2AAIAACeg");
	this.shape_8.setTransform(42,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCFF00").s().p("AhHAUIAAgnICPAAIAAAng");
	this.shape_9.setTransform(16.8,30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCFF00").s().p("Ag6ATIAAglIB1AAIAAAlg");
	this.shape_10.setTransform(22,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCFF00").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_11.setTransform(16,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCFF00").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_12.setTransform(16,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCFF00").s().p("AgnALIAAgVIBOAAIAAAVg");
	this.shape_13.setTransform(16,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCFF00").s().p("AgTATIAAgmIAnAAIAAAmg");
	this.shape_14.setTransform(14,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCFF00").s().p("AgnAUIAAgnIBOAAIAAAng");
	this.shape_15.setTransform(24,6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCFF00").s().p("AgnB3IAAjuIBPAAIAADug");
	this.shape_16.setTransform(32,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCFF00").s().p("AgnBQIAAieIBPAAIAACeg");
	this.shape_17.setTransform(40,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCFF00").s().p("AgmAUIAAgnIBNAAIAAAng");
	this.shape_18.setTransform(0,30);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCFF00").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_19.setTransform(26,30);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCFF00").s().p("AgSAUIAAgnIAmAAIAAAng");
	this.shape_20.setTransform(34,22);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCFF00").s().p("AgmATIAAglIBNAAIAAAlg");
	this.shape_21.setTransform(36,18);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCFF00").s().p("AgnA8IAAh3IBPAAIAAB3g");
	this.shape_22.setTransform(32,10);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCFF00").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_23.setTransform(26,22);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCFF00").s().p("AgnAUIAAgnIBPAAIAAAng");
	this.shape_24.setTransform(4,22);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCFF00").s().p("AgmAUIAAgnIBOAAIAAAng");
	this.shape_25.setTransform(12,14);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCFF00").s().p("AgTATIAAglIAmAAIAAAlg");
	this.shape_26.setTransform(2,10);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCFF00").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_27.setTransform(18,6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCFF00").s().p("AgnATIAAgmIBOAAIAAAmg");
	this.shape_28.setTransform(8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{y:18}},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_11,p:{y:26}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).to({state:[]},2).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01CAD7").s().p("AgnBjIAAjFIBOAAIAADFg");
	this.shape_29.setTransform(8,18);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01CAD7").s().p("Ag6ATIAAglIB2AAIAAAlg");
	this.shape_30.setTransform(30,18);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#01CAD7").s().p("AgnAoIAAhOIBPAAIAABOg");
	this.shape_31.setTransform(40,20);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_32.setTransform(24,10);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_33.setTransform(12,0,2.5,1,0,0,0,-4,-2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_34.setTransform(34,4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_35.setTransform(14,30);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_36.setTransform(26,30);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_37.setTransform(28,30);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_38.setTransform(12,30);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_39.setTransform(26,16);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_40.setTransform(18,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,0,44,32);


(lib.punch1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("kickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(22,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSATIAAgmIAlAAIAAAmg");
	this.shape_1.setTransform(18,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_2.setTransform(22,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_3.setTransform(26,26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_4.setTransform(28,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6ATIAAglIB2AAIAAAlg");
	this.shape_5.setTransform(30,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_6.setTransform(28,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6AnIAAhOIB2AAIAABOg");
	this.shape_7.setTransform(30,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BQIAAieIB2AAIAACeg");
	this.shape_8.setTransform(42,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHAUIAAgnICPAAIAAAng");
	this.shape_9.setTransform(16.8,30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6ATIAAglIB1AAIAAAlg");
	this.shape_10.setTransform(22,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_11.setTransform(16,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_12.setTransform(16,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnALIAAgVIBOAAIAAAVg");
	this.shape_13.setTransform(16,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTATIAAgmIAnAAIAAAmg");
	this.shape_14.setTransform(14,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnAUIAAgnIBOAAIAAAng");
	this.shape_15.setTransform(24,6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnB3IAAjuIBPAAIAADug");
	this.shape_16.setTransform(32,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgnBQIAAieIBPAAIAACeg");
	this.shape_17.setTransform(40,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmAUIAAgnIBNAAIAAAng");
	this.shape_18.setTransform(0,30);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_19.setTransform(26,30);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAUIAAgnIAmAAIAAAng");
	this.shape_20.setTransform(34,22);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmATIAAglIBNAAIAAAlg");
	this.shape_21.setTransform(36,18);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnA8IAAh3IBPAAIAAB3g");
	this.shape_22.setTransform(32,10);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_23.setTransform(26,22);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnAUIAAgnIBPAAIAAAng");
	this.shape_24.setTransform(4,22);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgmAUIAAgnIBOAAIAAAng");
	this.shape_25.setTransform(12,14);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTATIAAglIAmAAIAAAlg");
	this.shape_26.setTransform(2,10);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_27.setTransform(18,6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnATIAAgmIBOAAIAAAmg");
	this.shape_28.setTransform(8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{y:18}},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_11,p:{y:26}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).to({state:[]},2).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_29.setTransform(6,22);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01FFFF").s().p("AgSAUIAAgnIAmAAIAAAng");
	this.shape_30.setTransform(34,14);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_31.setTransform(42,16);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_32.setTransform(24,10);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_33.setTransform(12,10);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_34.setTransform(16,2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_35.setTransform(22,4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_36.setTransform(10,30);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_37.setTransform(6,18);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_38.setTransform(22,30);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_39.setTransform(24,30);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_40.setTransform(8,30);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_41.setTransform(38,16);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_42.setTransform(2,22);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_43.setTransform(4,16);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_44.setTransform(14,16);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_45.setTransform(26,16);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_46.setTransform(18,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,32);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CFCF").s().p("AMlDNIAAiOIgvAAIAAgwIAvAAIAAgtIhfAAIAAC7IheAAIAAjqIDsAAIAAAvIAwAAIAAAtIgwAAIAAAwIAwAAIAACOgAAvDNIAAjrIhdAAIAAC7IhfAAIAAi7IAwAAIAAgvIC7AAIAAAvIAwAAIAADrgAEcCdIAAgvIgwAAIAAiMIAwAAIAAgvIC9AAIAAAvIAwAAIAACMIgwAAIAAAvgAFLBuIBfAAIAAiMIhfAAgAnYCdIAAgvIgwAAIAAiMIAwAAIAAgvIDtAAIAABcIhfAAIAAgtIhfAAIAAAtIAvAAIAAAwIgvAAIAAAvIBfAAIAAgvIBfAAIAABegAuDCdIAAgvIC+AAIAAgvIiOAAIAAgwIgwAAIAAgtIAwAAIAAgvIDtAAIAAAvIi+AAIAAAtICOAAIAAAwIAwAAIAAAvIgwAAIAAAvgAgWhtIAAgvIgwAAIAAgwIBdAAIAAAwIAwAAIAAAvg");
	this.shape.setTransform(-89.9,-12.7,1,1,0,0,0,-89.9,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01B6EF").s().p("AJYBZIAAiTIg8AAIAAAeIg9AAIAAg9ICXAAIAAAfIAdAAIAACTgAC0BZIAAhZIgeAAIAAgcIAeAAIAAgeIg9AAIAAB2Ig7AAIAAiVICVAAIAAAfIAfAAIAAAeIgfAAIAAAcIAfAAIAABZgAkqBZIAAhZIgfAAIAAgcIAfAAIAAgeIg9AAIAAB2Ig8AAIAAh2IAfAAIAAgfIB3AAIAAAfIAeAAIAACTgALtA8IAAgeIgdAAIAAhYIAdAAIAAgfIB5AAIAAAfIAeAAIAABYIgeAAIAAAegAMMAeIA7AAIAAhYIg7AAgAErA8IAAgeIAfAAIAAhYIgfAAIAAgfIB5AAIAAAfIgfAAIAABYIAfAAIAAAegAizA8IAAiVICXAAIAAAfIAcAAIAABYIgcAAIAAAegAh2AeIA7AAIAAhYIg7AAgAp1A8IAAgeIgdAAIAAh3IA7AAIAAB3IA8AAIAAh3IA9AAIAACVgAtlA8IAAgeIgeAAIAAhYIAeAAIAAgfICWAAIAAA9Ig8AAIAAgeIg7AAIAABYIA7AAIAAgeIA8AAIAAA8g");
	this.shape_1.setTransform(-90,9.5,1,1,0,0,0,-90,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AJYFYIAAiWIg8AAIAAAeIg8AAIAAg8ICWAAIAAAeIAeAAIAACWgAC0FYIAAhaIgeAAIAAgeIAeAAIAAgeIg8AAIAAB4Ig8AAIAAiWICWAAIAAAeIAeAAIAAAeIgeAAIAAAeIAeAAIAABagAkqFYIAAhaIgeAAIAAgeIAeAAIAAgeIg8AAIAAB4Ig8AAIAAh4IAeAAIAAgeIB4AAIAAAeIAeAAIAACWgALuE6IAAgeIgeAAIAAhaIAeAAIAAgeIB4AAIAAAeIAeAAIAABaIgeAAIAAAegAMMEcIA8AAIAAhaIg8AAgAEsE6IAAgeIAeAAIAAhaIgeAAIAAgeIB4AAIAAAeIgeAAIAABaIAeAAIAAAegAiyE6IAAiWICWAAIAAAeIAcAAIAABaIgcAAIAAAegAh2EcIA8AAIAAhaIg8AAgAp0E6IAAgeIgeAAIAAh4IA8AAIAAB4IA8AAIAAh4IA8AAIAACWgAtkE6IAAgeIgeAAIAAhaIAeAAIAAgeICWAAIAAA8Ig8AAIAAgeIg8AAIAABaIA8AAIAAgeIA8AAIAAA8gAMlBCIAAiMIgvAAIAAgwIAvAAIAAgvIhfAAIAAC7IheAAIAAjqIDsAAIAAAvIAwAAIAAAvIgwAAIAAAwIAwAAIAACMgAAvBCIAAjrIhdAAIAAC7IhfAAIAAi7IAwAAIAAgvIC7AAIAAAvIAwAAIAADrgAEcASIAAgtIgwAAIAAiOIAwAAIAAgvIC9AAIAAAvIAwAAIAACOIgwAAIAAAtgAFLgbIBfAAIAAiOIhfAAgAnYASIAAgtIgwAAIAAiOIAwAAIAAgvIDtAAIAABeIhfAAIAAgvIhfAAIAAAvIAvAAIAAAwIgvAAIAAAvIBfAAIAAgvIBfAAIAABcgAuDASIAAgtIC+AAIAAgvIiOAAIAAgwIgwAAIAAgvIAwAAIAAgvIDtAAIAAAvIi+AAIAAAvICOAAIAAAwIAwAAIAAAvIgwAAIAAAtgAgWj4IAAgvIgwAAIAAgwIBdAAIAAAwIAwAAIAAAvg");
	this.shape_2.setTransform(2,-8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1E6FF").s().p("AxGNXIAA6tMAiNAAAIAAatgAuELoIcJAAIAAktIywAAIAAksIOEAAIAAkrIEsAAIAAktIksAAIAAksIyxAAIAAEsIOEAAIAAEtIuEAAIAAErIksAAg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109.5,-85.5,219,171);


(lib.kick3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("hit1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F609FF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape.setTransform(-26,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F609FF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_1.setTransform(-22,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F609FF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_2.setTransform(-18,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F609FF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_3.setTransform(-14,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F609FF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_4.setTransform(-14,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F609FF").s().p("AhjAUIAAgnIDGAAIAAAng");
	this.shape_5.setTransform(2,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F609FF").s().p("AhiAUIAAgnIDGAAIAAAng");
	this.shape_6.setTransform(6,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F609FF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_7.setTransform(8,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F609FF").s().p("Ah3AUIAAgnIDvAAIAAAng");
	this.shape_8.setTransform(4,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F609FF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_9.setTransform(22,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F609FF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_10.setTransform(22,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F609FF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_11.setTransform(26,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F609FF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_12.setTransform(28,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F609FF").s().p("Ag6ATIAAglIB2AAIAAAlg");
	this.shape_13.setTransform(30,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F609FF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_14.setTransform(28,6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F609FF").s().p("Ag6AnIAAhOIB2AAIAABOg");
	this.shape_15.setTransform(30,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F609FF").s().p("Ag7BQIAAieIB2AAIAACeg");
	this.shape_16.setTransform(42,8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DA0CFF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_17.setTransform(-20,10);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DA0CFF").s().p("AgTAUIAAgnIAmAAIAAAng");
	this.shape_18.setTransform(2,22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DA0CFF").s().p("AhPAUIAAgnICeAAIAAAng");
	this.shape_19.setTransform(-16,22);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DA0CFF").s().p("AhOATIAAglICdAAIAAAlg");
	this.shape_20.setTransform(-4,18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DA0CFF").s().p("Ag6ATIAAglIB2AAIAAAlg");
	this.shape_21.setTransform(2,10);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DA0CFF").s().p("AgTATIAAgmIAmAAIAAAmg");
	this.shape_22.setTransform(2,-6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DA0CFF").s().p("AgmATIAAglIBOAAIAAAlg");
	this.shape_23.setTransform(-8,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DA0CFF").s().p("AhOATIAAgmICeAAIAAAmg");
	this.shape_24.setTransform(-20,-6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DA0CFF").s().p("AhHAUIAAgnICPAAIAAAng");
	this.shape_25.setTransform(16.8,22);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DA0CFF").s().p("Ag6ATIAAglIB1AAIAAAlg");
	this.shape_26.setTransform(22,18);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DA0CFF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_27.setTransform(16,10);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DA0CFF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_28.setTransform(16,2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DA0CFF").s().p("AgnALIAAgVIBOAAIAAAVg");
	this.shape_29.setTransform(16,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DA0CFF").s().p("AgTATIAAgmIAnAAIAAAmg");
	this.shape_30.setTransform(14,-6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DA0CFF").s().p("AgSATIAAgmIAlAAIAAAmg");
	this.shape_31.setTransform(18,-6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DA0CFF").s().p("AgnAUIAAgnIBOAAIAAAng");
	this.shape_32.setTransform(24,-2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DA0CFF").s().p("AgnB3IAAjuIBPAAIAADug");
	this.shape_33.setTransform(32,8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DA0CFF").s().p("AgnBQIAAieIBPAAIAACeg");
	this.shape_34.setTransform(40,8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F010FF").s().p("AiKAUIAAgnIEWAAIAAAng");
	this.shape_35.setTransform(-26,26);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F010FF").s().p("AgmAUIAAgnIBOAAIAAAng");
	this.shape_36.setTransform(-16,18);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F010FF").s().p("AhiATIAAglIDGAAIAAAlg");
	this.shape_37.setTransform(-30,6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F010FF").s().p("AhjATIAAgmIDGAAIAAAmg");
	this.shape_38.setTransform(-26,-2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F010FF").s().p("AgmAUIAAgnIBNAAIAAAng");
	this.shape_39.setTransform(0,26);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F010FF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_40.setTransform(26,26);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F010FF").s().p("AgSAUIAAgnIAmAAIAAAng");
	this.shape_41.setTransform(34,18);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F010FF").s().p("AgmATIAAglIBNAAIAAAlg");
	this.shape_42.setTransform(36,14);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F010FF").s().p("AgnA8IAAh3IBPAAIAAB3g");
	this.shape_43.setTransform(32,6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F010FF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_44.setTransform(26,18);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F010FF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_45.setTransform(16,22);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F010FF").s().p("AgnAUIAAgnIBPAAIAAAng");
	this.shape_46.setTransform(4,18);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F010FF").s().p("AgmAUIAAgnIBOAAIAAAng");
	this.shape_47.setTransform(12,10);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F010FF").s().p("AgTATIAAglIAmAAIAAAlg");
	this.shape_48.setTransform(2,6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F010FF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_49.setTransform(18,2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F010FF").s().p("AgnATIAAgmIBOAAIAAAmg");
	this.shape_50.setTransform(8,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},2).to({state:[]},2).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_51.setTransform(38,18);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_52.setTransform(24,6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_53.setTransform(12,6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_54.setTransform(16,-2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_55.setTransform(22,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_56.setTransform(22,26);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_57.setTransform(6,18);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_58.setTransform(34,18);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_59.setTransform(36,14);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_60.setTransform(20,26);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_61.setTransform(34,4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_62.setTransform(6,16);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_63.setTransform(4,12);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_64.setTransform(14,12);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_65.setTransform(26,12);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_66.setTransform(18,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66,p:{y:12,rotation:0,x:18}},{t:this.shape_65,p:{y:12,rotation:0,x:26}},{t:this.shape_64,p:{y:12,rotation:0,x:14}},{t:this.shape_63,p:{y:12,rotation:0,x:4}},{t:this.shape_62,p:{y:16,rotation:0,x:6}},{t:this.shape_61,p:{y:4,rotation:0,x:34}},{t:this.shape_60,p:{y:26,rotation:0,x:20}},{t:this.shape_59,p:{y:14,rotation:0,x:36}},{t:this.shape_58,p:{y:18,rotation:0,x:34}},{t:this.shape_57,p:{y:18,rotation:0,x:6}},{t:this.shape_56,p:{y:26,rotation:0,x:22}},{t:this.shape_55,p:{y:0,rotation:0,x:22}},{t:this.shape_54,p:{y:-2,rotation:0,x:16}},{t:this.shape_53,p:{y:6,rotation:0,x:12}},{t:this.shape_52,p:{y:6,rotation:0,x:24}},{t:this.shape_51,p:{y:18,rotation:0,x:38}}]}).to({state:[{t:this.shape_66,p:{y:4,rotation:0,x:18}},{t:this.shape_65,p:{y:4,rotation:0,x:26}},{t:this.shape_64,p:{y:4,rotation:0,x:14}},{t:this.shape_63,p:{y:4,rotation:0,x:4}},{t:this.shape_62,p:{y:8,rotation:0,x:6}},{t:this.shape_61,p:{y:-4,rotation:0,x:34}},{t:this.shape_60,p:{y:18,rotation:0,x:20}},{t:this.shape_59,p:{y:6,rotation:0,x:36}},{t:this.shape_58,p:{y:10,rotation:0,x:34}},{t:this.shape_57,p:{y:10,rotation:0,x:6}},{t:this.shape_56,p:{y:18,rotation:0,x:22}},{t:this.shape_55,p:{y:-8,rotation:0,x:22}},{t:this.shape_54,p:{y:-10,rotation:0,x:16}},{t:this.shape_53,p:{y:-2,rotation:0,x:12}},{t:this.shape_52,p:{y:-2,rotation:0,x:24}},{t:this.shape_51,p:{y:10,rotation:0,x:38}}]},2).to({state:[{t:this.shape_66,p:{y:14,rotation:-90,x:20}},{t:this.shape_65,p:{y:6,rotation:-90,x:20}},{t:this.shape_64,p:{y:18,rotation:-90,x:20}},{t:this.shape_63,p:{y:28,rotation:-90,x:20}},{t:this.shape_62,p:{y:26,rotation:-90,x:24}},{t:this.shape_61,p:{y:-2,rotation:-90,x:12}},{t:this.shape_60,p:{y:12,rotation:-90,x:34}},{t:this.shape_59,p:{y:-4,rotation:-90,x:22}},{t:this.shape_58,p:{y:-2,rotation:-90,x:26}},{t:this.shape_57,p:{y:26,rotation:-90,x:26}},{t:this.shape_56,p:{y:10,rotation:-90,x:34}},{t:this.shape_55,p:{y:10,rotation:-90,x:8}},{t:this.shape_54,p:{y:16,rotation:-90,x:6}},{t:this.shape_53,p:{y:20,rotation:-90,x:14}},{t:this.shape_52,p:{y:8,rotation:-90,x:14}},{t:this.shape_51,p:{y:-6,rotation:-90,x:26}}]},2).to({state:[{t:this.shape_66,p:{y:12,rotation:180,x:22}},{t:this.shape_65,p:{y:12,rotation:180,x:14}},{t:this.shape_64,p:{y:12,rotation:180,x:26}},{t:this.shape_63,p:{y:12,rotation:180,x:36}},{t:this.shape_62,p:{y:8,rotation:180,x:34}},{t:this.shape_61,p:{y:20,rotation:180,x:6}},{t:this.shape_60,p:{y:-2,rotation:180,x:20}},{t:this.shape_59,p:{y:10,rotation:180,x:4}},{t:this.shape_58,p:{y:6,rotation:180,x:6}},{t:this.shape_57,p:{y:6,rotation:180,x:34}},{t:this.shape_56,p:{y:-2,rotation:180,x:18}},{t:this.shape_55,p:{y:24,rotation:180,x:18}},{t:this.shape_54,p:{y:26,rotation:180,x:24}},{t:this.shape_53,p:{y:18,rotation:180,x:28}},{t:this.shape_52,p:{y:18,rotation:180,x:16}},{t:this.shape_51,p:{y:6,rotation:180,x:2}}]},1).to({state:[{t:this.shape_66,p:{y:14,rotation:90,x:20}},{t:this.shape_65,p:{y:22,rotation:90,x:20}},{t:this.shape_64,p:{y:10,rotation:90,x:20}},{t:this.shape_63,p:{y:0,rotation:90,x:20}},{t:this.shape_62,p:{y:2,rotation:90,x:16}},{t:this.shape_61,p:{y:30,rotation:90,x:28}},{t:this.shape_60,p:{y:16,rotation:90,x:6}},{t:this.shape_59,p:{y:32,rotation:90,x:18}},{t:this.shape_58,p:{y:30,rotation:90,x:14}},{t:this.shape_57,p:{y:2,rotation:90,x:14}},{t:this.shape_56,p:{y:18,rotation:90,x:6}},{t:this.shape_55,p:{y:18,rotation:90,x:32}},{t:this.shape_54,p:{y:12,rotation:90,x:34}},{t:this.shape_53,p:{y:8,rotation:90,x:26}},{t:this.shape_52,p:{y:20,rotation:90,x:26}},{t:this.shape_51,p:{y:34,rotation:90,x:14}}]},1).to({state:[{t:this.shape_66,p:{y:16,rotation:0,x:18}},{t:this.shape_65,p:{y:16,rotation:0,x:26}},{t:this.shape_64,p:{y:16,rotation:0,x:14}},{t:this.shape_63,p:{y:16,rotation:0,x:4}},{t:this.shape_62,p:{y:20,rotation:0,x:6}},{t:this.shape_61,p:{y:8,rotation:0,x:34}},{t:this.shape_60,p:{y:30,rotation:0,x:20}},{t:this.shape_59,p:{y:18,rotation:0,x:36}},{t:this.shape_58,p:{y:22,rotation:0,x:34}},{t:this.shape_57,p:{y:22,rotation:0,x:6}},{t:this.shape_56,p:{y:30,rotation:0,x:22}},{t:this.shape_55,p:{y:4,rotation:0,x:22}},{t:this.shape_54,p:{y:2,rotation:0,x:16}},{t:this.shape_53,p:{y:10,rotation:0,x:12}},{t:this.shape_52,p:{y:10,rotation:0,x:24}},{t:this.shape_51,p:{y:22,rotation:0,x:38}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-4,76,32);


(lib.kick2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("hit1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#19FF1B").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape.setTransform(-26,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19FF1B").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_1.setTransform(-22,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#19FF1B").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_2.setTransform(-18,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#19FF1B").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_3.setTransform(-14,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19FF1B").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_4.setTransform(-14,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19FF1B").s().p("AhjAUIAAgnIDGAAIAAAng");
	this.shape_5.setTransform(2,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19FF1B").s().p("AhiAUIAAgnIDGAAIAAAng");
	this.shape_6.setTransform(6,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#19FF1B").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_7.setTransform(8,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19FF1B").s().p("Ah3AUIAAgnIDvAAIAAAng");
	this.shape_8.setTransform(4,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19FF1B").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_9.setTransform(22,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#19FF1B").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_10.setTransform(22,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#19FF1B").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_11.setTransform(26,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#19FF1B").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_12.setTransform(28,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#19FF1B").s().p("Ag6ATIAAglIB2AAIAAAlg");
	this.shape_13.setTransform(30,14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#19FF1B").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_14.setTransform(28,10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#19FF1B").s().p("Ag6AnIAAhOIB2AAIAABOg");
	this.shape_15.setTransform(30,4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#19FF1B").s().p("Ag7BQIAAieIB2AAIAACeg");
	this.shape_16.setTransform(42,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#19FF1B").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_17.setTransform(-20,14);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#19FF1B").s().p("AgTAUIAAgnIAmAAIAAAng");
	this.shape_18.setTransform(2,26);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#19FF1B").s().p("AhPAUIAAgnICeAAIAAAng");
	this.shape_19.setTransform(-16,26);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#19FF1B").s().p("AhOATIAAglICdAAIAAAlg");
	this.shape_20.setTransform(-4,22);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#19FF1B").s().p("AgTATIAAgmIAmAAIAAAmg");
	this.shape_21.setTransform(2,-2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#19FF1B").s().p("AgmATIAAglIBOAAIAAAlg");
	this.shape_22.setTransform(-8,6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#19FF1B").s().p("AhOATIAAgmICeAAIAAAmg");
	this.shape_23.setTransform(-20,-2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#19FF1B").s().p("AhHAUIAAgnICPAAIAAAng");
	this.shape_24.setTransform(16.8,26);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#19FF1B").s().p("Ag6ATIAAglIB1AAIAAAlg");
	this.shape_25.setTransform(22,22);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#19FF1B").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_26.setTransform(16,14);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#19FF1B").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_27.setTransform(16,6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#19FF1B").s().p("AgnALIAAgVIBOAAIAAAVg");
	this.shape_28.setTransform(16,5.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#19FF1B").s().p("AgTATIAAgmIAnAAIAAAmg");
	this.shape_29.setTransform(14,-2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#19FF1B").s().p("AgSATIAAgmIAlAAIAAAmg");
	this.shape_30.setTransform(18,-2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#19FF1B").s().p("AgnAUIAAgnIBOAAIAAAng");
	this.shape_31.setTransform(24,2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#19FF1B").s().p("AgnB3IAAjuIBPAAIAADug");
	this.shape_32.setTransform(32,12);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#19FF1B").s().p("AgnBQIAAieIBPAAIAACeg");
	this.shape_33.setTransform(40,12);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#19FF1B").s().p("AiKAUIAAgnIEWAAIAAAng");
	this.shape_34.setTransform(-26,30);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#19FF1B").s().p("AgmAUIAAgnIBOAAIAAAng");
	this.shape_35.setTransform(-16,22);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#19FF1B").s().p("AhiATIAAglIDGAAIAAAlg");
	this.shape_36.setTransform(-30,10);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#19FF1B").s().p("AhjATIAAgmIDGAAIAAAmg");
	this.shape_37.setTransform(-26,2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#19FF1B").s().p("AgmAUIAAgnIBNAAIAAAng");
	this.shape_38.setTransform(0,30);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#19FF1B").s().p("AgSAUIAAgnIAmAAIAAAng");
	this.shape_39.setTransform(34,22);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#19FF1B").s().p("AgmATIAAglIBNAAIAAAlg");
	this.shape_40.setTransform(36,18);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#19FF1B").s().p("AgnA8IAAh3IBPAAIAAB3g");
	this.shape_41.setTransform(32,10);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#19FF1B").s().p("AgnAUIAAgnIBPAAIAAAng");
	this.shape_42.setTransform(4,22);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#19FF1B").s().p("AgmAUIAAgnIBOAAIAAAng");
	this.shape_43.setTransform(12,14);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#19FF1B").s().p("AgTATIAAglIAmAAIAAAlg");
	this.shape_44.setTransform(2,10);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#19FF1B").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_45.setTransform(18,6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#19FF1B").s().p("AgnATIAAgmIBOAAIAAAmg");
	this.shape_46.setTransform(8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:30}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:-18,y:18}},{t:this.shape_1},{t:this.shape,p:{x:-26,y:10}}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_13,p:{x:2}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-20,y:14}}]},2).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_17,p:{x:16,y:26}},{t:this.shape_2,p:{x:26,y:22}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape,p:{x:26,y:30}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},2).to({state:[]},2).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_47.setTransform(36,18);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_48.setTransform(34,22);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_49.setTransform(24,6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_50.setTransform(16,-2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_51.setTransform(22,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_52.setTransform(22,26);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_53.setTransform(22,18);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_54.setTransform(30,22);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_55.setTransform(32,18);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_56.setTransform(20,26);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_57.setTransform(26,18);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_58.setTransform(20,12);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_59.setTransform(26,12);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_60.setTransform(18,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60,p:{y:12}},{t:this.shape_59,p:{y:12}},{t:this.shape_58,p:{y:12}},{t:this.shape_57,p:{y:18}},{t:this.shape_56,p:{y:26}},{t:this.shape_55,p:{y:18}},{t:this.shape_54,p:{y:22}},{t:this.shape_53,p:{y:18}},{t:this.shape_52,p:{y:26}},{t:this.shape_51,p:{y:0}},{t:this.shape_50,p:{y:-2}},{t:this.shape_49,p:{y:6}},{t:this.shape_48,p:{y:22}},{t:this.shape_47,p:{y:18}}]}).to({state:[{t:this.shape_60,p:{y:16}},{t:this.shape_59,p:{y:16}},{t:this.shape_58,p:{y:16}},{t:this.shape_57,p:{y:22}},{t:this.shape_56,p:{y:30}},{t:this.shape_55,p:{y:22}},{t:this.shape_54,p:{y:26}},{t:this.shape_53,p:{y:22}},{t:this.shape_52,p:{y:30}},{t:this.shape_51,p:{y:4}},{t:this.shape_50,p:{y:2}},{t:this.shape_49,p:{y:10}},{t:this.shape_48,p:{y:26}},{t:this.shape_47,p:{y:22}}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-4,76,32);


(lib.kick1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("hit1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape.setTransform(-26,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_1.setTransform(-22,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_2.setTransform(-18,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_3.setTransform(-14,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_4.setTransform(-14,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhjAUIAAgnIDGAAIAAAng");
	this.shape_5.setTransform(2,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhiAUIAAgnIDGAAIAAAng");
	this.shape_6.setTransform(6,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_7.setTransform(8,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah3AUIAAgnIDvAAIAAAng");
	this.shape_8.setTransform(4,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_9.setTransform(22,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_10.setTransform(22,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_11.setTransform(26,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_12.setTransform(28,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag6ATIAAglIB2AAIAAAlg");
	this.shape_13.setTransform(30,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhPAUIAAgnICfAAIAAAng");
	this.shape_14.setTransform(28,6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6AnIAAhOIB2AAIAABOg");
	this.shape_15.setTransform(30,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag7BQIAAieIB2AAIAACeg");
	this.shape_16.setTransform(42,8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_17.setTransform(-20,10);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAmAAIAAAng");
	this.shape_18.setTransform(2,22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhPAUIAAgnICeAAIAAAng");
	this.shape_19.setTransform(-16,22);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhOATIAAglICdAAIAAAlg");
	this.shape_20.setTransform(-4,18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTATIAAgmIAmAAIAAAmg");
	this.shape_21.setTransform(2,-6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmATIAAglIBOAAIAAAlg");
	this.shape_22.setTransform(-8,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhOATIAAgmICeAAIAAAmg");
	this.shape_23.setTransform(-20,-6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhHAUIAAgnICPAAIAAAng");
	this.shape_24.setTransform(16.8,22);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag6ATIAAglIB1AAIAAAlg");
	this.shape_25.setTransform(22,18);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_26.setTransform(16,10);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnATIAAglIBOAAIAAAlg");
	this.shape_27.setTransform(16,2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnALIAAgVIBOAAIAAAVg");
	this.shape_28.setTransform(16,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTATIAAgmIAnAAIAAAmg");
	this.shape_29.setTransform(14,-6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSATIAAgmIAlAAIAAAmg");
	this.shape_30.setTransform(18,-6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgnAUIAAgnIBOAAIAAAng");
	this.shape_31.setTransform(24,-2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgnB3IAAjuIBPAAIAADug");
	this.shape_32.setTransform(32,8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgnBQIAAieIBPAAIAACeg");
	this.shape_33.setTransform(40,8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AiKAUIAAgnIEWAAIAAAng");
	this.shape_34.setTransform(-26,26);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgmAUIAAgnIBOAAIAAAng");
	this.shape_35.setTransform(-16,18);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhiATIAAglIDGAAIAAAlg");
	this.shape_36.setTransform(-30,6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhjATIAAgmIDGAAIAAAmg");
	this.shape_37.setTransform(-26,-2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgmAUIAAgnIBNAAIAAAng");
	this.shape_38.setTransform(0,26);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSAUIAAgnIAmAAIAAAng");
	this.shape_39.setTransform(34,18);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgmATIAAglIBNAAIAAAlg");
	this.shape_40.setTransform(36,14);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnA8IAAh3IBPAAIAAB3g");
	this.shape_41.setTransform(32,6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgnAUIAAgnIBPAAIAAAng");
	this.shape_42.setTransform(4,18);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmAUIAAgnIBOAAIAAAng");
	this.shape_43.setTransform(12,10);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTATIAAglIAmAAIAAAlg");
	this.shape_44.setTransform(2,6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_45.setTransform(18,2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgnATIAAgmIBOAAIAAAmg");
	this.shape_46.setTransform(8,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:30}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:-18,y:14}},{t:this.shape_1},{t:this.shape,p:{x:-26,y:6}}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_13,p:{x:2}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-20,y:10}}]},2).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_17,p:{x:16,y:22}},{t:this.shape_2,p:{x:26,y:18}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape,p:{x:26,y:26}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},2).to({state:[]},2).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_47.setTransform(38,18);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_48.setTransform(24,6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_49.setTransform(12,6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_50.setTransform(16,-2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_51.setTransform(22,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_52.setTransform(22,26);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_53.setTransform(6,18);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_54.setTransform(34,18);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_55.setTransform(36,14);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_56.setTransform(20,26);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_57.setTransform(34,4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_58.setTransform(6,16);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_59.setTransform(4,12);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_60.setTransform(14,12);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_61.setTransform(26,12);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_62.setTransform(18,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62,p:{y:12}},{t:this.shape_61,p:{y:12}},{t:this.shape_60,p:{y:12}},{t:this.shape_59,p:{y:12}},{t:this.shape_58,p:{y:16}},{t:this.shape_57,p:{y:4}},{t:this.shape_56,p:{y:26}},{t:this.shape_55,p:{y:14}},{t:this.shape_54,p:{y:18}},{t:this.shape_53,p:{y:18}},{t:this.shape_52,p:{y:26}},{t:this.shape_51,p:{y:0}},{t:this.shape_50,p:{y:-2}},{t:this.shape_49,p:{y:6}},{t:this.shape_48,p:{y:6}},{t:this.shape_47,p:{y:18}}]}).to({state:[{t:this.shape_62,p:{y:4}},{t:this.shape_61,p:{y:4}},{t:this.shape_60,p:{y:4}},{t:this.shape_59,p:{y:4}},{t:this.shape_58,p:{y:8}},{t:this.shape_57,p:{y:-4}},{t:this.shape_56,p:{y:18}},{t:this.shape_55,p:{y:6}},{t:this.shape_54,p:{y:10}},{t:this.shape_53,p:{y:10}},{t:this.shape_52,p:{y:18}},{t:this.shape_51,p:{y:-8}},{t:this.shape_50,p:{y:-10}},{t:this.shape_49,p:{y:-2}},{t:this.shape_48,p:{y:-2}},{t:this.shape_47,p:{y:10}}]},2).to({state:[{t:this.shape_62,p:{y:8}},{t:this.shape_61,p:{y:8}},{t:this.shape_60,p:{y:8}},{t:this.shape_59,p:{y:8}},{t:this.shape_58,p:{y:12}},{t:this.shape_57,p:{y:0}},{t:this.shape_56,p:{y:22}},{t:this.shape_55,p:{y:10}},{t:this.shape_54,p:{y:14}},{t:this.shape_53,p:{y:14}},{t:this.shape_52,p:{y:22}},{t:this.shape_51,p:{y:-4}},{t:this.shape_50,p:{y:-6}},{t:this.shape_49,p:{y:2}},{t:this.shape_48,p:{y:2}},{t:this.shape_47,p:{y:14}}]},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-4,76,32);


(lib.die = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape.setTransform(34,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_1.setTransform(30,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_2.setTransform(22,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_3.setTransform(30,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_4.setTransform(26,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_5.setTransform(22,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_6.setTransform(14,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_7.setTransform(14,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_8.setTransform(10,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_9.setTransform(6,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_10.setTransform(6,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_11.setTransform(24,10);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_12.setTransform(12,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_13.setTransform(16,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_14.setTransform(22,4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_15.setTransform(14,30);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_16.setTransform(22,30);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_17.setTransform(24,30);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_18.setTransform(12,30);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_19.setTransform(2,18);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_20.setTransform(18,16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#01DF44").s().p("AhFAbIBShSIAdAcIAcAbIgcAbIgcgbIg2A4g");
	this.shape_21.setTransform(9.5,6.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#01B6EF").s().p("AhUA4IA5g4IAbAcIgaAcIgdAdgAAAgbIAcgcIAcgcIAcAcIgcAcIgcAbg");
	this.shape_22.setTransform(13.8,11.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#01CAD7").s().p("Ag3AbIAcgbIAbAcIgaAcgAAAgbIAbgcIAdAcIgcAbg");
	this.shape_23.setTransform(27.9,26);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FFFF").s().p("AgpCbIAcgcIgcgcIAcgdIAaAcIAcgcIgcgcIgaAcIgcgcIAcgcIgcgaIgdgdIg4A3IAcAcIgcAcIg4g4IA4g3IA5g4IAcAcIAcAcIAaAcIAcgcIAdAdIgcAaIAcAcIAcgcIgcgaIAcgdIgcgcIAcgdIAdAdIgdAcIAcAcIAdgcIAcAcIgcAbIgdAcIgcAcIgcAdIgcAcIgdAcIgaAcgAhiBiIAcgcIAdAdIgcAcgAhiAqIAdgcIAcAcIgdAcgAgpAqgABGgMgAANhFIAdgcIAcAcIgdAcgABGhFgAAqhhIgdgdIgaAdIgcgcIA3g5IA4A4IgcAdg");
	this.shape_24.setTransform(18,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#01DEE6").s().p("AgNB/IAbgdIAcAdIgcAcgAiaBiIAcgcIAdAcIgdAdgABiAOIAdgbIAcAbIgcAcgABGh+IAcgcIAdAcIgcAcg");
	this.shape_25.setTransform(20.8,18.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhTBxIAcgcIAcAcIgcAcgAhUA4IgcAcIgcgcIAcgcIAcAcIAdgcIAcAcIAbgcIAbAcIgbAcIgbgcIgcAdgAAcAAIAcgaIAcAaIgcAcgAg3AcIgcgcIAcgaIAcAaIgcAcgAAbg3IAdgcIAcAcIgcAdgABUg3IAdgcIAcAcIgdAcgAgbg3IAbgcIAbAcIgbAcgAAbg3gAAchvIAcgdIAcAcIgcAdg");
	this.shape_26.setTransform(19.4,17.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#01DF44").s().p("AgnA8IAAh3IAnAAIAnAAIAAApIgnAAIAABOg");
	this.shape_27.setTransform(6,16.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#01B6EF").s().p("AgTBkIAAhRIAnAAIAAApIAAAogAgTgSIAAgpIAAgnIAnAAIAAAnIAAApg");
	this.shape_28.setTransform(12,16.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01CAD7").s().p("AgTA8IAAgpIAnAAIAAApgAgTgSIAAgpIAnAAIAAApg");
	this.shape_29.setTransform(32,16.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AATCLIAAgnIApAAIAAAngAg6CLIAAgnIAnAAIAAAngAgTBkIAAgoIAmAAIAAAogAATA8IAAgpIApAAIAAApgAg6A8IAAgpIAnAAIAAApgAATgSIAAgpIgmAAIAAgnIAmAAIAAAnIApAAIAAApgAg6gSIAAgpIAnAAIAAApgAAThiIAAgpIApAAIAAApgAg6hiIAAgpIAnAAIAAApg");
	this.shape_30.setTransform(20,16.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00FFFF").s().p("ABQCLIAAgnIgpAAIAAgoIApAAIAAgpIgpAAIAAApIgnAAIAAAoIAnAAIAAAnIgnAAIAAgnIgmAAIAAgoIAmAAIAAgpIgmAAIgpAAIAABRIApAAIAAAnIhQAAIAAhPIAAhOIAnAAIApAAIAmAAIAAgpIgmAAIAAgnIgpAAIAAAnIgnAAIAAhQIBQAAIAAApIAmAAIAAgpIAnAAIAAApIApAAIAAgpIAnAAIAAApIAAAnIAAApIAAAlIAAApIAAAoIAAAngAAAg7IAnAAIAAApIApAAIAAgpIgpAAIAAgnIgnAAgAAnBkg");
	this.shape_31.setTransform(18,16.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01DEE6").s().p("AhPC0IAAgpIAoAAIAAApgAAnBkIAAgoIApAAIAAAogAAng7IAAgnIApAAIAAAngAhPiLIAAgnIAoAAIAAAng");
	this.shape_32.setTransform(26,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.didowalksound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape.setTransform(14,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_1.setTransform(26,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{y:12}},{t:this.shape,p:{y:12}}]}).to({state:[{t:this.shape_1,p:{y:16}},{t:this.shape,p:{y:16}}]},2).to({state:[{t:this.shape_1,p:{y:16}},{t:this.shape,p:{y:16}}]},2).wait(2));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_2.setTransform(16,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_3.setTransform(22,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_4.setTransform(24,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_5.setTransform(12,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_6.setTransform(10,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_7.setTransform(6,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_8.setTransform(26,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_9.setTransform(28,26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_10.setTransform(8,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_11.setTransform(34,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_12.setTransform(2,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_13.setTransform(4,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_14.setTransform(18,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14,p:{y:12}},{t:this.shape_13,p:{y:12}},{t:this.shape_12,p:{y:18}},{t:this.shape_11,p:{y:16}},{t:this.shape_10,p:{x:8,y:26}},{t:this.shape_9,p:{x:28,y:26}},{t:this.shape_8,p:{x:26,y:26}},{t:this.shape_7,p:{y:14}},{t:this.shape_6,p:{x:10,y:26}},{t:this.shape_5,p:{y:2,x:12}},{t:this.shape_4,p:{y:2,x:24}},{t:this.shape_3,p:{y:0}},{t:this.shape_2,p:{y:-2}}]}).to({state:[{t:this.shape_14,p:{y:16}},{t:this.shape_13,p:{y:16}},{t:this.shape_12,p:{y:22}},{t:this.shape_11,p:{y:20}},{t:this.shape_10,p:{x:12,y:30}},{t:this.shape_9,p:{x:24,y:30}},{t:this.shape_8,p:{x:22,y:30}},{t:this.shape_7,p:{y:18}},{t:this.shape_6,p:{x:14,y:30}},{t:this.shape_5,p:{y:6,x:12}},{t:this.shape_4,p:{y:6,x:24}},{t:this.shape_3,p:{y:4}},{t:this.shape_2,p:{y:2}}]},2).to({state:[{t:this.shape_14,p:{y:16}},{t:this.shape_13,p:{y:16}},{t:this.shape_12,p:{y:22}},{t:this.shape_11,p:{y:20}},{t:this.shape_10,p:{x:16,y:30}},{t:this.shape_9,p:{x:20,y:30}},{t:this.shape_8,p:{x:18,y:30}},{t:this.shape_7,p:{y:18}},{t:this.shape_6,p:{x:18,y:30}},{t:this.shape_5,p:{y:6,x:24}},{t:this.shape_3,p:{y:4}},{t:this.shape_2,p:{y:2}},{t:this.shape_4,p:{y:6,x:12}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,36,32);


(lib.controlremoto = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().dr(-32,-12,64,24);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32,-12,64,24);


(lib.coinsprite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBA80B").s().dr(-2,-6,4,12);
	this.shape.setTransform(4,-14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B98408").s().dr(-2,-2,4,4);
	this.shape_1.setTransform(0,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B98408").s().dr(-2,-6,4,12);
	this.shape_2.setTransform(-4,-14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B98408").s().dr(-2,-2,4,4);
	this.shape_3.setTransform(0,-22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFA00").s().dr(-6,-14,12,28);
	this.shape_4.setTransform(0,-14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFA00").s().dr(-10,-10,20,20);
	this.shape_5.setTransform(0,-14);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-28,20,28);


(lib.burbuja = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("AgTBkIAAjGIAmAAIAADGg");
	this.shape.setTransform(58,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FFFF").s().p("AgSAoIAAhPIAmAAIAABPg");
	this.shape_1.setTransform(54,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FFFF").s().p("AgTATIAAglIAnAAIAAAlg");
	this.shape_2.setTransform(50,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FFFF").s().p("AgnAUIAAgnIBOAAIAAAng");
	this.shape_3.setTransform(44,54);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33FFFF").s().p("AgSAoIAAhOIAmAAIAABOg");
	this.shape_4.setTransform(54,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_5.setTransform(50,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33FFFF").s().p("AgnATIAAgmIBOAAIAAAmg");
	this.shape_6.setTransform(44,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33FFFF").s().p("AhjATIAAglIDGAAIAAAlg");
	this.shape_7.setTransform(30,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33FFFF").s().p("AgnAUIAAgnIBPAAIAAAng");
	this.shape_8.setTransform(16,54);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33FFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_9.setTransform(10,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33FFFF").s().p("AgTAoIAAhPIAnAAIAABPg");
	this.shape_10.setTransform(6,44);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33FFFF").s().p("AgSBkIAAjGIAlAAIAADGg");
	this.shape_11.setTransform(2,30);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33FFFF").s().p("AgTAoIAAhOIAnAAIAABOg");
	this.shape_12.setTransform(6,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33FFFF").s().p("AgSAUIAAgnIAlAAIAAAng");
	this.shape_13.setTransform(10,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33FFFF").s().p("AgnATIAAgmIBPAAIAAAmg");
	this.shape_14.setTransform(16,6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33FFFF").s().p("AhjAUIAAgmIDGAAIAAAmg");
	this.shape_15.setTransform(30,2);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.brick = function() {
	this.initialize();

	// block.png
	this.instance = new lib.block();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,32);


(lib.Symbol17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.setTransform(302,73.1,1,1,3.2,0,0,302,73.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:302.1,regY:73,rotation:-5.7,x:302.1,y:73},0).wait(1).to({scaleX:0.97,scaleY:0.92,rotation:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9},0).wait(1).to({regX:302,regY:73.1,rotation:3.2,x:302,y:73.1},0).wait(1).to({regX:302.1,regY:73,rotation:-5.7,x:302.1,y:73},0).wait(1).to({scaleX:0.97,scaleY:0.92,rotation:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9},0).wait(1).to({regX:302,regY:73.1,rotation:3.2,x:302,y:73.1},0).wait(1).to({regX:302.1,regY:73,rotation:-5.7,x:302.1,y:73},0).wait(1).to({scaleX:0.97,scaleY:0.92,rotation:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-17,611.4,180.1);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,84,80);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(75.5,115.9,1,1,0,0,0,75.5,115.9);
	this.instance.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:134.9},9,cjs.Ease.get(-1)).to({y:155.9},10,cjs.Ease.get(1)).to({y:135.9},10,cjs.Ease.get(-1)).to({y:115.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,231.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// control remoto
	this.instance = new lib.controlremoto();
	this.instance.setTransform(102,100.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4,y:96.6},4).to({rotation:-3,x:91},5).to({rotation:0,x:102,y:100.6},5).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(75.5,84.5,1,1,0,0,0,75.5,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:87.5},4).to({x:72.5,y:79.5},5).to({x:75.5,y:84.5},5).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape.setTransform(100.3,42.2,4.222,4.222);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_1.setTransform(49.7,42.2,4.222,4.222);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_2.setTransform(66.6,8.5,4.222,4.222);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_3.setTransform(91.9,16.9,4.222,4.222);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_4.setTransform(75,109.8,4.222,4.222);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_5.setTransform(108.7,109.8,4.222,4.222);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_6.setTransform(117.2,109.8,4.222,4.222);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_7.setTransform(66.5,109.8,4.222,4.222);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_8.setTransform(58.1,67.6,4.222,4.222);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_9.setTransform(108.8,67.6,4.222,4.222);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_10.setTransform(75,67.6,4.222,4.222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,118.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(13.2,6,1,1,0,0,0,13.2,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-61.5},3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,12);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol6("synched",0,false);
	this.instance.setTransform(13.2,1,1,1,0,0,0,13.2,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},38).wait(1).to({_off:false,x:81.7},0).to({_off:true},18).wait(1).to({_off:false,x:58.5},0).to({_off:true},50).wait(1).to({_off:false,x:89.5},0).to({_off:true},47).wait(1).to({_off:false,x:86.5},0).wait(23));

	// Layer 1
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(13.3,9.8);

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(133.3,9.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:81.9},39).to({x:51.3},25).to({_off:true,x:133.3},25).wait(68).to({_off:false,x:13.3},22).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},25).to({x:43.6},41).to({x:86.6},27).to({_off:true,x:13.3},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-72.5,93.4,92);


(lib.score = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var view = this;
		
		this.tryagain_btn.on('click', ontryagain);
		
		function ontryagain()
		{
			view.dispatchEvent('done');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tryagain_btn
	this.tryagain_btn = new lib.tryagain();
	this.tryagain_btn.setTransform(470,302,1,1,0,0,0,76,16);
	new cjs.ButtonHelper(this.tryagain_btn, 0, 1, 2, false, new lib.tryagain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.tryagain_btn).wait(1));

	// score
	this.score = new cjs.Text("", "48px 'Press Start 2P'", "#FFE542");
	this.score.name = "score";
	this.score.lineHeight = 50;
	this.score.lineWidth = 292;
	this.score.setTransform(251.1,217);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Now Señor Cuadrito will meet his makers. His soul won't have rest. Poor Poor Señor Cuadrito.
	this.text = new cjs.Text("Now Señor Cuadrito will meet his makers.\nHis soul won't have rest.\nPoor Poor Señor Cuadrito.", "12px 'Press Start 2P'", "#FFFFFF");
	this.text.lineHeight = 14;
	this.text.lineWidth = 496;
	this.text.setTransform(88,349);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6FF02").s().p("ATqE/IAAgqIBSAAIAAAqgANNE/IAAkhIDPAAIAAAqIAoAAIAAAoIAqAAIAAB9IgqAAIAAAoIgoAAIAAAqgAOfEVIBTAAIAAgoIAqAAIAAh9IgqAAIAAgoIhTAAgAIDE/IAAkhIEhAAIAAAqIjPAAIAABSICmAAIAAApIimAAIAABSIDPAAIAAAqgADiE/IAAgqIBTAAIAAjNIhTAAIAAgqID4AAIAAAqIhSAAIAADNIBSAAIAAAqgAiPE/IAAkhIDNAAIAAAqIAoAAIAAAoIAqAAIAAB9IgqAAIAAAoIgoAAIAAAqgAg9EVIBRAAIAAgoIAqAAIAAh9IgqAAIAAgoIhRAAgAr6E/IAAgqIgpAAIAAj3IBTAAIAAD3IB8AAIAAj3IBSAAIAAD3IgqAAIAAAqgAxDE/IAAgqIgqAAIAAjNIAqAAIAAgqIDNAAIAAAqIAqAAIAADNIgqAAIAAAqgAwbEVIB9AAIAAjNIh9AAgA07E/IAAh8IgqAAIAAgpIgoAAIAAh8IBSAAIAAB8IBSAAIAAh8IBTAAIAAB8IgpAAIAAApIgqAAIAAB8gATqDtIAAjPIB8AAIAAB8IgqAAIAABTgEAiegAdIAAgpIgpAAIAAgpIBTAAIAAApIB8AAIAAhTIimAAIAAgpIgpAAIAAhSIApAAIAAgqICmAAIAAAqIAoAAIAAAoIhSAAIAAgoIhSAAIAABSICkAAIAAApIAqAAIAABTIgqAAIAAApgAf6gdIAAgpIgqAAIAAgpIgpAAIAAgqIgqAAIAAB8IhSAAIAAkhIBSAAIAAAqIAqAAIAAAoIApAAIAAAqIAqAAIAAh8IBSAAIAAEhgAYLgdIAAgpIgqAAIAAjOIAqAAIAAgqIDOAAIAAAqIApAAIAADOIgpAAIAAApgAYzhGIB8AAIAAjOIh8AAgATAgdIAAgpIBTAAIAAjOIhTAAIAAgqID4AAIAAAqIhSAAIAADOIBSAAIAAApgAPJgdIAAj3IhSAAIAAgqID3AAIAAAqIhSAAIAAD3gALRgdIAAhSIh8AAIAABSIhSAAIAAjPIAqAAIAAgoIAoAAIAAgqIB8AAIAAAqIAqAAIAAAoIApAAIAADPgAJViZIB8AAIAAhTIgpAAIAAgoIgpAAIAAAoIgqAAgADigdIAAkhIBTAAIAAD4IClAAIAAApgAhlgdIAAgpIgqAAIAAj4IBSAAIAAD4IB7AAIAAj4IBSAAIAAD4IgqAAIAAApgAldgdIAAj3IhSAAIAAgqID3AAIAAAqIhTAAIAAD3gApUgdIAAhSIh8AAIAABSIhTAAIAAjPIApAAIAAgoIAqAAIAAgqIB8AAIAAAqIAoAAIAAAoIAqAAIAADPgArQiZIB8AAIAAhTIgqAAIAAgoIgpAAIAAAoIgpAAgAvIgdIAAgpIgpAAIAAgpIgqAAIAABSIhSAAIAAkhID3AAIAAAqIAqAAIAAB7IhSAAIAAAqIAoAAIAAApIAqAAIAAApgAwbiZIBTAAIAAgpIAqAAIAAhSIh9AAgA1lgdIAAgpIgoAAIAAgpIgqAAIAAh9IAqAAIAAgoIAoAAIAAgqIDPAAIAAAqIilAAIAAAoIgqAAIAAB9IAqAAIAAApIBSAAIAAhTIgpAAIAAgpIB8AAIAAClgA4ygdIAAgpIgqAAIAAgpIgpAAIAAgqIgpAAIAAB8IhTAAIAAkhIBTAAIAAAqIApAAIAAAoIApAAIAAAqIAqAAIAAh8IBSAAIAAEhgEgghgAdIAAgpIgqAAIAAjOIAqAAIAAgqIDNAAIAAAqIAqAAIAADOIgqAAIAAApgA/5hGIB9AAIAAjOIh9AAgEglDgAdIAAgpIgoAAIAAgpIgqAAIAAh9IAqAAIAAgoIAoAAIAAgqICmAAIAAAqIApAAIAAAoIhTAAIAAgoIhSAAIAAAoIgqAAIAAB9IAqAAIAAApIBSAAIAAgpIBTAAIAAApIgpAAIAAApg");
	this.shape.setTransform(315.9,127);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// die
	this.instance = new lib.die();
	this.instance.setTransform(140,268,3.442,3.442,0,0,0,18,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B30000").s().dr(-94,-94,188,188);
	this.shape_1.setTransform(320,240,3.404,2.553);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.intro = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.skip.on('click', function ()
		{
			this.parent.noplay = true;
			this.parent.stop();
			this.parent.dispatchEvent('done');
			
		});
	}
	this.frame_3 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(3000).call(
		function (a)
		{
			if(!a.noplay) a.play();
		}, [this]);
	}
	this.frame_6 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(4000).call(
		function (a)
		{
			if(!a.noplay) a.play();
		}, [this]);
	}
	this.frame_9 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(4000).call(
		function (a)
		{
			if(!a.noplay) a.play();
		}, [this]);
	}
	this.frame_12 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(5000).call(
		function (a)
		{
			if(!a.noplay) a.play();
		}, [this]);
	}
	this.frame_17 = function() {
		createjs.Sound.stop();
	}
	this.frame_18 = function() {
		playSound("mysticsoundwav",4);
	}
	this.frame_65 = function() {
		playSound("teleapagonwav");
	}
	this.frame_89 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(3000).call(
		function (a)
		{
			if(!a.noplay) a.play();
		}, [this]);
		playSound("voice1wav");
	}
	this.frame_92 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(3000).call(
		function (a)
		{
			if(!a.noplay) a.play();
		}, [this]);
		playSound("voice1wav");
		playSound("tranquilo",-1);
	}
	this.frame_95 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(5000).call(
		function (a)
		{
			if(!a.noplay) a.play();
		}, [this]);
		playSound("voice2wav");
	}
	this.frame_98 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(5000).call(
		function (a)
		{
			if(!a.noplay) a.play();
		}, [this]);
		playSound("voice2wav");
	}
	this.frame_122 = function() {
		this.stop();
		this.dispatchEvent('done');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(3).call(this.frame_6).wait(3).call(this.frame_9).wait(3).call(this.frame_12).wait(5).call(this.frame_17).wait(1).call(this.frame_18).wait(47).call(this.frame_65).wait(24).call(this.frame_89).wait(3).call(this.frame_92).wait(3).call(this.frame_95).wait(3).call(this.frame_98).wait(24).call(this.frame_122).wait(1));

	// Layer 2
	this.skip = new lib.skip();
	this.skip.setTransform(591,451,1,1,0,0,0,34,14);
	new cjs.ButtonHelper(this.skip, 0, 1, 2, false, new lib.skip(), 3);

	this.timeline.addTween(cjs.Tween.get(this.skip).wait(123));

	// Layer 5
	this.text = new cjs.Text("This is Señor Cuadrito...", "12px 'Press Start 2P'", "#333333");
	this.text.lineHeight = 14;
	this.text.lineWidth = 374;
	this.text.setTransform(8,11);
	this.text._off = true;

	this.instance = new lib.Symbol12();
	this.instance.setTransform(320,240,1,1,0,0,0,320,240);
	this.instance.alpha = 0.578;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3).to({_off:false},0).wait(3).to({text:"He just installed an Atari Emulator\non his brand new PS4...",lineWidth:567},0).wait(3).to({text:"Because Señor Cuadrito \nlikes his retro in 1080p...",lineWidth:593},0).wait(3).to({text:"But Señor Cuadrito didn't know \nhe may have found a glitch"},0).to({_off:true},6).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({_off:false},0).to({alpha:1},12).wait(9));

	// Layer 3
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(376.1,168.4,1,1,0,0,0,2.1,2.1);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(517.4,216.1,1,1,0,0,0,2.1,2.1);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(478.9,181.1,1,1,0,0,0,2.1,2.1);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(441.4,208.1,1,1,0,0,0,2.1,2.1);

	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(401.6,185.6,1,1,0,0,0,2.1,2.1);

	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(389,243.6,1,1,0,0,0,13.2,9.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADsBOIAAgWIBDAAIAAAWgAALBOIAAibICdAAIAAAWIhwAAIAAAtIBaAAIAAAVIhaAAIAABDgAhkBOIAAiFIgtAAIAAgWICHAAIAAAWIgtAAIAACFgAjrBOIAAgWIgWAAIAAgXIgXAAIAAAXIgWAAIAAAWIgtAAIAAibIAtAAIAABDIAWAAIAAgWIAXAAIAAAWIAWAAIAAhDIAtAAIAACbgADsAhIAAgWIAtAAIAAgVIAWAAIAAgWIhDAAIAAAWIgtAAIAAgtIAWAAIAAgWIBxAAIAAAWIAWAAIAAAtIgWAAIAAAVIgXAAIAAAWg");
	this.shape.setTransform(327.4,429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AKBBaIAAiFICHAAIAAAWIAWAAIAAArIgWAAIAAAXIhaAAIAAAtgAKuAWIBDAAIAAgrIhDAAgAYyBDIAAgWIBDAAIAAAWgAVnBDIAAgWIgWAAIAAhCIAWAAIAAgWIBxAAIAAAWIAWAAIAAArIhwAAIAAAXIBaAAIAAAWgAV+AAIBDAAIAAgVIhDAAgASzBDIAAgWIgWAAIAAhCIAWAAIAAgWICHAAIAAAWIhwAAIAABCIBwAAIAAAWgAP/BDIAAgWIgWAAIAAgXIAWAAIAAgWIBaAAIAAgVIhaAAIAAgWIBxAAIAAAWIAWAAIAABYgAQWAtIBDAAIAAgXIhDAAgANLBDIAAgWIAtAAIAAhvIgWAAIAAgWIBDAAIAACFIAtAAIAAAWgAEZBDIAAgWIBwAAIAAgXIhaAAIAAgWIgWAAIAAgVIAWAAIAAgWIBxAAIAAAWIhaAAIAAAVIBaAAIAAAWIAWAAIAAAXIgWAAIAAAWgAB7BDIAAgWIAtAAIAAhCIgWAAIAAgWIBDAAIAABYIAtAAIAAAWgAAhBDIAAhYIhBAAIAABYIgtAAIAAibIAtAAIAAAtIBYAAIAAAWIAWAAIAABYgAi+BDIAAhYIgtAAIAAgWIAtAAIAAgtIAtAAIAAAtIAtAAIAAAWIgtAAIAABYgAppBDIAAgWIBwAAIAAgXIhaAAIAAgWIgWAAIAAgVIAWAAIAAgWIBxAAIAAAWIhaAAIAAAVIBaAAIAAAWIAWAAIAAAXIgWAAIAAAWgAsHBDIAAgWIAtAAIAAhCIgWAAIAAgWIBDAAIAABYIAtAAIAAAWgAxCBDIAAhYIgtAAIAAgWIAtAAIAAgtIAtAAIAAAtIAtAAIAAAWIgtAAIAABYgA0jBDIAAgWIgWAAIAAgXIAWAAIAAgWIBaAAIAAgVIhaAAIAAgWIBxAAIAAAWIAWAAIAABYgA0MAtIBDAAIAAgXIhDAAgA19BDIAAhYIhDAAIAABYIgtAAIAAibIAtAAIAAAtIBaAAIAAAWIAWAAIAABYgA4xBDIAAgWIgWAAIAAgXIgXAAIAAAXIgWAAIAAAWIgtAAIAAibIAtAAIAABDIAWAAIAAgWIAXAAIAAAWIAWAAIAAhDIAtAAIAACbgAYyAWIAAgWIAtAAIAAgVIAWAAIAAgWIhDAAIAAAWIgtAAIAAgtIAWAAIAAgWIBxAAIAAAWIAWAAIAAAtIgWAAIAAAVIgXAAIAAAWgACohCIAAgWIAtAAIAAAWgArahCIAAgWIAtAAIAAAWg");
	this.shape_1.setTransform(327.4,430.1);

	this.text_1 = new cjs.Text("adf", "18px 'Press Start 2P'", "#FFFF00");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(714.2,450.1);

	this.text_2 = new cjs.Text("Welcome to the Glitch\nSeñor Cuadrito", "18px 'Press Start 2P'", "#FFFF00");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 588;
	this.text_2.setTransform(330.1,418.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},18).to({state:[]},47).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.text_2,p:{x:330.1,text:"Welcome to the Glitch\nSeñor Cuadrito",lineWidth:588}},{t:this.text_1}]},3).to({state:[{t:this.text_2,p:{x:317.1,text:"I´ll be your guide",lineWidth:366}},{t:this.text_1}]},3).wait(25));

	// Layer 1
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(81,122.1,1,1,0,0,0,-13.1,-29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF00").s().dr(-1.9,-1.5,3.8,3);
	this.shape_2.setTransform(294.2,253.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().dr(-3,-59,6,118);
	this.shape_3.setTransform(297.4,281.6,0.617,0.617);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#222222").s().dr(-15.5,-49,31,98);
	this.shape_4.setTransform(297.6,285.6,0.344,0.333,0,0,0,-0.1,46.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#222222").s().dr(-17.5,-49,35,98);
	this.shape_5.setTransform(297.6,267.7,0.446,0.229,0,0,0,-0.1,46.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#222222").s().dr(-32.5,-14.5,65,29);
	this.shape_6.setTransform(297.7,313,0.446,0.447);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#222222").s().dr(-22.5,-10,45,20);
	this.shape_7.setTransform(297.6,306.9,0.446,0.617);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#222222").s().dr(-17.5,-49,35,98);
	this.shape_8.setTransform(297.6,306.5,0.446,0.333,0,0,0,-0.1,46.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C2005D").s().p("AjuDwIAAnfIHdAAIAAHfg");
	this.shape_9.setTransform(69,252.1,0.833,1,0,0,0,-24,-24);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C2005D").s().p("AtGBjIAAjGIaOAAIAADGg");
	this.shape_10.setTransform(148.6,162.1,0.945,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B0000").s().p("AiLBkIAAjGIEWAAIAADGg");
	this.shape_11.setTransform(204,309.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B0000").s().p("AiLBkIAAjGIEWAAIAADGg");
	this.shape_12.setTransform(92,309.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8B0027").s().p("Ar2B3IAAjtIXtAAIAADtg");
	this.shape_13.setTransform(168.1,281.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE0014").s().p("Aq7IIIAAwPIV3AAIAAQPg");
	this.shape_14.setTransform(158,220.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#510008").s().p("AtGLPIAA2eIaOAAIAAWeg");
	this.shape_15.setTransform(148.6,227.1,0.945,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#39280D").s().dr(-114,-10,228,20);
	this.shape_16.setTransform(452,297.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1BBB12").s().dr(-8,-4,16,8);
	this.shape_17.setTransform(450,269.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#81BBB7").s().dr(-88,-54,176,108);
	this.shape_18.setTransform(446,205.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#222222").s().dr(-104,-72,208,144);
	this.shape_19.setTransform(446,207.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#251A09").s().dr(-132,-26,264,52);
	this.shape_20.setTransform(450,293.1);

	this.instance_8 = new lib.controlremoto();
	this.instance_8.setTransform(183,252.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_21.setTransform(119.4,227.5,4.222,4.222);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#01DEE6").s().dr(-2,-4,4,8);
	this.shape_22.setTransform(236.6,236,4.222,4.222);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#01DEE6").s().dr(-2,-2,4,4);
	this.shape_23.setTransform(135.5,244.4,4.222,4.222);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#01DEE6").s().dr(-4,-4,8,8);
	this.shape_24.setTransform(110.9,236.1,4.222,4.222);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_25.setTransform(194.4,193.7,4.222,4.222);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#01B6EF").s().dr(-4,-2,8,4);
	this.shape_26.setTransform(143.7,193.7,4.222,4.222);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#01DF44").s().dr(-4,-2,8,4);
	this.shape_27.setTransform(160.6,160,4.222,4.222);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#01DF44").s().dr(-2,-4,4,8);
	this.shape_28.setTransform(185.9,168.4,4.222,4.222);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_29.setTransform(169,261.3,4.222,4.222);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01CAD7").s().dr(-2,-2,4,4);
	this.shape_30.setTransform(202.8,261.3,4.222,4.222);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_31.setTransform(211.2,261.3,4.222,4.222);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#01DEE6").s().dr(-4,-2,8,4);
	this.shape_32.setTransform(160.6,261.3,4.222,4.222);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_33.setTransform(152.2,219.1,4.222,4.222);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_34.setTransform(202.8,219.1,4.222,4.222);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00FFFF").s().dr(-14,-12,28,24);
	this.shape_35.setTransform(169.1,219.1,4.222,4.222);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0033").s().dr(-88,-54,176,108);
	this.shape_36.setTransform(446,205.1);

	this.instance_9 = new lib.Symbol9();
	this.instance_9.setTransform(169.6,236,1,1,0,0,0,75.5,16.9);

	this.instance_10 = new lib.Symbol16();
	this.instance_10.setTransform(262.6,273.2,1,1,0,0,0,75.5,67.6);

	this.instance_11 = new lib.Symbol11();
	this.instance_11.setTransform(521.7,142.9,1,1,0,0,0,75.5,115.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_7}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_36},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_35,p:{x:169.1,y:219.1}},{t:this.shape_34,p:{x:202.8,y:219.1}},{t:this.shape_33,p:{x:152.2,y:219.1}},{t:this.shape_32,p:{x:160.6,y:261.3}},{t:this.shape_31,p:{x:211.2,y:261.3}},{t:this.shape_30,p:{x:202.8,y:261.3}},{t:this.shape_29,p:{x:169,y:261.3}},{t:this.shape_28,p:{x:185.9,y:168.4}},{t:this.shape_27,p:{x:160.6,y:160}},{t:this.shape_26,p:{x:143.7,y:193.7}},{t:this.shape_25,p:{x:194.4,y:193.7}},{t:this.shape_24,p:{x:110.9,y:236.1}},{t:this.shape_23,p:{x:135.5,y:244.4}},{t:this.shape_22,p:{x:236.6,y:236}},{t:this.shape_21,p:{x:119.4,y:227.5}},{t:this.instance_8,p:{x:183,y:252.1}}]},18).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_36},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_35,p:{x:169.1,y:219.1}},{t:this.shape_34,p:{x:202.8,y:219.1}},{t:this.shape_33,p:{x:152.2,y:219.1}},{t:this.shape_32,p:{x:160.6,y:261.3}},{t:this.shape_31,p:{x:211.2,y:261.3}},{t:this.shape_29,p:{x:202.8,y:261.3}},{t:this.shape_21,p:{x:169,y:261.3}},{t:this.shape_28,p:{x:185.9,y:168.4}},{t:this.shape_27,p:{x:160.6,y:160}},{t:this.shape_26,p:{x:143.7,y:193.7}},{t:this.shape_25,p:{x:194.4,y:193.7}},{t:this.instance_9},{t:this.instance_8,p:{x:145,y:328.1}}]},10).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_36},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_35,p:{x:101.1,y:260.1}},{t:this.shape_34,p:{x:134.8,y:260.1}},{t:this.shape_33,p:{x:84.2,y:260.1}},{t:this.shape_32,p:{x:67.6,y:319.3}},{t:this.shape_31,p:{x:150.2,y:319.3}},{t:this.shape_30,p:{x:141.8,y:319.3}},{t:this.shape_29,p:{x:76,y:319.3}},{t:this.shape_28,p:{x:117.9,y:209.4}},{t:this.shape_27,p:{x:92.6,y:201}},{t:this.shape_26,p:{x:75.7,y:234.7}},{t:this.shape_25,p:{x:126.4,y:234.7}},{t:this.shape_24,p:{x:42.9,y:277.1}},{t:this.shape_23,p:{x:67.5,y:285.4}},{t:this.shape_22,p:{x:168.6,y:277}},{t:this.shape_21,p:{x:51.4,y:268.5}},{t:this.instance_8,p:{x:145,y:328.1}}]},9).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_36},{t:this.shape_17},{t:this.shape_16},{t:this.shape_35,p:{x:70.1,y:234.1}},{t:this.shape_34,p:{x:103.8,y:234.1}},{t:this.shape_33,p:{x:53.2,y:234.1}},{t:this.shape_32,p:{x:36.6,y:293.3}},{t:this.shape_31,p:{x:119.2,y:293.3}},{t:this.shape_30,p:{x:110.8,y:293.3}},{t:this.shape_29,p:{x:45,y:293.3}},{t:this.shape_28,p:{x:86.9,y:183.4}},{t:this.shape_27,p:{x:61.6,y:175}},{t:this.shape_26,p:{x:44.7,y:208.7}},{t:this.shape_25,p:{x:95.4,y:208.7}},{t:this.shape_24,p:{x:11.9,y:251.1}},{t:this.shape_23,p:{x:36.5,y:259.4}},{t:this.shape_22,p:{x:137.6,y:251}},{t:this.shape_21,p:{x:20.4,y:242.5}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_8,p:{x:145,y:328.1}}]},9).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_36},{t:this.shape_17},{t:this.shape_16},{t:this.shape_35,p:{x:146.1,y:141.1}},{t:this.shape_34,p:{x:179.8,y:141.1}},{t:this.shape_33,p:{x:129.2,y:141.1}},{t:this.shape_32,p:{x:112.6,y:200.3}},{t:this.shape_31,p:{x:195.2,y:200.3}},{t:this.shape_30,p:{x:186.8,y:200.3}},{t:this.shape_29,p:{x:121,y:200.3}},{t:this.shape_28,p:{x:162.9,y:90.4}},{t:this.shape_27,p:{x:137.6,y:82}},{t:this.shape_26,p:{x:120.7,y:115.7}},{t:this.shape_25,p:{x:171.4,y:115.7}},{t:this.shape_24,p:{x:87.9,y:158.1}},{t:this.shape_23,p:{x:112.5,y:166.4}},{t:this.shape_22,p:{x:213.6,y:158}},{t:this.shape_21,p:{x:96.4,y:149.5}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_8,p:{x:145,y:328.1}}]},9).to({state:[]},10).to({state:[{t:this.instance_10}]},27).to({state:[{t:this.shape_35,p:{x:262.1,y:273.1}},{t:this.shape_34,p:{x:295.9,y:273.1}},{t:this.shape_33,p:{x:245.2,y:273.1}},{t:this.shape_32,p:{x:228.6,y:332.3}},{t:this.shape_31,p:{x:311.3,y:332.3}},{t:this.shape_30,p:{x:302.8,y:332.3}},{t:this.shape_29,p:{x:237.1,y:332.3}},{t:this.shape_28,p:{x:279,y:222.5}},{t:this.shape_27,p:{x:253.7,y:214}},{t:this.shape_26,p:{x:236.8,y:247.8}},{t:this.shape_25,p:{x:287.4,y:247.8}},{t:this.shape_24,p:{x:204,y:290.1}},{t:this.shape_23,p:{x:228.5,y:298.5}},{t:this.shape_22,p:{x:329.7,y:290}},{t:this.shape_21,p:{x:212.4,y:281.6}},{t:this.instance_11}]},3).wait(28));

	// background
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CCCCCC").s().dr(-320,-240,640,480);
	this.shape_37.setTransform(320,330.1,1,0.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCFF66").s().dr(-320,-240,640,480);
	this.shape_38.setTransform(320,240);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF01").s().dr(-320,-240,640,480);
	this.shape_39.setTransform(320,330.1,1,0.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().dr(-320,-240,640,480);
	this.shape_40.setTransform(320,240);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().dr(-320,-240,640,480);
	this.shape_41.setTransform(320,240);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990066").s().dr(-320,-240,640,480);
	this.shape_42.setTransform(322,480.2,1,0.394,0,0,0,2,237);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF3366").s().dr(-320,-240,640,480);
	this.shape_43.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_40,p:{scaleY:1,y:240}},{t:this.shape_39}]},18).to({state:[{t:this.shape_38},{t:this.shape_37}]},5).to({state:[{t:this.shape_40,p:{scaleY:1,y:240}},{t:this.shape_39}]},5).to({state:[{t:this.shape_38},{t:this.shape_37}]},5).to({state:[{t:this.shape_40,p:{scaleY:1,y:240}},{t:this.shape_39}]},6).to({state:[{t:this.shape_38},{t:this.shape_37}]},5).to({state:[{t:this.shape_40,p:{scaleY:1,y:240}},{t:this.shape_39}]},5).to({state:[{t:this.shape_38},{t:this.shape_37}]},5).to({state:[{t:this.shape_40,p:{scaleY:1,y:240}},{t:this.shape_39}]},6).to({state:[{t:this.shape_41},{t:this.shape_40,p:{scaleY:0.625,y:330.1}}]},5).to({state:[{t:this.shape_43},{t:this.shape_42}]},27).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.glitch = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape.setTransform(9,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().dr(-2,-4,4,8);
	this.shape_1.setTransform(-11,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().dr(-16,-2,32,4);
	this.shape_2.setTransform(-1,-14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#122E09").s().dr(-4,-2,8,4);
	this.shape_3.setTransform(15,-38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#122E09").s().dr(-4,-2,8,4);
	this.shape_4.setTransform(-17,-38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#122E09").s().dr(-6,-2,12,4);
	this.shape_5.setTransform(-11,-34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#122E09").s().dr(-6,-2,12,4);
	this.shape_6.setTransform(9,-34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().dr(-4,-6,8,12);
	this.shape_7.setTransform(7,-26);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().dr(-4,-6,8,12);
	this.shape_8.setTransform(-9,-26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF33").s().dr(-16,-14,32,28);
	this.shape_9.setTransform(-1,-22);

	this.instance = new lib.Symbol14();
	this.instance.setTransform(-1,-20);

	this.addChild(this.instance,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-60,84,80);


(lib.cointaken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.coinsprite();
	this.instance.setTransform(0,-14,1,1,0,0,0,0,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-39,alpha:0.191},4).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-28,20,28);


(lib.choosecontrols = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mousebtn.on('click', function()
		{
			this.parent.selector.gotoAndStop(1);
			createjs.isArrow = false;
		});
		
		this.arrowbtn.on('click', function()
		{
			this.parent.selector.gotoAndStop(0);
			createjs.isArrow = true;
		});
		
		var isFirefox, isIOS, isAndroid, isMac, isChrome, isSafari, isIPad;
		isFirefox   = navigator.userAgent.toLowerCase().indexOf('firefox')  != -1;
		isChrome    = navigator.userAgent.toLowerCase().indexOf('chrome')   != -1;
		isIOS       = navigator.userAgent.toLowerCase().indexOf('iphone')   != -1||navigator.userAgent.toLowerCase().indexOf('ipad')!=-1||navigator.userAgent.toLowerCase().indexOf('ipod')!=-1
		isAndroid   = navigator.userAgent.toLowerCase().indexOf('android')  != -1;
		isMac       = navigator.userAgent.toLowerCase().indexOf('macintosh')!= -1;
		isSafari    = navigator.userAgent.toLowerCase().indexOf('safari')   != -1;
		isIPad      = navigator.userAgent.toLowerCase().indexOf('ipad')     != -1;
		
		
		if ( isIOS || isAndroid )
		{
			this.visible = false;
			createjs.isArrow = false;
		}
		else
		{
			createjs.isArrow = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.selector = new lib.Symbol20();
	this.selector.setTransform(8,52,1,1,0,0,0,3.4,4.8);

	this.mousebtn = new lib.Symbol19();
	this.mousebtn.setTransform(98,28,1,1,0,0,0,82,12);
	new cjs.ButtonHelper(this.mousebtn, 0, 1, 2, false, new lib.Symbol19(), 3);

	this.arrowbtn = new lib.Symbol19();
	this.arrowbtn.setTransform(98,52,1,1,0,0,0,82,12);
	new cjs.ButtonHelper(this.arrowbtn, 0, 1, 2, false, new lib.Symbol19(), 3);

	this.text = new cjs.Text("Arrow Keys", "11px 'Press Start 2P'", "#FFC550");
	this.text.lineHeight = 13;
	this.text.lineWidth = 144;
	this.text.setTransform(19.5,44);

	this.text_1 = new cjs.Text("Mouse Pointer", "11px 'Press Start 2P'", "#FFC550");
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 153;
	this.text_1.setTransform(19,22);

	this.text_2 = new cjs.Text("Choose Controls:", "11px 'Press Start 2P'", "#FFC550");
	this.text_2.lineHeight = 13;
	this.text_2.lineWidth = 207;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.arrowbtn},{t:this.mousebtn},{t:this.selector}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211,72);


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.burbuja();
	this.instance.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.block_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.platforms 	= createjs.platforms || [];
		createjs.pool		= createjs.pool || [];
		
		
		var index = createjs.platforms.indexOf(this);
		if (index == -1 ) createjs.platforms.push(this);
		//createjs.pool.push(this);
		
		
		this.remove = function ()
		{
			this.parent.removeChild( this );
			createjs.pool.push(this);
		}
		
		/*this.on('click', function ()
		{
			var a = createjs.platforms.indexOf(this);
			var b = createjs.pool.indexOf(this);
			console.log('on platforms', a, 'on pool', b);
		});*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.brick = new lib.brick();
	this.brick.setTransform(40,16,1,1,0,0,0,40,16);
	this.brick.cache(-2,-2,84,36);

	this.timeline.addTween(cjs.Tween.get(this.brick).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,32);


(lib.menu = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("mainloop",-1);
	}
	this.frame_89 = function() {
		var view = this;
		
		this.stop();
		this.start_btn.on('click', onstart);
		
		function onstart ()
		{
			createjs.Sound.stop();
			playSound('clickwav',0);
			this.parent.dispatchEvent('done');
			this.parent.visible = false;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1));

	// se;or
	this.sprite = new lib.didowalksound();
	this.sprite.setTransform(-30,334,1,1,0,0,0,18,16);
	this.sprite._off = true;

	this.sprite_1 = new lib.pushback();
	this.sprite_1.setTransform(320,334,1,1,0,0,0,18,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.sprite}]},29).to({state:[{t:this.sprite}]},59).to({state:[{t:this.sprite_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.sprite).wait(29).to({_off:false},0).to({x:320},59).to({_off:true},1).wait(1));

	// Layer 3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(704.8,466.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:554.8},6,cjs.Ease.get(1)).to({x:584.8},3,cjs.Ease.get(-1)).wait(61));

	// Layer 4
	this.choosecontrols = new lib.choosecontrols();
	this.choosecontrols.setTransform(172.1,424.5,1,1,0,0,0,105.5,36);
	this.choosecontrols._off = true;

	this.timeline.addTween(cjs.Tween.get(this.choosecontrols).wait(89).to({_off:false},0).wait(1));

	// start
	this.start_btn = new lib.start();
	this.start_btn.setTransform(320,377,0.204,0.204);
	this.start_btn._off = true;
	new cjs.ButtonHelper(this.start_btn, 0, 1, 2, false, new lib.start(), 3);

	this.timeline.addTween(cjs.Tween.get(this.start_btn).wait(80).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(-1)).wait(1));

	// start
	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(320,268.6,0.1,0.1,0,0,0,170.5,6.5);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:170.6,scaleX:1.1,scaleY:1.1,y:268.5},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(-1)).wait(67));

	// Layer 5
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(320,150,0.087,0.087);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({scaleX:1.12,scaleY:1.12},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(-1)).wait(71));

	// Layer 6
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(320,151.6,1,0.051);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({scaleY:1.24},6,cjs.Ease.get(1)).to({scaleY:1},3,cjs.Ease.get(-1)).wait(76));

	// Layer 7
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(320,148.6,1,0.095);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.2},6,cjs.Ease.get(1)).to({scaleY:1},3,cjs.Ease.get(-1)).wait(81));

	// Layer 8
	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640.1,480);


(lib.dido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,walk:8,die:15,punch1:21,punch2:28,punch3:34,kick1:40,kick2:45,kick3:51,pushback:57,happy:65});

	// Layer 4
	this.bubble = new lib.Bubble();
	this.bubble.setTransform(0,0,1,1,0,0,0,30,30);
	this.bubble.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bubble).wait(72));

	// Layer 1
	this.sprite = new lib.stand();
	this.sprite.setTransform(0,0,1,1,0,0,0,18,16);

	this.sprite_1 = new lib.didowalksound();
	this.sprite_1.setTransform(0,0,1,1,0,0,0,18,16);

	this.sprite_2 = new lib.die();
	this.sprite_2.setTransform(0,0,1,1,0,0,0,18,16);

	this.sprite_3 = new lib.punch1();
	this.sprite_3.setTransform(0,0,1,1,0,0,0,18,16);

	this.sprite_4 = new lib.punch2();
	this.sprite_4.setTransform(0,0,1,1,0,0,0,18,16);

	this.sprite_5 = new lib.punch3();
	this.sprite_5.setTransform(0,0,1,1,0,0,0,18,16);

	this.sprite_6 = new lib.kick1();
	this.sprite_6.setTransform(0,0,1,1,0,0,0,18,16);

	this.sprite_7 = new lib.kick2();
	this.sprite_7.setTransform(0,0,1,1,0,0,0,18,16);

	this.sprite_8 = new lib.kick3();
	this.sprite_8.setTransform(0,0,1,1,0,0,0,18,16);

	this.sprite_9 = new lib.pushback();
	this.sprite_9.setTransform(0,0,1,1,0,0,0,18,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sprite}]}).to({state:[{t:this.sprite_1}]},8).to({state:[{t:this.sprite_2}]},7).to({state:[{t:this.sprite_3}]},6).to({state:[{t:this.sprite_4}]},7).to({state:[{t:this.sprite_5}]},6).to({state:[{t:this.sprite_6}]},6).to({state:[{t:this.sprite_7}]},5).to({state:[{t:this.sprite_8}]},6).to({state:[{t:this.sprite_9}]},6).to({state:[{t:this.sprite_9}]},8).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-32,60,62.1);


(lib.Cuadrito = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var view = this.view;
		var sprite = this;
		var axis = {x:0, y:0};
		var speed = 7;
		var left, right;
		var mousePos;
		
		var gravity = 3;
		var maxspeed = 20;
		var speedY=0;
		// stand walk happy
		
		var right = false;
		var left = false;
		
		if ( createjs.isArrow )
		{
			
			document.onkeydown = function (evt)
			{
				switch (evt.keyCode)
				{
					case 39:
					case 68:
						right = true;
					break;
					case 37:
					case 65:
						left = true;
					break;
				}
			}
			document.onkeyup = function (evt)
			{
				switch (evt.keyCode)
				{
					case 39:
					case 68:
						right = false;
					break;
					case 37:
					case 65:
						left = false;
					break;
				}
			}
		}
		else
		{
			mousePos = 500;
			stage.on('stagemousemove', function(event)
			{
				//console.log(event.stageX, event.stageY);
				mousePos = event.stageX;
			});
			stage.on('stagemousedown', function (event)
			{
				mousePos = event.stageX;
			});
		}
		
		
		view.gotoAndStop('stand');
		this.on('tick', update);
		
		this.die = function ()
		{
			sprite._listeners.tick = [];
			sprite.on('tick', updatedead);
			view.gotoAndStop('die');
			createjs.Sound.stop();
			playSound('mysticsoundwav',3);
			speedY =-20;
		}
		
		function updatedead()
		{
			view.rotation+=15;
			this.y+= speedY;
			speedY+= gravity;
			if ( speedY > maxspeed ) speedY = maxspeed;
			if ( this.y + this.parent.y > 520 )
			{
				sprite._listeners.tick = [];
				//console.log('scorescreen', sprite);
			}
		}
		
		function update(evt)
		{
			// X
			if ( createjs.isArrow )
			{
				axis.x = 0;
				if ( left ) axis.x--;
				if ( right) axis.x++;
				switch(axis.x)
				{
					case 1:
						view.scaleX = 1;
						view.gotoAndStop('walk');
					break;
					case -1:
						view.scaleX =-1;
						view.gotoAndStop('walk');
					break;
					case 0:
						view.gotoAndStop('stand');
					break;
				}
			}
			else
			{
				if ( Math.abs(mousePos - this.x) < speed )
				{
					axis.x = 0;
					view.gotoAndStop('stand');
				}
				else if ( mousePos > this.x )
				{
					//right
					axis.x = 1;
					view.scaleX = 1;
					view.gotoAndStop('walk');
				}
				else
				{
					//left
					axis.x = -1;
					view.scaleX =-1;
					view.gotoAndStop('walk');
				}
			}
			
			
			this.x += axis.x * speed;
			
			if ( this.x > 635) this.x = 635;
			if ( this.x < 5 ) this.x = 5;
			// Y
			speedY+= gravity;
			if (speedY>maxspeed) speedY=maxspeed;
			
			this.y += speedY;
			
			var platforms = createjs.platforms;
			var p;
			this.parent.output.text = 'platforms.lengt:'+platforms.length+'\n';
			for ( var i=0; i< platforms.length; i++ )
			{
				p = platforms[i];
				if ( p.parent && 
					this.y   	> p.y && this.y 	< p.y + 30 && 
					this.x+6 	> p.x && this.x-6 	< p.x + 80 )
				{
					// collision
					this.y = p.y;
					//console.log('collision');
					if ( speedY > 10 )
					{
						speedY = -10;
					}
					else
					{
						speedY = 0;
					}
				}
				
				this.parent.output.text += 'x:'+p.x+' , y:'+p.y+' \n';
				
				if ( p.parent && p.y + p.parent.y < 0 ) 
				{
					p.remove();
				}
			}
			// coins coinspool
			var coins = createjs.coins;
			var c;
			this.parent.output2.text = 'coins.lengt:'+coins.length+'\n';
			for ( i=0; i< coins.length; i++)
			{
				c = coins[i];
				if ( c.parent && !c.taken &&
					distance (this, c) < 12 )
				{
					c.take();
					this.dispatchEvent('coin');
					// SCORE ++;
				}
				this.parent.output2.text += 'x:'+c.x+' , y:'+c.y+' \n';
				if ( c.parent && c.y + c.parent.y < 0 )
				{
					c.remove();
				}
			}
		}
		
		function distance( point1, point2 )
		{
		    var xs;
		    var ys;
		
		    xs = point2.x - point1.x;
		    xs = xs * xs;
		
		    ys = point2.y - point1.y;
		    ys = ys * ys;
		
		    return Math.sqrt( xs + ys );
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cuadrito
	this.view = new lib.dido();
	this.view.setTransform(0,-16);

	this.timeline.addTween(cjs.Tween.get(this.view).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-46,60,60);


(lib.coinview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.coinsprite = new lib.coinsprite();
	this.coinsprite.setTransform(0,-14,1,1,0,0,0,0,-14);

	this.cointaken = new lib.cointaken();
	this.cointaken.setTransform(0,-14,1,1,0,0,0,0,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.coinsprite}]}).to({state:[{t:this.cointaken}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-28,20,28);


(lib.coins = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var view = this.view;
		
		createjs.coins 	= createjs.coins || [];
		createjs.coinspool		= createjs.coinspool || [];
		
		createjs.coins.push(this);
		
		this.remove = function ()
		{
			this.parent.removeChild( this );
			createjs.coinspool.push(this);
			this.view.gotoAndStop(0);
			//this.view.coinsprite.visible = true;
			//this.view.cointaken.visible = false;
			this.taken = false;
			//console.log( 'remove', createjs.pool.length) ;
		}
		
		
		this.take = function ()
		{
			//console.log('taken');
			//this.view.coinsprite.visible = false;
			this.view.gotoAndStop(1);
			//this.view.cointaken.visible = true;
			this.view.cointaken.gotoAndPlay(0);
			playSound('clickwav',0);
			this.taken = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.view = new lib.coinview();
	this.view.setTransform(0,-18,1,1,0,0,0,0,-14);

	this.timeline.addTween(cjs.Tween.get(this.view).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-32,20,28);


(lib.container = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound('mainloop',-1);
	}
	this.frame_55 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(5000).call(
		function (a)
		{
			a.play();
		}, [this]);
		playSound("voice2wav");
	}
	this.frame_59 = function() {
		this.stop();
		
		createjs.Tween.get({}).wait(5000).call(
		function (a)
		{
			a.play();
		}, [this]);
		playSound("voice2wav");
	}
	this.frame_63 = function() {
		this.stop();
		this.on('tick', update);
		var position = 0;
		var spawnmark = 0;
		var spawninc = 128;
		var dificulty = 0;
		var score = this.score;
		var scorevalue = 0;
		var view = this;
		var easy = [
			'10111101'.split(''),
			'11101011'.split(''),
			'11011101'.split(''),
			'10110111'.split(''),
			'11001111'.split('')
		];
		var medium = [
			'10111111'.split(''),
			'11111011'.split(''),
			'11101111'.split(''),
			'11011111'.split(''),
			'10111101'.split('')
		];
		var hard = [
			'10111111'.split(''),
			'11111101'.split(''),
			'01111111'.split(''),
			'11111011'.split(''),
			'11111110'.split('')
		];
		
		this.cuadrito.on('coin', function ()
		{
			scorevalue+=15;
			score.text = scorevalue;
		});
		
		this.glitch.frictionX = .02;
		this.glitch.frictionY = .009;
		
		var count = 0;
		var dificultycount = 0;
		
		function update()
		{
			//console.log( this.y, spawnmark );
			if ( this.y + this.cuadrito.y > 240 )
			{
				position = -this.cuadrito.y+240; 
			}
			if ( !this.cuadrito.isDead ) this.y+=( position-this.y ) / 4;
			this.score.y = -this.y + 8;
			this.output.y = -this.y + 88;
			this.output2.y = -this.y + 88;
			this.setChildIndex( this.cuadrito, this.children.length -1 );
			this.setChildIndex( this.glitch, this.children.length -1 );
			this.setChildIndex( this.score, this.children.length -1 );
			if ( this.y <= spawnmark ) 
			{
				// create new line
				count++;
				if ( count == 4 )
				{
					this.glitch.frictionY*=1.25;
					if ( this.glitch.frictionY >= .98 ) this.glitch.frictionY = .98;
					count=0;
				}
				dificultycount++
				if ( dificultycount == 15 )
				{
					dificulty++; 
					if ( dificulty == 3 ) dificulty = 2;
					dificultycount=0;
				}
				var line;
				switch( dificulty )
				{
					case 0:
						line = easy[Math.floor(Math.random()*easy.length)];
						break;
					case 1:
						line = medium[Math.floor(Math.random()*medium.length)];
						break;
					case 2:
						line = hard[Math.floor(Math.random()*hard.length)];
						break;
				}
				var n = line.length;
				var origin = -spawnmark + 576;
				//console.log('origin', origin);
				for ( var i=0; i<n; i++ )
				{
					var block = line[i];
					if (block == '1')
					{
						block = getBlock();
						this.addChild(block);
						block.x = i * 80;
						block.y = origin;
						if ( Math.random() > .5 ) 
						{
							var coin = getCoin();
							this.addChild(coin);
							coin.x = block.x + 40;
							coin.y = block.y;
							coin.taken = false;
						}
					}
				}
				
				//console.log('this.y:',this.y,'spawnmark:', spawnmark, 'platforms.length:', createjs.platforms.length ) ;
				// end
				//console.log(createjs.coins.length, createjs.coinspool.length);
				spawnmark -= spawninc;
			}
			// glitch
			if ( !this.cuadrito.isDead )
			{
				this.glitch.x += (this.cuadrito.x-this.glitch.x) * this.glitch.frictionX;
				this.glitch.y += (this.cuadrito.y-this.glitch.y) * this.glitch.frictionY;
			}
			
			if ( !this.cuadrito.isDead && distance( this.glitch, this.cuadrito) < 16 )
			{
				this.cuadrito.isDead = true;
				this.cuadrito.die();
				createjs.Tween.get({}).wait(3000).call(function ()
				{
					var evt = new  createjs.Event('done',false,false);
					evt.score = score.text;
					view.dispatchEvent(evt, view );
				});
			}
			
		}
		
		function getBlock()
		{
			if ( createjs.pool.length == 0 )
			{
				createjs.pool.push ( new lib.block() );
			}
			var p = createjs.pool.pop();
			var index = createjs.platforms.indexOf(p);
			if ( index ==-1 ) createjs.platforms.push(p);
			if ( !p.remove )
			{
				p.remove = function ()
				{
					this.parent.removeChild( this );
					createjs.pool.push(this);
				}
			}
			return p;
		}
		function getCoin()
		{
			if ( createjs.coinspool.length == 0 )
			{
				createjs.coinspool.push ( new lib.coins() );
			}
			return createjs.coinspool.pop();
		}
		
		function distance( point1, point2 )
		{
		    var xs;
		    var ys;
		
		    xs = point2.x - point1.x;
		    xs = xs * xs;
		
		    ys = point2.y - point1.y;
		    ys = ys * ys;
		
		    return Math.sqrt( xs + ys );
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(55).call(this.frame_55).wait(4).call(this.frame_59).wait(4).call(this.frame_63).wait(18));

	// Layer 7
	this.instance = new lib.Symbol17();
	this.instance.setTransform(326.4,233.8,1,1,0,0,0,302.1,73);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).wait(18));

	// Layer 6
	this.text = new cjs.Text("Señor Cuadrito, the Glitch has you. \nIt's everywhere.", "12px 'Press Start 2P'", "#FFFF00");
	this.text.lineHeight = 14;
	this.text.lineWidth = 593;
	this.text.setTransform(8,11);

	this.score = new cjs.Text("0", "32px 'Press Start 2P'", "#FFFF00");
	this.score.name = "score";
	this.score.textAlign = "right";
	this.score.lineHeight = 34;
	this.score.lineWidth = 237;
	this.score.setTransform(628.6,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text,p:{text:"Señor Cuadrito, the Glitch has you. \nIt's everywhere.",x:8,y:11,font:"12px 'Press Start 2P'",textAlign:"",lineHeight:14,lineWidth:593}}]},55).to({state:[{t:this.text,p:{text:"You only have one chance to escape.\nReach the end of the cave, your destiny awaits!",x:8,y:11,font:"12px 'Press Start 2P'",textAlign:"",lineHeight:14,lineWidth:593}}]},4).to({state:[{t:this.score},{t:this.text,p:{text:"0",x:474.6,y:-165,font:"32px 'Press Start 2P'",textAlign:"right",lineHeight:34,lineWidth:237}}]},4).wait(18));

	// glitch
	this.instance_1 = new lib.screen();
	this.instance_1.setTransform(320,240,1,1,0,0,0,320,240);

	this.glitch = new lib.glitch();
	this.glitch.setTransform(314,40,1,1,0,0,0,-4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},20).to({state:[]},1).to({state:[{t:this.glitch}]},42).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.191},20).to({_off:true},1).wait(60));

	// Layer 3
	this.instance_2 = new lib.Symbol11();
	this.instance_2.setTransform(-48,121.5,0.236,0.236,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({x:122,y:117.5},21).wait(31));

	// señor
	this.instance_3 = new lib.didowalksound("synched",0);
	this.instance_3.setTransform(-46,164);

	this.instance_4 = new lib.stand("synched",3);
	this.instance_4.setTransform(124,160);

	this.cuadrito = new lib.Cuadrito();
	this.cuadrito.setTransform(142,192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},29).to({state:[{t:this.instance_3}]},21).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.cuadrito}]},12).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({startPosition:5},0).to({x:124,y:160,startPosition:2},21).to({_off:true},1).wait(30));

	// Layer 1
	this.output2 = new cjs.Text("", "12px 'Press Start 2P'", "#FFFF00");
	this.output2.name = "output2";
	this.output2.lineHeight = 14;
	this.output2.lineWidth = 221;
	this.output2.setTransform(13.6,90);

	this.output = new cjs.Text("", "12px 'Press Start 2P'", "#FF6904");
	this.output.name = "output";
	this.output.textAlign = "right";
	this.output.lineHeight = 14;
	this.output.lineWidth = 221;
	this.output.setTransform(628.5,88);

	this.instance_5 = new lib.coins();
	this.instance_5.setTransform(444,448);

	this.instance_6 = new lib.coins();
	this.instance_6.setTransform(292,448);

	this.instance_7 = new lib.coins();
	this.instance_7.setTransform(368,320);

	this.instance_8 = new lib.coins();
	this.instance_8.setTransform(200,320);

	this.instance_9 = new lib.coins();
	this.instance_9.setTransform(200,192);

	this.instance_10 = new lib.block_1();
	this.instance_10.setTransform(560,448);

	this.instance_11 = new lib.block_1();
	this.instance_11.setTransform(400,448);

	this.instance_12 = new lib.block_1();
	this.instance_12.setTransform(320,448);

	this.instance_13 = new lib.block_1();
	this.instance_13.setTransform(240,448);

	this.instance_14 = new lib.block_1();
	this.instance_14.setTransform(80,448);

	this.instance_15 = new lib.block_1();
	this.instance_15.setTransform(0,448);

	this.instance_16 = new lib.block_1();
	this.instance_16.setTransform(560,320);

	this.instance_17 = new lib.block_1();
	this.instance_17.setTransform(480,320);

	this.instance_18 = new lib.block_1();
	this.instance_18.setTransform(320,320);

	this.instance_19 = new lib.block_1();
	this.instance_19.setTransform(240,320);

	this.instance_20 = new lib.block_1();
	this.instance_20.setTransform(160,320);

	this.instance_21 = new lib.block_1();
	this.instance_21.setTransform(0,320);

	this.instance_22 = new lib.block_1();
	this.instance_22.setTransform(560,192);

	this.instance_23 = new lib.block_1();
	this.instance_23.setTransform(480,192);

	this.instance_24 = new lib.block_1();
	this.instance_24.setTransform(400,192);

	this.instance_25 = new lib.block_1();
	this.instance_25.setTransform(320,192);

	this.instance_26 = new lib.block_1();
	this.instance_26.setTransform(160,192);

	this.instance_27 = new lib.block_1();
	this.instance_27.setTransform(80,192);

	this.instance_28 = new lib.block_1();
	this.instance_28.setTransform(0,192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.output},{t:this.output2}]}).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,0,723.7,480);


(lib.game = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var game = this;
		this.container.on('done', function (evt)
		{
			//console.log("DONE score", evt.score);
			game.dispatchEvent(evt, game);
		});
		this.alesys.on('click', function()
		{
			window.open('http://alesys.net/');
			window.open('http://twitter.com/alesys_net/');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// scroll
	this.alesys = new lib.Symbol21();
	this.alesys.setTransform(584.8,466.7,1,1,0,0,0,51,5.2);
	new cjs.ButtonHelper(this.alesys, 0, 1, 2, false, new lib.Symbol21(), 3);

	this.container = new lib.container();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.container},{t:this.alesys}]}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().dr(-114.05,-114.05,228.1,228.1);
	this.shape.setTransform(320,240,2.806,2.105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,0,723.7,480);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;