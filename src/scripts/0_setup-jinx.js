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
const fishImg1 = new Image();
fishImg1.src = ('ASSETS/2A/fish-spritesheet-1.jpg');
const fishImg2 = new Image();
fishImg2.src = ('ASSETS/2A/fish-spritesheet-2.jpg');
const fishImg3 = new Image();
fishImg3.src = ('ASSETS/2A/fish-spritesheet-3.jpg');

window.story.preloadedImages = [
  fishImg1,
  fishImg2,
  fishImg3
];
