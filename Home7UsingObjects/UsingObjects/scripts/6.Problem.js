/*•	Write a function that groups an array of people by age, first or last name.
•	The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
•	Use function overloading (i.e. just one function)*/

function grouping() {
    var people, i, arr, sorted;

    function createPerson(fName, lName, age) {
        return {
            fName: fName,
            lName: lName,
            age: age,
            toString: function toString() {
                jsConsole.writeLine(fName + ' ' + lName + ' age: ' + age);
            }
        };
    }

    var people = [createPerson('Iva', 'Kirova', 18),
        createPerson('Ivan','Peshev', 21),
        createPerson('Krasi', 'Kirov', 41),
        createPerson('Alis', 'Tager', 27),
        createPerson('Ivanka', 'Tasheva', 17),
        createPerson('Geri', 'Ilieva', 23),
        createPerson('Sasho', 'Dobrev', 28)];

    console.log(people.length);
    var len = people.length;
    function printPeople(people) {
        for (var i = 0; i < len; i += 1) {
            people[i].toString();
        }
    }

    function groupPeople(arr, key) {
        arr.sort(function (p1, p2) {
            return p1.key > p2.key;
        })
    }

    printPeople(groupPeople(people, people.fName));



    //function buildPerson(fName, lName, age){
    //    return {
    //        fName: fName,
    //        lName: lName,
    //        age: age,
    //        toString: function toString(){
    //            return fName + ' ' + lName + 'age: ' + age;
    //        }
    //    };
    //}
    //var firstNames = [];
    //for (var i = 0, len = people.length; i < len; i+=1) {
    //    firstNames.push(people[i].fName);
    //}
    //var sorted = firstNames.sort();
    //for (var j = 0, len = sorted.length; j < len; j+=1) {
    //    var peopleFName = [];
        
    //}


    console.log(firstNames);
    console.log(firstNames.sort());
   
    peopleSorted = group(people, 'fName');
    console.log(peopleSorted);


    //console.log(group(people, fName));
    //console.log(group(people, lName));
    //console.log(group(people, age));

    //function group(arr, key) {
    //    var sorted = arr[key].sort(function (a, b) {
    //        return a - b;
    //    });
    //    return sorted;
    //}
    //console.log(person.forEach(group(person, fName)));
}



