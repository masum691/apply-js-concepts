function getFactorial(number){
    let factorial = 1;
    console.log(number);
    for(let i = 0; i <= number; i++){
        console.log(i);
        factorial = factorial + i;
        console.log(factorial);
    }
    return factorial;
}
const num = 8;
const result = getFactorial(num);
console.log(result);