/*let*/ age = 20;
var course ="BBIT";
const university="Strathmore ";

//redeclaire
/*let*/ age = 40;

course ="BCOM";

if(true){
 let time="11:30";
 var day ="4th ";
 const year = 2026;


}
//console.log(time);
//console.log(day);
//console.log(year);

/**
 * This function calculates the area of a rectangle
 * @param {int} height
 * @param {int} width
 * @returns {int} area 
 */ 
function calculateArea(height, width){
    if(height==null){
  console.log('height missing!')

    }else if(width==null){
  console.log('width missing!')

    }else{
  let area = height * width;
  return area;

    }
    
   

 //console.log("function calculateArea")
// alert("Function called/executed")
 }

console.log(calculateArea(20,3));
console.log(calculateArea(20));
console.log(calculateArea());

const add =function add(number_1, number_2){
  return number_1 + number_2;

}
console.log(add(4,2));

const multiply = (x,y) => x*y;
console.log(multiply(2,5));