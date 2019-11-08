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
const fishGif = new Image();
fishGif.src = ('ASSETS/2A/animated-fishes-10.gif');

window.story.preloadedImages = [
  fishGif
];

window.enterSealayer = function (which, delay) {
  const layer = document.getElementById(which);
  return {
    code: ()=> {
      layer.classList.remove("used")
      layer.classList.add("active")
    },
    s: "after",
    d: delay || 0
  };
}

window.exitSealayer = function(which, delay) {
  const layer = document.getElementById(which);
  return {
    code: ()=> {
      layer.classList.remove("active");
      layer.classList.add("used")
    },
    s: "after",
    d: delay || 0
  };
}

window.resetSealayer = function(which, delay) {
  const layer = document.getElementById(which);
  return {
    code: ()=> {
      layer.classList.remove("used");
      layer.classList.remove("active");
    },
    s: "after",
    d: delay || 0
  };
}
