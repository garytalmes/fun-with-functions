// Global variables are accessible anytime, by any other part of your code.
var totalDaysRemaining = 12;
var framerWork = 0;
var plumberWork = 0;
var electricianWork = 0;


function start(){
  var start = confirm("If you're ready to build a house, click Ok below.");
  if( start ){
    getTheFramers()
  } else {
    sayGoodbye()
  }
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function sayGoodbye(){
  alert("No housing? We'll send Dizzy to check on you.")
}


/* ======= framers =================================== */ 

function getTheFramers(){
  // Each contractor has a random skill level between 1 and 5.
  var framerQuality = getRandomNumber(1,5);

  var response = prompt(`Ok! Time to get the framers in! They have a quality rating of ${framerQuality}. How many days do they have? You have ${totalDaysRemaining} left`)

  framingDays = parseInt(response)

  if( framingDays > totalDaysRemaining ){
    alert("Invalid answer! You only get 1 day instead.")
    framingDays = 1;
  }

  totalDaysRemaining -= framingDays
  howDidTheFramersDo(framerQuality, framingDays)
}

function howDidTheFramersDo(quality, days){
  // The quality of the work the framers did will be the # of days * their quality
  framerWork = days * quality

  // Once this is done, time for the plumbers!
  getThePlumbers()
}




/* ======= plumbers ================================== */

function getThePlumbers(){
  var plumberQuality = getRandomNumber(1,5);

  var response = prompt(`Ok! Time for the plumbers! They have a rating of ${plumberQuality}. How many days do they have? You have ${totalDaysRemaining} left`)

  plumberDays = parseInt(response)

  if( plumberDays > totalDaysRemaining ){
    alert("Invalid answer! You only get 1 day instead.")
    plumberDays = 1;
  }

  totalDaysRemaining -= plumberDays
  howDidThePlumbersDo(plumberQuality, plumberDays)
}

function howDidThePlumbersDo(quality, days){

  // TODO: Use the work above as an example and finish this area. Call the getTheElectricians() function at the end.

}




/* ======= electricians ============================== */

function getTheElectricians(){
  
  // TODO: Use the work above as an example and finish this area. Call the inspectTheHouse() function at the end

}




/* ====== house inspection!! ======================== */

function inspectTheHouse(){
  // The maximum number of points that can be achieved if everything goes perfectly is 60.

  var finalScore = framerWork + plumberWork + electricianWork

  if( finalScore < 10 ){
    alert("Final inspection report: This house should be condemned.")
  }

  // finish the rest of the scores!

}

start()