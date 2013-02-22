requirejs.config({
	baseUrl: 'js',
	paths: {
		text: 'plugin/text',
		zepto: 'libs/zepto',
		backbone : 'libs/backbone',
		underscore : 'libs/underscore',
		gbone: 'libs/gbone',
		zeptogfx: 'libs/zepto-gfx'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'zepto': {
			exports: '$'
		},
		'backbone': {
			deps: ['underscore', 'zepto'],
			exports: 'Backbone'
		},
		'gbone': {
			deps: ['backbone', 'zeptogfx'],
			exports: 'Gbone'
		},
		'app': {
			deps: ['zepto', 'underscore', 'backbone', 'gbone']
		}
	}
});


require(['app'], function(App) {
	//console.log('main.js文件加载...');
	App.init();
	//console.log($);
});
