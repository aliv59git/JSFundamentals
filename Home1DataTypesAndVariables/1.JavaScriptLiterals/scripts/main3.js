/*•	Try typeof on all variables you created.*/

var intNumb = 5;
jsConsole.writeLine(typeof(intNumb));
var floatNumb = 3.456;
jsConsole.writeLine(typeof(floatNumb));
var str = "Pesho";
var str1 = '';
jsConsole.writeLine(typeof (str));
jsConsole.writeLine(typeof (str1));
var boolN = true;
if (boolN === (10.0 / 2 === 5)) {
    jsConsole.writeLine(typeof(boolN));
} else {
    jsConsole.writeLine("false");
}
var temp, tmp1, tmp2;
jsConsole.writeLine(typeof(temp));
temp = boolN;
jsConsole.writeLine(typeof(temp * tmp1));
jsConsole.writeLine(typeof(temp / tmp2));
jsConsole.writeLine(typeof(temp / 0));

var obj = {};
jsConsole.writeLine(typeof (obj));
obj = 0;
jsConsole.writeLine(typeof (obj));
jsConsole.writeLine(typeof(obj / (!boolN)));
delete obj;
jsConsole.writeLine(typeof (obj));
jsConsole.writeLine(obj);
tmp2 = null;
jsConsole.writeLine(typeof (tmp2));
