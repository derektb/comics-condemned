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
	position: [0, -1*easeTransitionAmount, 0]
});

jinx.effects.extend('easeDown', 'trash', {
	fromPosition: [0,-100,0],
	fromRotation: [0,0,.25],
	rotation: [0,0,0]
});

//

jinx.effects.extend('fadeIn', 'fadeInTrash', {
	fromPosition: [30, 50, 0],
	position: [0,0,0]
});
