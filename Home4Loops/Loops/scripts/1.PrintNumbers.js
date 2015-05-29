/*•	Write a script that prints all the numbers from 1 to N.*/

function printNumbers() {
    var numb = +document.getElementById("input-text").value;
    for (var i = 1; i <= numb; i+=1) {
        jsConsole.writeLine(i);
    }

}