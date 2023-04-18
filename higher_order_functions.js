
// ANOTHER WAY -- we can put or pass an arrow function as a parameter for another function
const number_array = [-2, 2.2, 3, 4.5, 5, 6, 7.5, 8, 9, 10.0];

const squared_number = (s_list) => {
    const squared_list = s_list.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squared_list;
}

const squared_list = squared_number(number_array);
console.log(squared_list);


// a function that has a default argument value
const increasing = (num, val = 1) => { return num + val; };
console.log(increasing(10, 5));

// a function that takes unknown arguments using the Rest operator 
const sum = (...args1) => args1.reduce((a, b) => a + b, 0);
// the 0 above indicates what the count number or sum begins from  

// we can input multiple arguments without specifying a variable for each of them because of the (...) - rest operator 
console.log(sum(2, 2, 6, 10, 50));

// using the spread operator to split and copy an arrray
array_one = [1, 2, 3, 4, 5, 45];

// using the spread operator /.../
const array_two = [...array_one]; // copies array_one onto a new array.

array_one[0] = 12;

// they are not the same array!
console.log(array_one);
console.log(array_two);
