window.autoAdvance = function(p) {
	return {
		code: function(){
			var matchPassageName = /(?:\[\[(?:->)?)(.+)(?:\]\])/;
			var nextPassageName = p.destination.main.match(matchPassageName)[1];
			$('body').attr('currentpassage', nextPassageName);

			$(document).one('jinx.animation.finished', function(){
				$(document).trigger(`jinx.panel.advance`, p);
			});
		}
	}
}
