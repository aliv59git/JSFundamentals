/*•	Write an expression that calculates rectangle’s area by given width and height.*/

function rectangleArea() {
    var width =+document.getElementById("input-width").value;
    var height =+document.getElementById("input-height").value;
    jsConsole.writeLine(width * height);
}