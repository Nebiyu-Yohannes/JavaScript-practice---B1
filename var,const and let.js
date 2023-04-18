// this is a way to catch unsafe actions
"use strict";

// the difference between let and const 
let the_variable = "Hey";
let second_var;

const CONSTANT_VARIABLE = "Hello"; // read only variable .. can't modify later

// to change a variable declared with the let keyword
the_variable = "HI"; // we don't use let

const MATH_CONSTANTS = {
    PI: 3.14
};

function trial(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    //Object.freeze(MATH_CONSTANTS);
    
    try {
        MATH_CONSTANTS.PI = 100;
        console.log("taken")       
    } catch (ex) {
        console.log("exceptions");
    }
    return MATH_CONSTANTS;
}


console.log(trial());
