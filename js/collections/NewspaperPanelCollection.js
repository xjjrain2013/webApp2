define(['models/NewspaperPanelModel'], function (NewspaperPanelModel) {
	var NewspaperPanelCollection = Backbone.Collection.extend({
		model: NewspaperPanelModel,
		url: './data/pages.json'
	});
	return NewspaperPanelCollection;
});