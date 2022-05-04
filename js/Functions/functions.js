//Function Scoping:

// var a = 10;       // Global Scope
// function foo(){
//     var b = 20;   //Local Scope
//     var c = 30;   //Local Scope
//     console.log(a)  //10
//     console.log(b)  //20
//     console.log(c)  //30
// }
// foo()
// console.log(a)  //10
// console.log(b)  // not defined
// console.log(c)  // not defined


//variable Hoisting:

// var a = 123;
// function f(){
//     var a;
//     console.log(a)  // undefined
//     a = 12;
//     console.log(a)  //12
// }



// Function Expression:
// Functions in JavaScript are actually data.
// This means that you can create a function and assign it to a variable.

// var sum = function(a,b) {
//     return a + b;
// };
// var add = sum;
// console.log(typeof add);  //function
// console.log(add(2,5))    // 7


// Function Arguments:
// You can create functions that are flexible about the number of parameters using 'arguments' keyword.

function args(){
    return arguments
}

console.log(args());  
console.log(args(1,2,'fdf', 23));

// lets improve add function to accept any number of arguments

function sum(){
    var res = 0;
    for(var i =0; i<arguments.length; i++){
        res += arguments[i];
    }
    return res;
}
console.log(sum(1,2,3,4,5)); //  15