/*•	Write a function that makes a deep copy of an object.
•	The function should work for both primitive and reference types.*/

function deepCopyObj(obj) {
    var obj, copyObj = deepCopy(obj), prop;

    //inputObj = document.getElementById('input-text').value;
    //inputArr = inputObj.split(',').valueOf();

    obj = {
        name: 'Ivan Ivanov',
        marks: [{ subject: 'JavaScript', score: 5.50 },
                { subject: 'OOP', score: 5.00 },
                { subject: 'Slice and Dice', score: 6.00 },
                { subject: 'Photoshop', score: 4.00 }],
        friends: ['Suzan', 'Emily', 'Lili', 'Anjela', 'Maria']
    };


    //for (var item in obj) {
    //    if (Array.isArray(item)) {
    //            copyObj += item.slice(0);
    //    } else if(typeof(item)!=='object'){
    //        copyObj += item;
    //    } else {
    //            copyObj += deepCopy(copyObj[item], obj[item]);
    //    }
    //    return copyObj;
    //}
    
    for (var prop in copyObj) {
        jsConsole.writeLine(prop + ' : ' + copyObj[prop]);
        console.log(prop + ' : ' + console.log(copyObj[prop]));
    }

    function deepCopy(copyObj, obj) {
        for (var prop in obj) {
            if (typeof obj[prop] === "object" && obj[prop] !== null && copyObj[prop]) {
                clone(copyObj[prop], obj[prop]);
            } else {
                copyObj[prop] = obj[prop];
            }
        }
        return copyObj;
    }

}


obj = {
    name: 'Ivan Ivanov',
    marks: [{ subject: 'JavaScript', score: 5.50 },
			{ subject: 'OOP', score: 5.00 },
			{ subject: 'Slice and Dice', score: 6.00 },
			{ subject: 'Photoshop', score: 4.00 }],
    friends: ['Suzan', 'Emily', 'Lili', 'Anjela', 'Maria']
};

