/*•	Write a function that groups an array of people by age, first or last name.
•	The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
•	Use function overloading (i.e. just one function)*/

function grouping() {
    var people, i, arr, sorted;

    people = [
    { fName: 'Iva', lName: 'Kirova', age: 18 },
    { fName: 'Ivan', lName: 'Peshev', age: 21 },
    { fName: 'Krasi', lName: 'Kirov', age: 41 },
    { fName: 'Alis', lName: 'Tager', age: 27 },
    { fName: 'Ivanka', lName: 'Tasheva', age: 17 },
    { fName: 'Geri', lName: 'Ilieva', age: 23 },
    { fName: 'Sasho', lName: 'Dobrev', age: 28 },
    ];

    function buildPerson(fName, lName, age){
        return {
            fName: fName,
            lName: lName,
            age: age,
            toString: function toString(){
                return fName + ' ' + lName + 'age: ' + age;
            }
        };
    }
    var firstNames = [];
    for (var i = 0, len = people.length; i < len; i+=1) {
        firstNames.push(people[i].fName);
    }
    var sorted = firstNames.sort();
    for (var j = 0, len = sorted.length; j < len; j+=1) {
        var peopleFName = [];
        
    }


    console.log(firstNames);
    console.log(firstNames.sort());
   
    peopleSorted = group(people, 'fName');
    console.log(peopleSorted);


    //console.log(group(people, fName));
    //console.log(group(people, lName));
    //console.log(group(people, age));

    function group(arr, key) {
        var sorted = arr[key].sort(function (a, b) {
            return a - b;
        });
        return sorted;
    }

}



