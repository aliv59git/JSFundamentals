/*•	Write a function that checks if the element at given position in given 
 * array of integers is bigger than its two neighbours (when such exist).*/

function largerThanNeighbours() {
    var arr, len, numb;

    arr = jsConsole.readNumbersArray('#input-text', ', ');
    numb = jsConsole.readInteger('#input-text1');
    len = arr.length;
    if (numb === 0 || numb === len-1) {
        jsConsole.writeLine('No');
    } else if (!(arr[numb] > arr[numb - 1] && arr[numb] > arr[numb + 1])) {
        jsConsole.writeLine('No');
    } else {
        jsConsole.writeLine('Yes');
    }


}










