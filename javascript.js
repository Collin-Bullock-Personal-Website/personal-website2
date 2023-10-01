// fixed the javascript output.  Did a node in the terminal to check it!
const runningImg = document.getElementById("runningimg");
const codingImg = document.getElementById("codingimg");
const rockingImg = document.getElementById("rockingimg");

const runningRender = document.getElementById("runningRender")
const codingRender = document.getElementById("codingRender")
const rockingRender = document.getElementById("rockingRender")

runningImg.addEventListener("click", function(){
  if (runningRender.style.display === "none") {
    runningRender.style.display = "flex"
  } else {
    runningRender.style.display = "none"
  }
});

codingImg.addEventListener("click", function(){
  if (codingRender.style.display === "none") {
    codingRender.style.display = "flex"
  } else {
    codingRender.style.display = "none"
  }
});

rockingImg.addEventListener("click", function() {
  if (rockingRender.style.display === "none") {
    rockingRender.style.display = "flex"
  } else {
    rockingRender.style.display = "none"
  }
});








