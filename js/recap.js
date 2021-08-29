

// variable
var time = '12:16 pm';
var bookPrice = 299;
var isBlack = false;

// array
var itemPrice = [32, 45, 15, 47, 49];
var item = ['jira', 'tejpata', 'dal', 'sobji'];
var dalIndex = item.indexOf('dal');
console.log(dalIndex);
item.push('korla');
item.pop();


// conditionals
if(bookPrice < 55){
    console.log('I will buy');
}
else{
    console.log('I can not buy');
}

// loop
var i = 4;
while(i <= 5){
    i++;
}
for(var i = 3; i <= 7; i++){

}


//function
function isMoonUp(time){
    if(time >= 17 || time <=5){
        return true;
    }
    else{
        return false;
    }
    
}
var moonTime = 14;
var moon = isMoonUp(moonTime);
console.log(moon);

