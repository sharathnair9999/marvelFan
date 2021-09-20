var readlinesync = require('readline-sync')

function welcome(){
  var userName = readlinesync.question("What's your name?")
  console.log("Hey! "+userName+" Welcome to Quiz, Are you Marvel Fan?")
}
 welcome()

var questions = [
  {
    question: `What is Iron Man's real name?`,
    answer : 'Tony Stark'
  },
  {
    question: `What is the name of Thor's Kingdom?`,
    answer:'Asgard'
  },
  {
    question:`What is the name of the place Black Panther belongs to?`,
    answer:'Wakanda'
  },
  {
    question:`How many stones can the Infinity Gauntlet contain?`,
    answer:'Six'
  },
  {
    question:'What is the name of First AI based assistant of Iron man?',
    answer:'Jarvis'
  }
]

var highScores = [
  {
    name:"Rohit",
    score:"3"
  },
  {
    name:"Akshay",
    score:"2"
  }
]

var score = 0;

function play(question, answer){
  var userAnswer = readlinesync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    score+=1;
    console.log("Yes, that's right!")
    console.log("Current score: "+score)
    console.log("---------------------")
  }
  else{
    score-=1;
    console.log("Oops! That's a wrong answer ")
    console.log("The right answer is : "+answer)
    console.log("Current score: "+score)
    console.log("---------------------")
  }
}

function game(){
  for(var i=0;i<questions.length;i++){
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function printScores(){
  console.log("Your final score is : "+score)
  console.log("Check the previous high scores out! Ping me if your score should be displayed")
 highScores.map(person=>{
   console.log(person.name+" : "+person.score)
 })
}

var isExcited = readlinesync.question("Are you excited to play this? (Yes/No) ")
if(isExcited.toUpperCase()==="YES"){
 
  console.log("Well let's get right into the quiz")
  game()
  printScores()

}
else{
  console.log("Uh-Oh!. No problem. Come back later when you are excited enough!")
}

// play this game here: https://replit.com/@SharathNair1/markTwoAssignment?embed=1&output=1#index.js