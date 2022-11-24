# FUNCTION

* Functions allow you to group together a code, give it a name, and reuse it later, addressing it by the name you gave it. 

* Let's consider the following code as an example: 

function sum(a, b) {

var c = a + b;

return c;

}

* The parts that make up a function are shown as follows:

1. The function keyword.

2. The name of the function; in this case, sum.

3. The function parameters; in this case, a and b. A function can take any number of parameters,or no parameters, separated by commas.

4. A code block, also called the body of the function.

5. The return statement. A function always returns a value. If it doesn't return a value
explicitly, it implicitly returns the value undefined.


## Calling A Function:

* In order to make use of a function, you will need to call it.Let's call the sum()function, passing two arguments and assigning the value that the function returns to the variable result:

> var result = sum(1, 2);

> result;

3

## Predefined Functions:

* There are a number of functions that are built into the JavaScript engine and are available for you to use:-

1. parseInt(): The parseInt() function takes any type of input (most often a string) and tries to make an integer out of it.If it fails it returns Nan.

2. parseFloat(): The parseFloat() function is similar to the parseInt() function, but it also looks for decimals when trying to figure out a number from your input.

3. isNaN(): Using isNaN(), you can check if an input value is a valid number that can safely be used in arithmetic operations.

4. isFinite(): The isFinite() function checks whether the input is a number that is neither Infinity nor NaN.

5. encodeURI()

6. decodeURI()

7. encodeURIComponent()

8. decodeURIComponent()

9. eval() : The eval() function takes a string input and executes it as a JavaScript code, as follows:

eval('var ii = 2;');

> ii;

2


## Scope of variables:

* variable or statement can be acceessed within function only.

* if var declared in inner function, we can access that var only inside that function.

* If declared outside we can access from both sides(local or global space).

var a = 10;

function foo(){

    var b = 20;

    var c = 30;

    console.log(a)  //10

    console.log(b)  //20

    console.log(c)  //30
    }

foo()

 console.log(a)  //10

 console.log(b)  //not defined

 console.log(c)  //not defined


 ## Variable Hoisting:

 * When your JavaScript program execution enters a new function, all the variables declared anywhere in the function are moved, elevated, or hoisted to the top of the function. This is an important concept to keep in mind. Further, only the declaration is hoisted, meaning only the presence of the variable is moved to the top. Any assignments stay where they are.

 var a = 123;

function f() {

var a; // same as: var a = undefined;

alert(a); // undefined

a = 1;

alert(a); // 1

}


## Block Scope:

* ES6 introduces the let and const keywords that allow us to declare variables.

* Variables declared with let are block-scoped. They exist only within the current block.

* Variables declared with var are function scoped.

* The following example illustrates the block scope:

var a = 1;

{

let a = 2;

console.log( a ); // 2

}

console.log( a ); // 1


## Functions Are Data(Function Expression):

* Functions in JavaScript are actually data.

* This means that you can create a function and assign it to a variable,as follows:

var f = function () {

return 1;

};


## Function Arguments:

* You can create functions that are flexible about the number of parameters using 'arguments' keyword.

* It gets created automatically inside each function.

* Arguments is not an array, but an array like object.


## Callback Function:

* As a function is just like any other data assigned to a variable, it can be defined, copied, and also passed as an argument to other functions.

* When you pass a function, A, to another function, B, and then B executes A, it's often said that A is a callback function.

* Refer function.js to see an example for callback function.




