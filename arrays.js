// declaring array and nested or multi- dimensional arrays as well as working and modifying our arrays

// declaring a global variable
var updated_array;

function first_array(){
    array1 = ["Nebiyu", 2000, "Ethiopian"];
    for (items in array1){
        console.log("\t" + array1[items]);
    }
    return items;  
}
//console.log("Citizen information:- ")
//first_array()

// using push, pop, shift and unshift
function second_array(){
    array2 = [["Messi", 30, "PSG"], 
    ["Rashford", 10, "MUD"], 
    ["Neymar", 10, "PSG"], 
    "Ronaldo", "mbappe", "sancho"];

    var Messi;
    // using index to find the elements 
    Messi = array2[0][0]; 
    console.log(Messi);

    updated_array = array2;
    console.log(updated_array);
    // pushing elements to the end of the array
    updated_array.push("sanchez", "hazard");
    console.log(updated_array);
    // popping the added elements from the end of the array
    updated_array.pop();
    updated_array.pop();
    console.log(updated_array);
    // removing an element from the beginning of the array 
    updated_array.shift();
    console.log(updated_array);
    // adding back the element to the beginning of the array 
    updated_array.unshift(["Messi", 30, "PSG"]);
    console.log(updated_array);

    return updated_array;
}

function third_array(){
    test_arr = ["neb", 23, "eth"];
    console.log(test_arr);
    var str_arr = JSON.stringify(test_arr);
    console.log(str_arr);
}

//second_array()
third_array(); // it even includes the little details such as the braces and the commas 
