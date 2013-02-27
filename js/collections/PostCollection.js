define(['models/PostModel', 'views/PostListView', 'transitions/up_down'], function (PostModel, PostListView, up_down) {
	//var num = 0;
	var PostCollection = Backbone.Collection.extend({
		initialize: function(options) {
			this.num = options.num;
			//为列表页面准备舞台
			this.globalStage = options.globalStage;
			//生成数据url
			this.url = './data/postList' + this.num + '.json';
			var that = this;
			this.fetch({
				success: function() {
					console.log('数据加载成功...');
					that.bind('reset', function() {
						var postListView = new PostListView({
							name: 'postlist-' + that.num,
							collection: that,
							curNum: that.num,
							stage: that.globalStage
						});
						postListView.addTransition(up_down);
						postListView.routePanel(function(trans) {
							$(postListView.el).children().hide();
							postListView.active({trans: trans || 'left'});
						});
					});

					that.trigger('reset');
					that.hasSuccess = true;

							
				},
				error: function() {
					throw new Error('数据加载失败...');
				}
			});



		},
		model: PostModel
	});

	return PostCollection;
});