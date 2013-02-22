define(function() {
	var StarPanelView = Gbone.Panel.extend({
		skeleton: _.template('<article class = "starpanels"></article>'),
		template: _.template($('#star-panels').html()),
		transitionBindings: ['article.starpanels'],
		events: {
			'click #slides ul li': 'goArticleListPanel'
		},
		initialize: function(options) {
			_.bindAll(this);
			console.log(this.model.get('panelImg'));
			this.render();

		},
		render: function() {
			this.$('article.starpanels').html(this.template({model: this.model}));
			return this;
		},
		goArticleListPanel: function(event){
			var num = $(event.currentTarget).data('num');
			this.stage.router.navigate('global-stage/article-panel-' + num, true);
		}
	});

	return StarPanelView;
});