/*•	Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.*/

function lexicographicallySmallestAndLargest() {
    jsConsole.writeLine(new Array(80).join('-'));
    var prop, minProp = 'zzz', maxProp = '';
    for (prop in document) {
        if (prop < minProp) {
            minProp = prop;
        }
        if (prop > maxProp) {
            maxProp = prop;
        }
    }
    jsConsole.writeLine("Document: </br> Min property: " + minProp + ";  </br> Max property: " + maxProp);
    minProp = 'zzz';
    maxProp = '';
    jsConsole.writeLine();

    jsConsole.writeLine(new Array(80).join('-'));
    for (prop in window) {
        if (prop < minProp) {
            minProp = prop;
        }
        if (prop > maxProp) {
            maxProp = prop;
        }
    }
    jsConsole.writeLine("Window:  </br>Min property: " + minProp + ";   </br>Max property: " + maxProp);
    minProp = 'zzz';
    maxProp = '';
    jsConsole.writeLine();

    jsConsole.writeLine(new Array(80).join('-'));
    for (prop in navigator) {
        if (prop < minProp) {
            minProp = prop;
        }
        if (prop > maxProp) {
            maxProp = prop;
        }
    }
    jsConsole.writeLine("Navigator:  </br>Min property: " + minProp + ";   </br>Max property: " + maxProp);
    jsConsole.writeLine(new Array(80).join('-'));

}
