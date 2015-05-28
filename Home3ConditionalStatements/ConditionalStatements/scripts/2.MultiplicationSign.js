/*•	Write a script that shows the sign (+, - or 0) of the product of three real numbers, 
without calculating it.
•	Use a sequence of if operators.*/

function multiplicationSign() {
    var a = +document.getElementById("input-text").value;
    var b = +document.getElementById("input-text1").value;
    var c = +document.getElementById("input-text2").value;
    var sign = 0;
    if (a < 0) {
        sign += 1;
    }
    if (b < 0) {
        sign += 1;
    }
    if (c < 0) {
        sign += 1;
    }
    if (a===0 || b===0 || c===0) {
        jsConsole.writeLine("0");
    } else if (sign % 2) {
        jsConsole.writeLine("-");
    } else {
        jsConsole.writeLine("+");
    }

}