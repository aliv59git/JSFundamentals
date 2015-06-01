/*•	Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
•	Print the obtained array on the console.*/

function increaseArrayMembers() {
    var arr = new Array(20),
        len, i;
    for (i = 0, len=20; i < len; i+=1) {
        arr[i] = i * 5;
    }
    jsConsole.writeLine('arr = [' + arr.join(", ") + ']');

}