# ARRAY 

* What is an array? It's simply a **list** (a sequence) of values. Instead of using one variable to
store one value, you can use one array variable to store any number of values as elements of the
array.

* To define an array that has three elements, you can write the following line of code:

 `var a = [1, 2, 3];`

 * To access an array element, you can specify the index of that element inside square brackets. So,
a[0] gives you the first element of the array a, a[1] gives you the second, and so on.


### Adding/Updating Array Elements:


* Using the index, you can also update the values of the elements of the array. The next example
updates the third element (index 2) and prints the contents of the new array, as follows:

> a[2] = 'three';

"three"
> a;

[1, 2, "three"]


* If you add a new element but leave a gap in the array, those elements in between don't exist and
return the undefined value if accessed.

> var a = [1, 2, 3];

> a[6] = ''new'';

"new"
> a;

[1, 2, 3, undefined x 3, "new"]


### Deleting Elements:

* To delete an element, you can use the delete operator. However, after the deletion, the length of
the array does not change. In a sense, you may get a hole in the array:

> var a = [1, 2, 3];

> delete a[1];

true
> a;

[1, undefined, 3]
> typeof a[1];

"undefined"


## Arrays of Arrays:

* Arrays can contain **all types of values**, including **other arrays:**

> var a = [1, "two", false, null, undefined];

> a;

[1, "two", false, null, undefined]
> a[5] = [1, 2, 3];

[1, 2, 3]
> a;

[1, "two", false, null, undefined, Array[3]]


* ### Note:
 You can use the array notation to access individual characters inside a string, as shown
in the following code block:

> var s = 'one';

> s[0];

"o"
> s[1];

"n"
> s[2];

"e