/*
•	Write a function for creating persons.
o	Each person must have firstname, lastname, age and gender (true is female, false is male)
•	Generate an array with ten person with different names, ages and genders*/

function makePerson() {

    function Person(fName, lName, age, gender) {
        return {
            firstName: fName,
            lastName: lName,
            age: age,
            gender: gender
            };
        }

    var gender;
    gender ? 'female' : 'male';

    var persons = [new Person('Ivan', 'Ivanov', 23, false),
        new Person('Ivan', 'Ivanov', 13, false),
        new Person('Pepi', 'Achev', 23, false),
        new Person('Geri', 'Tzolova', 44, true),
        new Person('Sasho', 'Peshev', 33, false),
        new Person('Pesho', 'Tashev', 52, false),
        new Person('Dragan', 'Ivanov', 21, false),
        new Person('Maria', 'Ivanova', 11, true),
        new Person('Valia', 'Stojanova', 17, true),
        new Person('Krasi', 'Goshev', 28, false),
        new Person('Pesho', 'Peshev', 34, true)
    ];

    persons.forEach(function (item, index){
        jsConsole.writeLine(index + ' -> '+ JSON.stringify(item));
    });
}