jinx.debug();

jinx.setup({
	autoReplace: true,
	rootArtPath: "./"
});

jinx.setDefaults({
	sync: 'with',
	effect: 'fadeIn'
});

const defaultTiming = 400;

window.story.state.time = {
	XXSHORT: defaultTiming*0.1,
  XSHORT: defaultTiming*0.4,
	SHORT:  defaultTiming,
	MEDIUM: defaultTiming*2,
	LONG:   defaultTiming*4,
	XLONG:  defaultTiming*7,
};

// HACK: start preloading the big fish gif:
const fishImg = new Image();
fishImg.src = ('ASSETS/2A/fish-spritesheet.jpg');

window.story.preloadedImages = [
  fishImg
];
