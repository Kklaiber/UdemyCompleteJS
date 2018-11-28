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
    // console.log(retirementAge - age + yearsRemaining);
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
      //   console.log(name + ", what do you like most obout UX design?");
    } else if (job === "optician") {
      //   console.log(name + ", what is your favorite kind of glasses?");
    } else {
      //   console.log("Hi " + name + ", what do you do for work?");
    }
  };
}

interviewQuestion("designer")("Kyle");
interviewQuestion("optician")("Michelle");
interviewQuestion("busser")("Billy");

function favoriteTeam(team) {
  return function(name) {
    if (team === "Browns") {
      // console.log('Hi ' + name + '! I could tell you\'re smart! My favorite team is the Browns too!');
    } else if (team === "Steelers") {
      // console.log('Hi ' + name + ', I\'m sorry you like the Steelers...were you not loved as a baby?' );
    } else {
      // console.log('Hi ' + name + '! Who is your favorite team?')
    }
  };
}

favoriteTeam("Browns")("Michelle");
favoriteTeam("Steelers")("Silly Billy");
favoriteTeam("Jets")("Barry");

//Lecture 69 Bind, call and apply methods

var joe = {
  name: "Joe Shmoe",
  age: 33,
  job: "Pilot",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
    //   console.log(
    //     "Good " +
    //       timeOfDay +
    //       " ladies and gentlemen! My name is " +
    //       this.name +
    //       " I'm a " +
    //       this.job +
    //       " and I'm " +
    //       this.age +
    //       " years old."
    //   );
    } else if (style === "friendly") {
    //   console.log(
    //     "Hey what's up guys?! This is " +
    //       this.name +
    //       ". I'm a bit tired because I've been at work all day. I'm an " +
    //       this.job +
    //       " and I love it! Have a great " +
    //       timeOfDay +
    //       "!"
    //   );
    }
  }
};

var michelle = {
  name: "Michelle",
  age: 27,
  job: "Optician"
};

var steve = {
    name: "Steve",
    age: 45,
    job: "Mechanic"
}

joe.presentation("formal", "afternoon");
//Method borrowing...we use the presentation from the joe object and set the this var
// from the var michelle in the first argument, then friendly, and night
joe.presentation.call(michelle, "friendly", "night");
joe.presentation.call(steve, 'friendly', 'night');

//You can also use apply. Which takes in an array. It wont work for our example
// but would look like this
// joe.presentation.apply(michelle, ['formal', 'afternoon']);

//bind method RETURNS A FUNCTION. It doesnt immediately call the function like call 
//does. Instead it generates a copy of the function so we can store it. So we will 
//store the copy of the function inside a function so we can access it. This is 
// called Currying.

var joeFriendly = joe.presentation.bind(joe, 'friendly');
var michelleFormal = joe.presentation.bind(michelle, 'formal');
joeFriendly('afternoon');
michelleFormal('evening');

var years = [1988, 1990, 1984, 2007, 2013, 2001, 1978];

function arrayCalc(arr, func){
    var legalAgeArray = [];
    for(var i = 0; i < arr.length; i++){
        legalAgeArray.push(func(arr[i]));
    }
    return legalAgeArray
}

function calculateAge(el){
    return 2018 - el
};

function isLegalAge(limit, el){
    return el >= limit
};

var ages = arrayCalc(years, calculateAge);
var legalAgeJapan = arrayCalc(ages, isLegalAge.bind(this, 20));

// console.log(ages)
// console.log(legalAgeJapan)


