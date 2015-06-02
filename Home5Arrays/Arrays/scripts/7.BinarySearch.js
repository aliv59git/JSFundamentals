/*•	Write a script that finds the index of given element in a sorted 
 * array of integers by using the binary search algorithm.*/

function binarySearch() {
    var arr, str, low, high, midpoint, result, bestNumb, isFound=false;

    str = document.getElementById('input-text').value;
    bestNumb = +document.getElementById('input-text1').value;
    arr = str.split(', ').valueOf();
    arr.sort(function (a, b) {
        return a - b;
    });
    low = 0;
    high = arr.length - 1;
    jsConsole.writeLine('Sorted array: '+arr.join(', '));

    while (low <= high) {
        midpoint = low + ((high - low) / 2 | 0);
        if (bestNumb == arr[midpoint]) {
            jsConsole.writeLine(midpoint? midpoint : '0');
            //isFound = true;
            return midpoint;
        } else if (bestNumb < arr[midpoint]) {
            high = midpoint - 1;
        } else {
            low = midpoint + 1;
        }
    }
    if (!isFound) {
        jsConsole.writeLine('-1');
    } 
    return -1;
}