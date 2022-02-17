const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const btn = document.querySelector("button");
  const body = document.querySelector("body");
  function changeColor(){
    const Color1 = colors[Math.floor(Math.random() * colors.length)];
    const Color2 = colors[Math.floor(Math.random() * colors.length)];
    body.style.background = `linear-gradient(45deg, ${Color1}, ${Color2})`;
  }
  
  btn.addEventListener("click", changeColor);