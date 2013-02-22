define(function() {
	var GlobalStage = Gbone.Stage.extend({
		skeleton: _.template('<div class="viewport"></div>')
	});

	return GlobalStage;
});