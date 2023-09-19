// fixed the javascript output.  Did a node in the terminal to check it!
const running = document.getElementById("running");
const coding = document.getElementById("coding");
const rocking = document.getElementById("rocking");
const aboutMain = document.getElementById("aboutMain")


function renderAboutMain() {
  aboutMain.innerHTML= /* html */ `
  <img src="PICS/running5x7.jpg" id="runningimg" alt="running"/>

  <img src="PICS/coding5x7.jpg" id="codingimg" alt="coding"/>

 <img src="PICS/rocking 5x7.jpg" id="rockingimg" alt="rocking" />
  `
  let runningButton = aboutMain.querySelector("#runningimg");
  runningButton.addEventListener("click", () => {
    renderRunningCard()
  })
}


function renderRunningCard() {
 running.innerHTML = /* html */ `
 <div id="running">
 <img src="PICS/collin running.jpg">
 <p class="textarea">Collin is an avid runner, having completed a number of marathons, half-marathons, triathlons, and occassionally just walking around the corner in a manner that leaves him even sweatier than you might imagine.</p>
</div>
 `
}

function renderCodingCard() {
  let codingHTML = `
  <div id="coding">
    <img src="PICS/collin coding.jpg" id="codingimg">
      <p class="textarea">Collin has been coding since literally the 90's, before it was cool.  Doing it recreationally for many years led Collin into enrolling in University Of Illinois Chicago's Full Stack coding program, learning the ins and outs of front and back end web development.</p>
      </div>
  `
  coding.innerHTML=codingHTML;
 }

 function renderRockingCard() {
  let rockingHTML = `
  <div id="rocking">
  <img src="PICS/collin rocking.jpg">
  <p class="textarea">Music has been a huge part of Collin's life ever since he taught himself guitar by watching Green Day videos and soon started writing very obnoxious pop punk songs.  He's played in many bands, criss crossed the country in terrible smelling vans, and even found himself managing a School of Rock for a few years!</p>
</div>
  `
  rocking.innerHTML=rockingHTML;
 }


 renderAboutMain();