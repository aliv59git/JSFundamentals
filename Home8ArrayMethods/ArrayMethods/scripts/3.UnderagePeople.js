/*•	Write a function that prints all underaged persons of an array of person
o	Use Array#filter and Array#forEach
o	Use only array methods and no regular loops (for, while)
*/

function underagePeople(peoples) {
    console.log('Peoples under 21 yesrs: ')
    var underagePerson = peoples.filter(function (item) {
        return item.age < 21;
    });

    underagePerson.forEach(function (item) {
        console.log(JSON.stringify(item));
    });

    var pepples = [{ name: 'V', age: 23 },
        { name: 'K', age: 25 },
        { name: 'N', age: 15 }
    ];
}
