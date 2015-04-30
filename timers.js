//set up variables

var reset = document.querySelector("#reset");
var start = document.querySelector("#start");
var pause = document.querySelector("#pause");
var timer = document.querySelector("#timer");
var counter = 0;
var enMarche = 0;  ///enMarche === "moving" or "working" in french


//set up functions

//display timer on HTML page.  increases counter by 1 each time it is called, and is displayed on page.
var startTimer = function(){
  timer.innerHTML = "Time elapsed: " + counter;
  counter ++;
}
//start counting on click.  Checks enMarche to see if it is 0.  If zero, sets enMarche to 1.  interval, via the setInterval action, is called every 1000 miliseconds (ie: every second), which calls startTimer each time and increments counter variable by 1 each time.
start.addEventListener("click", function(){
  if (enMarche === 0){
    interval = setInterval(startTimer, 1000);
    enMarche = 1
  }
})

//pauses timer.  Sets enMarche to 0.  the clearInterval function cancels the repeated action set up by the setInterval action but does not change counter variable displayed on screen.
pause.addEventListener("click", function(){
  clearInterval(interval);
  enMarche = 0
})

//resets timer.  On click, clearInterval cancels action set up by setInterval action above.  Counter is set to zero.
reset.addEventListener("click", function(){
  clearInterval(interval);
  counter = 0
  timer.innerHTML = "Stop Watch";
  enMarche = 0
})
