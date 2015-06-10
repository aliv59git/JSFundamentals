/*•	Write a JavaScript function to check if in a given expression the brackets are put correctly.*/

function correctBrackets() {
    var str, countOpenBracket = 0, i, len;
    str = document.getElementById('input-text').value;
    len = str.length;
    for (i = 0; i < len; i+=1) {
        if (str[i] === '(') {
            countOpenBracket += 1;
        }
        if (str[i] === ')') {
            countOpenBracket -= 1;
        }
        if (countOpenBracket < 0) {
            jsConsole.writeLine('false');
            return false;
        }
    }
    if (countOpenBracket !== 0) {
        jsConsole.writeLine('false');
        return false;
    } else {
        jsConsole.writeLine('true');
        return true;
    }

}