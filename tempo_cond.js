var basket_point_names = ["SILENT", "RIM",
    "THREE-POINTER", "TWO-POINTER",
    "LAY-UP", "DUNK", "SHOT"];
var contact; // this is to say if wether or not the ball made contact with the rim
var distance; // this is the distance between the shot and net
var height; // this is the height difference of the player; at release time and the net

var out_contact;
var out_distance;
var out_height;
var output_string = "";


function rim_contact(contact) {
    if (contact == 0) {
        out_contact = basket_point_names[0];
        return out_contact;
    }   else if (contact == 1) {
        out_contact = basket_point_names[1];
        return out_contact;
    }   else {
        return "Invalid";
    }    
}


//console.log(rim_contact(0));

function basket_point(distance) {
    if (distance < 22) {
        out_distance = basket_point_names[3];
        return out_distance;
    }
    else if (distance >= 22) {
        out_distance = basket_point_names[2];
        return out_distance;
    }
    else {
        return "Invalid";
    }
}

//console.log(basket_point(23));

function close_basket(contact, distance, height) {
    if (contact == 0 && distance == 0 && height == 0) {
        out_height = basket_point_names[5];
        return out_height;
    }
    else if (contact == (0 || 1) && distance <= 2 && height <= 2) {
        out_height = basket_point_names[4];
        return out_height;
    }
    else {
        out_height = basket_point_names[basket_point_names.length - 1];
        return out_height;
    }
}

//console.log(close_basket(0, 0, 0));

console.log("THE TYPE OF GOAL IS: " + rim_contact(1) + ", " + basket_point(22) + " & " + close_basket(1, 22, 6));