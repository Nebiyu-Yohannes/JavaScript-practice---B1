// working with functions and return values

// declare a global variable
var result;
var result2;
function num_square(number){
    result = (number * number);
    //console.log(result);
}

num_square(5);
console.log(num_square(5));

function num_cubed(number){
    result2 = (number * number * number);
    //console.log(result2);
    return result2;
}

num_cubed(5); // returns the result2 variable but is not shown
console.log(num_cubed(5)); // this print the return value of the function on the console



// this is using arrow function with anonymous function
var school_role = function(temp){
    return "THIS IS YOUR SCHOOL ROLE " + temp;
};
 

//OR
var school_role = (temp) => "THIS IS YOUR SCHOOL ROLE";

// this is an arrow function that concatenates to arrays
const first_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const second_array = [2, 4, 6, 8, 10, 12, 14, 16, 18];
var new_item = [];

var total_item = (item1, item2) => (new_item = item1.concat(item2));//(item1 + item2);
console.log(total_item(first_array, second_array));
console.log(new_item);

// ANOTHER WAY -- we can put or pass an arrow function as a parameter for another function
const number_array = [-2, 2.2, 3, 4.5, 5, 6, 7.5, 8, 9, 10.0];

const squared_number = (s_list) => {
    const squared_list = s_list.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squared_list;
}

const squared_list = squared_number(number_array);
console.log(squared_list);


// a function that has a default argument value
const increasing = (num, val = 1) => {return num + val; };
console.log(increasing(10, 5));

// a function that takes unknown arguments using the Rest operator 
const sum = (...args) => args.reduce((a, b) => a + b, 0); 
// the 0 above indicates what the count number or sum begins from  

// we can input multiple arguments without specifying a variable for each of them because of the (...) - rest operator 
console.log(sum(2,2,6,10,50));


// a function within an object 
const bike = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
}

// a concise way to do this ..
const bicycle = {
    gear: 2,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
}

bicycle.setGear(3);

console.log("............................................");
console.log(bicycle.gear);
