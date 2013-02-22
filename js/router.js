define(function (require, exports, module) {
	App.Router = Backbone.Router.extend({
			routes : {
				'' : 'home',
				'list' : 'list',
				'view/:id' : 'view',
				'*error' : 'error'
			},
			initialize : function () {
				console.log("setup router");
				require('layout');
				/*var width = $('#slides').width();
				$('#slides li').tap(function () {
					var Y = $('#slides ul').css('-webkit-transform').match(/translate3d\((.*?)px,.*?\)/i)[1];
					var YY = Y - 480;
					$("#slides ul").animate({
						translate3d : '' + YY + 'px,0,0'
					}, 500, 'ease-out')
				});
				$('#slides li').on('click', function (e) {
					var Y = $('#slides ul').css('-webkit-transform').match(/translate3d\((.*?)px,.*?\)/i)[1];
					var YY = Y - 480;
					$("#slides ul").animate({
						translate3d : '' + YY + 'px,0,0'
					}, 500, 'ease-out');
				});
				$('#left').on('click', function (e) {
					$("#home").animate({
						translate3d : '400px,0,0'
					}, 500, 'ease-out');
				});*/
			},
			home : function () {
				new App.View.Home({
					el : $("body")
				});
				this.changePage();
			},
			list : function () {
				new App.View.List({
					el : $("body")
				});
				this.changePage();
			},
			view : function (id) {
				console.log('渲染详情方法, id为: ' + id);
			},
			error : function (error) {
				console.log('URL错误, 错误信息: ' + error);
			},
			firstPage : true,
			changePage : function () {
				if (!this.firstPage) {
					var page = $('.page').first();
					page.remove()
				} else {
					this.firstPage = false;
				}
			},
		});
});
