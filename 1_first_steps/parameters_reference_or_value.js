/**
 * Parameters as reference or as value
 */

var kim = {
    name: 'Kim',
    lastName: 'Wexler',
    age: 35
}

function birthday(person) {
    person.age += 1
}

birthday(kim)
// kim -> {name: "Kim", lastName: "Wexler", age: 36}

function newObjBirthday(person) {
    // new object
    return {
        ...person, 
        age: person.age + 1
    }
}

newObjBirthday(kim) // {name: "Kim", lastName: "Wexler", age: 37}
// kim -> {name: "Kim", lastName: "Wexler", age: 36}