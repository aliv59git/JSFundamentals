/*•	Write a script that finds the maximal increasing sequence in an array.*/

function maximalIncreasingSequence() {
    var arr, str, i, len, count=1, bestCount=1, result, initialEl, bestInitial, bestEnd;

    str = document.getElementById('input-text').value;
    arr = str.split(', ').valueOf();
    initialEl = arr[0];
    len = arr.length;

    for (i = 1; i < len; i += 1) {
        if (+arr[i] > +arr[i - 1]) {
            count += 1;
        } else {
            if (bestCount < count) {
                bestCount = count;
                bestInitial = arr.indexOf(initialEl);
            }
            initialEl = arr[i];
            count = 1;
        }
    }
    result = arr.slice(bestInitial, bestInitial + bestCount);

    jsConsole.writeLine(result.join(', '));


}