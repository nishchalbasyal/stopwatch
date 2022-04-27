var seconds = 00;
var tens = 00;
var minute = 00;
var hour = 00;
var appendTens = document.getElementById('tens');
var appendMinutes = document.getElementById('minute');
var appendHours = document.getElementById('hour');
var appendSplit = document.getElementById('split-result');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.querySelector('#button-start');
var buttonStop = document.querySelector('#button-stop');
var buttonReset = document.querySelector('#button-reset');
var buttonSplit = document.querySelector('#button-split');

var intervals; //to store intervals

function startTimer(){
    tens++;

    if(tens<9){
        appendTens.innerHTML="0"+ tens;
    }

    if (tens>9){
        appendTens.innerHTML=tens;
    }

    if(tens>99){
        seconds++;
        appendSeconds.innerHTML ="0"+seconds;
        tens = 0;
        appendTens.innerHTML ="0" + 0;
    }

    if (seconds>9){
        appendSeconds.innerHTML = seconds;

    }
    if(seconds>59){
        minute++;
        appendMinutes.innerHTML = "0"+ minute;
        seconds = 0;
        tens = 0;
        appendSeconds.innerHTML ="0" + 0;
        appendTens.innerHTML ="0" + 0;
}

if(minute>9){
    appendMinutes.innerHTML = minute;
}

if(minute>59){
   hour++;
   appendHours.innerHTML = "0"+hour;
   minute = 0;
   seconds = 0;
   tens = 0;
   appendMinutes.innerHTML ="0" + 0;
   appendSeconds.innerHTML ="0" + 0;
   appendTens.innerHTML ="0" + 0;

}

if(hour>9){
    appendHours.innerHTML = hour;
}


}

 
buttonStart.onclick = function(){
    intervals = setInterval(startTimer);
 }

buttonStop.onclick = function(){
    clearInterval(intervals);
}

buttonSplit.onclick = function(){
    appendSplit.innerHTML += `${hour}:${minute}:${seconds}:${tens} </br>`;
}

buttonReset.onclick = function(){
    clearInterval(intervals);
    hour = "00";
    minute = "00";
    tens = "00";
    seconds = "00";
    appendHours.innerHTML = hour;
    appendMinutes.innerHTML = minute;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
    appendSplit.innerHTML = "";
}