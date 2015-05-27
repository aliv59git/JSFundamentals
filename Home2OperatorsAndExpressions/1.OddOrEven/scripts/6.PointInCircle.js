/*•	Write an expression that checks if given point P(x, y) is within a circle K(O, 2).*/

function pointInCircle() {
    var x = +document.getElementById("input-text").value;
    var y = +document.getElementById("input-text1").value;
    if (x * x + y * y <= 4) {
        jsConsole.writeLine('true');
    } else {
        jsConsole.writeLine('false');
    }
}