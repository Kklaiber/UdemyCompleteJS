//Lecture 104 Var declaration with let and const

//ES5
var name5 = 'Jane Smith';
var age5 = 26;
name5 = "Jane Miller"

// console.log(name5);

//ES6

const name6 = 'Jane Smith';
let age6 = 23;
// name6 = "Jane Miller";
// console.log(name6);


//ES5

function driversLicense(passedTest){

    if(passedTest){
        var firstName = "John";
        var yob = 1990;
    }
    console.log(firstName + ', born in ' + yob + ' can now drive a car.')

}

driversLicense(true);


//ES6

function driversLicense6(passedTest){

    //let is block scoped, and var is function scoped. if i want to use
    //let outside the block i need to declare it outside of the block and 
    //define it inside the block. With const, it has to be defined outside the block

    let firstName;
    const yob = 1990;


    if(passedTest){
        firstName = "John";
    }
    console.log(firstName + ', born in ' + yob + ' can now drive a car.')

}

driversLicense6(true);


var i = 23;

for(var i = 0; i < 5; i++){
    console.log(i);
}

