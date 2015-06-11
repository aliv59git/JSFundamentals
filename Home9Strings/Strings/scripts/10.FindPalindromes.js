/*•	Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".*/

function findPalindromes() {
    var text, words, len, i, result = [], temp;

    text = document.getElementById('input-text').value;
    words = text.split(/\W+/);
    len = words.length;
    for ( i = 0; i < len; i+=1) {
        if (words[i].length > 1) {
            temp = words[i].split('').reverse().join('');
        }

        if (temp === words[i]) {
            result.push(temp);
        }
    }


    jsConsole.writeLine(result.join(', '))
    return result;


}
