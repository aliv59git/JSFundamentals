/*•	Write an expression that checks if given integer is odd or even.*/

function oddOrEven() {
    var strN = document.getElementById("input-text").value;
    var numb = strN|0;
    if (numb % 2) {
        jsConsole.writeLine("true");
    } else {
        jsConsole.writeLine("false");
    }

}