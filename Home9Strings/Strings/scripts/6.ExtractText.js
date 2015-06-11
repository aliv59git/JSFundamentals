/*•	Write a function that extracts the content of a html page given as text.
•	The function should return anything that is in a tag, without the tags.*/

function extractText() {
    var text, inTag, len, result='', i;
    text = document.getElementById('input-text').value;
    len = text.length;

    function extractTextFromHtml(text) {
        for ( i = 0; i < len; i+=1) {
            if (text[i] === '<') {
                inTag = true;
            }
            if (text[i] === '>') {
                inTag = false;
            }
            if (!inTag && text[i]!=='<' && text[i]!=='>') {
                result += text[i];
            }
        }
        jsConsole.writeLine(result);
        return result;
    }
    extractTextFromHtml(text);
}