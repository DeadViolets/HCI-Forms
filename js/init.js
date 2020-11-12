const startButton = document.getElementById("start_button");
const endButton = document.getElementById("end_button");
const pTime = document.getElementById("p_time");

var calibrationTimerStart;
var calibrationTimerEnd;

$(document).ready(function(){
    $('select').formSelect();
});

document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    var options = {
        minDate: new Date(1900),
        maxDate: currentDate,
        yearRange: [1900, currentDate.getFullYear()]
    };
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

function startTimer() {
    calibrationTimerStart = Date.now();
    console.log(1);
}

function endTimer() {
    calibrationTimerEnd = Date.now();
    let result = calibrationTimerEnd - calibrationTimerStart;
    console.log(result);
    pTime.innerHTML = "Time: " + result / 1000;
    console.log(2);
}
