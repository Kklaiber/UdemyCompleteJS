//Section 5 Lecture 67
//IIFE

//simple game to see if random number is greater than or less than 5
function game() {
  var score = Math.random() * 10;
  // console.log(score >= 5);
}
game();

//Same example but as an IIFE...we use an IIFE for data privacy,
//not reusable code. So if i would place the console log score outside of
//this function it would come back undefined

(function() {
  var score = Math.random() * 10;
  // console.log(score >= 5)
})();

// console.log(score);

//Section 5 Lecture 68
//Closures
//The scope chain is the variables that the function has access to.

function retirement(retirementAge) {
  var yearsRemaining = " years left until retirement.";
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log(retirementAge - age + yearsRemaining);
  };
}

var retirementUSA = retirement(65);
var retirementJapan = retirement(70);
var retirementMexico = retirement(75);

//I can access all of these from the inner function bc of closures.
retirementUSA(1984);
retirementJapan(1982);
retirementMexico(1990);

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", what do you like most obout UX design?");
    } else if (job === "optician") {
      console.log(name + ", what is your favorite kind of glasses?");
    } else {
      console.log("Hi," + name + " what do you do for work?");
    }
  };
}

interviewQuestion("designer")("Kyle");
interviewQuestion("optician")("Michelle");
interviewQuestion("busser")("Billy");
