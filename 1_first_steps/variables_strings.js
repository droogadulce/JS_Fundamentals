/**
 * Variables: Strings
 */

var name = 'Tita', lastName = 'Paws'

// Converts a string to uppercase letters
var upperCaseName = name.toUpperCase()
// converts a string to lowercase letters
var lowerCaseLastName = lastName.toLowerCase()

// Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string
var firstLetter = name.charAt(0)

// length is a string property that is used to determine the length of a string
var numOfCharacters = name.length

// To concatenate two strings the symbol + is used.
var fullName = name + ' ' + lastName

// String Interpolation
var fullName = `${name} ${lastName.toUpperCase()}`

// Substrings
var str = name.substr(1, 2)

// Get the last character of the name
var lastChar = name.slice(-1)