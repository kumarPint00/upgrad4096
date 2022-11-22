//function declaration
function LessArgument(param1, param2, param3, param4){
    console.log(param1, param2 ,param3 , param4);
}
//function call
LessArgument("arg1" , "arg2" ,"arg3");


function sumOfNumbers(name , ...numbers){
    var sum = 0
    for (let num of numbers) 
         sum = sum + num;
    return ( name + " the total sum is " + sum);
}
sumOfNumbers("Carl" , 1 , 2 , 3 , 4 , 5 , 6);
// Carl the total sum is 21
sumOfNumbers("Karen")
//Karen the total sum is 0

let arr = [1, 2, 3];
let arrTwo = [...arr , 4, 5, 6];
//arrTwo = [1, 2, 3, 4, 5, 6]
function FindLength(...params){
      return (params.length);
}
FindLength(...arr); //3
FindLength(...arrTwo); //6