jinx.debug();

jinx.setup({
	autoReplace: true,
	rootArtPath: "./"
});

jinx.setDefaults({
	sync: 'with',
	effect: 'fadeIn'
});

const defaultTiming = 200;

window.story.state.time = {
	SHORT:  defaultTiming,
	MEDIUM: defaultTiming*2**1,
	LONG:   defaultTiming*2**2,
	XLONG:  defaultTiming*2**3,
};
