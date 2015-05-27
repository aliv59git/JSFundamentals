/*•	Write an expression that checks if given positive integer number n (n ≤ 100) is prime.*/

function isPrime() {
    var numb = +document.getElementById("input-text").value;
    var result = true;
    var maxDevider = Math.sqrt(numb) | 0;
    for (var i = 2; i <= maxDevider; i+=1) {
        if (!(numb % i)) {
            result = false;
            break;
        }
    }
    jsConsole.writeLine(result);
}