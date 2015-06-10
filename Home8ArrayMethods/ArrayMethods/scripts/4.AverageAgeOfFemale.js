/*•	Write a function that calculates the average age of all females, extracted from an array of persons
o	Use Array#filter
o	Use only array methods and no regular loops (for, while)
*/


var allWomen = persons.filter(function (item) {
    if (item.gender === 'female') {
        return item.age;
    }
});

var sumAge = allWomen.reduce(function (sumAge, person) {
    return sumAge + person.age;
}, 0);

console.log(sumAge / allWomen.length);