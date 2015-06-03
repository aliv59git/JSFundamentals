/*•	Write a function that finds all the occurrences of word in a text.
•	The search can be case sensitive or case insensitive.
•	Use function overloading.*/

function occurrencesOfWord(text, isCaseSensitive) {
    var text, words, count, len, i, word, isCaseSensitive; 
    
    text = jsConsole.read('#input-text');
    isCaseSensitive = jsConsole.read('#input-text1').value;

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
        wordCount = {};
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
    //var text = 'Velit mollis odio sollicitudin lacinia aliquam posuere, sapien elementum lobortis tincidunt, turpis dui ornare nisl, sollicitudin interdum turpis nunc eget sem nulla eu ultricies orci praesent id augue nec lorem pretium congue sit amet ac nunc fusce iaculis lorem eu diam hendrerit at mattis purus dignissim vivamus mauris tellus, fringilla vel dapibus a, blandit quis erat vivamus elementum aliquam luctus etiam fringilla pretium sem vitae sodales mauris id nulla est praesent laoreet, metus vel auctor aliquam, eros purus vulputate leo, eget consequat neque quam id tellus duis ultricies tempor tortor, vitae dignissim ligula mattis nec in hac habitasse platea dictumst.';


    //function countWords(words, isCaseSensitive) {
    //    wordCount = {};
    //    word = {};
    //    for (var i in words) {
    //        word = words[i];
    //        if (wordCount[word]) {
    //            wordCount[word] += 1;
    //        } else {
    //            wordCount[word] = 1;
    //        }
    //    }
    //    return wordCount;
    //}

    //function occurrencesOfWordCaseSensitive(word) {
    //    count = 0;

    //    for (i = 0; i < len; i += 1) {
    //        if (words[i] === word) {
    //            count += 1;
    //        }
    //    }
    //    return count;
    //}

    //switch (arguments.length) {
    //    case 1:
    //        return countWords(words); break;
    //    case 2:
    //        return isCaseSensitive ? countWords(words, isCaseSensitive) : countWords(words); break;
    //}
    
    for (var word in wordCount) {
        jsConsole.writeLine(word + ' -> ' + wordCount[word]);
    }

}