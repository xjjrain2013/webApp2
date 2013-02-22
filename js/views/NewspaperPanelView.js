define([
		'views/PerNewspaperView', 
		'collections/PostCollection',
		'views/PostListView',
		'transitions/up_down'
	], function(
		PerNewspaperView,
		PostCollection,
		PostListView,
		up_down
	) {
	var NewspaperPanelView = Gbone.Panel.extend({
		skeleton: _.template('<article class = "newspaper-all-panels"></article>'),
		template: _.template($('#star-panels').html()),
		transitionBindings: ['article.newspaper-all-panels'],
		hasLoadingData: false,
		events: {
			'click ul.newspapers li': 'goPostList'
		},
		initialize: function(options) {
			console.log('NewspaperPanelView init...');
			_.bindAll(this);
			//this.postlist = null;
			this.globalStage = options.globalStage;
			this.render();
		},
		addAll: function() {
			this.collection.each(this.addOne);
		},
		addOne: function(model, index) {
			var view = new PerNewspaperView({model: model, curIndex: index});
			view.render();
			this.appendChildInto(view, 'ul.newspapers');
		},
		render: function() {
			this.$("article.newspaper-all-panels").html(this.template());
			this.addAll();
			return this;
		},
		goPostList:function(event) {
			var num = $(event.currentTarget).data('num');
			if(!this.hasLoadingData) {
				console.log("num: " + num);
				var postCollection = new PostCollection({num: num});
				postCollection.fetch({
					success: function() {
						console.log('loading postlist' + num + '\'s data success....');
					},
					error: function() {
						console.log('loading postlist' + num + '\'s data error....');
					}
				});

				var postlist = new PostListView({
					name: 'postlist-' + num,
					collection: postCollection,
					curNum: num,
					stage: this.stage
				});
				postlist.addTransition(up_down);
				postlist.routePanel(function(trans) {
					postlist.$el.children().hide();
					postlist.active({trans: trans || 'right'});
				});
				this.hasLoadingData = true; 
			}
			this.stage.router.navigate('global-stage/postlist-' + num + '/trans-left', true);

		}
	});

	return NewspaperPanelView;
});