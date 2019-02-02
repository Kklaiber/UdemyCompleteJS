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
// console.log(
//   "This is " +
//     firstName +
//     " " +
//     lastName +
//     ". He was born in " +
//     yob +
//     ". Today he is " +
//     calcAge(yob) +
//     " years old."
// );

//ES6
// console.log(
//   `This is ${firstName} ${lastName}. He was born in ${yob}. Today he is ${calcAge(
//     yob
//   )} years old.`
// );

const n = `${firstName} ${lastName}`;

// console.log(n.startsWith("K"));
// console.log(n.endsWith("er"));
// console.log(n.includes("lai"));
// console.log(firstName.repeat(7));

//how to add space in repeat
// console.log(`${firstName} `.repeat(7));

//LECTURE 107 ARROW FUNCTIONS

const years = [1990, 1945, 1998, 1977];

//ES5

var ages5 = years.map(function(el) {
  return 2019 - el;
});

// console.log(ages5)

//ES6
let ages6 = years.map(el => 2019 - el);
// console.log(ages6)

ages6 = years.map((el, index) => `Ages Element ${index + 1}: ${2019 - el}`);

// console.log(ages6)

ages6 = years.map((el, index, arr) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - el;

  return `Ages Element ${index + 1}: ${age} ${arr}`;
});
// console.log(ages6)

//LECTURE 108 ARROW FUNCTIONS Lexical THIS keyword

//ES5

var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector(".green").addEventListener("click", function() {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  }
};

box5.clickMe();

//ES6

const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};

// box6.clickMe();

const box66 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};

box66.clickMe();

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );

  // console.log(arr)
};

friends = ["bob", "henry", "frank"];

new Person("Kyle").myFriends5(friends);

//ES6

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);

  // console.log(arr)
};

friends = ["bob", "henry", "frank"];

new Person("Jerry").myFriends6(friends);

//LECTURE 109: DESTRUCTURING

//ES5
var john = ["john", 26];
var name = john[0];
var age = john[1];

//ES6
const [title, yobs] = ["Manager", 1999];
// console.log(title);
// console.log(yobs);

const obj = {
  fstName: "Riley",
  lstName: "Klaiber"
};

const { fstName, lstName } = obj;
// console.log(fstName);
// console.log(lstName);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, yearTilRetirement] = calcAgeRetirement(1984);

// console.log(age2);
// console.log(yearTilRetirement);
