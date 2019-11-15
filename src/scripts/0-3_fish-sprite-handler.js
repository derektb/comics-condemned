window.fishSpriteHandler = function(){
  return {
    code: function() {
      ensprite(spriteInfo);
    },
    s: "with"
  }
}

const spriteInfo = {
  frameWidth: 1200,
  frameHeight: 447,
  gridWidth: 6,
  gridHeight: 12,
  fps: 12,
};

function ensprite(hash){
  const frameWidth = hash.frameWidth
  const frameHeight = hash.frameHeight
  const gridWidth = hash.gridWidth
  const gridHeight = hash.gridHeight
  const frameNum = hash.frameNum || gridWidth*gridHeight;
  const fps = hash.fps;
  const sel = hash.selector;

  let i = 0;
  const left = document.getElementById("fish-sprite-left");
  const middle = document.getElementById("fish-sprite-middle");
  const right = document.getElementById("fish-sprite-right");
  const far = document.getElementById("fish-sprite-far");

  const advanceFrame = function() {
    if (left && middle && right && far) {
      const frameGridX = i % gridWidth;
      const frameGridY = Math.floor( i / gridWidth );
      const frameX = -1* frameGridX*frameWidth;
      const frameY = -1*(frameGridY*frameHeight) % ((gridHeight/4)*(frameHeight))
      // bad math
      let sheetNum;
      if (i < 18) sheetNum = 1;
      else if (i < 36) sheetNum = 2;
      else if (i < 54) sheetNum = 3;
      else sheetNum = 4;

      left.setAttribute('style',
        `background-image: url('ASSETS/2A/spritesheets/fish-sprites-${sheetNum}.png');
        background-position: ${frameX}px ${frameY}px;
        left: ${-1200 - i*(1200/72)}px`);
      middle.setAttribute('style',
        `background-image: url('ASSETS/2A/spritesheets/fish-sprites-${sheetNum}.png');
        background-position: ${frameX}px ${frameY}px;
        left: ${0 - i*(1200/72)}px`);
      right.setAttribute('style',
        `background-image: url('ASSETS/2A/spritesheets/fish-sprites-${sheetNum}.png');
        background-position: ${frameX}px ${frameY}px;
        left: ${1200 - i*(1200/72)}px`);
      far.setAttribute('style',
        `background-image: url('ASSETS/2A/spritesheets/fish-sprites-${sheetNum}.png');
        background-position: ${frameX}px ${frameY}px;
        left: ${2400 - i*(1200/72)}px`);

      window.setTimeout(advanceFrame, 1000/fps)
      i = (i+1) % (gridWidth*gridHeight);
    }
  }

  advanceFrame();
}
