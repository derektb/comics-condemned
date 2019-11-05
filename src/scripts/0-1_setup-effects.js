jinx.effects.create("none", {
	fromOpacity: 1,
	opacity: 1
});
jinx.effects.create("hidden", {
	fromOpacity: 0,
	opacity: 0
});

// general

var easeTransitionAmount = 50;
jinx.effects.extend("fadeIn", "easeDown", {
	fromPosition: [0, -1*easeTransitionAmount, 0],
	position: [0,0,0]
});
jinx.effects.extend("fadeIn", "easeUp", {
	fromPosition: [0, easeTransitionAmount, 0],
	position: [0,0,0]
});
jinx.effects.extend("fadeIn", "easeLeft", {
	fromPosition: [easeTransitionAmount, 0, 0],
	position: [0,0,0]
});
jinx.effects.extend("fadeIn", "easeRight", {
	fromPosition: [-1*easeTransitionAmount, 0, 0],
	position: [0,0,0]
});

jinx.effects.extend("fadeOut", "easeOutUp", {
	fromPosition: [0,0,0],
	position: [0, -1*easeTransitionAmount, 0],
  easing: function (t) { return t*t*t },
});

jinx.effects.extend('easeDown', 'easeDownTitle', {
	fromScale: [0.9,0.9,0],
  scale: [1,1,1]
});

jinx.effects.create('easeBoth', {
  easing: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
})

//

jinx.effects.extend('fadeIn', 'fadeInTrash', {
	fromPosition: [30, 50, 0],
	position: [0,0,0]
});
