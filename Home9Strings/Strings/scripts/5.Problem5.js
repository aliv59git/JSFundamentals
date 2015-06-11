/*•	Write a function that replaces non breaking white-spaces in a text with &nbsp;*/

function problem5() {
    var text, result = '';

    text = document.getElementById('input-text').value;
    for (var i = 0, len = text.length; i < len; i+=1) {
        if (text[i] !== ' ') {
            result += text[i];
        } else {
            result += '&nbsp';
        }
    }

    console.log(result);
    return result;
}