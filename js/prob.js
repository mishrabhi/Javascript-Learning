
var a = 10;
function foo(){
    console.log(a)
    var a = 20;
    console.log(a)
}
foo()


// check asterisk (*) problems in loops chapter thats imp.


/* 1. WAP to print this:

* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *



var res = '\n';
for (var i = 0; i < 10; i++){
    for(j = 0; j < 10; j++){
        res += '*';
    }
    res += '\n';
}
*/