define(function() {
	var PostView = Gbone.Panel.extend({
		skeleton: _.template('<article class = "show-post-detail"></article>'),
		template: _.template($('#article-contents').html()),
		transitionBindings: ['article.show-post-detail'],
		events: {
			'click a.style_black': 'goBack'
		},
		initialize: function(options) {
			this.newsPanelNum = options.newsPanelNum;
			this.render();
		},
		render: function() {
			this.$('.show-post-detail').html(this.template(this.model.toJSON()));
			return this;
		},
		goBack: function() {
			this.stage.router.navigate('global-stage/postlist-' + this.newsPanelNum, true);
		}
	});

	return PostView;
});