define([
		'GlobalRouter',
		'models/NewspaperPanelModel',
		'collections/NewspaperPanelCollection',
		'views/GlobalStage',
		'views/NewspaperPanelView',
		'transitions/up_down'
	],function(
		GlobalRouter,
		NewspaperPanelModel,
		NewspaperPanelCollection,
		GlobalStage,
		NewspaperPanelView,
		up_down
	) {
	var App = {
		Views: {},
		Routers: {},
		Models: {},
		Collections: {},
		Helpers: {
			Transitions: {}
		},
		init: function() {
			console.log('app.js init ...');
			var body = $('body');
			//每个报纸版面模型
			//var NewspaperPanelModel = NewspaperPanelModel.extend();
			//所有报纸版面组成的集合
			var newspaperPanelCollection = new NewspaperPanelCollection();
			//全局路由
			var globalRouter = new GlobalRouter();
			//全局舞台
			var globalStage;
			

			//获取报纸版式的数据， 即首页24张图片
			newspaperPanelCollection.fetch({
				success: function() {
					console.log('数据加载成功...');
				},
				error: function() {
					throw new Error('数据加载失败...');
				}
			});

			newspaperPanelCollection.bind('reset', function() {

				globalStage = new GlobalStage({
					name: 'global-stage',
					router: globalRouter,
					el: 'body'
				});
				newspaperPanelView = new NewspaperPanelView({
					name: 'newspaper-panel',
					collection: newspaperPanelCollection,
					stage: globalStage,
					globalStage: globalStage
				});
				/*newspaperPanelView = new NewspaperPanelView({
					name: 'newspaper-panel1',
					collection: newspaperPanelCollection,
					stage: globalStage
				});*/

				newspaperPanelView.addTransition(up_down);
				newspaperPanelView.routePanel(function(trans) {
					$(newspaperPanelView.el).children().hide();
					newspaperPanelView.active({trans: trans || 'left'});
				});

				Backbone.history.start();
			});
		}
	}
	

	return App;
});