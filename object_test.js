

var person_object = {
    "name": "Nebiyu",
    "age": 23,
    "country": "Ethiopian",
    "city": "Addis-Ababa"
};

// a function that checks if a property exists in an object
function check_object(check_property){
    if (person_object.hasOwnProperty(check_property)){
        return person_object[check_property];
    } else{
        return  "Does not exist!!";
    }
}


console.log(check_object("country"));
console.log(check_object("occupation"));
console.log(check_object("Country"));


var check_item;
function nested_object(check_item){
    var base_object = {
        "name": {
            "amharic_names": {
                "Nebiyu": "Fortune-teller-Prophet",
                "Kidus": "Saint",
                "Bereket": "Blessing"
            },

            "english names": {
                "JOHN": "Yohannes",
                "ALYSIA": "PROPHET/NEBIY",
                "Betlhem": "city of birth of christ"
            }
        }//,
        /*"nick-name": {

        }*/
    }

    var favorite_name_detail = base_object.name.amharic_names[check_item];

    return favorite_name_detail;
}

console.log(nested_object("Nebiyu"));