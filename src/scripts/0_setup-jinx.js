jinx.debug();

jinx.setup({
	autoReplace: true,
	rootArtPath: "./"
});

jinx.setDefaults({
	sync: 'with',
	effect: 'fadeIn'
});

jinx.wand.mode("static");

const defaultTiming = 400;

window.story.state.time = {
	XXSHORT: defaultTiming*0.1,
  XSHORT: defaultTiming*0.4,
	SHORT:  defaultTiming,
	MEDIUM: defaultTiming*2,
	LONG:   defaultTiming*4,
	XLONG:  defaultTiming*7,
};


window.story.preloadedImages = [];

function preload() {
  const srcs = [...arguments];
  srcs.forEach(src=>{
    const img = new Image();
    img.src = src;
    window.story.preloadedImages.push(img);
  })
}

preload(
  "ASSETS/2A/spritesheets/fish-sprites-1.png",
  "ASSETS/2A/spritesheets/fish-sprites-2.png",
  "ASSETS/2A/spritesheets/fish-sprites-3.png",
  "ASSETS/2A/spritesheets/fish-sprites-4.png"
);
