define(function() {
	var PostListView = Gbone.Panel.extend({
		skeleton: _.template($('#post-lists').html()),
		template: _.template($('#post-list-item').html()),
		transitionBindings: ['article.post-list-panels'],
		initialize: function(options) {
			_.bindAll(this);
			this.curNum = options.curNum;
			this.collection = options.collection;
			console.log('postlistview init func..');
			this.render();
		},
		render: function() {
			console.log('postlistview render func..');
			this.addAll();
			return this;
		},
		addAll: function() {
			this.collection.each(this.addOne);
		},
		addOne: function(model, index) {
			console.log('index:' + index);
			/*var $curele = $(this.template(model.toJSON()));
			$curele.data('num', index);
			this.$('div.items').append($curele);*/
		}
	});

	return PostListView;
});