/**
 * The functions' scope
 */

/* Global Scope */
// Global variable
var name = 'Kim'

function printUpperCaseName() {
    name = name.toUpperCase() // side effect
    console.log(name)
}

printUpperCaseName()
// window.name will return "KIM"

/* Local Scope */
// Global variable
var globalName = 'Saul'

function printUpperCaseName(n) {
    n = n.toUpperCase() // side effect
    console.log(n)
}

printUpperCaseName(globalName) // prints "SAUL"
// globalName returns "Saul"

/* Using same name - different scope */
var myName = "Mike"
function printLowerCaseName(myName) {
    myName = myName.toLowerCase() // side effect
    console.log(myName)
}
printLowerCaseName(myName)
// myName returns "Mike"