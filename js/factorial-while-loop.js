
// function getFactorial(num){
//     let factorial = 1;
//     let i = 1;
//     while(i <= num){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const num = 12;
// console.log('Number is', num)
// const result = getFactorial(num);
// console.log('result', result);



// function getFactorial(num){
//     let factorial = 1;
//     let i = num;
//     while( i >= 1){
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// const num = 6;
// const result = getFactorial(num);
// console.log(result);



// for loop reverse
function getFactorial(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}
const number = 6;
const result = getFactorial(number);
console.log('result is', result);

