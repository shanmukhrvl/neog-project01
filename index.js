// ex01
// console.log('Shanmukh!')

// ex02
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May i know your name? ');
// console.log(userName);

// ex03
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May i know your name? ');
// console.log(' Welcome ' + username + '!');

// ex04
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('Enter your name: ');
// console.log('Dear ' + userName + ', we are glad that you are here');

//ex05
// var readlineSync = require('readline-sync');
// var myAge = readlineSync.question('Am I older than 21? ');
// if (myAge.toUpperCase() == 'YES') {
//   console.log('You are Right!');
// } else {
//   console.log('You are Wrong!');
// }

// ex06
// var readlineSync = require('readline-sync');
// var score = 0;
// var myAge = readlineSync.question('Am I older than 21? ');
// if (myAge.toUpperCase() == 'YES') {
//   score += 1;
//   console.log('You are Right!');
// } else {
//   console.log('You are Wrong!');
// }
//
// var readlineSync =  require('readline-sync');
// var myPlace = readlineSync.question('Am I from Hyderabad? ');
// if (myPlace.toUpperCase() == 'YES') {
//   score += 1;
//   console.log('You are Right!');
// } else {
//   concole.log('You are Wrong!')
// }
// console.log('Score: ' + score);

// ex07
// function add(numberOne, numberTwo) {
//   result = numberOne + numberTwo;
//   return result;
// }
// add(5,7);

// ex08
// var readlineSync = require('readline-sync');
// var score = 0;
//
// var questionOne = 'Am I older than 21? ';
// var answerOne = 'YES';
//
// function play(question, answer) {
//   var userAnswer = readlineSync.question(question);
//
//   if (userAnswer.toUpperCase() == answer) {
//     score += 1;
//     console.log('You are Right!');
//     console.log('Score: ' + score);
//   } else {
//     console.log('You are Wrong!');
//   }
// }
//
// play(questionOne, answerOne)
//
// var questionTwo = 'Am I from Delhi? ';
// var answerTwo = 'NO';
//
// play(questionTwo, answerTwo);

// ex09
// for(var i = 0; i <= 5; i++) {
//   console.log(i + ' Shanmukh');
// }

// home work: star pattern
// var readlineSync = require('readline-sync');
// var inputVariable = readlineSync.question('Enter input number: ');
// var i;
// for (i = 0; i <= inputVariable; i++) {
//   console.log("*".repeat(i));
// }
// OR
// for (i = 0; i < inputVariable; i++) {
//   var starString = "";
//   for ( var j = 0; j <= i; j++) {
//     starString += '*';   
//   }  
//   console.log(str);
// }

// home work: BONUS
// var readlineSync = require('readline-sync');
// var inputVariable = readlineSync.question('Enter input number: ');
// var i;
// for(i = inputVariable; i > 0; i--) {
//   var starString = '';
//   for(j = 0; j < i; j++) {
//     starString += '*';
//   }
//   console.log(starString);
// }

// ex10 
// var itemsList = ['Milk', 'Cookies', 'Bread', 'Eggs', 'Bananas'];
// console.log(itemsList[0]);
// console.log(itemsList[2]);
// console.log(itemsList[itemsList.length - 1]);

// ex11
// var itemsList = ['Milk', 'Cookies', 'Bread', 'Eggs', 'Bananas'];
// var i;
// for(i = 0; i < itemsList.length; i++) {
//   console.log(itemsList[i]);
// }

// ex12
// var superman = {
//   name: "superman",
//   power: "flight",
//   costumeColor: "blue",
//   strength: 10000,
//   stealth: 0
// }

// var batman = {
//   name: "batman", 
//   power: "martial arts",
//   costumeColor: "black",
//   strength: 100,
//   stealth: 100
// }

// console.log(superman.strength);

// ex13 and ex14
// var readlineSync = require('readline-sync');

// var score = 0;
// var playerName = readlineSync.question("What's your name? ");

// console.log("Welcome " + playerName + " to DO YOU KNOW shanmukh ")

// function play(question, answer) {
//   var playerAnswer = readlineSync.question(question);
//   if (playerAnswer.toUpperCase() === answer.toUpperCase()) {
//     score += 1;
//     console.log('You are right!');
//   } else {
//     console.log('You are wrong!');
//   }
//   console.log('Score: ', score);
// }

// var questions = [{
//   question: "Who is my favourite superhero? ",
//   answer: "Hulk"
// }, {
//   question: "Which is my favourite movie? ",
//   answer: "Fight club"
// }, {
//   question: "Who is my favourite actor? ",
//   answer: "Ben Affleck"
// }, {
//   question: "What is my favourite colour? ",
//   answer: "Red"
// }, {
//   question: "Where do i live? ",
//   answer: "Hyderabad"
// }];

// for (var i = 0; i < questions.length; i++) {
//   var currentQuestion = questions[i];
//   play(currentQuestion.question, currentQuestion.answer);
// }

// ex15
var readlineSync = require('readline-sync');

var score = 0;
var playerName = readlineSync.question("What's your name? ");

console.log("Welcome " + playerName + " to DO YOU KNOW shanmukh ");

console.log("---------------------------");
console.log("LeaderBoard");
console.log("---------------------------");

var highestScores = [
  {
    name: "Charan",
    score: 5
  }, {
    name: "Ramesh",
    score: 5
  }, {
    name:  "Rahul",
    score: 4
  }
];

for (var i = 0; i < highestScores.length; i++) {
  var scoresList = highestScores[i];
  console.log(scoresList.name + ': ' + scoresList.score); 
}

console.log("---------------------------");

function play(question, answer) {
  var playerAnswer = readlineSync.question(question);
  if (playerAnswer.toUpperCase() === answer.toUpperCase()) {
    score += 1;
    console.log('You are right!');
  } else {
    console.log('You are wrong!');
  }
  console.log("---------------------------");
}

var questions = [{
  question: "Who is my favourite superhero? ",
  answer: "Hulk"
}, {
  question: "Which is my favourite movie? ",
  answer: "Fight club"
}, {
  question: "Who is my favourite actor? ",
  answer: "Ben Affleck"
}, {
  question: "What is my favourite colour? ",
  answer: "Red"
}, {
  question: "Where do i live? ",
  answer: "Hyderabad"
}];

for (var j = 0; j < questions.length; j++) {
  var currentQuestion = questions[j];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log('Your Score: ', score);
console.log("Did you beat the score? If you did, please send us the screenshot");
