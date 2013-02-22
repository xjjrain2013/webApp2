define(['models/StarPanelModel'], function (StarPanelModel) {
	var StarPanelCollection = Backbone.Collection.extend({
		model: StarPanelModel,
		url: './data/testData.json'
	});
	return StarPanelCollection;
});