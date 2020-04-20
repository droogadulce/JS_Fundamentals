/**
 * Object Destructuring
 */

var kim = {
    name: 'Kim',
    lastName: 'Wexler',
    age: 35
}

var saul = {
    name: 'Saul',
    lastName: 'Goodman',
    age: 40
}

function printUpperCaseAttribute(person) {
    // var name = person.name
    var { name } = person 
    console.log(name.toUpperCase())
}

printUpperCaseAttribute(kim)
printUpperCaseAttribute(saul)

function printPersonData(person) {
    var { name, lastName, age } = person
    console.log(`Hi, I'm ${name} ${lastName} and I'm ${age} years old.`)
}

printPersonData(kim)
printPersonData(saul)