define(function() {
	var PerNewspaperView = Backbone.View.extend({
		tagName: 'li',
		template: _.template($('#per-panels').html()),
		initialize: function(options) {
			this.model = options.model;
			this.curIndex = options.curIndex;
		},
		render: function() {
			this.$el.data('num', this.curIndex + 1);
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return PerNewspaperView;
});