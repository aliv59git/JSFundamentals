/*•	Write a script that asks for a digit (0-9), and depending on the input, shows 
the digit as a word (in English).
•	Print “not a digit” in case of invalid input.
•	Use a switch statement.*/

function digitAsWord() {
    var digit = +document.getElementById("input-text").value;
    switch (digit) {
        case 0: jsConsole.writeLine('zero'); break;
        case 1: jsConsole.writeLine('one'); break;
        case 2: jsConsole.writeLine('two'); break;
        case 3: jsConsole.writeLine('three'); break;
        case 4: jsConsole.writeLine('four'); break;
        case 5: jsConsole.writeLine('five'); break;
        case 6: jsConsole.writeLine('six'); break;
        case 7: jsConsole.writeLine('seven'); break;
        case 8: jsConsole.writeLine('eight'); break;
        case 9: jsConsole.writeLine('nine'); break;
        default: jsConsole.writeLine('not a digit'); break;

    }
}