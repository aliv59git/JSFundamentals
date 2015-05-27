/*•	Write an expression that checks for given point P(x, y) if it is within 
 *  the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).*/

function pointInCircleAndOutsideRectangle() {
    var x = +document.getElementById("input-text").value;
    var y = +document.getElementById("input-text1").value;
    var inCircle, outRectangle;
    if ((x - 1) * (x - 1) + (y - 1) * (y - 1) <= 9) {
        inCircle = true;
    } else {
        inCircle = false;
    }
    if (y <= 1 && y >= -1 && x >= -1 && x <= 5) {
        outRectangle = false;
    } else {
        outRectangle = true;
    }
    if (inCircle && outRectangle) {
        jsConsole.writeLine('yes');
    } else {
        jsConsole.writeLine('no');
    }
}