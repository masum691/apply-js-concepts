// factorial

/*
3! = 3*2*1
4! = 4*3*2*1
5! = 5*4*3*2*1
6! = 6*5*4*3*2*1
7! = 7*6*5*4*3*2*1
*/


var factoril = 1;
for(var i = 1; i <= 7; i++){
    console.log(i);
    factoril = factoril * i;
}
console.log(factoril);