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
		'main': {
			deps: ['zepto', 'underscore', 'backbone', 'gbone']
		}
	}
});

/*requirejs.config({
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});*/

require(['main'], function(App) {
	App.init();
	//console.log($);
});
