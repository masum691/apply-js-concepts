

// let factorial = 1;
// for(let i = 1; i <= 5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);


function factorial(input){
    let fact = 1;
    for(let i = 1; i <= input; i++){
        fact = fact * i;
    }
    return fact;
}
var input = 8;
var result = factorial(input);
console.log('Result is', result);


///////////////////////////////////////////////////////
function getFactorial(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
let number = 11;
let fact = getFactorial(number);
console.log('Result is', fact);


