/* 
1. ask at least 5 questions
2. track number of correct answers
3. provide number of correct answers at the end of questions
4. rank player - 5 correct = gold crown, 3-4 silver crown, 1-2 bronze crown, 0 correct no crown
*/

//LESLIE'S SOLUTION
//var correctAnswer = false;
//var numberCorrect = 0;
//
//var answer1 = prompt("How do Nancy and Hopper contact the boys while they're in hiding? (season 1)");
//if (answer1.toUpperCase() === "WALKIE TALKIE") {
//  correctAnswer = true;
//  numberCorrect += 1;
//  alert("That is correct!") 
//}
//else {
//  alert("Sorry. The answer is: walkie talkie");
//}
//
//var answer2 = prompt("Where does Hopper find 1,500lbs of de-icing salt?");
//if (answer2.toUpperCase() === "MIDDLE SCHOOL") {
//  correctAnswer = true;
//  numberCorrect += 1;
//  alert("That is correct!") 
//}
//else {
//  alert("Sorry. The answer is: the middle school");
//}
//
//var answer3 = prompt("Who was the first to enter the Upside Down by choice?");
//if (answer3.toUpperCase() === "NANCY") {
//  correctAnswer = true;
//  numberCorrect += 1;
//  alert("That is correct!") 
//}
//else {
//  alert("Sorry. The answer is: Nancy");
//}
//
//var answer4 = prompt("Dustin is able to lure Dart out of his house with what food?");
//if (answer4.toUpperCase() === "BOLOGNA") {
//  correctAnswer = true;
//  numberCorrect += 1;
//  alert("That is correct!") 
//}
//else {
//  alert("Sorry. The answer is: Bologna");
//}
//
//var answer5 = prompt("Who does Eleven end up knocking out during a fight?");
//if (answer5.toUpperCase() === "LUCAS") {
//  correctAnswer = true;
//  numberCorrect += 1;
//  alert("That is correct!") 
//}
//else {
//  alert("Sorry. The answer is: Lucas");
//}
//
//var finalScore = numberCorrect;
//
//if(finalScore === 5) {
//  alert("You got " + numberCorrect + " answers correct and you win the gold crown!");
//} 
//else if(finalScore === 3||4) {
//  alert("You got " + numberCorrect + " answers correct and you win the silver crown!");
//}
//else if(finalScore === 1||2) {
//  alert("You got " + numberCorrect + " answers correct and you win the bronze crown!");
// } 
//else {
//  alert("You got " + numberCorrect + " answers correct. You didn't win anything. Go watch Stranger Things again.");
//}

// I am still getting the silver crown for zero correct answers. Why?

//DAVE'S SOLUTION

//Define number correct
var numberCorrect = 0;

//Ask questions
var answer1 = prompt("How do Nancy and Hopper contact the boys while they're in hiding? (season 1)");
if (answer1.toUpperCase() === "WALKIE TALKIE") {
  numberCorrect += 1;
}
var answer2 = prompt("Where does Hopper find 1,500lbs of de-icing salt?");
if (answer2.toUpperCase() === "MIDDLE SCHOOL") {
  numberCorrect += 1;
}
var answer3 = prompt("Who was the first to enter the Upside Down by choice?");
if (answer3.toUpperCase() === "NANCY") {
  numberCorrect += 1;
}
var answer4 = prompt("Dustin is able to lure Dart out of his house with what food?");
if (answer4.toUpperCase() === "BOLOGNA") {
  numberCorrect += 1;
}
var answer5 = prompt("Who does Eleven end up knocking out during a fight?");
if (answer5.toUpperCase() === "LUCAS") {
  numberCorrect += 1;
}
//
////output results
//document.write("<p>You got " + numberCorrect + " out of 5 questions correct.</p>");

//output rank
if(numberCorrect === 5) {
  alert("You got " + numberCorrect + " answers correct and you win the gold crown!");
} 
else if(numberCorrect >= 3) {
  alert("You got " + numberCorrect + " answers correct and you win the silver crown!");
}
else if(numberCorrect >= 1) {
  alert("You got " + numberCorrect + " answers correct and you win the bronze crown!");
 } 
else {
  alert("You got " + numberCorrect + " answers correct. You didn't win anything. Go watch Stranger Things again.");
}



