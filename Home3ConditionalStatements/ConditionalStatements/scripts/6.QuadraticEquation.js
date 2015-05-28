/*•	Write a script that reads the coefficients a, b and c of a quadratic equation 
ax2 + bx + c = 0 and solves it (prints its real roots).
•	Calculates and prints its real roots.
Note: Quadratic equations may have 0, 1 or 2 real roots.*/

function quadraticEquation() {
    var a = +document.getElementById("input-text").value;
    var b = +document.getElementById("input-text1").value;
    var c = +document.getElementById("input-text2").value;
    var d = b*b - 4*a*c;
    if (d === 0) {
        jsConsole.writeLine("x1 = x2 = " + (-b / (2 * a)));
    } else if (d < 0) {
        jsConsole.writeLine("no real roots")
    } else {
        jsConsole.writeLine("x1 = " + (-b - Math.sqrt(d)) / (2*a) + "; x2 = " + (-b + Math.sqrt(d)) / (2*a));
    }

}