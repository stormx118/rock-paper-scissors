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
            return "lose";
        }

        else if(compChoice==="Scissors"){
            console.log("You win! Rock beats Scissors");
            return "win";
        }else{
            console.log("You draw!");
            return "draw";
        }
   }else if(humanChoice==="PAPER"){
        if (compChoice==="Scissors"){
            console.log("You lose! Scissors beats Paper");
            return "lose";
        }
        else if(compChoice==="Rock"){
            console.log("You win! Paper beats Rock");
            return "win";
        }else{
            console.log("You draw!");
            return "draw";
        }

   }
   
   else if (humanChoice==="SCISSORS") {
        if(compChoice==="Rock"){
            console.log("You lose! Rock beats Scissors");
            return "lose";
        }
        else if(compChoice==="Paper"){
            console.log("You win! Scissors beats Paper.");
            return "win";
        }else {
            console.log("You draw!");
            return "draw";
        }
    }
    
}
function playGame (){
  
    let r1=playRound();
        if(r1==="win"){
            humanScore++;
        }
        else if (r1==="lose"){
            computerScore++;
        }

    let r2=playRound();
        if(r2==="win"){
            humanScore++;
        }else if(r2==="lose"){
            computerScore++;
        }

    let r3=playRound();
        if(r3==="win"){
            humanScore++;
        }else if(r3==="lose"){
            computerScore++;
        }

     let r4=playRound();
        if(r4==="win"){
            humanScore++;
        }else if(r4==="lose"){
            computerScore++;
        }

     let r5=playRound();
        if(r5==="win"){
            humanScore++;
        }else if(r5==="lose"){
            computerScore++;
        }


    
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Your Score: ${humanScore}`);

   

}
playGame();