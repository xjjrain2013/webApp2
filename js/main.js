/*define( function (require, exports, module) {
	App.Init = function() {
		console.log('App init...');
		require('./views/GlobalStage');
		var globalStage = new App.View.GlobalStage({
			name: 'global-stage',
			el: 'body'
		});
	}
});*/
define([
		'models/StarPanelModel',
		'models/PanelModel',
		'collections/StarPanelCollection',
		'GlobalRouter',
		'views/GlobalStage',
		'views/StarPanelView',
		'views/ArticleListsPanel',
		'views/ArticleDetailPanel',
		'transitions/up_down'
	],function(
		StarPanelModel,
		PanelModel,
		StarPanelCollection,
		GlobalRouter,
		GlobalStage,
		StarPanelView,
		ArticleListsPanel,
		ArticleDetailPanel,
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
			console.log('main.js ...');
			var body = $('body');
			//每个版面模型
			var starPanelModel = StarPanelModel.extend();
			//所有的数据
			var starData;
			//所有版面的集合的实例
			var starPanelCollection = new StarPanelCollection();
			//全局路由
			var globalRouter = new GlobalRouter();
			//全局舞台
			var globalStage;
			//文章列表
			var starArticleList;
			//文章列表数据模型
			
			//文章详细页
			var starDetialPage;
			//首页所有面板视图
			var starPanelsView;

			//获取star所有数据
			starPanelCollection.fetch({
				success: function() {
					console.log('数据加载成功...');
				},
				error: function() {
					throw new Error('数据加载失败...');
				}
			});

			starPanelCollection.bind('reset', function() {
				var panelModel = new PanelModel(null, {
					panels: starPanelCollection
				});

				globalStage = new GlobalStage({
					name: 'global-stage',
					router: globalRouter,
					el: 'body'
				});
				starPanelsView = new StarPanelView({
					name: 'star-panel',
					model: panelModel,
					stage: globalStage
				});

				starPanelsView.addTransition(up_down);
				starPanelsView.routePanel(function(trans) {
					$(starPanelsView.el).children().hide();
					starPanelsView.active({trans: trans || 'left'});
				});

				var articleLists = starPanelCollection.pluck('articleList');
				console.log(articleLists);
				/*for(var i = 0; i < articleLists.length; i++) {

				}*/
				//存放所有列表的数组
				var articleListArr = [];
				var articleDetailArr = [];
				_.each(articleLists, function(ele, index) {
					console.log('胭脂');
					console.log(ele);
					var alp = new ArticleListsPanel({
						collection: starPanelCollection,
						articleListData: panelModel,
						name: 'article-panel-' + index,
						currentIndex: index,
						stage: globalStage
					});
					alp.addTransition(up_down);
					alp.routePanel(function(trans){
						$(alp.el).children().hide();
						alp.active({trans: trans || 'right'});
					});
					articleListArr.push(alp);
					_.each(ele, function(e, i) {
						var post = new ArticleDetailPanel({
							collection: starPanelCollection,
							name: 'articale-detail-' + index + '-' + i,
							parentIndex: index,
							currentIndex: i,
							stage: globalStage
						});
						post.addTransition(up_down);
						post.routePanel(function(trans){
							//$(post.el).children().hide();
							post.active({trans: trans || 'right'});
						});
						articleDetailArr.push(post);
					});
				});

				Backbone.history.start();
			});
		}
	}
	

	return App;
});