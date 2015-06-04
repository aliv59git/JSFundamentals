/*•	Write a function that finds all the occurrences of word in a text.
•	The search can be case sensitive or case insensitive.
•	Use function overloading.*/

function occurrencesOfWord(text, isCaseSensitive) {
    var text, words, count, len, i, word, isCaseSensitive;
    var isCaseSensitive = isCaseSensitive || false;

    var text = 'Velit mollis odio SOLLicitudin lacinia aliquam posuere, sapien elementum lobortis tincidunt, turpis dui ornare nisl, sollicitudin interdum turpis nunc eget sem nulla eu ultricies orci praesent id augue nec lorem pretium congue sit amet ac nunc fusce iaculis lorem eu diam hendrerit at mattis purus dignissim vivamus mauris tellus, fringilla vel dapibus a, blandit quis erat vivamus elementum aliquam luctus etiam fringilla pretium sem vitae sodales mauris id nulla est praesent laoreet, metus vel auctor aliquam, eros purus vulputate leo, eget consequat neque quam id tellus duis ultricies tempor tortor, vitae dignissim ligula mattis nec in hac habitasse platea dictumst.';
    text += jsConsole.read('#input-text');
    isCaseSensitive = jsConsole.read('#input-text1').value;

    switch (arguments.length) {
        case 1:
            return countWords(words); break;
        case 2:
            return isCaseSensitive ? countWordsCS(words, isCaseSensitive) : countWords(words); break;
    }

    function getWords(text) {
        words = text.split(/\W+/);
        len = words.length;
        for (i = 0; i < len; i += 1) {
            if (words[i] == '') {
                words.splice(i, 1);
            }
        }
        return words;
    }
    words = getWords(text);
    var wordCount = countWords(words);

    function countWords(words) {
        var wordCount = {};
        word = {};
        for (i in words) {
            word = words[i].toLowerCase();
            if (wordCount[word]) {
                wordCount[word] += 1;
            } else {
                wordCount[word] = 1;
            }
        }
        return wordCount;
    }


    function countWordsCS(words, isCaseSensitive) {
        var wordCount = {};
        word = {};
        for (var i in words) {
            word = words[i];
            if (wordCount[word]) {
                wordCount[word] += 1;
            } else {
                wordCount[word] = 1;
            }
        }
        return wordCount;
    }

    
    for (var word in wordCount) {
        jsConsole.writeLine(word + ' -> ' + wordCount[word]);
    }

}