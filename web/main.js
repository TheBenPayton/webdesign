console.log("JS active! :)");

//Alert function for the email submit button!!
function func() {
    alert("Thank you for submitting your email! \n I will try to reach you shortly! :)");
}

//Arrow function for getting the current date:
const DATE = () => { return new Date(); }
console.log("Today's date is: " + DATE());

//The 3 functions below here create the guessing game located under the bio section:
function generateRando(){
    var result = Math.floor(Math.random() * 11);
    return result;
}
function guessingGame(userInput, randoNum){
    if (userInput == randoNum) {
        alert("Congrats! You guessed the correct number: " + randoNum);
    } else if (userInput == false) {
        alert("Did you enter a valid digit?\nTry Again!!");
    } else {
        alert("Sorry. You didn't guess correctly :(\nThe correct number was: " + randoNum + "\nYou Guessed: " + userInput);
    }
}
function wholeGame(){
    var userAns = prompt("Please enter a digit 1-10: ");
    guessingGame(userAns, generateRando());
}