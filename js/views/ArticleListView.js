define(function() {
	var ArticleListView = Backbone.View.extend({
		className: 'postItem',
		tagName: 'ul',
		template: _.template($('#article-list').html()),
		initialize: function(options) {
			_.bindAll(this);
			this.curIndex = options.curIndex;
			this.model = options.model;
			this.render();
		},
		render: function() {
			//console.log(this.model.toJSON);
			$(this.el).html(this.template({model: this.model, curIndex: this.curIndex}));
			return this;
		}
	});

	return ArticleListView;
});