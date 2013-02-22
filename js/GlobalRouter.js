define(function() {
	var GlobalRouter = Backbone.Router.extend({
		routes: {
			'': 'index'
		},
		index: function() {
			console.log('global router index...');
			this.navigate('global-stage/newspaper-panel', true);
		}
	});
	return GlobalRouter;
});