/*•	Write a function to count the number of div elements on the web page*/

function numberOfDivElements() {
    var str, count = 0, i, tagElement, len, text = [];
    str = document.getElementById('input-text').value;
    tagElement = document.getElementById('input-text1').value;
    text =str.split('<'+tagElement);

    jsConsole.writeLine(text.length - 1);
}