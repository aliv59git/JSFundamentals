/*•	Write an expression that checks for given integer if its third digit (right-to-left) is 7.*/

function thirdDigit7() {
    var numb = +document.getElementById('input-text').value;
    if (numb < 0) {
        numb = -numb;
    }
    if ((numb / 100 | 0) % 10 === 7) {
        jsConsole.writeLine('true');
    } else {
        jsConsole.writeLine('false');
    }

}

