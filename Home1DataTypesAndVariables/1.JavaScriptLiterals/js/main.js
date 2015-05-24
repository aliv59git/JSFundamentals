
var intNumb = 5;
jsConsole.writeLine(intNumb);












function timerFunc() {
    var now = new Date();
    var hours = now.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    var minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var seconds = now.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML = hours + " : " + minutes + " : " + seconds;

}

var timer;

function start() {
    timer=setInterval(timerFunc, 1000);
}
function stop() {
    clearInterval(timer);
}
