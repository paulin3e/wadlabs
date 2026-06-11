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


const scores = [45, 56, 67, 67, 78];
//access array_name[index]
//78
console.log(scores[4]);
//67
console.log(scores[2]);
//45
console.log(scores[0]);
//56
console.log(scores[1]);

let student_names = ["omondi","wafula","kiprotich","nyambane","toipan"];

//print out kiprotich on the console window
console.log(student_names[2]);

let governors = [
    [47,"Johnson Sakaja"]
    [1,"Abdullswamad Sherrif"],
    [21,"Irungu Kang'ata"]
];
//The governor of county number 1 is Absulswamad Sherrif
console.log("The governor of county number", governors[1][0],"is",governors[1][1]);

//map(perform an operation on each element)
let doubled = scores.map(x => x * 2); //multiply each scores by 2
console.log(doubled);

//properties
//the class has j students (student_names)
console.log("The class has", student_names.length, "students");

//Kenya has b governors
console.log("Kenya has", governors.length, "governors");

//for in
for(let index in scores){
  console.log(score [index]);
}

//for of
for(let score of scores){
  console.log(score);
}

//for each
scores.forEach(function(score){
  console.log("score: ",score);
});

const studentn= {
  name: "Alice",
  age: 20,
  passed: true,
  grade: 'A',
  "admission number": 193977,
  course: "BBIT",
  group: "2A",
  attendance: 20,
  addAttendance: function(){
    this.attendance = this.attendance + 1;
  }
};

//accessin items
//student name
console.log ('My name is',
  student.name,"from",
  student["admission number"],
  "university"
);

//a method in the object
student.addAttendance(); //add attendance b y 1
console.log(student.attendance); //21

//array of objects 
let bbit_2b = [
  {adm: 223251, name: "Blessing"},
  {adm: 192977, name: "Ryan"},
  {adm: 222024, name: "Ambrose"},
  {adm: 220941, name: "Neema"},
];

//Printout the names of all students in bbit 2b using a loop 
bbit_2b_students.forEach(function(student){
  console.log(student.name);
});


//show looping of objects
//getting keys
console.log(student.keys())
//getting the values of an object of an array
console.log(student.values())

//getting both keys and values
console.log(student.entries())