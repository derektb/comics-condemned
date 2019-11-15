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
  const fW = hash.frameWidth
  const fH = hash.frameHeight
  const gW = hash.gridWidth
  const gH = hash.gridHeight
  const frameNum = hash.frameNum || gW*gH;
  const fps = hash.fps;
  const sel = hash.selector;

  let i = 0;
  const left = document.getElementById("fish-sprite-left");
  const middle = document.getElementById("fish-sprite-middle");
  const right = document.getElementById("fish-sprite-right");

  const advanceFrame = function() {
    if (left && middle && right) {
      const frameGridX = i % gW;
      const frameGridY = Math.floor( i / gW );
      const frameX = -1* frameGridX*fW;
      const frameY = -1*(frameGridY*fH) % (gH*fH)

      left.setAttribute('style',
        `background-position: ${frameX}px ${frameY}px;
        left: ${0 - i*(1200/72)}px`);
      middle.setAttribute('style',
        `background-position: ${frameX}px ${frameY}px;
        left: ${1200 - i*(1200/72)}px`);
      right.setAttribute('style',
        `background-position: ${frameX}px ${frameY}px;
        left: ${2400 - i*(1200/72)}px`);

      window.setTimeout(advanceFrame, 1000/fps)
      i = (i+1) % (gW*gH);
    }
  }

  advanceFrame();
}
