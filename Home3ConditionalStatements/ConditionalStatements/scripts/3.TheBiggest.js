/*•	Write a script that finds the biggest of three numbers.
•	Use nested if statements.*/

function theBiggest() {
    var a = +document.getElementById("input-text").value;
    var b = +document.getElementById("input-text1").value;
    var c = +document.getElementById("input-text2").value;
    if (a > b) {
        if (a > c) {
            jsConsole.writeLine(a);
        }
        else {
            jsConsole.writeLine(c);
        }
    } else if (b > c) {
        jsConsole.writeLine(b);
    } else {
        jsConsole.writeLine(c);
    }

}