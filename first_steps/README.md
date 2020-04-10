# First Steps

## Variables

To print a message in the browser's console:
```
console.log('Hello world!');
```

We can define variables with the keyword `var` followed by the identifier:
```
var name = 'Tita'
```

It's common to surround the strings between single quotes `''`.

It's optional to use `;` after each line, but there are some cases in which it won't work.

We can declare many variables in the same line:
```
var name = 'Tita', lastName = 'Paws'
```

JavaScript is usually considered a weakly typed or untyped language. That means that nothing indicates that the variable `name` is of string/text type and that it only accepts a string type.

```
var age = 26
console.log('I\'m ' + age + ' years old')
age = '26 years'
console.log('I\'m ' + age + ' old')
```

## Variables: Strings
A JS `string` stores a series of characters like `'Buzz Lightyear'`.

There are a lot of methods to be used with strings. For example:

>**toUpperCase**, which is used to transform a String to uppercase. 
>**toLowerCase**, which is used to transform the string to lowercase.

Examples
```
var name = 'Tita', lastName = 'Paws'
var upperCaseName = name.toUpperCase()
var lowerCaseLastName = lastName.toLowerCase()
var str = name.substr(1, 2)
var firstLetter = name.charAt(0)
var lastChar = name.slice(-1)
```

We can also use the attribute `length`, which indicates the number of characters a string has.

To concatenate two strings the symbol `+` is used.
```
var fullName = firstName + ' ' + lastName
```

The string interpolation helps in inserting values into string literals in a concise and readable manner.
```
var fullName = `${firstName} ${lastName}`
```