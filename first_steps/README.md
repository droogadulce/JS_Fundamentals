# First Steps

## Variables

To print a message in the browser's console:
```js
console.log('Hello world!');
```

We can define variables with the keyword `var` followed by the identifier:
```js
var name = 'Tita'
```

It's common to surround the strings between single quotes `''`.

It's optional to use `;` after each line, but there are some cases in which it won't work.

We can declare many variables in the same line:
```js
var name = 'Tita', lastName = 'Paws'
```

JavaScript is usually considered a weakly typed or untyped language. That means that nothing indicates that the variable `name` is of string/text type and that it only accepts a string type.

```js
var age = 26
console.log('I\'m ' + age + ' years old')
age = '26 years'
console.log('I\'m ' + age + ' old')
```

## Variables: Strings
A JS `string` stores a series of characters like `'Buzz Lightyear'`.

There are a lot of methods to be used with strings. For example:

* **toUpperCase**, which is used to transform a String to uppercase. 
* **toLowerCase**, which is used to transform the string to lowercase.

Examples
```js
var name = 'Tita', lastName = 'Paws'
var upperCaseName = name.toUpperCase()
var lowerCaseLastName = lastName.toLowerCase()
var str = name.substr(1, 2)
var firstLetter = name.charAt(0)
var lastChar = name.slice(-1)
```

We can also use the attribute `length`, which indicates the number of characters a string has.

To concatenate two strings the symbol `+` is used.
```js
var fullName = firstName + ' ' + lastName
```

The string interpolation helps in inserting values into string literals in a concise and readable manner.
```js
var fullName = `${firstName} ${lastName}`
```

## Variables: Numbers

We have the mathematical operators:

* **sum** `+`
```js
var age = 26
age = age + 1
age += 1
 ```
* **subtraction** `-`
```js
var weight = 61
weight = weight - 1
weight -= 1
``` 
* **multiplication** `*` - need to be careful with float numbers 
```js
var winePrice = 200.3
var total = winePrice * 3
// Returns 600.9000000000001
var newTotal = winePrice * 100 * 3 / 100
// newTotal returns 600.9
```
* **division** `/`
```js
var pizza = 8
var people = 2
var pizzaSlicesPerPerson = pizza / people
// pizzaSlicesPerPerson returns 4
```

We have some methods that can help us with the operations:

* **Math.round()** - to not worry about the number of digits after the period
```js
var roundedTotal = Math.round(winePrice * 100 * 3) / 100
// roundedTotal returns 600.9
```
* **toFixed()** - converts a number into a string, keeping a specified number of decimals
```js
var totalStr = roundedTotal.toFixed(2)
// totalStr returns "600.90"
```
* **parseFloat()** - converts string to float
```js
var totalFloat = parseFloat(totalStr)
// totalFloat returns 600.9
```

## Functions

The functions are fractions of reusable code. To define a function we will use the reserved word `function`.

We delimit the body of the function using curly braces `{}`. Function parameters are variables that are passed to the function by enclosing them in parentheses `()`.
```js
var name = 'Mayra', age = 26

function printAge(theName, theAge) {
    console.log(`${theName} is ${theAge} years old`)
}

printAge(name, age)
printAge('Luna', 13)
printAge('Tita', 6)
```

Defining functions helps us to reuse code. JavaScript is an interpreted language, this means that it will try to execute the code regardless of whether the parameters that we pass to the function are inverted or even incomplete.
```js
printAge(6, 'Tita')
// 6 is Tita years old
printAge()
// undefined is undefined years old
```

## The functions' scope

If a variable is not defined within the body of a function, we are talking about a `global` variable. Conversely, a variable defined within a function is a `local` variable.
```js
/* Global Scope */
// Global variable
var name = 'Kim'

function printUpperCaseName() {
    name = name.toUpperCase()
    console.log(name)
}

printUpperCaseName()
// name was modified and returns "KIM"
```

The global object in the browser is `window`
```js
window.name 
// prints "KIM" in the browser's console
```

If we don't want that the execution of a function modifies a global variable, we use parameters instead of directly passing the variable.
```js
/* Local Scope */
// Global variable
var globalName = 'Saul'

function printUpperCaseName(n) {
    n = n.toUpperCase() // side effect
    console.log(n)
}

printUpperCaseName(globalName) // prints "SAUL"
// globalName returns "Saul"
```

The same name can be used for a global variable and for a function parameter with a local scope.
```js
/* Using same name - different scope */
var myName = "Mike"
function printLowerCaseName(myName) {
    myName = myName.toLowerCase() // side effect
    console.log(myName)
}
printLowerCaseName(myName)
// myName returns "Mike"
```

## Objects

Objects are defined delimited by curly braces `{}`

```js
var kim = {
    name: 'Kim',
    lastName: 'Wexler',
    age: 35
}
```

An attribute consists of a key (key) and a value (value), which are separated by `:`. Values can be of type string, number, boolean, etc. Each attribute is separated from the next by a comma. An object can have all the attributes that are necessary.

We can access to an attribute's value of an object using a dot `.`

```js
printUpperCaseName(kim.name)
```

An object can also be passed as an attribute in a function.
```js
function printLowerCaseName(person) {
    console.log(person.name.toLowerCase())
}

printLowerCaseName(kim)
```

The latest versions of JavaScript allow us to break down the object to access only the attribute that interests us. This is accomplished by enclosing the attribute name in curly braces {}.
```js
function printUpperCaseAttribute({ name }) {
    console.log(name.toUpperCase())
}

printUpperCaseAttribute(kim)
printUpperCaseAttribute({ name: 'Mike' })
printUpperCaseAttribute({ lastName: 'McGill' }) // undefined
```