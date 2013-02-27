define(['views/PostView', 'transitions/up_down'], function(PostView, up_down) {
	var PerListView = Backbone.View.extend({
		template: _.template($('#post-list-item').html()),
		tagName: 'a',
		initialize: function(options) {
			this.model = options.model;
			this.curIndex = options.curIndex;
			this.newsPanelNum = options.newsPanelNum;
			this.globalStage = options.globalStage;
			var postView = new PostView({
				name: 'post-' + this.newsPanelNum + '-' + this.curIndex,
				model: this.model,
				newsPanelNum: this.newsPanelNum,
				stage: this.globalStage
			});

			postView.addTransition(up_down);
			postView.routePanel(function(trans) {
				$(postView.el).children().hide();
				postView.active({trans: trans || 'left'});
			});
		},
		render: function() {
			this.$el.data('num', this.curIndex + 1).addClass('post-list-item');
			this.$el.attr('href', 'javascript:void(0)');
			this.$el.html(this.template({model: this.model}));
			return this;
		},
		createPost: function() {

		}
	});

	return PerListView;
});