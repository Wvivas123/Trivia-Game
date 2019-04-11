
var timer = 60;



function timerFunction() {
 setInterval(function() {
    timer--;
    if (timer === 0){
      alert("Out of Time!");
      timer = 60;

    }

 }, 1000);


  setInterval(function() {
    $("#timer").text(timer);
  }, 1000);

}



function stopTimer(){
  setInterval(function() {
     timer = 61;
     if (timer === 0){
       alert("Out of Time!");
       timer = 60;

     }

  }, 1000);
}



function startGame(){
document.getElementById("startGame").style.visibility = "visible";
document.getElementById("startButton").style.visibility = "hidden";
document.getElementById("startGame").style.visibility = "visible";
document.getElementById("finished").style.visibility = "visible";

timerFunction();




}







 function check(){
 var question1 = document.quiz.question1.value;
 var question2 = document.quiz.question2.value;
 var question3= document.quiz.question3.value;
 var question4= document.quiz.question4.value;

 var correct = 0;

   if (question1 == "Hair") {
     correct++;

   }
   if (question2 == "3 years") {
     correct++;
   }
   if (question3 == "Not at all"){
     correct++;
   }
   if (question4 == "Deer"){
     correct++;
   }
   var messages = ["Perfect!", "Needs some work", "Fail"];
   var pictures = ["assets/images/good_job.gif", "assets/images/not_so_good.gif", "assets/images/fail.gif"];
   var range;
   if (correct < 1) {
     range = 2;
   }
   if (correct > 0 && correct < 3){
     range = 1;
   }
   if (correct > 2) {
     range = 0;
   }




 document.getElementById("after_Submit").style.visibility = "visible";

 document.getElementById("message").innerHTML = messages[range];
 document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
 document.getElementById("picture").src = pictures[range];
 }
















//function timerFunction() {
 //setInterval(function() {
    //timer--;
    //if (timer === 0){
    //  alert("out of time!");
    //  console.log(wrongCount);

  //  }
  //}, 1000);
  //setInterval(function() {
  //  $("#timer").text(timer);
  //}, 1000);

//}




































//$(document).ready(function(){


//var options = [
  //{
    //question1: "How long can a snail sleep?",
  //  choice: ["1 Hour", "3 years", "c. 1 day", "d. till the first of the month"],
    //anwser: 1,

  //},
//  {
  //  question2: "How high can elephants jump?",
  //  choice: ["A. 1 inch", "B. 1 foot", "c. 3 feet", "they cant" ],
  //  anwser: 3,
//  },
//  {
  //  question3: "what are rhino horns made of?",
  //  choice: ["bone", "hair", "teeth", "Good vibes"],
  //  anwsers: 1,
  //},
  //{
  //  question4: "What way do bats allways leave a cave",
  //  choice: ["left", "right", "straight", "front door"],
  //  anwser: 0,
  //}];
  //var correctCount = 0;
//  var wrongCount = 0;
//  var unanswerCount = 0;
//  var timer = 20;
//  var intervalId;
//  var userGuess ="";
//  var running = false;
//  var qCount = options.length;
//  var pick;
//  var index;
//  var newArray = [];
//  var holder = [];






//$("#startButton").on("click", function(){
//  $("#startButton").hide();
//  timerFunction();

//});


//function timerFunction() {
//  setInterval(function() {
  //  timer--;
  //  if (timer === 0){
    //  wrongCount++;
    //  console.log(wrongCount);

    //}
  //}, 1000);
//  setInterval(function() {
  //  $("#timer").text(timer);
  //}, 1000);

//}
//function displayQuestions() {
//$("#firstQuestionTag").html(options.question1);
//}

//});



//game logic

//$("#aTag").hover(function() {
//  $(this).fadeOut(100);
//  $(this).fadeIn(500);
//});

//$("#bTag").hover(function() {
  //$(this).fadeOut(100);
  //$(this).fadeIn(500);
//});

//$("#cTag").hover(function() {
  //$(this).fadeOut(100);
  //$(this).fadeIn(500);
//});

//$("#dTag").hover(function() {
  //$(this).fadeOut(100);
  //$(this).fadeIn(500);
//});

//function timerFunction() {
  //setInterval(function() {
    //timer--;
  //}, 1000);
  //setInterval(function() {
    //$("#timer").text(timer);
  //}, 1000);

//}




//load timer for 20 seconds, question and answers. anwsers have hoover function
//if user guesses correct answer you win screen appears global varible is incremented
//if wrong anwser is chossen wrong answer is displayed and global varible is incremented
// if timer runs out display wrong screen increment wrong varible
//after quenstions are finished results are displayed
//if start up button is pressed
