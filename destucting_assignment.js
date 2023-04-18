// this is the different applications of destructing assignment 

function destruct_object() {
    object1 = {
        x: 6,
        y: 12,
        z: 18,

        former_values: {
            old_X: 3,
            old_y: 6,
            old_z: 9
        }
    }

    // traditional; assigning variables from object1 
    //var a = object.x;

    // destructing; assigning variables from object1
    const { x: a, y: b, z: c } = object1;

    console.log(c); // should print 18

    // destructing; assigning from the nested object
    const { former_values: { old_x: old_a, old_y: old_b, old_z: old_c } } = object1;

    console.log(old_c); // should print 9
}

//destruct_object();


// use destructing to assign a variable from an array
function destruct_array(){
    const array1 = [1, 2, 3, 4, 6, 8, 10];

    // assigning positional variables to array1
    const [a, b, c] = array1;
    console.log(b); // should print 2

    //skipping the first three elements of array1
    const [, , , d, e, f, g] = array1;
    console.log(g); // should print 10

    const array2 = [...array1]; // we create a copy of array1 using the spread operator
    //console.log(array2);

    var [x, , , , , ,z] = array2;
    console.log(x); // should print first element 1

    // to switch two mutable variables.. the first and the last element
    [x, z] = [z, x];
    console.log(x); // should print the last element, former z = 10
    
    // using spread operator to create copies of array1
    const array3 = [...array1];
    const array4 = [...array1];

    // to assign multiple variable from array3 using the rest operator
    const [first, second, ...rest] = array3;
    console.log(rest); // should print starting from the third element of array3

    const [ , , , ...resting] = array4;
    console.log(resting); // should print from the fourth element if array4

}

destruct_array();


// creating an object of a car's info
const basic_info = {
    name: "Toyota",
    type: "four-wheel",
    max_price: 3000000,
    min_price: 700000,
    place: "Bole",
    stock: 55 

};

// to pass objects as a function parameter using destructing
// can be used in APIs to get a particular data
const half_price = (function () {
    return function half_price(){
        var avg_price = (basic_info.max_price + basic_info.min_price) / 2.0;
        //console.log(avg_price);
        return avg_price;
    }
    
})();

console.log(basic_info);
console.log(half_price(basic_info));

// trying to shorthand the above function 
const half = (function() {
    return function half() { 
        var mean_price = ((basic_info.max_price + basic_info.min_price) / 2.0);
        return (mean_price);
    }
})();

console.log(basic_info);
console.log(half(basic_info));

