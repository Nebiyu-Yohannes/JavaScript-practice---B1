// THIS MODEL DOES NOT INCLUDE FREE SHOTS

// 22ft and afar from the basket ==== Three Pointer
// less than 22ft ==== Two Pointer 
// distance <= 2ft and height <= 2ft ===== Lay-Up
// distance = 0 and height = 0 ===== Dunk 

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

function rim_contact(contact){
    if (contact == 0){
        out_contact = basket_point_names[0];
        return out_contact;
    }
    else if (contact == 1){
        out_contact = basket_point_names[1];
        return out_contact;
    }
    else{
        return "invali";
    }
}

function basket_point(distance){
    if (distance < 22){
        out_distance = basket_point_names[3];
        return out_distance;
    }
    else if (distance >= 22){
        out_distance = basket_point_names[2];
        return out_distance;
    }
    else{
        return "Invalid";
    }
}

function close_basket(contact, distance, height){
    if (contact == 0 && distance == 0 && height == 0){
        out_height = basket_point_names[5];
        return out_height;
    }
    else if (contact == (0 || 1) && distance <= 2 && height <= 2){
        out_height = basket_point_names[4];
        return out_height;
    }
    else{
        out_height = basket_point_names[basket_point_names.length - 1];
        return  out_height;
    }
}

function your_question(contact, distance, height){
    output_string = rim_contact() + " " + basket_point() + " " + close_basket()
    return output_string 
}

console.log(your_question(0, 0, 0))
