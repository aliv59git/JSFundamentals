/*•	Write a function that finds all the occurrences of word in a text.
•	The search can be case sensitive or case insensitive.
•	Use function overloading.*/
(function () {
    function occurrencesOfWord(text, word, caseSensitive) {
        var str, text;
        text = jsConsole.read('#input-text');

        str = text.split(new CharArray(' ', ', ', '.', '!', '?', ';', ':'));
        jsConsole.wrteLine(str.join('|'));
        //function occurrencesOfWordCaseInsensitive(word) {
        //    var count = 0,
        //        lowerWord = word[0].toLowerCase()
        //    upperWord = word[0].toUpperCase();

        //}




    }
})();