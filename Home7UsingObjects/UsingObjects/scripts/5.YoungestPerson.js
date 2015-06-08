/*•	Write a function that finds the youngest person in a given array of people 
and prints his/hers full name
•	Each person has properties firstname, lastname and age.*/

function youngestPerson() {
    var people, len, index = 0, minAge = Number.MAX_VALUE;
    people = [
    { fName: 'Iva', lName: 'Kirova', age: 18 },
    { fName: 'Ivan', lName: 'Peshev', age: 21 },
    { fName: 'Krasi', lName: 'Kirov', age: 41 },
    { fName: 'Alis', lName: 'Tager', age: 27 },
    { fName: 'Ivanka', lName: 'Tasheva', age: 17 },
    { fName: 'Geri', lName: 'Ilieva', age: 23 },
    { fName: 'Sasho', lName: 'Dobrev', age: 28 },
    ];


    for (var item in people) {
        if (people[item].age < minAge) {
            minAge = people[item].age;
            index = item;
        }
    }
    printName(index);


    function printName(index){
        jsConsole.writeLine('The youngest person is '+people[index].fName+' '+people[index].lName+'.');
    }
}








