$(`<div id="bubbles"></div>`).insertBefore("#passages");
const bubbles = document.getElementById("bubbles");
story.windowWidth = window.innerWidth;
story.windowHeight = window.innerHeight;

window.creatingBubbles = function() {
  if (story.state.GENERATE_TITLE_BUBBLES) {
    makeRandomBubble()

    const short = 100;
    const long = 600;
    const delay = 200;

    const nextBubble = (
      delay +
      (Math.random()*short + Math.random()*short) +
      (Math.random()*long + Math.random()*long)
    );
    window.setTimeout(creatingBubbles, nextBubble);
  }
}

window.makeRandomBubble = function(){
  const randNum = Math.ceil( Math.random()*20 );
  const randomBubbleSrc = (
`ASSETS/title-bubbles/bub${randNum}.png`
  );

  let img = document.createElement("img");
  img.src = randomBubbleSrc;

  let imgDiv = document.createElement("div")
  imgDiv.classList.add("bubble");
  imgDiv.appendChild(img);

  const randX = Math.random()*story.windowWidth;
  const randY = (Math.random()*story.windowHeight)+100;
  const duration = 7000;

  bubbles.insertAdjacentElement("afterbegin", imgDiv);

  snabbt(imgDiv, {
    fromPosition: [randX, randY, 0],
    position: [randX, randY-300, 0],
    duration: duration,
    complete: function() {
      img.remove()
      img = null;
      imgDiv.remove();
      imgDiv = null;
    }
  })
}
