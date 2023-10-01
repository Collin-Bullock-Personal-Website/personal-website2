// fixed the javascript output.  Did a node in the terminal to check it!
const runningImg = document.getElementById("runningimg");
const codingImg = document.getElementById("codinginmg");
const rockingImg = document.getElementById("rockingimg");

const runningRender = document.getElementById("runningRender")

runningImg.addEventListener("click", function(){
  if (runningRender.style.display === "none") {
    runningRender.style.display = "block"
  } else {
    runningRender.style.display = "none"
  }
});








