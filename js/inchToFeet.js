
// var inches = 112;
// var feet = inches / 12;
// console.log(feet);


// var dadiInches = 231;
// var feet = dadiInches / 12;
// console.log(parseFloat(feet.toFixed(2)));

// var nanaInches = 676;
// var feet = nanaInches / 12;
// console.log(parseFloat(feet.toFixed(2)));

////////////////////////////////////////////////////////////////////////
// function inches(inch){
//     console.log('Total inches', inch);
//     var result = inch / 12;
//     return result;
// }
// var totalInches = 567;
// var feet = inches(totalInches);
// console.log(parseFloat(feet.toFixed(2)));


// function inchToFeet(inches){
//     var feet = inches / 12;
//     return feet;
// }

// var dadiInches = 527;
// var myInches = 453;
// var feet = inchToFeet(dadiInches);
// console.log('Feet is', parseFloat(feet.toFixed(2)));


// mile to km
function mileToKm(miles){
    var km = miles * 1.60934;
    return km;
}

var mile = 73;
var kilo = mileToKm(mile);
console.log('total kilometer is', parseFloat(kilo.toFixed(2)));


////////////////////////////////////////////////////////////
// function inchToFeet(inch){
//     let feet = inch / 12;
//     return feet;
// }
// const inches = 131;
// const feetIs = inchToFeet(inches);
// console.log(parseFloat(feetIs.toFixed(2)));


////////////////////////////////////////////////////////////
function feetToInches(feet){
    let inch = feet * 12;
    return inch;
}
const feet = 11;
const inchIs = feetToInches(feet);
console.log(inchIs);


//////////////////////////////////////////////////////////////
// function celciusToFahrenheit(celcius){
//     let fahrenheit = (celcius * 9/5) + 32;
//     return fahrenheit;
// }
// const celcius = 3;
// const fahren = celciusToFahrenheit(celcius);
// console.log('Fahrenheit is', fahren);




////////////////////// fahrenheit to celcius /////////////////////////////
function fahrenheitToCelcius(fah){
    let celcius = (fah - 32) * 5/9;
    return celcius;
}
const fah = 333;
const cel = fahrenheitToCelcius(fah);
console.log('Celcius is', cel.toFixed(3));