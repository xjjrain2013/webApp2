define(function() {
	var PanelModel = Backbone.Model.extend({
		initialize: function(attributes, options) {
			console.log('panel model ....');
			this.panels = options.panels;
			//this.searcher = option.searcher;
			this.getPanelImg();
			this.getArticleList();
			/*this.op = options.op;
			switch(this.op) {
				case 'getPanelImg':
					this.getPanelImg();
					break;
				case 'getArticleList': 
					this.getArticleList();
					break;
				default: 
					console.log('你没有对数据进行筛选操作...');
			}*/
			
		},
		getPanelImg: function() {
			//var allImgSrc = _.pluck(this.panels, 'panelImg');
			var allImgSrc = this.panels.pluck('panelImg');
			this.set({
				panelImg: allImgSrc
			});
			console.log(allImgSrc);
		},

		getArticleList: function(){
			var allArticale = this.panels.pluck('articleList');
			this.set({
				allArticles: allArticale
			});
			console.log(allArticale);
		}
	});

	return PanelModel;
});