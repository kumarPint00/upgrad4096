//Rest parameters
/**
 * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
 * providing a way to represent variadic functions in JavaScript.
 * Syntax
function f(a, b, ...theArgs) {
  // …
}
 */

 function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10
  

  //////////////////////////////////////////
  function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");

  // A function definition can have only one ...restParam.

  foo(...one, ...wrong, ...wrong)

  //The rest parameter must be the last parameter in the function definition.
  foo(...wrong, arg2, arg3)

  foo(arg1, arg2, ...correct)