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
			_.bindAll(this);
			this.globalStage = options.globalStage;
			//记录对就的列表视图
			this.postListView = null;
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
		goPostList: function(event) {
			var num = $(event.currentTarget).data('num');
			this.stage.router.navigate('global-stage/postlist-' + num + '/trans-right', true);
		}
	});

	return NewspaperPanelView;
});