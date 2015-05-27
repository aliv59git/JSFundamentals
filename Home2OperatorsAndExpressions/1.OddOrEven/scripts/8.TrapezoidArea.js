/*•	Write an expression that calculates trapezoid's area by given sides a and b and height h.*/

function trapezoidArea() {
    var a = +document.getElementById("input-text").value;
    var b = +document.getElementById("input-text1").value;
    var h = +document.getElementById("input-text2").value;
    if (a < 0 || b < 0 || h < 0) {
        jsConsole.writeLine('Invalid data');
    }
    jsConsole.writeLine(h * (a + b) / 2);
}