/**
 * Objects
 */

// key: value
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

function printUpperCaseName(n) {
    n = n.toUpperCase()
    console.log(n)
}

printUpperCaseName(kim.name)
printUpperCaseName(saul.name)

function printLowerCaseName(person) {
    console.log(person.name.toLowerCase())
}

printLowerCaseName(kim)
printLowerCaseName(saul)

function printUpperCaseAttribute({ name }) {
    console.log(name.toUpperCase())
}

printUpperCaseAttribute(kim)
printUpperCaseAttribute(saul)
printUpperCaseAttribute({ name: 'Mike' })
printUpperCaseAttribute({ lastName: 'McGill' }) // undefined