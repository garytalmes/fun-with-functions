// Global variables are accessible anytime, by any other part of your code.
var totalDaysRemaining = 12;
var framerWork;
var plumberWork;
var electricianWork;

function resetValues(){
  totalDaysRemaining = 12;
  framerWork = 0;
  plumberWork = 0;
  electricianWork = 0;
}


function start(){
  var start = confirm("If you're ready to build a house, click Ok below.");
  resetValues();
  if( start ){
    getTheFramers()
  } else {
    sayGoodbye()
  }
}

function sayGoodbye(){
  alert("No housing? We'll send Dizzy to check on you.")
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
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
  plumberWork = days * quality

  // Once this is done, time for the electricians!
  getTheElectricians()
}


/* ======= electricians ============================== */

function getTheElectricians(){
  var electricianQuality = getRandomNumber(1,5);

  var response = prompt(`Ok! Time for the electricians! They have a rating of ${electricianQuality}. How many days do they have? You have ${totalDaysRemaining} left`)

  // converting to number
  electricianDays = parseInt(response)

  if( electricianDays > totalDaysRemaining ){
    alert("Invalid answer! You only get 1 day instead.")
    electricianDays = 1;
  }

  totalDaysRemaining -= electricianDays
  howDidTheElectriciansDo(electricianQuality, electricianDays)
}

function howDidTheElectriciansDo(quality, days){
  electricianWork = quality * days
  inspectTheHouse()
}


/* ====== house inspection!! ======================== */

function inspectTheHouse(){
  // The maximum number of points that can be achieved if everything goes perfectly is 60.

  console.log("framer", framerWork)
  console.log("plumber", plumberWork)
  console.log("elec", electricianWork)

  var finalScore = framerWork + plumberWork + electricianWork




  if( finalScore < 10 ){
    alert("Final inspection report: This house should be condemned.")
  }

  else if( finalScore < 25 ){
    alert("Final inspection report: This house is terrible. Maybe the in-laws can live here.")
  }

  else if( finalScore < 40 ){
    alert("Final inspection report: Not too shabby. But pray for good weather.")
  }

  else {
    alert("Final inspection report: Great job! This house is ready for your instructor!")
  }

  start()

}

start()