define(['views/PerListView'], function (PerListView) {
	var PostListView = Gbone.Panel.extend({
		skeleton: _.template('<article class = "post-list-panels"></article>'),
		template: _.template($('#post-lists').html()),
		transitionBindings: ['article.post-list-panels'],
		events: {
			'click a.style_black': 'goBack',
			'click a.post-list-item': 'showPost'
		},
		initialize: function(options) {
			_.bindAll(this);
			this.curNum = options.curNum;
			this.render();
		},
		render: function() {
			this.$("article.post-list-panels").html(this.template());
			this.$("article.post-list-panels").addClass(this.name);
			this.addAll();
			return this;
		},
		addAll: function() {
			this.collection.each(this.addOne);
		},
		addOne: function(model, index) {
			var view = new PerListView({
				model: model, 
				curIndex: index, 
				globalStage: this.stage,
				newsPanelNum: this.curNum
			});
			view.render();
			this.appendChildInto(view, 'div.items');
		},
		goBack: function() {
			this.stage.router.navigate('global-stage/newspaper-panel', true);
		},
		showPost : function(event){
			var num = $(event.currentTarget).data('num');
			this.stage.router.navigate('global-stage/post-' + this.curNum + '-' + num, true);
		}
	});

	return PostListView;
});