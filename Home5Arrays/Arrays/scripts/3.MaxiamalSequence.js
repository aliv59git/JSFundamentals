/*•	Write a script that finds the maximal sequence of equal elements in an array.*/

function maximalSequence() {
    var arr, str, i, len, equalEl, count=1, bestCount=1, bestEl;

    str = document.getElementById('input-text').value;
    arr = str.split(', ').valueOf();
    equalEl = arr[0];
    for (i = 1, len = arr.length; i < len; i += 1) {
        if (arr[i] === equalEl) {
            count += 1;
        } else {
            if (bestCount < count) {
                bestCount = count;
                bestEl = equalEl;
            }
            equalEl = arr[i];
            count = 1;
        }
    }

    for (i = 0; i < bestCount-1; i+=1) {
        jsConsole.write(bestEl + ', ');
    }
    jsConsole.writeLine(bestEl);
}