//Section 5 Lecture 61: Function Constructors

var john = {
  name: "John",
  yearOfBirth: 1982,
  job: "Plumber"
};

//Function Constructor...constructors are capitalized like the P in Person
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//The protoype property enables us to use inheritance. Here we give all the instances
//access to this method Even tho the Person object doesnt
//have the calAge function in it, the new instances all have access to it because of
//inheritance from the prototype property
Person.prototype.calAge = function() {
  //   console.log( 2018 - this.yearOfBirth + ' years is ' + this.name + '\'s age');
};

//You can also add properties to the prototype property.
Person.prototype.lastName = "Smith";

var john = new Person("John", 1982, "Plumber");
var billy = new Person("Billy", 1988, "Teacher");
var susie = new Person("Susie", 1991, "Receptionist");
john.calAge();
billy.calAge();
susie.calAge();

//Lecture 63 Object.create

var personProto = {
  calcAge: function() {
    // console.log(2018 - this.yob);
  }
};

var bobby = Object.create(personProto);
(bobby.name = "Bobby"), (bobby.yob = 1981), (bobby.job = "Bus Driver");

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yob: { value: 1978 },
  job: { value: "Chef" }
});

//Lecture 64 Primitives vs Objects

// Variables containing primitives (ie, strings, numbers, booleans, undefined, null)
// actually hold that data inside the variable itself. Variables associated with objects
// don't actually contain the object, instead they contain a reference to the place
// in memory where the object sits, where the object is stored. in other words, the
// var points to where the object is stored.

//Primitives
var a = 23;
var b = a;
a = 46;

// console.log(a,b)
//Since b is not changed when we change a after declaring b, it shows that each var
//actually hold a copy of the data, they dont reference anything

//Objects
var obj1 = {
  name: "Riley",
  age: 2
};
var obj2 = obj1;

obj1.age = 4;
// console.log(obj1.age, obj2.age)
//But here when we change obj.age to 4 it actually changes obj2's age to 4 as well.
// it's because i didnt actually make a new object with obj2, it was only referencing,
// or pointing to obj1

//Functions

var age = 34;
var obj = {
  name: "Tyler",
  city: "New York City"
};

function change(a, b) {
  (a = 45), (b.city = "Redding");
}

change(age, obj);
// console.log(age, obj.city);
//Here we passed a primitive and a object into the change function...but you can see
// that only the city was changed because when we pass the primitive into the function
// a simple copy is created, so we can change a (or a primitive) as much as we want
// and it will never affect the var on the outside. But when we pass the object in, its
// not really the object that we pass into the function but the REFERENCE
// that POINTS to the object. SO when we change to object inside of the function it is
// still reflected outside of the function

//Lecture 65 Passing Functions as Arguments

//  A function is an instance of an Object type. And because of that it behaves just like
//  any other Object. We can store functions in a variable. We can pass a function
//  as an argument to another function. And we can also return a function from a function
//  . And because of all of this, in JS we say these are First-Class functions.

var years = [1991, 1999, 2001, 1984, 1979, 1951, 1944];

function arrayCal(arr, fn) {
  var arrayRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrayRes.push(fn(arr[i]));
  }
  return arrayRes;
}

function calculateA(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function oldEnoughToRetire(el) {
  return el >= 65;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}
var ages = arrayCal(years, calculateA);
// var retirementAge = arrayCal(ages, oldEnoughToRetire);
// console.log(retirementAge);
var rates = arrayCal(ages, maxHeartRate);
// console.log(rates);
var fullAges = arrayCal(years, isFullAge);
// console.log(fullAges);
// console.log(ages);

//Lecture 66 FUNCTIONS RETURNING FUNCTIONS

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      // console.log(name + ", what is your favorite part of design?");
    };
  } else if (job === "developer") {
    return function(name) {
      // console.log(name + ", what is your favorite framework?");
    };
  } else {
    return function(name) {
      // console.log(name + ", are you currently working?");
    };
  }
}

var designerQuestion = interviewQuestion("designer");
designerQuestion("Roger");

var developerQuestion = interviewQuestion("developer");
developerQuestion("Bill");

function favoriteSport(sport) {
  if (sport === "baseball") {
    return function(favTeam) {
      // console.log('My favorite sport is ' + sport +
      // ' and my favorite team is the ' + favTeam + '!');
    };
  } else if (sport === "basketball") {
    return function(favTeam) {
      //   console.log('My favorite sport is ' + sport +
      // ' and my favorite team is the ' + favTeam + '!')
    };
  } else if (sport === "Football") {
    return function(favTeam) {
      //   console.log(sport + ' is my favorite sport and the ' +
      // favTeam + ' are the best team in the NFL!')
    };
  } else {
    console.log("Do you like sports?");
  }
}

var football = favoriteSport("Football")("Browns");
var basketball = favoriteSport("basketball")("Cavs");
var baseball = favoriteSport("baseball")("Indians");

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

(function(goodluck) {
  var score = Math.random() * 10;
  // console.log(score >= 5 - goodluck)
})(2);

// console.log(score);

//Section 5 Lecture 68
//Closures
//The scope chain is the variables that the function has access to.
//Closures are a function with preserved data, so it can be accessed over and over.
// They are built into JavaScript. It is called a closure because the current execution
// context CLOSES IN on the outer variable object, so that it can use it.

function retirement(retirementAge) {
  var string = " years left until retirement. Woohoo!";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
  };
}

var kyleRetirement = retirement(65);
kyleRetirement(1984);

var michelleRetirement = retirement(65);
michelleRetirement(1991);

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      // console.log(name + ", what is your favorite part of design?");
    };
  } else if (job === "developer") {
    return function(name) {
      // console.log(name + ", what is your favorite framework?");
    };
  } else {
    return function(name) {
      // console.log(name + ", are you currently working?");
    };
  }
}

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      // console.log(name + ", what is your favorite part of design?");
    } else if (job === "developer") {
      // console.log(name + ", what is your favorite framework?");
    } else {
      // console.log(name + ", are you currently working?");
    }
  };
}

interviewQuestion("designer")("Herb");
interviewQuestion("developer")("Bernie");

// function interviewQuestion(job){
//   return function(name){
//     console.log(name + ', what is your favorite thing about being a ' + job + "?")
//   }
// }

// var designer = interviewQuestion("designer");
// designer("kyle");

// var teacher = interviewQuestion('teacher');
// teacher('George');

// function retirement(retirementAge){
//   var yearsLeft = ' years left until retirement';
//   return function(yob){
//     var age = 2018 - yob;
//     console.log((retirementAge - age) + yearsLeft)
//   }
// }

// var usaRetirement = retirement(65)(1984)

// function retirement(retirementAge) {
//   var yearsRemaining = " years left until retirement.";
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     // console.log(retirementAge - age + yearsRemaining);
//   };
// }

// var retirementUSA = retirement(65);
// var retirementJapan = retirement(70);
// var retirementMexico = retirement(75);

// //I can access all of these from the inner function bc of closures.
// retirementUSA(1984);
// retirementJapan(1982);
// retirementMexico(1990);

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === "designer") {
//       //   console.log(name + ", what do you like most obout UX design?");
//     } else if (job === "optician") {
//       //   console.log(name + ", what is your favorite kind of glasses?");
//     } else {
//       //   console.log("Hi " + name + ", what do you do for work?");
//     }
//   };
// }

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
};

joe.presentation("formal", "afternoon");
//Method borrowing...we use the presentation from the joe object and set the this var
// from the var michelle in the first argument, then friendly, and night
joe.presentation.call(michelle, "friendly", "night");
joe.presentation.call(steve, "friendly", "night");

//You can also use apply. Which takes in an array. It wont work for our example
// but would look like this
// joe.presentation.apply(michelle, ['formal', 'afternoon']);

//bind method RETURNS A FUNCTION. It doesnt immediately call the function like call
//does. Instead it generates a copy of the function so we can store it. So we will
//store the copy of the function inside a function so we can access it. This is
// called Currying.

var joeFriendly = joe.presentation.bind(joe, "friendly");
var michelleFormal = joe.presentation.bind(michelle, "formal");
joeFriendly("afternoon");
michelleFormal("evening");

var years = [1988, 1990, 1984, 2007, 2013, 2001, 1978];

function arrayCalc(arr, func) {
  var legalAgeArray = [];
  for (var i = 0; i < arr.length; i++) {
    legalAgeArray.push(func(arr[i]));
  }
  return legalAgeArray;
}

function calculateAge(el) {
  return 2018 - el;
}

function isLegalAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var legalAgeJapan = arrayCalc(ages, isLegalAge.bind(this, 20));

// console.log(ages)
// console.log(legalAgeJapan)

//Coding Challenge 7...lecture 71

(function() {
  var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ":" + this.answers[i]);
    }
  };

  // Question.prototype.displayAnswer = function(){
  //   console.log("The correct answer is : " + this.correct);

   
  //   }
  

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log("That's correct! Great Job!");
      sc = callback(true);
    } else {
      console.log("Sorry, the correct answer is: " + this.correct);
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your current score is : " + score);
    console.log("*------------------------------------------*");
  };

  var q1 = new Question(
    "What is the tastiest food on this list?",
    ["Salad", "Tacos", "Carrots"],
    1
  );

  var q2 = new Question(
    "Who is the best team in the NFL?",
    [
      "Cleveland Browns",
      "Pittsburgh Steelers",
      "Detroit Lions",
      "Green Bay Packers"
    ],
    0
  );

  var q3 = new Question(
    "What is the capital of California?",
    ["Los Angeles", "Sacramento", "San Francisco", "San Jose"],
    1
  );

  var q4 = new Question(
    "What is the best programming language?",
    ["Java", "JavaScript", "Ruby", "Python"],
    1
  );

  var q5 = new Question(
    "True or False...JavaScript is the best programming language?",
    ["True", "False"],
    0
  );

  var questions = [q1, q2, q3, q4, q5];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var totalScore = score();

  function nextQuestion() {
    var q = Math.floor(Math.random() * questions.length);
    questions[q].displayQuestion();
    // questions[q].displayAnswer();

    var answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
      questions[q].checkAnswer(parseInt(answer), totalScore);

      nextQuestion();
    }
  }
  nextQuestion();
})();


