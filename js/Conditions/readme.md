# CONDITIONS:

* Conditions provide a simple but powerful way to control the flow of code execution.

* Types Of Conditions:

1. if condition
2. if-else condition
3. switch statements

## The if Condition:

 var result = '', a = 3;

if (a > 2) {

result = 'a is greater than 2';

}


## The else clause:

* There can also be an optional else part of the if condition. The else statement is followed by a
block of code that runs if the condition evaluates to false.

if (a > 2) {

result = 'a is greater than 2';

} else {

result = 'a is NOT greater than 2';

}

* In between the if and the else statements, there can also be an unlimited number of else...if
conditions.


## Switch Statement:

* If you find yourself using an if condition and having too many else...if parts, you can consider
changing the if to a switch, as follows:

var a = '1',

result = '';

switch (a) {

case 1:

result = 'Number 1';

break;

case 2:

result = 'String 1';

break;

default:

result = 'I don't know';

break;

}

* There is an optional **break** statement to signal the **end of the case block**. If this break
statement is reached, the switch statement is all done. Otherwise, if the break is missing,
the program execution enters the next case block.


* There's an optional **default case** marked with the default statement and followed by a block
of code. The default case is executed if none of the previous cases evaluated to true.

