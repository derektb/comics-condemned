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
	XSHORT: defaultTiming*2**-1,
	SHORT:  defaultTiming*2**0,
	MEDIUM: defaultTiming*2**1,
	LONG:   defaultTiming*2**2,
	XLONG:  defaultTiming*2**3,
};
