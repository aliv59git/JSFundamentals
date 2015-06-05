/*•	Write a function that returns the index of the first element in array that is larger 
than its neighbours or -1, if there’s no such element.
•	Use the function from the previous exercise.*/

function firstLargerThanNeighbours() {
    var arr, len, numb, i, isFound;  
    
    arr = jsConsole.readNumbersArray('#input-text', ', ');
    for (i = 1, len = arr.length; i < len-1; i+=1) {
        if (largerThanNeighbours(arr, i)) {
            jsConsole.writeLine(i);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        jsConsole.writeLine('-1');
    }
}


function largerThanNeighbours(arr, numb) {
    var arr, len, numb;

    len = arr.length;
    if (numb === 0 || numb === len-1) {
        return false;
    } else if (!(arr[numb] > arr[numb - 1] && arr[numb] > arr[numb + 1])) {
        return false;
    } else {
        return true;
    }
}










