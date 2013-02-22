define(['views/ArticleListView'], function(ArticleListView) {
	var ArticleListsPanel = Gbone.Panel.extend({
		//skeleton: _.template('<article class = "article-list-panels"></article>'),
		skeleton: _.template($('#article-lists').html()),
		//template: _.template($('#article-lists').html()),
		transitionBindings: ['article.article-list-panels'],
		events: {
			'click div.items li': 'showDetail',
			'click a.style_black': 'goBack'
		},
		initialize: function(options) {
			_.bindAll(this);
			this.articleListData = options.articleListData;
			this.currentIndex = options.currentIndex || 0;
			this.render();
		},
		render: function () {
			this.addAll();
			return this;
		},
		addAll: function() {
			console.log(this.collection.at(this.currentIndex) );
			var curModel = this.collection.at(this.currentIndex);
			this.addOne(curModel);
		},
		addOne: function(model) {
			var view = new ArticleListView({model: model, curIndex: this.currentIndex});
			view.render();
			this.appendChildInto(view, 'div.items');
		},
		showDetail: function(event){
			var num = $(event.currentTarget).data('num');
			this.stage.router.navigate('global-stage/articale-detail-' + num, true);
		},
		goBack: function(){
			this.stage.router.navigate('global-stage/star-panel', true);
		}
	});

	return ArticleListsPanel;
});