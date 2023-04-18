// using of template literals

// creating a string using template literals
const a = 2;
const hello = `this is the number two ${a}`;
console.log(hello);


// creating an object with arrays
const result = {
    passed: ["Nebiyu", "Nati", "Kalish"],
    failed: ["Abdu", "Beka", "Stiv"],
    skipped: ["Nation", "Numa", "Frank"]
};

// creating a list from an array object using template literals
function makeList(arr){
    const display_list = [];
    for (let i = 0; i < arr.length; i++){
        display_list.push(`<li class= "success">${display_list[i]}</li>`);
        console.log(display_list[i]);
    }
    return display_list;
}

makeList(result.passed);