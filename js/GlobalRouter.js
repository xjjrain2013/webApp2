define(function() {
	var GlobalRouter = Backbone.Router.extend({
		routes: {
			'': 'index'
		},
		index: function() {
			this.navigate('global-stage/star-panel', true);
		}
	});
	return GlobalRouter;
});