/*•	Write a function that finds all the occurrences of word in a text.
•	The search can be case sensitive or case insensitive.
•	Use function overloading.*/

function occurrencesOfWord(text, word, isCaseSensitive) {
    var str, word, count, len, i, wordL,
        text; 
    
    text = jsConsole.read('#input-text');
    str = text.split(/\W+/);
    word = jsConsole.read('#input-text1');
    isCaseSensitive = jsConsole.read('#input-text2').value;
    jsConsole.writeLine('</br>Original text: ' + '</br>' + text);
    jsConsole.writeLine('Word: ' + '</br>' + word);
    len=str.length;

    function occurrencesOfWordCaseInsensitive(word) {
        count = 0;
        wordL = word.toLowerCase()

        for (i = 0; i < len; i+=1) {
            if (str[i].toLowerCase() === wordL) {
                count += 1;
            }
        }
        return count;
    }
    function occurrencesOfWordCaseSensitive(word) {
        count = 0;

        for (i = 0; i < len; i += 1) {
            if (str[i] === word) {
                count += 1;
            }
        }
        return count;
    }

    switch (arguments.length) {
        case 2:
            return occurrencesOfWordCaseInsensitive(word); break;
        case 3:
            return isCaseSensitive? occurrencesOfWordCaseSensitive(word): occurrencesOfWordCaseInsensitive(word); break;
    }

    jsConsole.writeLine('Case insensitive: '+ occurrencesOfWord(text, word)+'</br>');
    jsConsole.writeLine('Case insensitive/sensitive (false/true): '+occurrencesOfWord(text, word, isCaseSensitive)+'</br>');


}