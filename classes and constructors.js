// using classes 


// classes to define a constructor function

// traditional method
function space_planets(target_planet){
    return target_planet;
}

console.log(space_planets("Earth"));

// another traditional method
const space = function(target_planet) {
    this.tar_plan = target_planet;
}
var planet = new space("Jupyter");

console.log(planet.tar_plan);
//console.log(space("Earth"));



// using class

// create a class
class SpaceSat { 
    // a constructor with arguments for the class 
    constructor(target_planet, planet_size, planet_no){
        // creating a field for the class and assigning it to a value /in this case the arguments/
        this.tar_plan = target_planet;
        this.plan_size = planet_size;
        this.plan_no = planet_no;
    }

    // creating methods that return the required field's vale of our instance
    get_target_planet() {
        return this.tar_plan;
    }
    get_target_size() {
        return this.plan_size;
    }
    get target_no() {
        return this.plan_no;
    }

    // creating methods that set the field's value of our instance
    set_target_planet(a_target_planet){
        this.tar_plan = a_target_planet;
    }
    set_planet_size(a_planet_size){
        this.plan_size = a_planet_size;
    }
    set_planet_no(a_planet_no){
        this.plan_no = a_planet_no;
    }
    
}

// creating an instance of the class SpaceSat   
var big_planet = new SpaceSat("SATURN", "in billions of km", "5th planet");
var small_planet = new SpaceSat();

console.log("...............................................");

console.log(big_planet.get_target_planet()); 
console.log(big_planet.get_target_size());
console.log(big_planet.target_no);

small_planet.set_target_planet("Earth");
small_planet.set_planet_size("within millions of kms");
small_planet.set_planet_no("3rd planet");

console.log(".....................................................");

console.log(small_planet.get_target_planet());
console.log(small_planet.get_target_size());
console.log(small_planet.target_no);