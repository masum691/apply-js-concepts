// factorial
// 3! = 3*2!
// 4! = 4*3!
// 5! = 5*4!
// 6! = 6*5*4*3*2*1
// 7! = 7*6*5*4*3*2*1

// n! = n * (n-1)!

function factorial(n){
    if(n==1){
        return 1;
    }
    return n * factorial(n-1);
}
const myFactorial = factorial(5);
console.log(myFactorial);




function poriMoni(character){
    if(character % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const poriErChoritro = prompt('Enter a number');
const resultIs = poriMoni(poriErChoritro);
console.log(resultIs);
if(resultIs==true){
    for(let i = 1; i <= 1000000; i++){
        console.log('porimoni er choritro onek kharap');
    }
}
else{
    for(let i = 1; i <= 10; i++){
        console.log('porimoni er choritro onek valo');
        if(i==2){
            break;
        }
    }
}


