// function isLeapYear(year){
//     if(year % 4 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const year = 2191;
// const leapYear = isLeapYear(year);
// console.log('is leap year', leapYear);

// if(leapYear==true){
//     console.log('Yes its leap year')
// }
// else{
//     console.log('No, it is not a leap year')
// }




////////////////////////////////////////////////////////////
function leapYear(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return 'Yes, it is leap year';
    }
    else{
        return 'No';
    }
}
const input = 3244;
const leapYearIs = leapYear(input);
console.log(leapYearIs);



///////////////////////////////////////////////////////////////
function interest(principleAmount, intRate, time){
    let interestIs = (principleAmount * intRate * time) / 100;
    return interestIs;
}
const result = interest(30000, 5, 2);
console.log(result);







