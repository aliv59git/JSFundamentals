/*•	Write a boolean expression that checks for given integer if it can be divided 
(without remainder) by 7 and 5 in the same time.*/

function divisionBy7And5() {
    var str = document.getElementById("input-text").value;
    var numb = str|0;
    if ((numb % 5===0) && (numb % 7===0)) {
        jsConsole.writeLine("true");
    } else {
        jsConsole.writeLine("false");
    }
}