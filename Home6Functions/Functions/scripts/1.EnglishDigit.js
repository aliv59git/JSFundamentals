/*•	Write a function that returns the last digit of given integer as an English word.*/

function englishDigit() {
    var numb, lastDigit;

    numb = jsConsole.readInteger('#input-text');
    numb = numb | 0;
    if (numb < 0) {
        numb = -numb;
    }
    lastDigit = numb % 10;
    switch (lastDigit) {
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
        default: jsConsole.writeLine('Invalid number!'); break;
    }
    //jsConsole.writeLine("Numb is: "+numb);
}