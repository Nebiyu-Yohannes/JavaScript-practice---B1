// this is a profile look up program 

// this is the contacts array that holds different objects/contacts  
var contacts = [
    {   "first_name": "Nebiyu", 
        "last_name": "Yohannes", 
        "phone_number": "0910052722", 
        "likes": ["music", "movies", "soccer"] 
    },
    {
        "first_name": "Nahom",
        "last_name": "Tewodrose",
        "phone_number": "0930902116",
        "likes": ["codding", "playstation", "femme"]
    },
    {
        "first_name": "Beka",
        "last_name": "Dessalegn",
        "phone_number": "0965587112",
        "likes": ["food", "banana", "books"]
    },
    {
        "first_name": "Abdu",
        "last_name": "Mohammed",
        "phone_number": "0991564877",
        "likes": ["anime", "manga", "dogs"]
    }  
];


// we are going to define a function that iterates through the objects and returns the value for the given corresponding name and property


function contact_finder(name, property){
    //if (!contacts.first_name.includes(name)) throw new Error("No such name");
    //if (!contacts.includes(property)) throw new Error("No such property");
    for (i = 0; (i < contacts.length); i++){
        if ((contacts[i].first_name === name)){
                return contacts[i][property] || "No such Property";
            } //else { return "invalid inputs"}
            //return contacts[i][j];
    }
    return "No such Name";
}

var test = contact_finder("Abdu", "last_name");
console.log(test);


console.log(contact_finder("Nebiyu", "last_name"));

console.log(contact_finder("Nebiyu", "likes"));

console.log(contact_finder("Nebiyu", "number"));

console.log(contact_finder("Neba", "likes"));

console.log(contact_finder("Nebiyu", "phone_number"));