/*•	Write a script that finds the lexicographically smallest and largest property in document, window and navigatorobjects.*/

function lexicographicallySmallestAndLargest(obj) {
    var obj = obj || {};
    obj = document.getElementById("input-text").value;
    var prop, minProp = obj[0], maxProp = obj[0];
    for (prop in obj) {
        if (prop < minProp) {
            minProp = prop;
        }
        if (prop > maxProp) {
            maxProp = prop;
        }
    }

    obj = window.document;
    lexicographicallySmallestAndLargest(obj);
    jsConsole.writeLine("Min property in " + obj + " is: " + minProp + ";  Max property in " + obj + " is: " + maxProp);

    
    lexicographicallySmallestAndLargest(obj);
    jsConsole.writeLine("Min property in " + obj + " is: " + minProp + ";  Max property in " + obj + " is: " + maxProp);
}
