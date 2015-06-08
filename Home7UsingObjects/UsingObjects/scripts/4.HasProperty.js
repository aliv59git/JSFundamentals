/*•	Write a function that checks if a given object contains a given property.
•	var obj  = …;
•	var hasProp = hasProperty(obj, 'length');*/

function hasProperty() {
    var obj = {fName: 'Pesho', lName: 'Peshev', 
        marks: [{subject: 'Biology', score: 5.50},
            {subject: 'English', score: 4.90},
            {subject: 'Physics', score: 3.50}],
        friends: ['Pepi Achev', 'Iva Kirova', 'Tczvetan Ivanov', 'Suzi', 'Emili'],
        papers: {name: 'Envirenment of animals in...', authors: 'Pepi Achev, Pesho Peshev'}},
        prop, str, length, result = [];

    jsConsole.writeLine(hasPropertyInObj(obj, 'length'));
    jsConsole.writeLine(hasPropertyInObj(obj, 'lName'));
    jsConsole.writeLine(hasPropertyInObj(obj, 'marks'));
    jsConsole.writeLine(hasPropertyInObj(obj, 'score'));
    jsConsole.writeLine(hasPropertyInObj(obj, 'subject'));
    jsConsole.writeLine(hasPropertyInObj(obj, 'authors'));


    function hasPropertyInObj(object, property) {

        for (var prop in object) {
            if (typeof (object[prop]) === 'object') {
                for (var i in object[prop]) {
                    if (i === property) {
                        return true;
                    }
                };
            } else if (Array.isArray(object[prop])) {
                for (var i = 0, len = object[prop].length; i < len; i+=1) {
                    if (object[prop][i] === property) {
                        return true;
                    }
                }
            }
            if (prop === property) {
                return true;
            }
        }
        return false;
    }
}




