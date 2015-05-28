/*•	Write a script that finds the greatest of given 5 variables.
•	Use nested if statements.*/

function theBiggestNumber() {
    var a = +document.getElementById("input-text").value;
    var b = +document.getElementById("input-text1").value;
    var c = +document.getElementById("input-text2").value;
    var d = +document.getElementById("input-text3").value;
    var e = +document.getElementById("input-text4").value;
    if (a>b) {
        if (a > c) {
            if (a > d) {
                if (a > e) {
                    jsConsole.writeLine(a);
                } else {
                    jsConsole.writeLine(e);
                }
            } else if (d > e) {
                jsConsole.writeLine(d);
            } else {
                jsConsole.writeLine(e);
            }
        } else if (c > d) {
            if (c > e) {
                jsConsole.writeLine(c);
            } else {
                jsConsole.writeLine(e);
            }
        } else if (d > e) {
            jsConsole.writeLine(d);
        } else {
            jsConsole.writeLine(e);
        }
    } else if (b > c) {
        if (b > d) {
            if (b > e) {
                jsConsole.writeLine(b);
            } else {
                jsConsole.writeLine(e);
            }
        } else if (d > e) {
            jsConsole.writeLine(d);
        } else {
            jsConsole.writeLine(e);
        }
    } else if (c > d) {
        if (c > e) {
            jsConsole.writeLine(c);
        } else {
            jsConsole.writeLine(e);
        }
    } else if (d > e) {
        jsConsole.writeLine(d);
    } else {
        jsConsole.writeLine(e);
    }

}