/*•	Write a function that checks if an array of person contains only people of age (with age 18 or greater)
o	Use only array methods and no regular loops (for, while)*/

function peopleOfAge(persons) {

    var isOlder18 = persons.every(function (item) {
        return item.age >= 18;
    });

    console.log('Is everyone over 18 years old? ' + isAllAdult);

}


