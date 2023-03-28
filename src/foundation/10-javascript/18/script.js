let weight;

console.log(typeof weight);

let name = 'Adam';
let age = 27;
let stars = 4.5;
let isSubscribed = true;

let student = {};

console.log(typeof student);

student = {
  name: name,
  age: age,
  stars: stars,
  isSubscribed: isSubscribed,
  weight: 67.9
};

console.log(student);


console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`);

let students = [];

students.push(student);
console.log(students[0]);

const john = {
  name: 'John',
  age: 17,
  stars: 4.8,
  isSubscribed: false,
  weight: 81.9
};

students.push(john);
console.log(students);

console.log(a);
var a = 1;
