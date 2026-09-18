//START
//Create getComputerChoice function
//Create Computer Choice variable
//Assign Math.random to generate three random number btn 1 to 3 then add 3 to randomly generate three choices
//Round off to whole number
//If computer choice = 1 then assign rock to result
//Else if compChoice =2 assign  Scissors to result
//Else compchoice =3 assign Paper to result


function getComputerChoice(){

let compChoice = Math.floor(Math.random() *3 + 1);
let result;
if(compChoice===1){
    result= "Rock";
}
else if(compChoice===2){
    result= "Scissors";
}
else{
    result="Paper";
}
return result;
}

//To get human choice
//Declare the getHumanChoice function
//Create a new variable  called humanChoice
//Prompt the user for the input and store it in humanChoice variable

function getHumanChoice(){
    let humanChoice=prompt("Let's play rock paper scissors game. Your turn to choose:",'');
    return humanChoice;
}

let humanScore=0;
let computerScore=0;

function playRound(compChoice=getComputerChoice(),humanChoice=getHumanChoice()){
    humanChoice= humanChoice.toUpperCase();

   if(humanChoice==="ROCK"){
        if(compChoice==="Paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }

        else if(compChoice==="Scissors"){
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }else{
            console.log("You draw!");
        }
   }else if(humanChoice==="PAPER"){
        if (compChoice==="Scissors"){
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
        else if(compChoice==="Rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        }else{
            console.log("You draw!");
        }

   }
   
   else if (humanChoice==="SCISSORS") {
        if(compChoice==="Rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++
        }
        else if(compChoice==="Paper"){
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }else {
            console.log("You draw!");
        }
    }
    
}
function playGame (){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your Score: ${humanScore}`);

}
playGame();