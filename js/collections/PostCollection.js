define(['models/PostModel'], function(PostModel) {
	var num = 0;
	var PostCollection = Backbone.Collection.extend({
		initialize: function(options) {
			num = options.num;
			//console.log('coll num: ' + this.num);
			console.log('coll url: ' + this.url());
			//this.url = './data/postList' + this.num + '.json';
			//console.log('coll url: ' + this.url);
			//this.fetch();

		},
		model: PostModel,
		url: function() {
			return './data/postList' + num + '.json';
		}
	});

	return PostCollection;
});