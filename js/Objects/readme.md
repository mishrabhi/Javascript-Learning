## Objects:

* An object is similar to an array, but the difference is that you define the keys yourself. You're not
limited to using only numeric indexes, and you can use friendlier keys such as first_name, age, and so on.

* var hero = {

   breed: 'Turtle',

  occupation: 'Ninja'

  };

  => You can see that the name of the variable that refers to the object is 'hero'.

=> Instead of [ and ], which you use to define an array, you use { and } for objects.

=> You separate the elements (called properties) contained in the object with commas.

=> The key/value pairs are divided by colons, as in key:value.

## Accessing an object's properties:
Let's take the hero object:
var hero = {

breed: 'Turtle',

occupation: 'Ninja'

};


* There are two ways to access the property of an object:

=> Using the square bracket notation, for example, hero['occupation']  // 'Ninja'

=> Using the dot notation, for example, hero.occupation  // 'Ninja'

* Objects can contain any data, including other objects:

var book = {

name: 'Catch-22',

published: 1961,

author: {

firstname: 'Joseph',

lastname: 'Heller'

}

};

=> To get to the firstname property of the object contained in the author property of the book
object, you can use the following lines of code:
> book.author.firstname;

"Joseph"

=> Let see an example using the square brackets notation:

> book['author']['lastname'];

"Heller"

## Altering properties/methods:

* JavaScript allows you to alter the properties and methods of existing objects at any time. This
includes adding new properties or deleting them. You can start with a blank object and add
properties later.

=> An object without properties is shown as follows:

> var hero = {};  // A "Blank" Object

1. Following is the code to access an non-existing property:

> typeof hero.breed;

"undefined"

2. Adding two properties and a method:

> hero.breed = 'turtle';

> hero.name = 'Leonardo';

> hero.sayName = function () {

return hero.name;

};

3. Calling the method:

> hero.sayName();

"Leonardo"

4. Deleting a property:

> delete hero.name;

true

5. If you call the method again, it will no longer find the deleted name property:

> hero.sayName();

"undefined"

