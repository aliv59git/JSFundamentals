/*•	Write a script that finds the most frequent number in an array.*/

function mostFrequentNumber() {
    var arr, str, i, len, count=1, numb, bestCount=1, bestNumb;

    str = document.getElementById('input-text').value;
    arr = str.split(', ').valueOf();
    len = arr.length;
    arr.sort(function (a, b) {
        return a - b;
    });
    numb = arr[0];
    for (i = 1; i < len; i+=1) {
        if (arr[i]===numb) {
            count += 1;
        } else {
            if (bestCount < count) {
                bestCount = count;
                bestNumb = numb;
            }
            numb = arr[i];
            count = 1;
        }

    }
    jsConsole.writeLine(bestNumb + '(' + bestCount + ' times)');
}