// a function that uses an if-else statement

var num1;
var num2;
function normal_conditional(num1, num2){
    if(num1 === num2){ return true; }
    else{ return false; }
}


var a = 35;
var b = 55;
var test1 = normal_conditional(a, b);
console.log("to say " + a + " " + "equals " + b + " " + "is " + test1 + " \!");


// this is the way to replace the above conditional statement in the function.. LIKE THIS
function ternary_conditional(num1, num2){
    num1 === num2 ? true : false;
    return num1 == num2;
}

var test2 = ternary_conditional(22, 22);
console.log(test2);


var num99;
var check_sign = "";
// this is a way to use multiple ternary operations
function multi_ternary(num99){
    num99 < 0 ? check_sign = "Negative" : 
    num99 > 0 ? check_sign = "Positive" : 
    check_sign = "Zero";
    return check_sign;
}

console.log(multi_ternary(-100));
