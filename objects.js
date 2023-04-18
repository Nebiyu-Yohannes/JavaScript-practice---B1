// creating an object -- similar to a dictionary or a map 
var person_object = {"name": "Nebiyu", 
                    "age": 23, 
                    "country": "Ethiopian", 
                    "city": "Addis-Ababa"};
var val;

function object_operator(val){

    first_name = person_object.name;
    first_age = person_object["age"];
    console.log("the name is: " + first_name + " and they are " + first_age + " years old.");
    
    person_object.city = "Dire-Diwa";
    person_object.job = "student";
    person_object.last_name = "yohannes";
    console.log(person_object);

    person_object["middle_name"] = "Taye";
    console.log(person_object);

    result = person_object[val];

    return result;

}

console.log(object_operator("city"));