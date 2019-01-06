var Question = function(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  
  var Question = function(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
  }
  
  var q1 = new Question(
    "What is the tastiest food on this list?", 
    ["Salad", "Tacos", "Carrots"], 
    1);
  
  var q2 = new Question(
    "Who is the best team in the NFL?",
    ["Cleveland Browns", "Pittsburgh Steelers", "Detroit Lions", "Green Bay Packers"],
      0);
  
  var q3 = new Question(
    "What is the capital of California?",
    ["Los Angeles", "Sacramento", "San Francisco", "San Jose"],
    1
  );
  
  var questions = [q1, q2, q3];
  var q = Math.floor(Math.random() * questions.length);
  questions(q);
  
  if(correct === correct){
    console.log("Yes! That's Correct!")
  }else{
    console.log("Sorry, try again! :D")
  }
  
  
  var q1 = new Question(
    "What is the tastiest food on this list?", 
    ["Salad", "Tacos", "Carrots"], 
    1);
  
  var q2 = new Question(
    "Who is the best team in the NFL?",
    ["Cleveland Browns", "Pittsburgh Steelers", "Detroit Lions", "Green Bay Packers"],
      0);
  
  var q3 = new Question(
    "What is the capital of California?",
    ["Los Angeles", "Sacramento", "San Francisco", "San Jose"],
    1
  );
  
  var questions = [q1, q2, q3];
  var q = Math.floor(Math.random() * questions.length);
  questions(q);
  
  if(correct === correct){
    console.log("Yes! That's Correct!")
  }else{
    console.log("Sorry, try again! :D")
  }
  