function a_queue(array, item){
    // this pushed the item into the queue/ array 
    array.push(item);

    // this removes the first element and returns that returned value
    return array.shift(); 
}

var test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var first_number;

// this is the look of the array before the function runs
str_test_array = JSON.stringify(test_array);
console.log("Before: " + str_test_array);

// this is the return value of the function or also the first number
first_number = a_queue(test_array, 11);
console.log("This is the first number: " + first_number);

// this is the look of the array after the function runs 
str_test_array = JSON.stringify(test_array);
console.log("After: " + str_test_array);
