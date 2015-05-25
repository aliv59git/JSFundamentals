/*Assign all the possible JavaScript literals to different variables.*/

var intNumb = 5;
jsConsole.writeLine(intNumb);
var floatNumb = 3.456;
jsConsole.writeLine(floatNumb);
var str = "Pesho";
jsConsole.writeLine(str);
var boolN = true;
if (boolN === (10.0/2 !== 5)) {
    jsConsole.writeLine(boolN);
} else {
    jsConsole.writeLine("false");
}
var temp, tmp1, tmp2;
jsConsole.writeLine(temp);
temp = boolN;
jsConsole.writeLine(temp * tmp1);
jsConsole.writeLine(temp/tmp2);
jsConsole.writeLine(temp/0);

var obj = {};
jsConsole.writeLine(typeof (obj));
obj = 0;
jsConsole.writeLine(typeof (obj));
jsConsole.writeLine(obj/(!boolN));
delete obj;
jsConsole.writeLine(typeof (obj));
jsConsole.writeLine(obj);
tmp2 = null;
jsConsole.writeLine(tmp2);
jsConsole.writeLine(typeof (tmp2));













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
