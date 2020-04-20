/**
 * Functions
 */

var name = 'Mayra', age = 26

function printAge(theName, theAge) {
    console.log(`${theName} is ${theAge} years old`)
}

printAge(name, age)
printAge('Luna', 13)
printAge('Tita', 6)

// If we invert the arguments...
printAge(6, 'Tita')
// 6 is Tita years old
printAge()
// undefined is undefined years old
