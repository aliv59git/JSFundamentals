/*•	You are given a text. Write a function that changes the text in all regions:
•	<upcase>text</upcase> to uppercase.
•	<lowcase>text</lowcase> to lowercase
•	<mixcase>text</mixcase> to mix casing(random)*/


function replaceTagContent(inputString, tag) {
    var startOfTag,
        endOfTag,
        stringToReplace,
        stringToManipulate,
        i,
        tagLenght = tag.length,
        rand = Math.floor((Math.random() * 2) + 1),
        mixCaseTemporary = '';
    if (inputString.indexOf(tag) >= 0) {
        startOfTag = inputString.indexOf(tag);
        endOfTag = inputString.indexOf(tag, startOfTag + 6);
        stringToReplace = inputString.substring(startOfTag, endOfTag + tagLenght);
        stringToManipulate = inputString.substring(startOfTag + tagLenght, endOfTag);
        if (tag === 'upcase') {
            stringToManipulate = stringToManipulate.toUpperCase();
        }
        else if (tag === 'lowcase') {
            stringToManipulate = stringToManipulate.toLowerCase();
        }
        else if (tag === 'mixcase') {
            for (i = 0; i < stringToManipulate.length; i++) {
                if (rand > 1) {
                    mixCaseTemporary += stringToManipulate[i].toLowerCase();
                }
                else {
                    mixCaseTemporary += stringToManipulate[i].toUpperCase();
                }
                rand = Math.floor((Math.random() * 2) + 1);
            }
            stringToManipulate = mixCaseTemporary;
        }
        inputString = inputString.replace(stringToReplace, stringToManipulate);
    }
    return inputString;
}
function parseTags() {
    var i,
        upCount,
        lowCount,
        mixCount,
        inputString = document.getElementById('inputString').value;
    inputString = inputString.replace(/>/g, '');
    inputString = inputString.replace(/</g, '');
    inputString = inputString.replace(/\//g, '');
    upCount = subStringCounter(inputString, 'upcase') / 2;
    lowCount = subStringCounter(inputString, 'lowcase') / 2;
    mixCount = subStringCounter(inputString, 'mixcase') / 2;
    for (i = 0; i < upCount; i++) {
        inputString = replaceTagContent(inputString, 'upcase');
    }
    for (i = 0; i < lowCount; i++) {
        inputString = replaceTagContent(inputString, 'lowcase');
    }
    for (i = 0; i < mixCount; i++) {
        inputString = replaceTagContent(inputString, 'mixcase');
    }
    return inputString;
}

function subStringCounter(inputString, targetSubstring) {
    inputString = inputString.toLowerCase();
    targetSubstring = targetSubstring.toLowerCase();
    var newIndex,
        substringCount = 0,
        index = 0,
        len = inputString.length,
        targetLen = targetSubstring.length;
    while (index < len) {
        newIndex = inputString.indexOf(targetSubstring, index);
        if (newIndex >= 0) {
            index = newIndex + targetLen;
            substringCount += 1;
        }
        else {
            break;
        }
    }
    return substringCount;
}