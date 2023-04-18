
// a function that generates a decimal number in the range: [0,1)
var num1;
function random_decimal(){
    num1 = Math.random();
    return num1;
}

console.log(random_decimal());


// a function that generates a whole number using the floor function
var num2;
var n;// multiplier of the random function 
function random_whole_number(n){
    num2 = Math.floor(Math.random() * n);
    return num2;
}

console.log(random_whole_number(10));


// a function that generates a whole number between a given range: range = max-value - min -value
var num3;
var max_number;
var min_number;
var _range_;
function range_random(min_number, max_number){
    _range_ = max_number - min_number;
    num3 = Math.floor(Math.random() * (_range_ + 1)) + min_number;
    return num3;
}


var test = range_random(5, 10);
console.log(test);

min_number = parseInt("10");
max_number = parseInt("25");
console.log(range_random(min_number, max_number));

