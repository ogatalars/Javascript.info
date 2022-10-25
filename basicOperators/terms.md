Before we move on, let’s grasp some common terminology.

An operand – is what operators are applied to. For instance, in the multiplication of 5 \* 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied
An operator is binary if it has two operands. The same minus exists in binary form as well:

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values
Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

Maths
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication \*,
Division /,
Remainder %,
Exponentiation **.
The first four are straightforward, while % and ** need a few words about them.
