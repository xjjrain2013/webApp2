define(function (require, exports, module) {
	App.View.Home = Backbone.View.extend({
			template : $('#home_template').html(),
			initialize : function () {
				this.render();
			},
			render : function () {
				this.$el.append(this.template);
			}
		});
	App.View.List = Backbone.View.extend({
			template : $('#list_template').html(),
			initialize : function () {
				this.render();
			},
			render : function () {
				this.$el.append(this.template);
			}
		});
});