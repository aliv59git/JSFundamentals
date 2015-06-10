/*•	Write a JavaScript function that reverses a string and returns it.*/

function reverseString() {
    var str, result;
    str = document.getElementById('input-text').value;
    result = str.split('').reverse().join('');
    jsConsole.writeLine(result);
    return result;

}