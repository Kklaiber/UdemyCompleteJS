//Lecture 104 Var declaration with let and const

//ES5
var name5 = "Jane Smith";
var age5 = 26;
name5 = "Jane Miller";

// console.log(name5);

//ES6

const name6 = "Jane Smith";
let age6 = 23;
// name6 = "Jane Miller";
// console.log(name6);

//ES5

function driversLicense(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var yob = 1990;
  }
  // console.log(firstName + ', born in ' + yob + ' can now drive a car.')
}

driversLicense(true);

//ES6

function driversLicense6(passedTest) {
  //let is block scoped, and var is function scoped. if i want to use
  //let outside the block i need to declare it outside of the block and
  //define it inside the block. With const, it has to be defined outside the block

  let firstName;
  const yob = 1990;

  if (passedTest) {
    firstName = "John";
  }
  // console.log(firstName + ', born in ' + yob + ' can now drive a car.')
}

driversLicense6(true);

var i = 23;

for (var i = 0; i < 5; i++) {
  // console.log(i);
}

//Lecture 105 BLOCKS AND IIFE's

//ES5 IIFE

(function() {
  var c = 3;
})();

// console.log(c);

//A block is the ES6 version of an IIFE. to make a block just use {} bracket
//and write your code inside

{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a + b);
// console.log(c); //var is not block scoped so it is accesible outside the scope

//LECTURE 106: STRINGS IN ES6/ES2015

let firstName = "Kyle";
let lastName = "Klaiber";
const yob = 1984;

function calcAge(year) {
  return 2018 - year;
}

//ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yob +
    ". Today he is " +
    calcAge(yob) +
    " years old."
);

//ES6
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yob}. Today he is ${calcAge(
    yob
  )} years old.`
);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith("K"));
console.log(n.endsWith("er"));
console.log(n.includes("lai"));
console.log(firstName.repeat(7));
//how to add space in repeat
console.log(`${firstName} `.repeat(7));