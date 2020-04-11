/**
 * Variables: Numbers
 */

/* Sum */
var age = 26
age = age + 1
age += 1

/* Subtraction */
var weight = 61
weight = weight - 1
weight -= 1 

var sandwich = 1
weight = weight + sandwich

var playFootball = 3
weight = weight - playFootball

/* Multiplication */
var winePrice = 200.3
var total = winePrice * 3
// total returns 600.9000000000001
var newTotal = winePrice * 100 * 3 / 100
// newTotal returns 600.9

/* Division */
var pizza = 8
var people = 2
var pizzaSlicesPerPerson = pizza / people
// pizzaSlicesPerPerson returns 4

/* Some methods */

/* Math.round()*/
// We can use Math.round() to not worry about the number of digits after the period
var roundedTotal = Math.round(winePrice * 100 * 3) / 100
// roundedTotal returns 600.9

/* toFixed() */
// Converts a number into a string, keeping a specified number of decimals
var totalStr = roundedTotal.toFixed(2)
// totalStr returns "600.90"

/* parseFloat() */
// converts string to float
var totalFloat = parseFloat(totalStr)
// totalFloat returns 600.9