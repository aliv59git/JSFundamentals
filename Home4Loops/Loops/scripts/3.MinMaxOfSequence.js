/*•	Write a script that finds the max and min number from a sequence of numbers.*/

function minMaxOfSequence() {
    var arr = [], arrN = [], i, len, minNumb, MaxNumb;
    var str = document.getElementById("input-text").value;
    arr = str.split(' ').valueOf();
    len = arr.length, minNumb = +arr[0], maxNumb = +arr[0];
    for (i = 0; i < len; i+=1) {
        if (+arr[i] < minNumb) {
            minNumb = arr[i];
        }
        if (+arr[i] > maxNumb) {
            maxNumb = arr[i];
        }
    }
    arr.sort(function (a, b) {
        return a - b;
    });

    jsConsole.writeLine("Max number is: " + maxNumb + ";  Min number is: " + minNumb);
    jsConsole.writeLine("With sorted array:")
    jsConsole.writeLine("Max number is: " + arr[len-1] + ";  Min number is: " + arr[0]);
}