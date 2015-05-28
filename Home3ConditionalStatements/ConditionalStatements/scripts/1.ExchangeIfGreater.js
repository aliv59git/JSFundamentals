/*•	Write an if statement that takes two double variables a and b and exchanges their 
values if the first one is greater than the second.
•	As a result print the values a and b, separated by a space.*/

function exchangeIfGreater() {
    var a = +document.getElementById("input-text").value;
    var b = +document.getElementById("input-text1").value;
    if (a > b) {
        //a = a + b;
        //b = a - b;
        //a = a - b;
        var temp = a;
        a = b;
        b = temp;
    }
    jsConsole.writeLine(a + ' ' + b);
}