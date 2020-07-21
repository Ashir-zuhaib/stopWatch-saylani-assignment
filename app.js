var min = 0;
var sec = 0;
var minisec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var minisecHeading = document.getElementById("minisec");
var interval;

function timer(){
    minisec++
    minisecHeading.innerHTML = minisec;
    if(minisec >= 100){
        sec++
        secHeading.innerHTML = sec
        minisec = 0
    }
    else if(sec >= 60){
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}
function start(){
interval = setInterval (timer,10)

}
function pause(){
    clearInterval(interval)
}
function reset(){
    min = 0;
    sec = 0;
    minisec = 0;
    minisecHeading.innerHTML = minisec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    stop()
}