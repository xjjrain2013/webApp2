define([
		'GlobalRouter',
		'collections/NewspaperPanelCollection',
		'collections/PostCollection',
		'views/GlobalStage',
		'views/NewspaperPanelView',
		'views/PostListView',
		'transitions/up_down'
	],function(
		GlobalRouter,
		NewspaperPanelCollection,
		PostCollection,
		GlobalStage,
		NewspaperPanelView,
		PostListView,
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
			//所有报纸版面组成的集合
			var newspaperPanelCollection = new NewspaperPanelCollection();
			//var postCollection = new PostCollection();
			
			//全局路由
			var globalRouter = new GlobalRouter();
			//全局舞台
			var globalStage;
			//每个报纸面板的文章列表视图
			var postListViews = [];
			//报纸一共有多少个版
			var panelCount;
			

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

				panelCount = newspaperPanelView.$('ul li').length
				for( var i = 0; i < panelCount; i++ ) {
					var postCollection = new PostCollection({num: i+1, globalStage: globalStage});

					postListViews.push(postCollection);

				}
				console.log('postListViews length: ' + postListViews.length);


				

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