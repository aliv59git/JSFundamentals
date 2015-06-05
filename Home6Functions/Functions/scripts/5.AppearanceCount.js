/*•	Write a function that counts how many times given number appears in given array.
•	Write a test function to check if the function is working correctly.*/

function appearanceCount() {
    arr = jsConsole.readNumbersArray('#input-text', ', ');
    numb = jsConsole.readFloat('#input-text1');
    appearance(arr, numb);
}
function test1() {
    var arr1 = [1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 5],
        numb1 = 3;
    appearance(arr1, numb1);
}
function test2() {
    var arr2 = [1.9, 2.2, 3.14, 3, 3.14, 3.14, 3, 3.45, 3.14, 4.6, 5.9], 
        numb2 = 3.14;
    appearance(arr2, numb2);
}

function appearance(arr, numb) {
    var arr, numb, i, len, count;
    for (i = 0, len=arr.length, count=0; i < len; i+=1) {
        if (arr[i] === numb) {
            count += 1;
        }
    }
    if (count) {
       jsConsole.writeLine(count);
    } else {
        jsConsole.writeLine('-1');
    }
}


