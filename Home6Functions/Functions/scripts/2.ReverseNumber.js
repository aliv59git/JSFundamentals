/*•	Write a function that reverses the digits of given decimal number.*/

function reverseNumber() {
    var s, str, result;

    function reverse(s) {
        s = s || "";
        return s.split('').reverse().join('');
    }

    str = jsConsole.read('#input-text');
    result = reverse(str);   
    jsConsole.writeLine(result);
}