jinx.effects.create("none", {
	fromOpacity: 1,
	opacity: 1
});
jinx.effects.create("hidden", {
	fromOpacity: 0,
	opacity: 0
});

jinx.effects.create("nearly-hidden", {
	fromOpacity: 0.001,
	opacity: 0.001
});

// general

var easeTransitionAmount = 50;
jinx.effects.extend("fadeIn", "easeDown", {
	fromPosition: [0, -1*easeTransitionAmount, 0],
	position: [0,0,0]
});
jinx.effects.extend("fadeIn", "easeDownSmall", {
	fromPosition: [0, -0.5*easeTransitionAmount, 0],
	position: [0,0,0]
});
jinx.effects.extend("fadeIn", "easeUp", {
	fromPosition: [0, easeTransitionAmount, 0],
	position: [0,0,0]
});
jinx.effects.extend("fadeIn", "easeUpSmall", {
	fromPosition: [0, easeTransitionAmount*0.5, 0],
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

jinx.effects.create("fadeAway", {
  fromOpacity: 1,
  opacity: 0,
  easing: function (t) { return t*t*t },
});

//

jinx.effects.extend('fadeIn', 'fadeInTrash', {
	fromPosition: [30, 50, 0],
	position: [0,0,0]
});

//

jinx.effects.extend("fadeIn", "Bag Bubbles", {
  fromPosition: [10,25,0],
  position: [0,0,0]
}),

//

jinx.effects.extend("easeRight", "easeRightDown", {
	fromPosition: [-1*easeTransitionAmount, -25, 0],
	position: [0,0,0]
});
jinx.effects.extend("easeLeft", "easeLeftDown", {
	fromPosition: [easeTransitionAmount, -25, 0],
	position: [0,0,0]
});
