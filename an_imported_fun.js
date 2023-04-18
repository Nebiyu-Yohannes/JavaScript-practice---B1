// trying to import a simple function 

// this are what we are importing from the exported_fun file
//import * as FirstOrder from '../exported_fun'
import { sum } from "exported_fun";
import { num1 } from "exported_fun";
import { num2 } from "exported fun";
import { sub } from "exported_fun";


let num1 = 10; let num2 = 20;

console.log(sum(num1, num2));
console.log(sub(num1, num2));