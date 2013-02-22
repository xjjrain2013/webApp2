define(function() {
	var ArticleDetailPanel = Gbone.Panel.extend({
		skeleton: _.template('<article class = "article-content"></article>'),
		template: _.template($('#article-contents').html()),
		transitionBindings: ['article.article-content'],
		events: {
			'click a.style_black': 'goBack'
		},
		initialize: function(options) {
			_.bindAll(this);
			this.parentIndex = options.parentIndex || 0;
			this.currentIndex = options.currentIndex || 0;
			this.curModel = this.collection.at(this.parentIndex);
			//console.log('列表详细');
			//console.log(this.curModel.get('articleList'));
			var curArticleLists = this.curModel.get('articleList');
			this.curArticle = curArticleLists[this.currentIndex];
			
			this.render();
		},
		render: function () {
			this.$('article.article-content').html(this.template({post: this.curArticle}));
			return this;
		},
		goBack: function() {
			this.stage.router.navigate('global-stage/article-panel-' + this.parentIndex + '/trans-left', true);
		}
	});

	return ArticleDetailPanel;
});