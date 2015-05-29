/*•	Write a script that prints all the numbers from 1 to N, that are 
 *  not divisible by 3 and 7 at the same time*/

function numbersNotDivisible() {
    var numb = +document.getElementById("input-text").value;
    var i;
    for (i = 1; i <= numb; i+=1) {
        if (!((i % 3 ===0) && (i % 7)===0)) {
            jsConsole.writeLine(i);
        }
    }


}