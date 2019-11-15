window.enterSealayer = function (which, delay, duration, syncWith) {
  const layer = document.getElementById(which);
  return {
    code: ()=> {
      layer.classList.remove("used")
      layer.classList.add("active")
    },
    u: duration || 1,
    s: syncWith ? "with" : "after",
    d: delay || 0
  };
}

window.exitSealayer = function(which, delay, duration, syncWith) {
  const layer = document.getElementById(which);
  return {
    code: ()=> {
      layer.classList.remove("active");
      layer.classList.add("used")
    },
    u: duration || 1,
    s: syncWith ? "with" : "after",
    d: delay || 0
  };
}

window.resetSealayer = function(which, delay, duration, syncWith) {
  const layer = document.getElementById(which);
  return {
    code: ()=> {
      layer.classList.remove("used");
      layer.classList.remove("active");
    },
    u: duration || 1,
    s: syncWith ? "with" : "after",
    d: delay || 0
  };
}
