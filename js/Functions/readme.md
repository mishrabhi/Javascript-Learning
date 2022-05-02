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
