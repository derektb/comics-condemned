function handleScreenSize() {
  story.windowWidth = window.innerWidth;
  story.windowHeight = window.innerHeight;

  if (story.windowWidth < 1350 || story.windowHeight < 650) {
    if (!story.state.ACCEPTED_SCREENSIZE) {
      document.getElementById("screensize-warn").classList.add("warning");
    }
  } else {
    document.getElementById("screensize-warn").classList.remove("warning");
  }
}

document.querySelector("body").insertAdjacentHTML("beforeend", story.render("SCREENSIZE"));

$(document).on("click", "#accept-screensize", function(){
  story.state.ACCEPTED_SCREENSIZE = true;
  document.getElementById("screensize-warn").classList.remove("warning")
});

$(window).resize(handleScreenSize);

handleScreenSize();
