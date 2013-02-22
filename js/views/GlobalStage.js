/*define(function (require, exports, module) {
	require('gbone');
	GlobalStage = Gbone.Stage.extend({
		skeleton: _.html('<article class="viewport"></article>')
	});
});*/

define(function() {
	var GlobalStage = Gbone.Stage.extend({
		skeleton: _.template('<div class="viewport"></div>')
	});

	return GlobalStage;
});