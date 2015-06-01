/*•	Write a script that compares two char arrays lexicographically (letter by letter).*/

function lexicographicallyComparison() {
    var arr1, arr2, len1, len2, minLen, isEqual, i;
    arr1 = document.getElementById('input-text').value;
    arr2 = document.getElementById('input-text1').value;
    len1 = arr1.length;
    len2 = arr2.length;
    minLen = Math.min(len1, len2);
    for (i = 0; i < minLen; i += 1) {
        if (arr1[i] < arr2[i]) {
            jsConsole.writeLine('First array is lexicographically first.');
            isEqual = false;
            break;
        } else if(arr1[i] > arr2[i]) {
            jsConsole.writeLine('Second array is lexicographically first.');
            isEqual = false;
            break;
        } else {
            isEqual = true;
        }
    }
    if (isEqual) {
        if (len1 < len2) {
            jsConsole.writeLine('First array is lexicographically first.');
        } else if (len2 < len1) {
            jsConsole.writeLine('Second array is lexicographically first.');
        } else {
            jsConsole.writeLine('Arrays are lexicographically equals.');
        }
    }
}