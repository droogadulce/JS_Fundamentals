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