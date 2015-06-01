/*•	Sorting an array means to arrange its elements in increasing order.
•	Write a script to sort an array.
•	Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from 
the rest, move it at the second position, etc.*/

function selectionSortAscending() {
    var arr = [], result = [], str, i, k, smallest, indexOfSmallest, len, maxN = Number.MAX_VALUE;
    str = document.getElementById('input-text').value;
    arr = str.split(', ').valueOf();
    len = arr.length;

    for (k = 0; k < len; k+=1) {
        smallest = maxN;
        for (i = 0; i < len; i += 1) {
            if (+arr[i] <= smallest) {
                smallest = arr[i];
                indexOfSmallest = i;
            }
        }
        result.push(smallest);
        arr[indexOfSmallest] = maxN;
    }
    jsConsole.writeLine(result.join(', '));
}