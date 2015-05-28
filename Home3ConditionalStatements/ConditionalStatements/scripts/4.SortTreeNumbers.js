/*•	Sort 3 real values in descending order.
•	Use nested if statements.
Note: Don’t use arrays and the built-in sorting functionality.*/

function sortTreeNumbers() {
    var a = +document.getElementById("input-text").value;
    var b = +document.getElementById("input-text1").value;
    var c = +document.getElementById("input-text2").value;
    if (a > b) {
        if (a > c) {
            if (b > c) {
                jsConsole.writeLine(a + ' ' + b + ' '+c);
            } else {
                jsConsole.writeLine(a + ' ' + c + ' '+b)
            }
        } else {
            jsConsole.writeLine(c + ' ' + a + ' '+b)
        }
    } else if (a > c) {
        jsConsole.writeLine(b + ' ' + a + ' ' + c)
    } else if(b > c){
        jsConsole.writeLine(b + ' ' + c + ' ' + a)
    } else {
        jsConsole.writeLine(c + ' ' + b + ' ' + a)
    }

}
