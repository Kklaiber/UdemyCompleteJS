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
        "This is box numbereeeee " + self.position + " and it is " + self.color;
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

box6.clickMe();

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

function Person(names, ages, weight) {
  this.names = names;
  this.ages = ages;
  this.weight = weight;
}

const jerry = new Person("Jerry", 19, "200lbs");

// console.log(`My name is ${this.names}, I am ${this.ages} years old and I weigh ${this.weight}`);

//LECTURE 110: ARRAYS

const boxes = document.querySelectorAll(".box");

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//ES6
var boxesArr6 = Array.from(boxes);

boxesArr6.forEach(cur => (cur.style.backgroundColor = "blue"));

//ES5
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    boxesArr5[i].textContent = "I'm blue";
    boxesArr5[i].style.backgroundColor = "blue";
    continue;
  }
  boxesArr5[i].textContent = "I'm yellow";
}

//ES6
for (const i of boxesArr6) {
  if (i.className.includes("blue")) {
    continue;
  }
  i.textContent = "I changed to blue";
}

// const boxx = document.querySelectorAll('.box');
// const boxArr6 = Array.from(boxx);

// for(const cur of boxArr6){
//     if(cur.className.includes('blue')){
//         continue;
//     }
//     cur.textContent = 'I changed to bluuuue'
// }

//ES5

var ages = [1, 6, 11, 14, 19, 8];

var fullAge = ages.map(function(cur) {
  return cur >= 18;
});
// console.log(fullAge)
// console.log(fullAge.indexOf(true))
// console.log(ages[fullAge.indexOf(true)])

//ES6

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18))

//LECTURE 111: SPREAD OPERATOR

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var tot1 = addFourAges(10, 33, 23, 44);
// console.log(tot1)

//ES5
var ages = [10, 33, 23, 44];

var tot2 = addFourAges.apply(null, ages);
// console.log(tot2);

//ES6
let tot3 = addFourAges(...ages);
// console.log(tot3)

var afcTeams = ["Browns", "Steelers", "Ravens", "Bengals"];
var nfcTeams = ["Chargers", "Rams", "Raiders", "Seahawks"];

var playoffs = [...afcTeams, ...nfcTeams, "Patriots"];

// console.log(playoffs);

const h = document.querySelector("h1");
const bx = document.querySelectorAll(".box");

const all = [h, ...bx];
Array.from(all).forEach(cur => (cur.style.textTransform = "uppercase"));
Array.from(bx).forEach(cur => (cur.style.color = "white"));
h.style.color = "gray";

function records(wins, loss, tie) {
  var perc = Math.round((wins / (wins + loss)) * 100).toFixed(2);
  // console.log(`The Browns record is W-${wins} L-${loss} T-${tie} Percent- ${perc}%`);

  return perc;
}

const browns = records(5, 11, 1);

//LECTURE 112: REST PARAMETERS
//ES5
// function isFullAge5(){
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur){
//         console.log((2019 - cur) >= 18);
//     })
// }

// isFullAge5(1990, 1988, 2011, 2000)

//ES6
// function isFullAge6(...yrs){
//         yrs.forEach(cur => console.log((2019 - cur) >= 18))
// }

// isFullAge6(1990, 2011, 2002, 1999);

function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    // console.log((2019 - cur) >= limit);
  });
}

isFullAge5(5, 1990, 1988, 2011, 2000);

//ES6
function isFullAge6(limit, ...yrs) {
//   yrs.forEach(cur => console.log(2019 - cur >= limit));
}

isFullAge6(21, 1990, 2011, 2002, 1989);

function emotions(joy, ...mood) {
//   mood.forEach(cur => console.log(cur === joy));
}

emotions("happy", "mad", "happy", "sad", "glad", "happy");

//LECTURE 113 DEFAULT PARAMETERS

//ES5
// function HotSauce(name, peppers, from, soldBy){

//     from === undefined ? from = "USA" : from = from;
//     soldBy === undefined ? soldBy = 'Steamin\' Freddies' : soldby = soldBy;

//     this.name = name;
//     this.peppers = peppers;
//     this.from = from;
//     this.soldBy = soldBy;
// }

// var flaminDarts = new HotSauce('Flamin\' Darts', 'Habenero, Ghost Peppers, Chilis')


//ES6

function HotSauce(name, peppers, from = 'USA', soldBy = 'Frankie\'s Sowse'){

        this.name = name;
        this.peppers = peppers;
        this.from = from;
        this.soldBy = soldBy;
    }
    
     var flaminDarts = new HotSauce('Flamin\' Darts', 'Habenero, Ghost Peppers, Chilis')