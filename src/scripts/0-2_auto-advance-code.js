window.story.state.autoAdvance = function(p) {
	return {
		code: function(){
			var matchPassageName = /(?:\[\[(?:->)?)(.+)(?:\]\])/;
			var nextPassageName = p.destination.main.match(matchPassageName)[1];
			$('body').attr('currentpassage', nextPassageName);

			$(document).one('ended-playing-animation', function(){
				$(document).trigger('panel-clicked', p);
			});
		}
	}
}
